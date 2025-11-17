"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { skills } from "@/utils/icons";
import { Badge } from "../ui/badge";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1.1 }}
    >
      <motion.h1
        className="text-xl sm:text-2xl font-bold font-signika text-foreground"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        Skills
      </motion.h1>

      <motion.div
        className="flex flex-wrap gap-2 mt-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.03,
              delayChildren: 1.3,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 1.3 + index * 0.03,
            }}
          >
            <Badge
              variant="secondary"
              className="
                flex items-center gap-2 px-3 py-1.5 text-xs hover:dark:bg-neutral-900/90 rounded-full border dark:border-neutral-700 dark:text-neutral-200 cursor-pointer dark:bg-neutral-800/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={16}
                height={16}
                className="grayscale group-hover:grayscale-0 transition-all duration-300
                "
              />

              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
