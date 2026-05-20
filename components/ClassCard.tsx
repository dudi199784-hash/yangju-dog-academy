import Image from "next/image";
import Link from "next/link";
import { classes } from "@/lib/site";

type ClassItem = (typeof classes)[number];

export function ClassCard({
  cls,
  compact = false,
}: {
  cls: ClassItem;
  compact?: boolean;
}) {
  const content = (
    <>
      <div className={`relative overflow-hidden ${compact ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
        <Image
          key={cls.image}
          src={cls.image}
          alt={cls.imageAlt}
          fill
          sizes={compact ? "(max-width: 640px) 50vw, 25vw" : "(max-width: 1024px) 100vw, 50vw"}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized={cls.slug === "office"}
        />
      </div>
      <div className={compact ? "flex flex-1 flex-col p-3 sm:p-4" : "p-5 sm:p-6"}>
        <h3
          className={
            compact
              ? "text-sm font-semibold text-[#1a1a1a] sm:text-[15px]"
              : "text-base font-semibold text-[#1a1a1a] sm:text-lg"
          }
        >
          {cls.title}
        </h3>
        <p
          className={`mt-1.5 leading-relaxed text-stone-600 ${
            compact
              ? "line-clamp-3 text-xs sm:text-[13px]"
              : "text-sm sm:text-[15px]"
          }`}
        >
          {cls.description}
        </p>
        {!compact && (
          <span className="mt-4 inline-block text-sm font-medium text-[#2d5a3d] group-hover:underline">
            자세히 보기 →
          </span>
        )}
      </div>
    </>
  );

  return (
    <Link
      href={`/classes#${cls.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      {content}
    </Link>
  );
}
