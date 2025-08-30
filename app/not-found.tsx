export const dynamic = "force-static";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-ivory text-ink">
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender/40 text-smokyplum text-sm ring-1 ring-smokyplum/10">
          <span>404</span>
          <span className="opacity-70">Page not found</span>
        </div>

        <h1 className="mt-6 font-display text-5xl text-smokyplum hero-title">
          Lost in the sparkles?
        </h1>
        <p className="mt-4 max-w-2xl mx-auto opacity-80">
          The page you’re looking for has drifted off with the confetti. Let’s get you back to something lovely.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="/" className="px-5 py-3 rounded-xl bg-sage hover:bg-sagedeep text-white shadow-soft">Back to Home</a>
          <a href="/downloads" className="px-5 py-3 rounded-xl ring-1 ring-smokyplum/15 bg-white hover:bg-ivory">Browse Downloads</a>
          <a href="/contact" className="px-5 py-3 rounded-xl ring-1 ring-smokyplum/15 bg-white hover:bg-ivory">Contact Us</a>
        </div>
      </section>
    </main>
  );
}
