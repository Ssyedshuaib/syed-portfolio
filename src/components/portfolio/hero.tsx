"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { OrbitalSystem } from "./orbital-system";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

interface Particle {
  id: number;
  left: string;
  duration: number;
  delay: number;
}

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -150]);

  useEffect(() => {
    setIsMounted(true);
    const newParticles = [...Array(12)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: 30 + Math.random() * 20,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
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
    hidden: { opacity: 0, y: 30, filter: "blur(15px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  if (!isMounted) return null;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 px-6 overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.06),transparent_70%)]" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, y: "110vh" }}
            animate={{ opacity: [0, 1, 0], y: "-10vh" }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear"
            }}
            className="absolute w-[1px] h-[1px] bg-[#EAE0C8] rounded-full"
            style={{ left: particle.left }}
          />
        ))}
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center z-10"
      >
        <div className="space-y-12 text-center lg:text-left">
          <motion.div 
            variants={lineVariants}
            className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass border-white/5 text-[10px] font-bold text-[#EAE0C8] tracking-[0.5em] uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            Founder • Product Builder
          </motion.div>
          
          <div className="space-y-6">
            <div className="overflow-hidden">
              <motion.h1 
                style={{ y: y1 }}
                variants={lineVariants}
                className="text-6xl md:text-8xl lg:text-[8.5rem] font-headline font-black tracking-tighter leading-[0.8] text-white"
              >
                Building Products.
              </motion.h1>
            </div>
            
            <div className="overflow-hidden">
              <motion.span 
                variants={lineVariants}
                style={{ y: y2 }}
                className="text-5xl md:text-7xl lg:text-[6.5rem] text-primary/30 block font-headline font-black tracking-tighter leading-[0.85]"
              >
                Building Systems.
              </motion.span>
            </div>

            <div className="overflow-hidden">
              <motion.span 
                variants={lineVariants}
                style={{ y: y3 }}
                className="text-5xl md:text-7xl lg:text-[7rem] italic font-medium text-primary/80 block font-headline tracking-tighter leading-[0.9]"
              >
                Building The Future.
              </motion.span>
            </div>
            
            <motion.p 
              variants={lineVariants}
              className="text-lg md:text-2xl text-[#EAE0C8]/50 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light pt-8"
            >
              I architect digital products and scalable experiences designed to solve meaningful problems and create lasting impact.
            </motion.p>
          </div>
          
          <motion.div variants={lineVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10 pt-4">
            <Button asChild size="lg" data-cursor="enter" className="h-16 px-12 rounded-full bg-primary text-[#0F1317] hover:bg-white transition-all duration-700 font-bold text-lg group shadow-[0_20px_50px_rgba(234,224,200,0.15)]">
              <Link href="#ecosystem">
                Explore Work <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-700" />
              </Link>
            </Button>
            <Link href="#philosophy" className="text-[#EAE0C8]/60 hover:text-white transition-all font-bold text-lg relative group">
              The Vision
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-primary/40 transition-all duration-1000 group-hover:w-full" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98, filter: "blur(30px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <OrbitalSystem />
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 3, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] font-bold tracking-[0.8em] uppercase text-white/30">Explore Ecosystem</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary/30 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary/40 blur-sm" 
          />
        </div>
      </motion.div>
    </section>
  );
}
