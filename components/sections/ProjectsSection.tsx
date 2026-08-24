import PageSection from "@/components/layout/PageSection";
import Card3D from "@/components/ui/Card3D";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANY_WORK, PROJECTS } from "@/lib/portfolio/profile";
import { cn } from "@/lib/utils/cn";

export default function ProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  const other = PROJECTS.filter((p) => !p.featured);

  return (
    <PageSection id="projects" variant="elevated" ariaLabelledBy="projects-heading">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Work"
        description="Production systems built at Vayana Networks — real financial workflows, real integrations, and real constraints."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
        {COMPANY_WORK.map((work) => (
          <CompanyWorkCard key={work.title} work={work} />
        ))}
      </div>

      <div className="mt-12 border-t border-white/[0.08] pt-10 sm:mt-16 sm:pt-12">
        <p className="m-0 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent-warm)]">Independent work</p>
        <h3 className="mt-3 font-[family-name:var(--font-syne)] text-2xl font-bold text-[var(--text-primary)]">Architecture projects</h3>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} featured />
        ))}
      </div>

      {other.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-5 lg:gap-5">
          {other.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ) : null}
    </PageSection>
  );
}

type CompanyWork = (typeof COMPANY_WORK)[number];

function CompanyWorkCard({ work }: { work: CompanyWork }) {
  return (
    <Card3D as="article" data-reveal="project" contentClassName="flex h-full flex-col" className="group overflow-hidden rounded-[0.5rem] border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[rgba(79,214,161,0.42)]">
      <div className="border-b border-white/[0.07] bg-[rgba(79,214,161,0.055)] px-5 py-4 sm:px-6">
        <p className="m-0 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent-warm)]">{work.category}</p>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="m-0 font-[family-name:var(--font-syne)] text-lg font-bold text-[var(--text-primary)] md:text-xl">{work.title}</h3>
        <p className="mb-5 mt-3 flex-1 font-sans text-[0.95rem] leading-relaxed text-[var(--text-muted)]">{work.description}</p>
        <ul className="mb-5 grid list-none gap-2 border-l border-[rgba(79,214,161,0.48)] pl-3" aria-label="Impact">
          {work.impact.map((item) => <li key={item} className="font-sans text-[0.78rem] font-medium text-[var(--text-primary)]">{item}</li>)}
        </ul>
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0" aria-label="Technologies">
          {work.tech.map((tech) => <li key={tech} className="project-tech rounded-md px-2 py-1 font-sans text-[0.72rem] font-medium">{tech}</li>)}
        </ul>
      </div>
    </Card3D>
  );
}

type Project = (typeof PROJECTS)[number];

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const hasGithub = Boolean(project.links.github);
  const hasDemo = Boolean(project.links.demo);

  return (
    <Card3D
      as="article"
      data-reveal="project"
      contentClassName="flex h-full flex-col"
      className={cn(
        "group overflow-hidden rounded-[0.5rem] border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[rgba(255,138,61,0.35)]",
        featured &&
          "border-[rgba(255,138,61,0.15)] bg-gradient-to-br from-[rgba(255,138,61,0.06)] to-[var(--bg-card)]",
      )}
    >
      <div className="border-b border-white/[0.07] bg-black/10 px-5 py-4 sm:px-6">
        <p className="m-0 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent-warm)]">
          {project.outcome}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2.5">
        <h3 className="m-0 font-[family-name:var(--font-syne)] text-lg font-bold text-[var(--text-primary)] md:text-xl">
          {project.title}
        </h3>
        <span
          className={cn(
            "rounded-md px-2 py-1 font-sans text-[0.68rem] font-semibold uppercase tracking-wide",
            project.architecture === "Microservices"
              ? "border border-[rgba(110,184,255,0.2)] bg-[rgba(110,184,255,0.12)] text-[rgba(160,210,255,0.95)]"
              : "border border-[rgba(255,138,61,0.2)] bg-[rgba(255,138,61,0.1)] text-[rgba(255,180,130,0.95)]",
          )}
        >
          {project.architecture}
        </span>
        <time className="ml-auto font-sans text-[0.72rem] text-[var(--text-muted)]">
          {project.period}
        </time>
      </div>
      <p className="mb-4 flex-1 font-sans text-[0.95rem] leading-relaxed text-[var(--text-muted)]">
        {project.description}
      </p>
      <ul className="mb-5 grid list-none gap-2 border-l border-[rgba(255,138,61,0.3)] pl-3" aria-label="Architecture highlights">
        {project.patterns.map((pattern) => (
          <li key={pattern} data-pop className="font-sans text-[0.78rem] font-medium text-[var(--text-primary)]">
            {pattern}
          </li>
        ))}
      </ul>
      <ul className="mb-4 flex list-none flex-wrap gap-2 p-0" aria-label="Technologies">
        {project.tech.map((t) => (
          <li
            key={t}
            data-pop
            className="project-tech rounded-md px-2 py-1 font-sans text-[0.72rem] font-medium"
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex gap-4 border-t border-white/[0.07] pt-4">
        {hasGithub ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.85rem] font-medium text-[var(--accent-warm)] no-underline hover:underline"
          >
            Review source &rarr;
          </a>
        ) : null}
        {hasDemo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.85rem] font-medium text-[var(--accent-warm)] no-underline hover:underline"
          >
            Live demo
          </a>
        ) : null}
        {!hasGithub && !hasDemo ? (
          <span className="font-sans text-[0.8rem] text-[var(--text-muted)] opacity-70">
            Source on GitHub
          </span>
        ) : null}
      </div>
      </div>
    </Card3D>
  );
}
