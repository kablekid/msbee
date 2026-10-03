import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, programs, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-hive-900 text-honey-50">
      <svg className="absolute -top-px left-0 w-full text-[#fffdf7]" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,0 L1440,0 L1440,20 C1100,70 340,70 0,20 Z" />
      </svg>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-24 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold text-honey-300">{site.name}</p>
          <p className="mt-3 text-honey-100/80">{site.tagline}. Tutoring, summer camp, and daycare under one happy roof.</p>
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-honey-300">Programs</p>
          <ul className="mt-3 space-y-2">
            {programs.map((p) => (
              <li key={p.key}>
                <Link href={p.href} className="text-honey-100/80 transition hover:text-honey-300">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-display text-lg font-semibold text-honey-300">Explore</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {navLinks.slice(4).concat({ href: "/contact", label: "Contact" }).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-honey-100/80 transition hover:text-honey-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-honey-300">Contact</p>
          <ul className="mt-3 space-y-3 text-honey-100/80">
            <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-honey-400" />{site.address}</li>
            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-honey-400" /><a href={`tel:${site.phone.replace(/[^\d]/g, "")}`} className="hover:text-honey-300">{site.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-honey-400" /><a href={`mailto:${site.email}`} className="break-all hover:text-honey-300">{site.email}</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-honey-300">Hours</p>
          <ul className="mt-3 space-y-3 text-honey-100/80">
            {site.hours.map((h) => (
              <li key={h.days} className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-honey-400" />
                <span>
                  <span className="block font-semibold text-honey-50">{h.days}</span>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-honey-100/60">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
