"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "@/lib/portfolio/profile";
import { cn } from "@/lib/utils/cn";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] border-b border-transparent transition-[background,border-color,backdrop-filter] duration-300",
        scrolled &&
          "border-white/[0.06] bg-[rgba(6,6,10,0.82)] backdrop-blur-2xl",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 md:px-8 lg:px-10">
        <a
          href="#"
          className="flex items-center gap-2.5 text-[var(--text-primary)] no-underline"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-[0.45rem] bg-gradient-to-br from-[var(--accent-warm)] to-[#ffb07a] font-[family-name:var(--font-syne)] text-[0.7rem] font-extrabold text-[#1a0f08]">
            NT
          </span>
          <span className="hidden font-sans text-sm font-medium tracking-wide sm:inline">
            {PROFILE.name}
          </span>
        </a>

        <nav
          className="hidden items-center gap-6 md:flex lg:gap-7"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[0.82rem] font-medium tracking-wide text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PROFILE.resumeUrl ?? "#resume"}
            className="inline-flex items-center rounded-full border border-[rgba(255,138,61,0.35)] bg-[rgba(255,138,61,0.1)] px-3 py-2 font-sans text-[0.72rem] font-medium uppercase tracking-wider text-[#ffd4b0] no-underline transition-[background,border-color] hover:border-[rgba(255,138,61,0.55)] hover:bg-[rgba(255,138,61,0.18)] sm:px-4 sm:text-[0.78rem]"
            {...(PROFILE.resumeUrl ? { download: true } : {})}
          >
            Resume
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "h-0.5 w-5 rounded-full bg-[var(--text-primary)] transition-transform",
                menuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 rounded-full bg-[var(--text-primary)] transition-opacity",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 rounded-full bg-[var(--text-primary)] transition-transform",
                menuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-[var(--site-nav-height)] z-[99] flex flex-col gap-1 border-t border-white/[0.08] bg-[rgba(6,6,10,0.96)] px-4 py-4 backdrop-blur-xl transition-[opacity,visibility,transform] duration-300 md:hidden",
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none",
        )}
        aria-label="Mobile"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="rounded-lg px-3 py-3 font-sans text-base font-medium text-[var(--text-muted)] no-underline transition-colors hover:bg-white/[0.04] hover:text-[var(--text-primary)]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
