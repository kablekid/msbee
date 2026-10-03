import type { Metadata } from "next";
import { BookOpen, MessageCircle, Sparkles, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import BookShelf from "@/components/BookShelf";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { books, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ms Bee Activity Books",
  description: "Ms Bee's own brand of activity books for ages 3+: First Step, alphabet tracing, Jolly Phonics CVC words, maths, nature, and color by numbers.",
};

const perks = [
  { icon: BookOpen, title: "Made by teachers", text: "Written from years of hands-on teaching at Ms Bee's center." },
  { icon: Star, title: "Levelled learning", text: "Clear levels so children build skills step by step." },
  { icon: Sparkles, title: "Fun to use", text: "Bright pages, friendly bees, and activities kids ask for." },
];

export default function BooksPage() {
  return (
    <>
      <PageHero
        eyebrow={`Our Own Brand · ${books.length} Titles`}
        title="Ms Bee Activity Books"
        text="Colourful, levelled activity books that bring Ms Bee's classroom home: phonics, handwriting, maths, and more."
        gradient="from-pink-100 via-honey-50 to-[#fffdf7]"
      />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading eyebrow="The Collection" title="Meet the whole hive of books" text="Pause on any cover, or tap it to see what's inside." />
        <BookShelf />
      </section>

      <section className="bg-honey-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimatedSection key={p.title} delay={i * 0.1} className="rounded-3xl bg-white p-7 text-center shadow-sm">
                <div className="clip-hex mx-auto flex h-16 w-16 items-center justify-center bg-honey-300">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-hive-700">{p.text}</p>
              </AnimatedSection>
            );
          })}
        </div>
        <AnimatedSection className="mx-auto mt-12 max-w-2xl px-4 text-center">
          <p className="text-lg text-hive-700">
            Books are available at our Torhailoch center. VIP Intensive Program students receive books free.
          </p>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Ms Bee! I'd like to know more about your activity books.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-green-500/30 transition hover:bg-green-600"
          >
            <MessageCircle className="h-5 w-5" /> Ask about books on WhatsApp
          </a>
        </AnimatedSection>
      </section>

      <CTABanner />
    </>
  );
}
