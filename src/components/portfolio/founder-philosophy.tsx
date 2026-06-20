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

  const railOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

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
    <section id="philosophy" ref={containerRef} className="relative bg-background overflow-hidden pb-32 md:pb-64">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />

      {/* Progress Rail - Optimized for all screens with Ambient Glow Sweep */}
      <motion.div 
        style={{ opacity: railOpacity }}
        className="fixed left-4 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 md:gap-6 z-50 pointer-events-none"
      >
        <div className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] text-primary/20 uppercase rotate-90 mb-8 md:mb-12">Manifesto</div>
        <div className="relative h-40 md:h-64 w-[1px] md:w-[2px] bg-white/5 overflow-hidden rounded-full">
          <motion.div 
            style={{ scaleY: progressLine }}
            className="absolute top-0 left-0 w-full h-full bg-primary origin-top shadow-[0_0_15px_rgba(234,224,200,0.5)]"
          />
          {/* Ambient Glow Sweep */}
          <motion.div 
            animate={{ top: ["-100%", "200%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-white/30 blur-sm pointer-events-none"
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-4 mt-8 md:mt-12">
          {PRINCIPLES.map((p, i) => {
            const start = i * 0.16;
            const end = (i + 1) * 0.16;
            const displayEnd = i === 4 ? 1 : end;
            const chapterHighlight = useTransform(scrollYProgress, [start, start + 0.05, displayEnd - 0.05, displayEnd], [0.2, 1, 1, i === 4 ? 1 : 0.2]);
            return (
              <motion.span 
                key={p.id}
                style={{ opacity: chapterHighlight }}
                className="text-[8px] md:text-[10px] font-mono font-bold text-primary"
              >
                {p.id}
              </motion.span>
            );
          })}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="py-32 md:py-64 space-y-8 md:space-y-12 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.8em] md:tracking-[1em] text-primary/40 uppercase">FOUNDER PHILOSOPHY</p>
            <h2 className="text-4xl md:text-7xl lg:text-[8rem] font-headline font-black tracking-tighter text-white leading-none">
              The Principles <br />
              <span className="text-primary italic font-medium">Behind Axora.</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-48 md:space-y-[40vh]">
          {PRINCIPLES.map((principle, idx) => (
            <PrincipleChapter key={idx} principle={principle} idx={idx} />
          ))}
        </div>

        <div ref={closingRef} className="min-h-[120vh] md:min-h-[150vh] flex flex-col items-center justify-center text-center py-32 md:py-64 relative">
          <div className="flex flex-col items-center gap-16 md:gap-24 w-full">
            <motion.div 
              style={{ opacity: useTransform(closingProgress, [0, 0.2], [0, 0.1]) }}
              className="h-px w-16 md:w-24 bg-primary" 
            />
            
            <div className="space-y-2 md:space-y-8 cursor-default w-full">
              <div className="overflow-hidden">
                <ManifestoLine text="The Goal" progress={closingProgress} range={[0.1, 0.4]} offset={-100} direction="top" mouseX={smoothMouseX} mouseY={smoothMouseY} />
              </div>
              <div className="overflow-hidden">
                <ManifestoLine text="Is Not To Build" progress={closingProgress} range={[0.2, 0.5]} offset={-150} direction="left" className="text-primary/30" isBackground mouseX={smoothMouseX} mouseY={smoothMouseY} />
              </div>
              <div className="overflow-hidden">
                <ManifestoLine text="More Products." progress={closingProgress} range={[0.3, 0.6]} offset={100} direction="bottom" mouseX={smoothMouseX} mouseY={smoothMouseY} />
              </div>
              
              <div className="pt-12 md:pt-24 space-y-2 md:space-y-8">
                <div className="overflow-hidden">
                  <ManifestoLine text="The Goal" progress={closingProgress} range={[0.4, 0.7]} offset={-100} direction="top" italic mouseX={smoothMouseX} mouseY={smoothMouseY} />
                </div>
                <div className="overflow-hidden">
                  <ManifestoLine text="Is To Build" progress={closingProgress} range={[0.5, 0.8]} offset={150} direction="right" className="text-primary/30" noItalic isBackground mouseX={smoothMouseX} mouseY={smoothMouseY} />
                </div>
                <div className="overflow-hidden">
                  <ManifestoLine text="Better Systems." progress={closingProgress} range={[0.6, 0.9]} offset={100} direction="bottom" italic mouseX={smoothMouseX} mouseY={smoothMouseY} />
                </div>
              </div>
            </div>

            <motion.div
              style={{ opacity: useTransform(closingProgress, [0.8, 1], [0, 0.4]) }}
              className="pt-16 md:pt-24"
            >
              <p className="text-[8px] md:text-[10px] font-bold tracking-[0.6em] md:tracking-[0.8em] text-primary/40 uppercase">Axora Operating System</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoLine({ text, progress, range, offset, direction, className, italic, noItalic, isBackground, mouseX, mouseY }: any) {
  const effectiveOffset = offset * (isBackground ? 0.8 : 1.0);
  const xBase = useTransform(progress, range, [direction === 'left' ? effectiveOffset : (direction === 'right' ? effectiveOffset : 0), 0]);
  const yBase = useTransform(progress, range, [direction === 'top' ? effectiveOffset : (direction === 'bottom' ? effectiveOffset : 0), 0]);
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
        "text-3xl sm:text-5xl md:text-[9rem] lg:text-[11rem] font-headline font-black tracking-tighter text-white leading-[0.9] select-none",
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
      transition={{ duration: 1 }}
      className={cn(
        "relative flex flex-col items-center gap-12 md:gap-24 lg:gap-48",
        isRight ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      <motion.div 
        style={{ y: numberY }}
        animate={{ 
          x: [0, 2, 0],
          y: [0, -2, 0],
          opacity: isInView ? [0.04, 0.05, 0.04] : 0.01 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} // Ambient shift
        className={cn(
          "absolute -top-16 md:-top-64 pointer-events-none select-none z-0",
          isRight ? "-left-4 lg:-left-24" : "-right-4 lg:-right-24"
        )}
      >
        <span className="text-[10rem] md:text-[40rem] font-headline font-black text-white tracking-tighter block leading-none">
          {principle.id}
        </span>
      </motion.div>

      <div className="flex-1 space-y-8 md:space-y-16 relative z-10 w-full">
        <div className={cn("space-y-8 md:space-y-12 max-w-2xl", isRight ? "lg:mr-auto" : "lg:ml-auto")}>
          <motion.div
            animate={{ x: isInView ? 0 : (isRight ? -20 : 20), opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 md:space-y-6"
          >
            <div className="flex items-center gap-4 md:gap-6">
               <span className="text-[10px] md:text-xs font-mono font-bold text-primary/40 tracking-[0.4em]">{principle.id}</span>
               <div className="h-px w-8 md:w-12 bg-primary/20" />
               <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.6em] text-primary uppercase">
                 {principle.label}
               </span>
            </div>
            <h3 className="text-4xl md:text-8xl font-headline font-black text-white tracking-tighter leading-none group-hover:text-primary transition-colors duration-500">
              {principle.title}
            </h3>
          </motion.div>

          <motion.div
            animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 md:space-y-8"
          >
            <p className="text-xl md:text-4xl font-light text-primary/70 italic leading-tight">
              {principle.sub}
            </p>
            <p className="text-lg md:text-2xl text-white/40 font-light leading-relaxed">
              {principle.body}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-center">
        <motion.div animate={{ scale: isInView ? 1 : 0.8, opacity: isInView ? 0.2 : 0 }} className="w-96 h-96 border border-primary/20 rounded-[4rem] relative flex items-center justify-center transition-all duration-1000">
          <motion.div 
            animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" 
          />
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(234,224,200,0.5)]" />
        </motion.div>
      </div>
    </motion.div>
  );
}
