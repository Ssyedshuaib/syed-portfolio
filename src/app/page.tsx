
"use client";

import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/sections/hero";
import { Preloader } from "@/components/ui/preloader";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Dynamic imports for below-fold sections to optimize TTI and bundle size
const FounderProfile = dynamic(() => import("@/sections/founder-profile").then(m => m.FounderProfile), { ssr: true });
const Philosophy = dynamic(() => import("@/sections/philosophy").then(m => m.Philosophy), { ssr: true });
const Journey = dynamic(() => import("@/sections/journey").then(m => m.Journey), { ssr: true });
const AxoraEcosystem = dynamic(() => import("@/sections/axora-ecosystem").then(m => m.AxoraEcosystem), { ssr: false });
const ProductEcosystem = dynamic(() => import("@/sections/product-ecosystem").then(m => m.ProductEcosystem), { ssr: true });
const IdeasLab = dynamic(() => import("@/sections/ideas-lab").then(m => m.IdeasLab), { ssr: true });
const Contact = dynamic(() => import("@/sections/contact").then(m => m.Contact), { ssr: true });
const Footer = dynamic(() => import("@/sections/layout/footer").then(m => m.Footer), { ssr: true });

/**
 * Main Entry Page - Optimized Architectural Flow
 * Handled State: isLoading (Intro)
 */
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const introPlayed = sessionStorage.getItem("axora_intro_played");
    if (introPlayed === "true") {
      setIsLoading(false);
    }
    
    const handleUnload = () => sessionStorage.removeItem("axora_intro_played");
    window.addEventListener("beforeunload", handleUnload);
    
    setHasMounted(true);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  useEffect(() => {
    if (isLoading && hasMounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading, hasMounted]);

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem("axora_intro_played", "true");
    setIsLoading(false);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <motion.div 
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-[1.5s] ease-out",
          isLoading ? "opacity-0 pointer-events-none blur-[20px]" : "opacity-100 blur-0"
        )}
      >
        <Navbar />
      </motion.div>

      <motion.main 
        className="min-h-screen relative overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isLoading ? 0.05 : 1,
          scale: isLoading ? 0.99 : 1,
          filter: isLoading ? "blur(40px)" : "blur(0px)",
        }}
        transition={{ 
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        <div className="fixed inset-0 grain-overlay z-[1] pointer-events-none will-change-transform" />
        <div className="fixed inset-0 premium-glow pointer-events-none z-0 will-change-transform" />
        <div className="fixed inset-0 blueprint-grid opacity-[0.02] pointer-events-none z-0" />
        
        <Hero />
        <FounderProfile />
        <Philosophy />
        <Journey />
        <AxoraEcosystem />
        <ProductEcosystem />
        <IdeasLab />
        <Contact />
        
        <Footer />
      </motion.main>
    </>
  );
}
