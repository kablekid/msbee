import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-hive-900 text-honey-50">
      <svg className="absolute -top-px left-0 w-full text-[#fffdf7]" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,0 L1440,0 L1440,20 C1100,70 340,70 0,20 Z" />
      </svg>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-24 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/logo.png" alt={site.name} width={96} height={96} className="h-24 w-24 rounded-full bg-white ring-4 ring-honey-400" />
          <p className="mt-4 font-display text-xl font-semibold text-honey-300">{site.fullName}</p>
          <p className="mt-2 font-semibold text-honey-100/80">{site.tagline}</p>
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-honey-300">Explore</p>
          <ul className="mt-3 space-y-2">
            {navLinks.concat({ href: "/contact", label: "Contact & Enroll" }).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-honey-100/80 transition hover:text-honey-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-honey-300">Visit Us</p>
          <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-3 flex gap-3 text-honey-100/80 hover:text-honey-300">
            <MapPin className="h-5 w-5 shrink-0 text-honey-400" />
            <span>
              <span className="block font-semibold text-honey-50">{site.address.area}</span>
              {site.address.detail}, {site.address.city}
            </span>
          </a>
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-honey-300">Call Us</p>
          <ul className="mt-3 space-y-3 text-honey-100/80">
            {site.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="flex gap-3 hover:text-honey-300">
                  <Phone className="h-5 w-5 shrink-0 text-honey-400" />
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-honey-300">
                <MessageCircle className="h-5 w-5 shrink-0 text-honey-400" />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-honey-100/60">
        © {new Date().getFullYear()} {site.fullName}. {site.motto}.
      </div>
    </footer>
  );
}
