"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { books } from "@/lib/data";

// Fanned stack of covers that spreads out on hover.
const fan = [-18, -6, 6, 18];

export default function BooksTeaser() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <motion.div
        className="relative mx-auto h-72 w-full max-w-md sm:h-96"
        initial="rest"
        whileHover="spread"
        whileInView="rest"
        viewport={{ once: true }}
      >
        {books.map((b, i) => (
          <motion.div
            key={b.slug}
            className="absolute top-1/2 left-1/2 aspect-[904/1280] w-36 overflow-hidden rounded-r-xl rounded-l-sm shadow-2xl sm:w-48"
            style={{ zIndex: i, x: "-50%", y: "-50%" }}
            variants={{
              rest: { rotate: fan[i] / 2, translateX: (i - 1.5) * 28 },
              spread: { rotate: fan[i], translateX: (i - 1.5) * 80, translateY: Math.abs(i - 1.5) * 14 },
            }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <Image src={b.cover} alt={`${b.title} cover`} fill sizes="200px" className="object-cover" />
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center lg:text-left">
        <span className="inline-block rounded-full bg-pink-100 px-4 py-1 text-sm font-bold tracking-wide text-pink-700 uppercase">Our Own Brand</span>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Ms Bee Activity Books</h2>
        <p className="mt-4 text-lg text-hive-700">
          Alphabet tracing, Jolly Phonics CVC words, counting 1–20, and color by numbers. Levelled activity books created by
          Ms Bee to keep the learning going at home.
        </p>
        <Link
          href="/books"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-hive-900 px-7 py-3.5 font-bold text-white shadow-lg transition hover:bg-hive-800"
        >
          Browse the books <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
