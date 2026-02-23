import Image from "next/image";
import Button1 from "./Button1";
import Button2 from "./Button2";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#080A0F] pt-20 pb-10 px-12 lg:px-32">
      <div className="flex flex-col w-full max-w-[1152px] mx-auto gap-16">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start w-full gap-10 sm:gap-16 lg:gap-80 xl:gap-[28rem]">
          {/* Left: Logo and name */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="p-2 rounded-lg bg-[#1152D4]/20 shrink-0 flex-shrink-0">
              <Image
                src="/images/logo_white_no_background.png"
                alt="MM Barber"
                width={24}
                height={24}
                className="shrink-0"
              />
            </div>
            <span className="text-slate-100 text-xl font-extrabold leading-7 tracking-tight uppercase whitespace-nowrap">
              MM Barber
            </span>
          </div>

          {/* Right: Social links and CTA */}
          <div className="flex flex-col items-center sm:items-start gap-6 flex-1 ">
            <div className="flex flex-col gap-6 self-stretch">
              <h5 className="text-slate-400 text-xs font-extrabold leading-4 tracking-[2.4px] uppercase">
                Connect with us
              </h5>
              <div className="flex gap-4 self-stretch">
                <a
                  href="https://www.instagram.com/_mm.bvrber47?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-10 h-10 justify-center items-center rounded-full border border-white/5 bg-[#0F131A] hover:bg-white/5 transition-colors"
                >
                  <Image src="/images/insta.svg" alt="Instagram" width={20} height={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@_mm.bvrber47?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-10 h-10 justify-center items-center rounded-full border border-white/5 bg-[#0F131A] hover:bg-white/5 transition-colors"
                >
                  <Image src="/images/tik-tok.svg" alt="TikTok" width={20} height={20} className="brightness-0 invert" />
                </a>
              </div>
            </div>
            {/* Book now button */}
            <Button2 href="https://www.fresha.com/a/mm-barber-asse-kalkoven-9-ofd64t6n" size="lg" className="whitespace-nowrap shrink-0">Book now</Button2>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MM Barber. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/jarne-loos-2524a325a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-slate-400 transition-colors"
            >
              Jarne Loos
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}