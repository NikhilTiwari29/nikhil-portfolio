import SectionHeading from "@/components/ui/SectionHeading";
import { PROFILE } from "@/lib/portfolio/profile";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <div className={styles.panel}>
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect"
            description="Open to backend engineering roles, collaborations, and technical conversations. Reach out — I typically respond within 24–48 hours."
          />

          <div className={styles.actions}>
            <a href={`mailto:${PROFILE.email}`} className={styles.primary}>
              Email {PROFILE.name.split(" ")[0]}
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              GitHub
            </a>
            <a href="#resume" className={styles.secondary}>
              View resume
            </a>
            {PROFILE.resumeUrl ? (
              <a href={PROFILE.resumeUrl} className={styles.secondary} download>
                Download PDF
              </a>
            ) : null}
          </div>

          <dl className={styles.details}>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{PROFILE.location}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{PROFILE.availability}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
