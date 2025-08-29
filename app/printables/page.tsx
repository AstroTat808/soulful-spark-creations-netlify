// app/printables/page.tsx
import Image from "next/image";
import Link from "next/link";
import { printables } from "../../data/printables";

export const metadata = { title: "Printables — Soulful Spark Creations" };

export default function PrintablesPage({ searchParams }: { searchParams?: Record<string, string | string[]> }) {
  const category = (searchParams?.category as string) || "all";
  const style = (searchParams?.style as string) || "all";

  const items = printables.filter(p =>
    (category === "all" || p.category === category) &&
    (style === "all" || p.style === style)
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-serif text-4xl font-bold">Printables</h1>
      <form className="mt-6 flex flex-wrap gap-3 text-sm" action="/printables" method="get">
        <select name="category" defaultValue={category} className="border rounded-md px-3 py-2">
          <option value="all">All Categories</option>
          <option value="planning">Planning</option>
          <option value="rituals">Rituals</option>
          <option value="mantras">Mantras</option>
        </select>
        <select name="style" defaultValue={style} className="border rounded-md px-3 py-2">
          <option value="all">All Styles</option>
          <option value="boho">Boho</option>
          <option value="classic">Classic</option>
          <option value="modern">Modern</option>
        </select>
        <button className="px-4 py-2 rounded-md bg-[#2e2a28] text-white">Filter</button>
      </form>

      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((p) => (
          <article key={p.slug} className="bg-white rounded-xl overflow-hidden ring-1 ring-black/5 shadow-sm">
            <div className="relative h-56">
              <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="p-5">
              <h2 className="font-serif text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm opacity-80 line-clamp-2">{p.description}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="font-medium">{p.price.toFixed(2)}</span>
                <Link href={`/printables/${p.slug}`} className="underline underline-offset-4">View</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
