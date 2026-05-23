import SectionHeading from "@/components/ui/SectionHeading";
import { SKILL_GROUPS } from "@/lib/portfolio/profile";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-heading">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="Backend-first toolkit — production APIs, data stores, and platform tooling."
        />

        <div className={styles.grid}>
          {SKILL_GROUPS.map((group) => (
            <article key={group.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <ul className={styles.list}>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className={styles.tag}>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
