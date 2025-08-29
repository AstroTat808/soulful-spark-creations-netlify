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
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>

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
