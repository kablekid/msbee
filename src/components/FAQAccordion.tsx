"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs, type ProgramKey } from "@/lib/data";

export default function FAQAccordion({ program, mobileLimit }: { program?: ProgramKey; mobileLimit?: number }) {
  const items = program ? faqs.filter((f) => !f.program || f.program === program) : faqs;
  const [open, setOpen] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const clipped = mobileLimit !== undefined && !showAll && items.length > mobileLimit;

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`${clipped && i >= mobileLimit ? "hidden sm:block" : ""} overflow-hidden rounded-2xl bg-white ring-1 transition-shadow ${isOpen ? "shadow-lg ring-honey-300" : "ring-honey-100 hover:shadow-md"}`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              aria-expanded={isOpen}
            >
              <span className="font-display font-medium text-hive-900 sm:text-lg">{item.q}</span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 rounded-full bg-honey-100 p-1.5 text-honey-700">
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-6 pb-6 text-hive-700">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
      {clipped && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full rounded-2xl bg-honey-100 py-3 font-bold text-honey-700 sm:hidden"
        >
          Show all {items.length} questions
        </button>
      )}
    </div>
  );
}
