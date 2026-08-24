const GITHUB = "https://github.com/NikhilTiwari29";

export const PROFILE = {
  name: "Nikhil Tiwari",
  title: "Java Backend Developer",
  headline:
    "Java Backend Developer with 4+ years of experience building scalable fintech systems at Vayana Networks. I work with Spring Boot, Kafka, Apache Camel, Redis, Docker, observability, and cloud-ready architecture to deliver reliable financial workflows.",
  location: "Surat, Gujarat, India",
  email: "nikhiltiwarip29@gmail.com",
  phone: "+91 9265974979",
  linkedin: "https://www.linkedin.com/in/nikhil-tiwari-0b6980212/",
  github: GITHUB,
  website: "https://nikhiltiwari.netlify.app/",
  resumeUrl: "https://drive.google.com/file/d/12XAmhwkU9UlJgm2JKQ1_nDRnDRIpqWyE/view?usp=sharing",
  availability: "Open to backend engineering opportunities.",
  yearsExperience: "4+",
} as const;

export const ABOUT = {
  paragraphs: [
    "I build backend systems for financial workflows where reliability, security, and clear service boundaries matter. At Vayana Networks, I work on a Loan Management System covering onboarding, approvals, disbursement, repayment, reporting, and master-data setup.",
    "My core work combines Java 21 and Spring Boot APIs with Apache Camel integration routes and Kafka-based asynchronous processing. I have designed reusable integrations for multiple Core Banking Systems with different contracts and authentication mechanisms.",
    "I also built a dedicated report-generation microservice with AWS functionality for dependable report downloads. I use AI-assisted tools such as Claude Code, Cursor AI, and GitHub Copilot to accelerate boilerplate, explore APIs, and review edge cases—without treating them as a substitute for engineering judgment.",
    "I also work with Spring AI, including AI agents, OpenAI integrations, RAG, MCP, AI testing, observability, and speech or image-generation capabilities. Now I'm looking for a backend-heavy role where I can go deeper: bigger systems, harder problems, and stronger engineering teams.",
  ],
  highlights: [
    { label: "Production APIs", value: "15+ REST APIs delivered in fintech" },
    { label: "Reporting service", value: "Dedicated report downloads with AWS functionality" },
    { label: "System design", value: "Gateway, discovery, events, cache, observability" },
    { label: "Performance", value: "~30% faster APIs through query tuning" },
  ],
} as const;

export const SKILL_GROUPS = [
  {
    title: "Languages & core",
    skills: ["Java 17/21", "REST APIs", "Multithreading", "OOP", "Design Patterns"],
  },
  {
    title: "Frameworks",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Spring Cloud",
      "Spring AI",
      "Apache Camel",
      "JPA / Hibernate",
      "OpenFeign",
    ],
  },
  {
    title: "Architecture",
    skills: [
      "Microservices",
      "Event-driven design",
      "API Gateway",
      "Eureka",
      "Distributed systems",
      "Strategy pattern",
    ],
  },
  {
    title: "Data & messaging",
    skills: ["MySQL", "MSSQL", "PostgreSQL", "PostGIS", "Redis", "Kafka"],
  },
  {
    title: "DevOps & tools",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GitHub Actions",
      "Maven",
      "Linux",
      "Postman",
    ],
  },
  {
    title: "Testing & quality",
    skills: ["JUnit 5", "Mockito", "Testcontainers", "JaCoCo", "Swagger / OpenAPI"],
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Software Engineer - Java Backend",
    company: "Vayana Networks",
    period: "Apr 2022 - Present",
    location: "Hybrid | Vadodara | Full-time",
    tags: ["Loan Management", "Core Banking", "Kafka", "API Security"],
    bullets: [
      "Developed 15+ REST APIs using Java 21 and Spring Boot for a Loan Management System covering onboarding, approvals, disbursement, repayment, reporting, and master-data setup.",
      "Built Apache Camel and Kafka integrations between the LMS and multiple Core Banking Systems, enabling asynchronous financial workflows.",
      "Designed reusable Camel routes that support different CBS API contracts and authentication mechanisms across banks.",
      "Implemented Kafka-based bulk disbursement processing for 50K+ loan records, including invoices containing up to 1,000 records, eliminating blocking workflows.",
      "Built a dedicated report-generation microservice with AWS functionality for dependable financial-report downloads.",
      "Secured 10+ APIs using Spring Security and JWT, with role-based access control, token refresh, and expiry management.",
      "Optimized MSSQL queries with indexing and query tuning, improving average API response times by approximately 30%.",
    ],
  },
] as const;

