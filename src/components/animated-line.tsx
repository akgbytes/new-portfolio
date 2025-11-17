"use client";

import { motion } from "motion/react";

const AnimatedLine = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <motion.hr
        className="h-0.5 bg-muted-foreground/70"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
};

export default AnimatedLine;
