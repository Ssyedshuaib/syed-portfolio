
"use client";

import React, { useRef } from "react";
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
  
  const { scrollYProgress: mainProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end center"],
  });

  const isVisible = useInView(containerRef, { margin: "-10% 0px -10% 0px" });

  return (
    <section id="philosophy" ref={containerRef} className="relative bg-background overflow-hidden pb-32">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />

      {/* FIXED BOTTOM NAVIGATOR */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] hidden lg:block"
          >
            <div className="glass px-10 py-5 rounded-full border-white/5 flex items-center gap-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-3xl">
              {PRINCIPLES.map((p, i) => (
                <PrincipleIndicator key={p.id} principle={p} index={i} progress={mainProgress} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1440px] mx-auto px-6">
        {/* Intro Header */}
        <div className="py-64 space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <p className="text-[10px] font-bold tracking-[1em] text-primary/30 uppercase">FOUNDER PHILOSOPHY</p>
            <h2 className="text-4xl md:text-7xl lg:text-[clamp(3rem,6vw,5.5rem)] font-headline font-black tracking-tighter text-white leading-[0.85]">
              Principles Over <br />
              <span className="text-primary italic font-medium">Shortcuts.</span>
            </h2>
          </motion.div>
        </div>

        {/* Alternating Principles */}
        <div className="space-y-64 lg:space-y-[45vh] pb-64">
          {PRINCIPLES.map((principle, idx) => (
            <PrincipleChapter key={idx} principle={principle} idx={idx} />
          ))}
        </div>

        {/* FINAL STORYTELLING SEQUENCE */}
        <div ref={storyRef} className="min-h-screen flex flex-col items-center justify-center text-center relative px-4 py-32">
          {/* Cinematic Background Dimming */}
          <motion.div 
            style={{ opacity: useTransform(storyProgress, [0.8, 0.98], [0, 0.4]) }}
            className="fixed inset-0 bg-black pointer-events-none z-0"
          />
          
          <div className="space-y-20 w-full max-w-4xl mx-auto relative z-10">
             <div className="flex flex-col items-center gap-16">
                <StoryLine progress={storyProgress} range={[0, 0.15, 0.25]} text="Most companies build products." />
                <StoryLine progress={storyProgress} range={[0.25, 0.4, 0.5]} text="We build systems." className="text-primary italic" />
                <StoryLine progress={storyProgress} range={[0.5, 0.65, 0.75]} text="Systems create ecosystems." />
                <StoryLine progress={storyProgress} range={[0.75, 0.85, 0.92]} text="Ecosystems create lasting value." />
                
                <motion.div
                   style={{ 
                     opacity: useTransform(storyProgress, [0.9, 0.98], [0, 1]),
                     y: useTransform(storyProgress, [0.9, 0.98], [20, 0]),
                     filter: useTransform(storyProgress, [0.9, 0.96, 0.98], ["blur(20px)", "blur(10px)", "blur(0px)"])
                   }}
                   className="pt-24 space-y-12"
                >
                   <div className="h-px w-24 bg-primary/20 mx-auto" />
                   <div className="relative group">
                     <motion.div 
                       animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.02, 1] }}
                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                       className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" 
                     />
                     <h4 className="relative text-5xl md:text-9xl font-headline font-black text-white tracking-tighter italic drop-shadow-[0_0_30px_rgba(234,224,200,0.15)]">
                       That is Axora.
                     </h4>
                   </div>
                   <p className="text-[10px] font-bold tracking-[1em] text-primary/40 uppercase">A Product Venture Studio</p>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrincipleIndicator({ principle, index, progress }: { principle: any, index: number, progress: any }) {
  const start = index * (1 / PRINCIPLES.length);
  const end = (index + 1) * (1 / PRINCIPLES.length);
  
  // Highlight indicator when the scroll is within the range of this principle
  const isActive = useTransform(progress, [start - 0.05, start, end, end + 0.05], [0.3, 1, 1, 0.3]);
  const scale = useTransform(progress, [start - 0.05, start, end, end + 0.05], [0.95, 1.05, 1.05, 0.95]);

  return (
    <motion.div 
      style={{ opacity: isActive, scale }} 
      className="flex flex-col items-center gap-2 group cursor-default min-w-[60px]"
    >
      <span className="text-[10px] font-mono font-bold text-primary">{principle.id}</span>
      <span className="text-[8px] font-bold tracking-[0.2em] text-white uppercase opacity-60 group-hover:opacity-100 transition-opacity">
        {principle.label}
      </span>
      <motion.div 
        animate={{ height: isActive.get() > 0.8 ? "4px" : "0px" }}
        className="w-1 bg-primary rounded-full mt-1"
      />
    </motion.div>
  );
}

function StoryLine({ progress, range, text, className }: { progress: any, range: [number, number, number], text: string, className?: string }) {
  // Use a strictly mapped scale to guarantee blur(0px) for the active and previous states
  const opacity = useTransform(progress, range, [0, 1, 0.25]);
  const y = useTransform(progress, range, [30, 0, -20]);
  
  // High-fidelity blur logic: Ensure the 0px state is held for all indices after activation
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
        "text-3xl md:text-5xl font-light text-[#EAE0C8] tracking-tight leading-tight select-none",
        className
      )}
    >
      {text}
    </motion.p>
  );
}

