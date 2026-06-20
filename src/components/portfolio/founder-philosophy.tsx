
"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const PRINCIPLES = [
  {
    id: "01",
    label: "CLARITY",
    title: "Solve Problems, Not Trends.",
    sub: "Technology changes constantly. Meaningful problems remain.",
    body: "I focus on building solutions that stay valuable long after trends disappear. Innovation is found in solving the friction of today, not chasing the hype of tomorrow.",
  },
  {
    id: "02",
    label: "SYSTEMS",
    title: "Systems Over Shortcuts.",
    sub: "Strong systems create consistent outcomes.",
    body: "Rather than chasing quick wins or temporary hacks, I design frameworks that scale. A well-built system compounds value while a shortcut creates technical debt.",
  },
  {
    id: "03",
    label: "VALUE",
    title: "Products Should Create Value.",
    sub: "Impact is measured by utility, not engagement metrics.",
    body: "Every feature should improve learning, memory, productivity, or decision making. If a product doesn't fundamentally improve the human experience, it shouldn't exist.",
  },
  {
    id: "04",
    label: "LONGEVITY",
    title: "Think Long-Term.",
    sub: "The goal is not attention. The goal is lasting impact.",
    body: "I build with a decade-long perspective. In a world of fast software, I choose to architect digital products that remain relevant as users grow and needs evolve.",
  },
  {
    id: "05",
    label: "ECOSYSTEMS",
    title: "Build Ecosystems, Not Isolated Apps.",
    sub: "Interconnectivity is a feature, not an afterthought.",
    body: "Every Axora product is designed to strengthen the larger vision. We build modular, connected systems that work together to simplify the digital life of the student.",
  },
];

