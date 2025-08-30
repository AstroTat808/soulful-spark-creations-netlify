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
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

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
