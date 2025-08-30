import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Soulful Spark Creations</h1>
      <p className="text-lg">Welcome! Explore our curated printables.</p>
      <Link
        href="/printables"
        className="inline-block rounded-xl px-4 py-2 border border-gray-300 hover:bg-gray-50"
      >
        Browse Printables
      </Link>
    </main>
  );
}
