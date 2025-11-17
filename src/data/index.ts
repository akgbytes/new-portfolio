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
      company: "AgentProd",
      link: "https://agentprod.com",
      position: "Full-Stack Software Engineer",
      location: "Remote",
      date: "Jun 2024 - Sept 2025",
      description: [
        "Leading feature development in a fast-paced startup environment, shipping production code that increased user engagement by 25%",
        "Built scalable backend systems with FastAPI and PostgreSQL, reducing API latency by 40%",
        "Accelerated deployment cycles from 3 days to <12 hours through CI/CD automation with Docker and AWS",
        "Maintaining 99.9% uptime while improving page load speeds by 35%",
      ],
      techStack: "FastAPI, PostgreSQL, Docker, AWS, React, Next.js",
    },
    {
      company: "Freelance",
      link: "#",
      position: "Full-Stack Developer",
      location: "Remote",
      date: "Jan 2023 - May 2024",
      description: [
        "Delivered 10+ production applications for international clients across E-commerce, SaaS, and portfolio domains",
        "Built custom CMS solutions and REST APIs that reduced client maintenance costs by 30%",
        "Specialized in React, Next.js, Node.js, and TypeScript with a 95% client retention rate",
        "Managed complete project lifecycles remotely, from requirements to deployment",
      ],
      techStack: "Next.js, Node.js, TypeScript, PostgreSQL, Tailwind CSS",
    },
  ],

  projects,
};
