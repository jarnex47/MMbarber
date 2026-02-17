import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageItem from "./LanguageItem";
import Button1 from "./Button1";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 w-full z-50 border-b border-white/5 bg-black/90 backdrop-blur-md">
      <div className="flex items-center justify-between h-20 max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <div>
            <Image
              src="/images/logo_white_no_background.png"
              alt="MM Barber"
              width={50}
              height={50}
            />
          </div>
          <span className="hidden sm:inline text-xl font-extrabold leading-7 uppercase text-white">
            MM Barber
          </span>
        </div>
        <nav className="flex items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageItem lang="en" active={true} />
            <LanguageItem lang="nl" active={false} />
            <LanguageItem lang="fr" active={false} />
          </div>
          <div className="w-px h-6 bg-slate-700" /> {/* separator */}
          <Button1
            href="https://www.fresha.com/a/mm-barber-asse-kalkoven-9-ofd64t6n"
            size="lg"
          >
            Book Now
          </Button1>
        </nav>
      </div>
    </header>
  );
}
