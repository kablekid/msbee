"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Flower from "./Flower";
import MsBeeMascot from "./MsBeeMascot";

const bubbles = [
  { label: "Tutoring", emoji: "📚", className: "top-6 left-0 bg-sky-100", delay: 0.6 },
  { label: "Summer Camp", emoji: "☀️", className: "top-1/2 -right-2 bg-honey-100", delay: 0.8 },
  { label: "Early Years", emoji: "🧸", className: "bottom-4 left-6 bg-emerald-100", delay: 1 },
];

export default function Hero() {
  return (
    <section className="hex-pattern relative overflow-hidden bg-gradient-to-b from-honey-100 via-honey-50 to-[#fffdf7] pt-24 pb-10 sm:pt-36 sm:pb-24">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-honey-300/30 blur-3xl" />
      <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-4 px-4 sm:gap-12 lg:grid-cols-2">
        <div>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="hidden sm:block">
            <Link
              href="/programs"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-hive-800 shadow-md ring-1 ring-honey-200 transition hover:ring-honey-400"
            >
              <span className="rounded-full bg-honey-400 px-2 py-0.5 text-xs">NEW</span>
              Now enrolling: tutoring, early years & online
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-[2.6rem] leading-[1.05] font-semibold text-hive-900 sm:mt-6 sm:text-6xl lg:text-7xl"
          >
            Where little minds{" "}
            <span className="relative inline-block text-honey-600">
              buzz
              <motion.svg viewBox="0 0 200 20" className="absolute -bottom-2 left-0 w-full" aria-hidden="true">
                <motion.path
                  d="M2 15 Q50 2 100 12 T198 8"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </motion.svg>
            </span>{" "}
            with big ideas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-4 max-w-xl text-lg text-hive-700 sm:mt-6 sm:text-xl"
          >
            <span className="sm:hidden">Tutoring from KG to high school, early years, online classes and summer camp in Torhailoch, Addis Ababa.</span>
            <span className="hidden sm:inline">Ms Bee Educational Support and Tutorial Center in Torhailoch, Addis Ababa offers tutoring from kindergarten to
            high school with Cambridge, Pearson, and Ethiopian curriculum-based books, plus early years readiness, online
            classes, and a July–August summer camp.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex gap-3 sm:mt-8"
          >
            <Link
              href="/contact"
              className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-hive-900 px-4 py-3.5 font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-hive-800 sm:flex-none sm:px-8 sm:py-4 sm:text-lg"
            >
              <span className="sm:hidden">Enroll Now</span>
              <span className="hidden sm:inline">Enroll Your Child</span>
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-3.5 font-bold text-hive-900 shadow-md ring-1 ring-honey-200 transition hover:-translate-y-0.5 hover:ring-honey-400 sm:flex-none sm:px-8 sm:py-4 sm:text-lg"
            >
              <Sparkles className="hidden h-5 w-5 text-honey-500 sm:block" />
              Our Programs
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 hidden items-center gap-3 sm:flex">
            <div className="flex -space-x-3">
              {["bg-sky-300", "bg-pink-300", "bg-honey-300", "bg-emerald-300"].map((c, i) => (
                <span key={c} className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white ${c} text-lg`}>
                  {["👧", "👦", "🧒", "👶"][i]}
                </span>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-hive-700">Learn • Grow • Succeed</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-first mx-auto aspect-square w-full max-w-[16rem] sm:max-w-md lg:order-none"
        >
          <motion.div
            className="clip-hex absolute inset-6 bg-gradient-to-br from-honey-300 to-honey-500 shadow-2xl"
            animate={{ rotate: [0, 4, 0, -4, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Ms Bee's meadow inside the hexagon */}
          <div className="clip-hex absolute inset-10 overflow-hidden bg-gradient-to-b from-sky-200 via-sky-50 to-honey-50">
            <div className="hex-pattern absolute inset-0 opacity-70" />
            <div className="absolute top-[12%] left-[16%] h-10 w-20 rounded-full bg-white/80 blur-[2px]" />
            <div className="absolute top-[20%] right-[18%] h-8 w-16 rounded-full bg-white/70 blur-[2px]" />
            <div className="absolute -bottom-10 left-1/2 h-28 w-[120%] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-green-300 to-green-500" />
            <Flower kind="pink" className="absolute bottom-6 left-[24%] h-16 sm:h-20" delay={0.2} />
            <Flower kind="sunflower" className="absolute bottom-3 left-[36%] h-20 sm:h-24" />
            <Flower kind="daisy" className="absolute bottom-7 left-[52%] h-14 sm:h-16" delay={0.5} />
            <Flower kind="sky" className="absolute bottom-4 left-[63%] h-16 sm:h-20" delay={0.3} />
          </div>
          <MsBeeMascot flip className="absolute top-[14%] left-[20%] z-10 w-[38%]" />
          <Flower kind="sunflower" className="absolute right-6 -bottom-2 z-10 h-24 sm:h-28" delay={0.4} />
          <Flower kind="pink" className="absolute right-20 bottom-0 z-10 h-16 sm:h-20" delay={0.1} />
          {bubbles.map((b) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{ opacity: { delay: b.delay }, scale: { delay: b.delay, type: "spring" }, y: { delay: b.delay, duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className={`absolute flex items-center gap-1.5 rounded-2xl px-2.5 py-1.5 text-xs font-bold text-hive-900 shadow-lg sm:gap-2 sm:px-4 sm:py-3 sm:text-base ${b.className}`}
            >
              <span className="text-base sm:text-2xl">{b.emoji}</span>
              {b.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
