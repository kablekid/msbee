import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import CurriculumSection from "@/components/CurriculumSection";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import PhotoStrip from "@/components/PhotoStrip";
import SectionHeading from "@/components/SectionHeading";
import { centerPhotos, earlyYears, focusGroup, formatEtb, oneToOne, online, subjects, vip } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programs & Fees",
  description: "Focus group, one-to-one, VIP intensive, and online tutoring fees at Ms Bee Educational Support, Addis Ababa.",
};

function Price({ value, unit = "/ month", className = "" }: { value: number; unit?: string; className?: string }) {
  return (
    <span className={className}>
      <span className="font-display text-2xl font-semibold sm:text-3xl">{formatEtb(value)}</span>
      <span className="text-sm opacity-80"> {unit}</span>
    </span>
  );
}

function StepBadge({ n, color }: { n: number; color: string }) {
  return (
    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white font-display text-2xl font-semibold shadow-md ${color}`}>
      {n}
    </span>
  );
}

export default function ProgramsPage() {
  const OneIcon = oneToOne.icon;
  const VipIcon = vip.icon;
  const Badge = vip.badge;
  const OnlineIcon = online.icon;

  return (
    <>
      <PageHero
        eyebrow="Kindergarten – High School"
        title="Programs & Fees"
        text="Flexible tutoring options for every learner. All fees are monthly and paid in advance."
        gradient="from-sky-100 via-sky-50 to-[#fffdf7]"
      />

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-20">
        {/* 1. Focus group */}
        <AnimatedSection id="focus-group" className="scroll-mt-28 overflow-hidden rounded-[2rem] bg-white shadow-xl ring-2 ring-honey-300">
          <div className="flex items-center gap-4 bg-honey-100 px-6 py-5 sm:px-8">
            <StepBadge n={1} color="bg-honey-400 text-hive-900" />
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">{focusGroup.title}</h2>
              <p className="font-bold text-berry-500">{focusGroup.note}</p>
            </div>
          </div>
          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
            {focusGroup.groups.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.name} className="rounded-3xl bg-honey-50 p-6">
                  <div className="flex items-center gap-3">
                    <span className="clip-hex flex h-12 w-12 items-center justify-center bg-honey-400"><Icon className="h-6 w-6" /></span>
                    <div>
                      <h3 className="text-xl font-semibold">{g.name}</h3>
                      <p className="text-sm font-bold text-honey-700">{g.detail}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {g.options.map((o) => (
                      <li key={o.label} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-honey-200 pb-3 last:border-0">
                        <span className="font-semibold">{o.label}</span>
                        <Price value={o.price} className="text-berry-500" />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="mx-6 mb-6 flex items-center gap-3 rounded-2xl bg-honey-100 px-5 py-3 font-semibold sm:mx-8 sm:mb-8">
            <Star className="h-5 w-5 shrink-0 text-honey-600" /> {focusGroup.footnote}
          </p>
        </AnimatedSection>

        {/* 2. One-to-one */}
        <AnimatedSection id="one-to-one" className="scroll-mt-28 overflow-hidden rounded-[2rem] bg-white shadow-xl ring-2 ring-blue-300">
          <div className="flex items-center gap-4 bg-blue-600 px-6 py-5 text-white sm:px-8">
            <StepBadge n={2} color="bg-white text-blue-700" />
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">{oneToOne.title}</h2>
              <p className="text-blue-100">{oneToOne.text}</p>
            </div>
          </div>
          <div className="grid gap-6 p-6 sm:grid-cols-[auto_1fr_1fr] sm:items-center sm:p-8">
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600"><OneIcon className="h-10 w-10" /></span>
            {oneToOne.options.map((o) => (
              <div key={o.label} className="rounded-3xl bg-blue-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
                <p className="font-semibold">One-to-One Session</p>
                <p className="text-hive-700">{o.label}</p>
                <Price value={o.price} className="mt-2 block text-berry-500" />
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* 3. VIP */}
        <AnimatedSection id="vip" className="scroll-mt-28 overflow-hidden rounded-[2rem] bg-white shadow-xl ring-2 ring-purple-300">
          <div className="flex items-center gap-4 bg-purple-700 px-6 py-5 text-white sm:px-8">
            <StepBadge n={3} color="bg-white text-purple-700" />
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">{vip.title}</h2>
              <p className="text-purple-100">{vip.text}</p>
            </div>
          </div>
          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto_1.3fr] md:items-center">
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-3"><VipIcon className="h-6 w-6 text-purple-600" /> {formatEtb(vip.hourly)} / hour</li>
              <li className="flex items-center gap-3"><Clock className="h-6 w-6 text-purple-600" /> {vip.days}</li>
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-purple-600" /> {formatEtb(vip.monthly)} / month</li>
            </ul>
            <div className="mx-auto flex h-40 w-40 flex-col items-center justify-center rounded-full bg-purple-700 text-white shadow-xl ring-8 ring-honey-300 transition hover:scale-105 hover:rotate-3">
              <Badge className="h-7 w-7 text-honey-300" />
              <span className="font-display text-4xl font-semibold">{(vip.monthly / 1000).toFixed(0)},000</span>
              <span className="rounded-full bg-honey-400 px-3 text-sm font-bold text-hive-900">ETB / month</span>
            </div>
            <div className="rounded-3xl bg-purple-50 p-6">
              <p className="font-display text-lg font-medium">The VIP program includes:</p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                {vip.includes.map((item) => (
                  <li key={item} className="rounded-2xl bg-white p-4 text-center font-semibold shadow-sm">
                    <Check className="mx-auto mb-1 h-6 w-6 text-leaf-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* 4. Early years teaser */}
        <AnimatedSection className="flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-green-600 px-6 py-6 text-white shadow-xl sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-center gap-4">
            <StepBadge n={4} color="bg-white text-green-700" />
            <div>
              <h2 className="text-2xl font-semibold">Early Years Readiness Program</h2>
              <p className="text-green-100">Weekend program for young learners — from {formatEtb(earlyYears.options[0].price)} / month</p>
            </div>
          </div>
          <Link href="/early-years" className="rounded-full bg-white px-6 py-3 font-bold text-green-700 transition hover:bg-green-50">
            See Early Years
          </Link>
        </AnimatedSection>

        {/* 5. Online */}
        <AnimatedSection id="online" className="scroll-mt-28 overflow-hidden rounded-[2rem] bg-white shadow-xl ring-2 ring-pink-300">
          <div className="flex items-center gap-4 bg-pink-500 px-6 py-5 text-white sm:px-8">
            <StepBadge n={5} color="bg-white text-pink-600" />
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">{online.title}</h2>
              <p className="text-pink-100">{online.text}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 p-6 sm:flex-row sm:p-8">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 text-pink-600"><OnlineIcon className="h-10 w-10" /></span>
            <Price value={online.price} unit="per month" className="text-berry-500" />
            <span className="rounded-full bg-pink-50 px-5 py-2 font-bold text-pink-700">{online.schedule}</span>
          </div>
        </AnimatedSection>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-24">
        <CurriculumSection showSystem />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <SectionHeading eyebrow="Learning in Action" title="A look inside our classrooms" />
        <PhotoStrip
          photos={[
            { ...centerPhotos.tutoring, caption: "Small-group tutoring" },
            { ...centerPhotos.robotics, caption: "Building a robot together" },
            { ...centerPhotos.electronics, caption: "Coding lights and circuits" },
          ]}
        />
      </section>

      <section className="bg-sky-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="What We Help With" title="Academic tutoring & skill building" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimatedSection key={s.name} delay={i * 0.07} className="group flex gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-xl hover:ring-sky-300">
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
        </div>
      </section>

      <section className="px-4 py-24">
        <SectionHeading eyebrow="FAQ" title="Questions about our programs" />
        <FAQAccordion program="tutoring" />
      </section>

      <CTABanner title="Ready to get started?" text="Call or WhatsApp us to choose a plan and a schedule that works for your family." />
    </>
  );
}
