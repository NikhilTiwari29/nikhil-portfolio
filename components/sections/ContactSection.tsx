import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROFILE } from "@/lib/portfolio/profile";

export default function ContactSection() {
  return (
    <PageSection id="contact" ariaLabelledBy="contact-heading">
      <div data-reveal="contact" className="rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-br from-[rgba(255,138,61,0.08)] via-[var(--bg-card)] to-[rgba(110,184,255,0.05)] p-6 sm:p-8 md:p-10 lg:p-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to backend engineer and backend developer roles, collaborations, and technical conversations."
        />

        <div className="mb-8 flex flex-wrap gap-3 md:mb-10">
          <a
            data-pop
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center rounded-[0.6rem] bg-[var(--accent-warm)] px-5 py-3.5 font-sans text-[0.9rem] font-semibold text-[#1a0f08] no-underline transition-[filter,transform] hover:-translate-y-px hover:brightness-110"
          >
            Email {PROFILE.name.split(" ")[0]}
          </a>
          <a
            data-pop
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-secondary inline-flex items-center rounded-[0.6rem] px-5 py-3.5 font-sans text-[0.88rem] font-medium no-underline"
          >
            LinkedIn
          </a>
          <a
            data-pop
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-secondary inline-flex items-center rounded-[0.6rem] px-5 py-3.5 font-sans text-[0.88rem] font-medium no-underline"
          >
            GitHub
          </a>
          <a
            data-pop
            href="#resume"
            className="contact-secondary inline-flex items-center rounded-[0.6rem] px-5 py-3.5 font-sans text-[0.88rem] font-medium no-underline"
          >
            View resume
          </a>
          {PROFILE.resumeUrl ? (
            <a
              data-pop
              href={PROFILE.resumeUrl}
              className="contact-secondary inline-flex items-center rounded-[0.6rem] px-5 py-3.5 font-sans text-[0.88rem] font-medium no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          ) : null}
        </div>

        <dl className="m-0 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
          <div data-pop className="flex flex-col gap-1.5">
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
          <div data-pop className="flex flex-col gap-1.5">
            <dt className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--accent-warm)]">
              Phone
            </dt>
            <dd className="m-0 font-sans text-[0.95rem] text-[var(--text-muted)]">
              <a
                href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                className="text-[var(--text-primary)] no-underline hover:text-[var(--accent-warm)]"
              >
                {PROFILE.phone}
              </a>
            </dd>
          </div>
          <div data-pop className="flex flex-col gap-1.5">
            <dt className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--accent-warm)]">
              Location
            </dt>
            <dd className="m-0 font-sans text-[0.95rem] text-[var(--text-muted)]">
              {PROFILE.location}
            </dd>
          </div>
          <div data-pop className="flex flex-col gap-1.5">
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
