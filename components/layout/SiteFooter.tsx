import { PROFILE } from "@/lib/portfolio/profile";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[2] border-t border-white/[0.08] bg-[var(--bg-base)] px-4 py-8 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
        <p className="m-0 text-center font-sans text-[0.85rem] text-[var(--text-muted)] sm:text-left">
          © {year} {PROFILE.name}. Built with Next.js.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.85rem] text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--accent-warm)]"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.85rem] text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--accent-warm)]"
          >
            GitHub
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="font-sans text-[0.85rem] text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--accent-warm)]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
