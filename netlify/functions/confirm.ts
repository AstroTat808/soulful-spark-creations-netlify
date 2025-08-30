import type { Handler } from "@netlify/functions";

// Example confirm function using native fetch (Node 18+)
export const handler: Handler = async (event) => {
  try {
    // Replace with your actual confirm URL/logic
    const pingUrl = "https://example.com/api/ping";
    const res = await fetch(pingUrl, { method: "GET" });

    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: res.ok,
        status: res.status,
      }),
      headers: { "content-type": "application/json" },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: (err as Error).message }),
      headers: { "content-type": "application/json" },
    };
  }
};
