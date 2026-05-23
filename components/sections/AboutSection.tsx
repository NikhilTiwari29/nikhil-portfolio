import SectionHeading from "@/components/ui/SectionHeading";
import { ABOUT, PROFILE } from "@/lib/portfolio/profile";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="About"
          title={`${PROFILE.name} — ${PROFILE.title}`}
          description={PROFILE.headline}
        />

        <div className={styles.grid}>
          <div className={styles.prose}>
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className={styles.availability}>{PROFILE.availability}</p>
          </div>

          <aside className={styles.card} aria-label="Quick facts">
            {ABOUT.highlights.map((item) => (
              <div key={item.label} className={styles.fact}>
                <span className={styles.factLabel}>{item.label}</span>
                <span className={styles.factValue}>{item.value}</span>
              </div>
            ))}
            <a href="#resume" className={styles.resumeBtn}>
              View resume
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
