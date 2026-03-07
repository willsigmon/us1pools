/**
 * Vercel serverless function to handle contact form submissions
 * Sends email via Resend API (free tier: 100 emails/day)
 */

import {
  digitsOnly,
  enforceRateLimit,
  isAllowedOrigin,
  isValidEmail,
  jsonError,
  normalizeMultilineText,
  normalizeText,
  setApiHeaders,
} from "./_utils.js";

const ALLOWED_PROJECTS = new Set([
  "Above ground pool",
  "In-ground pool",
  "Hot tub / spa",
  "Service / maintenance",
  "Equipment upgrade",
  "Retail / water testing",
]);

const ALLOWED_BUDGETS = new Set([
  "",
  "Under $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k+",
]);

const ALLOWED_TIMELINES = new Set([
  "",
  "ASAP",
  "Next 1-3 months",
  "Next 3-6 months",
  "Just researching",
]);

export default async function handler(req, res) {
  setApiHeaders(res);
  const isProduction = process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";

  // Only allow POST
  if (req.method !== 'POST') {
    return jsonError(res, 405, 'Method not allowed');
  }

  if (!isAllowedOrigin(req)) {
    return jsonError(res, 403, "Forbidden");
  }

  const rateLimit = enforceRateLimit(req, res, {
    namespace: "contact",
    windowMs: 30 * 60 * 1000,
    maxRequests: 5,
  });
  if (!rateLimit.allowed) {
    return jsonError(res, 429, 'Too many contact requests. Please wait a bit and try again.');
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};
  const {
    name,
    email,
    phone,
    project,
    details,
    budget,
    timeline,
    location,
    install_address: installAddress,
    website,
  } = body;

  const cleanedName = normalizeText(name, 100);
  const cleanedEmail = normalizeText(email, 320).toLowerCase();
  const cleanedPhone = normalizeText(phone, 40);
  const cleanedProject = normalizeText(project, 80);
  const cleanedDetails = normalizeMultilineText(details, 3000);
  const cleanedBudget = normalizeText(budget, 40);
  const cleanedTimeline = normalizeText(timeline, 40);
  const cleanedLocation = normalizeText(location, 120);
  const cleanedInstallAddress = normalizeText(installAddress, 180);

  // Basic validation
  if (!cleanedName || !cleanedEmail || !cleanedPhone || !cleanedProject) {
    return jsonError(res, 400, 'Missing required fields');
  }

  if (!isValidEmail(cleanedEmail)) {
    return jsonError(res, 400, 'Invalid email address');
  }

  const phoneDigits = digitsOnly(cleanedPhone);
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return jsonError(res, 400, 'Invalid phone number');
  }

  if (!ALLOWED_PROJECTS.has(cleanedProject)) {
    return jsonError(res, 400, 'Invalid project type');
  }

  if (!ALLOWED_BUDGETS.has(cleanedBudget) || !ALLOWED_TIMELINES.has(cleanedTimeline)) {
    return jsonError(res, 400, 'Invalid form selection');
  }

  // Basic spam check (honeypot field)
  if (normalizeText(website, 100)) {
    return jsonError(res, 400, 'Invalid submission');
  }

  try {
    // Format email body
    const emailBody = `
New Contact Form Submission from US-1 Pools Website

Name: ${cleanedName}
Email: ${cleanedEmail}
Phone: ${cleanedPhone}
Project Type: ${cleanedProject}

${cleanedBudget ? `Budget Range: ${cleanedBudget}` : ''}
${cleanedTimeline ? `Timeline: ${cleanedTimeline}` : ''}
${cleanedLocation ? `Location: ${cleanedLocation}` : ''}
${cleanedInstallAddress ? `Installation Address: ${cleanedInstallAddress}` : ''}

Message:
${cleanedDetails || 'Not provided'}

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
          from: process.env.RESEND_FROM_EMAIL || 'US-1 Pools Contact Form <noreply@us1pools.com>',
          to: [process.env.CONTACT_TO_EMAIL || 'us1pools@gmail.com'],
          reply_to: cleanedEmail,
          subject: `New Contact: ${cleanedProject} - ${cleanedName}`,
          text: emailBody
        })
      });

      if (!resendResponse.ok) {
        const error = await resendResponse.text();
        console.error('Resend API error:', error);
        throw new Error('Email service error');
      }
    } else {
      if (isProduction) {
        throw new Error("Email service not configured");
      }

      console.log("Contact form submission captured in development mode", {
        nameLength: cleanedName.length,
        hasEmail: Boolean(cleanedEmail),
        phoneDigits: phoneDigits.length,
        project: cleanedProject,
        hasDetails: Boolean(cleanedDetails),
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! We\'ll be in touch soon.'
    });

  } catch (error) {
    console.error('Contact form error:', {
      message: error?.message || 'Unknown error',
      project: cleanedProject,
      hasEmail: Boolean(cleanedEmail),
      hasPhone: Boolean(cleanedPhone),
    });
    return jsonError(res, 500, 'Failed to send message. Please call us at (919) 441-0033.');
  }
}
