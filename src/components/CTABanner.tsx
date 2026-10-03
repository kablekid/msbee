import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { site } from "@/lib/data";

export default function CTABanner({
  title = "Ready to join the hive?",
  text = "Visit us in Torhailoch, call, or send us a message. We'd love to meet your family and find the right program for your child.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-4 py-20">
      <AnimatedSection className="hex-pattern relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-honey-400 to-honey-500 px-6 py-14 text-center shadow-xl shadow-honey-500/30 sm:px-12">
        <h2 className="text-3xl font-semibold text-hive-900 sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-hive-800">{text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-hive-900 px-7 py-3.5 font-bold text-white transition hover:bg-hive-800 hover:shadow-lg"
          >
            Enroll Today
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${site.phones[1].tel}`}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-7 py-3.5 font-bold text-hive-900 transition hover:bg-white"
          >
            <Phone className="h-5 w-5" />
            {site.phones[1].display}
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
