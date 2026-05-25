import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCE, PROFILE } from "@/lib/portfolio/profile";

export default function ExperienceSection() {
  return (
    <PageSection id="experience" ariaLabelledBy="experience-heading">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've built & shipped"
        description={`${PROFILE.yearsExperience} years in fintech — microservices, integrations, and platform reliability at scale.`}
      />

      <ol className="m-0 list-none p-0">
        {EXPERIENCE.map((job, index) => (
          <li
            key={`${job.company}-${job.period}`}
            className="grid grid-cols-[2rem_1fr] gap-4 sm:gap-5"
          >
            <div className="relative flex flex-col items-center pt-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent-warm)] shadow-[0_0_12px_rgba(255,138,61,0.5)]" />
              {index < EXPERIENCE.length - 1 ? (
                <span className="mt-1.5 min-h-8 w-px flex-1 bg-gradient-to-b from-[rgba(255,138,61,0.4)] to-transparent" />
              ) : null}
            </div>
            <article className="mb-6 rounded-[0.85rem] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 sm:mb-8 sm:p-6">
              <header className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between md:gap-4">
                <div>
                  <h3 className="m-0 font-[family-name:var(--font-syne)] text-lg font-bold text-[var(--text-primary)] md:text-[1.15rem]">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-sans text-[0.95rem] text-[var(--accent-warm)]">
                    {job.company}
                  </p>
                </div>
                <div className="flex flex-col gap-0.5 text-left sm:items-end sm:text-right">
                  <time className="font-sans text-[0.82rem] font-medium text-[var(--text-muted)]">
                    {job.period}
                  </time>
                  {job.location ? (
                    <span className="font-sans text-[0.78rem] text-[var(--text-muted)] opacity-80">
                      {job.location}
                    </span>
                  ) : null}
                </div>
              </header>
              <ul className="m-0 list-disc space-y-2 pl-5 font-sans text-[0.95rem] leading-relaxed text-[var(--text-muted)]">
                {job.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 32)}>{bullet}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </PageSection>
  );
}
