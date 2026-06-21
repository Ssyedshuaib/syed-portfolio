
"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const PRINCIPLES = [
  {
    id: "01",
    title: "CLARITY",
    headline: "Solve Problems, Not Trends.",
    description: "Meaningful products are born from understanding human friction, not following temporary hype cycles.",
    visual: "light-beam",
  },
  {
    id: "02",
    title: "SYSTEMS",
    headline: "Systems Create Ecosystems.",
    description: "We don't build features. We build scalable frameworks that compound value through interconnectivity.",
    visual: "network",
  },
  {
    id: "03",
    title: "VALUE",
    headline: "Utility Before Attention.",
    description: "The metric of success is utility. Every pixel must serve a purpose that fundamentally improves the user experience.",
    visual: "ripple",
  },
  {
    id: "04",
    title: "LONGEVITY",
    headline: "Build For The Next Decade.",
    description: "Architecting digital artifacts designed to remain relevant as technology evolves over years, not months.",
    visual: "orbit",
  },
  {
    id: "05",
    title: "ECOSYSTEMS",
    headline: "Connected Products Compound Value.",
    description: "Every Axora product strengthens the larger vision, creating an institutional layer of human experience.",
    visual: "constellation",
  },
];

export function FounderPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);

  // Transitions for Opening, Archive, and Finale
  const introOpacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [0, 1, 0]);
  const introBlur = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], ["blur(40px)", "blur(0px)", "blur(0px)", "blur(40px)"]);
  
  const archiveOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.7, 0.8], [0, 1, 1, 0]);
  const archiveScale = useTransform(scrollYProgress, [0.2, 0.3], [0.95, 1]);

  const finaleOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const finaleBlur = useTransform(scrollYProgress, [0.8, 0.9], ["blur(30px)", "blur(0px)"]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-background">
      {/* BACKGROUND ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.05),transparent_70%)] opacity-40" />
        <div className="absolute inset-0 blueprint-grid opacity-[0.015]" />
      </div>

      {/* 1. CINEMATIC OPENING (0% - 20%) */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden z-10">
        <motion.div
          style={{ opacity: introOpacity, filter: introBlur }}
          className="text-center space-y-12 px-6"
        >
          <div className="space-y-4">
             <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">Founder's Philosophy</p>
             <h2 className="text-4xl md:text-7xl lg:text-8xl font-headline font-black text-white tracking-tighter leading-[0.85] uppercase">
               Every company <br /> has products.
             </h2>
          </div>
          <div className="flex flex-col items-center gap-12">
             <div className="h-px w-24 bg-primary/20" />
             <h3 className="text-4xl md:text-7xl lg:text-8xl font-headline font-light italic text-primary/80 tracking-tighter leading-[0.85]">
               Few have principles.
             </h3>
          </div>
        </motion.div>
      </div>

      {/* 2. HORIZONTAL ARCHIVE (20% - 80%) */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-20">
        <motion.div
          style={{ opacity: archiveOpacity, scale: archiveScale }}
          className="w-full max-w-[1600px] px-6 md:px-12 h-[70vh] flex items-stretch gap-4"
        >
          {PRINCIPLES.map((principle) => (
            <motion.div
              key={principle.id}
              onMouseEnter={() => setHoveredPanel(principle.id)}
              onMouseLeave={() => setHoveredPanel(null)}
              className={cn(
                "relative rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-1000 ease-premium cursor-crosshair",
                hoveredPanel === principle.id ? "flex-[4]" : "flex-1"
              )}
            >
              {/* Glassmorphic Base */}
              <div className="absolute inset-0 bg-[#0F1317]/80 backdrop-blur-[40px] z-0" />
              
              {/* Visual Object Layer */}
              <div className="absolute inset-0 z-10 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
                <VisualArtifact type={principle.visual} active={hoveredPanel === principle.id} />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-20" />

              {/* Content Layer */}
              <div className="absolute inset-0 z-30 p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono font-bold text-primary/40 tracking-[0.4em]">
                    {principle.id}
                  </span>
                  <div className={cn(
                    "w-2 h-2 rounded-full bg-primary/20 transition-all duration-1000",
                    hoveredPanel === principle.id && "bg-primary shadow-[0_0_15px_rgba(234,224,200,0.6)]"
                  )} />
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <p className="text-[11px] font-bold tracking-[0.6em] text-primary uppercase">
                      {principle.title}
                    </p>
                    <AnimatePresence mode="wait">
                      {hoveredPanel === principle.id ? (
                        <motion.h4
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter leading-none"
                        >
                          {principle.headline}
                        </motion.h4>
                      ) : (
                        <motion.h4
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xl font-headline font-bold text-white/20 tracking-tighter uppercase whitespace-nowrap rotate-[-90deg] origin-left translate-y-[-100%] ml-2"
                        >
                          {principle.title}
                        </motion.h4>
                      )}
                    </AnimatePresence>
                  </div>

                  <AnimatePresence>
                    {hoveredPanel === principle.id && (
                      <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0 }}
                        className="text-lg text-white/60 font-light leading-relaxed max-w-md"
                      >
                        {principle.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3. CINEMATIC FINALE (80% - 100%) */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden z-30 pointer-events-none">
        <motion.div
          style={{ opacity: finaleOpacity, filter: finaleBlur }}
          className="text-center space-y-24 px-6"
        >
          <div className="space-y-8">
            <StoryLine progress={scrollYProgress} range={[0.8, 0.85]} text="Products are temporary." />
            <StoryLine progress={scrollYProgress} range={[0.85, 0.9]} text="Principles compound." />
          </div>

          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.93, 0.98], [0, 1]),
              scale: useTransform(scrollYProgress, [0.93, 0.98], [0.9, 1]),
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-40" />
            <h4 className="relative text-6xl md:text-9xl font-headline font-black text-white tracking-tighter uppercase">
              That is Axora.
            </h4>
            <div className="h-px w-24 bg-primary/30 mx-auto mt-12" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StoryLine({ progress, range, text }: { progress: any; range: [number, number]; text: string }) {
  const opacity = useTransform(progress, [range[0], range[0] + 0.05], [0, 1]);
  const blur = useTransform(progress, [range[0], range[0] + 0.05], ["blur(20px)", "blur(0px)"]);
  const y = useTransform(progress, [range[0], range[0] + 0.05], [20, 0]);

  return (
    <motion.h3
      style={{ opacity, filter: blur, y }}
      className="text-3xl md:text-5xl font-headline font-bold text-white/40 tracking-tight"
    >
      {text}
    </motion.h3>
  );
}

function VisualArtifact({ type, active }: { type: string; active: boolean }) {
  if (type === "light-beam") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            opacity: active ? [0.2, 0.6, 0.2] : 0.1,
            height: active ? ["40%", "100%", "40%"] : "20%",
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-1 bg-gradient-to-t from-transparent via-primary/50 to-transparent blur-xl"
        />
      </div>
    );
  }

  if (type === "network") {
    return (
      <svg className="w-full h-full p-20 opacity-20" viewBox="0 0 100 100">
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            cx={20 + i * 15}
            cy={50 + Math.sin(i) * 20}
            r="1"
            fill="currentColor"
            className="text-primary"
            animate={active ? {
              cy: [50 + Math.sin(i) * 20, 50 - Math.sin(i) * 20, 50 + Math.sin(i) * 20]
            } : {}}
            transition={{ duration: 5, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </svg>
    );
  }

  if (type === "ripple") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={active ? {
              scale: [1, 2],
              opacity: [0.3, 0],
            } : { scale: 1, opacity: 0.1 }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
            className="absolute w-40 h-40 border border-primary/20 rounded-full"
          />
        ))}
      </div>
    );
  }

  if (type === "orbit") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 border border-white/5 rounded-full relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full blur-[2px]" />
        </motion.div>
      </div>
    );
  }

  if (type === "constellation") {
    return (
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
            animate={active ? {
              x: [null, Math.random() * 100 + "%"],
              y: [null, Math.random() * 100 + "%"],
            } : {}}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute w-1 h-1 bg-primary rounded-full"
          />
        ))}
      </div>
    );
  }

  return null;
}
