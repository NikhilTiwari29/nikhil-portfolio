import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { ABOUT, PROFILE } from "@/lib/portfolio/profile";

export default function AboutSection() {
  return (
    <PageSection id="about" ariaLabelledBy="about-heading">
      <SectionHeading
        eyebrow="About"
        title={`${PROFILE.name} — ${PROFILE.title}`}
        description={PROFILE.headline}
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr] md:gap-10 lg:gap-12">
        <div className="space-y-4 font-sans text-base leading-relaxed text-[var(--text-muted)] md:text-[1.05rem] md:leading-[1.75]">
          {ABOUT.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="m-0">
              {paragraph}
            </p>
          ))}
          <p className="!mt-6 text-[0.92rem] tracking-wide text-[var(--accent-warm)]">
            {PROFILE.availability}
          </p>
        </div>

        <aside
          className="flex flex-col gap-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 sm:p-6"
          aria-label="Quick facts"
        >
          {ABOUT.highlights.map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5">
              <span className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[var(--accent-warm)]">
                {item.label}
              </span>
              <span className="font-sans text-[0.95rem] leading-snug text-[var(--text-primary)]">
                {item.value}
              </span>
            </div>
          ))}
          <a
            href="#resume"
            className="mt-2 inline-flex items-center justify-center rounded-[0.6rem] bg-[var(--accent-warm)] px-5 py-3 font-sans text-[0.88rem] font-semibold text-[#1a0f08] no-underline transition-[filter,transform] hover:-translate-y-px hover:brightness-110"
          >
            View resume
          </a>
        </aside>
      </div>
    </PageSection>
  );
}
