import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/ui/Navbar";
import Footer from "../../../components/ui/Footer";
import { printables } from "../../../data/printables";

type Props = { params: { slug: string } };

export function generateStaticParams() { return printables.map((p) => ({ slug: p.slug })); }

export default function PrintableDetail({ params }: Props) {
  const item = printables.find((p) => p.slug === params.slug);
  if (!item) return <div className="p-8">Not found.</div>;

  return (
    <div className="bg-ivory min-h-screen">
      <Navbar />
      <main className="container py-12">
        <Link href="/printables" className="text-sm underline underline-offset-4">&larr; Back to Printables</Link>
        <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-smokyplum/10 shadow-soft">
            <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold">{item.title}</h1>
            <p className="mt-2 text-lg font-semibold">${'{'}item.price.toFixed(2){'}'}</p>
            <p className="mt-4 text-sm leading-relaxed opacity-90">{item.description}</p>
            <div className="mt-6 flex gap-3">
              <button className="px-5 py-3 rounded-xl bg-sage text-white">Add to Cart</button>
              <button className="px-5 py-3 rounded-xl ring-2 ring-eggplant/25">Preview</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
