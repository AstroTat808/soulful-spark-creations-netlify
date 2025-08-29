// app/printables/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { printables } from "../../../data/printables";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return printables.map((p) => ({ slug: p.slug }));
}

export default function PrintableDetail({ params }: Props) {
  const item = printables.find((p) => p.slug === params.slug);
  if (!item) return <main className="p-8">Not found.</main>;

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link href="/printables" className="text-sm underline underline-offset-4">&larr; Back to Printables</Link>
      <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/5 shadow">
          <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <h1 className="font-serif text-3xl font-bold">{item.title}</h1>
          <p className="mt-2 text-lg font-semibold">${item.price.toFixed(2)}</p>
          <p className="mt-4 text-sm leading-relaxed opacity-90">{item.description}</p>
          <div className="mt-6 flex gap-3">
            <button className="px-5 py-3 rounded-md bg-[#2e2a28] text-white">Add to Cart</button>
            <button className="px-5 py-3 rounded-md ring-1 ring-[#2e2a28]">Preview</button>
          </div>
        </div>
      </div>
    </main>
  );
}
