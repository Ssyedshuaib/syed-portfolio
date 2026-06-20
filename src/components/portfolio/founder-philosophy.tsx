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
  const principlesStartRef = useRef<HTMLDivElement>(null);
  
  // 1. Scroll progress for the entire philosophy section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  // 2. Scroll progress for the closing section to trigger exit transition
  const { scrollYProgress: closingProgress } = useScroll({
    target: closingRef,
    offset: ["start end", "end center"],
  });

  // 3. Navigation Rail Entry/Exit Logic
  const railOpacity = useTransform(
    [scrollYProgress, closingProgress],
    ([prog, close]) => {
      // Fade in quickly as the principles start
      const fadeIn = (prog as number) * 12; 
      // Fade out as the "Better Systems" closing section arrives
      const fadeOut = 1 - (close as number) * 5; 
      return Math.max(0, Math.min(1, fadeIn)) * Math.max(0, Math.min(1, fadeOut));
    }
  );

  // Moves 20px left as closing section enters
  const railX = useTransform(closingProgress, [0, 0.3], [0, -20]);
  const pointerEvents = useTransform(railOpacity, (v) => v > 0.1 ? "auto" : "none");

  // 4. Progress Line: Completes when closing section enters
  const progressLine = useSpring(
    useTransform([scrollYProgress, closingProgress], ([prog, close]) => {
      if ((close as number) > 0.1) return 1;
      // Scale progress to complete before the closing section
      return Math.min(1, (prog as number) / 0.82);
    }),
    { stiffness: 100, damping: 30 }
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="philosophy" ref={containerRef} className="relative bg-background overflow-hidden pb-32 md:pb-48">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />

      {/* FIXED MANIFESTO NAVIGATION RAIL */}
      <motion.div 
        style={{ 
          opacity: railOpacity,
          x: railX,
          pointerEvents: pointerEvents as any
        }}
        className="fixed left-8 md:left-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-10 z-[80] hidden lg:flex"
      >
        <div className="text-[10px] font-bold tracking-[0.6em] text-primary/40 uppercase rotate-90 mb-20 whitespace-nowrap">
          Manifesto
        </div>
        
        <div className="relative h-72 w-[1px] bg-white/10 overflow-hidden rounded-full">
          <motion.div 
            style={{ scaleY: progressLine }}
            className="absolute top-0 left-0 w-full h-full bg-primary origin-top shadow-[0_0_20px_rgba(234,224,200,0.6)]"
          />
        </div>

        <div className="flex flex-col gap-5 mt-10">
          {PRINCIPLES.map((p, i) => {
            const start = i * 0.16;
            const end = (i + 1) * 0.16;
            const isActive = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0.2, 1, 1, 0.2]);
            
            return (
              <motion.span 
                key={p.id}
                style={{ opacity: isActive }}
                className="text-[11px] font-mono font-bold text-primary"
              >
                {p.id}
              </motion.span>
            );
          })}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
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

        {/* Principles Narrative Blocks */}
        <div ref={principlesStartRef} className="space-y-64 lg:space-y-[60vh]">
          {PRINCIPLES.map((principle, idx) => (
            <PrincipleChapter key={idx} principle={principle} idx={idx} />
          ))}
        </div>

        {/* CLOSING STATEMENT - TRIGGERS RAIL EXIT */}
        <div ref={closingRef} className="min-h-[140vh] flex flex-col items-center justify-center text-center py-64 relative">
          <div className="flex flex-col items-center gap-24 w-full">
            <motion.div 
              style={{ opacity: useTransform(closingProgress, [0, 0.2], [0, 0.2]) }}
              className="h-px w-24 bg-primary/20" 
            />
            
            <div className="space-y-6 md:space-y-10 cursor-default w-full">
              <div className="overflow-hidden">
                <ManifestoLine text="The Goal" progress={closingProgress} range={[0.1, 0.4]} offset={-100} direction="top" mouseX={smoothMouseX} mouseY={smoothMouseY} />
              </div>
              <div className="overflow-hidden">
                <ManifestoLine text="Is Not To Build" progress={closingProgress} range={[0.2, 0.5]} offset={-120} direction="left" className="text-primary/20" isBackground mouseX={smoothMouseX} mouseY={smoothMouseY} />
              </div>
              <div className="overflow-hidden">
                <ManifestoLine text="More Products." progress={closingProgress} range={[0.3, 0.6]} offset={100} direction="bottom" mouseX={smoothMouseX} mouseY={smoothMouseY} />
              </div>
              
              <div className="pt-24 space-y-6 md:space-y-10">
                <div className="overflow-hidden">
                  <ManifestoLine text="The Goal" progress={closingProgress} range={[0.4, 0.7]} offset={-100} direction="top" italic mouseX={smoothMouseX} mouseY={smoothMouseY} />
                </div>
                <div className="overflow-hidden">
                  <ManifestoLine text="Is To Build" progress={closingProgress} range={[0.5, 0.8]} offset={120} direction="right" className="text-primary/20" noItalic isBackground mouseX={smoothMouseX} mouseY={smoothMouseY} />
                </div>
                <div className="overflow-hidden">
                  <ManifestoLine text="Better Systems." progress={closingProgress} range={[0.6, 0.9]} offset={100} direction="bottom" italic mouseX={smoothMouseX} mouseY={smoothMouseY} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoLine({ text, progress, range, offset, direction, className, italic, noItalic, isBackground, mouseX, mouseY }: any) {
  const xBase = useTransform(progress, range, [direction === 'left' ? offset : (direction === 'right' ? offset : 0), 0]);
  const yBase = useTransform(progress, range, [direction === 'top' ? offset : (direction === 'bottom' ? offset : 0), 0]);
  const opacity = useTransform(progress, range, [0, 1]);
  const blurValue = useTransform(progress, range, [20, 0]);
  const springX = useSpring(xBase, { stiffness: 60, damping: 20 });
  const springY = useSpring(yBase, { stiffness: 60, damping: 20 });
  const mouseMoveX = useTransform(mouseX, [-0.5, 0.5], [isBackground ? 2 : -2, isBackground ? -2 : 2]);
  const mouseMoveY = useTransform(mouseY, [-0.5, 0.5], [isBackground ? 2 : -2, isBackground ? -2 : 2]);

  return (
    <motion.div
      style={{ x: springX, y: springY, opacity, filter: useTransform(blurValue, (v) => `blur(${v}px)`) }}
      className={cn(
        "text-4xl sm:text-6xl md:text-8xl lg:text-[clamp(4rem,11vw,11.5rem)] font-headline font-black tracking-tighter text-white leading-[0.85] select-none",
        italic && "italic",
        noItalic && "not-italic",
        className
      )}
    >
      <motion.span style={{ x: mouseMoveX, y: mouseMoveY }} className="inline-block">{text}</motion.span>
    </motion.div>
  );
}

