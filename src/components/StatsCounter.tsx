"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-3xl bg-white/80 p-6 text-center shadow-sm ring-1 ring-honey-200 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="font-display text-4xl font-semibold text-honey-600 sm:text-5xl">
            <Counter value={s.value} suffix={s.suffix} />
          </p>
          <p className="mt-2 font-semibold text-hive-700">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
