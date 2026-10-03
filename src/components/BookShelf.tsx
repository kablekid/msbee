"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { bookPublisher, books, site, type BookSubject } from "@/lib/data";

type Book = (typeof books)[number];

const filters: ("All" | BookSubject)[] = ["All", ...Array.from(new Set(books.map((b) => b.subject)))];

const orderLink = (book: Book) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello Ms Bee! I'd like to order the activity book "${book.title}" (${book.level}). Is it available, and what is the price?`,
  )}`;

function TiltCover({ book, onOpen }: { book: Book; onOpen: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), { stiffness: 200, damping: 18 });
  const glare = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareBg = useTransform(glare, (g) => `linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.35) ${g}, transparent 80%)`);

  return (
    <motion.button
      onClick={onOpen}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="group relative block aspect-[904/1280] w-full overflow-hidden rounded-r-2xl rounded-l-md shadow-xl shadow-hive-900/20"
      aria-label={`View ${book.title}`}
    >
      <Image src={book.cover} alt={`${book.title} cover`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw" className="object-cover" />
      {/* book spine */}
      <span className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/30 to-transparent" />
      <motion.span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glareBg }}
      />
      <span className="absolute inset-x-3 bottom-3 translate-y-4 rounded-full bg-hive-900/85 py-2 text-sm font-bold text-white opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        View details
      </span>
    </motion.button>
  );
}

export default function BookShelf() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<Book | null>(null);
  const shown = filter === "All" ? books : books.filter((b) => b.subject === filter);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div>
      <div className="mb-12 flex flex-wrap justify-center gap-2" role="tablist">
        {filters.map((f) => (
          <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)} className="relative rounded-full px-5 py-2.5 font-bold">
            {filter === f && <motion.span layoutId="book-filter" className="absolute inset-0 rounded-full bg-honey-400 shadow-md" />}
            <span className={`relative ${filter === f ? "text-hive-900" : "text-hive-700 hover:text-hive-900"}`}>{f}</span>
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {shown.map((book, i) => (
            <motion.li
              key={book.slug}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { delay: i * 0.08 } }}
              exit={{ opacity: 0, scale: 0.85 }}
              className="mx-auto w-full max-w-xs"
            >
              <TiltCover book={book} onOpen={() => setOpen(book)} />
              <div className="mt-5 text-center">
                <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-bold text-white ${book.accent}`}>
                  {book.subject} · {book.level}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{book.title}</h3>
                <p className="text-sm text-hive-700">{book.series}</p>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-hive-900/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative my-auto grid w-full max-w-3xl gap-6 rounded-[2rem] bg-white p-5 shadow-2xl sm:grid-cols-[0.9fr_1.1fr] sm:p-8"
            >
              <button onClick={() => setOpen(null)} className="absolute top-3 right-3 z-10 rounded-full bg-honey-100 p-2 hover:bg-honey-200" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
              <motion.div
                initial={{ rotateY: -35 }}
                animate={{ rotateY: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.05 }}
                style={{ transformPerspective: 1000 }}
                className="relative mx-auto aspect-[904/1280] w-48 overflow-hidden rounded-r-2xl rounded-l-md shadow-xl sm:w-full"
              >
                <Image src={open.cover} alt={`${open.title} cover`} fill sizes="(min-width: 640px) 320px, 192px" className="object-cover" />
              </motion.div>
              <div className="flex flex-col">
                <span className={`self-start rounded-full px-3 py-1 text-xs font-bold text-white ${open.accent}`}>
                  {open.subject} · {open.level}
                </span>
                <h3 className="mt-3 text-3xl font-semibold">{open.title}</h3>
                <p className="font-semibold text-honey-700">{open.series}</p>
                <p className="mt-4 text-hive-700">{open.description}</p>
                <p className="mt-5 font-display font-medium">Skills practised</p>
                <ul className="mt-2 space-y-1.5">
                  {open.skills.map((s) => (
                    <li key={s} className="flex items-center gap-2 font-semibold">
                      <Check className="h-5 w-5 text-leaf-500" /> {s}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-hive-700">Published by {bookPublisher} · 2023</p>
                <a
                  href={orderLink(open)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/30 transition hover:bg-green-600 sm:mt-auto"
                >
                  <MessageCircle className="h-5 w-5" /> Order on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
