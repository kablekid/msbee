"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

// Ms Bee mascot: the character artwork (wingless PNG) with animated SVG wings.
//
// She is drawn in a 3/4 view, so — like a real bee — she has a wing pair on each
// side of her back:
//  • the NEAR pair (on the side facing us) sticks out past her body and is fully
//    visible;
//  • the FAR pair attaches to her other shoulder and points away from us, so it is
//    foreshortened and mostly hidden behind her head and book — only the tip peeks
//    over her far shoulder at the top of each upstroke.
// Both pairs beat together (mirror images), and fore- and hind-wings on each side
// move as one, as a bee's are hooked together.
//
// Wing coordinates: each pair is drawn with its root at (200, 100) in a 200×200
// box, extending left; rotating around the root flaps it from the shoulder, and a
// positive angle lifts the wing.

// Upstroke a touch quicker than the downstroke, for a soft, buoyant flutter.
const BEAT = { duration: 0.7, repeat: Infinity, ease: "easeInOut" as const, times: [0, 0.45, 1] };
const NEAR_STROKE = [-12, 20, -12];
const FAR_STROKE = [-44, 36, -44];

function WingPair({ fill, stroke, veins = true }: { fill: string; stroke: string; veins?: boolean }) {
  return (
    <>
      {/* forewing */}
      <path
        d="M200 96 C152 10 56 -10 26 26 C2 56 56 100 200 96 Z"
        fill={fill}
        stroke={stroke}
        strokeOpacity="0.75"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* hindwing */}
      <path
        d="M200 104 C150 112 72 134 64 166 C58 192 130 184 200 104 Z"
        fill={fill}
        stroke={stroke}
        strokeOpacity="0.75"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {veins && (
        <>
          <path
            d="M198 96 Q120 52 44 30 M198 96 Q126 72 52 66 M150 76 Q118 40 86 18 M198 106 Q130 136 76 168 M168 118 Q130 150 104 178"
            fill="none"
            stroke={stroke}
            strokeOpacity="0.35"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <ellipse cx="78" cy="38" rx="20" ry="7" fill="#ffffff" opacity="0.7" transform="rotate(-25 78 38)" />
        </>
      )}
    </>
  );
}

export default function MsBeeMascot({
  className = "",
  flip = false,
}: {
  className?: string;
  /** Mirror her so she faces left (wings move to her other side). */
  flip?: boolean;
}) {
  const reduce = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const nearFill = `msbee-near-${uid}`;
  const farFill = `msbee-far-${uid}`;
  const beat = (stroke: number[]) => (reduce ? undefined : { animate: { rotate: stroke }, transition: BEAT });

  return (
    <div className={className}>
      <div className={flip ? "-scale-x-100" : undefined}>
        <motion.div
          className="relative aspect-[518/753] w-full"
          animate={reduce ? undefined : { y: [0, -14, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* FAR pair: mirrored to point right, squashed along its length
              (foreshortened) and tucked behind her head and book. */}
          <svg
            viewBox="0 0 200 200"
            className="pointer-events-none absolute top-[26.7%] left-[62%] w-[59%] -scale-x-100 overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={farFill} x1="1" y1="0.6" x2="0" y2="0">
                <stop offset="0%" stopColor="#f0f9ff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <g transform="translate(200 100) scale(0.5 1) translate(-200 -100)">
              <motion.g style={{ transformOrigin: "200px 100px" }} {...beat(FAR_STROKE)}>
                <WingPair fill={`url(#${farFill})`} stroke="#38bdf8" veins={false} />
              </motion.g>
            </g>
          </svg>

          {/* NEAR pair: sticks out behind her back on the side facing us. */}
          <svg
            viewBox="0 0 200 200"
            className="pointer-events-none absolute top-[31%] left-[-46%] w-[66%] overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={nearFill} x1="1" y1="0.6" x2="0" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="55%" stopColor="#e0f2fe" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.75" />
              </linearGradient>
            </defs>
            <motion.g style={{ transformOrigin: "200px 100px" }} {...beat(NEAR_STROKE)}>
              <WingPair fill={`url(#${nearFill})`} stroke="#0ea5e9" />
            </motion.g>
          </svg>

          <Image
            src="/mascot/ms-bee.png"
            alt="Ms Bee, the friendly bee mascot, reading a book"
            fill
            priority
            sizes="(min-width: 640px) 220px, 160px"
            className="relative object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
