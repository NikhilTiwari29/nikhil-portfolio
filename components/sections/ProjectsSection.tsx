import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/lib/portfolio/profile";
import { cn } from "@/lib/utils/cn";

export default function ProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  const other = PROJECTS.filter((p) => !p.featured);

  return (
    <PageSection id="projects" variant="elevated" ariaLabelledBy="projects-heading">
      <SectionHeading
        eyebrow="Projects"
        title="Selected backend work"
        description="Microservices and monolith backends — distributed systems, APIs, and production-style Spring Boot design."
      />

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
    <article
      className={cn(
        "flex flex-col rounded-[0.85rem] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[rgba(255,138,61,0.25)] sm:p-6",
        featured &&
          "border-[rgba(255,138,61,0.15)] bg-gradient-to-br from-[rgba(255,138,61,0.06)] to-[var(--bg-card)]",
      )}
    >
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
      </div>
      <p className="mb-4 flex-1 font-sans text-[0.95rem] leading-relaxed text-[var(--text-muted)]">
        {project.description}
      </p>
      <ul className="mb-4 flex list-none flex-wrap gap-2 p-0" aria-label="Technologies">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md bg-[rgba(110,184,255,0.08)] px-2 py-1 font-sans text-[0.72rem] text-[rgba(180,210,255,0.9)]"
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex gap-4">
        {hasGithub ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.85rem] font-medium text-[var(--accent-warm)] no-underline hover:underline"
          >
            GitHub
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
    </article>
  );
}
