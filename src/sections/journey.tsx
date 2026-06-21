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
    description: "Understanding technology. Understanding systems. Understanding value creation.",
  },
  {
    id: "02",
    year: "2025",
    side: "right",
    title: "Execution",
    description: "Transforming ideas into working products. Building foundations. Learning implementation. Learning scale.",
  },
  {
    id: "03",
    year: "2026",
    side: "left",
    title: "Systems",
    description: "Moving beyond projects. Designing connected platforms that solve categories of problems.",
  },
  {
    id: "04",
    year: "2026+",
    side: "right",
    title: "Ecosystems",
    description: "DevNexus. Reverie. Axora. Multiple products connected by one vision.",
  },
  {
    id: "05",
    year: "∞",
    side: "left",
    title: "Impact",
    description: "Build things that outlive trends. Build systems that create value for years. Build ecosystems that empower people.",
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
      className="relative bg-[#050505] py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto">
        {/* Compact Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center px-6 mb-24 md:mb-32"
        >
          <div className="space-y-6">
            <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">THE JOURNEY</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-headline font-black tracking-tighter text-white leading-none uppercase">
              From Curiosity <br />
              <span className="text-primary italic font-medium">To Ecosystems.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#EAE0C8]/40 font-light italic leading-relaxed max-w-lg mx-auto">
              Every product began as a question. <br />
              Every ecosystem began as a simple experiment.
            </p>
          </div>
        </motion.div>

        {/* Dense Timeline Chapters */}
        <div className="relative">
          {/* Animated Timeline Path */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2">
            <motion.div 
              style={{ scaleY: pathLength }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top shadow-[0_0_15px_rgba(234,224,200,0.4)]"
            />
          </div>

          <div className="space-y-32 md:space-y-48 pl-10 md:pl-0">
            {CHAPTERS.map((chapter, idx) => (
              <TimelineChapter key={chapter.id} chapter={chapter} idx={idx} />
            ))}
          </div>
        </div>

        {/* Integrated Ending */}
        <div className="mt-48 py-32 text-center space-y-20 px-6 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="space-y-8"
          >
            <div className="h-px w-16 bg-primary/20 mx-auto" />
            <div className="space-y-4">
              {[
                "Curiosity became execution.",
                "Execution became systems.",
                "Systems became ecosystems."
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.3, duration: 1 }}
                  className={cn(
                    "text-xl md:text-4xl font-headline font-bold tracking-tight leading-tight",
                    i === 2 ? "text-primary italic" : "text-white/20"
                  )}
                >
                  {text}
                </motion.p>
              ))}
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              transition={{ delay: 1.2 }}
              className="text-[10px] font-bold tracking-[0.6em] text-white uppercase pt-12"
            >
              The journey continues.
            </motion.p>
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
  
  const yearY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);

  return (
    <div 
      ref={ref}
      className={cn(
        "relative flex flex-col items-start gap-8 md:gap-12",
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Background Year - Integrated Position */}
      <motion.div 
        style={{ y: yearY }}
        className={cn(
          "absolute -top-16 md:-top-20 pointer-events-none select-none z-0 opacity-[0.03]",
          isLeft ? "left-0 md:-left-12" : "right-0 md:-right-12"
        )}
      >
        <span className="text-7xl md:text-[clamp(8rem,18vw,16rem)] font-headline font-black text-white tracking-tighter block leading-none">
          {chapter.year}
        </span>
      </motion.div>

      {/* Narrative Block */}
      <motion.div 
        style={{ opacity: contentOpacity }}
        className={cn(
          "flex-1 w-full relative z-10",
          isLeft ? "md:text-right" : "md:text-left"
        )}
      >
        <div className={cn(
            "space-y-4 max-w-xl",
            isLeft ? "md:ml-auto" : "md:mr-auto"
          )}
        >
          <div className={cn(
            "flex items-center gap-4",
            isLeft ? "md:flex-row-reverse" : "md:flex-row"
          )}>
            <span className="text-[11px] font-mono font-bold tracking-[0.4em] text-primary/40 uppercase">
              Chapter {chapter.id}
            </span>
            <div className="h-px w-8 bg-primary/20" />
          </div>

          <div className="space-y-4">
            <h3 className={cn(
              "text-3xl md:text-5xl font-headline font-black text-white tracking-tight leading-[1.05]",
              chapter.isTerminal && "text-primary italic"
            )}>
              {chapter.title}
            </h3>
            <p className="text-lg md:text-xl font-light text-[#EAE0C8]/60 leading-relaxed max-w-md inline-block">
              {chapter.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Marker */}
      <div className="hidden md:flex relative w-12 items-center justify-center">
        <motion.div 
          whileHover={{ scale: 1.5 }}
          className="w-3 h-3 rounded-full bg-black border border-primary shadow-[0_0_10px_rgba(234,224,200,0.3)] z-20 transition-transform" 
        />
      </div>

      <div className="flex-1 hidden md:block" />
    </div>
  );
}