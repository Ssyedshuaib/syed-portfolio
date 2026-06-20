"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Zap, Cpu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const FOCUS_AREAS = [
  { label: "Education", icon: GraduationCap },
  { label: "Memory Preservation", icon: MapPin },
  { label: "Productivity", icon: Zap },
  { label: "Future Technologies", icon: Cpu },
];

export function Philosophy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="philosophy" className="py-64 px-6 relative bg-background overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-48 relative z-10">
        {/* 1. Label & 2. Headline */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">WHY I BUILD</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-headline font-black tracking-tighter text-white leading-[0.85]">
              Technology Should <br />
              <span className="text-primary italic font-medium">Create Meaning.</span>
            </h2>
          </motion.div>
        </div>

        {/* 3. Premium Glass Philosophy Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-[4rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative glass p-16 md:p-24 rounded-[4rem] border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Sparkles className="w-24 h-24 text-white" />
            </div>
            
            <div className="max-w-3xl space-y-12">
              <p className="text-[10px] font-bold tracking-[0.6em] text-primary/60 uppercase">The Principle</p>
              <div className="space-y-8 text-3xl md:text-5xl font-light leading-tight tracking-tight text-white/90">
                <p>
                  Technology should <span className="text-primary font-medium">simplify life</span>, not complicate it.
                </p>
                <p className="text-white/60">
                  I build products around long-term value, meaningful experiences, and human-centered systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. Focus Areas Row */}
        <div className="space-y-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.6em] text-primary/40 uppercase text-center"
          >
            Core Strategic Areas
          </motion.p>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {FOCUS_AREAS.map((area) => (
              <motion.div
                key={area.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group flex items-center gap-4 px-10 py-5 bg-white/5 rounded-full border border-white/5 hover:border-primary/20 hover:bg-white/10 transition-all duration-500 cursor-default"
              >
                <area.icon className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 group-hover:text-white transition-colors">
                  {area.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 5. Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pt-24 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full opacity-50" />
            <h4 className="relative text-4xl md:text-7xl lg:text-8xl font-headline font-bold italic tracking-tighter text-white">
              Build Things That Matter.
            </h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
