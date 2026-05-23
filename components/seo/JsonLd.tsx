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
      name: "Vayana Network",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
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
      "PostgreSQL",
      "PostGIS",
      "JWT Authentication",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
