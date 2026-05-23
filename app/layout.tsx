import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import { PROFILE } from "@/lib/portfolio/profile";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nikhiltiwari.netlify.app";

const title = `${PROFILE.name} | Java Backend Developer · Spring Boot · Microservices`;
const description = PROFILE.headline;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${PROFILE.name}`,
  },
  description,
  keywords: [
    "Nikhil Tiwari",
    "Java Backend Developer",
    "Spring Boot",
    "Apache Camel",
    "Microservices",
    "Kafka",
    "Fintech",
    "Supply Chain Finance",
    "Vayana Network",
    "Vadodara",
    "Software Engineer India",
  ],
  authors: [{ name: PROFILE.name, url: siteUrl }],
  creator: PROFILE.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: `${PROFILE.name} — Portfolio`,
    title,
    description,
    images: [
      {
        url: "/hero-poster.png",
        width: 1200,
        height: 630,
        alt: `${PROFILE.name} — ${PROFILE.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero-poster.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
