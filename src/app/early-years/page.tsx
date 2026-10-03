import type { Metadata } from "next";
import Link from "next/link";
import { Baby, Check, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { earlyYears, earlyYearsFocus, formatEtb, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Early Years & Daycare",
  description: "Early Years Readiness Program with Jolly Phonics and play-based learning at Ms Bee Educational Support, Addis Ababa.",
};

export default function EarlyYearsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kindergarten Readiness"
        title="Early Years & Daycare"
        text="Building strong foundations for bright futures — through phonics, play, and lots of encouragement."
        gradient="from-green-100 via-emerald-50 to-[#fffdf7]"
      />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <AnimatedSection className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-2 ring-green-300">
          <div className="bg-green-600 px-6 py-6 text-white sm:px-10">
            <h2 className="text-3xl font-semibold">{earlyYears.title}</h2>
            <p className="font-semibold text-green-100">{earlyYears.subtitle}</p>
          </div>
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-3">
              {earlyYears.options.map((o, i) => (
                <AnimatedSection
                  key={o.label}
                  delay={i * 0.1}
                  className="rounded-3xl bg-green-50 p-6 text-center ring-1 ring-green-100 transition hover:-translate-y-2 hover:shadow-lg"
                >
                  <p className="font-display text-lg font-medium">{o.label}</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-berry-500">{formatEtb(o.price)}</p>
                  <p className="text-sm text-hive-700">{o.unit}</p>
                </AnimatedSection>
              ))}
            </div>
            <p className="rounded-3xl bg-green-50 p-6 text-lg text-hive-800">{earlyYears.text}</p>
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-emerald-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="What Children Learn" title="Little learners, big progress" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {earlyYearsFocus.map((f, i) => {
              const Icon = f.icon;
              return (
                <AnimatedSection key={f.name} delay={i * 0.07} className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-green-100 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="clip-hex flex h-14 w-14 items-center justify-center bg-green-100 text-green-700 transition group-hover:rotate-12 group-hover:bg-green-500 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{f.name}</h3>
                  <p className="mt-1 text-hive-700">{f.text}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-24">
        <AnimatedSection className="grid gap-8 rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-honey-100 sm:p-10 md:grid-cols-[auto_1fr] md:items-center">
          <span className="clip-hex mx-auto flex h-24 w-24 items-center justify-center bg-pink-100 text-pink-600">
            <Baby className="h-12 w-12" />
          </span>
          <div>
            <h2 className="text-3xl font-semibold">Daycare</h2>
            <p className="mt-3 text-lg text-hive-700">
              Looking for caring, play-based daycare for your little one? Contact us to ask about availability, schedules,
              and fees.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {["Safe, child-friendly space", "Play-based activities", "Caring, experienced staff", "Early learning every day"].map((x) => (
                <li key={x} className="flex items-center gap-2 font-semibold"><Check className="h-5 w-5 text-leaf-500" /> {x}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.phones[1].tel}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-hive-900 px-6 py-3 font-bold text-white hover:bg-hive-800">
                <Phone className="h-5 w-5" /> {site.phones[1].display}
              </a>
              <Link href="/contact?program=daycare" className="inline-flex items-center justify-center rounded-full bg-honey-100 px-6 py-3 font-bold text-honey-700 hover:bg-honey-200">
                Send an inquiry
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="px-4 pb-8">
        <SectionHeading eyebrow="FAQ" title="Early years questions" />
        <FAQAccordion program="early-years" />
      </section>

      <CTABanner title="Give your child a head start" text="Weekend places in our Early Years Readiness Program are limited — reserve yours today." />
    </>
  );
}
