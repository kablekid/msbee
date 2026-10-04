import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { curricula, englishSkills, managementSystem } from "@/lib/data";

export default function CurriculumSection({ showSystem = false }: { showSystem?: boolean }) {
  return (
    <div>
      <SectionHeading
        eyebrow="Curriculum & Books"
        title="Built on trusted curricula"
        text="Our students learn from Cambridge, Pearson, and Ethiopian curriculum-based books, so tutoring supports what they learn at school."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {curricula.map((c, i) => {
          const Icon = c.icon;
          return (
            <AnimatedSection
              key={c.name}
              delay={i * 0.1}
              className="group relative overflow-hidden rounded-[2rem] bg-white p-7 text-center shadow-md ring-1 ring-honey-100 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-honey-100 transition-transform duration-500 group-hover:scale-150" />
              <div className="clip-hex relative mx-auto flex h-16 w-16 items-center justify-center bg-hive-900 text-honey-300">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="relative mt-4 text-2xl font-semibold">{c.name}</h3>
              <p className="relative mt-2 text-hive-700">{c.text}</p>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection className="mt-14 rounded-[2rem] bg-hive-900 p-6 text-white shadow-xl sm:p-10">
        <h3 className="text-center text-2xl font-semibold text-honey-300 sm:text-3xl">English language skills</h3>
        <p className="mt-2 text-center text-honey-50/80">Taught with curriculum-based books at every level</p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {englishSkills.map((sk, i) => {
            const Icon = sk.icon;
            return (
              <AnimatedSection
                key={sk.name}
                delay={i * 0.08}
                className={`group rounded-3xl bg-white/5 p-5 text-center ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10 ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <div>
                  <Icon className="mx-auto h-9 w-9 text-honey-400 transition group-hover:scale-110" />
                  <p className="mt-3 font-display text-lg font-medium">{sk.name}</p>
                  <p className="mt-1 text-sm text-honey-50/75">{sk.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </AnimatedSection>

      {showSystem && (
        <AnimatedSection className="mt-14 grid gap-6 rounded-[2rem] bg-white p-6 shadow-lg ring-1 ring-honey-100 sm:p-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">{managementSystem.title}</h3>
            <p className="mt-3 text-lg text-hive-700">{managementSystem.text}</p>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {managementSystem.points.map((p) => (
              <li key={p} className="flex items-center gap-2 rounded-2xl bg-honey-50 p-4 font-semibold">
                <Check className="h-5 w-5 shrink-0 text-leaf-500" /> {p}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      )}
    </div>
  );
}
