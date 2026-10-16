import { MotionConfig } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Focus } from "@/components/Focus";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { CommandMenu } from "@/components/CommandMenu";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Focus />
        <Projects />
        <Achievements />
        <Experience />
        <Education />
      </main>
      <Contact />
      <CommandMenu />
    </MotionConfig>
  );
}
