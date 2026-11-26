"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { programs } from "@/lib/data";

export default function ProgramCards() {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
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
            className="group relative grid grid-cols-[auto_1fr] items-center gap-x-4 overflow-hidden rounded-[2rem] bg-white p-5 shadow-lg sm:flex sm:flex-col sm:items-stretch sm:p-8 ring-1 ring-honey-100 transition-shadow hover:shadow-2xl"
          >
            <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-15 transition-transform duration-500 group-hover:scale-150`} />
            <div className={`clip-hex row-span-3 flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16 bg-gradient-to-br ${p.color} text-white`}>
              <Icon className="h-8 w-8" />
            </div>
            <span className="text-xs font-bold sm:mt-5 sm:text-sm tracking-wide text-honey-700 uppercase">{p.ages}</span>
            <h3 className="mt-0.5 text-xl leading-tight font-semibold sm:mt-1 sm:text-2xl">{p.title}</h3>
            <p className="mt-3 hidden text-hive-700 sm:block">{p.description}</p>
            <ul className="mt-5 hidden grid-cols-2 gap-2 text-sm sm:grid">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-center gap-1.5 font-semibold text-hive-800">
                  <Check className="h-4 w-4 text-leaf-500" /> {h}
                </li>
              ))}
            </ul>
            <Link
              href={p.href}
              className="mt-auto inline-flex items-center gap-2 pt-1 font-bold sm:pt-7 text-honey-700 transition group-hover:gap-3"
            >
              Learn more <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