function PrincipleChapter({ principle, idx }: { principle: any, idx: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const isRight = idx % 2 === 0;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const numberY = useTransform(scrollYProgress, [0, 1], [50, -50]);

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
      <motion.div 
        style={{ y: numberY }}
        className={cn(
          "absolute -top-24 md:-top-64 pointer-events-none select-none z-0 opacity-[0.03]",
          isRight ? "-left-6 lg:-left-32" : "-right-6 lg:-right-32"
        )}
      >
        <span className="text-[12rem] md:text-[clamp(18rem,35vw,40rem)] font-headline font-black text-white tracking-tighter block leading-none">
          {principle.id}
        </span>
      </motion.div>

      <div className="flex-1 space-y-16 relative z-10 w-full">
        <div className={cn("space-y-12 max-w-3xl", isRight ? "lg:mr-auto" : "lg:ml-auto")}>
          <motion.div
            animate={{ x: isInView ? 0 : (isRight ? -30 : 30), opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="flex items-center gap-8">
               <span className="text-[12px] font-mono font-bold text-primary/40 tracking-[0.5em]">{principle.id}</span>
               <div className="h-px w-12 bg-primary/20" />
               <span className="text-[11px] font-bold tracking-[0.7em] text-primary uppercase">
                 {principle.label}
               </span>
            </div>
            <h3 className="text-5xl md:text-8xl font-headline font-black text-white tracking-tighter leading-[0.9]">
              {principle.title}
            </h3>
          </motion.div>

          <motion.div
            animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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

      <div className="hidden lg:flex flex-1 items-center justify-center opacity-[0.15]">
        <div className="w-96 h-96 border border-primary/20 rounded-[5rem] relative flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </motion.div>
  );
}
