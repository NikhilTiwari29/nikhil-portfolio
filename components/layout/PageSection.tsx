import { cn } from "@/lib/utils/cn";

type PageSectionProps = {
  id: string;
  children: React.ReactNode;
  variant?: "base" | "elevated";
  className?: string;
  ariaLabelledBy?: string;
};

/**
 * Mobile-first section shell — padding scales at md (tablet) and lg (desktop).
 */
export default function PageSection({
  id,
  children,
  variant = "base",
  className,
  ariaLabelledBy,
}: PageSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative z-[2] border-t border-white/[0.08]",
        "px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24",
        variant === "elevated" ? "bg-[var(--bg-elevated)]" : "bg-[var(--bg-base)]",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
