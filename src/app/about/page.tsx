import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import BeeMascot from "@/components/BeeMascot";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StatsCounter from "@/components/StatsCounter";
import { team, whyUs } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team behind Ms Bee Educational Support.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our Story" title="About Ms Bee" text="A small dream that grew into a buzzing community of learners, families, and teachers." />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 lg:grid-cols-2">
        <AnimatedSection direction="left">
          <h2 className="text-3xl font-semibold sm:text-4xl">It started at a kitchen table</h2>
          <div className="mt-5 space-y-4 text-lg text-hive-700">
            <p>
              Ms Bee began when our founder, a veteran elementary teacher, started helping neighborhood kids with homework
              after school. Word spread, the table got crowded, and soon families were asking: “Can you watch my little one
              too? What about summer?”
            </p>
            <p>
              Today, Ms Bee Educational Support is a full learning hive — tutoring for school-age kids, a daycare for the
              youngest learners, and a summer camp that kids count down the days for. Our mission hasn&apos;t changed: help every
              child feel capable, curious, and cared for.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right" className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="clip-hex absolute inset-0 bg-gradient-to-br from-honey-300 to-honey-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <BeeMascot className="w-3/5" />
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <StatsCounter />
      </section>

      <section className="bg-honey-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Our Team" title="Meet the worker bees" text="Passionate educators who show up every day for your child." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 0.1} className="group rounded-[2rem] bg-white p-7 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                <div className={`clip-hex mx-auto flex h-28 w-28 items-center justify-center ${m.color} font-display text-4xl font-semibold text-hive-900 transition duration-500 group-hover:rotate-[30deg]`}>
                  <span className="transition duration-500 group-hover:-rotate-[30deg]">
                    {m.name.split(" ").slice(1).map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{m.name}</h3>
                <p className="font-bold text-honey-700">{m.role}</p>
                <p className="mt-3 text-hive-700">{m.bio}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionHeading eyebrow="Our Values" title="What makes our hive hum" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((v, i) => {
            const Icon = v.icon;
            return (
              <AnimatedSection key={v.title} delay={i * 0.1} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-honey-100">
                <Icon className="h-9 w-9 text-honey-600" />
                <h3 className="mt-4 text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-hive-700">{v.text}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
