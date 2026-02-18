import Image from "next/image";

export default function Phone() {
  return (
    <div className="w-full max-w-[300px] min-w-0 rounded-xl bg-[#0F131A] border border-white/5 shadow-[0_4px_12px_rgba(0,0,0,0.3)] py-3 px-3">
      <div className="inline-flex items-start gap-3">
        <div>
          <Image
            src="/images/phone.svg"
            alt="Phone"
            width={24.01}
            height={27.988}
          />
        </div>
        <div className="inline-flex flex-col items-start gap-1">
          <p className="text-[#64748B] text-xs font-bold leading-4 tracking-[1.2px] uppercase">
            Phone
          </p>
          <p className="text-[#F1F5F9] text-[14px] font-bold leading-[20px]">
            +32 123 456 789
          </p>
        </div>
      </div>
    </div>
  );
}