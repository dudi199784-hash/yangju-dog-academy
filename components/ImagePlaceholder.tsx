type ImagePlaceholderProps = {
  label?: string;
  className?: string;
  /** Tailwind aspect class, e.g. aspect-video */
  aspectClass?: string;
  compact?: boolean;
};

export function ImagePlaceholder({
  label = "이미지",
  className = "",
  aspectClass = "aspect-[16/9]",
  compact = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-stone-300 bg-stone-100 ${aspectClass} ${className}`}
      role="img"
      aria-label={`${label} 영역 — 이미지를 추가해 주세요`}
    >
      <div
        className={`flex flex-col items-center text-center text-stone-400 ${compact ? "gap-1 px-2" : "gap-2 px-4"}`}
      >
        <svg
          width={compact ? 24 : 40}
          height={compact ? 24 : 40}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className={compact ? "text-[10px] font-medium leading-tight" : "text-sm font-medium"}>
          {label}
        </span>
        {!compact && (
          <span className="text-xs text-stone-400">이미지 추가 예정</span>
        )}
      </div>
    </div>
  );
}
