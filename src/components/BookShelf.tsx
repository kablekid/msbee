"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { books, site, type BookSubject } from "@/lib/data";
import BooksMarquee from "./BooksMarquee";

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
      <BooksMarquee onSelect={setOpen} />

      <div className="mt-20 mb-12 text-center">
        <span className="inline-block rounded-full bg-honey-100 px-4 py-1 text-sm font-bold tracking-wide text-honey-700 uppercase">
          Browse by Subject
        </span>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Find the right book</h2>
        <p className="mt-3 text-lg text-hive-700">Hover over a cover to tilt it, and tap one to see what&apos;s inside.</p>
      </div>

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
              className="relative my-auto flex max-h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            >
              <button onClick={() => setOpen(null)} className="absolute top-3 right-3 z-10 rounded-full bg-honey-100 p-2 hover:bg-honey-200" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
              {/* Phones: small cover beside the title, details below. Larger screens: cover on the left. */}
              <div className="grid grid-cols-[6rem_1fr] gap-x-4 gap-y-4 overflow-y-auto p-5 sm:grid-cols-[0.9fr_1.1fr] sm:grid-rows-[auto_1fr] sm:gap-x-6 sm:p-8">
                <motion.div
                  initial={{ rotateY: -35 }}
                  animate={{ rotateY: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.05 }}
                  style={{ transformPerspective: 1000 }}
                  className="relative aspect-[904/1280] w-full self-start overflow-hidden rounded-r-xl rounded-l-md shadow-xl sm:row-span-2 sm:rounded-r-2xl"
                >
                  <Image src={open.cover} alt={`${open.title} cover`} fill sizes="(min-width: 640px) 320px, 96px" className="object-cover" />
                </motion.div>
                <div className="flex flex-col pr-8 sm:pr-0">
                  <span className={`self-start rounded-full px-3 py-1 text-xs font-bold text-white ${open.accent}`}>
                    {open.subject} · {open.level}
                  </span>
                  <h3 className="mt-2 text-2xl leading-tight font-semibold sm:mt-3 sm:text-3xl">{open.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-honey-700 sm:text-base">{open.series}</p>
                </div>
                <div className="col-span-2 flex flex-col sm:col-span-1 sm:col-start-2">
                  <p className="text-hive-700">{open.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-2 sm:mt-5 sm:block sm:space-y-1.5">
                    {open.skills.map((s) => (
                      <li key={s} className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-sm font-semibold sm:gap-2 sm:bg-transparent sm:p-0 sm:text-base">
                        <Check className="h-4 w-4 text-leaf-500 sm:h-5 sm:w-5" /> {s}
                      </li>
                    ))}
                  </ul>
                  {open.publisher && (
                    <p className="mt-3 text-sm text-hive-700 sm:mt-5">
                      Published by {open.publisher}
                      {open.year ? ` · ${open.year}` : ""}
                    </p>
                  )}
                  <a
                    href={orderLink(open)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/30 transition hover:bg-green-600 sm:mt-auto"
                  >
                    <MessageCircle className="h-5 w-5" /> Order on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
