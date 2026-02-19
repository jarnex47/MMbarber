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
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  title: {
    default: "MM Barber | Precision & Style | Asse, Belgium",
    template: "%s | MM Barber",
  },
  description:
    "MM Barber offers professional barber services in Asse, Belgium. Precision cuts and expert styling. Book your appointment online at Kalkoven 9, 1730 Asse.",
  keywords: ["barber", "haircut", "Asse", "Belgium", "MM Barber", "barbershop", "mens grooming"],
  authors: [{ name: "MM Barber", url: "https://mmbarber.be" }],
  creator: "MM Barber",
  openGraph: {
    type: "website",
    locale: "en_BE",
    url: "https://mmbarber.be",
    siteName: "MM Barber",
    title: "MM Barber | Precision & Style | Asse, Belgium",
    description: "Professional barber services in Asse, Belgium. Book your appointment at Kalkoven 9, 1730 Asse.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MM Barber | Precision & Style",
    description: "Professional barber services in Asse, Belgium.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://mmbarber.be"),
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
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full">
              <div className="flex flex-col gap-12 flex-1 min-w-0">
                <OpeningHours />
                <LeaveReview />
              </div>
              <div className="flex flex-col gap-12 flex-1 min-w-0">
                <Location />
                <div className="flex flex-col sm:flex-row gap-8 w-full">
                  <Phone />
                  <Mail />
                </div>
              </div>
            </div>
          </div>
          <Footer />
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
