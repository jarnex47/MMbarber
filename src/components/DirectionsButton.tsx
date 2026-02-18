import Image from "next/image";

interface DirectionsButtonProps {
  href: string;
}

export default function DirectionsButton({ href }: DirectionsButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-col justify-center items-center pt-[10px] pr-[12px] pb-[16px] pl-[12px] rounded-lg bg-[#1152D4] hover:bg-[rgba(17,82,212,0.9)] transition-colors"
    >
      <Image
        src="/images/Directions.svg"
        alt="Get directions"
        width={24}
        height={24}
      />
    </a>
  );
}
