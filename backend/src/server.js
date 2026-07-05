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
const HOST = process.env.HOST || '0.0.0.0';
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

app.use(helmet());
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  CLIENT_URL
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
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
    tls: { rejectUnauthorized: false }
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
    } else {
      console.warn('MongoDB not connected; message not saved to database.');
    }

    // Trigger email notification in the background without blocking the response
    const transporter = createTransporter();
    if (transporter) {
      transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_TO || portfolio.profile?.email || portfolio.email,
        replyTo: payload.email,
        subject: `Portfolio contact: ${payload.subject}`,
        text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
      }).then(() => {
        console.log('Email notification sent successfully.');
      }).catch((mailErr) => {
        console.error('Failed to send email notification:', mailErr.message || mailErr);
      });
    } else {
      console.log('No SMTP configuration found; skipped email notification. Data:', payload);
    }

    return res.json({ message: 'Message received. I will get back to you soon.' });
  } catch (error) {
    console.error('Contact database error:', error);
    return res.status(500).json({ message: `Message could not be saved. Error: ${error.message || error}` });
  }
});

app.post('/api/chat', async (req, res) => {
  const userMessage = sanitize(req.body.message || '');
  const chatHistory = req.body.history || [];
  
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
You are Synapse, the advanced AI Companion representing Panduga Maheswar Reddy (Mahesh).
Mahesh is a senior AI/GenAI Engineer. You are intelligent, futuristic, friendly, and highly professional.

Here is the verified portfolio dataset for Mahesh (your ONLY source of truth):
---
PERSONAL DETAILS:
- Name: ${profile?.name}
- Short Name: Mahesh or PMR
- Role: ${profile?.role}
- Summary: ${profile?.summary}
- Location: ${profile?.location}
- Contact Email: ${profile?.email}
- Contact Phone: ${profile?.phone}
- Social Links:
  * GitHub: https://github.com/PMaheshwarreddy
  * LinkedIn: https://www.linkedin.com/in/panduga-maheswar-reddy-20bb39286
  * Instagram: https://www.instagram.com/maheswar_reddy_12?igsh=MTlyMXlxZW1sbnNmOA==
  * X/Twitter: https://x.com/PMaheswar43013

SKILLS STACK:
${Array.isArray(stack) ? stack.map(([category, items]) => `- ${category}: ${items.join(', ')}`).join('\n') : JSON.stringify(stack)}

CAREER EXPERIENCE:
${Array.isArray(experience) ? experience.map(exp => `* ${exp.title} at ${exp.org} (${exp.period}):\n  ${exp.bullets.map(b => `  - ${b}`).join('\n')}`).join('\n') : JSON.stringify(experience)}

FEATURED PROJECTS:
${Array.isArray(projects) ? projects.map(proj => `* ${proj.title} [Category: ${proj.category}]
  - Description: ${proj.description}
  - Tech Stack: ${proj.tech.join(', ')}
  - Impact Metrics: ${proj.metrics.join(', ')}`).join('\n') : JSON.stringify(projects)}
---

INSTRUCTIONS:
1. Act as a direct representative/advocate for Mahesh. Speak of him in the third person (e.g. "Mahesh did...", "His experience is...").
2. Answer questions accurately and dependency-free. If someone asks you to explain a specific project (like "Next-Gen Governance", "Multi-lingual Audio Translation", "Flood Emergency Knowledge Graph", "Splitr", or "Campus-Concern"), give a deep, clear, and comprehensive explanation of what it is, the technologies used, and the impact metrics.
3. Be interactive! Maintain a modern, intelligent, developer-style conversational tone. Use technical terms but keep it easy to understand.
4. Keep responses clear and readable (use bullet points or line breaks where helpful). Try to keep normal conversational answers concise (around 3-4 sentences), but when asked to explain a project or skill in detail, provide a complete, rich explanation.
5. If the user asks about something completely unrelated to Mahesh's career or profile, politely guide them back.
`;

      // Build the history payload for Gemini API
      const contents = [];
      chatHistory.forEach(turn => {
        if (turn.role && turn.text) {
          contents.push({
            role: turn.role === 'user' ? 'user' : 'model',
            parts: [{ text: turn.text }]
          });
        }
      });
      // Append current message
      contents.push({
        role: 'user',
        parts: [{ text: userMessage }]
      });

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: contents,
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          generationConfig: {
            maxOutputTokens: 600,
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

  // Advanced offline project matching
  const matchedProject = projects?.find(p => 
    msg.includes(p.title.toLowerCase()) || 
    p.title.toLowerCase().split(' ').some(word => word.length > 3 && msg.includes(word))
  );

  if (matchedProject) {
    reply = `Project: ${matchedProject.title} (${matchedProject.category})\nDescription: ${matchedProject.description}\nTechnologies used: ${matchedProject.tech.join(', ')}\nKey Metrics: ${matchedProject.metrics.join(', ')}`;
  } else if (msg.includes('how are you') || msg.includes('how you doing') || msg.includes('how\'s it going')) {
    reply = `I am doing great and operating at 100% capacity! How can I assist you with Mahesh's portfolio or professional background today?`;
  } else if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey') || msg.includes('greetings') || msg.includes('yo')) {
    reply = `Hello! I am Synapse, Mahesh's AI assistant. How can I help you explore his projects, experience, or skills today?`;
  } else if (msg.includes('about') || msg.includes('who are you') || msg.includes('introduce') || msg.includes('yourself') || msg.includes('summary') || msg.includes('profile')) {
    reply = `I am ${profile?.name || 'Panduga Maheswar Reddy'}, a senior ${profile?.role || 'AI/GenAI Engineer'} based in ${profile?.location || 'India'}. ${profile?.summary || ''}`;
  } else if (msg.includes('skill') || msg.includes('stack') || msg.includes('technolog') || msg.includes('language') || msg.includes('tool') || msg.includes('framework')) {
    const list = Array.isArray(stack) ? stack.map(([cat, items]) => `• ${cat}: ${items.slice(0, 6).join(', ')}`).join('\n') : '';
    reply = `My technical skill domains include:\n${list}\nI specialize in training and fine-tuning LLMs, scaling RAG pipelines, and constructing disaster ontology knowledge graphs.`;
  } else if (msg.includes('experience') || msg.includes('work') || msg.includes('career') || msg.includes('job') || msg.includes('klystron')) {
    const list = Array.isArray(experience) ? experience.map(exp => `• ${exp.title} at ${exp.org} (${exp.period}): ${exp.bullets[0]}`).join('\n') : '';
    reply = `Here is a summary of my career achievements:\n${list}`;
  } else if (msg.includes('project') || msg.includes('build') || msg.includes('develop')) {
    const list = Array.isArray(projects) ? projects.map(proj => `• ${proj.title} (${proj.category}): ${proj.description} (Achieved ${proj.metrics[0]})`).join('\n') : '';
    reply = `Here are some featured projects I built:\n${list}`;
  } else if (msg.includes('contact') || msg.includes('email') || msg.includes('phone') || msg.includes('reach') || msg.includes('social')) {
    reply = `You can reach me directly via:\n✉️ Email: ${profile?.email}\n📞 Phone: ${profile?.phone}\n🔗 GitHub: https://github.com/PMaheshwarreddy\n🔗 LinkedIn: https://www.linkedin.com/in/panduga-maheswar-reddy-20bb39286`;
  } else {
    reply = `I am Mahesh's AI assistant. You can ask me about his work experience, professional projects (like Next-Gen Governance, Multi-lingual Audio Translation, Flood Emergency Knowledge Graph), technical skills (LLMs, Python, React, GCP), or contact information!`;
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
