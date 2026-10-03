"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { programs } from "@/lib/data";

export default function ProgramCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {programs.map((p, i) => {
        const Icon = p.icon;
        return (
          <motion.div
            key={p.key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-honey-100 transition-shadow hover:shadow-2xl"
          >
            <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-15 transition-transform duration-500 group-hover:scale-150`} />
            <div className={`clip-hex flex h-16 w-16 items-center justify-center bg-gradient-to-br ${p.color} text-white`}>
              <Icon className="h-8 w-8" />
            </div>
            <span className="mt-5 text-sm font-bold tracking-wide text-honey-700 uppercase">{p.ages}</span>
            <h3 className="mt-1 text-2xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-hive-700">{p.description}</p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-center gap-1.5 font-semibold text-hive-800">
                  <Check className="h-4 w-4 text-leaf-500" /> {h}
                </li>
              ))}
            </ul>
            <Link
              href={p.href}
              className="mt-auto inline-flex items-center gap-2 pt-7 font-bold text-honey-700 transition group-hover:gap-3"
            >
              Learn more <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
