# Deploying to Vercel

This is a static site with one serverless function (`/api/contact`) that handles form submissions.

## 1. Push to Vercel

```bash
# from the project root
vercel
```

Or connect a Git repo to Vercel — it auto-detects this as a static project + functions in `/api`.

## 2. Set environment variables

In your Vercel project → **Settings → Environment Variables**, add:

| Variable          | Value                                                                |
| ----------------- | -------------------------------------------------------------------- |
| `RESEND_API_KEY`  | Your API key from https://resend.com (free tier: 3,000 emails/month) |
| `CONTACT_TO`      | Where enquiries land. `info@florjerezart.com`                        |
| `CONTACT_FROM`    | A **verified** sender address on Resend, e.g. `Flør Jerez Art <noreply@florjerezart.com>` |

### Quick start (no domain yet)

If you haven't set up a custom domain on Resend yet, use:

- `CONTACT_FROM` = `onboarding@resend.dev`

This works immediately for testing. Replies still go to the visitor's email (via the `reply_to` field).

### Production setup (recommended)

1. Add and verify your domain (`florjerezart.com`) on Resend → **Domains**.
2. Add the DNS records Resend gives you (SPF, DKIM) at your domain registrar.
3. Once verified, set `CONTACT_FROM` to e.g. `Flør Jerez Art <noreply@florjerezart.com>`.

## 3. Test

After deploy, visit `https://your-domain.com/#contact`, fill in the form, and submit.
Check:

- Resend dashboard → **Emails** for the outgoing log
- Your inbox (`CONTACT_TO`) for the actual email
- Vercel **Functions** logs if it fails — `[contact]` prefix

## Swapping providers

`api/contact.js` uses Resend's REST API. To switch to SendGrid / Postmark / Mailgun, replace the `fetch('https://api.resend.com/emails', ...)` call with the equivalent for your provider. The validation, honeypot, and field handling stay the same.
