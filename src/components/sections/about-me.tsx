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
        className="text-xl sm:text-2xl font-bold font-signika text-foreground"
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
          full stack developer
        </span>{" "}
        who loves building{" "}
        <span className="text-foreground/90 font-medium">
          thoughtful, scalable, and clean
        </span>{" "}
        digital experiences. With experience across{" "}
        <span className="text-foreground/90 font-medium">
          frontend, backend, and cloud systems
        </span>
        , I enjoy turning ideas into{" "}
        <span className="text-foreground/90 font-medium">
          reliable, production-ready products
        </span>
        .
        <br />
        <br />I care about writing code that&apos;s{" "}
        <span className="text-foreground/90 font-medium">
          simple when it can be
        </span>
        ,{" "}
        <span className="text-foreground/90 font-medium">
          efficient when it must be
        </span>
        , and{" "}
        <span className="text-primary font-medium">always maintainable</span>.
        Outside of shipping features, I&apos;m usually{" "}
        <span className="text-foreground/90 font-medium">
          exploring new tools
        </span>
        , contributing to{" "}
        <span className="text-foreground/90 font-medium">open source</span>, or
        deepening my understanding of{" "}
        <span className="text-foreground/90 font-medium">
          system design and performance
        </span>
        .
        <br />
        <br />
        Recently, I&apos;ve been working on{" "}
        <strong className="text-primary font-semibold">Flowkit</strong>, an
        automation tool that helps users build visual workflows without writing
        everything manually. I&apos;m also exploring{" "}
        <strong className="text-primary font-semibold">GenAI</strong> and
        learning to integrate intelligent features into the products I create.
      </motion.p>
    </motion.div>
  );
}

export default AboutMe;
