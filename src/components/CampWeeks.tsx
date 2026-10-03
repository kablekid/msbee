"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { campWeeks } from "@/lib/data";

export default function CampWeeks() {
  const [selected, setSelected] = useState(0);
  const week = campWeeks[selected];
  const Icon = week.icon;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
        {campWeeks.map((w, i) => {
          const WIcon = w.icon;
          const active = i === selected;
          return (
            <motion.button
              key={w.week}
              onClick={() => setSelected(i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`relative rounded-2xl p-4 text-left transition-colors ${active ? "text-hive-900" : "bg-white text-hive-700 ring-1 ring-honey-100 hover:ring-honey-300"}`}
              aria-pressed={active}
            >
              {active && <motion.span layoutId="week-active" className="absolute inset-0 rounded-2xl bg-honey-400 shadow-lg" />}
              <span className="relative flex items-center gap-2 text-xs font-bold tracking-wide uppercase">
                <WIcon className="h-4 w-4" /> Week {w.week}
              </span>
              <span className="relative mt-1 block font-display font-medium">{w.theme}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-honey-300 via-honey-400 to-orange-400 p-8 text-hive-900 shadow-2xl sm:p-10">
        <div className="hex-pattern absolute inset-0 opacity-60" />
        <AnimatePresence mode="wait">
          <motion.div
            key={week.week}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            <motion.div
              initial={{ rotate: -30, scale: 0.5 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="clip-hex flex h-20 w-20 items-center justify-center bg-white/80"
            >
              <Icon className="h-10 w-10 text-orange-500" />
            </motion.div>
            <p className="mt-6 font-bold tracking-wide uppercase">
              Week {week.week}
            </p>
            <h3 className="mt-2 text-4xl font-semibold sm:text-5xl">{week.theme}</h3>
            <p className="mt-4 max-w-md text-lg text-hive-800">{week.text}</p>
            <Link
              href="/contact?program=camp"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-hive-900 px-6 py-3 font-bold text-white transition hover:bg-hive-800"
            >
              Reserve this week <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
