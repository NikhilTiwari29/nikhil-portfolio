import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILL_GROUPS } from "@/lib/portfolio/profile";
import type { CSSProperties } from "react";

const GROUP_COLORS = ["#69b9c9", "#f5a044", "#9b8cff", "#54c68a", "#ef7fa6", "#d8b65c"];

export default function SkillsSection() {
  return (
    <PageSection id="skills" variant="elevated" ariaLabelledBy="skills-heading">
      <SectionHeading
        eyebrow="Skills"
        title="Backend engineering toolkit"
        description="Technologies used across production fintech systems and independently built backend projects."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {SKILL_GROUPS.map((group, index) => (
          <article
            key={group.title}
            data-reveal="card"
            style={{ "--card-accent": GROUP_COLORS[index] } as CSSProperties}
            className="skill-card rounded-[0.5rem] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 sm:p-6"
          >
            <h3 className="skill-card-title mb-4 font-[family-name:var(--font-syne)] text-base font-bold text-[var(--text-primary)]">
              {group.title}
            </h3>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {group.skills.map((skill) => (
                <li key={skill} data-pop>
                  <span className="skill-pill inline-block rounded-md px-2.5 py-1.5 font-sans text-[0.78rem] font-medium">
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
