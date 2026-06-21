
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useSpring, useTransform, AnimatePresence, MotionValue } from "framer-motion";
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
    offset: ["start start", "end end"],
  });

  const isVisible = useInView(containerRef, { margin: "-20% 0px -20% 0px" });

  const progressFill = useSpring(mainProgress, { stiffness: 100, damping: 30 });
  const railProgressHeight = useTransform(progressFill, [0, 0.8], ["0%", "100%"]);

  // Finale Transforms declared at top level
  const finaleOpacity = useTransform(storyProgress, [0.88, 0.95, 1], [0, 1, 1]);
  const finaleY = useTransform(storyProgress, [0.88, 0.95], [40, 0]);
  const finaleBlur = useTransform(storyProgress, [0.88, 0.93, 0.95], [30, 15, 0]);
  const finaleFilter = useTransform(finaleBlur, (v) => `blur(${v}px)`);
  const theatricalDim = useTransform(storyProgress, [0.8, 1], [0, 0.6]);

  return (
    <section id="philosophy" ref={containerRef} className="relative bg-background overflow-x-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />

      {/* INSTITUTIONAL MANIFESTO RAIL (Fixed Desktop) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-12 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex items-center gap-12"
          >
            <div className="relative w-px h-80 bg-white/5">
              <motion.div 
                style={{ height: railProgressHeight }}
                className="absolute top-0 left-0 w-full bg-primary origin-top shadow-[0_0_20px_rgba(234,224,200,0.4)]"
              />
            </div>

            <div className="flex flex-col gap-10">
              {PRINCIPLES.map((p, i) => (
                <motion.div
                  key={p.id}
                  animate={{ 
                    opacity: activeIndex === i ? 1 : 0.15,
                    scale: activeIndex === i ? 1.05 : 1,
                    x: activeIndex === i ? 10 : 0
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group cursor-default"
                >
                  <p className="text-[10px] font-mono font-bold text-primary mb-1">{p.id}</p>
                  <p className={cn(
                    "text-[9px] font-bold tracking-[0.6em] uppercase transition-all duration-500",
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
            <div className="glass px-10 py-5 rounded-full border-white/10 flex items-center gap-8 backdrop-blur-3xl bg-[#0F1317]/80">
              <span className="text-[11px] font-mono font-bold text-primary">
                0{activeIndex + 1} / 05
              </span>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-[10px] font-bold tracking-[0.5em] text-white uppercase">
                {PRINCIPLES[activeIndex].label}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1440px] mx-auto">
        {/* Intro Header */}
        <div className="min-h-screen flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <p className="text-[11px] font-bold tracking-[1.4em] text-primary/30 uppercase">FOUNDER PHILOSOPHY</p>
            <h2 className="text-6xl md:text-8xl lg:text-[clamp(4.5rem,9vw,8.5rem)] font-headline font-black tracking-tighter text-white leading-[0.85]">
              Principles Over <br />
              <span className="text-primary italic font-medium">Shortcuts.</span>
            </h2>
            <div className="w-px h-24 bg-gradient-to-b from-primary/30 to-transparent mx-auto mt-12" />
          </motion.div>
        </div>

        {/* Chapters: Presentation Slide Mode */}
        <div className="relative space-y-0">
          {PRINCIPLES.map((principle, idx) => (
            <PrincipleChapter 
              key={idx} 
              principle={principle} 
              idx={idx} 
              onActive={() => setActiveIndex(idx)}
            />
          ))}
        </div>

        {/* FINAL CINEMATIC STORYTELLING SEQUENCE: Dead-Centered */}
        <div ref={storyRef} className="relative h-[300vh]">
          <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <motion.div 
              style={{ 
                backgroundColor: "#000000",
                opacity: theatricalDim
              }}
              className="absolute inset-0 pointer-events-none z-0"
            />
            
            <div className="space-y-24 w-full max-w-6xl mx-auto relative z-10 flex flex-col items-center justify-center px-6 h-full">
               <StoryLine progress={storyProgress} range={[0.0, 0.15, 0.25]} text="Most companies build products." />
               <StoryLine progress={storyProgress} range={[0.25, 0.40, 0.50]} text="We build systems." className="text-primary italic font-medium" />
               <StoryLine progress={storyProgress} range={[0.50, 0.65, 0.75]} text="Systems create ecosystems." />
               <StoryLine progress={storyProgress} range={[0.75, 0.85, 0.92]} text="Ecosystems create lasting value." />
               
               <motion.div
                  style={{ 
                    opacity: finaleOpacity,
                    y: finaleY,
                    filter: finaleFilter
                  }}
                  className="pt-32 space-y-16 flex flex-col items-center"
               >
                  <div className="h-px w-48 bg-primary/20" />
                  <div className="relative">
                    <motion.div 
                      animate={{ 
                        opacity: [0.1, 0.3, 0.1], 
                        scale: [1, 1.1, 1] 
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-[-60px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" 
                    />
                    <h4 className="relative text-7xl md:text-[10rem] font-headline font-black text-white tracking-tighter italic">
                      That is Axora.
                    </h4>
                  </div>
                  <p className="text-[12px] font-bold tracking-[1.6em] text-primary/40 uppercase">A Product Venture Studio</p>
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
  const y = useTransform(progress, range, [40, 0, -20]);
  const blurValue = useTransform(progress, [range[0], range[1], range[2]], [24, 0, 0]);
  const filterStyle = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.p 
      style={{ 
        opacity, 
        y, 
        filter: filterStyle,
      }}
      className={cn(
        "text-4xl md:text-7xl font-light text-[#EAE0C8] tracking-tight leading-tight select-none text-center",
        className
      )}
    >
      {text}
    </motion.p>
  );
}

function PrincipleChapter({ principle, idx, onActive }: { principle: any, idx: number, onActive: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  
  useEffect(() => {
    if (isInView) {
      onActive();
    }
  }, [isInView, onActive]);

  const isRight = idx % 2 === 0;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  // Chapter transforms declared at top level
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="relative min-h-[110vh] flex items-center justify-center py-20 px-6 overflow-hidden bg-background"
    >
      {/* Cinematic Watermark Number */}
      <div className={cn(
        "absolute pointer-events-none select-none z-0 opacity-[0.03] transition-all duration-1000",
        isRight ? "left-0" : "right-0"
      )}>
        <span className="text-[20rem] lg:text-[clamp(18rem,35vw,40rem)] font-headline font-black text-white tracking-tighter block leading-none">
          {principle.id}
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 lg:gap-32 items-center relative z-10">
        <div className={cn("space-y-12", !isRight && "lg:order-2")}>
          <div className="space-y-10">
            <div className="flex items-center gap-6">
               <span className="text-[14px] font-mono font-bold text-primary/40 tracking-[0.5em]">{principle.id}</span>
               <div className="h-px w-16 bg-primary/20" />
               <span className="text-[11px] font-bold tracking-[0.8em] text-primary/70 uppercase">
                 {principle.label}
               </span>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-headline font-black text-white tracking-tighter leading-[0.9]">
                {principle.title}
              </h3>
              <p className="text-2xl md:text-4xl font-light text-[#EAE0C8]/80 italic leading-tight max-w-2xl">
                {principle.sub}
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-xl">
            {principle.body}
          </p>
        </div>

        <div className={cn("flex justify-center items-center", !isRight && "lg:order-1")}>
          <div className="w-full max-w-md aspect-square relative group">
             <VisualEngine type={principle.visual} active={isInView} />
             <div className="absolute inset-[-40px] bg-primary/[0.03] blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function VisualEngine({ type, active }: { type: string, active: boolean }) {
  return (
    <div className="relative w-full h-full glass rounded-[4.5rem] border-white/5 overflow-hidden transition-all duration-1000 hover:border-white/15 shadow-2xl flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative scale-110">
        {type === "clarity" && (
          <div className="relative w-56 h-56 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: active ? [1, 1.25, 1] : 1,
                  rotate: active ? (i * 120 + 360) : (i * 120),
                  opacity: active ? [0.1, 0.35, 0.1] : 0.1
                }}
                transition={{ duration: 12, repeat: Infinity, delay: i * 2, ease: "linear" }}
                className="absolute inset-0 border border-primary/40 rounded-full"
              />
            ))}
            <motion.div 
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.35, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="w-3.5 h-3.5 bg-primary rounded-full shadow-[0_0_40px_rgba(234,224,200,0.9)]" 
            />
          </div>
        )}

        {type === "systems" && (
          <div className="grid grid-cols-3 gap-10">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  opacity: active ? [0.15, 0.5, 0.15] : 0.1,
                  scale: active ? [1, 1.2, 1] : 1
                }}
                transition={{ duration: 6, repeat: Infinity, delay: i * 0.3 }}
                className="w-10 h-10 rounded-2xl bg-primary/15 border border-primary/40"
              />
            ))}
          </div>
        )}

        {type === "value" && (
          <div className="relative w-64 h-64 flex items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: active ? [0.2, 2.2] : 0.2,
                  opacity: active ? [0.85, 0] : 0
                }}
                transition={{ duration: 10, repeat: Infinity, delay: i * 2, ease: "easeOut" }}
                className="absolute inset-0 border border-primary/30 rounded-full"
              />
            ))}
            <div className="w-4 h-4 bg-primary/20 rounded-full blur-sm" />
          </div>
        )}

        {type === "longevity" && (
          <div className="relative w-64 h-64 border border-white/5 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ rotate: active ? 360 : 0 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary/80 rounded-full shadow-[0_0_20px_rgba(234,224,200,0.5)]" />
            </motion.div>
            <div className="w-44 h-44 border border-primary/10 rounded-full flex items-center justify-center">
               <motion.div 
                 animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                 transition={{ duration: 12, repeat: Infinity }}
                 className="w-4 h-4 bg-primary/60 rounded-full" 
               />
            </div>
          </div>
        )}

        {type === "ecosystems" && (
          <div className="relative w-64 h-64 flex items-center justify-center">
             <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
               <motion.path
                 d="M20,50 L50,20 L80,50 L50,80 Z"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="0.8"
                 className="text-primary"
                 animate={{ pathLength: active ? [0, 1] : 0 }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
               />
               <motion.circle 
                 cx="50" cy="50" r="18" 
                 stroke="currentColor" 
                 fill="none" 
                 className="text-primary" 
                 animate={{ r: [18, 24, 18], strokeWidth: [0.8, 1.6, 0.8] }} 
                 transition={{ duration: 10, repeat: Infinity }} 
               />
               <motion.circle cx="20" cy="50" r="2" fill="currentColor" className="text-primary" />
               <motion.circle cx="50" cy="20" r="2" fill="currentColor" className="text-primary" />
               <motion.circle cx="80" cy="50" r="2" fill="currentColor" className="text-primary" />
               <motion.circle cx="50" cy="80" r="2" fill="currentColor" className="text-primary" />
             </svg>
          </div>
        )}
      </div>
    </div>
  );
}
