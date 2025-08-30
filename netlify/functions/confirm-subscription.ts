
import type { Handler } from "@netlify/functions";
import crypto from "crypto";
import fs from "fs";
import path from "path";

const RESEND_API_KEY = process.env.RESEND_API_KEY as string;
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@soulfulspark.creations";
const DOWNLOAD_PATH = "/docs/mini-planner.pdf";

function hmacValid(secret:string, payload:string, sig:string) {
  const expected = crypto.createHmac("sha256", secret).update(payload).digest("base64url");
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(sig));
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

const handler: Handler = async (event) => {
  try {
    const token = event.queryStringParameters?.token || "";
    if (!token) return { statusCode: 400, body: "Missing token" };
    const raw = Buffer.from(token, "base64url").toString("utf8");
    const parts = raw.split(".");
    if (parts.length !== 3) return { statusCode: 400, body: "Bad token" };
    const [email, stamp, sig] = [parts[0], parts[1], parts[2]];
    const now = Date.now();
    const age = now - parseInt(stamp, 10);
    if (age > 1000*60*60*24*2) { // 2 days
      return { statusCode: 400, body: "Token expired" };
    }
    const secret = process.env.SUBSCRIBE_SECRET || RESEND_API_KEY;
    if (!hmacValid(secret, `${email}.${stamp}`, sig)) {
      return { statusCode: 400, body: "Invalid signature" };
    }

    const baseUrl = process.env.URL || "https://example.com";
    const downloadUrl = `${baseUrl}${DOWNLOAD_PATH}`;
    const tmpl = path.join(process.cwd(), "emails", "thankyou.html");
    const logoUrl = (process.env.LOGO_URL || `${baseUrl}/images/logo.png`);
    const html = render(tmpl, { download_url: downloadUrl, logo_url: logoUrl });
    await sendEmail(email, "Your mini‑planner is ready", html);

    // Redirect to a friendly page
    return {
      statusCode: 302,
      headers: { Location: `${baseUrl}/success` },
      body: ""
    };
  } catch (err:any) {
    return { statusCode: 500, body: "Server error" };
  }
};

export { handler };
