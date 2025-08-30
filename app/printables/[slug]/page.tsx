import { notFound } from "next/navigation";
import { printables } from "@/data/printables";

interface Params { slug: string }

export async function generateStaticParams() {
  return printables.map(p => ({ slug: p.slug }));
}

export default function PrintablePage({ params }: { params: Params }) {
  const item = printables.find(p => p.slug === params.slug);
  if (!item) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <p>{item.description}</p>
      {item.preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.preview}
          alt={item.title}
          className="rounded-xl border max-w-full h-auto"
        />
      )}
      {item.download && (
        <a
          href={item.download}
          className="inline-block rounded-lg px-4 py-2 border hover:bg-gray-50"
        >
          Download
        </a>
      )}
    </main>
  );
}