export const EDUCATION = [
  {
    school: "Veer Narmad South Gujarat University",
    location: "Surat",
    degree: "Bachelor of Commerce (B.Com) | CGPA 7",
    period: "2017 - 2020",
  },
  {
    school: "Masai School",
    location: "Bengaluru",
    degree: "Full Stack Web Development",
    period: "2021 - 2022",
  },
] as const;

export const CERTIFICATIONS = [] as const;

export const PROJECTS = [
  {
    title: "TravelSphere Airline Platform",
    architecture: "Microservices" as const,
    period: "Jul 2026 - Present",
    outcome: "12 services | Real-world airline workflows",
    patterns: [
      "Gateway routing, JWT validation, circuit breakers, and Redis token blacklist",
      "Kafka choreography for booking, payment, seat allocation, and notifications",
      "Service-owned MySQL databases with metrics, logs, traces, and dashboards",
    ],
    description:
      "Production-grade airline reservation backend for travel search, inventory, booking, payment, and customer notifications. Built as a Maven multi-module Spring Boot platform with shared event contracts, service discovery, Dockerized infrastructure, observability, and AWS architecture documentation.",
    tech: [
      "Java 21",
      "Spring Boot 4",
      "Spring Cloud",
      "Kafka",
      "MySQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    links: {
      demo: "",
      github: `${GITHUB}/travelsphere`,
    },
    featured: true,
  },
  {
    title: "LinkedInApp Microservices",
    architecture: "Microservices" as const,
    period: "May 2026 - Present",
    outcome: "7 services | 50+ automated tests",
    patterns: [
      "Kafka event-driven pipeline",
      "Gateway JWT and X-User-Id propagation",
      "Neo4j social graph and OpenFeign",
    ],
    description:
      "Distributed social networking backend with seven independently deployable services, dynamic service discovery, secure inter-service communication, asynchronous notifications, and CI-executed test coverage.",
    tech: [
      "Java 21",
      "Spring Boot 3.3",
      "Spring Cloud",
      "Kafka",
      "PostgreSQL",
      "Neo4j",
      "Docker",
      "JUnit 5",
    ],
    links: {
      demo: "",
      github: `${GITHUB}/linkedInApp-microservice`,
    },
    featured: true,
  },
] as const;

export const INTERVIEW_READINESS = [
  {
    title: "System design depth",
    points: [
      "Can explain why the platform uses API Gateway, Eureka discovery, service-owned databases, and shared DTO/event contracts.",
      "Can discuss tradeoffs between synchronous service calls and Kafka events in booking, payment, seat, and notification flows.",
    ],
  },
  {
    title: "Production operations",
    points: [
      "Can walk through Docker Compose environments, MySQL per service, Redis, Kafka in KRaft mode, and externalized configuration.",
      "Can show how Actuator, Prometheus, Grafana, Loki, and Tempo make the platform observable after deployment.",
    ],
  },
  {
    title: "Security and reliability",
    points: [
      "Can explain gateway-level JWT validation, trusted identity headers, Redis token blacklist, and protected service routes.",
      "Can reason about circuit breakers, payment failure events, booking status transitions, idempotency risks, and data consistency.",
    ],
  },
  {
    title: "Domain storytelling",
    points: [
      "Can map real airline flows: search, flight inventory, pricing, ancillaries, booking, payment, ticketing, and notification.",
      "Can connect project decisions to real company concerns: scale, maintainability, debugging, release confidence, and ownership.",
    ],
  },
] as const;

