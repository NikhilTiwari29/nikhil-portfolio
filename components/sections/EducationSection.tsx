import SectionHeading from "@/components/ui/SectionHeading";
import { CERTIFICATIONS, EDUCATION } from "@/lib/portfolio/profile";
import styles from "./EducationSection.module.css";

export default function EducationSection() {
  return (
    <section
      id="education"
      className={styles.section}
      aria-labelledby="education-heading"
    >
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Education"
          title="Learning & credentials"
          description="Formal education and certifications supporting backend engineering practice."
        />

        <div className={styles.grid}>
          <div>
            <h3 className={styles.subheading}>Education</h3>
            <ul className={styles.list}>
              {EDUCATION.map((item) => (
                <li key={item.school} className={styles.card}>
                  <p className={styles.school}>{item.school}</p>
                  <p className={styles.degree}>{item.degree}</p>
                  <time className={styles.period}>{item.period}</time>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.subheading}>Certifications</h3>
            <ul className={styles.list}>
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.name} className={styles.card}>
                  <p className={styles.school}>{cert.name}</p>
                  <p className={styles.degree}>{cert.issuer}</p>
                  <time className={styles.period}>{cert.date}</time>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
