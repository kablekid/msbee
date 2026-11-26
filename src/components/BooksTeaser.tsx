import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import BooksMarquee from "./BooksMarquee";
import { books } from "@/lib/data";

export default function BooksTeaser() {
  return (
    <div>
      <AnimatedSection className="mx-auto mb-6 max-w-2xl text-center sm:mb-10">
        <span className="inline-block rounded-full bg-pink-100 px-4 py-1 text-sm font-bold tracking-wide text-pink-700 uppercase">
          Our Own Brand · {books.length} Titles
        </span>
        <h2 className="mt-3 text-[1.7rem] font-semibold sm:mt-4 sm:text-4xl">Ms Bee Activity Books</h2>
        <p className="mt-4 hidden text-lg text-hive-700 sm:block">
          From First Step for ages 3–4 to phonics, handwriting, maths, and nature: levelled activity books created by Ms Bee
          to keep the learning going at home.
        </p>
      </AnimatedSection>
      <BooksMarquee />
      <AnimatedSection className="mt-10 text-center">
        <Link
          href="/books"
          className="group inline-flex items-center gap-2 rounded-full bg-hive-900 px-7 py-3.5 font-bold text-white shadow-lg transition hover:bg-hive-800"
        >
          Browse all books <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </Link>
      </AnimatedSection>
    </div>
  );
}
