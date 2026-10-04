import type { Metadata } from "next";
import Image from "next/image";
import { Check, Eye, Rocket, Target } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import PhotoStrip from "@/components/PhotoStrip";
import SectionHeading from "@/components/SectionHeading";
import { centerPhotos, coreValues, futureGoals, mission, site, teachingApproach, vision, whyUs } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Vision, mission, values, and teaching approach of Ms Bee Educational Support and Tutorial Center.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Who We Are" title="About Ms Bee" text={site.motto} />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 lg:grid-cols-[1.3fr_1fr]">
        <AnimatedSection direction="left">
          <h2 className="text-3xl font-semibold sm:text-4xl">A student-focused learning hub</h2>
          <div className="mt-5 space-y-4 text-lg text-hive-700">
            <p>
              {site.fullName} is dedicated to providing high-quality academic support and holistic child development.
              Established with a passion for nurturing young minds, we offer structured tutoring, skill-building programs,
              and creative learning experiences for children of different ages.
            </p>
            <p>
              We create a safe, engaging, and stimulating environment where children not only improve academically but also
              develop confidence, curiosity, and essential life skills. Ms Bee is more than a tutoring center — it&apos;s a
              place where children grow academically, socially, and emotionally.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right" className="relative mx-auto w-full max-w-xs">
          <div className="absolute -inset-4 -z-10 rotate-3 rounded-[2.5rem] bg-honey-300" />
          <div className="relative aspect-[674/1200] overflow-hidden rounded-[2rem] shadow-2xl">
            <Image src={centerPhotos.classroom.src} alt={centerPhotos.classroom.alt} fill sizes="320px" className="object-cover" />
          </div>
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={112}
            height={112}
            className="absolute -bottom-6 -left-6 rounded-full bg-white shadow-xl ring-4 ring-honey-300"
          />
        </AnimatedSection>
      </section>

      <section className="bg-hive-900 py-24 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          <AnimatedSection className="rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 sm:p-10">
            <Eye className="h-10 w-10 text-honey-400" />
            <h2 className="mt-4 text-3xl font-semibold text-honey-300">Our Vision</h2>
            <p className="mt-4 text-lg text-honey-50/90">{vision}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 sm:p-10">
            <Target className="h-10 w-10 text-honey-400" />
            <h2 className="mt-4 text-3xl font-semibold text-honey-300">Our Mission</h2>
            <ul className="mt-4 space-y-3">
              {mission.map((m) => (
                <li key={m} className="flex gap-3 text-lg text-honey-50/90">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-honey-400" /> {m}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionHeading eyebrow="Core Values" title="What makes our hive hum" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((v, i) => {
            const Icon = v.icon;
            return (
              <AnimatedSection key={v.title} delay={i * 0.08} className="group rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-honey-100 transition hover:-translate-y-2 hover:shadow-xl">
                <div className="clip-hex mx-auto flex h-16 w-16 items-center justify-center bg-honey-200 text-honey-700 transition group-hover:bg-honey-400 group-hover:text-hive-900">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-1 text-hive-700">{v.text}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="bg-honey-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Teaching Approach" title="Every child learns differently" text="We use a blended approach and adapt our methods to suit each child's needs." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teachingApproach.map((t, i) => {
              const Icon = t.icon;
              return (
                <AnimatedSection key={t.title} delay={i * 0.1} className="rounded-3xl bg-white p-7 shadow-sm">
                  <Icon className="h-9 w-9 text-honey-600" />
                  <h3 className="mt-4 text-xl font-semibold">{t.title}</h3>
                  <p className="mt-2 text-hive-700">{t.text}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-24">
        <SectionHeading eyebrow="Life at Ms Bee" title="Curious minds at work" text="From circle time to our science fair, every day is full of discovery." />
        <PhotoStrip
          photos={[
            { ...centerPhotos.scienceFair, caption: "Ms Bee Science Fair" },
            { ...centerPhotos.experiment, caption: "Hands-on experiments" },
            { ...centerPhotos.circleTime, caption: "Circle time" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionHeading eyebrow="Why Ms Bee" title="Why families choose us" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => {
            const Icon = w.icon;
            return (
              <AnimatedSection key={w.title} delay={i * 0.1} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-honey-100">
                <Icon className="h-9 w-9 text-honey-600" />
                <h3 className="mt-4 text-xl font-semibold">{w.title}</h3>
                <p className="mt-2 text-hive-700">{w.text}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-8">
        <AnimatedSection className="mx-auto max-w-4xl rounded-[2rem] bg-gradient-to-br from-hive-900 to-hive-800 p-8 text-white shadow-xl sm:p-12">
          <Rocket className="h-10 w-10 text-honey-400" />
          <h2 className="mt-4 text-3xl font-semibold text-honey-300">Looking ahead</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {futureGoals.map((g) => (
              <li key={g} className="flex gap-3 text-honey-50/90">
                <Check className="mt-1 h-5 w-5 shrink-0 text-honey-400" /> {g}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </section>

      <CTABanner />
    </>
  );
}
