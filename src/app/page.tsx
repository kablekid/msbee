import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import BooksTeaser from "@/components/BooksTeaser";
import CurriculumSection from "@/components/CurriculumSection";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import ProgramsAtAGlance from "@/components/ProgramsAtAGlance";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import ProgramCards from "@/components/ProgramCards";
import SectionHeading from "@/components/SectionHeading";
import StatsCounter from "@/components/StatsCounter";
import SystemSplash from "@/components/SystemSplash";
import { site, teachingApproach, whyUs } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 sm:-mt-4">
        <StatsCounter />
      </section>

      <section className="mx-auto mt-6 max-w-6xl px-4 sm:mt-12">
        <SystemSplash />
      </section>

      <section id="programs" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:py-24">
        <SectionHeading
          eyebrow="Our Programs"
          title="Learning for every stage"
          text="From kindergarten readiness to high school exams, we support children with programs designed around how they really learn."
        />
        <ProgramCards />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:pb-24">
        <CurriculumSection />
      </section>

      <section className="bg-honey-50 py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Why Ms Bee" title="A place families trust" />
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={item.title}
                  delay={i * 0.1}
                  className="group rounded-3xl bg-white p-4 text-center shadow-sm sm:p-7 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="clip-hex mx-auto flex h-12 w-12 items-center justify-center bg-honey-200 text-honey-700 transition group-hover:bg-honey-400 group-hover:text-hive-900 sm:h-16 sm:w-16">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="mt-3 text-base leading-tight font-semibold sm:mt-5 sm:text-xl">{item.title}</h3>
                  <p className="mt-2 hidden text-hive-700 sm:block">{item.text}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto hidden max-w-7xl px-4 py-24 sm:block">
        <SectionHeading
          eyebrow="Programs at a Glance"
          title="Five ways to learn with Ms Bee"
          text="Monthly plans with flexible times that fit your family's schedule. Call or WhatsApp us for current fees."
        />
        <ProgramsAtAGlance />
        <AnimatedSection className="mt-10 text-center">
          <Link href="/programs" className="group inline-flex items-center gap-2 font-bold text-honey-700">
            Explore all programs <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </section>

      <section className="hex-pattern bg-hive-900 py-14 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
            <span className="inline-block rounded-full bg-honey-400 px-4 py-1 text-sm font-bold tracking-wide text-hive-900 uppercase">Our Approach</span>
            <h2 className="mt-3 text-[1.7rem] font-semibold text-honey-300 sm:mt-4 sm:text-4xl">Every child learns differently</h2>
            <p className="mt-4 text-lg text-honey-50/80">&ldquo;{site.motto}&rdquo;</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {teachingApproach.map((t, i) => {
              const Icon = t.icon;
              return (
                <AnimatedSection key={t.title} delay={i * 0.1} className="rounded-3xl bg-white/5 p-4 ring-1 sm:p-7 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10">
                  <Icon className="h-7 w-7 text-honey-400 sm:h-9 sm:w-9" />
                  <h3 className="mt-3 text-base leading-tight font-semibold sm:mt-4 sm:text-xl">{t.title}</h3>
                  <p className="mt-2 hidden text-honey-50/80 sm:block">{t.text}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-24">
        <BooksTeaser />
      </section>

      <section className="bg-gradient-to-b from-white to-honey-50 py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Life at the Hive" title="A peek inside our days" />
          <Gallery limit={8} mobileLimit={5} />
          <AnimatedSection className="mt-10 text-center">
            <Link href="/gallery" className="group inline-flex items-center gap-2 font-bold text-honey-700">
              View full gallery <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-24">
        <SectionHeading eyebrow="FAQ" title="Questions? We've got answers" />
        <FAQAccordion mobileLimit={4} />
      </section>

      <CTABanner />
    </>
  );
}
