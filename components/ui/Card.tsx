import React from "react";
export default function Card({ children, className="" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white rounded-2xl ring-1 ring-black/5 shadow-soft ${className}`}>{children}</div>;
}
