/**
 * Vercel serverless function to handle contact form submissions
 * Sends email via Resend API (free tier: 100 emails/day)
 */

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message, budget, timeline, location } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Basic spam check (honeypot field)
  if (req.body.website) {
    return res.status(400).json({ error: 'Invalid submission' });
  }

  try {
    // Format email body
    const emailBody = `
New Contact Form Submission from US-1 Pools Website

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'General Inquiry'}

${budget ? `Budget Range: ${budget}` : ''}
${timeline ? `Timeline: ${timeline}` : ''}
${location ? `Location: ${location}` : ''}

Message:
${message}

---
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}
`.trim();

    // Use Resend API if RESEND_API_KEY is set, otherwise use nodemailer fallback
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'US-1 Pools Contact Form <noreply@us1pools.com>',
          to: ['us1pools@gmail.com'],
          reply_to: email,
          subject: `New Contact: ${subject || 'General Inquiry'} - ${name}`,
          text: emailBody
        })
      });

      if (!resendResponse.ok) {
        const error = await resendResponse.json();
        console.error('Resend API error:', error);
        throw new Error('Email service error');
      }
    } else {
      // Fallback: log to console (development)
      console.log('📧 Contact Form Submission (email not configured):\n', emailBody);
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! We\'ll be in touch soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      error: 'Failed to send message. Please call us at (919) 880-4323.'
    });
  }
}
