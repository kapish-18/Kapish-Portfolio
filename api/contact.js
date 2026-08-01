// Vercel Serverless Function — Contact Form Handler
// Deployed automatically at /api/contact
// Stores messages in-memory per invocation (use a DB for persistence)

export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
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

  console.log('📩 New contact message:', entry);

  return res.status(200).json({
    success: true,
    message: "Thanks for reaching out! I'll get back to you soon.",
  });
}
