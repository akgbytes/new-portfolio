import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconMail,
  IconGlobe,
  IconBrandGithubFilled,
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
    title: "Magic UI",
    href: "https://magicui.design",
    github: "",
    dates: "June 2023 - Present",
    description:
      "Designed, developed and sold animated UI components for developers.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    video: "https://cdn.magicui.design/bento-grid.mp4",
  },
  {
    title: "Magic UI",
    href: "https://magicui.design",
    github: "",
    dates: "June 2023 - Present",
    description:
      "Designed, developed and sold animated UI components for developers.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    video: "https://cdn.magicui.design/bento-grid.mp4",
  },
  {
    title: "Magic UI",
    href: "https://magicui.design",
    github: "",
    dates: "June 2023 - Present",
    description:
      "Designed, developed and sold animated UI components for developers.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    video: "https://cdn.magicui.design/bento-grid.mp4",
  },
  {
    title: "Magic UI",
    href: "https://magicui.design",
    github: "",
    dates: "June 2023 - Present",
    description:
      "Designed, developed and sold animated UI components for developers.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    video: "https://cdn.magicui.design/bento-grid.mp4",
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
