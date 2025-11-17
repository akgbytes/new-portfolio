import AnimatedLine from "@/components/animated-line";
import AboutMe from "@/components/sections/about-me";
import Experience from "@/components/sections/experience";
import IntroSection from "@/components/sections/intro-section";
import NewSection from "@/components/sections/new-intro";
import Project from "@/components/sections/project";
import Skills from "@/components/sections/skills";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section>
        <IntroSection />
      </section>

      <AnimatedLine />

      <section className="mt-8 sm:mt-10">
        <AboutMe />
      </section>

      <section className="mt-8 sm:mt-10">
        <Skills />
      </section>

      <section className="mt-8 sm:mt-10">
        <Experience />
      </section>

      <section className="mt-8 sm:mt-10">
        <Project />
      </section>

      {/* <footer className="absolute bottom-2">
        <ThemeToggle />
      </footer> */}
    </div>
  );
}
