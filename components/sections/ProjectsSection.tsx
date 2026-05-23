import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/lib/portfolio/profile";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  const other = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Projects"
          title="Selected backend work"
          description="Hands-on backend systems — architecture, APIs, and scalable data flows."
        />

        <div className={styles.featuredGrid}>
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>

        {other.length > 0 ? (
          <div className={styles.otherGrid}>
            {other.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
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
      className={`${styles.card} ${featured ? styles.cardFeatured : ""}`}
    >
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.tech} aria-label="Technologies">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className={styles.links}>
        {hasGithub ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        ) : null}
        {hasDemo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Live demo
          </a>
        ) : null}
        {!hasGithub && !hasDemo ? (
          <span className={styles.linkMuted}>Source on GitHub</span>
        ) : null}
      </div>
    </article>
  );
}
