"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

// Ms Bee mascot: the character artwork (wingless PNG) with animated SVG wings
// flapping behind her back while she gently hovers.
// Wing coordinates: each wing is drawn with its root at (200, 100) in a 200×200 box,
// so rotating around that point makes it flap from the shoulder.
export default function MsBeeMascot({
  className = "",
  flip = false,
}: {
  className?: string;
  /** Mirror her so she faces left (wings move to her other side). */
  flip?: boolean;
}) {
  const reduce = useReducedMotion();
  const flap = (from: number, to: number, delay = 0) =>
    reduce
      ? undefined
      : {
          animate: { rotate: [from, to, from] },
          transition: {
            duration: 0.18,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        };

  return (
    <div className={className}>
      <div className={flip ? "-scale-x-100" : undefined}>
        <motion.div
          className="relative aspect-[518/753] w-full"
          animate={reduce ? undefined : { y: [0, -14, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 200 200"
            className="pointer-events-none absolute top-[31%] left-[-46%] w-[66%] overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="msbee-wing" x1="1" y1="0.6" x2="0" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="55%" stopColor="#e0f2fe" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.75" />
              </linearGradient>
              <linearGradient
                id="msbee-wing-back"
                x1="1"
                y1="0.6"
                x2="0"
                y2="0"
              >
                <stop offset="0%" stopColor="#f0f9ff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.55" />
              </linearGradient>
            </defs>

            {/* back pair (slightly darker, offset) */}
            <motion.g
              style={{ transformOrigin: "200px 100px" }}
              {...flap(-4, 26, 0.04)}
            >
              <path
                d="M200 96 C150 6 52 -14 22 22 C-2 52 52 98 200 96 Z"
                fill="url(#msbee-wing-back)"
                stroke="#38bdf8"
                strokeOpacity="0.6"
                strokeWidth="2.5"
                transform="rotate(-14 200 100)"
              />
              <path
                d="M200 106 C150 116 70 140 62 170 C56 194 128 186 200 106 Z"
                fill="url(#msbee-wing-back)"
                stroke="#38bdf8"
                strokeOpacity="0.6"
                strokeWidth="2.5"
                transform="rotate(-10 200 100)"
              />
            </motion.g>

            {/* front pair */}
            <motion.g
              style={{ transformOrigin: "200px 100px" }}
              {...flap(6, -22)}
            >
              {/* upper wing */}
              <path
                d="M200 96 C152 10 56 -10 26 26 C2 56 56 100 200 96 Z"
                fill="url(#msbee-wing)"
                stroke="#0ea5e9"
                strokeOpacity="0.75"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M198 96 Q120 52 44 30 M198 96 Q126 72 52 66 M150 76 Q118 40 86 18"
                fill="none"
                stroke="#0ea5e9"
                strokeOpacity="0.35"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <ellipse
                cx="78"
                cy="38"
                rx="20"
                ry="7"
                fill="#ffffff"
                opacity="0.7"
                transform="rotate(-25 78 38)"
              />
              {/* lower wing */}
              <path
                d="M200 104 C150 112 72 134 64 166 C58 192 130 184 200 104 Z"
                fill="url(#msbee-wing)"
                stroke="#0ea5e9"
                strokeOpacity="0.75"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M198 106 Q130 136 76 168 M168 118 Q130 150 104 178"
                fill="none"
                stroke="#0ea5e9"
                strokeOpacity="0.35"
                strokeWidth="2"
                strokeLinecap="round"
              />
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
