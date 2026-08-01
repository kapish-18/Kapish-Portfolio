/* ─────────────────────────────────────────
   EXPRESS CONTACT API
   Lightweight backend for recruiter messages.
   Run: npm run server
   ───────────────────────────────────────── */
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// In-memory store (swap for MongoDB in production)
const messages = [];

// POST /api/contact — Recruiter / visitor message submission
app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Name, email, and message are required.',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const entry = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim(),
    company: company?.trim() || '',
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };

  messages.push(entry);
  console.log('📩 New contact message:', entry);

  res.json({
    success: true,
    message: 'Thank you! Your message has been received. I\'ll get back to you soon.',
  });
});

// GET /api/messages — View all messages (for admin/debug)
app.get('/api/messages', (_req, res) => {
  res.json({ count: messages.length, messages });
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`\n🚀 Contact API running on http://localhost:${PORT}`);
  console.log(`   POST /api/contact  — Submit a message`);
  console.log(`   GET  /api/messages — View messages\n`);
});
