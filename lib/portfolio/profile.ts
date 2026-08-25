const GITHUB = "https://github.com/NikhilTiwari29";

export const PROFILE = {
  name: "Nikhil Tiwari",
  title: "Java Backend Developer",
  headline:
    "Java Backend Developer with 4+ years of experience building backend applications, microservices, and REST APIs for Loan Management and Supply Chain Finance workflows. I work with Java 21, Spring Boot, Kafka, Apache Camel, and AWS to deliver reliable fintech systems.",
  location: "Surat, Gujarat, India",
  email: "nikhiltiwarip29@gmail.com",
  phone: "+91 9265974979",
  linkedin: "https://www.linkedin.com/in/nikhil-tiwari-0b6980212/",
  github: GITHUB,
  website: "https://nikhiltiwari.netlify.app/",
  resumeUrl: "https://drive.google.com/file/d/1fkrmjYf7Gc4kd4whYQv8muZjXO6yEiq8/view?usp=sharing",
  availability: "Open to backend engineering opportunities.",
  yearsExperience: "4+",
} as const;

export const ABOUT = {
  paragraphs: [
    "I build backend systems for financial workflows where reliability, security, and clear service boundaries matter. At Vayana Networks, I develop Loan Management System and Supply Chain Finance workflows covering loan onboarding, approval, disbursement, repayment, loan servicing, and reporting.",
    "My core work combines Java 21 and Spring Boot APIs with Apache Camel integration routes and Kafka-based asynchronous processing. I design reusable integrations for multiple Core Banking Systems with different contracts and authentication mechanisms.",
    "I implement financial business rules including SMA/NPA classification, interest accrual, excess-upfront handling, and repayment processing. I also handle high-volume asynchronous processing—disbursement and repayment batches with 1,000+ loan records per invoice or batch.",
    "I'm currently developing skills in Spring AI, RAG, MCP, and AI agents. I'm looking for a backend-heavy role where I can go deeper on bigger systems, harder problems, and stronger engineering teams.",
  ],
  highlights: [
    { label: "Production APIs", value: "15+ REST APIs for LMS & SCF workflows" },
    { label: "SCF disbursements", value: "₹50+ crore via Kafka async processing" },
    { label: "Bulk processing", value: "1,000+ loan records per invoice or batch" },
    { label: "Performance", value: "~30% faster APIs through query tuning" },
  ],
} as const;

