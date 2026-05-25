import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { CERTIFICATIONS, EDUCATION } from "@/lib/portfolio/profile";

export default function EducationSection() {
  return (
    <PageSection id="education" variant="elevated" ariaLabelledBy="education-heading">
      <SectionHeading
        eyebrow="Education"
        title="Learning & credentials"
        description="Formal education and certifications supporting backend engineering practice."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
        <div>
          <h3 className="mb-4 font-[family-name:var(--font-syne)] text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]">
            Education
          </h3>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {EDUCATION.map((item) => (
              <li
                key={item.school}
                className="rounded-[0.85rem] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 sm:p-5"
              >
                <p className="m-0 font-[family-name:var(--font-syne)] text-base font-bold text-[var(--text-primary)]">
                  {item.school}
                </p>
                <p className="mt-1 font-sans text-[0.9rem] text-[var(--text-muted)]">
                  {item.degree}
                </p>
                <time className="mt-2 block font-sans text-[0.8rem] text-[var(--accent-warm)]">
                  {item.period}
                </time>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-[family-name:var(--font-syne)] text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]">
            Certifications
          </h3>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {CERTIFICATIONS.map((cert) => (
              <li
                key={cert.name}
                className="rounded-[0.85rem] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 sm:p-5"
              >
                <p className="m-0 font-[family-name:var(--font-syne)] text-base font-bold text-[var(--text-primary)]">
                  {cert.name}
                </p>
                <p className="mt-1 font-sans text-[0.9rem] text-[var(--text-muted)]">
                  {cert.issuer}
                </p>
                <time className="mt-2 block font-sans text-[0.8rem] text-[var(--accent-warm)]">
                  {cert.date}
                </time>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageSection>
  );
}
