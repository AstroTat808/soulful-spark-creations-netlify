"use client";
import { useEffect, useRef } from "react";

function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const DPR = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * DPR);
      canvas.height = Math.floor(window.innerHeight * 0.6 * DPR);
      canvas.style.width = "100%";
      canvas.style.height = "60vh";
    };
    resize(); window.addEventListener("resize", resize);
    const colors = ["#8E6CA8","#E8CDD7","#C5E3D4","#F2D28C","#6A5B67"];
    const parts = Array.from({ length: 140 }).map(() => ({
      x: Math.random() * canvas.width,
      y: -Math.random() * canvas.height,
      r: 2 + Math.random() * 4,
      vx: -1 + Math.random() * 2,
      vy: 1 + Math.random() * 2,
      color: colors[Math.floor(Math.random()*colors.length)],
    }));

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      parts.forEach(p => {
        p.x += p.vx * DPR; p.y += p.vy * DPR; p.vy += 0.02 * DPR;
        if (p.y > canvas.height) { p.y = -10; p.vy = 1 + Math.random()*2; }
        ctx.beginPath(); ctx.fillStyle = p.color; ctx.arc(p.x, p.y, p.r*DPR, 0, Math.PI*2); ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="rounded-2xl shadow-soft ring-1 ring-smokyplum/10" />;
}

export default function SuccessPage() {
  return (
    <main className="min-h-[70vh] bg-ivory text-ink">
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender/40 text-smokyplum text-sm ring-1 ring-smokyplum/10">
          <span>Thank you</span>
        </div>
        <h1 className="mt-6 font-display text-5xl text-smokyplum hero-title">You’re on the list!</h1>
        <p className="mt-4 opacity-80 max-w-2xl mx-auto">
          Check your inbox for a confirmation. Once confirmed, your mini-planner download will arrive.
        </p>
        <div className="mt-8">
          <Confetti />
        </div>
        <div className="mt-10">
          <a href="/" className="bg-sage hover:bg-sagedeep text-white rounded-xl px-6 py-3 shadow-soft">Back to Home</a>
        </div>
      </section>
    </main>
  );
}
