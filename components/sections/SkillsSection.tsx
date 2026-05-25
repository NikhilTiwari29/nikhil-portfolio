import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILL_GROUPS } from "@/lib/portfolio/profile";

export default function SkillsSection() {
  return (
    <PageSection id="skills" variant="elevated" ariaLabelledBy="skills-heading">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        description="Backend-first toolkit — production APIs, data stores, and platform tooling."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {SKILL_GROUPS.map((group) => (
          <article
            key={group.title}
            className="rounded-[0.85rem] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 sm:p-6"
          >
            <h3 className="mb-4 font-[family-name:var(--font-syne)] text-base font-bold text-[var(--text-primary)]">
              {group.title}
            </h3>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-block rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 font-sans text-[0.78rem] text-[var(--text-muted)]">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