function PrincipleChapter({ principle, idx }: { principle: any, idx: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const isRight = idx % 2 === 0;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const numberY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={cn(
        "relative flex flex-col lg:flex-row items-center gap-16 lg:gap-32 min-h-[70vh]",
        !isRight && "lg:flex-row-reverse"
      )}
    >
      {/* Decorative Atmospheric Number */}
      <motion.div 
        style={{ y: numberY }}
        className={cn(
          "absolute -top-24 lg:-top-32 pointer-events-none select-none z-0 transition-opacity duration-1000",
          isInView ? "opacity-[0.03]" : "opacity-0",
          isRight ? "left-0 lg:-left-20" : "right-0 lg:-right-20"
        )}
      >
        <span className="text-[12rem] lg:text-[clamp(12rem,20vw,24rem)] font-headline font-black text-white tracking-tighter block leading-none">
          {principle.id}
        </span>
      </motion.div>

      {/* Content Column */}
      <div className="flex-1 space-y-12 relative z-10 w-full">
        <div className={cn("space-y-8 max-w-xl", isRight ? "lg:mr-auto" : "lg:ml-auto")}>
          <div className="space-y-6">
            <div className={cn("flex items-center gap-6", !isRight && "flex-row-reverse")}>
               <span className="text-[11px] font-mono font-bold text-primary/30 tracking-[0.4em]">{principle.id}</span>
               <div className="h-px w-8 bg-primary/10" />
               <span className="text-[10px] font-bold tracking-[0.6em] text-primary/60 uppercase">
                 {principle.label}
               </span>
            </div>
            <h3 className="text-4xl md:text-6xl font-headline font-black text-white tracking-tighter leading-[0.95]">
              {principle.title}
            </h3>
          </div>

          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-light text-[#EAE0C8]/70 italic leading-tight">
              {principle.sub}
            </p>
            <p className="text-base md:text-lg text-white/40 font-light leading-relaxed max-w-lg">
              {principle.body}
            </p>
          </div>
          
          <div className="pt-8">
             <div className="h-px w-12 bg-white/5" />
          </div>
        </div>
      </div>

      {/* Visual Column */}
      <div className="flex-1 w-full flex items-center justify-center relative">
        <div className="w-full max-w-md aspect-square relative flex items-center justify-center group">
           <VisualEngine type={principle.visual} active={isInView} />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
      </div>
    </motion.div>
  );
}

function VisualEngine({ type, active }: { type: string, active: boolean }) {
  return (
    <div className="relative w-full h-full glass rounded-[3.5rem] border-white/5 overflow-hidden transition-all duration-1000 hover:border-white/10">
      <div className="absolute inset-0 flex items-center justify-center scale-75 lg:scale-90">
        {type === "clarity" && (
          <div className="relative w-48 h-48 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: active ? [1, 1.15, 1] : 1,
                  rotate: active ? (i * 120 + 360) : (i * 120),
                  opacity: active ? [0.1, 0.25, 0.1] : 0.1
                }}
                transition={{ duration: 12, repeat: Infinity, delay: i * 2, ease: "linear" }}
                className="absolute inset-0 border border-primary/30 rounded-full"
              />
            ))}
            <motion.div 
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-2 h-2 bg-primary rounded-full shadow-[0_0_20px_rgba(234,224,200,0.8)]" 
            />
          </div>
        )}

        {type === "systems" && (
          <div className="grid grid-cols-3 gap-8">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  opacity: active ? [0.1, 0.35, 0.1] : 0.1,
                  scale: active ? [1, 1.1, 1] : 1
                }}
                transition={{ duration: 5, repeat: Infinity, delay: i * 0.5 }}
                className="w-5 h-5 rounded-lg bg-primary/15 border border-primary/30"
              />
            ))}
          </div>
        )}

        {type === "value" && (
          <div className="relative w-48 h-48">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: active ? [0.2, 1.8] : 0.2,
                  opacity: active ? [0.6, 0] : 0
                }}
                transition={{ duration: 6, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
                className="absolute inset-0 border border-primary/20 rounded-full"
              />
            ))}
          </div>
        )}

        {type === "longevity" && (
          <div className="relative w-48 h-48 border border-white/5 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ rotate: active ? 360 : 0 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary/60 rounded-full" />
            </motion.div>
            <div className="w-32 h-32 border border-primary/15 rounded-full flex items-center justify-center">
               <motion.div 
                 animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                 transition={{ duration: 8, repeat: Infinity }}
                 className="w-2 h-2 bg-primary/40 rounded-full" 
               />
            </div>
          </div>
        )}

        {type === "ecosystems" && (
          <div className="relative w-48 h-48">
             <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
               <motion.path
                 d="M20,50 L50,20 L80,50 L50,80 Z"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="0.5"
                 className="text-primary"
                 animate={{ pathLength: active ? [0, 1] : 0 }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               />
               <motion.circle 
                 cx="50" cy="50" r="12" 
                 stroke="currentColor" 
                 fill="none" 
                 className="text-primary" 
                 animate={{ r: [12, 15, 12], strokeWidth: [0.5, 1, 0.5] }} 
                 transition={{ duration: 6, repeat: Infinity }} 
               />
             </svg>
          </div>
        )}
      </div>
    </div>
  );
}
