// components/Hero.tsx

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-20 flex flex-col justify-center items-center">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
        src="/images/output.jpg"
        alt="Barber"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.6)_50%,#080A0F_100%)]" />

      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center gap-6 w-full max-w-4xl px-6 md:px-0"> 
        <h1 className="text-4xl md:text-[72px] md:leading-[72px] tracking-[-1.8px] font-extrabold text-center">
            <span className="block text-white">
                MM Barber:
            </span>
            <span className="block text-[#1152D4]">
                Precision & Style
            </span>
        </h1>

      </div>
    

    </section>
  );
}
