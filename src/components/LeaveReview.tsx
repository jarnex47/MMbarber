import Image from "next/image";

export default function LeaveReview() {
  return (
    <div className="flex flex-col items-center self-stretch rounded-2xl border border-[rgba(17,82,212,0.20)] bg-[rgba(17,82,212,0.10)] pt-[48px] pr-[32px] pb-[32px] pl-[32px]">
      <div className="flex pb-[14px] justify-center items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Image key={i} src="/images/star.svg" alt="Star" width={24} height={24} />
        ))}
      </div>
      <div className="flex flex-col pb-[8px] items-center w-full">
        <p className="text-white text-center font-bold text-[20px] leading-[28px]">loved your visit?</p>
        <p className="text-[#94A3B8] text-center text-sm font-normal leading-[20px] mt-2">
          Support our local craft and let others know about your experience.
        </p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=MM+Barber+Kalkoven+9+1730+Asse+Belgium"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex py-[12px] px-[24px] items-center gap-2 rounded-lg bg-white transition-colors"
        >
          <Image src="/images/review.svg" alt="" width={20} height={20} />
          <span className="text-[#080A0F] text-center text-[14px] font-bold leading-[20px]">
            Leave a Google review
          </span>
        </a>
      </div>
    </div>
  );
}