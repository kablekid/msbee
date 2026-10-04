import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";
import "./globals.css";

const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} | Tutoring in Addis Ababa`,
    template: `%s | ${site.name}`,
  },
  description:
    "Ms Bee Educational Support and Tutorial Center in Torhailoch, Addis Ababa: focus-group and one-to-one tutoring with Cambridge, Pearson, and Ethiopian curriculum-based books, VIP intensive and online classes, early years readiness, and a July–August summer camp. Learn • Grow • Succeed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
