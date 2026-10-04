"use client";

import { motion, useReducedMotion } from "framer-motion";

const palettes = {
  sunflower: { petal: "#fbbf24", center: "#7c4a12" },
  pink: { petal: "#f9a8d4", center: "#facc15" },
  daisy: { petal: "#ffffff", center: "#f59e0b" },
  sky: { petal: "#7dd3fc", center: "#fde047" },
};

// A simple cartoon flower on a stem that sways from its base.
export default function Flower({
  kind = "sunflower",
  className = "",
  delay = 0,
}: {
  kind?: keyof typeof palettes;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const { petal, center } = palettes[kind];
  return (
    <motion.svg
      viewBox="0 0 60 100"
      className={className}
      aria-hidden="true"
      style={{ transformOrigin: "50% 100%" }}
      animate={reduce ? undefined : { rotate: [-6, 6, -6] }}
      transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <path d="M30 100 C30 80 28 60 30 40" stroke="#16a34a" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M30 78 C18 70 12 72 8 66 C18 62 26 68 30 74" fill="#22c55e" />
      <path d="M30 66 C42 58 48 60 52 54 C42 50 34 56 30 62" fill="#22c55e" />
      <g transform="translate(30 28)">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse key={i} cx="0" cy="-13" rx="6.5" ry="12" fill={petal} stroke="#00000014" strokeWidth="1" transform={`rotate(${i * 45})`} />
        ))}
        <circle r="8.5" fill={center} />
        <circle r="3" cx="-2.5" cy="-2.5" fill="#ffffff55" />
      </g>
    </motion.svg>
  );
}
