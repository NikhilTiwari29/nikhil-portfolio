import { PROFILE } from "@/lib/portfolio/profile";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nikhiltiwari.netlify.app";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: PROFILE.title,
    description: PROFILE.headline,
    worksFor: {
      "@type": "Organization",
      name: "Vayana Networks",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    email: PROFILE.email,
    url: siteUrl,
    sameAs: [PROFILE.linkedin, PROFILE.github],
    knowsAbout: [
      "Backend Engineering",
      "Spring Boot",
      "Java",
      "REST APIs",
      "Apache Camel",
      "Kafka",
      "MSSQL",
      "AWS",
      "Supply Chain Finance",
      "Loan Management System",
      "Core Banking Systems",
      "Spring AI",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
