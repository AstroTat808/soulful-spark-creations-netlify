"use client";

import { useState } from "react";

const TEMPLATES = [
  { title: "Thank You Email", slug: "thank-you-email", description: "A simple thank you template for customers." },
  { title: "Order Confirmation", slug: "order-confirmation", description: "Basic confirmation layout for Netlify forms." }
];

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  async function onCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <button
      onClick={onCopy}
      className="rounded-lg border px-3 py-1 hover:bg-gray-50"
      aria-live="polite"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export default function TemplatesPage() {
  const code = `<div class="p-4 rounded-xl border">Hello from Soulful Spark Creations</div>`;

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Templates</h1>
      <p className="text-gray-600">Starter templates you can copy and adapt.</p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {TEMPLATES.map((t) => (
          <li key={t.slug} className="rounded-2xl border p-4 hover:shadow">
            <h2 className="text-xl font-semibold">{t.title}</h2>
            <p className="text-sm text-gray-600">{t.description}</p>
          </li>
        ))}
      </ul>

      <section className="rounded-2xl border p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Sample snippet</h3>
          <CopyButton code={code} />
        </div>
        <pre className="overflow-auto text-sm"><code>{code}</code></pre>
      </section>
    </main>
  );
}
