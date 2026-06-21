"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { OrbitalSystem } from "@/components/portfolio/orbital-system";
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
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 lg:px-12 overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] z-10" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center z-10 mx-auto"
      >
        <div className="space-y-10 text-center lg:text-left">
          <motion.div 
            variants={lineVariants}
            className="inline-flex items-center gap-4 px-5 py-1.5 rounded-full glass border-white/5 text-[10px] font-bold text-[#EAE0C8] tracking-[0.5em] uppercase shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-primary" />
            Founder • Product Architect
          </motion.div>
          
          <div className="space-y-6">
            <motion.h1 
              variants={lineVariants}
              className="text-4xl md:text-6xl lg:text-[clamp(2.2rem,5vw,4.8rem)] font-headline font-black tracking-tighter leading-[0.95] text-white uppercase"
            >
              Building Products. <br />
              Building Systems. <br />
              <span className="text-primary italic font-medium">Building The Future.</span>
            </motion.h1>
            
            <motion.p 
              variants={lineVariants}
              className="text-base md:text-lg text-[#EAE0C8]/40 max-w-md mx-auto lg:mx-0 leading-relaxed font-light pt-2"
            >
              Architecting digital ecosystems and scalable experiences designed to solve meaningful problems and create lasting impact.
            </motion.p>
          </div>
          
          <motion.div variants={lineVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 pt-4">
            <Button asChild size="lg" className="h-14 px-10 rounded-full bg-primary text-[#0F1317] hover:bg-white transition-all duration-400 font-bold group">
              <Link href="#ecosystem">
                Explore Work <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-400" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(30px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex justify-center lg:justify-end"
        >
          <OrbitalSystem />
        </motion.div>
      </motion.div>
    </section>
  );
}
