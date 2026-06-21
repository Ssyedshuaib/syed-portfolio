"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useScroll, useSpring, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const PRINCIPLES = [
  {
    id: "01",
    label: "CLARITY",
    title: "Solve Problems, Not Trends.",
    sub: "Technology changes constantly. Meaningful problems remain.",
    body: "I focus on building solutions that stay valuable long after trends disappear. Innovation is found in solving the friction of today, not chasing the hype of tomorrow.",
    visual: "clarity"
  },
  {
    id: "02",
    label: "SYSTEMS",
    title: "Systems Over Shortcuts.",
    sub: "Strong systems create consistent outcomes.",
    body: "Rather than chasing quick wins or temporary hacks, I design frameworks that scale. A well-built system compounds value while a shortcut creates technical debt.",
    visual: "systems"
  },
  {
    id: "03",
    label: "VALUE",
    title: "Products Should Create Value.",
    sub: "Impact is measured by utility, not engagement metrics.",
    body: "Every feature should improve learning, memory, productivity, or decision making. If a product doesn't fundamentally improve the human experience, it shouldn't exist.",
    visual: "value"
  },
  {
    id: "04",
    label: "LONGEVITY",
    title: "Think Long-Term.",
    sub: "The goal is not attention. The goal is lasting impact.",
    body: "I build with a decade-long perspective. In a world of fast software, I choose to architect digital products that remain relevant as users grow and needs evolve.",
    visual: "longevity"
  },
  {
    id: "05",
    label: "ECOSYSTEMS",
    title: "Build Ecosystems, Not Isolated Apps.",
    sub: "Interconnectivity is a feature, not an afterthought.",
    body: "Every Axora product is designed to strengthen the larger vision. We build modular, connected systems that work together to simplify the digital life of the student.",
    visual: "ecosystems"
  },
];

