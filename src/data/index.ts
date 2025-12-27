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
    href: "https://magicui.design",
    github: "",
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
    href: "https://magicui.design",
    github: "",
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
    href: "https://magicui.design",
    github: "",
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
      company: "ROS",
      link: "#",
      position: "Backend Intern",
      location: "Jaipur, Rajasthan",
      date: "Jun 2024 - Sept 2025",
      description: [
        "Building a scalable, full-stack grocery platform enabling customers to purchase online and vendors to manage and accept orders via a dedicated platform.",
        "Developing vendor onboarding and analytics dashboards to facilitate seamless integration and performance tracking.",
        "Integrated Twilio for SMS verification and user authentication, enhancing security and streamlining login and account recovery processes.",
      ],
      techStack: "FastAPI, PostgreSQL, Docker, AWS, React, Next.js",
    },
  ],

  projects,
};
