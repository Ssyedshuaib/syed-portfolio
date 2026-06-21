"use client";

import React from "react";
import { motion } from "framer-motion";

const PILLARS = [
  {
    id: "01",
    title: "LEARN",
    description: "Making education accessible through systems that empower students.",
  },
  {
    id: "02",
    title: "REMEMBER",
    description: "Preserving memories, experiences, and stories through technology.",
  },
  {
    id: "03",
    title: "CONNECT",
    description: "Building meaningful communities and digital ecosystems.",
  },
  {
    id: "04",
    title: "CREATE",
    description: "Designing products that solve real problems with elegance and purpose.",
  },
];

export function WhatImBuilding() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const pillarVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="vision" className="py-64 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-48">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="max-w-3xl space-y-8"
        >
          <motion.p variants={lineVariants} className="text-[10px] font-bold tracking-[0.8em] text-[#536878] uppercase mb-8">The Vision</motion.p>
          <div className="space-y-4">
            <motion.h2 variants={lineVariants} className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-white leading-[0.9]">
              I build for a future where technology
            </motion.h2>
            <motion.h2 variants={lineVariants} className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-[#EAE0C8] italic leading-[0.9]">
              simplifies the human experience.
            </motion.h2>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-48"
        >
          {PILLARS.map((pillar) => (
            <motion.div 
              key={pillar.id}
              variants={pillarVariants}
              className="group space-y-8 relative"
            >
              <div className="flex items-center gap-6">
                <span className="text-[12px] font-bold tracking-[0.4em] text-[#536878]">
                  {pillar.id}
                </span>
                <div className="h-px w-8 bg-[#536878]/30 transition-all duration-700 group-hover:w-16 group-hover:bg-[#EAE0C8]/40" />
              </div>

              <div className="space-y-6">
                <h3 className="text-6xl md:text-8xl font-headline font-black text-white tracking-tighter relative inline-block transition-all duration-700 group-hover:text-[#EAE0C8] group-hover:drop-shadow-[0_0_20px_rgba(234,224,200,0.15)]">
                  {pillar.title}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#EAE0C8] transition-all duration-700 group-hover:w-full" />
                </h3>
                <p className="text-xl md:text-2xl text-[#EAE0C8]/70 font-light leading-relaxed max-w-sm">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
