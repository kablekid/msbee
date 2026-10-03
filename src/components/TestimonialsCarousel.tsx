"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

export default function TestimonialsCarousel() {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const paginate = useCallback((dir: number) => {
    setState(([i]) => [(i + dir + testimonials.length) % testimonials.length, dir]);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => paginate(1), 6000);
    return () => clearInterval(id);
  }, [paused, paginate]);

  const t = testimonials[index];

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-honey-100 sm:min-h-[280px] sm:p-12">
        <Quote className="absolute top-6 right-6 h-16 w-16 text-honey-100" />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.figure
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) paginate(1);
              else if (info.offset.x > 60) paginate(-1);
            }}
            className="relative cursor-grab active:cursor-grabbing"
          >
            <div className="flex gap-1 text-honey-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-5 text-xl leading-relaxed text-hive-800 sm:text-2xl">“{t.quote}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="clip-hex flex h-12 w-12 items-center justify-center bg-honey-300 font-display text-lg font-semibold">
                {t.name[0]}
              </span>
              <span>
                <span className="block font-bold text-hive-900">{t.name}</span>
                <span className="text-sm text-hive-700">{t.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button onClick={() => paginate(-1)} className="rounded-full bg-white p-3 shadow-md transition hover:bg-honey-100" aria-label="Previous testimonial">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setState([i, i > index ? 1 : -1])}
              className={`h-3 rounded-full transition-all ${i === index ? "w-8 bg-honey-500" : "w-3 bg-honey-200 hover:bg-honey-300"}`}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
        <button onClick={() => paginate(1)} className="rounded-full bg-white p-3 shadow-md transition hover:bg-honey-100" aria-label="Next testimonial">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
