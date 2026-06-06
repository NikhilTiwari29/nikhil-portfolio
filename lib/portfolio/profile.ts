const GITHUB = "https://github.com/NikhilTiwari29";

export const PROFILE = {
  name: "Nikhil Tiwari",
  title: "Java Backend Developer",
  headline:
    "Java Backend Developer with 4+ years of experience building scalable fintech systems with Spring Boot, Kafka, Apache Camel, microservices, and event-driven architecture.",
  location: "Surat, Gujarat, India",
  email: "nikhiltiwarip29@gmail.com",
  phone: "+91 9265974979",
  linkedin: "https://www.linkedin.com/in/nikhil-tiwari-0b6980212/",
  github: GITHUB,
  website: "https://nikhiltiwari.netlify.app/",
  resumeUrl: "https://drive.google.com/file/d/1AYmf0dIvmdxh0nzoxckYpxD6VIehm1md/view?usp=sharing",
  availability: "Open to backend engineer and backend developer opportunities",
  yearsExperience: "4+",
} as const;

export const ABOUT = {
  paragraphs: [
    "I build backend systems for financial workflows where reliability, security, and clear service boundaries matter. At Vayana Networks, I work on a Loan Management System covering onboarding, approvals, disbursement, repayment, and reporting.",
    "My core work combines Java 21 and Spring Boot APIs with Apache Camel integration routes and Kafka-based asynchronous processing. I have designed reusable integrations for multiple Core Banking Systems with different contracts and authentication mechanisms.",
    "I focus on measurable engineering outcomes. Query tuning and indexing reduced average API response times by approximately 30%, while automation and optimization initiatives reduced release effort by 40%.",
  ],
  highlights: [
    { label: "Production APIs", value: "15+ REST APIs delivered" },
    { label: "Performance", value: "~30% faster API responses" },
    { label: "Delivery", value: "40% less release effort" },
    { label: "Domain", value: "Loan Management and Core Banking" },
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
  {
    title: "UberApp Backend",
    architecture: "Monolith" as const,
    period: "May 2026 - Present",
    outcome: "25+ endpoints | 20+ automated tests",
    patterns: [
      "PostGIS proximity-based allocation",
      "Strategy pattern across 3 domains",
      "8-stage OTP-verified ride workflow",
    ],
    description:
      "Ride-booking backend covering driver matching, wallets, authentication, ratings, and role-based access for three user roles, with Testcontainers, JaCoCo, and OpenAPI documentation.",
    tech: [
      "Java 21",
      "Spring Boot 3.3",
      "Spring Security",
      "PostgreSQL",
      "PostGIS",
      "JWT",
      "Docker",
      "JUnit 5",
    ],
    links: {
      demo: "",
      github: `${GITHUB}/uberApp-backend`,
    },
    featured: true,
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
    "Java Backend Developer with over 4 years of experience building scalable backend systems using Java, Spring Boot, Kafka, Apache Camel, and microservices. Experienced in REST APIs, Core Banking System integrations, and event-driven architectures, with measurable improvements in API performance and release effort.",
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
    "Microservices | REST APIs | Kafka | API Gateway | Eureka | OpenFeign",
    "MySQL | MSSQL | PostgreSQL | Redis | Docker | Kubernetes | AWS",
  ],
  education: [
    "Veer Narmad South Gujarat University | B.Com, CGPA 7 (2017 - 2020)",
    "Masai School | Full Stack Web Development (2021 - 2022)",
  ],
  certifications: [] as readonly string[],
  projects: [
    "LinkedInApp Microservices | 7 services, Kafka, Neo4j, 50+ automated tests",
    "UberApp Backend | PostGIS matching, 25+ endpoints, 20+ automated tests",
  ],
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;
