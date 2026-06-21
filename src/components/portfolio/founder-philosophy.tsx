
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const PRINCIPLES = [
  {
    id: "01",
    label: "CLARITY",
    title: "Solve Problems, Not Trends.",
    body: "Technology changes constantly, but meaningful problems remain. We focus on building solutions that stay valuable long after trends disappear, solving the friction of today rather than chasing the hype of tomorrow.",
    visual: "clarity"
  },
  {
    id: "02",
    label: "SYSTEMS",
    title: "Systems Create Ecosystems.",
    body: "Strong systems create consistent outcomes. Rather than chasing quick wins, we design modular frameworks that scale. A well-built system compounds value while a shortcut creates technical debt.",
    visual: "systems"
  },
  {
    id: "03",
    label: "VALUE",
    title: "Utility Before Attention.",
    body: "Impact is measured by utility, not engagement metrics. Every feature must fundamentally improve the human experience. If a product doesn't create real value for the user, it shouldn't exist.",
    visual: "value"
  },
  {
    id: "04",
    label: "LONGEVITY",
    title: "Build For The Next Decade.",
    body: "We build with a long-term perspective. In a world of fast software, we choose to architect digital products that remain relevant and continue to grow as user needs evolve over years, not months.",
    visual: "longevity"
  },
  {
    id: "05",
    label: "ECOSYSTEMS",
    title: "Connected Products Compound Value.",
    body: "Interconnectivity is a feature, not an afterthought. Every Axora product is designed to strengthen the larger vision, working together to simplify the digital life of the modern student.",
    visual: "ecosystems"
  },
];

export function FounderPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isVisible = useInView(containerRef, { margin: "-20% 0px -20% 0px" });

  const { scrollYProgress: mainProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  return (
    <section id="philosophy" ref={containerRef} className="relative bg-background overflow-x-hidden">
      {/* SECTION HEADER */}
      <div className="pt-32 pb-16 text-center space-y-4">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase"
        >
          Institutional Framework
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-headline font-black tracking-tighter text-white uppercase italic"
        >
          Founder's Philosophy
        </motion.h2>
      </div>

      {/* CHAPTERS */}
      <div className="relative">
        {PRINCIPLES.map((principle, idx) => (
          <PrincipleChapter 
            key={idx} 
            principle={principle} 
            idx={idx} 
            onActive={() => setActiveIndex(idx)}
          />
        ))}
      </div>

      {/* CINEMATIC FINALE */}
      <PhilosophyFinale />

      {/* FLOATING NAVIGATOR */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] hidden md:block"
          >
            <div className="glass px-8 py-4 rounded-full border-white/5 flex items-center gap-8 shadow-2xl">
              {PRINCIPLES.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => {
                    const el = document.getElementById(`principle-${p.id}`);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group flex flex-col items-center gap-1"
                >
                  <span className={cn(
                    "text-[8px] font-bold tracking-widest transition-all duration-500",
                    activeIndex === i ? "text-primary" : "text-white/20 group-hover:text-white/40"
                  )}>
                    {p.label}
                  </span>
                  <div className={cn(
                    "h-0.5 rounded-full transition-all duration-500",
                    activeIndex === i ? "w-4 bg-primary shadow-[0_0_10px_rgba(234,224,200,0.5)]" : "w-1 bg-white/10"
                  )} />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PrincipleChapter({ principle, idx, onActive }: { principle: any, idx: number, onActive: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  
  useEffect(() => {
    if (isInView) onActive();
  }, [isInView, onActive]);

  const isRight = idx % 2 === 0;

  return (
    <div
      id={`principle-${principle.id}`}
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center py-20 px-6"
    >
      {/* Background Watermark */}
      <div className={cn(
        "absolute pointer-events-none select-none z-0 opacity-[0.02] transition-all duration-1000",
        isRight ? "right-10" : "left-10"
      )}>
        <span className="text-[20rem] md:text-[30rem] font-headline font-black text-white leading-none">
          {principle.id}
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10">
        <div className={cn("space-y-10", !isRight && "lg:order-2")}>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <span className="text-[12px] font-mono font-bold text-primary/40 tracking-[0.4em]">{principle.id}</span>
               <div className="h-px w-10 bg-primary/20" />
               <span className="text-[10px] font-bold tracking-[0.6em] text-primary/70 uppercase">
                 {principle.label}
               </span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-[clamp(3rem,5vw,5rem)] font-headline font-black tracking-tighter text-white leading-[0.95] max-w-[90%]">
              {principle.title}
            </h3>
            <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-xl">
              {principle.body}
            </p>
          </div>
        </div>

        <div className={cn("flex justify-center", !isRight && "lg:order-1")}>
          <div className="w-full max-w-md aspect-square relative group">
             <VisualEngine type={principle.visual} active={isInView} />
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualEngine({ type, active }: { type: string, active: boolean }) {
  return (
    <div className="relative w-full h-full glass rounded-[4rem] border-white/5 overflow-hidden flex items-center justify-center shadow-2xl transition-all duration-1000 group-hover:border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      
      {type === "clarity" && (
        <div className="relative w-48 h-48">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: active ? [1, 1.2, 1] : 1,
                rotate: active ? 360 : 0,
                opacity: active ? [0.1, 0.3, 0.1] : 0.1
              }}
              transition={{ duration: 10, repeat: Infinity, delay: i * 2 }}
              className="absolute inset-0 border border-primary/40 rounded-full"
            />
          ))}
          <div className="absolute inset-[40%] bg-primary/20 rounded-full blur-xl" />
        </div>
      )}

      {type === "systems" && (
        <div className="grid grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                opacity: active ? [0.2, 0.6, 0.2] : 0.2,
                scale: active ? [1, 1.1, 1] : 1
              }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
              className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30"
            />
          ))}
        </div>
      )}

      {type === "value" && (
        <div className="relative w-48 h-48 flex items-center justify-center">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: active ? [0.2, 1.5] : 0.2,
                opacity: active ? [0.6, 0] : 0
              }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 1 }}
              className="absolute inset-0 border border-primary/30 rounded-full"
            />
          ))}
        </div>
      )}

      {type === "longevity" && (
        <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-white/5 rounded-full"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(234,224,200,0.8)]" />
          </motion.div>
          <div className="w-24 h-24 border border-primary/10 rounded-full" />
        </div>
      )}

      {type === "ecosystems" && (
        <svg viewBox="0 0 100 100" className="w-48 h-48 opacity-40">
          <motion.path
            d="M20,50 L50,20 L80,50 L50,80 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
            animate={{ pathLength: active ? [0, 1] : 0 }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary" />
        </svg>
      )}
    </div>
  );
}

