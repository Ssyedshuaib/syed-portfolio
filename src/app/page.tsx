import React from "react";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { Philosophy } from "@/components/portfolio/philosophy";
import { Journey } from "@/components/portfolio/journey";
import { ProductEcosystem } from "@/components/portfolio/product-ecosystem";
import { FeaturedBuild } from "@/components/portfolio/featured-build";
import { IdeasLab } from "@/components/portfolio/ideas-lab";
import { SkillsClusters } from "@/components/portfolio/skills-clusters";
import { CurrentFocus } from "@/components/portfolio/current-focus";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 premium-gradient pointer-events-none z-0" />
      <Navbar />
      <Hero />
      <Philosophy />
      <Journey />
      <ProductEcosystem />
      <FeaturedBuild />
      <IdeasLab />
      <SkillsClusters />
      <CurrentFocus />
      <Contact />
      <Footer />
    </main>
  );
}