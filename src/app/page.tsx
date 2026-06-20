import React from "react";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { Philosophy } from "@/components/portfolio/philosophy";
import { FounderManifesto } from "@/components/portfolio/founder-manifesto";
import { Journey } from "@/components/portfolio/journey";
import { ProductMetrics } from "@/components/portfolio/product-metrics";
import { ProductEcosystem } from "@/components/portfolio/product-ecosystem";
import { IdeasLab } from "@/components/portfolio/ideas-lab";
import { SkillsClusters } from "@/components/portfolio/skills-clusters";
import { CurrentFocus } from "@/components/portfolio/current-focus";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 grain-overlay pointer-events-none z-[60]" />
      <div className="fixed inset-0 premium-gradient pointer-events-none z-0" />
      <Navbar />
      <Hero />
      <Philosophy />
      <FounderManifesto />
      <Journey />
      <ProductMetrics />
      <ProductEcosystem />
      <IdeasLab />
      <SkillsClusters />
      <CurrentFocus />
      <Contact />
      <Footer />
    </main>
  );
}