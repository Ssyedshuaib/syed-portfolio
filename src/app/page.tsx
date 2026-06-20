"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { FounderProfile } from "@/components/portfolio/founder-profile";
import { AxoraProducts } from "@/components/portfolio/axora-products";
import { FounderPhilosophy } from "@/components/portfolio/founder-philosophy";
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
import { cn } from "@/lib/utils";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Session-based persistence: Intro plays once per visit.
    const introPlayed = sessionStorage.getItem("axora_intro_played");
    if (introPlayed === "true") {
      setIsLoading(false);
    }
    
    // On browser refresh, intro should play again (clear on unload)
    const handleUnload = () => sessionStorage.removeItem("axora_intro_played");
    window.addEventListener("beforeunload", handleUnload);
    
    setHasMounted(true);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  useEffect(() => {
    if (isLoading && hasMounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading, hasMounted]);

  const handleIntroComplete = () => {
    sessionStorage.setItem("axora_intro_played", "true");
    setIsLoading(false);
  };

  if (!hasMounted) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* 
        CRITICAL FIX: Navbar is moved outside the transformed motion.main 
        to ensure 'position: fixed' remains anchored to the viewport.
        We synchronize its emergence visibility with a dedicated wrapper.
      */}
      <div className={cn(
        "fixed inset-x-0 top-0 z-[100] transition-all duration-[1.5s] ease-out",
        isLoading ? "opacity-[0.05] pointer-events-none blur-[10px]" : "opacity-100 blur-0"
      )}>
        <Navbar />
      </div>

      <motion.main 
        className="min-h-screen relative overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isLoading ? 0.05 : 1, // Subconscious preview during intro (5%)
          scale: isLoading ? 0.99 : 1,
          filter: isLoading ? "blur(40px)" : "blur(0px)"
        }}
        transition={{ 
          duration: 1.5, // Cinematic emergence duration
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        <div className="fixed inset-0 grain-overlay z-[100] pointer-events-none" />
        <div className="fixed inset-0 premium-glow pointer-events-none z-0" />
        <div className="fixed inset-0 blueprint-grid opacity-[0.02] pointer-events-none z-0" />
        
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
