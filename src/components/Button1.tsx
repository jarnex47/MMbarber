import Link from "next/link";
import clsx from "clsx";

type Size = "lg" | "sm";

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

        // Large button
        size === "lg" &&
          "h-12 px-6 rounded-xl shadow-[0_15px_30px_-10px_rgba(17,82,212,0.35)]",

        // Small button
        size === "sm" &&
          "h-10 px-5 rounded-lg"
      )}
    >
      {children}
    </Link>
  );
}
