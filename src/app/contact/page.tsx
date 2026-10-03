import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Enroll",
  description: "Contact Ms Bee Educational Support to enroll, book a tour, or ask a question.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ program?: string }> }) {
  const { program } = await searchParams;

  const info = [
    { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phone.replace(/[^\d]/g, "")}` },
    { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Visit us", value: site.address },
  ];

  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Contact & Enroll" text="Ready to enroll, want a tour, or just have a question? Send us a note and we'll buzz back within one business day." />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-[1fr_2fr]">
        <AnimatedSection direction="left" className="space-y-4">
          {info.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className="clip-hex flex h-14 w-14 shrink-0 items-center justify-center bg-honey-300 text-hive-900 transition group-hover:bg-honey-400">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-honey-700 uppercase">{item.label}</span>
                  <span className="block font-semibold break-words text-hive-900">{item.value}</span>
                </span>
              </>
            );
            const cls = "group flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-honey-100 transition hover:shadow-lg";
            return item.href ? (
              <a key={item.label} href={item.href} className={cls}>{content}</a>
            ) : (
              <div key={item.label} className={cls}>{content}</div>
            );
          })}

          <div className="rounded-3xl bg-hive-900 p-6 text-honey-50">
            <p className="flex items-center gap-2 font-display text-xl text-honey-300">
              <Clock className="h-5 w-5" /> Hours
            </p>
            <ul className="mt-3 space-y-2">
              {site.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4 border-b border-white/10 pb-2 last:border-0">
                  <span>{h.days}</span>
                  <span className="text-right font-semibold">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hex-pattern relative flex h-48 items-center justify-center overflow-hidden rounded-3xl bg-honey-100 ring-1 ring-honey-200">
            <div className="text-center">
              <MapPin className="mx-auto h-10 w-10 animate-bounce text-berry-500" />
              <p className="mt-2 font-bold text-hive-800">{site.address}</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <ContactForm defaultProgram={program} />
        </AnimatedSection>
      </section>
    </>
  );
}
