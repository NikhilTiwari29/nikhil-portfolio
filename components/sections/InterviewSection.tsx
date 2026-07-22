import PageSection from "@/components/layout/PageSection";
import Card3D from "@/components/ui/Card3D";
import SectionHeading from "@/components/ui/SectionHeading";
import { INTERVIEW_READINESS } from "@/lib/portfolio/profile";

export default function InterviewSection() {
  return (
    <PageSection id="interview" ariaLabelledBy="interview-heading">
      <SectionHeading
        eyebrow="Interview"
        title="A project built for real backend conversations"
        description="TravelSphere is structured around the same concerns backend teams discuss in interviews and production reviews: boundaries, consistency, security, observability, failure handling, and deployment."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
        {INTERVIEW_READINESS.map((area) => (
          <Card3D
            as="article"
            key={area.title}
            data-reveal="card"
            className="interview-card rounded-[0.5rem] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 sm:p-6"
          >
            <h3 className="mb-4 font-[family-name:var(--font-syne)] text-base font-bold text-[var(--text-primary)]">
              {area.title}
            </h3>
            <ul className="m-0 list-none space-y-3 p-0">
              {area.points.map((point) => (
                <li
                  key={point}
                  data-pop
                  className="border-l-2 border-[rgba(105,185,201,0.42)] pl-3 font-sans text-[0.9rem] leading-relaxed text-[var(--text-muted)]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Card3D>
        ))}
      </div>
    </PageSection>
  );
}
