
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const PRINCIPLES = [
  {
    id: "01",
    label: "CLARITY",
    title: "Solve Problems, Not Trends.",
    body: "Technology changes constantly, but meaningful problems remain. We focus on building solutions that stay valuable long after trends disappear.",
    visual: "clarity"
  },
  {
    id: "02",
    label: "SYSTEMS",
    title: "Systems Create Ecosystems.",
    body: "Strong systems create consistent outcomes. We design modular frameworks that scale, compounding value while avoiding technical debt.",
    visual: "systems"
  },
  {
    id: "03",
    label: "VALUE",
    title: "Utility Before Attention.",
    body: "Impact is measured by utility, not engagement metrics. Every feature must fundamentally improve the human experience.",
    visual: "value"
  },
  {
    id: "04",
    label: "LONGEVITY",
    title: "Build For The Next Decade.",
    body: "In a world of fast software, we architect digital products that remain relevant as user needs evolve over years, not months.",
    visual: "longevity"
  },
  {
    id: "05",
    label: "ECOSYSTEMS",
    title: "Connected Products Compound Value.",
    body: "Interconnectivity is a feature. Every product strengthens the larger vision, working together to simplify the digital life.",
    visual: "ecosystems"
  },
];

export function FounderPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isVisible = useInView(containerRef, { margin: "-20% 0px -20% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="philosophy" ref={containerRef} className="relative bg-background overflow-x-hidden">
      {/* 1. CINEMATIC HERO */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 sticky top-0 z-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <p className="text-[10px] font-bold tracking-[0.8em] text-primary/30 uppercase">Institutional Framework</p>
          <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-headline font-black tracking-tighter text-white uppercase leading-[0.85]">
            FOUNDER <br />
            <span className="text-primary italic font-medium">PHILOSOPHY.</span>
          </h2>
          <div className="pt-12">
             <p className="text-xl md:text-3xl text-white/40 font-light italic tracking-tight">"Principles Over Shortcuts."</p>
          </div>
        </motion.div>
      </div>

      {/* 2. THE CHAPTERS */}
      <div className="relative z-10 space-y-[20vh] pb-[20vh]">
        {PRINCIPLES.map((principle, idx) => (
          <PrincipleChapter 
            key={idx} 
            principle={principle} 
            idx={idx} 
            onActive={() => setActiveIndex(idx)}
          />
        ))}
      </div>

      {/* 3. CINEMATIC FINALE */}
      <PhilosophyFinale />

      {/* 4. FLOATING NAVIGATOR */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200]"
          >
            <div className="glass px-6 md:px-8 py-3.5 rounded-full border-white/5 flex items-center gap-6 md:gap-8 shadow-2xl backdrop-blur-3xl">
              {PRINCIPLES.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => {
                    const el = document.getElementById(`principle-${p.id}`);
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="group flex items-center gap-3"
                >
                  <span className={cn(
                    "text-[9px] font-bold tracking-widest transition-all duration-500",
                    activeIndex === i ? "text-primary" : "text-white/20 group-hover:text-white/40"
                  )}>
                    {p.label}
                  </span>
                  {i < PRINCIPLES.length - 1 && (
                    <div className="w-1 h-1 rounded-full bg-white/5" />
                  )}
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

  const isEven = idx % 2 === 0;

  return (
    <div
      id={`principle-${principle.id}`}
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center py-32 px-6"
    >
      {/* Background Watermark */}
      <div className={cn(
        "absolute pointer-events-none select-none z-0 opacity-[0.02]",
        isEven ? "right-10" : "left-10"
      )}>
        <span className="text-[20rem] md:text-[30rem] font-headline font-black text-white leading-none">
          {principle.id}
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10">
        <div className={cn("space-y-10", !isEven && "lg:order-2")}>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
               <span className="text-[12px] font-mono font-bold text-primary/40 tracking-[0.4em]">{principle.id}</span>
               <div className="h-px w-10 bg-primary/20" />
               <span className="text-[10px] font-bold tracking-[0.6em] text-primary/70 uppercase">
                 {principle.label}
               </span>
            </div>
            <h3 className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-white leading-[0.95] max-w-xl">
              {principle.title}
            </h3>
            <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-lg">
              {principle.body}
            </p>
          </div>
        </div>

        <div className={cn("flex justify-center", !isEven && "lg:order-1")}>
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
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Atmosphere */}
        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0.6, 0.9], [0, 0.2]),
            scale: useTransform(scrollYProgress, [0.6, 1], [0.8, 1.2])
          }}
          className="absolute inset-0 bg-primary blur-[150px] rounded-full pointer-events-none -z-10" 
        />
        
        <div className="relative space-y-16 text-center w-full max-w-5xl">
          <motion.p 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]) }}
            className="text-[10px] font-bold tracking-[1em] text-primary/40 uppercase mb-8"
          >
            Core Belief
          </motion.p>
          
          <div className="space-y-12">
            <StoryLine 
              progress={scrollYProgress} 
              range={[0.1, 0.25, 0.35]} 
              text="Technology changes." 
              subtext="Principles endure." 
            />
            <StoryLine 
              progress={scrollYProgress} 
              range={[0.4, 0.55, 0.65]} 
              text="Products come and go." 
              subtext="Systems compound." 
              className="text-white/40"
            />
            <StoryLine 
              progress={scrollYProgress} 
              range={[0.7, 0.85, 0.95]} 
              text="Attention is temporary." 
              subtext="Impact is permanent." 
              className="text-primary"
            />
          </div>
          
          <motion.div
            style={{ 
              opacity: useTransform(scrollYProgress, [0.88, 0.95], [0, 1]),
              scale: useTransform(scrollYProgress, [0.88, 0.95], [0.95, 1]),
              filter: useTransform(scrollYProgress, [0.88, 0.95], ["blur(20px)", "blur(0px)"])
            }}
            className="pt-24"
          >
            <h4 className="text-6xl md:text-9xl font-headline font-black text-white tracking-tighter drop-shadow-[0_0_30px_rgba(234,224,200,0.3)]">
              THAT IS AXORA.
            </h4>
            <div className="h-px w-24 bg-primary/30 mx-auto mt-12" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function StoryLine({ progress, range, text, subtext, className }: { progress: any, range: [number, number, number], text: string, subtext: string, className?: string }) {
  const opacity = useTransform(progress, range, [0, 1, 0.2]);
  const y = useTransform(progress, range, [20, 0, -20]);
  const blurValue = useTransform(progress, [range[0], range[1]], [20, 0]);
  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.div 
      style={{ opacity, y, filter: blur }}
      className="space-y-2"
    >
      <h3 className={cn("text-2xl md:text-5xl font-headline font-bold text-white tracking-tight", className)}>
        {text}
      </h3>
      <p className="text-lg md:text-2xl text-white/20 font-light italic">{subtext}</p>
    </motion.div>
  );
}
