"use client";
import StyleguideSubnav from "../../components/StyleguideSubnav";


import { useMemo, useState } from "react";

export const dynamic = "force-static";

type Color = { name: string; hex: string; className?: string };

const PALETTE: Color[] = [
  { name: "ivory", hex: "#F6F1EB", className: "bg-ivory" },
  { name: "smokyPlum", hex: "#4E3B4F", className: "bg-smokyplum" },
  { name: "sage", hex: "#A8B7A6", className: "bg-sage" },
  { name: "sageDeep", hex: "#7E9284", className: "bg-sagedeep" },
  { name: "blush", hex: "#E7B7C9", className: "bg-blush" },
  { name: "lavender", hex: "#C9B7DD", className: "bg-lavender" },
  { name: "gold", hex: "#C8A26A", className: "bg-gold" },
  { name: "ink", hex: "#2A2329", className: "bg-ink" },
  { name: "white", hex: "#FFFFFF", className: "bg-white" },
];

const HEX_INK = "#2A2329";
const HEX_WHITE = "#FFFFFF";

function hexToRgb(hex: string) {
  const m = hex.replace("#","");
  const bigint = parseInt(m, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}
function srgbToLinear(c: number) {
  const cs = c / 255;
  return cs <= 0.04045 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4);
}
function luminance(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const R = srgbToLinear(r);
  const G = srgbToLinear(g);
  const B = srgbToLinear(b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
function contrastRatio(hex1: string, hex2: string) {
  const L1 = luminance(hex1);
  const L2 = luminance(hex2);
  const light = Math.max(L1, L2);
  const dark = Math.min(L1, L2);
  return (light + 0.05) / (dark + 0.05);
}
function hexToHsl(hex: string) {
  const {r, g, b} = hexToRgb(hex);
  const r1 = r/255, g1 = g/255, b1 = b/255;
  const max = Math.max(r1,g1,b1), min = Math.min(r1,g1,b1);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r1: h = (g1 - b1) / d + (g1 < b1 ? 6 : 1); break;
      case g1: h = (b1 - r1) / d + 3; break;
      case b1: h = (r1 - g1) / d + 5; break;
    }
    h *= 60;
  }
  return { h: Math.round(h), s: Math.round(s*100), l: Math.round(l*100) };
}
function wcagLabel(cr: number) {
  if (cr >= 7) return "AAA";
  if (cr >= 4.5) return "AA";
  if (cr >= 3) return "AA (Large)";
  return "Fail";
}

