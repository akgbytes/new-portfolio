"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { skills } from "@/utils/icons";

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
            className="group flex items-center gap-1 sm:gap-2 border border-border rounded-md 
                       p-1.5 sm:p-2 cursor-pointer hover:bg-accent transition-colors"
            initial={{ opacity: 0, y: 20, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 1.3 + index * 0.03,
            }}
          >
            {/* ICON — grayscale until hover */}
            <div className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={20}
                height={20}
                className="object-contain"
              />
            </div>

            {/* LABEL */}
            <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
