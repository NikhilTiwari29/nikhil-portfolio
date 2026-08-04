const GITHUB = "https://github.com/NikhilTiwari29";

export const PROFILE = {
  name: "Nikhil Tiwari",
  title: "Java Backend Developer",
  headline:
    "Java Backend Developer with 4+ years of experience building scalable fintech systems and production-style microservice platforms with Spring Boot, Kafka, Apache Camel, Redis, Docker, observability, and cloud-ready architecture.",
  location: "Surat, Gujarat, India",
  email: "nikhiltiwarip29@gmail.com",
  phone: "+91 9265974979",
  linkedin: "https://www.linkedin.com/in/nikhil-tiwari-0b6980212/",
  github: GITHUB,
  website: "https://nikhiltiwari.netlify.app/",
  resumeUrl: "https://drive.google.com/file/d/12XAmhwkU9UlJgm2JKQ1_nDRnDRIpqWyE/view?usp=sharing",
  availability: "Open to Backend Engineer opportunities.",
  yearsExperience: "4+",
} as const;

export const ABOUT = {
  paragraphs: [
    "I build backend systems for financial workflows where reliability, security, and clear service boundaries matter. At Vayana Networks, I work on a Loan Management System covering onboarding, approvals, disbursement, repayment, and reporting.",
    "My core work combines Java 21 and Spring Boot APIs with Apache Camel integration routes and Kafka-based asynchronous processing. I have designed reusable integrations for multiple Core Banking Systems with different contracts and authentication mechanisms.",
    "TravelSphere extends that production experience into an interview-ready airline reservation platform with API Gateway routing, Eureka discovery, JWT security, Redis caching, Kafka event workflows, MySQL-per-service data ownership, Docker Compose infrastructure, and Grafana-based observability.",
  ],
  highlights: [
    { label: "Production APIs", value: "15+ REST APIs delivered in fintech" },
    { label: "Primary project", value: "TravelSphere airline microservice platform" },
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
      "Developed 15+ REST APIs using Java 21 and Spring Boot for a Loan Management System supporting onboarding, approvals, disbursement, repayment, and reporting.",
      "Built loan disbursement integrations using Apache Camel and Kafka, enabling asynchronous communication between the LMS and Core Banking Systems.",
      "Designed reusable Camel routes for multi-bank integrations, supporting different CBS API contracts and authentication mechanisms.",
      "Implemented Kafka-based bulk disbursement processing for hundreds of loan records per invoice, improving scalability and eliminating blocking workflows.",
      "Secured 10+ APIs using Spring Security and JWT with role-based access control, token refresh workflows, and expiry management.",
      "Optimized MSSQL queries through indexing and query tuning, reducing average API response times by approximately 30%.",
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
    "Java Backend Developer with over 4 years of experience building scalable backend systems using Java, Spring Boot, Kafka, Apache Camel, and microservices. Experienced in REST APIs, Core Banking System integrations, and event-driven architecture, with TravelSphere demonstrating real-world system design patterns across gateway security, discovery, messaging, caching, observability, and cloud-ready deployment.",
  experience: [
    {
      role: "Software Engineer - Java Backend",
      company: "Vayana Networks",
      period: "Apr 2022 - Present",
      bullets: [
        "Delivered 15+ REST APIs for loan onboarding, approvals, disbursement, repayment, and reporting.",
        "Built reusable Apache Camel and Kafka integrations between LMS and Core Banking Systems.",
        "Secured 10+ APIs and improved average API response times by approximately 30%.",
      ],
    },
  ],
  technicalSkills: [
    "Java 17/21 | Spring Boot | Spring Security | Spring Cloud | Apache Camel",
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
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Interview", href: "#interview" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;
