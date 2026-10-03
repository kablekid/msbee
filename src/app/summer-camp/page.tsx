import type { Metadata } from "next";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CampWeeks from "@/components/CampWeeks";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { campSchedule } from "@/lib/data";

export const metadata: Metadata = {
  title: "Summer Camp",
  description: "Eight weeks of themed summer camp adventures for ages 5–12 at Ms Bee Educational Support.",
};

const included = ["Daily themed STEM & art projects", "Weekly field trips", "Splash days & outdoor games", "Healthy snacks", "Camp T-shirt", "Extended care until 6:30 PM"];

export default function SummerCampPage() {
  return (
    <>
      <PageHero
        eyebrow="Ages 5 – 12 · June – August"
        title="Summer Camp at the Hive"
        text="Eight weeks of adventure, discovery, and sunshine. Book one week or all of them!"
        gradient="from-orange-100 via-honey-50 to-[#fffdf7]"
      />

      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionHeading eyebrow="Weekly Themes" title="Pick your adventure" text="Tap a week to see what's in store." />
        <CampWeeks />
      </section>

      <section className="bg-honey-50 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="A Day at Camp" title="Every day is a new adventure" center={false} />
            <div className="relative border-l-4 border-honey-200 pl-8">
              {campSchedule.map((s, i) => (
                <AnimatedSection key={s.time} delay={i * 0.06} direction="left" className="relative mb-6 last:mb-0">
                  <div>
                    <span className="absolute top-1 -left-[2.65rem] h-5 w-5 rounded-full border-4 border-white bg-honey-500 shadow" />
                    <span className="font-bold text-honey-700">{s.time}</span>
                    <p className="text-lg text-hive-800">{s.activity}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <AnimatedSection direction="right" className="self-start rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-honey-100 sm:p-10 lg:mt-24">
            <p className="text-sm font-bold tracking-wide text-honey-700 uppercase">Camp Tuition</p>
            <p className="mt-2">
              <span className="font-display text-6xl font-semibold text-honey-600">$275</span>
              <span className="text-hive-700"> / week</span>
            </p>
            <p className="mt-2 text-hive-700">Save 10% when you book 4 or more weeks. Sibling discounts available.</p>
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-2 font-semibold">
                  <Check className="h-5 w-5 text-leaf-500" /> {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 py-24">
        <SectionHeading eyebrow="FAQ" title="Camp questions" />
        <FAQAccordion program="camp" />
      </section>

      <CTABanner title="Spots fill up fast!" text="Reserve your camper's weeks today and get ready for the best summer yet." />
    </>
  );
}
