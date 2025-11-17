"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "motion/react";

export default function IntroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const texts = [
    "Full Stack Developer",
    "Software Engineer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  // carousel logic, only runs while hovered
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (isHovered) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 1500);
    } else {
      // reset to first item when not hovered
      setCurrentIndex(0);
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isHovered]);

  return (
    <motion.div
      className="flex flex-col gap-4 py-4 sm:py-6 mt-4 sm:mt-6 px-2 sm:px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
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
                className="rounded-2xl border-2 border-white/20 hover:border-white/40 transition-colors duration-300 object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="cursor-default pr-0 sm:pr-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <motion.h1
              className="text-xl sm:text-2xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Hello, I&apos;m Aman
            </motion.h1>

            {/* animated subtitle */}
            <motion.p
              className="text-white/70 text-sm sm:text-base relative h-6 overflow-hidden"
              aria-live="polite"
              aria-atomic="true"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
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

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group"
        >
          <Link
            href="https://drive.google.com/file/d/1Bd8AEiYk9OyTV6Oe0UqGDjuLKLjZcqcK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="text-sm sm:text-md text-white/70 font-semibold sm:flex hidden relative"
              aria-hidden={false}
            >
              <span>Hiring? View my CV</span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
