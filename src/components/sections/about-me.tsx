"use client";

import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { aboutSkills } from "@/utils/icons";
import { useTheme } from "next-themes";

function AboutMe() {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
    >
      <motion.h1
        className="text-xl sm:text-2xl font-bold text-foreground"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        whileHover={{ scale: 1.02 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="text-muted-foreground text-sm sm:text-md leading-relaxed mt-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.75 }}
      >
        I&apos;m Aman, a{" "}
        <span className="text-foreground/90 font-medium">
          full stack web developer
        </span>{" "}
        who enjoys building interactive and scalable web apps using using{" "}
        <span className="inline-flex flex-wrap items-center gap-2 align-middle">
          {aboutSkills.map((skill) => (
            <Badge
              key={skill.name}
              variant="secondary"
              className="group flex items-center gap-2 px-3 py-1.5 text-xs hover:dark:bg-neutral-900/90 rounded-full border border-dashed border-black/20 skill-inner-shadow dark:border-neutral-700 dark:text-neutral-200 cursor-pointer dark:bg-neutral-800/20"
            >
              <Image
                src={theme === "dark" ? skill.dark : skill.light}
                alt={skill.name}
                width={16}
                height={16}
                className="grayscale group-hover:grayscale-0 transition-all duration-300"
              />

              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </Badge>
          ))}
        </span>
        <br />I work comfortably across the stack, but I&apos;m especially
        interested in{" "}
        <span className="text-foreground/90 font-medium">
          backend engineering
        </span>{" "}
        where I focus on{" "}
        <span className="text-foreground/90 font-medium">
          API design, data structures, and system architecture
        </span>
        .
        <br />
        <br />
        Outside of shipping features, I&apos;m usually{" "}
        <span className="text-foreground/90 font-medium">
          exploring new tools
        </span>
        , learning more about{" "}
        <span className="text-foreground/90 font-medium">
          distributed systems
        </span>
        , or experimenting with ideas that help me think deeper about{" "}
        <span className="text-foreground/90 font-medium">
          performance and developer experience
        </span>
        .
        {/* <br />
        Recently, I&apos;ve been working on{" "}
        <strong className="text-primary font-semibold">Flowkit</strong>, an
        automation tool that helps users build visual workflows without writing
        everything manually. I&apos;m also exploring{" "}
        <strong className="text-primary font-semibold">GenAI</strong> and
        learning to integrate intelligent features into the products I create. */}
      </motion.p>
    </motion.div>
  );
}

export default AboutMe;
