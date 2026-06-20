"use client";

import React, { useState, useEffect } from "react";
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
import { Footer } from "@/components/portfolio/footer";
import { Preloader } from "@/components/portfolio/preloader";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling when loading to maintain focus on the cinematic intro
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.main 
        className="min-h-screen relative overflow-x-hidden"
        initial={{ opacity: 0.05 }} // Subconscious hero preview during sequence
        animate={{ 
          opacity: isLoading ? 0.05 : 1,
          scale: isLoading ? 0.99 : 1,
          filter: isLoading ? "blur(20px)" : "blur(0px)"
        }}
        transition={{ 
          duration: 2.5, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        <div className="fixed inset-0 grain-overlay z-[100] pointer-events-none" />
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
        <Footer />
      </motion.main>
    </>
  );
}
