"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import BeeMascot from "./BeeMascot";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 py-2 shadow-md backdrop-blur-md" : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} home`}>
          <BeeMascot className="h-11 w-12" flying={false} />
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold text-hive-900">{site.shortName}</span>
            <span className="block text-[11px] font-bold tracking-wider text-honey-700 uppercase">
              Educational Support
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`relative z-10 block rounded-full px-4 py-2 font-semibold transition ${
                    active ? "text-hive-900" : "text-hive-700 hover:text-hive-900"
                  }`}
                >
                  {link.label}
                </Link>
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-honey-200"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-honey-400 px-5 py-2.5 font-bold text-hive-900 shadow-md shadow-honey-400/40 transition hover:-translate-y-0.5 hover:bg-honey-300 sm:inline-block"
          >
            Enroll Now
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-full p-2 text-hive-900 hover:bg-honey-100 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 top-0 -z-10 bg-hive-900/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute inset-x-4 top-full mt-2 rounded-3xl bg-white p-4 shadow-2xl lg:hidden"
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
            >
              <ul className="flex flex-col">
                {[...navLinks, { href: "/contact", label: "Contact & Enroll" }].map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={`block rounded-2xl px-4 py-3 text-lg font-semibold ${
                        pathname === link.href ? "bg-honey-100 text-hive-900" : "text-hive-700 hover:bg-honey-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