function PhilosophyFinale() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <motion.p 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]) }}
          className="text-[10px] font-bold tracking-[1em] text-primary/40 uppercase mb-12"
        >
          Core Belief
        </motion.p>
        
        <div className="relative space-y-4 text-center">
          <FinaleLine progress={scrollYProgress} range={[0.1, 0.25, 0.35]} text="The Goal Is Not To Build" />
          <FinaleLine progress={scrollYProgress} range={[0.3, 0.45, 0.55]} text="More Products." className="text-white/40" />
          <FinaleLine progress={scrollYProgress} range={[0.5, 0.65, 0.75]} text="Build Better Systems." className="text-primary italic" />
          <FinaleLine progress={scrollYProgress} range={[0.7, 0.85, 0.95]} text="Create Meaningful Value." />
          
          <motion.div
            style={{ 
              opacity: useTransform(scrollYProgress, [0.9, 0.95], [0, 1]),
              scale: useTransform(scrollYProgress, [0.9, 0.95], [0.95, 1]),
              filter: useTransform(scrollYProgress, [0.9, 0.95], ["blur(10px)", "blur(0px)"])
            }}
            className="pt-20"
          >
            <h4 className="text-6xl md:text-8xl font-headline font-black text-white tracking-tighter">
              THAT IS AXORA.
            </h4>
            <div className="h-px w-24 bg-primary/30 mx-auto mt-8" />
          </motion.div>
        </div>

        {/* Atmospheric Ambient Glow */}
        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0.8, 0.95], [0, 0.15]),
            scale: useTransform(scrollYProgress, [0.8, 0.95], [0.8, 1.2])
          }}
          className="absolute inset-0 bg-primary blur-[150px] rounded-full pointer-events-none -z-10" 
        />
      </div>
    </div>
  );
}

function FinaleLine({ progress, range, text, className }: { progress: any, range: [number, number, number], text: string, className?: string }) {
  const opacity = useTransform(progress, range, [0, 1, 0.2]);
  const y = useTransform(progress, range, [20, 0, -20]);
  const blur = useTransform(progress, [range[0], range[1]], [10, 0]);

  return (
    <motion.h3 
      style={{ opacity, y, filter: useTransform(blur, b => `blur(${b}px)`) }}
      className={cn("text-3xl md:text-6xl font-headline font-bold text-white tracking-tight", className)}
    >
      {text}
    </motion.h3>
  );
}
