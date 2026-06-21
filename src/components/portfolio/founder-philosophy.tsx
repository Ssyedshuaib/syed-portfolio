"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
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
  const principlesContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: principlesProgress } = useScroll({
    target: principlesContainerRef,
    offset: ["start center", "end end"],
  });

  const { scrollYProgress: closingProgress } = useScroll({
    target: closingRef,
    offset: ["start end", "end center"],
  });

  // Rail Visibility Logic: Visible only when principle sections are on screen
  const railOpacity = useTransform(
    [principlesProgress, closingProgress],
    ([prog, close]) => {
      const fadeIn = (prog as number) * 10;
      const fadeOut = 1 - (close as number) * 4;
      return Math.max(0, Math.min(1, fadeIn)) * Math.max(0, Math.min(1, fadeOut));
    }
  );

  const progressLine = useSpring(
    useTransform([principlesProgress, closingProgress], ([prog, close]) => {
      if ((close as number) > 0.1) return 1;
      return Math.min(1, prog as number);
    }),
    { stiffness: 80, damping: 25 }
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="philosophy" ref={containerRef} className="relative bg-background overflow-hidden pb-32 md:pb-48">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />

      {/* MANIFESTO PROGRESS RAIL (RESTORED & REFINED) */}
      <motion.div 
        style={{ opacity: railOpacity }}
        className="fixed left-8 md:left-24 top-1/2 -translate-y-1/2 flex flex-col items-center gap-10 z-[80] hidden lg:flex pointer-events-none"
      >
        <div className="text-[10px] font-bold tracking-[1em] text-primary/40 uppercase rotate-90 mb-20 whitespace-nowrap">
          Manifesto
        </div>
        
        <div className="relative h-80 w-[1px] bg-white/10 overflow-hidden rounded-full">
          <motion.div 
            style={{ scaleY: progressLine }}
            className="absolute top-0 left-0 w-full h-full bg-primary origin-top shadow-[0_0_20px_rgba(234,224,200,0.6)]"
          />
        </div>

        <div className="flex flex-col gap-8 mt-12">
          {PRINCIPLES.map((p, i) => (
            <PrincipleMarker key={p.id} id={p.id} index={i} progress={principlesProgress} />
          ))}
        </div>
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-6">
        <div className="py-48 space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-[11px] font-bold tracking-[1em] text-primary/40 uppercase">FOUNDER PHILOSOPHY</p>
            <h2 className="text-5xl md:text-8xl lg:text-[clamp(4rem,9vw,9.5rem)] font-headline font-black tracking-tighter text-white leading-[0.85]">
              The Principles <br />
              <span className="text-primary italic font-medium">Behind Axora.</span>
            </h2>
          </motion.div>
        </div>

        <div ref={principlesContainerRef} className="space-y-64 lg:space-y-[60vh]">
          {PRINCIPLES.map((principle, idx) => (
            <PrincipleChapter key={idx} principle={principle} idx={idx} />
          ))}
        </div>

        {/* FINAL MANIFESTO SEQUENCE (CINEMATIC REVEAL) */}
        <div ref={closingRef} className="min-h-[140vh] flex flex-col items-center justify-center text-center py-64 relative">
          <div className="flex flex-col items-center gap-24 w-full">
            <motion.div 
              style={{ opacity: useTransform(closingProgress, [0, 0.2], [0, 0.2]) }}
              className="h-px w-24 bg-primary/20" 
            />
            
            <div className="space-y-12 md:space-y-16 cursor-default w-full">
              <div className="overflow-hidden">
                <ManifestoLine text="The Goal" progress={closingProgress} range={[0.1, 0.35]} direction="top" mouseX={smoothMouseX} mouseY={smoothMouseY} />
              </div>
              <div className="overflow-hidden">
                <ManifestoLine text="Is Not To Build" progress={closingProgress} range={[0.25, 0.5]} direction="left" className="text-primary/20" isBackground mouseX={smoothMouseX} mouseY={smoothMouseY} />
              </div>
              <div className="overflow-hidden">
                <ManifestoLine text="More Products." progress={closingProgress} range={[0.35, 0.6]} direction="bottom" mouseX={smoothMouseX} mouseY={smoothMouseY} />
              </div>
              
              <div className="pt-32 space-y-12 md:space-y-16">
                <div className="overflow-hidden">
                  <ManifestoLine text="The Goal" progress={closingProgress} range={[0.5, 0.7]} direction="top" italic mouseX={smoothMouseX} mouseY={smoothMouseY} />
                </div>
                <div className="overflow-hidden">
                  <ManifestoLine text="Is To Build" progress={closingProgress} range={[0.6, 0.8]} direction="right" className="text-primary/20" noItalic isBackground mouseX={smoothMouseX} mouseY={smoothMouseY} />
                </div>
                <div className="overflow-hidden">
                  <ManifestoLine text="Better Systems." progress={closingProgress} range={[0.7, 0.9]} direction="bottom" italic mouseX={smoothMouseX} mouseY={smoothMouseY} />
                </div>
              </div>
            </div>
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
    <motion.span style={{ opacity, scale }} className="text-[12px] font-mono font-bold text-primary transition-shadow duration-500">
      {id}
    </motion.span>
  );
}

