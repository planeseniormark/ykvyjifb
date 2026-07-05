export default function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-1" aria-label={`Рейтинг ${value} из 5`}>
      <span className="inline-flex">
        {[0, 1, 2, 3, 4].map((i) => {
          const fill = Math.max(0, Math.min(1, value - i));
          return (
            <span key={i} className="relative inline-block h-4 w-4">
              <Star className="absolute inset-0 text-zinc-300" />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star className="h-4 w-4 text-brand" />
              </span>
            </span>
          );
        })}
      </span>
      <span className="text-sm font-bold text-ink">{value.toFixed(1)}</span>
    </span>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  );
}
