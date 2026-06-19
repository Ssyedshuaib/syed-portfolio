import React from "react";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Impact } from "@/components/portfolio/impact";
import { DevNexusShowcase } from "@/components/portfolio/dev-nexus-showcase";
import { ProjectsBento } from "@/components/portfolio/projects-bento";
import { Journey } from "@/components/portfolio/journey";
import { Skills } from "@/components/portfolio/skills";
import { PhilosophyAI } from "@/components/portfolio/philosophy-ai";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <DevNexusShowcase />
      <ProjectsBento />
      <Journey />
      <Skills />
      <PhilosophyAI />
      <Contact />
    </main>
  );
}
