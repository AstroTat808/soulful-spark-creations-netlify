"use client";

\

function CopyButton({ code }: { code: string }) {
  async function onCopy() {
    try {
      await navigator.clipboard.writeText(code);
      const btn = document.activeElement as HTMLButtonElement | null;
      if (btn) {
        const old = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(()=> (btn.textContent = old || "Copy"), 1000);
      }
    } catch {}
  }
  return <button onClick={onCopy} className="ml-2 text-xs px-2 py-1 rounded-lg foil-outline">Copy</button>;
}

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-ivory text-smokyplum" id="main">
      <section className="container py-12">
        <h1 className="font-display text-5xl font-bold">Templates</h1>
        <p className="mt-3 opacity-80 max-w-2xl">
          Paste-ready sections: hero variants, features, testimonials, and pricing. All use brand tokens.
        </p>

        {/* HERO: Dark Panel */}
        <div className="mt-10 rounded-2xl overflow-hidden ring-1 ring-smokyplum/10 shadow-soft">
          <div className="relative bg-[url('/images/hero-watercolor.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-smokyplum/70 via-lavender/40 to-smokyplum/70" />
            <div className="relative container py-20">
              <div className="max-w-3xl bg-smokyplum/90 text-white rounded-2xl shadow-soft px-6 py-8 ring-1 ring-white/10">
                <h2 className="font-display text-5xl font-bold tracking-tight">Plan With Calm & Confidence</h2>
                <p className="mt-3 text-lg text-white/90">Editorial-inspired, soulful tools in lavender, sage, and gold accents.</p>
                <div className="mt-6 flex gap-3">
                  <a className="bg-sage hover:bg-sagedeep text-white rounded-xl px-5 py-3 shadow-soft" href="/printables">Explore Printables</a>
                  <a className="foil-outline text-ink px-5 py-3 rounded-xl" href="/styleguide">See the Styleguide</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HERO: Light Panel */}
        <div className="mt-8 rounded-2xl overflow-hidden ring-1 ring-smokyplum/10 shadow-soft">
          <div className="relative bg-[url('/images/hero-watercolor.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-lavender/50 via-sage/25 to-smokyplum/40" />
            <div className="relative container py-20">
              <div className="max-w-3xl bg-white/90 text-ink rounded-2xl shadow-soft px-6 py-8 ring-1 ring-smokyplum/10">
                <h2 className="font-display text-5xl font-bold tracking-tight">Plan With Joy & Heart</h2>
                <p className="mt-3 text-lg opacity-90">Romantic tools to keep planning calm and intentional.</p>
                <div className="mt-6 flex gap-3">
                  <a className="bg-sage hover:bg-sagedeep text-white rounded-xl px-5 py-3 shadow-soft" href="/printables">Explore Printables</a>
                  <a className="foil-outline text-ink px-5 py-3 rounded-xl" href="/styleguide">See the Styleguide</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="mt-10 rounded-2xl ring-1 ring-smokyplum/10 bg-white p-6 shadow-soft">
          <h3 className="font-display text-3xl font-bold">What You'll Love</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Guided Rituals", desc: "Moon phases, crystal spreads, and gentle prompts to center your planning."},
              { title: "Vendor Intuition Cards", desc: "Choose your team with alignment, not anxiety."},
              { title: "Vision Board Templates", desc: "Keep your dream day clear and grounded."},
              { title: "Calming Checklists", desc: "Meaningful momentum without overwhelm."},
              { title: "Printable Journals", desc: "Space to reflect, decide, and breathe."},
              { title: "Elegant Typography", desc: "Editorial feel with romantic accents."},
            ].map((f) => (
              <div key={f.title} className="rounded-xl ring-1 ring-smokyplum/10 p-5 bg-ivory">
                <h4 className="font-display text-xl">{f.title}</h4>
                <p className="mt-2 text-sm opacity-80">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIAL STRIP */}
        <div className="mt-10 rounded-2xl ring-1 ring-smokyplum/10 bg-ivory p-6 shadow-soft paper-grain">
          <h3 className="font-display text-3xl font-bold">Sweet Words</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { quote: "Everything felt calmer—and more *us*—once we used the rituals.", author: "Riley & June"},
              { quote: "The intuition cards turned vendor meetings from stressful to soulful.", author: "Sam & Priya"},
              { quote: "Beautiful designs, grounded guidance, and so easy to print.", author: "Alex & Morgan"},
            ].map((t, i) => (
              <blockquote key={i} className="rounded-xl bg-white p-5 ring-1 ring-smokyplum/10 shadow-soft">
                <p className="italic">“{t.quote}”</p>
                <footer className="mt-3 text-sm opacity-80">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* PRICING ROW */}
        <div className="mt-10 rounded-2xl ring-1 ring-smokyplum/10 bg-white p-6 shadow-soft">
          <h3 className="font-display text-3xl font-bold">Printables</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { name: "Vision Board", price: "$12", features: ["Editable PDF", "Guided prompts", "A4 & US Letter"]},
              { name: "Intuition Cards", price: "$9", features: ["36 cards", "Vendor prompts", "Cut & print"]},
              { name: "Ritual Journal", price: "$14", features: ["Moon phases", "Breathing space", "Elegant type"]},
            ].map((p) => (
              <div key={p.name} className="rounded-xl ring-1 ring-smokyplum/10 bg-ivory p-5 shadow-soft flex flex-col">
                <h4 className="font-display text-xl">{p.name}</h4>
                <div className="mt-2 text-2xl text-smokyplum font-semibold">{p.price}</div>
                <ul className="mt-3 space-y-1 text-sm opacity-90">
                  {p.features.map((f, i)=>(<li key={i}>• {f}</li>))}
                </ul>
                <div className="mt-4 pt-4">
                  <a className="bg-sage hover:bg-sagedeep text-white rounded-xl px-4 py-2 shadow-soft inline-block" href="/printables">Get it</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

<section className="container py-12">
  <h2 className="font-display text-3xl font-bold">Snippets</h2>
  <p className="mt-2 opacity-80">Copy-ready code for the sections above.</p>
  <div className="mt-4 space-y-4">
    <div className="rounded-xl ring-1 ring-smokyplum/10 bg-white p-4">
      <div className="flex items-center">
        <h3 className="font-semibold">Dark Hero Panel</h3>
        <CopyButton code={`<div className=\"relative bg-[url('/images/hero-watercolor.jpg')] bg-cover bg-center\"><div className=\"absolute inset-0 bg-gradient-to-b from-smokyplum/70 via-lavender/40 to-smokyplum/70\" /><div className=\"relative container py-20\"><div className=\"max-w-3xl bg-smokyplum/90 text-white rounded-2xl shadow-soft px-6 py-8 ring-1 ring-white/10\"><h2 className=\"font-display text-5xl font-bold tracking-tight\">Plan With Calm & Confidence</h2><p className=\"mt-3 text-lg text-white/90\">Editorial-inspired, soulful tools in lavender, sage, and gold accents.</p><div className=\"mt-6 flex gap-3\"><a className=\"bg-sage hover:bg-sagedeep text-white rounded-xl px-5 py-3 shadow-soft\" href=\"/printables\">Explore Printables</a><a className=\"foil-outline text-ink px-5 py-3 rounded-xl\" href=\"/styleguide\">See the Styleguide</a></div></div></div></div>`} />
      </div>
    </div>
  </div>
</section>

