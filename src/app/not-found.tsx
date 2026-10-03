import Link from "next/link";
import BeeMascot from "@/components/BeeMascot";

export default function NotFound() {
  return (
    <section className="hex-pattern flex min-h-[80vh] flex-col items-center justify-center px-4 pt-24 text-center">
      <BeeMascot className="w-40" />
      <h1 className="mt-6 text-5xl font-semibold">Oops! This bee got lost.</h1>
      <p className="mt-4 text-lg text-hive-700">We couldn&apos;t find the page you were looking for.</p>
      <Link href="/" className="mt-8 rounded-full bg-honey-400 px-8 py-4 font-bold text-hive-900 shadow-lg hover:bg-honey-300">
        Fly back home
      </Link>
    </section>
  );
}
