
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
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
  const storyRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress: mainProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end center"],
  });

  const isVisible = useInView(containerRef, { margin: "-10% 0px -10% 0px" });

  const progressFill = useSpring(mainProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="philosophy" ref={containerRef} className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />

      {/* MANIFESTO RAIL (Desktop) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-12 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex items-center gap-10"
          >
            <div className="relative w-px h-96 bg-white/5">
              <motion.div 
                style={{ height: useTransform(progressFill, [0, 0.8], ["0%", "100%"]) }}
                className="absolute top-0 left-0 w-full bg-primary origin-top shadow-[0_0_15px_rgba(234,224,200,0.5)]"
              />
            </div>

            <div className="flex flex-col gap-12">
              {PRINCIPLES.map((p, i) => (
                <motion.div
                  key={p.id}
                  animate={{ 
                    opacity: activeIndex === i ? 1 : 0.15,
                    scale: activeIndex === i ? 1.05 : 1,
                    x: activeIndex === i ? 8 : 0
                  }}
                  className="group cursor-default"
                >
                  <p className="text-[10px] font-mono font-bold text-primary mb-1">{p.id}</p>
                  <p className={cn(
                    "text-[9px] font-bold tracking-[0.5em] uppercase transition-all duration-500",
                    activeIndex === i ? "text-white" : "text-[#536878]"
                  )}>
                    {p.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MANIFESTO PILL */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] lg:hidden"
          >
            <div className="glass px-8 py-4 rounded-full border-white/10 flex items-center gap-6 backdrop-blur-2xl">
              <span className="text-[10px] font-mono font-bold text-primary">
                0{activeIndex + 1} / 05
              </span>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-white uppercase">
                {PRINCIPLES[activeIndex].label}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1440px] mx-auto px-6">
        {/* Intro Header */}
        <div className="min-h-screen flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <p className="text-[11px] font-bold tracking-[1.2em] text-primary/30 uppercase">FOUNDER PHILOSOPHY</p>
            <h2 className="text-5xl md:text-8xl lg:text-[clamp(4rem,8vw,7.5rem)] font-headline font-black tracking-tighter text-white leading-[0.85]">
              Principles Over <br />
              <span className="text-primary italic font-medium">Shortcuts.</span>
            </h2>
          </motion.div>
        </div>

        {/* Presentation Chapters */}
        <div className="space-y-32 pb-32">
          {PRINCIPLES.map((principle, idx) => (
            <PrincipleChapter 
              key={idx} 
              principle={principle} 
              idx={idx} 
              onActive={() => setActiveIndex(idx)}
            />
          ))}
        </div>

        {/* FINAL STORYTELLING SEQUENCE */}
        <div ref={storyRef} className="min-h-[200vh] flex flex-col items-center justify-center text-center relative px-6">
          <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
            {/* Cinematic Background Dimming */}
            <motion.div 
              style={{ opacity: useTransform(storyProgress, [0.8, 0.98], [0, 0.4]) }}
              className="fixed inset-0 bg-black pointer-events-none z-0"
            />
            
            <div className="space-y-24 w-full max-w-5xl mx-auto relative z-10 flex flex-col items-center justify-center">
               <StoryLine progress={storyProgress} range={[0, 0.12, 0.22]} text="Most companies build products." />
               <StoryLine progress={storyProgress} range={[0.22, 0.34, 0.44]} text="We build systems." className="text-primary italic" />
               <StoryLine progress={storyProgress} range={[0.44, 0.56, 0.66]} text="Systems create ecosystems." />
               <StoryLine progress={storyProgress} range={[0.66, 0.78, 0.88]} text="Ecosystems create lasting value." />
               
               <motion.div
                  style={{ 
                    opacity: useTransform(storyProgress, [0.88, 0.96], [0, 1]),
                    y: useTransform(storyProgress, [0.88, 0.96], [30, 0]),
                    filter: useTransform(storyProgress, [0.88, 0.94, 0.96], ["blur(30px)", "blur(15px)", "blur(0px)"])
                  }}
                  className="pt-24 space-y-12"
               >
                  <div className="h-px w-32 bg-primary/20 mx-auto" />
                  <div className="relative group">
                    <motion.div 
                      animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" 
                    />
                    <h4 className="relative text-6xl md:text-9xl font-headline font-black text-white tracking-tighter italic drop-shadow-[0_0_40px_rgba(234,224,200,0.15)]">
                      That is Axora.
                    </h4>
                  </div>
                  <p className="text-[11px] font-bold tracking-[1.2em] text-primary/40 uppercase">A Product Venture Studio</p>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryLine({ progress, range, text, className }: { progress: any, range: [number, number, number], text: string, className?: string }) {
  const opacity = useTransform(progress, range, [0, 1, 0.25]);
  const y = useTransform(progress, range, [40, 0, -30]);
  const blurValue = useTransform(progress, [range[0], range[1], range[1] + 0.001, range[2]], ["24px", "0px", "0px", "0px"]);

  return (
    <motion.p 
      style={{ 
        opacity, 
        y, 
        filter: useTransform(blurValue, (v) => `blur(${v})`),
        WebkitFilter: useTransform(blurValue, (v) => `blur(${v})`)
      }}
      className={cn(
        "text-3xl md:text-6xl font-light text-[#EAE0C8] tracking-tight leading-tight select-none",
        className
      )}
    >
      {text}
    </motion.p>
  );
}

