import type { Metadata } from "next";
import { Apple, Camera, Shield, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { daycareGroups, daycareRoutine } from "@/lib/data";

export const metadata: Metadata = {
  title: "Daycare Center",
  description: "Infant, toddler, and preschool daycare with low ratios and play-based learning at Ms Bee Educational Support.",
};

const features = [
  { icon: Shield, title: "Secure & Licensed", text: "Keypad entry, CPR-certified staff, and state-licensed classrooms." },
  { icon: Apple, title: "Healthy Meals", text: "Breakfast, lunch, and two snacks made fresh daily. Allergy-aware." },
  { icon: Camera, title: "Daily Updates", text: "Photos, meals, naps, and milestones shared with parents every day." },
  { icon: Sparkles, title: "Pre-K Ready", text: "A curriculum that prepares little ones for kindergarten and beyond." },
];

export default function DaycarePage() {
  return (
    <>
      <PageHero
        eyebrow="6 weeks – 5 years"
        title="A Loving Daycare Center"
        text="A warm, safe, play-filled home away from home where your little one is known, nurtured, and celebrated."
        gradient="from-pink-100 via-pink-50 to-[#fffdf7]"
      />

      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionHeading eyebrow="Our Classrooms" title="The right room for every age" />
        <div className="grid gap-6 md:grid-cols-3">
          {daycareGroups.map((g, i) => {
            const Icon = g.icon;
            return (
              <AnimatedSection key={g.name} delay={i * 0.12} className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-pink-100 transition hover:-translate-y-2 hover:shadow-2xl">
                <div className={`clip-hex flex h-16 w-16 items-center justify-center ${g.color} transition group-hover:rotate-12`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{g.name}</h3>
                <p className="font-bold text-honey-700">{g.ages}</p>
                <p className="mt-3 text-hive-700">{g.text}</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-honey-50 px-4 py-2 font-bold text-hive-800">
                  Teacher ratio <span className="font-display text-lg text-honey-600">{g.ratio}</span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="bg-pink-50 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="Daily Rhythm" title="A day full of discovery" text="Predictable routines help little ones feel safe and confident." />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {daycareRoutine.map((r, i) => {
              const Icon = r.icon;
              return (
                <AnimatedSection key={r.time} delay={i * 0.06} className="rounded-3xl bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <Icon className="mx-auto h-8 w-8 text-berry-500" />
                  <p className="mt-3 font-display text-2xl font-semibold text-hive-900">{r.time}</p>
                  <p className="text-hive-700">{r.activity}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionHeading eyebrow="Peace of Mind" title="Why parents choose us" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <AnimatedSection key={f.title} delay={i * 0.1} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-honey-100">
                <Icon className="h-9 w-9 text-honey-600" />
                <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-hive-700">{f.text}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-8">
        <SectionHeading eyebrow="FAQ" title="Daycare questions" />
        <FAQAccordion program="daycare" />
      </section>

      <CTABanner title="Come see our classrooms" text="Tours are available every weekday. We can't wait to meet your little one!" />
    </>
  );
}
