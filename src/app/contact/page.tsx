import type { Metadata } from "next";
import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Enroll",
  description: "Call, WhatsApp, or visit Ms Bee Educational Support in Torhailoch, Addis Ababa to enroll your child.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ program?: string }> }) {
  const { program } = await searchParams;
  const card = "group flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-honey-100 transition hover:shadow-lg";
  const hex = "clip-hex flex h-14 w-14 shrink-0 items-center justify-center bg-honey-300 text-hive-900 transition group-hover:bg-honey-400";

  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Contact & Enroll" text="Ready to enroll or have a question? Call, WhatsApp, visit us, or send a message below." />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-[1fr_2fr]">
        <AnimatedSection direction="left" className="space-y-4">
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-honey-100">
            <p className="flex items-center gap-2 text-sm font-bold text-honey-700 uppercase"><Phone className="h-4 w-4" /> Call us</p>
            <ul className="mt-3 space-y-2">
              {site.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="flex items-center justify-between rounded-2xl bg-honey-50 px-4 py-3 font-display text-lg font-medium text-hive-900 transition hover:bg-honey-200">
                    {p.display}
                    <Phone className="h-5 w-5 text-honey-600" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className={card}>
            <span className="clip-hex flex h-14 w-14 shrink-0 items-center justify-center bg-green-500 text-white">
              <MessageCircle className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-sm font-bold text-honey-700 uppercase">WhatsApp</span>
              <span className="block font-semibold text-hive-900">Chat with us</span>
            </span>
          </a>

          <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className={card}>
            <span className={hex}><MapPin className="h-6 w-6" /></span>
            <span className="min-w-0">
              <span className="block text-sm font-bold text-honey-700 uppercase">Visit us</span>
              <span className="block font-semibold text-hive-900">{site.address.area}</span>
              <span className="block text-sm text-hive-700">{site.address.detail}, {site.address.city}</span>
            </span>
          </a>

          <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="hex-pattern group relative flex h-44 items-center justify-center overflow-hidden rounded-3xl bg-honey-100 ring-1 ring-honey-200">
            <div className="text-center">
              <MapPin className="mx-auto h-10 w-10 animate-bounce text-berry-500" />
              <p className="mt-2 inline-flex items-center gap-2 font-bold text-hive-800 group-hover:underline">
                <Navigation className="h-4 w-4" /> Get directions
              </p>
            </div>
          </a>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <ContactForm defaultProgram={program} />
        </AnimatedSection>
      </section>
    </>
  );
}
