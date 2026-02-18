import Link from "next/link";

type Language = "nl" | "fr" | "en";

interface Props {
  lang: Language;
  active?: boolean;
}

export default function LanguageItem({ lang, active = false }: Props) {
  return (
    <Link
      href={`/?lang=${lang}`}
      className={`
        uppercase text-xs font-bold leading-4 tracking-[1.2px] transition-colors
        ${
          active
            ? "text-[#1152D4] underline"
            : "text-slate-400 hover:text-white"
        }
      `}
    >
      {lang}
    </Link>
  );
}
