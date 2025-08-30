"use client";
import { useEffect, useState } from "react";

const items = [
  { href: "#colors", label: "Colors" },
  { href: "#typography", label: "Typography" },
  { href: "#components", label: "Components" },
];

export default function StyleguideSubnav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sectionEls = items
      .map(i => document.querySelector(i.href))
      .filter(Boolean) as Element[];

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive('#' + (e.target as HTMLElement).id);
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: [0, 1] });

    sectionEls.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
  };

  return (
    <div className="sticky top-[60px] z-30 bg-ivory/70 backdrop-blur-sm border-b border-smokyplum/10">
      <div className="max-w-6xl mx-auto px-6 py-2 flex gap-3 text-sm">
        {items.map(i => (
          <a
            key={i.href}
            href={i.href}
            onClick={(e) => onClick(e, i.href)}
            className={`px-3 py-1 rounded-lg ring-1 ${active === i.href ? "bg-white ring-smokyplum/20" : "ring-transparent hover:bg-white hover:ring-smokyplum/10"}`}
          >
            {i.label}
          </a>
        ))}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="ml-auto px-3 py-1 rounded-lg hover:bg-white">Back to top ↑</a>
      </div>
    </div>
  );
}
