import AnimatedSection from "./AnimatedSection";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  center = true,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <AnimatedSection className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="inline-block rounded-full bg-honey-100 px-4 py-1 text-sm font-bold tracking-wide text-honey-700 uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold text-hive-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-hive-700">{text}</p>}
    </AnimatedSection>
  );
}
