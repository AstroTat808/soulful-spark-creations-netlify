'use client';
import React, { useState, useTransition } from 'react';
import Button from "./Button";

export default function NewsletterForm() {
  const [msg, setMsg] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem('email') as HTMLInputElement | null;
    const email = input?.value?.trim() || '';
    const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if (!ok) { setMsg('Please enter a valid email address.'); return; }
    setMsg(null);
    startTransition(async () => {
      try {
        const res = await fetch('/.netlify/functions/subscribe', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email }) });
        const data = await res.json();
        setMsg(res.ok ? (data.message || 'Beautiful! Check your inbox to confirm.') : (data.error || 'Something went wrong.'));
        if (res.ok) form.reset();
      } catch { setMsg('Network error. Please try again.'); }
    });
  }

  return (
    <div>
      <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3" onSubmit={handleSubmit}>
        <input type="email" name="email" inputMode="email" autoComplete="email" placeholder="Your email address"
          className="w-full sm:w-96 px-4 py-3 rounded-xl border border-eggplant/15 bg-white shadow-soft focus:outline-none focus:ring-2 focus:ring-gold disabled:opacity-60"
          required disabled={pending} />
        <Button type="submit" disabled={pending}>{pending ? "Submitting…" : "Begin Your Ritual"}</Button>
      </form>
      {msg && <p role="status" className="mt-3 text-sm text-center">{msg}</p>}
    </div>
  );
}
