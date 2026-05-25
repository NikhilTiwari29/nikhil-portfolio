import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "mb-8 max-w-2xl md:mb-10 lg:mb-12",
        className,
      )}
    >
      <p className="mb-3 font-sans text-[0.72rem] font-medium uppercase tracking-[0.32em] text-[var(--accent-warm)]">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-syne)] text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--text-primary)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 font-sans text-base leading-relaxed text-[var(--text-muted)] md:mt-4 md:text-[1.05rem] md:leading-[1.7]">
          {description}
        </p>
      ) : null}
    </header>
  );
}
