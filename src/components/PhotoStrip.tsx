import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

type Photo = { src: string; alt: string; caption: string };

// A row of tilted photo cards that straighten and lift on hover.
export default function PhotoStrip({ photos }: { photos: Photo[] }) {
  const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];
  return (
    <div className={`grid gap-8 sm:grid-cols-2 ${photos.length >= 3 ? "lg:grid-cols-3" : ""}`}>
      {photos.map((p, i) => (
        <AnimatedSection key={p.src} delay={i * 0.12}>
          <figure
            className={`group rounded-[1.75rem] bg-white p-3 pb-4 shadow-xl ring-1 ring-honey-100 transition duration-500 hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl ${tilts[i % tilts.length]}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw" className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <figcaption className="mt-3 text-center font-display text-lg font-medium text-hive-900">{p.caption}</figcaption>
          </figure>
        </AnimatedSection>
      ))}
    </div>
  );
}
