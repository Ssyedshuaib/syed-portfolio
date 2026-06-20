
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const PRINCIPLES = [
  {
    id: "01",
    title: "Solve Problems, Not Trends.",
    sub: "Technology changes constantly. Meaningful problems remain.",
    body: "I focus on building solutions that stay valuable long after trends disappear.",
  },
  {
    id: "02",
    title: "Systems Over Shortcuts.",
    sub: "Strong systems create consistent outcomes.",
    body: "Rather than chasing quick wins, I design frameworks that scale.",
  },
  {
    id: "03",
    title: "Products Should Create Value.",
    sub: "Impact is measured by utility.",
    body: "Every feature should improve learning, memory, productivity, or decision making.",
  },
  {
    id: "04",
    title: "Think Long-Term.",
    sub: "The goal is not attention. The goal is lasting impact.",
    body: "I build with a decade-long perspective, ensuring Axora products compound value over time.",
  },
  {
    id: "05",
    title: "Build Ecosystems, Not Isolated Apps.",
    sub: "Interconnectivity is a feature.",
    body: "Every Axora product should strengthen the larger vision and connect seamlessly within the ecosystem.",
  },
];

export function FounderPhilosophy() {
  return (
    <section id="philosophy" className="py-80 px-6 relative bg-background overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32">
          
          {/* Left Column: Intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-48 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">FOUNDER PHILOSOPHY</p>
                <h2 className="text-6xl md:text-[5.5rem] font-headline font-black tracking-tighter text-white leading-[0.9]">
                  The Principles <br />
                  Behind Every <br />
                  <span className="text-primary italic font-medium">Decision.</span>
                </h2>
                <p className="text-xl md:text-2xl text-primary/40 font-light leading-relaxed max-w-sm">
                  The ideas that guide how I build products, design systems, and grow Axora.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Manifesto List */}
          <div className="lg:col-span-7 space-y-64 pb-32">
            {PRINCIPLES.map((principle, idx) => (
              <PrincipleItem key={idx} principle={principle} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function PrincipleItem({ principle }: { principle: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: "-30% 0px -45% 0px",
    once: false 
  });

  return (
    <motion.div
      ref={ref}
      animate={{ 
        opacity: isInView ? 1 : 0.15,
        scale: isInView ? 1 : 0.98,
        y: isInView ? 0 : 20
      }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-10 group"
    >
      <div className="flex items-center gap-8">
        <span className={cn(
          "text-[14px] font-mono font-bold tracking-[0.4em] transition-colors duration-700",
          isInView ? "text-primary" : "text-primary/20"
        )}>
          {principle.id}
        </span>
        <div className={cn(
          "h-px transition-all duration-700",
          isInView ? "w-20 bg-primary/40" : "w-8 bg-primary/10"
        )} />
      </div>

      <div className="space-y-8">
        <h3 className={cn(
          "text-5xl md:text-7xl font-headline font-black tracking-tight leading-none transition-all duration-700",
          isInView ? "text-white" : "text-white/20"
        )}>
          {principle.title}
        </h3>
        
        <div className="space-y-6">
          <p className={cn(
            "text-2xl md:text-3xl font-light italic transition-all duration-700",
            isInView ? "text-primary/70" : "text-primary/10"
          )}>
            {principle.sub}
          </p>
          <p className={cn(
            "text-xl md:text-2xl font-light leading-relaxed max-w-xl transition-all duration-700",
            isInView ? "text-white/40" : "text-white/05"
          )}>
            {principle.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
