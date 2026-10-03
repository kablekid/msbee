import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Moments from tutoring, summer camp, and daycare at Ms Bee Educational Support.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Life at the Hive" title="Gallery" text="Smiles, discoveries, and messy-fun moments from all three of our programs." />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <Gallery />
      </section>
      <CTABanner />
    </>
  );
}
