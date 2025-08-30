export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-smokyplum/10 mt-16">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-display font-semibold">Soulful Spark Creations</h3>
          <p className="mt-2 text-sm opacity-80">Playful, romantic tools for calm, intentional weddings.</p>
        </div>
        <nav aria-label="Footer" className="text-sm grid grid-cols-2 gap-2">
          <a href="/printables" className="hover:opacity-80">Printables</a>
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#subscribe" className="hover:opacity-80">Newsletter</a>
        </nav>
        <div className="text-sm opacity-70 self-end md:text-right">
          © {new Date().getFullYear()} Soulful Spark Creations
        </div>
      </div>
    </footer>
  );
}
