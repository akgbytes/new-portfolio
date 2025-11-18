import AnimatedLine from "@/components/animated-line";
import AboutMe from "@/components/sections/about-me";
import Experience from "@/components/sections/experience";
import IntroSection from "@/components/sections/intro-section";
import Project from "@/components/sections/project";
import Skills from "@/components/sections/skills";

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
        <Project />
      </section>

      <section className="mt-8 sm:mt-10">
        <Skills />
      </section>

      <section className="mt-8 sm:mt-10">
        <Experience />
      </section>
    </div>
  );
}
