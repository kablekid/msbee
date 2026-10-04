import type { Metadata } from "next";
import { Check, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CampWeeks from "@/components/CampWeeks";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { campActivities, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Summer Camp",
  description: "Themed weekly summer camp activities at Ms Bee Educational Support, Torhailoch, Addis Ababa.",
};

export default function SummerCampPage() {
  return (
    <>
      <PageHero
        eyebrow="July – August Only"
        title="Summer Camp at Ms Bee"
        text="Every July and August, a new theme each week: creativity, confidence, and learning that feels like play."
        gradient="from-orange-100 via-honey-50 to-[#fffdf7]"
      />

      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionHeading eyebrow="Camp Themes" title="Your adventure" text="Tap a theme to see what's in store. Themes are a sample and may change each season." />
        <CampWeeks />
      </section>

      <section className="bg-honey-50 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <AnimatedSection direction="left">
            <SectionHeading eyebrow="At Camp" title="What campers enjoy" center={false} />
            <ul className="grid gap-3 sm:grid-cols-2">
              {campActivities.map((a) => (
                <li key={a} className="flex items-start gap-2 rounded-2xl bg-white p-4 font-semibold shadow-sm">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-leaf-500" /> {a}
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection direction="right" className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-honey-100 sm:p-10">
            <p className="text-sm font-bold tracking-wide text-honey-700 uppercase">Dates & Fees</p>
            <h3 className="mt-2 text-3xl font-semibold">Every July & August</h3>
            <p className="mt-3 text-lg text-hive-700">
              Summer camp runs in July and August only. Fees are announced each season, and places are limited, so call us
              to reserve a place or join the waiting list.
            </p>
            <a href={`tel:${site.phones[0].tel}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-honey-400 px-6 py-3 font-bold text-hive-900 shadow-md hover:bg-honey-300">
              <Phone className="h-5 w-5" /> {site.phones[0].display}
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 py-24">
        <SectionHeading eyebrow="FAQ" title="Camp questions" />
        <FAQAccordion program="camp" />
      </section>

      <CTABanner title="Spots fill up fast!" text="Get in touch to hear first when summer camp registration opens." />
    </>
  );
}
