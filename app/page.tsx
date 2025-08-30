<<<<<<< HEAD
export default function HomePage() {
  return (
    <div className="bg-ivory text-ink min-h-screen antialiased selection:bg-ink selection:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 paper-grain" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender text-sm text-smokyplum ring-1 ring-smokyplum/10">
                New • Digital & Downloadable
              </div>
              <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold tracking-tight text-smokyplum">
                Plan With Calm & Confidence
              </h1>
              <p className="mt-4 text-lg opacity-90">
                Soulful Spark Creations designs <strong>digital / downloadable</strong> wedding planning tools—
                guide books, planners, vision boards, intuition cards, and more. Beautifully crafted so every step feels clear, calm, and intentional.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/printables" className="bg-sage hover:bg-sagedeep text-white rounded-xl px-5 py-3 shadow-soft">Browse Products</a>
                <a href="/styleguide" className="foil-outline text-ink rounded-xl px-5 py-3">See Our Style</a>
                <a href="/about" className="foil-outline text-ink rounded-xl px-5 py-3">Meet the Founder</a>
              </div>
            </div>
            <div className="rounded-2xl bg-white/70 ring-1 ring-smokyplum/10 shadow-soft p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl p-5 bg-white ring-1 ring-smokyplum/10 shadow-soft">
                  <h3 className="font-display text-xl">Wedding Guide Book</h3>
                  <p className="mt-2 text-sm opacity-90">Editorial-inspired planner with rituals & reflective prompts.</p>
                </div>
                <div className="rounded-xl p-5 bg-white ring-1 ring-smokyplum/10 shadow-soft">
                  <h3 className="font-display text-xl">Vision Board Kit</h3>
                  <p className="mt-2 text-sm opacity-90">Clarify your dream day and stay aligned.</p>
                </div>
                <div className="rounded-xl p-5 bg-white ring-1 ring-smokyplum/10 shadow-soft">
                  <h3 className="font-display text-xl">Vendor Intuition Cards</h3>
                  <p className="mt-2 text-sm opacity-90">Choose your team with alignment, not anxiety.</p>
                </div>
                <div className="rounded-xl p-5 bg-white ring-1 ring-smokyplum/10 shadow-soft">
                  <h3 className="font-display text-xl">Ritual Journal</h3>
                  <p className="mt-2 text-sm opacity-90">Moon phases, crystal spreads, and loving prompts.</p>
                </div>
              </div>
            </div>
=======
// app/page.tsx
import Image from "next/image";
import NewsletterForm from "../components/NewsletterForm";

export default function HomePage() {
  return (
    <div className="bg-[#f8f5f2] text-[#2e2a28] min-h-screen antialiased selection:bg-[#2e2a28] selection:text-white">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-3">
            <Image src="/images/logo.png" alt="Soulful Spark Creations Logo" width={40} height={40} />
            <span className="sr-only">Soulful Spark Creations</span>
          </a>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm">
            <a href="/printables" className="hover:opacity-80">Printables</a>
            <a href="#rituals" className="hover:opacity-80">Rituals</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#subscribe" className="rounded-full bg-[#2e2a28] px-4 py-2 text-white hover:bg-[#1d1a18] transition">Join Newsletter</a>
          </nav>
        </div>
      </header>

      <section className="relative isolate min-h-[88vh] grid place-items-center overflow-clip" role="region" aria-label="Hero">
        <div className="absolute inset-0">
          <Image src="/images/hero-bride-blossoms.jpg" alt="Soft bridal scene" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight drop-shadow-md">Plan Your Wedding With Intention</h1>
          <p className="mt-5 text-lg md:text-2xl/relaxed drop-shadow">Romantic tools for the spiritual bride who craves calm, not chaos.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/printables" className="px-7 py-3 rounded-full bg-white text-[#2e2a28] font-medium shadow hover:bg-[#e9e6e3] transition">Explore Printables</a>
            <a href="#subscribe" className="px-7 py-3 rounded-full bg-transparent ring-1 ring-white/70 text-white hover:bg-white/10 transition">Get Monthly Rituals</a>
>>>>>>> 511f9e7dd9c143dea6aaac2bc7368ac93b7fddfb
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* PROMO STRIP */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-3 gap-6">
          <div className="rounded-xl p-5 ring-1 ring-smokyplum/10 shadow-soft bg-ivory">
            <div className="text-sm font-semibold text-smokyplum/80 tracking-wide">Instant Access</div>
            <div className="font-display text-2xl">Download & Use Today</div>
          </div>
          <div className="rounded-xl p-5 ring-1 ring-smokyplum/10 shadow-soft bg-ivory">
            <div className="text-sm font-semibold text-smokyplum/80 tracking-wide">Calm, Not Chaos</div>
            <div className="font-display text-2xl">Guided Rituals & Steps</div>
          </div>
          <div className="rounded-xl p-5 ring-1 ring-smokyplum/10 shadow-soft bg-ivory">
            <div className="text-sm font-semibold text-smokyplum/80 tracking-wide">Beautiful & Practical</div>
            <div className="font-display text-2xl">Designed With Heart</div>
=======
      <section id="about" className="py-20 px-6 md:px-8 bg-[#fafafa]">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold font-serif">Welcome to Soulful Spark Creations</h2>
          <p className="mt-5 text-lg leading-relaxed max-w-3xl mx-auto">
            This is your sacred space to stay grounded while planning the most beautiful day of your life. Our guided wedding tools, rituals, and mantras help you quiet the noise and listen to your own heart.
          </p>
        </div>
      </section>

      <section id="rituals" className="py-20 px-6 md:px-8 bg-[#fbfaf9]">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Gentle Rituals, Real Clarity</h2>
            <p className="mt-4 text-base leading-relaxed">From new moon intentions to day-of grounding breaths, our short practices help you create space for what matters. No overwhelm—just presence, ease, and a little sparkle.</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#2e2a28]" aria-hidden /> 3-minute audio rituals</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#2e2a28]" aria-hidden /> Printable prompts & spreads</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#2e2a28]" aria-hidden /> Vendor alignment mantras</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow ring-1 ring-black/5">
            <Image src="/images/altar-candles.jpg" alt="Soft candlelit altar" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
>>>>>>> 511f9e7dd9c143dea6aaac2bc7368ac93b7fddfb
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-smokyplum">Make planning a practice in presence.</h2>
          <p className="mt-3 opacity-90">Explore our digital library and find your calm.</p>
          <div className="mt-6 flex justify-center">
            <a href="/printables" className="bg-sage hover:bg-sagedeep text-white rounded-xl px-6 py-3 shadow-soft">Explore Digital Library</a>
          </div>
        </div>
      </section>
    </div>
  );
}

      {/* DIGITAL DOWNLOADS */}
      <section className="px-6 md:px-10 py-16 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="font-display text-3xl md:text-4xl text-smokyplum">Digital Downloads</h2>
            <a href="/templates" className="foil-outline px-4 py-2 rounded-xl text-ink">Browse Templates</a>
          </div>
          <p className="mt-3 max-w-3xl opacity-80">
            Soulful Spark Creations designs downloadable, print-ready guides and tools—
            from <strong>wedding planning guidebooks</strong> and <strong>vendor intuition cards</strong>
            to <strong>vision board templates</strong> and <strong>ritual journals</strong>—
            crafted to bring calm, clarity, and a touch of romance to your planning journey.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white ring-1 ring-smokyplum/10 p-5 shadow-soft">
              <h3 className="font-display text-xl">Wedding Planning Guidebook</h3>
              <p className="mt-2 text-sm opacity-80">A structured, heart-centered roadmap from “Yes” to “We do.”</p>
            </div>
            <div className="rounded-2xl bg-white ring-1 ring-smokyplum/10 p-5 shadow-soft">
              <h3 className="font-display text-xl">Vendor Intuition Cards</h3>
              <p className="mt-2 text-sm opacity-80">Choose your team with alignment, not anxiety.</p>
            </div>
            <div className="rounded-2xl bg-white ring-1 ring-smokyplum/10 p-5 shadow-soft">
              <h3 className="font-display text-xl">Vision Board Templates</h3>
              <p className="mt-2 text-sm opacity-80">Keep your dream day clear and cohesive.</p>
            </div>
          </div>
        </div>
      </section>
    
      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-[#4E3B4F]">Frequently Asked Questions</h2>
          <div className="mt-8 grid gap-6">
            <div className="p-5 rounded-xl ring-1 ring-[#4E3B4F]/10 bg-[#FDFBF8]">
              <h3 className="font-semibold text-lg text-[#2A2329]">Are these physical products? Do you ship?</h3>
              <p className="mt-2 text-[#2A2329]/80">All items are <strong>digital downloads</strong>. You’ll receive files instantly after purchase—no shipping required. Print at home or your favorite shop.</p>
            </div>
            <div className="p-5 rounded-xl ring-1 ring-[#4E3B4F]/10 bg-[#FDFBF8]">
              <h3 className="font-semibold text-lg text-[#2A2329]">Can I re‑download my files?</h3>
              <p className="mt-2 text-[#2A2329]/80">Yes—your purchase email includes a secure link. Keep it for future access. If you lose it, contact us and we’ll help.</p>
            </div>
            <div className="p-5 rounded-xl ring-1 ring-[#4E3B4F]/10 bg-[#FDFBF8]">
              <h3 className="font-semibold text-lg text-[#2A2329]">What’s your refund policy?</h3>
              <p className="mt-2 text-[#2A2329]/80">Because files are delivered instantly, <strong>all sales are final</strong>. If something isn’t working or a file is corrupted, we’ll replace it.</p>
            </div>
            <div className="p-5 rounded-xl ring-1 ring-[#4E3B4F]/10 bg-[#FDFBF8]">
              <h3 className="font-semibold text-lg text-[#2A2329]">How can I use the downloads?</h3>
              <p className="mt-2 text-[#2A2329]/80">Personal use for your event or planning is welcome. <strong>Commercial redistribution or resale isn’t permitted</strong>. For special licensing, contact us.</p>
            </div>
          </div>
        </div>
      </section>
=======
      <section id="subscribe" className="py-16 px-6 md:px-8 bg-[#e9e6e3]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold font-serif">Stay Centered</h2>
          <p className="mt-2 text-sm opacity-80">Receive monthly rituals, gentle reminders, and exclusive printables just for you.</p>
          <NewsletterForm />
          <p className="mt-2 text-[11px] opacity-60">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>

      <footer className="bg-white border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-serif font-semibold">Soulful Spark Creations</h3>
            <p className="mt-2 text-sm opacity-80">Romantic tools for calm, intentional weddings.</p>
          </div>
          <nav aria-label="Footer" className="text-sm grid grid-cols-2 gap-2">
            <a href="/printables" className="hover:opacity-80">Printables</a>
            <a href="#rituals" className="hover:opacity-80">Rituals</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#subscribe" className="hover:opacity-80">Newsletter</a>
          </nav>
          <div className="text-sm">
            <p className="opacity-70">© {new Date().getFullYear()} Soulful Spark Creations</p>
            <p className="mt-2"><a href="#" className="underline underline-offset-4">Privacy</a> · <a href="#" className="underline underline-offset-4">Terms</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
>>>>>>> 511f9e7dd9c143dea6aaac2bc7368ac93b7fddfb
