"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function IntroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    "Full Stack Developer",
    "Software Engineer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  // Auto-rotate subtitles every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex flex-col gap-4 py-4 sm:py-6 mt-4 sm:mt-6 px-2 sm:px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Profile photo*/}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <Image
                src="/me.jpg"
                alt="profile photo"
                fill
                className="rounded-2xl border-2 border-border hover:border-primary/40 transition-colors duration-300 object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="cursor-default pr-0 sm:pr-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <motion.h1
              className="text-xl sm:text-2xl font-bold text-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Hello, I&apos;m Aman
            </motion.h1>

            {/* Auto rotating subtitle */}
            <motion.p
              className="text-muted-foreground text-sm sm:text-base relative h-6 overflow-hidden"
              aria-live="polite"
              aria-atomic="true"
            >
              <motion.span
                key={currentIndex}
                className="absolute top-0 left-0"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                {texts[currentIndex]}
              </motion.span>
            </motion.p>
          </motion.div>
        </div>

        {/* Resume Link */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ x: 2 }}
          className="sm:flex hidden"
        >
          <Link
            href="https://drive.google.com/file/d/1Bd8AEiYk9OyTV6Oe0UqGDjuLKLjZcqcK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-1.5 text-sm sm:text-md font-semibold text-foreground/70 hover:text-foreground transition-colors"
          >
            <span>Hiring? View my CV</span>

            {/* Underline effect */}
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-primary/60 dark:bg-neutral-100 group-hover:w-full transition-all duration-600 ease-out -translate-x-1/2" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
