import Link from "next/link";
import clsx from "clsx";

type Size = "lg" | "sm" | "xl";

interface Props {
  href: string;
  children: React.ReactNode;
  size?: Size;
}

export default function Button1({
  href,
  children,
  size = "lg",
}: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center",
        "text-white text-sm font-bold leading-5",
        "transition-all duration-200",
        "bg-[#1152D4] hover:bg-[#0F4AC7]",

        // Large button – smaller on mobile, full size on sm+
        size === "lg" &&
          "h-10 px-4 rounded-lg sm:h-12 sm:px-6 sm:rounded-xl shadow-[0_15px_30px_-10px_rgba(17,82,212,0.35)]",

        // Extra large button (for Hero)
        size === "xl" &&
          "h-14 px-8 rounded-xl text-base sm:h-16 sm:px-10 sm:text-lg shadow-[0_25px_50px_-12px_rgba(17,82,212,0.4)]",

        // Small button
        size === "sm" &&
          "h-10 px-5 rounded-lg"
      )}
    >
      {children}
    </Link>
  );
}
