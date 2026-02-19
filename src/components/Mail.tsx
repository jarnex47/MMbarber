import Image from "next/image";

export default function Mail() {
  return (
    <div className="w-full min-w-0 max-w-[560px] mx-auto lg:mx-0 rounded-xl bg-[#0F131A] border border-white/5 shadow-[0_4px_12px_rgba(0,0,0,0.3)] py-3 px-3">
      <div className="inline-flex items-start gap-3">
        <div>
          <Image
            src="/images/Mail.svg"
            alt="Mail"
            width={24.01}
            height={27.988}
          />
        </div>
        <div className="inline-flex flex-col items-start gap-1">
          <p className="text-[#64748B] text-xs font-bold leading-4 tracking-[1.2px] uppercase">
            Mail
          </p>
          <a
            href="mailto:info@mmbarber.be"
            className="text-[#F1F5F9] text-[14px] font-bold leading-[20px] hover:underline"
          >
            info@mmbarber.be
          </a>
        </div>
      </div>
    </div>
  );
}