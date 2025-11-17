"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function IntroSection() {
  return (
    <motion.div
      className="flex flex-col gap-4 py-4 sm:py-6 mt-4 sm:mt-6 px-2 sm:px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
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
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src="/profile.jpg"
                alt="profile"
                width={96}
                height={96}
                className="rounded-full object-cover"
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
              className="text-xl sm:text-2xl font-signika"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Aman Gupta
            </motion.h1>

            <h3 className="font-inter text-xs mt-1 text-muted-foreground">
              / @akgbytes
            </h3>
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
            <div className="text-sm sm:text-md text-white/70 font-semibold sm:flex hidden relative">
              <span>Hiring? View my CV</span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
