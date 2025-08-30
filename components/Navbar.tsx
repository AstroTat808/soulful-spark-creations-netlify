"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = (href: string, label: string) => {
    const active = pathname === href;
    return (
      <Link
        key={href}
        href={href}
        className={`relative px-3 py-2 rounded-lg hover:bg-white/70 transition-colors ${active ? "text-smokyplum" : "text-ink/90"}`}
      >
        {label}
        <span
          className={`absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full transition-opacity ${active ? "opacity-100 bg-sage" : "opacity-0"}`}
        />
      </Link>
    );
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-ivory/80 backdrop-blur-md border-b border-smokyplum/10 transition-all ${shrink ? "py-0" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo@200.png"
            alt="Soulful Spark Creations"
            width={140}
            height={40}
            className={`${shrink ? "scale-90 opacity-95" : "scale-100"} transition-transform duration-200`}
          />
        </Link>

        <nav className="ml-auto hidden md:flex items-center gap-1">
          {navLink("/", "Home")}
          {navLink("/downloads", "Downloads")}
          {navLink("/about", "About")}
          {navLink("/contact", "Contact")}
          {navLink("/styleguide", "Styleguide")}
        </nav>

        <Link href="/downloads" className="ml-auto md:ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sage hover:bg-sagedeep text-white shadow-soft">
          Shop
        </Link>
      </div>
    </header>
  );
}
