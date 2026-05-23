"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "@/lib/portfolio/profile";
import styles from "./SiteNav.module.css";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>NT</span>
          <span className={styles.logoText}>{PROFILE.name}</span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={PROFILE.resumeUrl ?? "#resume"}
          className={styles.cta}
          {...(PROFILE.resumeUrl ? { download: true } : {})}
        >
          Resume
        </a>
      </div>
    </header>
  );
}
