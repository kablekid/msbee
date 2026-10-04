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
// box, extending left; a positive angle lifts the wing.

// Upstroke a touch quicker than the downstroke, for a soft, buoyant flutter.
const BEAT = { duration: 0.7, repeat: Infinity, ease: "easeInOut" as const, times: [0, 0.45, 1] };
const FAR_STROKE = [-44, 36, -44];

// The NEAR pair is fully visible where it meets her body, so instead of swinging
// the whole wing (which makes the base slide and look detached), each frame bends
// it: points rotate about the root by an angle that grows with distance from the
// root. The base stays anchored to her back and the flex builds toward the tip.
type Pt = [number, number];
type Seg = ["M", Pt] | ["C", Pt, Pt, Pt] | ["Z"];
const ROOT: Pt = [200, 100];

const NEAR_FOREWING: Seg[] = [
  ["M", [200, 99]],
  ["C", [186, 90], [168, 70], [140, 52]],
  ["C", [112, 34], [72, 18], [44, 22]],
  ["C", [20, 26], [14, 46], [30, 60]],
  ["C", [52, 80], [120, 94], [200, 101]],
  ["Z"],
];
const NEAR_HINDWING: Seg[] = [
  ["M", [200, 102]],
  ["C", [176, 108], [140, 122], [112, 140]],
  ["C", [88, 156], [70, 174], [82, 184]],
  ["C", [96, 194], [140, 170], [200, 104]],
  ["Z"],
];
const NEAR_VEINS: Seg[] = [
  ["M", [196, 100]],
  ["C", [160, 80], [110, 50], [52, 34]],
  ["M", [196, 100]],
  ["C", [150, 92], [100, 76], [46, 56]],
  ["M", [196, 103]],
  ["C", [160, 120], [120, 150], [90, 176]],
];

function bendPoint([x, y]: Pt, angleDeg: number): Pt {
  const dx = x - ROOT[0];
  const dy = y - ROOT[1];
  const reach = Math.min(Math.hypot(dx, dy) / 180, 1);
  const a = ((angleDeg * Math.pow(reach, 1.5)) * Math.PI) / 180;
  // Screen coords (y down): a positive angle turns clockwise, lifting a wing that points left.
  return [ROOT[0] + dx * Math.cos(a) - dy * Math.sin(a), ROOT[1] + dx * Math.sin(a) + dy * Math.cos(a)];
}

function bentPath(segs: Seg[], angleDeg: number) {
  const f = (p: Pt) => bendPoint(p, angleDeg).map((n) => n.toFixed(1)).join(" ");
  return segs
    .map((s) => (s[0] === "Z" ? "Z" : s[0] === "M" ? `M${f(s[1])}` : `C${f(s[1])} ${f(s[2])} ${f(s[3])}`))
    .join(" ");
}

// Wing-tip angle at the bottom and top of each beat.
const NEAR_DOWN = -16;
const NEAR_UP = 24;
const nearFrames = (segs: Seg[]) => [bentPath(segs, NEAR_DOWN), bentPath(segs, NEAR_UP), bentPath(segs, NEAR_DOWN)];
const NEAR_REST = { fore: bentPath(NEAR_FOREWING, 4), hind: bentPath(NEAR_HINDWING, 4), veins: bentPath(NEAR_VEINS, 4) };
const NEAR_ANIM = { fore: nearFrames(NEAR_FOREWING), hind: nearFrames(NEAR_HINDWING), veins: nearFrames(NEAR_VEINS) };

// The FAR pair swings rigidly from its root, which is hidden behind her body.
function WingPair({ fill, stroke }: { fill: string; stroke: string }) {
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
                <WingPair fill={`url(#${farFill})`} stroke="#38bdf8" />
              </motion.g>
            </g>
          </svg>

          {/* NEAR pair: sticks out behind her back on the side facing us. */}
          <svg
            viewBox="0 0 200 200"
            className="pointer-events-none absolute top-[28.9%] left-[-46%] w-[72%] overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={nearFill} x1="1" y1="0.6" x2="0" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="55%" stopColor="#e0f2fe" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.75" />
              </linearGradient>
            </defs>
            {(["fore", "hind"] as const).map((part) => (
              <motion.path
                key={part}
                d={NEAR_REST[part]}
                {...(reduce ? {} : { animate: { d: NEAR_ANIM[part] }, transition: BEAT })}
                fill={`url(#${nearFill})`}
                stroke="#0ea5e9"
                strokeOpacity="0.75"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            ))}
            <motion.path
              d={NEAR_REST.veins}
              {...(reduce ? {} : { animate: { d: NEAR_ANIM.veins }, transition: BEAT })}
              fill="none"
              stroke="#0ea5e9"
              strokeOpacity="0.35"
              strokeWidth="2"
              strokeLinecap="round"
            />
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
