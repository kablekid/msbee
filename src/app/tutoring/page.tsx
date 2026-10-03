import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { subjects, tutoringPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Educational Support & Tutoring",
  description: "K–12 tutoring, homework help, and test prep at Ms Bee Educational Support.",
};

const steps = [
  { n: 1, title: "Free Assessment", text: "We meet your child and identify strengths, gaps, and goals." },
  { n: 2, title: "Personal Plan", text: "A learning plan tailored to your child's pace and style." },
  { n: 3, title: "Engaging Sessions", text: "Hands-on lessons with tutors who make learning click." },
  { n: 4, title: "Progress Reports", text: "Regular updates so you can celebrate every milestone." },
];

export default function TutoringPage() {
  return (
    <>
      <PageHero
        eyebrow="Grades K – 12"
        title="Educational Support"
        text="Tutoring, homework help, and test prep that turns “I can't” into “I've got this!”"
        gradient="from-sky-100 via-sky-50 to-[#fffdf7]"
      />

      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionHeading eyebrow="Subjects" title="Support across every subject" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedSection
                key={s.name}
                delay={i * 0.07}
                className="group flex gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-xl hover:ring-sky-300"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{s.name}</h3>
                  <p className="mt-1 text-hive-700">{s.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="bg-sky-50 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="How It Works" title="Four simple steps to success" />
          <div className="relative grid gap-8 md:grid-cols-4">
            <div className="absolute top-8 right-[12%] left-[12%] hidden h-1 rounded bg-sky-200 md:block" />
            {steps.map((s, i) => (
              <AnimatedSection key={s.n} delay={i * 0.15} className="relative text-center">
                <div>
                  <span className="clip-hex relative mx-auto flex h-16 w-16 items-center justify-center bg-sky-500 font-display text-2xl font-semibold text-white">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-hive-700">{s.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24">
        <SectionHeading eyebrow="Pricing" title="Flexible plans for every family" text="Sibling discount: 10% off. First assessment is always free." />
        <div className="grid items-center gap-6 md:grid-cols-3">
          {tutoringPlans.map((p, i) => (
            <AnimatedSection
              key={p.name}
              delay={i * 0.1}
              className={`rounded-[2rem] p-8 transition hover:-translate-y-2 ${
                p.featured ? "bg-hive-900 text-white shadow-2xl md:scale-105" : "bg-white shadow-lg ring-1 ring-honey-100"
              }`}
            >
              {p.featured && <span className="mb-4 inline-block rounded-full bg-honey-400 px-3 py-1 text-xs font-bold text-hive-900">MOST POPULAR</span>}
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="mt-4">
                <span className={`font-display text-5xl font-semibold ${p.featured ? "text-honey-300" : "text-honey-600"}`}>{p.price}</span>
                <span className={p.featured ? "text-honey-100/80" : "text-hive-700"}> {p.unit}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className={`h-5 w-5 ${p.featured ? "text-honey-300" : "text-leaf-500"}`} /> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?program=tutoring"
                className={`mt-8 block rounded-full py-3 text-center font-bold transition ${
                  p.featured ? "bg-honey-400 text-hive-900 hover:bg-honey-300" : "bg-honey-100 text-honey-700 hover:bg-honey-200"
                }`}
              >
                Get Started
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="px-4 pb-8">
        <SectionHeading eyebrow="FAQ" title="Tutoring questions" />
        <FAQAccordion program="tutoring" />
      </section>

      <CTABanner title="Book a free assessment" text="Let's find out how your child learns best — no cost, no commitment." />
    </>
  );
}
