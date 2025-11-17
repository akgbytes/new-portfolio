"use client";

import { Github, Globe } from "lucide-react";
import { motion } from "motion/react";
import { ProjectCard } from "../project-card";

const projects = [
  {
    title: "Chat Collect",
    href: "https://chatcollect.com",
    dates: "Jan 2024 - Feb 2024",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
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
    links: [
      {
        type: "Website",
        href: "https://chatcollect.com",
        icon: <Globe className="size-3" />,
      },
    ],
    image: "",
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  },
  {
    title: "Magic UI",
    href: "https://magicui.design",
    dates: "June 2023 - Present",
    active: true,
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
    links: [
      {
        type: "Website",
        href: "https://magicui.design",
        icon: <Globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/magicuidesign/magicui",
        icon: <Github className="size-3" />,
      },
    ],
    image: "",
    video: "https://cdn.magicui.design/bento-grid.mp4",
  },
  {
    title: "llm.report",
    href: "https://llm.report",
    dates: "April 2023 - September 2023",
    active: true,
    description:
      "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Magic UI",
      "Stripe",
      "Cloudflare Workers",
    ],
    links: [
      {
        type: "Website",
        href: "https://llm.report",
        icon: <Globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/dillionverma/llm.report",
        icon: <Github className="size-3" />,
      },
    ],
    image: "",
    video: "https://cdn.llm.report/openai-demo.mp4",
  },
  {
    title: "Automatic Chat",
    href: "https://automatic.chat",
    dates: "April 2023 - March 2024",
    active: true,
    description:
      "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Magic UI",
      "Stripe",
      "Cloudflare Workers",
    ],
    links: [
      {
        type: "Website",
        href: "https://automatic.chat",
        icon: <Globe className="size-3" />,
      },
    ],
    image: "",
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
  },
];
export default function Project() {
  return (
    <section id="projects">
      <motion.div
        className="space-y-6 w-full py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.5 }}
      >
        {/* TITLE — same style as Experience */}
        <motion.h1
          className="text-xl sm:text-2xl font-bold font-signika mb-2 text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 1.7 }}
        >
          Projects
        </motion.h1>

        {/* GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 1.8,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.35, ease: "easeOut" },
                },
              }}
              whileTap={{ scale: 0.97 }}
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
