import React from "react";
import FloralDivider from "./FloralDivider";
export default function SectionHeader({ title, subtitle, withDivider=true }: { title: string; subtitle?: string; withDivider?: boolean }) {
  return (
    <div className="text-center">
      <h2 className="font-display text-4xl md:text-5xl font-bold">{title}</h2>
      {subtitle && <p className="mt-3 text-base opacity-80 max-w-2xl mx-auto">{subtitle}</p>}
      {withDivider && <FloralDivider />}
    </div>
  );
}
