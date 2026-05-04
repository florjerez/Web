// Vercel Serverless Function — POST /api/contact
// Reads form submission and forwards to Resend (https://resend.com).
//
// REQUIRED env vars in your Vercel project (Settings → Environment Variables):
//   RESEND_API_KEY   — get one free at https://resend.com (3000 emails/month free)
//   CONTACT_TO       — where enquiries go (e.g. info@florjerezart.com)
//   CONTACT_FROM     — verified sender on Resend (e.g. "Flør Jerez Art <noreply@florjerezart.com>")
//                       During testing you can use "onboarding@resend.dev"
//
// Alternative providers: swap the fetch URL/headers below for SendGrid, Postmark, Mailgun, etc.

export default async function handler(req, res) {
  // CORS / method guard
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  // Vercel auto-parses JSON when Content-Type is set, but be defensive
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const name = String(body.name || '').trim().slice(0, 200);
  const email = String(body.email || '').trim().slice(0, 200);
  const topic = String(body.topic || '').trim().slice(0, 50);
  const message = String(body.message || '').trim().slice(0, 5000);
  const honeypot = String(body.company || '').trim();

  // Honeypot — silently accept and discard
  if (honeypot) {
    return res.status(200).json({ ok: true });
  }

  // Validation
  if (!name || !email || !topic || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return res.status(400).json({ error: 'Invalid email.' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO = process.env.CONTACT_TO || 'info@florjerezart.com';
  const FROM = process.env.CONTACT_FROM || 'onboarding@resend.dev';

  if (!RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY not set — logging submission only');
    console.log('[contact] submission:', { name, email, topic, message });
    // Still return ok so the user isn't blocked; check Vercel logs.
    return res.status(200).json({ ok: true, note: 'logged-only' });
  }

  const topicLabels = {
    purchase: 'Purchasing a work',
    commission: 'A commission',
    exhibition: 'An exhibition or collaboration',
    other: 'Something else',
  };
  const topicLabel = topicLabels[topic] || topic;

  const subject = `[Flør Jerez Art] ${topicLabel} — ${name}`;
  const text = [
    `New enquiry from florjerezart.com`,
    ``,
    `From:    ${name} <${email}>`,
    `Topic:   ${topicLabel}`,
    ``,
    `Message:`,
    message,
  ].join('\n');

  const html = `
    <div style="font-family:-apple-system,Helvetica,Arial,sans-serif;color:#2b3a2a;line-height:1.55;">
      <p style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#6b7a68;margin:0 0 16px;">New enquiry · florjerezart.com</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 16px 6px 0;color:#6b7a68;">From</td><td style="padding:6px 0;"><strong>${escapeHtml(name)}</strong> &lt;<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>&gt;</td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#6b7a68;">Topic</td><td style="padding:6px 0;">${escapeHtml(topicLabel)}</td></tr>
      </table>
      <hr style="border:none;border-top:0.5px solid #d8dcd0;margin:20px 0;" />
      <div style="white-space:pre-wrap;font-size:14px;">${escapeHtml(message)}</div>
    </div>
  `;

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });
    if (!resp.ok) {
      const errText = await resp.text();
      console.error('[contact] Resend error:', resp.status, errText);
      return res.status(502).json({ error: 'Email provider failed.' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] fetch error:', err);
    return res.status(500).json({ error: 'Server error.' });
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
