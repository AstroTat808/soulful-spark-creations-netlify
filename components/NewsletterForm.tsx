'use client';

import React, { useState, useTransition } from 'react';

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
        const res = await fetch('/.netlify/functions/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        const data = await res.json();
        if (res.ok) {
          setMsg(data.message || 'Beautiful! Check your inbox to confirm your subscription.');
          form.reset();
        } else {
          setMsg(data.error || 'Something went wrong. Please try again.');
        }
      } catch {
        setMsg('Network error. Please try again.');
      }
    });
  }

  return (
    <>
      <form
        className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
        onSubmit={handleSubmit}
        aria-label="Email newsletter subscription"
      >
        <input
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Your email address"
          className="w-full sm:w-96 px-4 py-3 rounded-md border border-black/10 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2e2a28] disabled:opacity-60"
          required
          aria-label="Email address"
          disabled={pending}
        />
        <button
          type="submit"
          disabled={pending}
          className="px-6 py-3 rounded-md bg-[#2e2a28] text-white font-medium shadow hover:bg-[#1f1b19] transition disabled:cursor-not-allowed"
        >
          {pending ? 'Submitting…' : 'Subscribe'}
        </button>
      </form>
      {msg && (<p role="status" className="mt-3 text-sm text-center">{msg}</p>)}
    </>
  );
}