export const SKILL_GROUPS = [
  {
    title: "Languages & core",
    skills: ["Java 17/21", "SQL", "REST APIs"],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Apache Camel",
      "JPA / Hibernate",
      "OpenFeign",
    ],
  },
  {
    title: "Messaging & caching",
    skills: ["Apache Kafka", "Redis"],
  },
  {
    title: "Databases",
    skills: ["MSSQL", "MySQL"],
  },
  {
    title: "Architecture",
    skills: [
      "Microservices",
      "Event-driven architecture",
      "Distributed systems",
    ],
  },
  {
    title: "Testing",
    skills: ["JUnit 5", "Mockito"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "GitHub Actions", "Maven", "Linux"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Cursor"],
  },
  {
    title: "AI & GenAI",
    skills: [
      "Spring AI",
      "AI Agents",
      "RAG",
      "MCP",
      "OpenAI APIs",
      "AI Testing",
      "AI Observability",
    ],
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Software Engineer – Java Backend",
    company: "Vayana Networks",
    period: "Apr 2022 - Present",
    location: "Hybrid | Vadodara | Full-time",
    tags: ["LMS", "Supply Chain Finance", "Kafka", "Core Banking"],
    bullets: [
      "Developed 15+ production REST APIs using Java 21 and Spring Boot for LMS and SCF workflows covering onboarding, approval, disbursement, repayment, and reporting.",
      "Built an SCF disbursement service processing 1,000+ loan records per invoice and supporting ₹50+ crore in disbursements using Kafka-based asynchronous processing.",
      "Developed a bulk repayment service processing 1,000+ loan records per batch using Kafka, enabling asynchronous repayment processing without blocking LMS workflows.",
      "Developed loan servicing workflows covering SMA/NPA classification, interest accrual, excess-upfront handling, and repayment processing for accurate loan lifecycle management.",
      "Implemented asynchronous transaction processing using Apache Kafka for high-volume SCF disbursement and repayment transactions without blocking LMS workflows on downstream bank CBS responses.",
      "Developed reusable Apache Camel integration flows for multi-bank CBS integrations, handling authentication, bank-specific request/response transformation, validation, retries, error handling, and response processing.",
      "Implemented the LMS → Kafka → Camel → CBS transaction flow, including transaction validation, bank-specific payload transformation, downstream response handling, and transaction status updates.",
      "Optimized MSSQL queries and indexes across transaction-heavy LMS workflows, reducing API response times by approximately 30%.",
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
    period: "",
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
    title: "Fintech domain depth",
    points: [
      "Can explain LMS and SCF workflows: onboarding, approval, disbursement, repayment, loan servicing, and reporting.",
      "Can discuss SMA/NPA classification, interest accrual, excess-upfront handling, and invoice-driven processing with 1,000+ loan records.",
    ],
  },
  {
    title: "Integration & events",
    points: [
      "Can walk through the LMS → Kafka → Camel → CBS transaction flow with bank-specific payload transformation and retries.",
      "Can discuss tradeoffs between synchronous CBS calls and Kafka-based async processing for high-volume disbursements.",
    ],
  },
  {
    title: "System design depth",
    points: [
      "Can explain why side projects use API Gateway, Eureka discovery, service-owned databases, and shared DTO/event contracts.",
      "Can discuss tradeoffs between synchronous service calls and Kafka events in booking, payment, and notification flows.",
    ],
  },
  {
    title: "Production operations",
    points: [
      "Can walk through Docker Compose environments, per-service databases, Redis, Kafka in KRaft mode, and externalized configuration.",
      "Can show how Actuator, Prometheus, Grafana, Loki, and Tempo make platforms observable after deployment.",
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
    "Java Backend Developer with 4+ years of experience building backend applications, microservices, and REST APIs using Java 21, Spring Boot, Kafka, Apache Camel, and SQL. Experienced in LMS and Supply Chain Finance workflows, multi-bank Core Banking System integrations, event-driven architecture, and database optimization. Currently developing skills in Spring AI, RAG, MCP, and AI agents.",
  experience: [
    {
      role: "Software Engineer – Java Backend",
      company: "Vayana Networks",
      period: "Apr 2022 - Present",
      bullets: [
        "Developed 15+ production REST APIs for LMS and SCF workflows covering onboarding, approval, disbursement, repayment, and reporting.",
        "Built SCF disbursement and bulk repayment services processing 1,000+ loan records per invoice or batch with Kafka async processing.",
        "Developed reusable Apache Camel flows for multi-bank CBS integrations and the LMS → Kafka → Camel → CBS transaction pipeline.",
        "Implemented loan servicing workflows and optimized MSSQL queries, reducing API response times by approximately 30%.",
      ],
    },
  ],
  technicalSkills: [
    "Java 17/21 | SQL | Spring Boot | Spring Security | Apache Camel | JPA/Hibernate | OpenFeign | REST APIs",
    "Apache Kafka | Redis | Microservices | Event-Driven Architecture | Distributed Systems",
    "MSSQL | MySQL | AWS | Docker | GitHub Actions | Maven | Linux | JUnit 5 | Mockito",
    "Spring AI | AI Agents | RAG | MCP | OpenAI APIs | AI Testing | AI Observability",
  ],
  education: [
    "Veer Narmad South Gujarat University | B.Com, CGPA 7 (2017 - 2020)",
    "Masai School | Full Stack Web Development",
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
    title: "Loan Management System – Supply Chain Finance",
    description:
      "Production REST APIs for LMS and SCF workflows covering onboarding, approval, disbursement, repayment, and reporting. Built with Java 21 and Spring Boot for secure, dependable financial operations.",
    impact: [
      "15+ REST APIs delivered across core loan and SCF workflows",
      "SCF disbursement service supporting ₹50+ crore in disbursements",
      "Bulk repayment processing with 1,000+ loan records per batch",
    ],
    tech: ["Java 21", "Spring Boot", "Spring Security", "MSSQL", "REST APIs"],
  },
  {
    category: "Loan servicing · Vayana Networks",
    title: "Loan Lifecycle & Business Rules",
    description:
      "Loan servicing workflows covering SMA/NPA classification, interest accrual, excess-upfront handling, and repayment processing for accurate loan lifecycle management.",
    impact: [
      "SMA/NPA classification and interest accrual automation",
      "Excess-upfront handling and repayment processing",
      "Accurate loan lifecycle management across servicing stages",
    ],
    tech: ["Java 21", "Spring Boot", "JPA / Hibernate", "MSSQL", "REST APIs"],
  },
  {
    category: "Integration · Vayana Networks",
    title: "SCF Transaction & Bank Integration Platform",
    description:
      "Reusable Apache Camel integration flows for multi-bank CBS integrations, implementing the LMS → Kafka → Camel → CBS transaction pipeline with bank-specific transformation, retries, and error handling.",
    impact: [
      "Reusable routes support multiple bank integrations",
      "Asynchronous Kafka processing reduces blocking on CBS responses",
      "Invoice-driven SCF processing with 1,000+ loan records per invoice",
    ],
    tech: ["Apache Camel", "Kafka", "Spring Boot", "Core Banking", "Docker", "AWS"],
  },
  {
    category: "Performance · Vayana Networks",
    title: "Database Optimization",
    description:
      "Query and index optimization across transaction-heavy LMS workflows, improving API response times for high-volume disbursement and repayment operations.",
    impact: [
      "~30% reduction in average API response times",
      "Optimized MSSQL queries and indexes for transaction-heavy workflows",
      "Improved performance across core loan and SCF operations",
    ],
    tech: ["MSSQL", "Java 21", "Spring Boot", "JPA / Hibernate"],
  },
] as const;
