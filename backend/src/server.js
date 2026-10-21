import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import nodemailer from 'nodemailer';
import { portfolio } from './data.js';
import { answer, dataVersion } from './chat.js';

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

app.set('trust proxy', 1);
app.use(helmet());
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://port-folio-frontend-one.vercel.app',
  ...CLIENT_URL.split(',').map((u) => u.trim()).filter(Boolean),
];
// Only this project's Vercel preview deployments (not every *.vercel.app site)
const previewPattern = /^https:\/\/port-folio-frontend[a-z0-9-]*\.vercel\.app$/;
app.use(cors({
  // Unknown origins simply get no CORS headers (browser blocks them) instead of a 500 error
  origin: (origin, callback) => {
    callback(null, !origin || allowedOrigins.includes(origin) || previewPattern.test(origin));
  },
}));
app.use(express.json({ limit: '50kb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'tiny' : 'dev'));

// Lightweight in-memory rate limiter (no extra dependency)
function rateLimit({ windowMs, max, message }) {
  const hits = new Map();
  return (req, res, next) => {
    const now = Date.now();
    const key = req.ip || 'unknown';
    const entry = hits.get(key);
    if (!entry || now > entry.reset) {
      hits.set(key, { count: 1, reset: now + windowMs });
    } else if (++entry.count > max) {
      return res.status(429).json({ message, reply: message });
    }
    if (hits.size > 5000) {
      for (const [k, v] of hits) if (now > v.reset) hits.delete(k);
    }
    next();
  };
}
const contactLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5, message: 'Too many messages. Please try again later.' });
const chatLimiter = rateLimit({ windowMs: 60 * 1000, max: 15, message: 'Rate limit reached. Please wait a minute and try again.' });

const portfolioSchema = new mongoose.Schema({
  profile: mongoose.Schema.Types.Mixed,
  stats: mongoose.Schema.Types.Mixed,
  projects: mongoose.Schema.Types.Mixed,
  stack: mongoose.Schema.Types.Mixed,
  experience: mongoose.Schema.Types.Mixed,
  achievements: mongoose.Schema.Types.Mixed,
});

const PortfolioData = mongoose.models.PortfolioData || mongoose.model('PortfolioData', portfolioSchema);

async function connectMongo() {
  if (!process.env.MONGODB_URI) {
    console.log('MongoDB not configured; running API without database persistence.');
    return;
  }
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB connected');

  // Synchronize database records with backend data.js configuration
  try {
    const existing = await PortfolioData.findOne();
    if (!existing) {
      await PortfolioData.create(portfolio);
      console.log('Seeded default portfolio data into MongoDB.');
    } else {
      await PortfolioData.updateOne({}, { $set: portfolio });
      console.log('Synchronized portfolio database record with data.js changes.');
    }
  } catch (err) {
    console.error('Error synchronizing portfolio data in MongoDB:', err);
  }
}

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ContactMessage = mongoose.models.ContactMessage || mongoose.model('ContactMessage', messageSchema);

function sanitize(value = '', max = 2000) {
  return String(value ?? '').trim().slice(0, max);
}

function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return null;

  if (SMTP_HOST.includes('gmail.com')) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'pmr-portfolio-api' });
});

app.get('/api/profile', async (_req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const data = await PortfolioData.findOne();
      if (data) {
        return res.json(data);
      }
    }
    return res.json(portfolio);
  } catch (error) {
    console.error('Error fetching profile from MongoDB:', error);
    return res.json(portfolio);
  }
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  // Honeypot field: real visitors never see it, bots fill it in. Pretend success.
  if (req.body?.company) {
    return res.json({ message: 'Thanks! Your message was sent.' });
  }

  const payload = {
    name: sanitize(req.body?.name, 120),
    email: sanitize(req.body?.email, 200),
    subject: sanitize(req.body?.subject, 200),
    message: sanitize(req.body?.message, 2000),
  };

  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    return res.status(400).json({ message: 'Please complete every field' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return res.status(400).json({ message: 'Please enter a valid email address' });
  }

  let saved = false;
  let emailed = false;

  if (mongoose.connection.readyState === 1) {
    try {
      await ContactMessage.create(payload);
      saved = true;
    } catch (error) {
      console.error('Contact: could not save message to MongoDB:', error.message);
    }
  }

  // Await delivery so the message is not dropped after responding
  const transporter = createTransporter();
  if (transporter) {
    try {
      await transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_TO || portfolio.profile.email,
        replyTo: payload.email,
        subject: `Portfolio contact: ${payload.subject}`,
        text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
      });
      emailed = true;
    } catch (mailErr) {
      console.error('Contact: email notification failed:', mailErr.message || mailErr);
    }
  }

  if (!saved && !emailed) {
    // Never tell the visitor "received" when the message was actually lost
    return res.status(503).json({ message: 'Message could not be delivered right now' });
  }
  return res.json({ message: 'Thanks! Your message was sent. I will get back to you soon.' });
});

