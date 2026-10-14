import { useEffect, useRef } from "react";

const M = 16; // canvas bleeds past the bar so scattered dots can fly out
const R = 36; // cursor repel radius, px

// Never pass the real name in: whatever renders here ships in the bundle.
export default function Redacted({ length = 11 }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -1e4, y: -1e4 };
    let dots = [];
    let raf;

    const build = () => {
      const { width, height } = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = (width + M * 2) * dpr;
      canvas.height = (height + M * 2) * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // y clusters toward the middle line so the cloud reads like blurred text
      dots = Array.from({ length: (width * height) / 4 }, () => {
        const hx = M + Math.random() * width;
        const hy = M + ((Math.random() + Math.random() + Math.random()) / 3) * height;
        return { hx, hy, x: hx, y: hy, vx: 0, vy: 0, a: 0.25 + Math.random() * 0.75, s: 0.8 + Math.random() * 0.9 };
      });
    };

    const draw = () => {
      const box = canvas.getBoundingClientRect();
      const mx = mouse.x - box.left;
      const my = mouse.y - box.top;
      ctx.clearRect(0, 0, box.width, box.height);
      for (const p of dots) {
        if (!still) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const d = Math.hypot(dx, dy) || 1;
          if (d < R) {
            const f = (1 - d / R) * 3;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
          p.vx = (p.vx + (p.hx - p.x) * 0.05 + (Math.random() - 0.5) * 0.5) * 0.84;
          p.vy = (p.vy + (p.hy - p.y) * 0.05 + (Math.random() - 0.5) * 0.5) * 0.84;
          p.x += p.vx;
          p.y += p.vy;
        }
        ctx.globalAlpha = p.a;
        ctx.fillStyle = Math.abs(p.vx) + Math.abs(p.vy) > 2 ? "#4ade80" : "#e4e4e7";
        ctx.fillRect(p.x, p.y, p.s, p.s);
      }
      if (!still) raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -1e4;
    };

    // rebuilds when web fonts land and the bar's ch-based width changes
    const ro = new ResizeObserver(() => {
      build();
      cancelAnimationFrame(raf);
      draw();
    });
    ro.observe(canvas.parentElement);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <span
      className="relative inline-block h-[1.1em] align-[-0.15em]"
      style={{ width: `${length * 0.6}em` }}
      title="classified — for now"
    >
      <canvas
        ref={ref}
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{ left: -M, top: -M, width: `calc(100% + ${M * 2}px)`, height: `calc(100% + ${M * 2}px)` }}
      />
      <span className="sr-only">redacted</span>
    </span>
  );
}
