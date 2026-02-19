import Link from "next/link";
import clsx from "clsx";

type Size = "lg" | "sm" | "xl";

interface Props {
  href: string;
  children: React.ReactNode;
  size?: Size;
  className?: string;
}

export default function Button2({
  href,
  children,
  size = "lg",
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex justify-center items-center self-stretch",
        "py-4 px-6 rounded-xl",
        "border border-[#1152D4]/20 bg-[#1152D4]/20",
        "text-[#1152D4] text-center text-sm font-bold leading-5 tracking-[1.4px] uppercase",
        "transition-all duration-200 hover:bg-[#1152D4]/30 hover:border-[#1152D4]/30",

        size === "lg" && "h-12 sm:h-14",
        size === "xl" && "h-14 px-8 text-base sm:h-16 sm:px-10 sm:text-lg",
        size === "sm" && "h-10 py-3 px-4",

        className
      )}
    >
      {children}
    </Link>
  );
}