export function FounderPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const { scrollYProgress: closingProgress } = useScroll({
    target: closingRef,
    offset: ["start end", "end center"],
  });

  const progressLine = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Rail logic: Fade in/out only within the philosophy section
  const railOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <section id="philosophy" ref={containerRef} className="relative bg-background overflow-hidden pb-64">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />

      {/* Vertical Progress Rail - Appears only when in section */}
      <motion.div 
        style={{ opacity: railOpacity }}
        className="hidden lg:flex fixed left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-50 pointer-events-none"
      >
        <div className="text-[10px] font-bold tracking-[0.4em] text-primary/20 uppercase rotate-90 mb-12">Manifesto</div>
        <div className="relative h-64 w-px bg-white/5 overflow-hidden">
          <motion.div 
            style={{ scaleY: progressLine }}
            className="absolute top-0 left-0 w-full h-full bg-primary origin-top"
          />
        </div>
        <div className="flex flex-col gap-4 mt-12">
          {PRINCIPLES.map((p, i) => {
            const start = i * 0.16;
            const end = (i + 1) * 0.16;
            const displayEnd = i === 4 ? 1 : end;
            const chapterHighlight = useTransform(
              scrollYProgress, 
              [start, start + 0.05, displayEnd - 0.05, displayEnd], 
              [0.2, 1, 1, i === 4 ? 1 : 0.2]
            );
            return (
              <motion.span 
                key={p.id}
                style={{ opacity: chapterHighlight }}
                className="text-[10px] font-mono font-bold text-primary"
              >
                {p.id}
              </motion.span>
            );
          })}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Intro */}
        <div className="py-64 space-y-12 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-[10px] font-bold tracking-[1em] text-primary/40 uppercase">FOUNDER PHILOSOPHY</p>
            <h2 className="text-6xl md:text-[8rem] font-headline font-black tracking-tighter text-white leading-none">
              The Principles <br />
              <span className="text-primary italic font-medium">Behind Axora.</span>
            </h2>
          </motion.div>
        </div>

        {/* Principles Stack */}
        <div className="space-y-[40vh]">
          {PRINCIPLES.map((principle, idx) => (
            <PrincipleChapter key={idx} principle={principle} idx={idx} />
          ))}
        </div>

        {/* Animated Manifesto Closing Statement */}
        <div ref={closingRef} className="min-h-[120vh] flex flex-col items-center justify-center text-center py-64 relative">
          <div className="flex flex-col items-center gap-24 w-full">
            <motion.div 
              style={{ opacity: useTransform(closingProgress, [0, 0.2], [0, 0.1]) }}
              className="h-px w-24 bg-primary" 
            />
            
            <div className="space-y-4 md:space-y-8 cursor-default w-full">
              <div className="overflow-hidden">
                <ManifestoLine 
                  text="The Goal" 
                  progress={closingProgress} 
                  range={[0.1, 0.4]} 
                  offset={150}
                />
              </div>
              <div className="overflow-hidden">
                <ManifestoLine 
                  text="Is Not To Build" 
                  progress={closingProgress} 
                  range={[0.2, 0.5]} 
                  offset={-150}
                  className="text-primary/30"
                />
              </div>
              <div className="overflow-hidden">
                <ManifestoLine 
                  text="More Products." 
                  progress={closingProgress} 
                  range={[0.3, 0.6]} 
                  offset={100}
                />
              </div>
              
              <div className="pt-24 space-y-4 md:space-y-8">
                <div className="overflow-hidden">
                  <ManifestoLine 
                    text="The Goal" 
                    progress={closingProgress} 
                    range={[0.4, 0.7]} 
                    offset={-100}
                    italic
                  />
                </div>
                <div className="overflow-hidden">
                  <ManifestoLine 
                    text="Is To Build" 
                    progress={closingProgress} 
                    range={[0.5, 0.8]} 
                    offset={150}
                    className="text-primary/30"
                    noItalic
                  />
                </div>
                <div className="overflow-hidden">
                  <ManifestoLine 
                    text="Better Systems." 
                    progress={closingProgress} 
                    range={[0.6, 0.9]} 
                    offset={-150}
                    italic
                  />
                </div>
              </div>
            </div>

            <motion.div
              style={{ opacity: useTransform(closingProgress, [0.8, 1], [0, 0.4]) }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="pt-24"
            >
              <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">Axora Operating System</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoLine({ 
  text, 
  progress, 
  range, 
  offset, 
  className, 
  italic, 
  noItalic 
}: { 
  text: string; 
  progress: any; 
  range: [number, number]; 
  offset: number;
  className?: string;
  italic?: boolean;
  noItalic?: boolean;
}) {
  const yBase = useTransform(progress, range, [offset, 0]);
  const opacity = useTransform(progress, range, [0, 1]);
  const blur = useTransform(progress, range, [20, 0]);
  const scale = useTransform(progress, range, [0.8, 1]);
  
  // Smooth the scroll movement
  const springY = useSpring(yBase, { stiffness: 60, damping: 20 });

  return (
    <motion.div
      style={{ 
        y: springY, 
        opacity, 
        scale,
        filter: `blur(${blur}px)`,
      }}
      className={cn(
        "text-6xl md:text-[9rem] lg:text-[11rem] font-headline font-black tracking-tighter text-white leading-[0.85] select-none",
        italic && "italic",
        noItalic && "not-italic",
        className
      )}
    >
      <motion.span
        animate={{ 
          y: [0, -15, 0],
          x: [0, 5, 0],
          rotate: [0, 1, 0]
        }}
        transition={{ 
          duration: 7 + Math.random() * 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </motion.div>
  );
}

function PrincipleChapter({ principle, idx }: { principle: any, idx: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const isRight = idx % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={cn(
        "relative flex flex-col items-center gap-24 lg:gap-48",
        isRight ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      {/* Ghost Background Number */}
      <div className={cn(
        "absolute -top-32 md:-top-64 pointer-events-none select-none z-0",
        isRight ? "-left-12 lg:-left-24" : "-right-12 lg:-right-24"
      )}>
        <motion.span 
          animate={{ 
            opacity: isInView ? 0.04 : 0.01,
            scale: isInView ? 1 : 0.95
          }}
          className="text-[20rem] md:text-[40rem] font-headline font-black text-white tracking-tighter block leading-none"
        >
          {principle.id}
        </motion.span>
      </div>

      {/* Content Area */}
      <div className="flex-1 space-y-16 relative z-10 w-full">
        <div className={cn(
          "space-y-12 max-w-2xl",
          isRight ? "lg:mr-auto" : "lg:ml-auto"
        )}>
          <motion.div
            animate={{ 
              x: isInView ? 0 : (isRight ? -30 : 30),
              opacity: isInView ? 1 : 0
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-6">
               <span className="text-xs font-mono font-bold text-primary/40 tracking-[0.4em]">{principle.id}</span>
               <div className="h-px w-12 bg-primary/20" />
               <span className="text-[10px] font-bold tracking-[0.6em] text-primary uppercase">
                 {principle.label}
               </span>
            </div>
            
            <h3 className="text-5xl md:text-8xl font-headline font-black text-white tracking-tighter leading-none">
              {principle.title}
            </h3>
          </motion.div>

          <motion.div
            animate={{ 
              y: isInView ? 0 : 20,
              opacity: isInView ? 1 : 0
            }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-4xl font-light text-primary/70 italic leading-tight">
              {principle.sub}
            </p>
            <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed">
              {principle.body}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Visual Spacer / Accent */}
      <div className="hidden lg:flex flex-1 items-center justify-center">
        <motion.div
          animate={{ 
            scale: isInView ? 1 : 0.8,
            opacity: isInView ? 0.2 : 0,
            rotate: isInView ? 0 : 45
          }}
          className="w-96 h-96 border border-primary/20 rounded-[4rem] relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
}
