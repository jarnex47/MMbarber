import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Manrope} from "next/font/google";
import Hero from "@/components/Hero";
import OpeningHours from "@/components/OpeningHours";
import Location from "@/components/Location";
import LeaveReview from "@/components/LeaveReview";
import Phone from "@/components/Phone";
import Mail from "@/components/Mail";
import Footer from "@/components/Footer";


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
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="flex flex-col gap-12">
                <OpeningHours />
                <LeaveReview />
              </div>
              <div className="flex flex-col gap-12">
                <Location />
                <div className="flex flex-row gap-8 w-full">
                  <Phone />
                  <Mail />
                </div>
              </div>
            </div>
          </div>
          <Footer />
          {children}
        </main>
      </body>
    </html>
  );
}
