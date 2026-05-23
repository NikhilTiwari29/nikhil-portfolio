import SectionHeading from "@/components/ui/SectionHeading";
import { PROFILE, RESUME } from "@/lib/portfolio/profile";
import styles from "./ResumeSection.module.css";

export default function ResumeSection() {
  return (
    <section id="resume" className={styles.section} aria-labelledby="resume-heading">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Resume"
          title="Resume preview"
          description="Placeholder layout for recruiters — replace content in lib/portfolio/profile.ts and upload your PDF when ready."
        />

        {RESUME.isPlaceholder ? (
          <p className={styles.placeholderNote} role="status">
            Draft content below — phone number and PDF download will be updated soon.
          </p>
        ) : null}

        <article className={styles.document} aria-label="Resume document preview">
          <header className={styles.docHeader}>
            <h3 className={styles.docName}>{PROFILE.name}</h3>
            <p className={styles.docTitle}>{PROFILE.title}</p>
            <ul className={styles.docContact}>
              <li>
                <a href={`mailto:${RESUME.contact.email}`}>{RESUME.contact.email}</a>
              </li>
              <li>{RESUME.contact.phone}</li>
              <li>{RESUME.contact.location}</li>
              <li>
                <a href={RESUME.contact.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={RESUME.contact.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </header>

          <div className={styles.docBlock}>
            <h4 className={styles.docHeading}>Summary</h4>
            <p className={styles.docText}>{RESUME.summary}</p>
          </div>

          <div className={styles.docBlock}>
            <h4 className={styles.docHeading}>Experience</h4>
            {RESUME.experience.map((job) => (
              <div key={job.company} className={styles.docJob}>
                <div className={styles.docJobTitle}>
                  <strong>{job.role}</strong>
                  <span>{job.company}</span>
                  <time>{job.period}</time>
                </div>
                <ul className={styles.docList}>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.docBlock}>
            <h4 className={styles.docHeading}>Technical skills</h4>
            <ul className={styles.docSkills}>
              {RESUME.technicalSkills.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className={styles.docBlock}>
            <h4 className={styles.docHeading}>Projects</h4>
            <ul className={styles.docList}>
              {RESUME.projects.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.docRow}>
            <div className={styles.docBlock}>
              <h4 className={styles.docHeading}>Education</h4>
              <ul className={styles.docList}>
                {RESUME.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.docBlock}>
              <h4 className={styles.docHeading}>Certifications</h4>
              <ul className={styles.docList}>
                {RESUME.certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <div className={styles.actions}>
          {PROFILE.resumeUrl ? (
            <a href={PROFILE.resumeUrl} className={styles.downloadBtn} download>
              Download PDF
            </a>
          ) : (
            <span className={styles.downloadDisabled}>PDF download — coming soon</span>
          )}
          <a href={`mailto:${PROFILE.email}?subject=Resume%20request`} className={styles.emailBtn}>
            Request latest resume
          </a>
        </div>
      </div>
    </section>
  );
}
