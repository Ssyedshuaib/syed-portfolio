"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const CHAPTERS = [
  {
    id: "01",
    year: "2024",
    side: "left",
    title: "Learning To Build",
    description: "Started exploring software engineering, systems thinking, and product architecture. The goal was understanding how technology creates value.",
    details: "Foundational research & core logic development.",
  },
  {
    id: "02",
    year: "2025",
    side: "right",
    title: "Building The Foundation",
    description: "The first experiments, prototypes, and the beginning of Axora. Moving from theory to tangible product development.",
    details: "Rapid prototyping & venture studio conception.",
  },
  {
    id: "03",
    year: "2026",
    side: "left",
    title: "Creating Ecosystems",
    description: "Building DevNexus, Reverie, and educational platforms as interconnected digital experiences that empower users.",
    details: "Multi-platform integration & ecosystem strategy.",
    chips: ["DevNexus", "Reverie", "Axora Studio"]
  },
  {
    id: "04",
    year: "∞",
    side: "right",
    title: "The Long-Term Vision",
    description: "Building meaningful technology ecosystems that create long-term value, outliving trends and solving real human problems.",
    details: "Sustainable innovation & global impact.",
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
      className="relative bg-[#050505] py-48 md:py-80 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8 mb-32 md:mb-48"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-white/5">
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.5em] md:tracking-[0.6em] text-primary/40 uppercase">The Journey</p>
          </div>
          <h2 className="text-5xl md:text-9xl font-headline font-black tracking-tighter text-white leading-none">
            From Learning<br />
            To Building<br />
            <span className="text-[#EAE0C8] italic font-medium">Ecosystems.</span>
          </h2>
          <p className="text-lg md:text-2xl text-[#EAE0C8]/40 font-light leading-relaxed max-w-2xl mx-auto">
            The evolution of curiosity into interconnected digital products and long-term systems thinking.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Vertical Line (Visible on md+) */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2">
            <motion.div 
              style={{ scaleY: pathLength }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top shadow-[0_0_20px_rgba(234,224,200,0.3)]"
            />
          </div>

          <div className="space-y-32 md:space-y-96 pl-8 md:pl-0">
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
  const isLeft = chapter.side === "left";
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yearY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative flex flex-col items-start gap-12 md:gap-32",
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Background Year - Micro interaction: soft parallax */}
      <motion.div 
        style={{ y: yearY }}
        className={cn(
          "absolute -top-16 md:-top-32 pointer-events-none select-none z-0",
          isLeft ? "left-0 md:-left-20" : "right-0 md:-right-20"
        )}
      >
        <span className="text-[8rem] md:text-[22rem] font-headline font-black text-white/[0.02] tracking-tighter block leading-none">
          {chapter.year}
        </span>
      </motion.div>

      <div className={cn(
        "flex-1 w-full relative z-10",
        isLeft ? "md:text-right" : "md:text-left"
      )}>
        <motion.div 
          whileHover={{ x: isLeft ? -5 : 5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "space-y-6 md:space-y-8 max-w-xl",
            isLeft ? "md:ml-auto" : "md:mr-auto"
          )}
        >
          <div className={cn(
            "flex items-center gap-4 md:gap-6",
            isLeft ? "md:flex-row-reverse" : "md:flex-row"
          )}>
            <span className="text-[12px] md:text-[14px] font-mono font-bold tracking-[0.4em] text-primary/30">{chapter.id}</span>
            <div className="h-px w-8 md:w-12 bg-primary/10" />
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.6em] text-primary/60 uppercase">
              Milestone
            </span>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h3 className="text-4xl md:text-7xl font-headline font-black text-white tracking-tight leading-none group-hover:text-primary transition-colors duration-500">
              {chapter.title}
            </h3>
            <p className="text-xl md:text-3xl font-light text-[#EAE0C8]/60 leading-relaxed italic">
              {chapter.description}
            </p>
          </div>

          {chapter.chips && (
            <div className={cn(
              "flex flex-wrap gap-2 md:gap-3 pt-4 md:pt-6",
              isLeft ? "md:justify-end" : "justify-start"
            )}>
              {chapter.chips.map((chip: string) => (
                <motion.div
                  key={chip}
                  whileHover={{ scale: 1.05, borderColor: "rgba(234,224,200,0.3)" }}
                  className="px-4 md:px-6 py-2 md:py-2.5 rounded-full glass border-white/5 text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-primary/70 cursor-default transition-colors"
                >
                  {chip}
                </motion.div>
              ))}
            </div>
          )}

          <div className="pt-8 md:pt-10 border-t border-white/5">
            <p className="text-[8px] md:text-[9px] font-bold tracking-[0.5em] text-primary/20 uppercase mb-2">Primary Focus</p>
            <p className="text-xs md:text-sm text-primary/40 font-medium tracking-widest uppercase">
              {chapter.details}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="hidden md:flex relative w-12 items-center justify-center">
        <motion.div 
          whileInView={{ scale: [1, 1.2, 1], boxShadow: ["0 0 0px transparent", "0 0 15px rgba(234,224,200,0.4)", "0 0 0px transparent"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-4 h-4 rounded-full bg-black border-2 border-primary/40 z-20" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-primary/5 blur-xl rounded-full" />
        </div>
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
