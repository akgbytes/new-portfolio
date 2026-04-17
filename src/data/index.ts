import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const contactLinks = {
  email: "mailto:akgbytes@gmail.com",
  linkedin: "https://www.linkedin.com/in/akgbytes",
  github: "https://github.com/akgbytes",
  twitter: "https://x.com/akgbytes",
};

export interface Project {
  title: string;
  href: string;
  github: string;
  dates: string;
  description: string;
  technologies: string[];
  image?: string;
  video?: string;
}

const projects: Project[] = [
  {
    title: "Secure Auth",
    href: "https://auth.akgbytes.in",
    github: "https://github.com/akgbytes/secure-auth",
    dates: "Sept 2025 - Nov 2025",
    description:
      "Complete authentication system with login, registration, email verification, password reset, sessions, and role-based access.",
    technologies: [
      "Express.js",
      "React.js",
      "Shadcn UI",
      "PostgreSQL",
      "Drizzle",
      "Mailtrap",
      "Tanstack Query",
      "Tanstack Router",
    ],
    image: "/auth.png",
  },
  {
    title: "Shortlistr",
    href: "https://shortlistr.akgbytes.in/",
    github: "https://github.com/akgbytes/shortlistr",
    dates: "Oct 2025 - Nov 2025",
    description:
      "AI-powered resume analyzer that helps job seekers improve their resumes using ATS-based analysis and actionable feedbacks/",
    technologies: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "PostgreSQL",
      "Drizzle",
      "UploadThing",
      "OpenAI",
    ],
    image: "/shortlistr.png",
  },
  {
    title: "UIgnite",
    href: "https://uignite.in",
    github: "https://github.com/UIgnite/UIgnite",
    dates: "April 2025 - June 2025",
    description:
      "Designed, developed and sold animated UI components for developers.",
    technologies: [
      "React.js",
      "Radix UI",
      "Motion",
      "Lerna",
      "Algolia",
      "Yarn Workspaces",
    ],
    image: "/uignite.png",
  },
];

export const DATA = {
  navbar: [
    {
      name: "Github",
      link: contactLinks.github,
      icon: IconBrandGithub,
    },
    {
      name: "X",
      link: contactLinks.twitter,
      icon: IconBrandX,
    },
    {
      name: "LinkedIn",
      link: contactLinks.linkedin,
      icon: IconBrandLinkedin,
    },
    {
      name: "Email",
      link: contactLinks.email,
      icon: IconMail,
    },
  ],

  experience: [
    {
      company: "Urbanesta",
      link: "#",
      position: "Full Stack Engineer",
      location: "Gurgaon, Haryana",
      date: "Feb 2026 - Present",
      description: [
        "Worked on admin platform and built the core API layer using Node.js, Express, and tRPC, and designed MongoDB schemas to manage complex real estate data including multi-phase projects, stakeholders, and geographic hierarchies.",
        "Designed and implemented a granular RBAC system enabling fine-grained permissions across modules like project management, pricing, leads, and SEO data.",
        "Built an optimized image processing pipeline using Sharp to convert uploads to WebP and reduce file size, improving bandwidth efficiency and load performance",
      ],
      techStack: "Node.js, tRPC, MongoDB, Redis, React, React Query",
    },
     {
      company: "ROS",
      link: "#",
      position: "Backend Developer",
      location: "Jaipur, Rajasthan",
      date: "Nov 2024 - Jan 2026",
      description: [
        "Developed backend APIs for a grocery ordering platform, enabling seamless order placement for customers and order management for vendors.",
        "Implemented vendor onboarding workflows and analytics APIs, providing actionable insights and performance tracking for vendor growth.",
        "Integrated Twilio-based SMS OTP authentication to enhance security across login, signup, and account recovery flows.",
      ],
      techStack: "Node.js, Express, PostgreSQL, Drizzle, Docker, AWS, React, Next.js",
    },
  ],

  projects,
};
