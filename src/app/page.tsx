import AnimatedLine from "@/components/animated-line";
import IntroSection from "@/components/sections/intro-section";
import NewSection from "@/components/sections/new-intro";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section>
        <IntroSection />
      </section>

      <AnimatedLine />

      <footer className="absolute bottom-2">
        <ThemeToggle />
      </footer>
    </div>
  );
}
