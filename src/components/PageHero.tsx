import AnimatedSection from "./AnimatedSection";
import BeeMascot from "./BeeMascot";

export default function PageHero({
  eyebrow,
  title,
  text,
  gradient = "from-honey-100 via-honey-50 to-white",
}: {
  eyebrow: string;
  title: string;
  text: string;
  gradient?: string;
}) {
  return (
    <section className={`hex-pattern relative overflow-hidden bg-gradient-to-b ${gradient} pt-32 pb-20`}>
      <BeeMascot className="absolute top-28 right-[8%] hidden w-28 md:block" />
      <div className="mx-auto max-w-4xl px-4 text-center">
        <AnimatedSection>
          <span className="inline-block rounded-full bg-white/80 px-4 py-1 text-sm font-bold tracking-wide text-honey-700 uppercase shadow-sm">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-semibold text-hive-900 sm:text-5xl md:text-6xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-hive-700 sm:text-xl">{text}</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
