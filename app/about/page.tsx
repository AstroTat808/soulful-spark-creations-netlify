export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <main className="bg-ivory text-ink">
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-10 text-center">
        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender/40 text-smokyplum text-sm ring-1 ring-smokyplum/10">
          Our Founder
        </p>
        <h1 className="mt-4 font-display text-5xl text-smokyplum hero-title">Meet Shaun Scott</h1>
        <p className="mt-4 max-w-2xl mx-auto opacity-85">
          Builder, educator, and logistics pro behind Soulful Spark Creations.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <a href="/" className="px-5 py-3 rounded-xl ring-1 ring-smokyplum/15 bg-white hover:bg-ivory">Return to Home</a>
          <a href="/downloads" className="px-5 py-3 rounded-xl bg-sage hover:bg-sagedeep text-white">Explore Downloads</a>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <figure className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-smokyplum/10 bg-white">
            <img src="/images/founder/shaun-scott-1.jpg" alt="Shaun Scott smiling with arms crossed among Hawai‘i greenery" className="w-full h-auto object-cover"/>
          </figure>
          <figure className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-smokyplum/10 bg-white">
            <img src="/images/founder/shaun-scott-2.jpg" alt="Shaun Scott outdoors in Hawai‘i, welcoming and joyful" className="w-full h-auto object-cover"/>
          </figure>
        </div>
      </section>

      {/* Bio */}
      <section className="max-w-5xl mx-auto px-6 pb-20 prose prose-lg prose-slate">
        <p>
          Shaun Scott has spent two decades turning complex ideas into grounded experiences.
          With a master’s in logistics, she led operations with precision, then poured that expertise into entrepreneurship—
          launching three successful ventures: a wedding & event venue in Hawai‘i, a mobile bar business, and a payroll services firm.
        </p>
        <p>
          Before building businesses, Shaun taught for 20 years, and earlier was a top sales performer at UPS while finishing college.
          Today, she channels that blend of heart and systems into <em>Soulful Spark Creations</em>—designing digital, downloadable tools
          that make planning feel calm, intentional, and beautifully organized.
        </p>
        <p className="opacity-85">
          Her mission: give modern couples editorial-worthy guidance with soulful structure—so you can plan with clarity,
          savor the moments, and stay true to what matters.
        </p>
      </section>
    </main>
  );
}
