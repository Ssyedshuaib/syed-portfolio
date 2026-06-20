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

  // Premium Inertia & Parallax
  const y1 = useTransform(scrollY, [0, 800], [0, -120]); // Faster
  const y2 = useTransform(scrollY, [0, 800], [0, -60]);  // Slower midground
  const y3 = useTransform(scrollY, [0, 800], [0, -180]); // Deep parallax

  useEffect(() => {
    setIsMounted(true);
    const newParticles = [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: 20 + Math.random() * 20,
      delay: Math.random() * 10,
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

  const lineVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  if (!isMounted) return null;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.08),transparent_70%)]" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.15, 0], y: -800 }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            className="dust-particle absolute w-0.5 h-0.5 bg-[#EAE0C8] rounded-full"
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
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center z-10"
      >
        <div className="space-y-10 md:space-y-14 text-center lg:text-left">
          <motion.div 
            variants={lineVariants} 
            whileHover={{ scale: 1.02, x: 5 }}
            className="inline-flex items-center gap-3 md:gap-4 px-5 md:px-6 py-2 rounded-full glass border-[#EAE0C8]/5 text-[9px] md:text-[10px] font-bold text-[#EAE0C8] tracking-[0.4em] md:tracking-[0.5em] uppercase cursor-default"
          >
            <Sparkles className="w-3 md:w-3.5 h-3 md:h-3.5 text-[#536878] animate-pulse" />
            Founder • Product Builder
          </motion.div>
          
          <div className="space-y-6 md:space-y-8">
            <div className="overflow-hidden">
              <motion.h1 
                style={{ y: y1 }}
                variants={lineVariants}
                className="text-5xl md:text-7xl lg:text-[7.5rem] font-headline font-black tracking-tighter leading-[0.85] text-white"
              >
                Building Products.
              </motion.h1>
            </div>
            
            <div className="overflow-hidden">
              <motion.span 
                variants={lineVariants}
                style={{ y: y2 }}
                className="text-4xl md:text-6xl lg:text-[6rem] text-[#536878] block font-headline font-black tracking-tighter leading-[0.9]"
              >
                Building Systems.
              </motion.span>
            </div>

            <div className="overflow-hidden">
              <motion.span 
                variants={lineVariants}
                style={{ y: y3 }}
                className="text-4xl md:text-6xl lg:text-[6.5rem] italic font-medium text-[#EAE0C8] block font-headline tracking-tighter leading-[0.9]"
              >
                Building The Future.
              </motion.span>
            </div>
            
            <motion.p 
              variants={lineVariants}
              className="text-base md:text-xl text-[#EAE0C8]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light pt-4"
            >
              I architect digital products and scalable experiences designed to solve meaningful problems and create lasting impact.
            </motion.p>
          </div>
          
          <motion.div variants={lineVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 md:gap-10">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 rounded-full bg-[#EAE0C8] text-[#0F1317] hover:bg-[#FFFFFF] hover:scale-105 transition-all duration-500 font-bold text-base md:text-lg group shadow-[0_10px_30px_rgba(234,224,200,0.15)]">
              <Link href="#ecosystem">
                Explore Work <ArrowRight className="ml-3 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </Button>
            <Link href="#philosophy" className="text-[#EAE0C8]/70 hover:text-white transition-all font-bold text-base md:text-lg relative group">
              The Vision
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#EAE0C8]/40 transition-all duration-700 group-hover:w-full" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block relative"
        >
          <OrbitalSystem />
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[7px] md:text-[8px] font-bold tracking-[0.5em] uppercase text-[#EAE0C8]/70">Scroll to explore</span>
        <div className="w-px h-10 md:h-12 bg-gradient-to-b from-[#EAE0C8]/40 to-transparent relative overflow-hidden">
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