// Answer cache for first questions (suggestion chips are asked a lot).
// Memory for speed + MongoDB so answers survive restarts and save the daily model quota.
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const answerCache = new Map();
const chatAnswerSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: CACHE_TTL_MS / 1000 },
});
const ChatAnswer = mongoose.models.ChatAnswer || mongoose.model('ChatAnswer', chatAnswerSchema);

async function cacheGet(key) {
  const hit = answerCache.get(key);
  if (hit && Date.now() - hit.at < CACHE_TTL_MS) return hit.text;
  answerCache.delete(key);
  if (mongoose.connection.readyState !== 1) return null;
  try {
    const doc = await ChatAnswer.findOne({ key }).lean();
    if (doc) {
      answerCache.set(key, { text: doc.text, at: new Date(doc.createdAt).getTime() });
      return doc.text;
    }
  } catch (err) {
    console.warn('Chat cache read failed:', err.message);
  }
  return null;
}
function cacheSet(key, text) {
  if (answerCache.size > 500) answerCache.delete(answerCache.keys().next().value);
  answerCache.set(key, { text, at: Date.now() });
  if (mongoose.connection.readyState === 1) {
    ChatAnswer.updateOne({ key }, { $set: { text, createdAt: new Date() } }, { upsert: true })
      .catch((err) => console.warn('Chat cache write failed:', err.message));
  }
}

async function loadPortfolio() {
  try {
    if (mongoose.connection.readyState === 1) {
      const doc = await PortfolioData.findOne().lean();
      if (doc?.profile) return doc;
    }
  } catch (err) {
    console.warn('Chat: DB read failed, using static data:', err.message);
  }
  return portfolio;
}

app.post('/api/chat', chatLimiter, async (req, res) => {
  const message = sanitize(req.body?.message, 500);
  const history = Array.isArray(req.body?.history) ? req.body.history.slice(-10) : [];
  const wantsStream = String(req.headers.accept || '').includes('text/event-stream');

  if (!message) {
    return res.status(400).json({ reply: 'Please type a question.' });
  }

  const data = await loadPortfolio();
  // Cache key includes a hash of the portfolio data, so editing data.js invalidates old answers
  const cacheKey = history.length ? null : `${dataVersion(data)}:${message.toLowerCase().replace(/\s+/g, ' ').replace(/[?!.]+$/, '').trim()}`;
  const cached = cacheKey ? await cacheGet(cacheKey) : null;

  if (!wantsStream) {
    if (cached) return res.json({ reply: cached });
    const result = await answer({ data, message, history });
    if (cacheKey && result.source !== 'offline' && !result.partial) cacheSet(cacheKey, result.text);
    return res.json({ reply: result.text.trim(), source: result.source });
  }

  // Server-Sent Events: each event is {"t": "<text chunk>"}; the last one is {"done": true}
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    'X-Accel-Buffering': 'no',
  });
  res.flushHeaders?.();
  const send = (obj) => res.write(`data: ${JSON.stringify(obj)}\n\n`);

  if (cached) {
    send({ t: cached });
    send({ done: true, source: 'cache' });
    return res.end();
  }

  const ctrl = new AbortController();
  res.on('close', () => { if (!res.writableEnded) ctrl.abort(); });

  try {
    const result = await answer({ data, message, history, signal: ctrl.signal, onToken: (t) => send({ t }) });
    if (cacheKey && result.source !== 'offline' && !result.partial) cacheSet(cacheKey, result.text);
    send({ done: true, source: result.source });
  } catch (err) {
    console.error('Chat error:', err);
    send({ error: 'The assistant hit a problem. Please try again.' });
  }
  res.end();
});

// Always answer with JSON (bad JSON bodies, oversized payloads, unexpected errors)
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  if (status >= 500) console.error('Unhandled error:', err);
  res.status(status).json({ message: status >= 500 ? 'Server error' : 'Invalid request', reply: 'Something went wrong with that request.' });
});

connectMongo()
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
  })
  .finally(() => {
    app.listen(PORT, HOST, () => {
      console.log(`Portfolio API running on http://${HOST}:${PORT}`);
    });
  });