export function FounderPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const principlesContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: mainProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const { scrollYProgress: closingProgress } = useScroll({
    target: closingRef,
    offset: ["start end", "end center"],
  });

  // Rail Visibility Logic
  const railOpacity = useTransform(
    [mainProgress, closingProgress],
    ([prog, close]) => {
      const fadeIn = (prog as number) * 20;
      const fadeOut = 1 - (close as number) * 4;
      return Math.max(0, Math.min(1, fadeIn)) * Math.max(0, Math.min(1, fadeOut));
    }
  );

  const progressLine = useSpring(mainProgress, { stiffness: 80, damping: 25 });

  return (
    <section id="philosophy" ref={containerRef} className="relative bg-background overflow-hidden pb-32">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />

      {/* MANIFESTO PROGRESS RAIL */}
      <motion.div 
        style={{ opacity: railOpacity }}
        className="fixed left-8 md:left-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-10 z-[80] hidden lg:flex pointer-events-none"
      >
        <div className="text-[9px] font-bold tracking-[0.8em] text-primary/30 uppercase rotate-90 mb-16 whitespace-nowrap">
          Manifesto
        </div>
        
        <div className="relative h-64 w-[1px] bg-white/5 overflow-hidden rounded-full">
          <motion.div 
            style={{ scaleY: progressLine }}
            className="absolute top-0 left-0 w-full h-full bg-primary origin-top shadow-[0_0_15px_rgba(234,224,200,0.5)]"
          />
        </div>

        <div className="flex flex-col gap-6 mt-8">
          {PRINCIPLES.map((p, i) => (
            <PrincipleMarker key={p.id} id={p.id} index={i} progress={mainProgress} />
          ))}
        </div>
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-6">
        {/* Intro Header */}
        <div className="py-48 space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-[10px] font-bold tracking-[1em] text-primary/30 uppercase">FOUNDER PHILOSOPHY</p>
            <h2 className="text-5xl md:text-8xl lg:text-[clamp(3.5rem,8vw,7.5rem)] font-headline font-black tracking-tighter text-white leading-[0.85]">
              Principles Over <br />
              <span className="text-primary italic font-medium">Shortcuts.</span>
            </h2>
          </motion.div>
        </div>

        {/* Alternating Principles */}
        <div ref={principlesContainerRef} className="space-y-48 lg:space-y-[40vh] pb-64">
          {PRINCIPLES.map((principle, idx) => (
            <PrincipleChapter key={idx} principle={principle} idx={idx} />
          ))}
        </div>

        {/* FINAL MANIFESTO SEQUENCE */}
        <div ref={closingRef} className="min-h-screen flex flex-col items-center justify-center text-center relative px-4">
          <div className="space-y-24 w-full max-w-5xl mx-auto">
            <div className="space-y-8">
               <motion.p 
                 style={{ opacity: useTransform(closingProgress, [0.1, 0.3], [0, 1]) }}
                 className="text-[10px] font-bold tracking-[0.8em] text-primary/30 uppercase"
               >
                 Core Belief
               </motion.p>
               
               <div className="relative h-[400px] flex flex-col items-center justify-center">
                 <AnimatePresence mode="wait">
                   {closingProgress.get() < 0.6 ? (
                     <motion.div
                       key="state-1"
                       initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
                       animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                       exit={{ opacity: 0, filter: "blur(20px)", y: -20 }}
                       transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                       className="space-y-4"
                     >
                       <h3 className="text-4xl md:text-6xl font-headline font-light text-primary/40 uppercase tracking-tighter">The Goal Is Not To Build</h3>
                       <h4 className="text-6xl md:text-[8rem] font-headline font-black text-white tracking-tighter leading-none italic">More Products.</h4>
                     </motion.div>
                   ) : (
                     <motion.div
                       key="state-2"
                       initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
                       animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                       transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                       className="space-y-4"
                     >
                       <h3 className="text-4xl md:text-6xl font-headline font-light text-primary/40 uppercase tracking-tighter">The Goal Is To Build</h3>
                       <h4 className="text-6xl md:text-[8rem] font-headline font-black text-primary tracking-tighter leading-none italic">Better Systems.</h4>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
            </div>

            <motion.p 
              style={{ opacity: useTransform(closingProgress, [0.8, 0.95], [0, 0.4]) }}
              className="text-xl md:text-2xl font-light text-white leading-relaxed italic"
            >
              "Building systems that outlive trends and create lasting impact."
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrincipleMarker({ id, index, progress }: { id: string, index: number, progress: any }) {
  const start = index * (1 / PRINCIPLES.length);
  const end = (index + 1) * (1 / PRINCIPLES.length);
  
  const opacity = useTransform(progress, [start - 0.05, start, end, end + 0.05], [0.15, 1, 1, 0.15]);
  const scale = useTransform(progress, [start - 0.05, start, end, end + 0.05], [0.95, 1.1, 1.1, 0.95]);

  return (
    <motion.span style={{ opacity, scale }} className="text-[10px] font-mono font-bold text-primary">
      {id}
    </motion.span>
  );
}

function PrincipleChapter({ principle, idx }: { principle: any, idx: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const isRight = idx % 2 === 0;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const numberY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={cn(
        "relative flex flex-col lg:flex-row items-center gap-16 lg:gap-32 min-h-[70vh]",
        !isRight && "lg:flex-row-reverse"
      )}
    >
      {/* Decorative Atmospheric Number */}
      <motion.div 
        style={{ y: numberY }}
        className={cn(
          "absolute -top-24 lg:-top-48 pointer-events-none select-none z-0 opacity-[0.03] transition-opacity duration-1000",
          isInView ? "opacity-[0.03]" : "opacity-0",
          isRight ? "left-0 lg:-left-24" : "right-0 lg:-right-24"
        )}
      >
        <span className="text-[12rem] lg:text-[clamp(15rem,25vw,30rem)] font-headline font-black text-white tracking-tighter block leading-none">
          {principle.id}
        </span>
      </motion.div>

      {/* Content Column */}
      <div className="flex-1 space-y-12 relative z-10 w-full">
        <div className={cn("space-y-8 max-w-2xl", isRight ? "lg:mr-auto" : "lg:ml-auto")}>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
               <span className="text-[11px] font-mono font-bold text-primary/30 tracking-[0.4em]">{principle.id}</span>
               <div className="h-px w-8 bg-primary/10" />
               <span className="text-[10px] font-bold tracking-[0.6em] text-primary uppercase">
                 {principle.label}
               </span>
            </div>
            <h3 className="text-5xl md:text-7xl lg:text-[clamp(3rem,6vw,5.5rem)] font-headline font-black text-white tracking-tighter leading-[0.9]">
              {principle.title}
            </h3>
          </div>

          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-light text-primary/70 italic leading-tight">
              {principle.sub}
            </p>
            <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed">
              {principle.body}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Column */}
      <div className="flex-1 w-full flex items-center justify-center relative">
        <div className="w-full max-w-md aspect-square relative flex items-center justify-center">
           <VisualEngine type={principle.visual} active={isInView} />
        </div>
      </div>
    </motion.div>
  );
}

function VisualEngine({ type, active }: { type: string, active: boolean }) {
  return (
    <div className="relative w-full h-full glass rounded-[3rem] border-white/5 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="absolute inset-0 flex items-center justify-center scale-90">
        {type === "clarity" && (
          <div className="relative w-48 h-48 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: active ? [1, 1.2, 1] : 1,
                  rotate: active ? (i * 120) : 0,
                  opacity: active ? [0.1, 0.3, 0.1] : 0.1
                }}
                transition={{ duration: 8, repeat: Infinity, delay: i * 2 }}
                className="absolute inset-0 border border-primary/40 rounded-full"
              />
            ))}
            <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_20px_rgba(234,224,200,0.8)]" />
          </div>
        )}

        {type === "systems" && (
          <div className="grid grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  opacity: active ? [0.1, 0.4, 0.1] : 0.1,
                  scale: active ? [1, 1.1, 1] : 1
                }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
                className="w-4 h-4 rounded bg-primary/20 border border-primary/40"
              />
            ))}
          </div>
        )}

        {type === "value" && (
          <div className="relative w-48 h-48">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: active ? [0.5, 1.5] : 0.5,
                  opacity: active ? [0.5, 0] : 0
                }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 1 }}
                className="absolute inset-0 border-2 border-primary/20 rounded-full"
              />
            ))}
          </div>
        )}

        {type === "longevity" && (
          <div className="relative w-48 h-48 border border-white/5 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ rotate: active ? 360 : 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
            </motion.div>
            <div className="w-24 h-24 border border-primary/20 rounded-full flex items-center justify-center">
               <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
            </div>
          </div>
        )}

        {type === "ecosystems" && (
          <div className="relative w-48 h-48">
             <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
               <motion.path
                 d="M20,50 L50,20 L80,50 L50,80 Z"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="0.5"
                 className="text-primary"
                 animate={{ pathLength: active ? [0, 1, 0] : 0 }}
                 transition={{ duration: 10, repeat: Infinity }}
               />
               <motion.circle cx="50" cy="50" r="10" stroke="currentColor" fill="none" className="text-primary" animate={{ r: [10, 12, 10] }} transition={{ duration: 5, repeat: Infinity }} />
             </svg>
          </div>
        )}
      </div>
    </div>
  );
}
