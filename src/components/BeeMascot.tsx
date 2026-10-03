"use client";

import { motion } from "framer-motion";

export default function BeeMascot({ className = "", flying = true }: { className?: string; flying?: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 120 100"
      className={className}
      aria-hidden="true"
      animate={flying ? { y: [0, -10, 0], rotate: [-4, 4, -4] } : undefined}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* wings */}
      <motion.ellipse
        cx="48" cy="28" rx="18" ry="24" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="2" opacity="0.9"
        style={{ originX: "48px", originY: "48px" }}
        animate={{ rotate: [-12, 12, -12] }}
        transition={{ duration: 0.25, repeat: Infinity }}
      />
      <motion.ellipse
        cx="72" cy="28" rx="18" ry="24" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="2" opacity="0.9"
        style={{ originX: "72px", originY: "48px" }}
        animate={{ rotate: [12, -12, 12] }}
        transition={{ duration: 0.25, repeat: Infinity }}
      />
      {/* body */}
      <ellipse cx="60" cy="62" rx="34" ry="26" fill="#fbbf24" stroke="#1f1a14" strokeWidth="3" />
      <path d="M48 38 Q44 62 48 86" stroke="#1f1a14" strokeWidth="8" fill="none" />
      <path d="M66 36 Q62 62 66 88" stroke="#1f1a14" strokeWidth="8" fill="none" />
      {/* stinger */}
      <path d="M93 62 L104 58 L93 68 Z" fill="#1f1a14" />
      {/* face */}
      <circle cx="36" cy="56" r="4.5" fill="#1f1a14" />
      <circle cx="37.5" cy="54.5" r="1.5" fill="#fff" />
      <path d="M32 68 Q38 74 44 68" stroke="#1f1a14" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="30" cy="64" r="3.5" fill="#f9a8d4" opacity="0.8" />
      {/* antennae */}
      <path d="M40 40 Q32 24 26 22" stroke="#1f1a14" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="25" cy="21" r="3.5" fill="#1f1a14" />
      <path d="M48 38 Q46 22 40 16" stroke="#1f1a14" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="39" cy="15" r="3.5" fill="#1f1a14" />
    </motion.svg>
  );
}
