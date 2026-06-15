// Cloudflare Pages Function - IT Service Dental Contact Form
// Sends contact form submissions to info@secureme247.com via Resend
// Requires RESEND_API_KEY secret set via: wrangler pages secret put RESEND_API_KEY

const NOTIFY_EMAIL = 'info@secureme247.com';
const FROM_EMAIL = 'contact@itservicedental.com';

export async function onRequest(context) {
  const { request, env } = context;

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[Resend] Missing RESEND_API_KEY environment variable');
  }

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  try {
    const data = await request.json();
    const formType = data.formType || 'contact';

    // Basic validation
    if (!data.email) {
      return new Response(JSON.stringify({ success: false, error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Check honeypot
    if (data._hp) {
      return new Response(JSON.stringify({ success: true, message: 'Message received' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Send email notification via Resend
    await sendContactEmail(apiKey, data);

    return new Response(JSON.stringify({ success: true, message: 'Message received' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (err) {
    console.error('[Form Error]', err.message);
    // Return success so bots can't detect failure
    return new Response(JSON.stringify({ success: true, message: 'Message received' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
}

async function sendResendEmail(apiKey, to, subject, html) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `IT Service Dental <${FROM_EMAIL}>`,
      to: [to],
      subject: subject,
      html: html,
    }),
  });

  const result = await response.json();
  if (!response.ok) {
    console.error('[Resend Error]', JSON.stringify(result));
  }
  return result;
}

async function sendContactEmail(apiKey, data) {
  const field = (label, val) => val ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;width:140px;font-weight:600">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a">${val}</td></tr>` : '';

  const serviceLabels = {
    'managed-it': 'Managed IT Support',
    'hipaa': 'HIPAA Compliance',
    'cloud': 'Cloud Solutions',
    'network': 'Network Infrastructure',
    'cybersecurity': 'Cybersecurity',
    'backup': 'Backup & Disaster Recovery',
    'other': 'Other'
  };
  const serviceLabel = serviceLabels[data.service] || data.service || '';

  const html = `
    <div style="font-family:Inter,system-ui,sans-serif;max-width:560px;margin:0 auto;padding:20px">
      <div style="background:linear-gradient(135deg,#0ea5e9,#06b6d4);padding:24px;border-radius:12px 12px 0 0">
        <h1 style="color:#fff;margin:0;font-size:20px">New Contact - IT Service Dental</h1>
      </div>
      <div style="background:#fff;border:1px solid #e2e8f0;border-top:0;border-radius:0 0 12px 12px;padding:24px">
        <table style="width:100%;border-collapse:collapse">
          ${field('Name', data.name)}
          ${field('Practice', data.practice)}
          ${field('Email', data.email)}
          ${field('Phone', data.phone)}
          ${field('Service', serviceLabel)}
          <tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;width:140px;font-weight:600;vertical-align:top">Message</td>
          <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a">${(data.message || '').replace(/\n/g, '<br>')}</td></tr>
        </table>
        <p style="color:#94a3b8;font-size:12px;margin-top:16px">Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST</p>
      </div>
    </div>`;

  return sendResendEmail(apiKey, NOTIFY_EMAIL,
    `New Contact: ${data.name || data.email} - IT Service Dental`,
    html);
}
