export const dynamic = "force-static";

export default function ContactSuccess() {
  return (
    <main className="min-h-[60vh] bg-ivory text-ink">
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender/40 text-smokyplum text-sm ring-1 ring-smokyplum/10">
          <span>Message sent</span>
        </div>
        <h1 className="mt-6 font-display text-4xl text-smokyplum">Thank you!</h1>
        <p className="mt-3 opacity-85">Your message is on its way. We’ll reply to your email soon.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="/" className="px-5 py-3 rounded-xl bg-sage hover:bg-sagedeep text-white shadow-soft">Back to Home</a>
          <a href="/downloads" className="px-5 py-3 rounded-xl ring-1 ring-smokyplum/15 bg-white hover:bg-ivory">Browse Downloads</a>
        </div>
      </section>
    </main>
  );
}
