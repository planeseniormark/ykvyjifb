import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 select-none">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl rounded-tl-md bg-brand text-white shadow-[0_6px_18px_rgba(255,1,92,0.45)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M5 12.5 10 17 19 7"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className={`text-xl font-extrabold tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        Фрибет<span className="text-brand">чик</span>
      </span>
    </Link>
  );
}
