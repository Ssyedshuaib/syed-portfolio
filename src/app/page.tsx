
import React from "react";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { FounderPhilosophy } from "@/components/portfolio/founder-philosophy";
import { FounderProfile } from "@/components/portfolio/founder-profile";
import { AxoraProducts } from "@/components/portfolio/axora-products";
import { FounderManifesto } from "@/components/portfolio/founder-manifesto";
import { WhatImBuilding } from "@/components/portfolio/what-im-building";
import { Journey } from "@/components/portfolio/journey";
import { BuilderPhilosophy } from "@/components/portfolio/builder-philosophy";
import { AxoraEcosystem } from "@/components/portfolio/axora-ecosystem";
import { Leadership } from "@/components/portfolio/leadership";
import { ProductMetrics } from "@/components/portfolio/product-metrics";
import { ProductEcosystem } from "@/components/portfolio/product-ecosystem";
import { IdeasLab } from "@/components/portfolio/ideas-lab";
import { SkillsClusters } from "@/components/portfolio/skills-clusters";
import { Contact } from "@/components/portfolio/contact";
import { CinematicEnding } from "@/components/portfolio/cinematic-ending";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 grain-overlay z-[100]" />
      <div className="fixed inset-0 premium-glow pointer-events-none z-0" />
      <div className="fixed inset-0 blueprint-grid opacity-[0.02] pointer-events-none z-0" />
      
      <Navbar />
      <Hero />
      <FounderProfile />
      <AxoraProducts />
      <FounderPhilosophy />
      <FounderManifesto />
      <WhatImBuilding />
      <Journey />
      <BuilderPhilosophy />
      <AxoraEcosystem />
      <Leadership />
      <ProductMetrics />
      <ProductEcosystem />
      <IdeasLab />
      <SkillsClusters />
      <Contact />
      <CinematicEnding />
    </main>
  );
}
