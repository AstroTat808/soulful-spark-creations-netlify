
import type { Handler } from "@netlify/functions";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const RESEND_API_KEY = process.env.RESEND_API_KEY as string;
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@soulfulspark.creations";

function hmacToken(secret:string, payload:string) {
  return crypto.createHmac("sha256", secret).update(payload).digest("base64url");
}

function render(templatePath:string, vars:Record<string,string>) {
  const html = fs.readFileSync(templatePath, "utf8");
  return html.replace(/\{\{(\w+)\}\}/g, (_, k) => vars[k] || "");
}

async function sendEmail(to:string, subject:string, html:string) {
  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html })
  });
  return await resp.json();
}

const handler: Handler = async (event, context) => {
  try {
    const payload = JSON.parse(event.body || "{}");
    const data = payload?.payload?.data || payload?.data || {};
    const email = data.email || data.Email || data.eMail;
    const name = data.name || "there";

    if (!email || !RESEND_API_KEY) {
      return { statusCode: 200, body: JSON.stringify({ ok: true, info: "missing email or RESEND_API_KEY" }) };
    }

    const baseUrl = process.env.URL || "https://example.com";
    const secret = process.env.SUBSCRIBE_SECRET || RESEND_API_KEY;
    const stamp = Date.now().toString();
    const tokenPayload = `${email}.${stamp}`;
    const sig = hmacToken(secret, tokenPayload);
    const token = Buffer.from(`${tokenPayload}.${sig}`).toString("base64url");
    const confirmUrl = `${baseUrl}/.netlify/functions/confirm-subscription?token=${token}`;

    const tmpl = path.join(process.cwd(), "emails", "confirm.html");
    const logoUrl = (process.env.LOGO_URL || `${baseUrl}/images/logo.png`);
    const subject = "Confirm your subscription";
    const html = render(tmpl, { confirm_url: confirmUrl, logo_url: logoUrl });

    const out = await sendEmail(email, subject, html);
    return { statusCode: 200, body: JSON.stringify({ ok: true, out }) };
  } catch (err:any) {
    return { statusCode: 200, body: JSON.stringify({ ok: true, error: String(err) }) };
  }
};

export { handler };
