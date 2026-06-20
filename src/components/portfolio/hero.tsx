
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
      {/* ATMOSPHERIC ENVIRONMENT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.06),transparent_70%)]" />
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
            className="inline-flex items-center gap-4 px-5 py-1.5 rounded-full glass border-white/5 text-[10px] font-bold text-[#EAE0C8] tracking-[0.5em] uppercase"
          >
            <Sparkles className="w-3 h-3 text-primary" />
            Founder • Product Architect
          </motion.div>
          
          <div className="space-y-6">
            <div className="overflow-visible">
              <motion.h1 
                variants={lineVariants}
                className="text-4xl md:text-7xl lg:text-[clamp(2.5rem,5.5vw,5.8rem)] font-headline font-black tracking-tighter leading-tight text-white uppercase whitespace-nowrap"
              >
                Syed Sharfuddin Shuaib
              </motion.h1>
            </div>
            
            <div className="space-y-2">
              <motion.p 
                variants={lineVariants}
                className="text-xl md:text-3xl font-headline font-light tracking-tight italic text-primary/40"
              >
                Building products. Systems. The Future.
              </motion.p>
            </div>
            
            <motion.p 
              variants={lineVariants}
              className="text-base md:text-xl text-[#EAE0C8]/40 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light pt-6"
            >
              Architecting digital ecosystems and scalable experiences designed to solve meaningful problems and create lasting impact.
            </motion.p>
          </div>
          
          <motion.div variants={lineVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 pt-4">
            <Button asChild size="lg" data-cursor="enter" className="h-14 px-10 rounded-full bg-primary text-[#0F1317] hover:bg-white transition-all duration-700 font-bold group shadow-[0_20px_50px_rgba(234,224,200,0.15)]">
              <Link href="#ecosystem">
                Explore Work <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </Button>
            <Link href="#philosophy" className="text-[#EAE0C8]/60 hover:text-white transition-all font-bold text-base relative group py-2">
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
