import Link from "next/link";
import { printables } from "@/data/printables";

export const metadata = {
  title: "Printables – Soulful Spark Creations",
};

export default function PrintablesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <h1 className="text-3xl font-bold">Printables</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {printables.map((p) => (
          <li key={p.slug} className="rounded-2xl border p-4 hover:shadow">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-3">{p.description}</p>
            <div className="mt-3">
              <Link
                className="inline-block rounded-lg px-3 py-1 border hover:bg-gray-50"
                href={`/printables/${p.slug}`}
              >
                View
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
