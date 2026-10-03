"use client";

import Image from "next/image";
import Link from "next/link";
import { books } from "@/lib/data";

type Book = (typeof books)[number];

// Endless, auto-scrolling rows of book covers. The list is rendered twice so the
// CSS animation can slide by -50% and loop seamlessly. Hover pauses a row.
function Row({ items, reverse, onSelect }: { items: Book[]; reverse?: boolean; onSelect?: (b: Book) => void }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee group/row relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul className={`marquee-track flex w-max gap-6 ${reverse ? "marquee-reverse" : ""}`} style={{ ["--marquee-duration" as string]: `${items.length * 6}s` }}>
        {loop.map((b, i) => {
          const hidden = i >= items.length;
          const cover = (
            <>
              <Image src={b.cover} alt={hidden ? "" : `${b.title} cover`} fill sizes="180px" className="object-cover" />
              <span className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/30 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-hive-900/90 to-transparent p-3 pt-8 text-left text-sm font-bold text-white transition duration-300 group-hover/item:translate-y-0">
                {b.title}
              </span>
            </>
          );
          const cls =
            "group/item relative block aspect-[904/1280] w-36 shrink-0 overflow-hidden rounded-r-xl rounded-l-sm shadow-lg shadow-hive-900/15 transition duration-300 hover:-translate-y-2 hover:rotate-[-2deg] hover:shadow-2xl sm:w-44";
          return (
            <li key={`${b.slug}-${i}`} aria-hidden={hidden || undefined}>
              {onSelect ? (
                <button onClick={() => onSelect(b)} className={cls} tabIndex={hidden ? -1 : undefined} aria-label={hidden ? undefined : `View ${b.title}`}>
                  {cover}
                </button>
              ) : (
                <Link href="/books" className={cls} tabIndex={hidden ? -1 : undefined} aria-label={hidden ? undefined : `${b.title}, see all books`}>
                  {cover}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function BooksMarquee({ onSelect }: { onSelect?: (b: Book) => void }) {
  const half = Math.ceil(books.length / 2);
  // Two rows moving in opposite directions, each showing every book in a different order.
  const rowA = books;
  const rowB = [...books.slice(half), ...books.slice(0, half)].reverse();
  return (
    <div className="-mx-4 space-y-2 sm:mx-0">
      <Row items={rowA} onSelect={onSelect} />
      <Row items={rowB} reverse onSelect={onSelect} />
    </div>
  );
}
