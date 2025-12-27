import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { Metadata } from "next";

export function constructMetadata({
  title = "Aman Gupta | Full Stack Web Developer",
  description = "Aman Gupta is a Full Stack Web Developer focused on building reliable, high-performance systems with clean architecture and maintainable code.",
  image = "/og.png",
  baseUrl = "https://www.akgbytes.in",
  keywords = [
    "Aman Gupta",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Backend Developer",
    "Full Stack Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "akgbytes",
  ],
}: {
  title?: string;
  description?: string;
  image?: string;
  baseUrl?: string;
  keywords?: string[];
} = {}): Metadata {
  return {
    metadataBase: new URL(baseUrl),

    title: {
      default: title,
      template: `%s | Aman Gupta`,
    },

    description,

    keywords,

    authors: [{ name: "Aman Gupta", url: baseUrl }],

    alternates: {
      canonical: baseUrl,
    },

    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: "Aman Gupta Portfolio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@akgbytes",
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Aman Gupta",
        url: baseUrl,
        jobTitle: "Full Stack Web Developer",
        sameAs: [
          "https://github.com/akgbytes",
          "https://www.linkedin.com/in/akgbytes",
        ],
      }),
    },
  };
}
