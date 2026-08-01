// Vercel Serverless Function — Contact Form Handler
// Deployed automatically at /api/contact
// Stores messages in-memory per invocation (use a DB for persistence)

export default async function handler(req, res) {
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

  try {
    // Send email using Brevo API
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: 'Portfolio Contact Form',
          email: 'kapishtickoo.dev@gmail.com' // MUST be your verified Brevo sender email
        },
        replyTo: {
          name: name.trim(),
          email: email.trim() // The person who filled out the form
        },
        to: [{
          email: 'kapishtickoo.dev@gmail.com', // Your email where you want to receive messages
          name: 'Kapish Tickoo'
        }],
        subject: `New Portfolio Message from ${name.trim()}${company ? ` (${company.trim()})` : ''}`,
        htmlContent: `
          <html>
            <body>
              <h2>New Contact Message from Portfolio</h2>
              <p><strong>Name:</strong> ${name.trim()}</p>
              <p><strong>Email:</strong> ${email.trim()}</p>
              <p><strong>Company:</strong> ${company?.trim() || 'N/A'}</p>
              <br/>
              <p><strong>Message:</strong></p>
              <p>${message.trim().replace(/\n/g, '<br/>')}</p>
            </body>
          </html>
        `
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Brevo API Error:', data);
      return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }

    return res.status(200).json({
      success: true,
      message: "Thanks for reaching out! I'll get back to you soon.",
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send message due to a server error.' });
  }
}
