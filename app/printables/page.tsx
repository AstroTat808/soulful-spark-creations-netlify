<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";
import SectionHeader from "../../components/ui/SectionHeader";
=======
// app/printables/page.tsx
import Image from "next/image";
import Link from "next/link";
>>>>>>> 511f9e7dd9c143dea6aaac2bc7368ac93b7fddfb
import { printables } from "../../data/printables";

export const metadata = { title: "Printables — Soulful Spark Creations" };

export default function PrintablesPage({ searchParams }: { searchParams?: Record<string, string | string[]> }) {
  const category = (searchParams?.category as string) || "all";
  const style = (searchParams?.style as string) || "all";
<<<<<<< HEAD
  const items = printables.filter(p => (category === "all" || p.category === category) && (style === "all" || p.style === style));

  return (
    <div className="bg-ivory text-smokyplum min-h-screen">
      <Navbar />
      <main className="container py-12">
        <SectionHeader title="Printables" />
        <form className="mt-6 flex flex-wrap gap-3 text-sm" action="/printables" method="get">
          <select name="category" defaultValue={category} className="border rounded-xl px-3 py-2 bg-white ring-1 ring-smokyplum/15">
            <option value="all">All Categories</option>
            <option value="planning">Planning</option>
            <option value="rituals">Rituals</option>
            <option value="mantras">Mantras</option>
          </select>
          <select name="style" defaultValue={style} className="border rounded-xl px-3 py-2 bg-white ring-1 ring-smokyplum/15">
            <option value="all">All Styles</option>
            <option value="boho">Boho</option>
            <option value="classic">Classic</option>
            <option value="modern">Modern</option>
          </select>
          <button className="px-4 py-2 rounded-xl bg-sage text-white">Filter</button>
        </form>

        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((p) => (
            <article key={p.slug} className="bg-white rounded-2xl overflow-hidden ring-1 ring-eggplant/10 shadow-soft hover:shadow-lift transition hover:-translate-y-0.5">
              <div className="relative h-56">
                <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h2 className="font-display text-xl font-semibold">{p.title}</h2>
                <p className="mt-2 text-sm opacity-80 line-clamp-2">{p.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="font-medium">${'{'}p.price.toFixed(2){'}'}</span>
                  <Link href={`/printables/${p.slug}`} className="underline underline-offset-4">View</Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
=======

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
>>>>>>> 511f9e7dd9c143dea6aaac2bc7368ac93b7fddfb
  );
}
