import React from "react";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { Philosophy } from "@/components/portfolio/philosophy";
import { WhoIAm } from "@/components/portfolio/who-i-am";
import { FounderManifesto } from "@/components/portfolio/founder-manifesto";
import { FounderStatement } from "@/components/portfolio/founder-statement";
import { WhatImBuilding } from "@/components/portfolio/what-im-building";
import { Journey } from "@/components/portfolio/journey";
import { AxoraEcosystem } from "@/components/portfolio/axora-ecosystem";
import { Leadership } from "@/components/portfolio/leadership";
import { ProductMetrics } from "@/components/portfolio/product-metrics";
import { ProductEcosystem } from "@/components/portfolio/product-ecosystem";
import { IdeasLab } from "@/components/portfolio/ideas-lab";
import { SkillsClusters } from "@/components/portfolio/skills-clusters";
import { BuilderPhilosophy } from "@/components/portfolio/builder-philosophy";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 grain-overlay z-[100]" />
      <div className="fixed inset-0 premium-glow pointer-events-none z-0" />
      <div className="fixed inset-0 blueprint-grid opacity-[0.02] pointer-events-none z-0" />
      
      <Navbar />
      <Hero />
      <FounderStatement />
      <Philosophy />
      <FounderManifesto />
      <WhatImBuilding />
      <Journey />
      <WhoIAm />
      <BuilderPhilosophy />
      <AxoraEcosystem />
      <Leadership />
      <ProductMetrics />
      <ProductEcosystem />
      <IdeasLab />
      <SkillsClusters />
      <Contact />
      <Footer />
    </main>
  );
}
