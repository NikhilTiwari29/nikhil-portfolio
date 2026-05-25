import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROFILE } from "@/lib/portfolio/profile";

export default function ContactSection() {
  return (
    <PageSection id="contact" ariaLabelledBy="contact-heading">
      <div className="rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-br from-[rgba(255,138,61,0.08)] via-[var(--bg-card)] to-[rgba(110,184,255,0.05)] p-6 sm:p-8 md:p-10 lg:p-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to backend engineering roles, collaborations, and technical conversations. Reach out — I typically respond within 24–48 hours."
        />

        <div className="mb-8 flex flex-wrap gap-3 md:mb-10">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center rounded-[0.6rem] bg-[var(--accent-warm)] px-5 py-3.5 font-sans text-[0.9rem] font-semibold text-[#1a0f08] no-underline transition-[filter,transform] hover:-translate-y-px hover:brightness-110"
          >
            Email {PROFILE.name.split(" ")[0]}
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[0.6rem] border border-[var(--border-subtle)] bg-white/[0.03] px-5 py-3.5 font-sans text-[0.88rem] font-medium text-[var(--text-primary)] no-underline transition-[border-color,background] hover:border-[rgba(255,138,61,0.3)] hover:bg-[rgba(255,138,61,0.06)]"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[0.6rem] border border-[var(--border-subtle)] bg-white/[0.03] px-5 py-3.5 font-sans text-[0.88rem] font-medium text-[var(--text-primary)] no-underline transition-[border-color,background] hover:border-[rgba(255,138,61,0.3)] hover:bg-[rgba(255,138,61,0.06)]"
          >
            GitHub
          </a>
          <a
            href="#resume"
            className="inline-flex items-center rounded-[0.6rem] border border-[var(--border-subtle)] bg-white/[0.03] px-5 py-3.5 font-sans text-[0.88rem] font-medium text-[var(--text-primary)] no-underline transition-[border-color,background] hover:border-[rgba(255,138,61,0.3)] hover:bg-[rgba(255,138,61,0.06)]"
          >
            View resume
          </a>
          {PROFILE.resumeUrl ? (
            <a
              href={PROFILE.resumeUrl}
              className="inline-flex items-center rounded-[0.6rem] border border-[var(--border-subtle)] bg-white/[0.03] px-5 py-3.5 font-sans text-[0.88rem] font-medium text-[var(--text-primary)] no-underline transition-[border-color,background] hover:border-[rgba(255,138,61,0.3)] hover:bg-[rgba(255,138,61,0.06)]"
              download
            >
              Download PDF
            </a>
          ) : null}
        </div>

        <dl className="m-0 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          <div className="flex flex-col gap-1.5">
            <dt className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--accent-warm)]">
              Email
            </dt>
            <dd className="m-0 font-sans text-[0.95rem] text-[var(--text-muted)]">
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-[var(--text-primary)] no-underline hover:text-[var(--accent-warm)]"
              >
                {PROFILE.email}
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--accent-warm)]">
              Location
            </dt>
            <dd className="m-0 font-sans text-[0.95rem] text-[var(--text-muted)]">
              {PROFILE.location}
            </dd>
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2 md:col-span-1">
            <dt className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--accent-warm)]">
              Status
            </dt>
            <dd className="m-0 font-sans text-[0.95rem] text-[var(--text-muted)]">
              {PROFILE.availability}
            </dd>
          </div>
        </dl>
      </div>
    </PageSection>
  );
}
