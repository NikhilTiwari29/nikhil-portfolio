import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCE, PROFILE } from "@/lib/portfolio/profile";
import styles from "./ExperienceSection.module.css";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className={styles.section}
      aria-labelledby="experience-heading"
    >
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built & shipped"
          description={`${PROFILE.yearsExperience} years in fintech — microservices, integrations, and platform reliability at scale.`}
        />

        <ol className={styles.timeline}>
          {EXPERIENCE.map((job, index) => (
            <li key={`${job.company}-${job.period}`} className={styles.item}>
              <div className={styles.marker} aria-hidden>
                <span className={styles.dot} />
                {index < EXPERIENCE.length - 1 ? (
                  <span className={styles.line} />
                ) : null}
              </div>
              <article className={styles.card}>
                <header className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <p className={styles.company}>{job.company}</p>
                  </div>
                  <div className={styles.meta}>
                    <time className={styles.period}>{job.period}</time>
                    {job.location ? (
                      <span className={styles.location}>{job.location}</span>
                    ) : null}
                  </div>
                </header>
                <ul className={styles.bullets}>
                  {job.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 32)}>{bullet}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
