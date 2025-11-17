"use client";

import { motion } from "motion/react";
import { Briefcase, CalendarDays, Dot } from "lucide-react";
import { DATA } from "@/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 2.2,
    },
  },
};

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 2.0 }}
    >
      <motion.h1
        className="text-xl sm:text-2xl font-bold font-signika text-foreground mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 2.1 }}
      >
        Experience
      </motion.h1>

      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {DATA.experience.map((experience, index) => (
          <motion.div key={`exp-${index}`} whileTap={{ scale: 0.98 }}>
            <div className="group relative overflow-hidden border border-foreground/20 rounded-xl p-4 sm:p-6 hover:border-foreground/30 transition-all duration-300">
              <div className="relative flex gap-3 sm:gap-4 items-start">
                <motion.div
                  className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center border border-foreground/20"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase className="w-6 h-6" />
                  </motion.div>
                </motion.div>

                <div className="flex-1 space-y-2">
                  <motion.a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-bold tracking-wide"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {experience.company}
                  </motion.a>

                  {/* ROLE + DATE */}
                  <motion.div
                    className="flex justify-between text-xs sm:text-sm font-medium mt-1 dark:text-neutral-300 text-neutral-600"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="flex items-center gap-2">
                      {experience.position}

                      {experience.location && (
                        <span className="rounded bg-neutral-600 dark:bg-neutral-800 px-1.5 py-0.5 text-[10px] sm:text-xs font-normal text-zinc-200">
                          {experience.location}
                        </span>
                      )}
                    </p>

                    <div className="flex items-center gap-1 text-[10px] sm:text-xs opacity-80">
                      <CalendarDays className="h-4 w-4" />
                      <span>{experience.date}</span>
                    </div>
                  </motion.div>

                  {/* DESCRIPTION BULLETS */}
                  <motion.ul
                    className="mt-2 space-y-2 text-xs sm:text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {experience.description.map((point, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: idx * 0.05 }}
                      >
                        <Dot className="mt-0.5" size={16} />
                        <span className="ml-1">{point}</span>
                      </motion.li>
                    ))}

                    {/* TECH STACK */}
                    {experience.techStack && (
                      <motion.li
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Dot className="mt-0.5" size={16} />
                        <span>
                          Tech Stack:{" "}
                          <span className="font-semibold dark:text-neutral-200 text-neutral-700">
                            {experience.techStack}
                          </span>
                        </span>
                      </motion.li>
                    )}
                  </motion.ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
