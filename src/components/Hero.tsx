"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import BeeMascot from "./BeeMascot";

const bubbles = [
  { label: "Tutoring", emoji: "📚", className: "top-6 left-0 bg-sky-100", delay: 0.6 },
  { label: "Summer Camp", emoji: "☀️", className: "top-1/2 -right-2 bg-honey-100", delay: 0.8 },
  { label: "Early Years", emoji: "🧸", className: "bottom-4 left-6 bg-emerald-100", delay: 1 },
];

export default function Hero() {
  return (
    <section className="hex-pattern relative overflow-hidden bg-gradient-to-b from-honey-100 via-honey-50 to-[#fffdf7] pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-honey-300/30 blur-3xl" />
      <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
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
            className="mt-6 text-5xl leading-[1.05] font-semibold text-hive-900 sm:text-6xl lg:text-7xl"
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
            className="mt-6 max-w-xl text-lg text-hive-700 sm:text-xl"
          >
            Ms Bee Educational Support and Tutorial Center in Torhailoch, Addis Ababa offers tutoring from kindergarten to
            high school, early years readiness, online classes, and a themed summer camp. Quality learning, better future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-hive-900 px-8 py-4 text-lg font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-hive-800"
            >
              Enroll Your Child
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-hive-900 shadow-md ring-1 ring-honey-200 transition hover:-translate-y-0.5 hover:ring-honey-400"
            >
              <Sparkles className="h-5 w-5 text-honey-500" />
              Programs & Fees
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 flex items-center gap-3">
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
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <motion.div
            className="clip-hex absolute inset-6 bg-gradient-to-br from-honey-300 to-honey-500 shadow-2xl"
            animate={{ rotate: [0, 4, 0, -4, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="clip-hex absolute inset-14 bg-honey-100/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <BeeMascot className="w-3/5 drop-shadow-xl" />
          </div>
          {bubbles.map((b) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{ opacity: { delay: b.delay }, scale: { delay: b.delay, type: "spring" }, y: { delay: b.delay, duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className={`absolute flex items-center gap-2 rounded-2xl px-4 py-3 font-bold text-hive-900 shadow-lg ${b.className}`}
            >
              <span className="text-2xl">{b.emoji}</span>
              {b.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
