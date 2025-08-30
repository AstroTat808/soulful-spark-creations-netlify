import Image from "next/image";

import products from "../../../content/products.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((p:any) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export default function ProductDetail({ params }: { params: { slug: string }}) {
  const product = products.find((p:any) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <main className="bg-ivory text-ink">
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl overflow-hidden ring-1 ring-smokyplum/10 shadow-soft">
          <Image src={product.image} alt={product.title} width={1200} height={900} className="w-full h-auto object-cover" sizes="(max-width: 768px) 600px, 1200px" />
        </div>

        <div>
          <h1 className="font-display text-4xl text-smokyplum">{product.title}</h1>
          <p className="mt-3 opacity-85">{product.summary}</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-semibold text-smokyplum">${"{product.price}"}</span>
            <span className="text-xs px-2 py-1 rounded-full bg-lavender/60 text-smokyplum ring-1 ring-smokyplum/10">{product.badge}</span>
          </div>

          <div className="mt-8 flex gap-3">
            <a href="/downloads" className="foil-outline rounded-xl px-5 py-3">Back to Downloads</a>
            <a href="#" className="bg-sage hover:bg-sagedeep text-white rounded-xl px-5 py-3 shadow-soft">Preview Sample</a>
          </div>

          <div className="mt-10 grid gap-4">
            <h2 className="font-display text-2xl text-smokyplum">What’s inside</h2>
            <ul className="list-disc pl-6 opacity-85">
              <li>Beautiful, printable pages</li>
              <li>Calm prompts and checklists</li>
              <li>Easy-to-use layout, A4 & Letter</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
