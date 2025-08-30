'use client';
import Image from "next/image";
import React from "react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-ivory/80 bg-ivory/90 border-b border-eggplant/10">
      <div className="container flex items-center justify-between py-4">
        <a href="/" className="inline-flex items-center gap-3">
          <Image src="/images/logo.png" width={40} height={40} alt="Soulful Spark Creations" />
          <span className="font-display text-xl">Soulful Spark</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="/printables" className="hover:opacity-80">Printables</a>
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#subscribe" className="rounded-xl bg-ivory foil-outline text-smokyplum px-4 py-2 hover:bg-coral transition">Join</a>
        </nav>
        <button onClick={()=>setOpen(!open)} aria-label="Toggle menu" className="md:hidden rounded-xl ring-1 ring-eggplant/15 px-3 py-2">Menu</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-eggplant/10 bg-ivory">
          <nav className="container py-3 grid gap-3 text-sm">
            <a href="/printables">Printables</a>
            <a href="#about">About</a>
            <a href="#subscribe">Join</a>
          </nav>
        </div>
      )}
    </header>
  );
}
