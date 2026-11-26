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
      <div className="grid grid-cols-3 gap-2 sm:gap-5">
        {curricula.map((c, i) => {
          const Icon = c.icon;
          return (
            <AnimatedSection
              key={c.name}
              delay={i * 0.1}
              className="group relative overflow-hidden rounded-2xl bg-white p-3 text-center shadow-md sm:rounded-[2rem] sm:p-7 ring-1 ring-honey-100 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-honey-100 transition-transform duration-500 group-hover:scale-150" />
              <div className="clip-hex relative mx-auto flex h-11 w-11 items-center justify-center bg-hive-900 text-honey-300 sm:h-16 sm:w-16">
                <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="relative mt-2 text-sm leading-tight font-semibold sm:mt-4 sm:text-2xl">{c.name}</h3>
              <p className="relative mt-2 hidden text-hive-700 sm:block">{c.text}</p>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection className="mt-8 rounded-[2rem] bg-hive-900 p-5 text-white sm:mt-14 shadow-xl sm:p-10">
        <h3 className="text-center text-2xl font-semibold text-honey-300 sm:text-3xl">English language skills</h3>
        <p className="mt-2 hidden text-center text-honey-50/80 sm:block">Taught with curriculum-based books at every level</p>
        <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-4 lg:grid-cols-5">
          {englishSkills.map((sk, i) => {
            const Icon = sk.icon;
            return (
              <AnimatedSection
                key={sk.name}
                delay={i * 0.08}
                className={`group rounded-2xl bg-white/5 p-3 text-center ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10 sm:rounded-3xl sm:p-5`}
              >
                <div>
                  <Icon className="mx-auto h-7 w-7 text-honey-400 sm:h-9 sm:w-9 transition group-hover:scale-110" />
                  <p className="mt-2 font-display text-sm leading-tight font-medium sm:mt-3 sm:text-lg">{sk.name}</p>
                  <p className="mt-1 hidden text-sm text-honey-50/75 sm:block">{sk.text}</p>
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
