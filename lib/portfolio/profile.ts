/**
 * Portfolio content — synced with LinkedIn profile.
 */

const GITHUB = "https://github.com/NikhilTiwari29";

export const PROFILE = {
  name: "Nikhil Tiwari",
  title: "Java Backend Developer",
  headline:
    "4+ years building scalable, production-grade backend systems in fintech (Supply Chain Finance) — Spring Boot microservices, Apache Camel integrations, Kafka, and distributed system design.",
  location: "Vadodara, Gujarat, India",
  email: "nikhiltiwarip29@gmail.com",
  linkedin: "https://www.linkedin.com/in/nikhil-tiwari-0b6980212/",
  github: GITHUB,
  website: "https://nikhiltiwari.netlify.app/",
  resumeUrl: null as string | null,
  availability: "Open to backend engineering opportunities · 2026",
  yearsExperience: "4+",
} as const;

export const ABOUT = {
  paragraphs: [
    "Java Backend Developer with 4 years of experience building scalable, production-grade backend systems in the fintech domain, specifically Supply Chain Finance (SCF) at Vayana Network.",
    "I design and develop microservices and integration layers using Spring Boot and Apache Camel — building reliable services, orchestrating external system integrations, and focusing on data consistency, fault tolerance, and system resilience.",
    "I've decomposed monolithic applications into domain-driven microservices, implemented REST and event-driven messaging (Kafka/RabbitMQ), and built fault-tolerant pipelines with idempotent processing and retry mechanisms. I also ship batch/reporting with Quartz Scheduler, secure APIs with Spring Security & JWT, and containerized CI/CD deployments.",
  ],
  highlights: [
    { label: "Domain", value: "Supply Chain Finance · Fintech" },
    { label: "Core", value: "Spring Boot · Apache Camel · Kafka" },
    { label: "Data", value: "JPA · Hibernate · MySQL · PostGIS" },
  ],
} as const;

export const SKILL_GROUPS = [
  {
    title: "Backend & frameworks",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Apache Camel",
      "REST APIs",
    ],
  },
  {
    title: "Architecture & messaging",
    skills: [
      "Microservices",
      "Distributed systems",
      "Kafka",
      "RabbitMQ",
      "Eureka",
      "API Gateways",
    ],
  },
  {
    title: "Data & scheduling",
    skills: [
      "JPA / Hibernate",
      "MySQL",
      "PostgreSQL",
      "PostGIS",
      "Quartz Scheduler",
      "Stored procedures",
    ],
  },
  {
    title: "DevOps & quality",
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "JWT",
      "JUnit",
      "Testcontainers",
      "JaCoCo",
    ],
  },
  {
    title: "Also experienced",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "Git",
      "Postman",
    ],
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Software Engineer – Java Backend",
    company: "Vayana Network",
    period: "Apr 2022 — Present",
    location: "Vadodara, Gujarat, India · Full-time",
    bullets: [
      "Designed and developed microservices for core financial workflows within a Supply Chain Finance (SCF) platform using Spring Boot, contributing to decomposition of a monolithic system into scalable, loosely coupled services.",
      "Built integration pipelines with external financial systems using Apache Camel — idempotent processing and fault-tolerant error handling via dead letter channels.",
      "Implemented inter-service communication using REST APIs and asynchronous messaging (Kafka/RabbitMQ) for reliable, non-blocking data exchange.",
      "Developed high-performance backend APIs for financial data processing using JPA, custom queries, and stored procedures.",
      "Improved API performance by optimizing database queries and introducing caching on critical endpoints.",
      "Designed scheduled batch processing and reporting pipelines using Quartz Scheduler — automated report generation and delivery via email and SFTP.",
      "Secured microservices with Spring Security and JWT; containerized services with Docker and contributed to CI/CD pipelines.",
      "Followed clean layered architecture (Controller, Service, Repository) and resilient integration patterns across distributed environments.",
    ],
  },
] as const;

export const EDUCATION = [
  {
    school: "Masai School",
    degree: "Full Stack Development · Computer Software Engineering",
    period: "Aug 2021 — Apr 2022",
  },
  {
    school: "Veer Narmad South Gujarat University, Surat",
    degree: "Bachelor of Commerce (B.Com) · Accounting and Finance",
    period: "Aug 2017 — Apr 2020",
  },
] as const;

export const CERTIFICATIONS = [
  {
    name: "Docker and Kubernetes",
    issuer: "Udemy",
    date: "Mar 2023",
  },
  {
    name: "Full Stack Development",
    issuer: "Masai",
    date: "Jul 2022",
  },
] as const;

export const PROJECTS = [
  {
    title: "LinkedIn Microservices App",
    architecture: "Microservices" as const,
    description:
      "Distributed LinkedIn-style backend with Spring Cloud Gateway, Eureka, and seven services — database-per-service (PostgreSQL + Neo4j), Kafka event-driven notifications, JWT auth at the gateway, Feign inter-service calls, Docker Compose, Kubernetes manifests, and CI across all services.",
    tech: [
      "Java 21",
      "Spring Boot 3",
      "Spring Cloud",
      "Kafka",
      "PostgreSQL",
      "Neo4j",
      "Docker",
      "Kubernetes",
    ],
    links: {
      demo: "",
      github: `${GITHUB}/linkedInApp-microservice`,
    },
    featured: true,
  },
  {
    title: "Uber App Backend",
    architecture: "Monolith" as const,
    description:
      "Spring Boot ride-booking monolith: JWT + refresh tokens, RBAC, ride lifecycle with OTP, wallet/cash payment strategies, PostGIS driver matching, ratings, Swagger UI, and tests with JUnit & Testcontainers.",
    tech: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "PostGIS",
      "JWT",
      "JPA",
    ],
    links: {
      demo: "",
      github: `${GITHUB}/uberApp-backend`,
    },
    featured: true,
  },
] as const;

/** Inline resume preview — replace with final copy; add public/resume.pdf when ready. */
export const RESUME = {
  isPlaceholder: true,
  contact: {
    email: PROFILE.email,
    phone: "+91 XXXXX XXXXX",
    location: PROFILE.location,
    linkedin: PROFILE.linkedin,
    github: PROFILE.github,
  },
  summary:
    "Java Backend Developer with 4+ years of experience in fintech (Supply Chain Finance). Builds Spring Boot microservices, Apache Camel integrations, and event-driven systems with Kafka. Focused on reliability, fault tolerance, and clean API design.",
  experience: [
    {
      role: "Software Engineer – Java Backend",
      company: "Vayana Network",
      period: "Apr 2022 — Present",
      bullets: [
        "Microservices for SCF platform using Spring Boot.",
        "Apache Camel integrations with idempotent, fault-tolerant pipelines.",
        "REST + Kafka/RabbitMQ; Quartz batch jobs; JWT security; Docker & CI/CD.",
      ],
    },
  ],
  technicalSkills: [
    "Java · Spring Boot · Spring Security · JPA/Hibernate",
    "Apache Camel · REST APIs · Kafka · RabbitMQ",
    "MySQL · PostgreSQL · Docker · Kubernetes · CI/CD",
  ],
  education: [
    "Masai School — Full Stack Development (2021–2022)",
    "Veer Narmad South Gujarat University — B.Com (2017–2020)",
  ],
  certifications: [
    "Docker and Kubernetes — Udemy (2023)",
    "Full Stack Development — Masai (2022)",
  ],
  projects: [
    "LinkedIn Microservices App — Spring Cloud, Kafka, PostgreSQL, Neo4j",
    "Uber App Backend — Spring Boot monolith, PostgreSQL, PostGIS, JWT",
  ],
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
