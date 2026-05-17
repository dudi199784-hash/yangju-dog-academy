export function SectionHeading({
  label,
  title,
  description,
}: {
  label?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {label && (
        <p className="mb-2 text-sm font-semibold tracking-wide text-[#5a7d65] uppercase">
          {label}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-[#1e3d2a] sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-stone-600">{description}</p>
      )}
    </div>
  );
}
