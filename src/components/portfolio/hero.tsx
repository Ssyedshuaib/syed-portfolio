"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { OrbitalSystem } from "./orbital-system";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  left: string;
  duration: number;
  delay: number;
}

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setIsMounted(true);
    // Generate particles only on client to avoid hydration mismatch
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: 20 + Math.random() * 20,
      delay: Math.random() * 20,
    }));
    setParticles(newParticles);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.12),transparent_60%)]" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.2, 0], y: -1000 }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            className="dust-particle absolute w-1 h-1 bg-[#EAE0C8] rounded-full"
            style={{
              left: particle.left,
              bottom: `-10px`,
            }}
          />
        ))}
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center z-10"
      >
        <div className="space-y-12 text-center lg:text-left">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass border-[#EAE0C8]/5 text-[10px] font-bold text-[#EAE0C8] tracking-[0.5em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#536878] animate-pulse" />
            Founder • Product Builder
          </motion.div>
          
          <div className="space-y-8">
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl lg:text-[7rem] font-headline font-black tracking-tighter leading-[0.9] text-white"
            >
              Building Products.<br />
              <span className="text-[#536878]">Building Systems.</span><br />
              <span className="italic font-medium text-[#EAE0C8]">Building The Future.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-[#EAE0C8]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              I create technology products, digital ecosystems, and scalable experiences designed to solve meaningful problems and create lasting impact.
            </motion.p>
          </div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-10">
            <Button asChild size="lg" className="h-16 px-12 rounded-full bg-[#EAE0C8] text-[#0F1317] hover:bg-[#FFFFFF] transition-all font-bold text-lg group shadow-[0_10px_30px_rgba(234,224,200,0.15)]">
              <Link href="#ecosystem">
                Explore My Work <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
            <Link href="#philosophy" className="text-[#EAE0C8]/70 hover:text-white transition-all font-bold text-lg relative group">
              The Vision
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#EAE0C8]/40 transition-all duration-700 group-hover:w-full" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block relative"
        >
          <OrbitalSystem />
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[8px] font-bold tracking-[0.5em] uppercase text-[#EAE0C8]/70">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#EAE0C8]/40 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white/40" 
          />
        </div>
      </motion.div>
    </section>
  );
}
