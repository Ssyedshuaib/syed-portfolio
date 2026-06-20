
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { OrbitalSystem } from "./orbital-system";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, filter: "blur(20px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  if (!isMounted) return null;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-background">
      {/* PREMIUM ATMOSPHERIC ENVIRONMENT */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Layer 1: Radial Focal Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.08),transparent_70%)]" />
        
        {/* Layer 2: Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        
        {/* Layer 3: Drifting Ambient Particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0 }}
              animate={{ 
                y: ["-10%", "110%"],
                opacity: [0, 1, 0],
                x: (Math.random() - 0.5) * 20 + "%"
              }}
              transition={{ 
                duration: 20 + Math.random() * 20, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * -5
              }}
              className="absolute w-0.5 h-0.5 bg-primary/40 rounded-full blur-[1px]"
            />
          ))}
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 lg:gap-32 items-center z-10"
      >
        <div className="space-y-12 text-center lg:text-left">
          <motion.div 
            variants={lineVariants}
            className="inline-flex items-center gap-4 px-5 py-1.5 rounded-full glass border-white/5 text-[10px] font-bold text-[#EAE0C8] tracking-[0.5em] uppercase shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-primary" />
            Founder • Product Architect
          </motion.div>
          
          <div className="space-y-6">
            <div className="overflow-visible">
              <motion.h1 
                variants={lineVariants}
                className="text-4xl md:text-7xl lg:text-[clamp(2.5rem,5.5vw,5.8rem)] font-headline font-black tracking-tighter leading-[0.95] text-white uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              >
                Building Products. <br />
                Building Systems. <br />
                <span className="text-primary italic font-medium">Building The Future.</span>
              </motion.h1>
            </div>
            
            <motion.p 
              variants={lineVariants}
              className="text-base md:text-xl text-[#EAE0C8]/40 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light pt-6 drop-shadow-sm"
            >
              Architecting digital ecosystems and scalable experiences designed to solve meaningful problems and create lasting impact.
            </motion.p>
          </div>
          
          <motion.div variants={lineVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 pt-4">
            <Button asChild size="lg" data-cursor="enter" className="h-14 px-10 rounded-full bg-primary text-[#0F1317] hover:bg-white transition-all duration-400 font-bold group shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(234,224,200,0.2)] active:scale-[0.98]">
              <Link href="#ecosystem">
                Explore Work <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-400" />
              </Link>
            </Button>
            <Link href="#philosophy" className="text-[#EAE0C8]/60 hover:text-white transition-all duration-400 font-bold text-base relative group py-2">
              The Vision
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary/40 transition-all duration-700 group-hover:w-full" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
          animate={{ opacity: 0.25, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex justify-end pr-8"
        >
          <OrbitalSystem />
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 4, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[8px] font-bold tracking-[0.8em] uppercase text-white/30">Scroll To Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/30 to-transparent" />
      </motion.div>
    </section>
  );
}