function PrincipleChapter({ principle, idx, onActive }: { principle: any, idx: number, onActive: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  
  useEffect(() => {
    if (isInView) {
      onActive();
    }
  }, [isInView, onActive]);

  const isRight = idx % 2 === 0;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const numberY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={cn(
        "relative flex flex-col lg:flex-row items-center justify-center gap-24 lg:gap-40 min-h-[110vh] py-24",
        !isRight && "lg:flex-row-reverse"
      )}
    >
      {/* Decorative Atmospheric Number */}
      <motion.div 
        style={{ y: numberY }}
        className={cn(
          "absolute pointer-events-none select-none z-0 transition-opacity duration-1000",
          isInView ? "opacity-[0.035]" : "opacity-0",
          isRight ? "left-0" : "right-0"
        )}
      >
        <span className="text-[15rem] lg:text-[clamp(15rem,25vw,30rem)] font-headline font-black text-white tracking-tighter block leading-none">
          {principle.id}
        </span>
      </motion.div>

      {/* Content Column */}
      <div className="flex-1 space-y-16 relative z-10 w-full flex flex-col justify-center">
        <div className={cn("space-y-10 max-w-2xl", isRight ? "lg:mr-auto" : "lg:ml-auto")}>
          <div className="space-y-8">
            <div className={cn("flex items-center gap-8", !isRight && "flex-row-reverse")}>
               <span className="text-[13px] font-mono font-bold text-primary/30 tracking-[0.5em]">{principle.id}</span>
               <div className="h-px w-12 bg-primary/10" />
               <span className="text-[11px] font-bold tracking-[0.8em] text-primary/60 uppercase">
                 {principle.label}
               </span>
            </div>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-headline font-black text-white tracking-tighter leading-[0.9]">
              {principle.title}
            </h3>
          </div>

          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-light text-[#EAE0C8]/70 italic leading-tight">
              {principle.sub}
            </p>
            <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-xl">
              {principle.body}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Column */}
      <div className="flex-1 w-full flex items-center justify-center relative">
        <div className="w-full max-w-lg aspect-square relative flex items-center justify-center group">
           <VisualEngine type={principle.visual} active={isInView} />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.04),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
      </div>
    </motion.div>
  );
}

function VisualEngine({ type, active }: { type: string, active: boolean }) {
  return (
    <div className="relative w-full h-full glass rounded-[4rem] border-white/5 overflow-hidden transition-all duration-1000 hover:border-white/10 shadow-2xl">
      <div className="absolute inset-0 flex items-center justify-center scale-90">
        {type === "clarity" && (
          <div className="relative w-64 h-64 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: active ? [1, 1.2, 1] : 1,
                  rotate: active ? (i * 120 + 360) : (i * 120),
                  opacity: active ? [0.1, 0.3, 0.1] : 0.1
                }}
                transition={{ duration: 15, repeat: Infinity, delay: i * 3, ease: "linear" }}
                className="absolute inset-0 border border-primary/30 rounded-full"
              />
            ))}
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-3 h-3 bg-primary rounded-full shadow-[0_0_30px_rgba(234,224,200,0.8)]" 
            />
          </div>
        )}

        {type === "systems" && (
          <div className="grid grid-cols-3 gap-12">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  opacity: active ? [0.15, 0.45, 0.15] : 0.1,
                  scale: active ? [1, 1.15, 1] : 1
                }}
                transition={{ duration: 6, repeat: Infinity, delay: i * 0.4 }}
                className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/30"
              />
            ))}
          </div>
        )}

        {type === "value" && (
          <div className="relative w-64 h-64">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: active ? [0.2, 2] : 0.2,
                  opacity: active ? [0.8, 0] : 0
                }}
                transition={{ duration: 8, repeat: Infinity, delay: i * 1.5, ease: "easeOut" }}
                className="absolute inset-0 border border-primary/25 rounded-full"
              />
            ))}
          </div>
        )}

        {type === "longevity" && (
          <div className="relative w-64 h-64 border border-white/5 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ rotate: active ? 360 : 0 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary/70 rounded-full" />
            </motion.div>
            <div className="w-40 h-40 border border-primary/15 rounded-full flex items-center justify-center">
               <motion.div 
                 animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                 transition={{ duration: 10, repeat: Infinity }}
                 className="w-3 h-3 bg-primary/50 rounded-full" 
               />
            </div>
          </div>
        )}

        {type === "ecosystems" && (
          <div className="relative w-64 h-64">
             <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
               <motion.path
                 d="M20,50 L50,20 L80,50 L50,80 Z"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="0.8"
                 className="text-primary"
                 animate={{ pathLength: active ? [0, 1] : 0 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               />
               <motion.circle 
                 cx="50" cy="50" r="15" 
                 stroke="currentColor" 
                 fill="none" 
                 className="text-primary" 
                 animate={{ r: [15, 20, 15], strokeWidth: [0.8, 1.5, 0.8] }} 
                 transition={{ duration: 8, repeat: Infinity }} 
               />
             </svg>
          </div>
        )}
      </div>
    </div>
  );
}
