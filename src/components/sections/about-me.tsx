"use client";

import { motion } from "motion/react";

function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
    >
      <motion.h1
        className="text-xl sm:text-2xl font-bold font-signika"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        whileHover={{ scale: 1.02 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="text-white/70 text-sm sm:text-md leading-relaxed mt-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.75 }}
      >
        I&apos;m Aman, a full stack developer who loves building thoughtful,
        scalable, and clean digital experiences. With expertise across frontend,
        backend, and cloud systems, I enjoy turning ideas into reliable,
        production-ready products.
        <br />
        <br />
        I care about writing code that's simple when it can be, efficient when
        it must be, and always maintainable. Outside of shipping features, I'm
        usually experimenting with new tools, contributing to open source, or
        deepening my understanding of system design and performance.
        <br />
        <br />
        Recently, I have been working on <strong>Flowkit</strong>, an automation
        tool that allows users to visually create workflows using blocks and
        connections without writing everything manually. I am also exploring{" "}
        <strong>GenAI</strong> and learning how to integrate intelligent
        capabilities into the products I build.
        <br />
      </motion.p>
    </motion.div>
  );
}

export default AboutMe;
