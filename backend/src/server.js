import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import nodemailer from 'nodemailer';
import { portfolio } from './data.js';

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '127.0.0.1';
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

app.use(helmet());
app.use(cors({ origin: CLIENT_URL }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

const portfolioSchema = new mongoose.Schema({
  profile: mongoose.Schema.Types.Mixed,
  stats: mongoose.Schema.Types.Mixed,
  projects: mongoose.Schema.Types.Mixed,
  stack: mongoose.Schema.Types.Mixed,
  experience: mongoose.Schema.Types.Mixed,
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

function sanitize(value = '') {
  return String(value).trim().slice(0, 2000);
}

function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return null;

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

app.post('/api/contact', async (req, res) => {
  const payload = {
    name: sanitize(req.body.name),
    email: sanitize(req.body.email),
    subject: sanitize(req.body.subject),
    message: sanitize(req.body.message),
  };

  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    return res.status(400).json({ message: 'Please complete every field' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return res.status(400).json({ message: 'Please enter a valid email address' });
  }

  try {
    if (mongoose.connection.readyState === 1) {
      await ContactMessage.create(payload);
    }

    const transporter = createTransporter();
    if (transporter) {
      await transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_TO || portfolio.profile?.email || portfolio.email,
        replyTo: payload.email,
        subject: `Portfolio contact: ${payload.subject}`,
        text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
      });
    } else {
      console.log('Contact message received:', payload);
    }

    return res.json({ message: 'Message received. I will get back to you soon.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Message could not be sent right now' });
  }
});

app.post('/api/chat', async (req, res) => {
  const userMessage = sanitize(req.body.message || '');
  if (!userMessage) {
    return res.status(400).json({ reply: 'Query message is empty.' });
  }

  let data = portfolio;
  try {
    if (mongoose.connection.readyState === 1) {
      const dbData = await PortfolioData.findOne();
      if (dbData) data = dbData;
    }
  } catch (err) {
    console.warn('Chat API: error reading from DB, falling back to static:', err);
  }

  const { profile, projects, stack, experience } = data;

  if (process.env.GEMINI_API_KEY) {
    try {
      const systemPrompt = `
You are the AI Assistant representing Panduga Maheswar Reddy (Mahesh).
Use the following structured resume/portfolio database as your ONLY source of truth:
Name: ${profile?.name}
Role: ${profile?.role}
Summary: ${profile?.summary}
Location: ${profile?.location}
Email: ${profile?.email}
Phone: ${profile?.phone}
GitHub: https://github.com/PMaheshwarreddy
LinkedIn: https://www.linkedin.com/in/panduga-maheswar-reddy-20bb39286
Instagram: https://www.instagram.com/maheswar_reddy_12?igsh=MTlyMXlxZW1sbnNmOA==
X/Twitter: https://x.com/PMaheswar43013

Tech Stack:
${Array.isArray(stack) ? stack.map(([cat, items]) => `- ${cat}: ${items.join(', ')}`).join('\n') : JSON.stringify(stack)}

Experience:
${Array.isArray(experience) ? experience.map(exp => `- ${exp.title} at ${exp.org} (${exp.period}):\n  ${exp.bullets.join('\n  ')}`).join('\n') : JSON.stringify(experience)}

Projects:
${Array.isArray(projects) ? projects.map(proj => `- ${proj.title} (${proj.category}):\n  Description: ${proj.description}\n  Metrics: ${proj.metrics.join(', ')}\n  Tech: ${proj.tech.join(', ')}`).join('\n') : JSON.stringify(projects)}

Instructions:
- Answer the user's questions truthfully and professionally based on this data.
- Keep your answers concise, clear, and recruiter-friendly (aim for under 3-4 sentences where possible).
- Do not invent any projects, credentials, or achievements that are not listed here.
- If the user asks for something not in the database, politely state that you can only answer questions related to Mahesh's professional profile, skills, and projects.
`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: userMessage }]
          }],
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          generationConfig: {
            maxOutputTokens: 250,
            temperature: 0.3
          }
        })
      });

      if (response.ok) {
        const json = await response.json();
        const reply = json.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply) {
          return res.json({ reply: reply.trim() });
        }
      }
      console.warn('Gemini API call failed or returned empty response, falling back to local NLP.');
    } catch (err) {
      console.error('Error invoking Gemini API:', err);
    }
  }

  const msg = userMessage.toLowerCase();
  let reply = '';

  if (msg.includes('about') || msg.includes('who are you') || msg.includes('introduce') || msg.includes('yourself') || msg.includes('summary') || msg.includes('profile')) {
    reply = `I am ${profile?.name || 'Panduga Maheswar Reddy'}, a senior ${profile?.role || 'AI/GenAI Engineer'} based in ${profile?.location || 'India'}. ${profile?.summary || ''}`;
  } else if (msg.includes('skill') || msg.includes('stack') || msg.includes('technolog') || msg.includes('language') || msg.includes('tool') || msg.includes('framework')) {
    const list = Array.isArray(stack) ? stack.map(([cat, items]) => `• ${cat}: ${items.slice(0, 5).join(', ')}`).join('\n') : '';
    reply = `My technical skill domains include:\n${list}\nI specialize in training and fine-tuning LLMs, scaling RAG pipelines, and constructing disaster ontology knowledge graphs.`;
  } else if (msg.includes('experience') || msg.includes('work') || msg.includes('career') || msg.includes('job') || msg.includes('klystron')) {
    const list = Array.isArray(experience) ? experience.map(exp => `• ${exp.title} at ${exp.org} (${exp.period}): ${exp.bullets[0]}`).join('\n') : '';
    reply = `Here is a summary of my career achievements:\n${list}`;
  } else if (msg.includes('project') || msg.includes('build') || msg.includes('develop') || msg.includes('governance') || msg.includes('translation') || msg.includes('emergency')) {
    const list = Array.isArray(projects) ? projects.map(proj => `• ${proj.title} (${proj.category}): ${proj.description} (Achieved ${proj.metrics[0]})`).join('\n') : '';
    reply = `Here are some featured projects I built:\n${list}`;
  } else if (msg.includes('contact') || msg.includes('email') || msg.includes('phone') || msg.includes('reach') || msg.includes('social')) {
    reply = `You can reach me directly via:\n✉️ Email: ${profile?.email}\n📞 Phone: ${profile?.phone}\n🔗 GitHub: https://github.com/PMaheshwarreddy\n🔗 LinkedIn: https://www.linkedin.com/in/panduga-maheswar-reddy-20bb39286`;
  } else {
    reply = `I am Mahesh's AI assistant. You can ask me about his work experience, professional projects (like Next-Gen Governance, Multi-lingual Audio Translation), technical skills (LLMs, Python, React, GCP), or contact information!`;
  }

  return res.json({ reply });
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