function ManifestoLine({ text, progress, range, direction, className, italic, noItalic, isBackground, mouseX, mouseY }: any) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [direction === 'top' ? -40 : (direction === 'bottom' ? 40 : 0), 0]);
  const x = useTransform(progress, range, [direction === 'left' ? -40 : (direction === 'right' ? 40 : 0), 0]);
  const blur = useTransform(progress, range, [15, 0]);
  
  const mouseShiftX = useTransform(mouseX, [-0.5, 0.5], [isBackground ? 5 : -5, isBackground ? -5 : 5]);
  const mouseShiftY = useTransform(mouseY, [-0.5, 0.5], [isBackground ? 5 : -5, isBackground ? -5 : 5]);

  return (
    <motion.div
      style={{ opacity, y, x, filter: useTransform(blur, (v) => `blur(${v}px)`) }}
      className={cn(
        "text-4xl sm:text-6xl md:text-8xl lg:text-[clamp(3rem,8vw,8.5rem)] font-headline font-black tracking-tighter text-white leading-[0.85] select-none",
        italic && "italic",
        noItalic && "not-italic",
        className
      )}
    >
      <motion.span style={{ x: mouseShiftX, y: mouseShiftY }} className="inline-block">{text}</motion.span>
    </motion.div>
  );
}

function PrincipleChapter({ principle, idx }: { principle: any, idx: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const isRight = idx % 2 === 0;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const numberY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={cn(
        "relative flex flex-col items-center gap-16 md:gap-32",
        isRight ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      {/* Decorative Background Number */}
      <motion.div 
        style={{ y: numberY }}
        className={cn(
          "absolute -top-24 md:-top-64 pointer-events-none select-none z-0 opacity-[0.015]",
          isRight ? "-left-6 lg:-left-32" : "-right-6 lg:-right-32"
        )}
      >
        <span className="text-[12rem] md:text-[clamp(15rem,30vw,35rem)] font-headline font-black text-white tracking-tighter block leading-none">
          {principle.id}
        </span>
      </motion.div>

      <div className="flex-1 space-y-16 relative z-10 w-full">
        <div className={cn("space-y-10 max-w-3xl", isRight ? "lg:mr-auto" : "lg:ml-auto")}>
          <motion.div
            animate={{ x: isInView ? 0 : (isRight ? -20 : 20), opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-8">
               <span className="text-[12px] font-mono font-bold text-primary/40 tracking-[0.5em]">{principle.id}</span>
               <div className="h-px w-8 bg-primary/20" />
               <span className="text-[11px] font-bold tracking-[0.7em] text-primary uppercase">
                 {principle.label}
               </span>
            </div>
            <h3 className="text-5xl md:text-7xl font-headline font-black text-white tracking-tighter leading-[0.9]">
              {principle.title}
            </h3>
          </motion.div>

          <motion.div
            animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-xl md:text-3xl font-light text-primary/70 italic leading-tight">
              {principle.sub}
            </p>
            <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed">
              {principle.body}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side Visual (Minimal Systems Engine) */}
      <div className="hidden lg:flex flex-1 items-center justify-center">
        <div className="w-80 h-80 relative flex items-center justify-center opacity-20">
          <SystemsVisual active={isInView} />
        </div>
      </div>
    </motion.div>
  );
}

function SystemsVisual({ active }: { active: boolean }) {
  return (
    <div className="relative w-full h-full">
      <motion.div 
        animate={{ 
          rotate: active ? 360 : 0,
          scale: active ? 1 : 0.8,
          opacity: active ? 1 : 0.5
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border border-primary/20 rounded-[4rem]" 
      />
      <motion.div 
        animate={{ 
          rotate: active ? -360 : 0,
          scale: active ? 0.9 : 0.7,
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 border border-primary/10 rounded-[3rem]" 
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shadow-[0_0_15px_rgba(234,224,200,0.4)]" />
      </div>
      
      {/* Connectivity Nodes */}
      {[0, 90, 180, 270].map((rot) => (
        <motion.div
          key={rot}
          animate={{ rotate: rot + (active ? 360 : 0) }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/20" />
        </motion.div>
      ))}
    </div>
  );
}
