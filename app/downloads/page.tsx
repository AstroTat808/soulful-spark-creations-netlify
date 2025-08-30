import Image from "next/image";

import products from "../../content/products.json";

export const metadata = {
  title: "Downloads • Soulful Spark Creations",
};

export default function DownloadsPage() {
  return (
    <main className="bg-ivory text-ink">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl md:text-5xl text-smokyplum">Digital Downloads</h1>
        <p className="mt-3 max-w-2xl opacity-80">
          Soulful Spark Creations creates digital, downloadable tools—guidebooks, cards, and templates—
          designed to keep planning calm, intentional, and beautifully you.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.slug} className="rounded-2xl bg-white ring-1 ring-smokyplum/10 shadow-soft overflow-hidden flex flex-col">
              <Image src={p.image} alt={p.title} width={960} height={640} className="h-48 w-full object-cover" sizes="(max-width: 640px) 480px, 960px" />
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-lavender/60 text-smokyplum ring-1 ring-smokyplum/10">{p.badge}</span>
                </div>
                <p className="mt-2 text-sm opacity-85">{p.summary}</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div className="font-semibold text-smokyplum">${"{p.price}"}</div>
                  <a href={`/downloads/${p.slug}` } className="bg-sage hover:bg-sagedeep text-white rounded-lg px-4 py-2 shadow-soft">Preview</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
