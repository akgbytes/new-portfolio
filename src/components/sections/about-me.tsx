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
          full-stack web developer
        </span>{" "}
        who enjoys building interactive and scalable applications. I primarily
        work with{" "}
        <span className="bg-muted underline underline-offset-4 decoration-primary/50 px-1 rounded">
          TypeScript, React, Next.js, Node.js, PostgreSQL, Drizzle ORM
        </span>
        , and I&apos;m comfortable moving across the entire stack. I&apos;m
        especially interested in{" "}
        <span className="text-foreground/90 font-medium">
          backend engineering
        </span>
        , where I focus on{" "}
        <span className="text-foreground/90 font-medium">
          API design, data structures, and system architecture
        </span>
        .
        <br />
        <br />
        Outside of shipping features, I&apos;m often{" "}
        <span className="text-foreground/90 font-medium">
          exploring new tools
        </span>
        , learning about{" "}
        <span className="text-foreground/90 font-medium">
          distributed systems
        </span>
        , or experimenting with ideas that deepen my understanding of{" "}
        <span className="text-foreground/90 font-medium">
          performance and developer experience.
        </span>
      </motion.p>
    </motion.div>
  );
}

export default AboutMe;
