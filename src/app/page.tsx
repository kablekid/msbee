import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import ProgramCards from "@/components/ProgramCards";
import SectionHeading from "@/components/SectionHeading";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { whyUs } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto -mt-4 max-w-6xl px-4">
        <StatsCounter />
      </section>

      <section id="programs" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24">
        <SectionHeading
          eyebrow="Our Programs"
          title="Three ways to join the hive"
          text="From first steps to final exams, we support children at every stage with programs designed around how kids really learn."
        />
        <ProgramCards />
      </section>

      <section className="bg-honey-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Why Ms Bee" title="A place families trust" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={item.title}
                  delay={i * 0.1}
                  className="group rounded-3xl bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="clip-hex mx-auto flex h-16 w-16 items-center justify-center bg-honey-200 text-honey-700 transition group-hover:bg-honey-400 group-hover:text-hive-900">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-hive-700">{item.text}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="px-4">
          <SectionHeading eyebrow="Happy Families" title="What parents are saying" />
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-honey-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Life at the Hive" title="A peek inside our days" />
          <Gallery limit={8} />
          <AnimatedSection className="mt-10 text-center">
            <Link href="/gallery" className="group inline-flex items-center gap-2 font-bold text-honey-700">
              View full gallery <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 py-24">
        <SectionHeading eyebrow="FAQ" title="Questions? We've got answers" />
        <FAQAccordion />
      </section>

      <CTABanner />
    </>
  );
}
