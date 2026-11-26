import Link from "next/link";
import { ArrowRight, BookOpen, Gem, Laptop, Sprout, User } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const cards = [
  { n: 1, title: "Focus Group", note: "Small groups, 3 or 5× / week", icon: BookOpen, color: "bg-honey-400", href: "/programs#focus-group" },
  { n: 2, title: "One-to-One", note: "A dedicated teacher, 3 or 5× / week", icon: User, color: "bg-blue-600 text-white", href: "/programs#one-to-one" },
  { n: 3, title: "VIP Intensive", note: "5 days / week, books included", icon: Gem, color: "bg-purple-600 text-white", href: "/programs#vip" },
  { n: 4, title: "Early Years", note: "Weekend readiness program", icon: Sprout, color: "bg-green-600 text-white", href: "/early-years" },
  { n: 5, title: "Online Class", note: "Live lessons, 5× / week", icon: Laptop, color: "bg-pink-500 text-white", href: "/programs#online" },
];

export default function ProgramsAtAGlance() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {cards.map((c, i) => {
        const Icon = c.icon;
        return (
          <AnimatedSection key={c.title} delay={i * 0.08} className={i === 4 ? "col-span-2 md:col-span-1" : ""}>
            <Link
              href={c.href}
              className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-md ring-1 ring-honey-100 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className={`clip-hex flex h-12 w-12 items-center justify-center ${c.color}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-display text-3xl font-semibold text-honey-200">{c.n}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-hive-700">{c.note}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold text-honey-700 transition group-hover:gap-2">
                Details <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
