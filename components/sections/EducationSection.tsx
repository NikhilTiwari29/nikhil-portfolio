import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { EDUCATION } from "@/lib/portfolio/profile";

export default function EducationSection() {
  return (
    <PageSection id="education" variant="elevated" ariaLabelledBy="education-heading">
      <SectionHeading
        eyebrow="Education"
        title="Education & foundations"
        description="A commerce foundation followed by intensive full-stack software development training."
      />

      <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2">
        {EDUCATION.map((item) => (
          <li
            key={item.school}
            data-reveal="card"
            className="education-card rounded-[0.5rem] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 sm:p-6"
          >
            <p className="m-0 font-[family-name:var(--font-syne)] text-base font-bold text-[var(--text-primary)]">
              {item.school}
            </p>
            <p className="mt-2 font-sans text-[0.9rem] text-[var(--text-muted)]">
              {item.degree}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-sans text-[0.8rem] text-[var(--accent-warm)]">
              <time>{item.period}</time>
              <span>{item.location}</span>
            </div>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
