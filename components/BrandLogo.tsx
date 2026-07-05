import { Bookmaker } from "@/lib/data";

function readable(hex: string) {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? "#171717" : "#ffffff";
}

/** A clean, generated logo tile for a bookmaker (no third-party trademarks). */
export default function BrandLogo({
  bookmaker,
  size = "md",
}: {
  bookmaker: Bookmaker;
  size?: "sm" | "md" | "lg";
}) {
  const dims =
    size === "lg" ? "h-14 w-14 text-2xl" : size === "sm" ? "h-9 w-9 text-sm" : "h-11 w-11 text-lg";
  const text =
    size === "lg" ? "text-lg" : size === "sm" ? "text-xs" : "text-sm";
  return (
    <span className="flex items-center gap-3">
      <span
        className={`flex ${dims} flex-none items-center justify-center rounded-xl font-black`}
        style={{ background: bookmaker.color, color: readable(bookmaker.color) }}
      >
        {bookmaker.short}
      </span>
      <span className={`font-bold text-ink ${text} leading-tight`}>
        {bookmaker.name}
      </span>
    </span>
  );
}
