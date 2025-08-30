"use client";
import { useEffect, useState } from "react";

export default function EmailPreview() {
  const [confirmHtml, setConfirmHtml] = useState("");
  const [thanksHtml, setThanksHtml] = useState("");

  useEffect(() => {
    async function load() {
      const a = await fetch("/emails/confirm.html").then(r=>r.text());
      const b = await fetch("/emails/thankyou.html").then(r=>r.text());
      setConfirmHtml(a);
      setThanksHtml(b);
    }
    load();
  }, []);

  return (
    <main className="bg-ivory text-ink">
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="font-display text-3xl text-smokyplum">Email Preview</h1>
        <p className="opacity-80 mt-2">These render the raw HTML templates used by serverless functions.</p>

        <div className="grid gap-8 md:grid-cols-2 mt-8">
          <div className="bg-white ring-1 ring-smokyplum/10 rounded-2xl overflow-hidden shadow-soft">
            <div className="px-4 py-3 border-b">Confirm</div>
            <iframe title="confirm" className="w-full h-[70vh]" srcDoc={confirmHtml} />
          </div>
          <div className="bg-white ring-1 ring-smokyplum/10 rounded-2xl overflow-hidden shadow-soft">
            <div className="px-4 py-3 border-b">Thank You</div>
            <iframe title="thankyou" className="w-full h-[70vh]" srcDoc={thanksHtml} />
          </div>
        </div>
      </section>
    </main>
  );
}
