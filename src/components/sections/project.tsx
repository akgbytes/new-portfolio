"use client";

import { motion } from "motion/react";
import { ProjectCard } from "../project-card";
import { DATA } from "@/data";

export default function Project() {
  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 2.0 }}
      >
        <motion.h1
          className="text-xl sm:text-2xl font-bold text-foreground mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 2.1 }}
        >
          Projects
        </motion.h1>

        {/* GRID (with stagger children) */}
        <motion.div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 2.0,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {DATA.projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <ProjectCard
                href={project.href}
                github={project.github}
                title={project.title}
                description={project.description}
                dates={project.dates}
                technologies={project.technologies}
                image={project.image}
                video={project.video}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
