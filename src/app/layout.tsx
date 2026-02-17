import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Manrope} from "next/font/google";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "MM Barber",
  description: "Professional barber services.",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700", "800"], // include what you need
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased bg-gradient-to-b from-[#0A0F1A] via-[#0A0E17] to-[#080A0F]`}>
        <main className="min-h-screen">
        <Navbar />
        <Hero />
        {children}
        </main>
      </body>
    </html>
  );
}
