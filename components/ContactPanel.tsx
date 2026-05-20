import Image from "next/image";
import { NaverMap } from "@/components/NaverMap";
import { site } from "@/lib/site";

function IconContact({
  href,
  icon,
  label,
  sub,
  external,
  compact,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  sub?: string;
  external?: boolean;
  compact?: boolean;
}) {
  const className = compact
    ? "flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 transition-colors hover:bg-stone-50"
    : "flex flex-col items-center gap-1.5 rounded-lg px-4 py-2 transition-colors hover:bg-stone-50";

  const content = (
    <>
      <span
        className={
          compact
            ? "flex h-8 w-8 items-center justify-center"
            : "flex h-10 w-10 items-center justify-center"
        }
      >
        {icon}
      </span>
      <span className="text-center">
        <span
          className={`block font-medium text-[#1a1a1a] ${compact ? "text-[10px]" : "text-[11px]"}`}
        >
          {label}
        </span>
        {sub && (
          <span className="mt-0.5 block text-[10px] text-stone-400">{sub}</span>
        )}
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}

export function ContactPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col border-b border-stone-100 lg:min-h-[360px] lg:border-r lg:border-b-0">
          <div className="border-b border-stone-100 bg-[#fafafa] px-4 py-3.5 sm:px-5">
            <h3 className="text-sm font-semibold text-[#1a1a1a]">오시는 길</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-stone-600">
              {site.address.road}
            </p>
            <p className="text-[11px] text-stone-400">{site.address.jibun}</p>
            <a
              href={site.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs font-medium text-[#2d5a3d] hover:underline"
            >
              네이버 지도에서 보기 →
            </a>
          </div>
          <div className="relative min-h-[240px] flex-1 sm:min-h-[300px]">
            <NaverMap className="absolute inset-0 h-full w-full" />
          </div>
        </div>

        <div className="flex min-h-[200px] items-center justify-center px-5 py-8 lg:min-h-[360px]">
          <div className="w-full max-w-[260px]">
            <div className="flex items-start justify-center gap-6 sm:gap-8">
              <IconContact
                href={site.instagram.url}
                external
                compact
                label="인스타그램"
                icon={
                  <Image src="/icons/instagram.svg" alt="" width={22} height={22} aria-hidden />
                }
              />
              <IconContact
                href={site.kakao.openChatUrl}
                external
                compact
                label="카톡상담"
                icon={
                  <Image src="/icons/kakao.svg" alt="" width={22} height={22} aria-hidden />
                }
              />
            </div>

            <div className="mt-5 flex justify-center">
              <IconContact
                href={`tel:${site.phone.tel}`}
                label="전화"
                sub={site.phone.display}
                icon={
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef5f0]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#2d5a3d]"
                      aria-hidden
                    >
                      <path
                        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                }
              />
            </div>

            <p className="mt-4 text-center text-[10px] leading-relaxed text-stone-400">
              {site.hours.weekday}
              <br />
              {site.hours.saturday}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