export const RESUME = {
  contact: {
    email: PROFILE.email,
    phone: PROFILE.phone,
    location: PROFILE.location,
    linkedin: PROFILE.linkedin,
    github: PROFILE.github,
  },
  summary:
    "Java Backend Developer with over 4 years of experience building scalable fintech systems at Vayana Networks using Java, Spring Boot, Kafka, Apache Camel, and microservices. Experienced in REST APIs, Core Banking System integrations, report-generation services with AWS functionality, and event-driven loan workflows.",
  experience: [
    {
      role: "Software Engineer - Java Backend",
      company: "Vayana Networks",
      period: "Apr 2022 - Present",
      bullets: [
        "Delivered 15+ REST APIs for onboarding, approvals, disbursement, repayment, reporting, and master-data setup.",
        "Built reusable Apache Camel and Kafka integrations between the LMS and multiple Core Banking Systems.",
        "Implemented bulk processing for 50K+ loan records and a report-generation microservice with AWS functionality.",
        "Secured 10+ APIs and improved average API response times by approximately 30%.",
      ],
    },
  ],
  technicalSkills: [
    "Java 17/21 | Spring Boot | Spring Security | Spring Cloud | Spring AI | Apache Camel",
    "Microservices | REST APIs | Kafka | API Gateway | Eureka | OpenFeign | Resilience4j",
    "MySQL | MSSQL | PostgreSQL | Redis | Docker | Prometheus | Grafana | AWS",
  ],
  education: [
    "Veer Narmad South Gujarat University | B.Com, CGPA 7 (2017 - 2020)",
    "Masai School | Full Stack Web Development (2021 - 2022)",
  ],
  certifications: [] as readonly string[],
  projects: [
    "TravelSphere Airline Platform | 12 services, gateway security, Eureka, Kafka workflows, Redis, MySQL-per-service, observability",
    "LinkedInApp Microservices | 7 services, Kafka, Neo4j, 50+ automated tests",
  ],
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;

export const COMPANY_WORK = [
  {
    category: "Fintech · Vayana Networks",
    title: "Loan Management System APIs",
    description:
      "Backend APIs for the full loan lifecycle: onboarding, approvals, disbursement, repayment, reporting, and master-data setup. Built with Java 21 and Spring Boot for secure, dependable financial workflows.",
    impact: [
      "15+ REST APIs delivered across core loan and master-data workflows",
      "10+ APIs protected with JWT and role-based access control",
      "~30% faster response times through MSSQL query tuning",
    ],
    tech: ["Java 21", "Spring Boot", "Spring Security", "MSSQL", "REST APIs"],
  },
  {
    category: "Integration · Vayana Networks",
    title: "Core Banking Integration Layer",
    description:
      "Reusable Apache Camel integration routes connecting the Loan Management System with multiple Core Banking Systems, each with different API contracts and authentication requirements.",
    impact: [
      "Reusable routes support multiple bank integrations",
      "Asynchronous processing with Kafka reduces blocking workflows",
      "Consistent handling for contracts and authentication variations",
    ],
    tech: ["Apache Camel", "Kafka", "Spring Boot", "Core Banking", "JWT"],
  },
  {
    category: "Event-driven · Vayana Networks",
    title: "Bulk Loan Disbursement Processing",
    description:
      "Kafka-based processing for high-volume loan disbursements, designed to move hundreds of records per invoice through a scalable asynchronous workflow.",
    impact: [
      "Processes 50K+ loan records, including invoices with up to 1,000 records",
      "Eliminated blocking request-response processing",
      "Built for scalable, recoverable financial operations",
    ],
    tech: ["Kafka", "Java 21", "Spring Boot", "Apache Camel", "MSSQL"],
  },
  {
    category: "Reporting · Vayana Networks",
    title: "Report Generation Microservice",
    description:
      "A dedicated microservice for generating and downloading financial reports, with AWS functionality supporting dependable report delivery outside the core loan-management request path.",
    impact: [
      "Separated report-download concerns from core business workflows",
      "Supports reporting needs across the loan-management domain",
      "Designed with cloud-ready AWS functionality",
    ],
    tech: ["Java 21", "Spring Boot", "Microservices", "AWS", "Reporting"],
  },
] as const;