export default function StyleguidePage() {
  const [previewMode, setPreviewMode] = useState<"swatch"|"text">("swatch");
  const [textColor, setTextColor] = useState<"white"|"ink">("ink");
  const textHex = textColor === "white" ? HEX_WHITE : HEX_INK;

  // Accessibility matrix: for each bg, show contrast vs ink & white and recommend the better pairing
  const accessibility = useMemo(() => {
    return PALETTE.map(bg => {
      const crInk = contrastRatio(bg.hex, HEX_INK);
      const crWhite = contrastRatio(bg.hex, HEX_WHITE);
      const recommended = crInk >= crWhite ? { text: "ink", cr: crInk } : { text: "white", cr: crWhite };
      return { bg: bg.name, hex: bg.hex, crInk, crWhite, recommended };
    }).sort((a,b)=> (b.recommended.cr - a.recommended.cr));
  }, []);

  // Suggest alternatives for any Fail rows: pick the nearest higher-contrast brand text color
  const suggestions = useMemo(() => {
    return accessibility.map(row => {
      const options = [
        { text: "ink", cr: row.crInk },
        { text: "white", cr: row.crWhite },
      ].sort((a,b)=> b.cr - a.cr);
      const best = options[0];
      const label = wcagLabel(best.cr);
      return { ...row, best, label };
    });
  }, [accessibility]);

  return (
    <main className="scroll-smooth" className="min-h-screen bg-ivory text-smokyplum" id="main">
      <StyleguideSubnav />
      <section className="container py-12">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <a href="/docs/styleguide-full.pdf" className="foil-outline text-ink px-4 py-2 rounded-xl">Download Full PDF (palette + contrast matrix + specimens)</a>
          <div>
            <h1 className="font-display text-5xl font-bold">Styleguide</h1>
            <p className="mt-3 opacity-80 max-w-2xl">
              Palette, typography, components, and tokens. Swatches list HEX, HSL, contrast vs white and ink with WCAG labels.
            </p>
          </div>
          <div className="flex items-center gap-3"><a className="foil-outline text-ink px-4 py-2 rounded-xl" href="/brand/styleguide.pdf" download>Download PDF</a>
            <label className="text-sm">Preview:</label>
            <div className="inline-flex rounded-xl ring-1 ring-smokyplum/10 overflow-hidden bg-white">
              <button onClick={()=>setPreviewMode("swatch")} className={`px-3 py-1.5 ${previewMode==="swatch"?"bg-sage text-white":"text-smokyplum"}`}>Swatches</button>
              <button onClick={()=>setPreviewMode("text")} className={`px-3 py-1.5 ${previewMode==="text"?"bg-sage text-white":"text-smokyplum"}`}>Text on BG</button>
            </div>
            {previewMode==="text" && (
              <div className="inline-flex rounded-xl ring-1 ring-smokyplum/10 overflow-hidden bg-white">
                <button onClick={()=>setTextColor("ink")} className={`px-3 py-1.5 ${textColor==="ink"?"bg-sage text-white":"text-smokyplum"}`}>Ink</button>
                <button onClick={()=>setTextColor("white")} className={`px-3 py-1.5 ${textColor==="white"?"bg-sage text-white":"text-smokyplum"}`}>White</button>
              </div>
            )}
          </div>
        </div>

        {/* Swatches / Text previews */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {PALETTE.map((c) => {
            const hsl = hexToHsl(c.hex);
            const cr = contrastRatio(c.hex, textHex);
            return (
              <div key={c.name} className="rounded-xl shadow-soft overflow-hidden ring-1 ring-smokyplum/10 bg-white">
                <div className={`h-24 w-full flex items-center justify-center`} style={{ backgroundColor: c.hex }}>
                  {previewMode==="text" && (
                    <span
                      className="font-medium"
                      style={{ color: textHex }}
                    >
                      Aa
                    </span>
                  )}
                </div>
                <div className="p-3 text-sm space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{c.name}</span>
                    <code className="opacity-70">{c.hex}</code>
                  </div>
                  <div className="text-xs opacity-80">hsl({hsl.h} {hsl.s}% {hsl.l}%)</div>
                  <div className="text-xs flex gap-3 flex-wrap">
                    <span>CR ↔︎ white: {contrastRatio(c.hex, HEX_WHITE).toFixed(2)}</span>
                    <span>CR ↔︎ ink: {contrastRatio(c.hex, HEX_INK).toFixed(2)}</span>
                    {previewMode==="text" && (
                      <span className="font-medium">Now: {wcagLabel(cr)}</span>
                    )}
                  </div>
                  {c.className && <div className="text-[11px] opacity-70">token: <code>{c.className.replace("bg-","")}</code></div>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Accessibility Checks */}
        <div className="mt-12">
          <h2 className="font-display text-3xl font-bold">Accessibility Checks</h2>
          <p className="mt-1 opacity-80">Recommended text color per background (aiming for AA ≥ 4.5 for normal text).</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm bg-white rounded-xl ring-1 ring-smokyplum/10 overflow-hidden">
              <thead className="bg-ivory text-smokyplum/90">
                <tr>
                  <th className="text-left px-3 py-2">Background</th>
                  <th className="text-left px-3 py-2">HEX</th>
                  <th className="text-left px-3 py-2">CR vs Ink</th>
                  <th className="text-left px-3 py-2">CR vs White</th>
                  <th className="text-left px-3 py-2">Recommended</th>
                  <th className="text-left px-3 py-2">WCAG</th>
                </tr>
              </thead>
              <tbody>
                {suggestions.map((row) => (
                  <tr key={row.bg} className="border-t border-smokyplum/10">
                    <td className="px-3 py-2 flex items-center gap-2">
                      <span className="inline-block w-4 h-4 rounded" style={{ backgroundColor: row.hex }} />
                      {row.bg}
                    </td>
                    <td className="px-3 py-2"><code>{row.hex}</code></td>
                    <td className="px-3 py-2">{row.crInk.toFixed(2)}</td>
                    <td className="px-3 py-2">{row.crWhite.toFixed(2)}</td>
                    <td className="px-3 py-2">{row.best.text}</td>
                    <td className="px-3 py-2">{row.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* <span id="typography"></span>Typography */}
        <div className="mt-12">
          <h2 className="font-display text-3xl font-bold">Typography</h2>
          <div className="mt-4 space-y-4">
            <p className="text-4xl font-display">Playfair Display — Editorial & romantic for headlines</p>
            <p className="text-base font-body opacity-90">Libre Franklin — Calm, modern body text for readability</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12">
          <h2 className="font-display text-3xl font-bold">Buttons</h2>
          <div className="mt-4 flex gap-4 flex-wrap">
            <button className="foil-outline text-ink px-5 py-3 rounded-xl">Foil Outline</button>
            <button className="px-5 py-3 rounded-xl bg-sage text-white hover:bg-sagedeep shadow-soft">Primary Sage</button>
          </div>
        </div>

        {/* Brand Tokens & Examples */}
        <div className="mt-14">
          <h2 className="font-display text-3xl font-bold">Brand Tokens</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl ring-1 ring-smokyplum/10 bg-white p-4">
              <h3 className="font-semibold mb-2">Colors (Tailwind classes)</h3>
              <pre className="text-xs overflow-auto p-3 bg-ivory rounded-lg">
{`
bg-ivory     /* #F6F1EB */
text-smokyplum /* #4E3B4F */
bg-sage / hover:bg-sagedeep
bg-blush, bg-lavender, bg-gold
text-ink / text-white
`}
              </pre>
            </div>
            <div className="rounded-xl ring-1 ring-smokyplum/10 bg-white p-4">
              <h3 className="font-semibold mb-2">Utilities</h3>
              <pre className="text-xs overflow-auto p-3 bg-ivory rounded-lg">
{`
shadow-soft  /* soft elevation */
foil-outline /* gold gradient border */
paper-grain  /* subtle paper texture */
container    /* centered layout */
`}
              </pre>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl ring-1 ring-smokyplum/10 bg-white p-4">
              <h3 className="font-semibold mb-2">Example: Primary CTA</h3>
              <div className="p-4 bg-ivory rounded-lg">
                <button className="bg-sage hover:bg-sagedeep text-white rounded-xl px-5 py-3 shadow-soft">Begin Your Ritual</button>
              </div>
              <pre className="text-xs overflow-auto p-3 bg-ivory rounded-lg mt-3">
{`<button className="bg-sage hover:bg-sagedeep text-white rounded-xl px-5 py-3 shadow-soft">Begin Your Ritual</button>`}
              </pre>
            </div>
            <div className="rounded-xl ring-1 ring-smokyplum/10 bg-white p-4">
              <h3 className="font-semibold mb-2">Example: Chip / Badge</h3>
              <div className="p-4 bg-ivory rounded-lg">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lavender text-smokyplum ring-1 ring-smokyplum/10">
                  Guided Rituals
                </span>
              </div>
              <pre className="text-xs overflow-auto p-3 bg-ivory rounded-lg mt-3">
{`<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lavender text-smokyplum ring-1 ring-smokyplum/10">Guided Rituals</span>`}
              </pre>
            </div>
          </div>

          <div className="mt-6 rounded-xl ring-1 ring-smokyplum/10 bg-white p-4">
            <h3 className="font-semibold mb-2">Example: Card</h3>
            <div className="p-4 bg-ivory rounded-lg">
              <div className="rounded-xl ring-1 ring-smokyplum/10 bg-white paper-grain p-5 shadow-soft">
                <h4 className="font-display text-xl">Vendor Intuition Cards</h4>
                <p className="mt-2 text-sm opacity-80">Choose your team with alignment, not anxiety.</p>
                <div className="mt-4">
                  <button className="foil-outline text-ink px-4 py-2 rounded-xl">Preview</button>
                </div>
              </div>
            </div>
            <pre className="text-xs overflow-auto p-3 bg-ivory rounded-lg mt-3">
{`<div className="rounded-xl ring-1 ring-smokyplum/10 bg-white paper-grain p-5 shadow-soft">...</div>`}
            </pre>
          </div>
        </div>
      </section>
    </main>
  );
}
