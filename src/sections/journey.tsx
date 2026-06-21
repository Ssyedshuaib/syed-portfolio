"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const CHAPTERS = [
  {
    id: "01",
    year: "2024",
    side: "left",
    title: "Curiosity",
    statement: "The goal was never to build products. The goal was to understand how value is created.",
    description: "Exploring software engineering, systems thinking, architecture, and digital ecosystems.",
  },
  {
    id: "02",
    year: "2025",
    side: "right",
    title: "Execution",
    statement: "Ideas become real only when they survive implementation.",
    description: "First products, first prototypes, first lessons.",
  },
  {
    id: "03",
    year: "2026",
    side: "left",
    title: "Systems",
    statement: "Products solve problems. Systems solve categories of problems.",
    description: "Moving beyond individual projects toward interconnected experiences.",
  },
  {
    id: "04",
    year: "2026+",
    side: "right",
    title: "Ecosystems",
    statement: "The future belongs to connected platforms, not isolated tools.",
    description: "Building DevNexus, Reverie, Axora, and future ecosystems.",
  },
  {
    id: "05",
    year: "∞",
    side: "left",
    title: "Impact",
    statement: "Build things that outlive trends.",
    description: "Long-term value. Meaningful innovation. Institutional thinking.",
    isTerminal: true
  }
];

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      id="journey" 
      ref={containerRef}
      className="relative bg-[#050505] py-32 md:py-48 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto">
        {/* Opening Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 mb-32"
        >
          <div className="space-y-12">
            <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">THE JOURNEY</p>
            <h2 className="text-6xl md:text-[clamp(4rem,10vw,9rem)] font-headline font-black tracking-tighter text-white leading-[0.85] uppercase">
              Curiosity. <br />
              Execution. <br />
              Systems. <br />
              Impact.
            </h2>
            <div className="space-y-4 pt-8">
              <p className="text-xl md:text-2xl text-[#EAE0C8]/50 font-light italic leading-relaxed">
                Every product began as a question. <br />
                Every system began as an experiment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Documentary Chapters */}
        <div className="relative">
          {/* Main Timeline Path */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2">
            <motion.div 
              style={{ scaleY: pathLength }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top shadow-[0_0_20px_rgba(234,224,200,0.3)]"
            />
          </div>

          <div className="space-y-48 md:space-y-80 pl-10 md:pl-0">
            {CHAPTERS.map((chapter, idx) => (
              <TimelineChapter key={chapter.id} chapter={chapter} idx={idx} />
            ))}
          </div>
        </div>

        {/* Cinematic Closing */}
        <div className="mt-[40vh] py-64 text-center space-y-24 px-6 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="space-y-12"
          >
            <div className="h-px w-24 bg-primary/20 mx-auto" />
            <div className="space-y-6">
              {[
                "From learning to building.",
                "From building to systems.",
                "From systems to ecosystems."
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.5, duration: 1.2 }}
                  className={cn(
                    "text-2xl md:text-5xl font-headline font-bold tracking-tight leading-tight",
                    i === 2 ? "text-primary italic" : "text-white/30"
                  )}
                >
                  {text}
                </motion.p>
              ))}
            </div>
            <div className="h-px w-24 bg-primary/20 mx-auto pt-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineChapter({ chapter, idx }: { chapter: any, idx: number }) {
  const isLeft = chapter.side === "left";
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start end", "end start"] 
  });
  
  const yearY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);
  const contentBlur = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);

  return (
    <div 
      ref={ref}
      className={cn(
        "relative flex flex-col items-start gap-12 md:gap-16",
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Background Year - Visual Anchor */}
      <motion.div 
        style={{ y: yearY }}
        className={cn(
          "absolute -top-24 md:-top-32 pointer-events-none select-none z-0 opacity-[0.03]",
          isLeft ? "left-0 md:-left-16" : "right-0 md:-right-16"
        )}
      >
        <span className="text-8xl md:text-[clamp(10rem,22vw,24rem)] font-headline font-black text-white tracking-tighter block leading-none">
          {chapter.year}
        </span>
      </motion.div>

      {/* Narrative Content */}
      <motion.div 
        style={{ opacity: contentOpacity, filter: contentBlur }}
        className={cn(
          "flex-1 w-full relative z-10",
          isLeft ? "md:text-right" : "md:text-left"
        )}
      >
        <div className={cn(
            "space-y-8 max-w-2xl",
            isLeft ? "md:ml-auto" : "md:mr-auto"
          )}
        >
          {/* Institutional Label */}
          <div className={cn(
            "flex items-center gap-6",
            isLeft ? "md:flex-row-reverse" : "md:flex-row"
          )}>
            <div className="flex flex-col">
              <span className="text-[12px] font-mono font-bold tracking-[0.5em] text-primary/30 uppercase">
                Chapter {chapter.id}
              </span>
              <span className="text-[14px] font-headline font-bold tracking-[0.6em] text-white uppercase mt-1">
                {chapter.title}
              </span>
            </div>
            <div className="h-px w-12 bg-primary/20" />
          </div>

          {/* Core Statement */}
          <div className="space-y-6">
            <h3 className={cn(
              "text-3xl md:text-5xl lg:text-6xl font-headline font-black text-white tracking-tight leading-[1.05] italic",
              chapter.isTerminal && "text-primary not-italic"
            )}>
              {chapter.statement}
            </h3>
            <p className="text-lg md:text-2xl font-light text-[#EAE0C8]/40 leading-relaxed max-w-lg inline-block">
              {chapter.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Timeline Connector */}
      <div className="hidden md:flex relative w-12 items-center justify-center">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="w-4 h-4 rounded-full bg-black border-2 border-primary shadow-[0_0_15px_rgba(234,224,200,0.5)] z-20" 
        />
      </div>

      <div className="flex-1 hidden md:block" />
    </div>
  );
}
