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
    default: `${site.name} | Tutoring, Summer Camp & Daycare`,
    template: `%s | ${site.name}`,
  },
  description:
    "Ms Bee Educational Support offers tutoring and homework help, a fun-filled summer camp, and a caring daycare center for children of all ages.",
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
