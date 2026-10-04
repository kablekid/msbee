"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { gallery, type GalleryCategory } from "@/lib/data";

const filters: ("All" | GalleryCategory)[] = ["All", "Tutoring", "Early Years", "Summer Camp"];

export default function Gallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)).slice(0, limit);

  const step = useCallback(
    (dir: number) => setActive((a) => (a === null ? a : (a + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, step]);

  const current = active !== null ? items[active] : null;

  return (
    <div>
      {!limit && (
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className="relative rounded-full px-5 py-2.5 font-bold"
            >
              {filter === f && (
                <motion.span layoutId="gallery-filter" className="absolute inset-0 rounded-full bg-honey-400 shadow-md" />
              )}
              <span className={`relative ${filter === f ? "text-hive-900" : "text-hive-700 hover:text-hive-900"}`}>{f}</span>
            </button>
          ))}
        </div>
      )}

      <motion.ul layout className="grid grid-flow-dense grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.li
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={item.photo ? "row-span-2" : ""}
            >
              <button
                onClick={() => setActive(i)}
                className={`group relative flex h-full min-h-40 w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${item.gradient} sm:min-h-52`}
                aria-label={`Open ${item.title}`}
              >
                {item.photo ? (
                  <Image
                    src={item.photo}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-6xl transition duration-500 group-hover:scale-125 group-hover:rotate-6 sm:text-7xl">{item.emoji}</span>
                )}
                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-hive-900/80 to-transparent p-4 text-left text-white transition duration-300 group-hover:translate-y-0">
                  <span className="block font-display text-lg font-medium">{item.title}</span>
                  <span className="text-sm text-honey-200">{item.category}</span>
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-hive-900/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
          >
            <button className="absolute top-5 right-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" aria-label="Close">
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl"
            >
              {current.photo ? (
                <div className="relative mx-auto aspect-[674/1200] h-[70vh] max-w-full overflow-hidden rounded-3xl shadow-2xl">
                  <Image src={current.photo} alt={current.title} fill sizes="(min-width: 640px) 400px, 90vw" className="object-cover" />
                </div>
              ) : (
                <div className={`flex aspect-[4/3] items-center justify-center rounded-3xl bg-gradient-to-br ${current.gradient} shadow-2xl`}>
                  <span className="text-[8rem] sm:text-[11rem]">{current.emoji}</span>
                </div>
              )}
              <div className="mt-4 text-center text-white">
                <p className="font-display text-2xl">{current.title}</p>
                <p className="text-honey-200">
                  {current.category} · {(active ?? 0) + 1} / {items.length}
                </p>
              </div>
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); step(1); }}
              className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
