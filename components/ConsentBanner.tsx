"use client";
import { useEffect, useState } from "react";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const val = localStorage.getItem("ssc.consent");
    if (!val) setVisible(true);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-4 inset-x-0 flex justify-center z-50">
      <div className="bg-smokyplum text-ivory/95 rounded-2xl shadow-soft ring-1 ring-smokyplum/40 max-w-3xl w-[94%] p-4 md:p-5">
        <div className="md:flex items-center gap-4">
          <p className="opacity-90">
            We use minimal cookies to make this site work and to understand what’s helpful.
            You can opt in to analytics at any time.
          </p>
          <div className="mt-3 md:mt-0 flex gap-2 shrink-0">
            <button
              onClick={() => { localStorage.setItem("ssc.consent", "essential"); setVisible(false); }}
              className="rounded-xl px-4 py-2 ring-1 ring-ivory/40 hover:bg-ivory/10"
            >
              Essentials only
            </button>
            <button
              onClick={() => { localStorage.setItem("ssc.consent", "analytics"); setVisible(false); }}
              className="bg-gold text-ink rounded-xl px-4 py-2 shadow-soft hover:opacity-95"
            >
              Allow analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
