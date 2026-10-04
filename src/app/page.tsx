import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import BooksTeaser from "@/components/BooksTeaser";
import CurriculumSection from "@/components/CurriculumSection";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import FeesAtAGlance from "@/components/FeesAtAGlance";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import ProgramCards from "@/components/ProgramCards";
import SectionHeading from "@/components/SectionHeading";
import StatsCounter from "@/components/StatsCounter";
import { site, teachingApproach, whyUs } from "@/lib/data";

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
          title="Learning for every stage"
          text="From kindergarten readiness to high school exams, we support children with programs designed around how they really learn."
        />
        <ProgramCards />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24">
        <CurriculumSection />
      </section>

      <section className="bg-honey-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Why Ms Bee" title="A place families trust" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionHeading
          eyebrow="Fees at a Glance"
          title="Five ways to learn with Ms Bee"
          text="Monthly plans, paid in advance, with flexible times that fit your family's schedule."
        />
        <FeesAtAGlance />
        <AnimatedSection className="mt-10 text-center">
          <Link href="/programs" className="group inline-flex items-center gap-2 font-bold text-honey-700">
            See the full price list <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </section>

      <section className="hex-pattern bg-hive-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-honey-400 px-4 py-1 text-sm font-bold tracking-wide text-hive-900 uppercase">Our Approach</span>
            <h2 className="mt-4 text-3xl font-semibold text-honey-300 sm:text-4xl">Every child learns differently</h2>
            <p className="mt-4 text-lg text-honey-50/80">&ldquo;{site.motto}&rdquo;</p>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teachingApproach.map((t, i) => {
              const Icon = t.icon;
              return (
                <AnimatedSection key={t.title} delay={i * 0.1} className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10">
                  <Icon className="h-9 w-9 text-honey-400" />
                  <h3 className="mt-4 text-xl font-semibold">{t.title}</h3>
                  <p className="mt-2 text-honey-50/80">{t.text}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <BooksTeaser />
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
