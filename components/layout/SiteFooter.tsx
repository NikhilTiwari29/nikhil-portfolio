import { PROFILE } from "@/lib/portfolio/profile";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} {PROFILE.name}. Built with Next.js.
        </p>
        <div className={styles.links}>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={`mailto:${PROFILE.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
