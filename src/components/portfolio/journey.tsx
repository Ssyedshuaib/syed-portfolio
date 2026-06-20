
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const CHAPTERS = [
  {
    id: "01",
    year: "2024",
    title: "Learning To Build",
    description: "Started exploring software engineering, systems thinking, and product creation. The goal was understanding how technology creates value.",
    details: "Focus: Core Logic & System Foundations"
  },
  {
    id: "02",
    year: "2025",
    title: "Building The Foundation",
    description: "The first products, experiments, and the beginning of Axora. Moving from learning to building.",
    details: "Focus: Rapid Prototyping & Development"
  },
  {
    id: "03",
    year: "2026",
    title: "Creating Ecosystems",
    description: "Building interconnected digital ecosystems through DevNexus, Reverie, educational platforms, and future ventures.",
    details: "Focus: Ecosystem Design & Strategy"
  },
  {
    id: "04",
    year: "FUTURE",
    title: "The Long-Term Vision",
    description: "Building a venture studio focused on education, memory preservation, productivity, and future technology experiences.",
    details: "Focus: Scalability & Long-term Impact"
  }
];

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      id="journey" 
      ref={containerRef}
      className="relative bg-[#050505] py-64 px-6 overflow-hidden"
    >
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
        
        {/* LEFT COLUMN: Sticky Narrative */}
        <div className="lg:w-1/3">
          <div className="lg:sticky lg:top-48 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-white/5">
                <p className="text-[10px] font-bold tracking-[0.6em] text-[#536878] uppercase">The Journey</p>
              </div>
              <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-white leading-[0.9]">
                Every Product <br />
                Started As A <br />
                <span className="text-[#EAE0C8] italic font-medium">Problem Worth Solving.</span>
              </h2>
              <p className="text-lg text-[#EAE0C8]/40 font-light leading-relaxed max-w-sm">
                The story behind the evolution of Axora and the pursuit of building systems that outlive trends.
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Timeline */}
        <div className="lg:w-2/3 relative">
          {/* Vertical Timeline Path */}
          <div className="absolute left-0 md:left-12 top-0 bottom-0 w-px bg-white/5">
            <motion.div 
              style={{ scaleY: pathLength }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top shadow-[0_0_15px_rgba(234,224,200,0.3)]"
            />
          </div>

          <div className="space-y-64 pl-12 md:pl-32">
            {CHAPTERS.map((chapter, idx) => (
              <TimelineChapter key={chapter.id} chapter={chapter} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineChapter({ chapter, idx }: { chapter: any, idx: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.1, 1, 1, 0.1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y }}
      className="relative group"
    >
      {/* Giant Background Year Number */}
      <div className="absolute -top-12 -left-20 md:-left-40 pointer-events-none select-none overflow-hidden h-32 w-full">
        <span className="text-[12rem] font-headline font-black text-white/[0.02] tracking-tighter block transition-colors duration-1000 group-hover:text-primary/[0.04]">
          {chapter.year}
        </span>
      </div>

      <div className="space-y-10 relative z-10">
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono font-bold tracking-[0.4em] text-primary/40">{chapter.id}</span>
            <div className="h-px w-12 bg-primary/10 group-hover:w-24 transition-all duration-1000" />
            <span className="text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase group-hover:text-primary/60 transition-colors">
              Timeline Chapter
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tight">
              {chapter.title}
            </h3>
            <p className="text-2xl md:text-3xl font-light text-[#EAE0C8]/60 leading-relaxed max-w-2xl italic">
              {chapter.description}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 max-w-xs">
          <p className="text-[9px] font-bold tracking-[0.4em] text-[#536878] uppercase mb-1">Active Specialization</p>
          <p className="text-xs text-primary/40 font-medium tracking-widest uppercase">
            {chapter.details}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
