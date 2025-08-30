import React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "foil" | "sage" };
export default function Button({ variant="foil", className="", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition active:scale-[.99] focus-visible:ring-2 focus-visible:ring-gold/70";
  const styles = variant === "sage"
    ? "bg-sage text-white hover:bg-sagedeep shadow-soft"
    : "foil-outline text-ink hover:opacity-95";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
