
import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";

const RESEND_API_KEY = process.env.RESEND_API_KEY as string;
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@soulfulspark.creations";
const SUBJECT = "Your mini‑planner is ready";

function render(template: string, vars: Record<string,string>) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, k) => vars[k] || "");
}

const handler: Handler = async (event) => {
  try {
    const token = (event.queryStringParameters?.token || "").toString();
    const json = JSON.parse(Buffer.from(token, "base64url").toString("utf-8"));
    const email = (json.email || "").trim();
    const name = "there";

    const site = process.env.URL || "https://example.com";
    const downloadUrl = `${site}/docs/mini-planner.pdf`;

    if (email && RESEND_API_KEY) {
      const html = render(
        fs.readFileSync(path.join(process.cwd(), "emails", "deliver.html"), "utf-8"),
        { name, downloadUrl }
      );
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: email,
          subject: SUBJECT,
          html
        })
      });
    }

    return {
      statusCode: 302,
      headers: { Location: "/success?confirm=1" },
      body: ""
    };
  } catch (err) {
    return { statusCode: 200, body: "Invalid or expired token." };
  }
};

export { handler };
