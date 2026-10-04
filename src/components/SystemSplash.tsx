import { ClipboardCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

// Straight, centered banner announcing the school management system.
export default function SystemSplash() {
  return (
    <AnimatedSection className="flex justify-center">
      <div className="relative inline-flex max-w-full items-center gap-4 overflow-hidden rounded-full bg-hive-900 py-3 pr-7 pl-3 text-white shadow-xl shadow-hive-900/25 transition hover:scale-[1.02]">
        <span className="clip-hex flex h-12 w-12 shrink-0 items-center justify-center bg-honey-400 text-hive-900">
          <ClipboardCheck className="h-6 w-6" />
        </span>
        <span className="font-display text-base leading-snug font-medium sm:text-xl">
          We use a <span className="text-honey-300">sophisticated school management system</span>
        </span>
        <span className="splash-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </AnimatedSection>
  );
}
