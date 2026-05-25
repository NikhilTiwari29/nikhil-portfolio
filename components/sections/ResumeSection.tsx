import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROFILE, RESUME } from "@/lib/portfolio/profile";

export default function ResumeSection() {
  return (
    <PageSection id="resume" variant="elevated" ariaLabelledBy="resume-heading">
      <SectionHeading
        eyebrow="Resume"
        title="Resume preview"
        description="Placeholder layout for recruiters — replace content in lib/portfolio/profile.ts and upload your PDF when ready."
      />

      {RESUME.isPlaceholder ? (
        <p
          className="mb-6 font-sans text-sm italic text-[var(--text-muted)] md:mb-8"
          role="status"
        >
          Draft content below — phone number and PDF download will be updated soon.
        </p>
      ) : null}

      <article
        className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 sm:p-6 md:p-8"
        aria-label="Resume document preview"
      >
        <header className="border-b border-[var(--border-subtle)] pb-5 md:pb-6">
          <h3 className="m-0 font-[family-name:var(--font-syne)] text-xl font-bold text-[var(--text-primary)] md:text-2xl">
            {PROFILE.name}
          </h3>
          <p className="mt-1 font-sans text-[0.95rem] text-[var(--accent-warm)]">
            {PROFILE.title}
          </p>
          <ul className="mt-3 flex list-none flex-wrap gap-x-4 gap-y-2 p-0 font-sans text-[0.82rem] text-[var(--text-muted)]">
            <li>
              <a
                href={`mailto:${RESUME.contact.email}`}
                className="text-[var(--text-primary)] no-underline hover:text-[var(--accent-warm)]"
              >
                {RESUME.contact.email}
              </a>
            </li>
            <li>{RESUME.contact.phone}</li>
            <li>{RESUME.contact.location}</li>
            <li>
              <a
                href={RESUME.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] no-underline hover:text-[var(--accent-warm)]"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={RESUME.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-primary)] no-underline hover:text-[var(--accent-warm)]"
              >
                GitHub
              </a>
            </li>
          </ul>
        </header>

        <div className="mt-5 space-y-5 md:mt-6 md:space-y-6">
          <div>
            <h4 className="mb-2 font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-wider text-[var(--accent-warm)]">
              Summary
            </h4>
            <p className="m-0 font-sans text-[0.92rem] leading-relaxed text-[var(--text-muted)]">
              {RESUME.summary}
            </p>
          </div>

          <div>
            <h4 className="mb-2 font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-wider text-[var(--accent-warm)]">
              Experience
            </h4>
            {RESUME.experience.map((job) => (
              <div key={job.company} className="mb-4 last:mb-0">
                <div className="flex flex-col gap-0.5 font-sans text-[0.88rem] text-[var(--text-muted)] sm:flex-row sm:flex-wrap sm:gap-x-2">
                  <strong className="text-[var(--text-primary)]">{job.role}</strong>
                  <span>· {job.company}</span>
                  <time>{job.period}</time>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 font-sans text-[0.88rem] leading-relaxed text-[var(--text-muted)]">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h4 className="mb-2 font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-wider text-[var(--accent-warm)]">
              Technical skills
            </h4>
            <ul className="m-0 list-none space-y-1 p-0 font-sans text-[0.88rem] text-[var(--text-muted)]">
              {RESUME.technicalSkills.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-wider text-[var(--accent-warm)]">
              Projects
            </h4>
            <ul className="m-0 list-disc space-y-1 pl-5 font-sans text-[0.88rem] text-[var(--text-muted)]">
              {RESUME.projects.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            <div>
              <h4 className="mb-2 font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-wider text-[var(--accent-warm)]">
                Education
              </h4>
              <ul className="m-0 list-disc space-y-1 pl-5 font-sans text-[0.88rem] text-[var(--text-muted)]">
                {RESUME.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-wider text-[var(--accent-warm)]">
                Certifications
              </h4>
              <ul className="m-0 list-disc space-y-1 pl-5 font-sans text-[0.88rem] text-[var(--text-muted)]">
                {RESUME.certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
        {PROFILE.resumeUrl ? (
          <a
            href={PROFILE.resumeUrl}
            className="inline-flex items-center rounded-[0.6rem] bg-[var(--accent-warm)] px-5 py-3 font-sans text-[0.88rem] font-semibold text-[#1a0f08] no-underline"
            download
          >
            Download PDF
          </a>
        ) : (
          <span className="font-sans text-[0.88rem] text-[var(--text-muted)] italic">
            PDF download — coming soon
          </span>
        )}
        <a
          href={`mailto:${PROFILE.email}?subject=Resume%20request`}
          className="inline-flex items-center rounded-[0.6rem] border border-[var(--border-subtle)] px-5 py-3 font-sans text-[0.88rem] font-medium text-[var(--text-primary)] no-underline hover:border-[rgba(255,138,61,0.3)]"
        >
          Request latest resume
        </a>
      </div>
    </PageSection>
  );
}
