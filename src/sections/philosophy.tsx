"use client";

import React, { useRef, useState, useEffect } from "react";
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

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"],
  });

  // Top-level hooks for production stability
  const navOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const finaleOpacity = useTransform(storyProgress, [0.6, 0.75, 1], [0, 1, 1]);
  const finaleScale = useTransform(storyProgress, [0.6, 0.75], [0.95, 1]);
  const finaleBlur = useTransform(storyProgress, [0.6, 0.73, 0.75], ["blur(30px)", "blur(15px)", "blur(0px)"]);

  // Track active chapter
  useEffect(() => {
    return scrollYProgress.on("change", (val) => {
      const chapter = Math.min(Math.floor(val * 5), 4);
      if (chapter !== activeChapter) setActiveChapter(chapter);
    });
  }, [scrollYProgress, activeChapter]);

  return (
    <section ref={containerRef} className="relative bg-background">
      {/* CHAPTER NAVIGATOR */}
      <AnimatePresence>
        <motion.div 
          style={{ opacity: navOpacity }}
          className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[200] hidden md:block"
        >
          <div className="glass px-8 py-4 rounded-full border-white/10 flex items-center gap-10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]">
            {PRINCIPLES.map((p, idx) => (
              <div key={p.id} className="flex flex-col items-center gap-1 group relative">
                <span className={cn(
                  "text-[8px] font-bold tracking-[0.2em] transition-all duration-500",
                  activeChapter === idx ? "text-primary opacity-100" : "text-white/20"
                )}>
                  {p.id}
                </span>
                <span className={cn(
                  "text-[9px] font-bold tracking-[0.3em] uppercase transition-all duration-500",
                  activeChapter === idx ? "text-white" : "text-white/10"
                )}>
                  {p.title}
                </span>
                {activeChapter === idx && (
                  <motion.div layoutId="nav-glow" className="absolute -inset-x-2 -inset-y-1 bg-primary/5 blur-md rounded-full -z-10" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* HORIZONTAL PANELS */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[1600px] px-6 md:px-12 h-[75vh] flex items-stretch gap-6">
          {PRINCIPLES.map((principle, idx) => (
            <ArchivePanel 
              key={principle.id} 
              principle={principle} 
              active={activeChapter === idx} 
            />
          ))}
        </div>
      </div>

      {/* CINEMATIC FINALE */}
      <div ref={storyRef} className="relative h-[300vh] bg-background">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
          <div className="space-y-12 w-full max-w-4xl">
            <StoryLine progress={storyProgress} range={[0.1, 0.25]} text="Products are temporary." />
            <StoryLine progress={storyProgress} range={[0.3, 0.45]} text="Principles compound." />
            
            <motion.div
              style={{
                opacity: finaleOpacity,
                scale: finaleScale,
                filter: finaleBlur
              }}
              className="relative pt-24"
            >
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full opacity-30" />
              <h4 className="relative text-5xl md:text-9xl font-headline font-black text-white tracking-tighter uppercase text-center">
                That is Axora.
              </h4>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchivePanel({ principle, active }: { principle: any; active: boolean }) {
  return (
    <motion.div
      animate={{ 
        flex: active ? 4 : 1,
        opacity: active ? 1 : 0.4,
      }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative rounded-[3rem] overflow-hidden border border-white/5 bg-[#0F1317]/80 backdrop-blur-3xl group cursor-crosshair"
      )}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <VisualArtifact type={principle.visual} active={active} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

      <div className="absolute inset-0 z-20 p-12 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="text-[10px] font-mono font-bold text-primary/40 tracking-[0.5em]">
            {principle.id}
          </span>
          <motion.div 
            animate={{ scale: active ? 1.2 : 1, backgroundColor: active ? "#EAE0C8" : "rgba(234,224,200,0.2)" }}
            className="w-2 h-2 rounded-full" 
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-[11px] font-bold tracking-[0.8em] text-primary uppercase">
              {principle.title}
            </p>
            {active ? (
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-headline font-black text-white tracking-tighter leading-none"
              >
                {principle.headline}
              </motion.h4>
            ) : (
              <h4 className="text-xl font-headline font-bold text-white/10 tracking-tighter uppercase rotate-[-90deg] origin-left translate-y-[-100%] ml-2 whitespace-nowrap">
                {principle.title}
              </h4>
            )}
          </div>

          <AnimatePresence>
            {active && (
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                className="text-lg text-white/60 font-light leading-relaxed max-w-md"
              >
                {principle.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function StoryLine({ progress, range, text }: { progress: any; range: [number, number]; text: string }) {
  const opacity = useTransform(progress, [range[0], range[0] + 0.05, range[1], range[1] + 0.05], [0, 1, 1, 0.25]);
  const blurVal = useTransform(progress, [range[0], range[0] + 0.04, range[0] + 0.05], ["24px", "10px", "0px"]);
  const y = useTransform(progress, [range[0], range[0] + 0.05], [20, 0]);
  
  // Create a combined filter string at top level
  const filter = useTransform(blurVal, (v) => `blur(${v})`);

  return (
    <motion.h3
      style={{ opacity, filter, y }}
      className="text-3xl md:text-6xl font-headline font-bold text-white tracking-tight text-center"
    >
      {text}
    </motion.h3>
  );
}

function VisualArtifact({ type, active }: { type: string; active: boolean }) {
  if (type === "light-beam") {
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <motion.div
          animate={{ height: active ? ["40%", "100%", "40%"] : "20%" }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-1 bg-gradient-to-t from-transparent via-primary/50 to-transparent blur-2xl"
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
            animate={active ? { cy: [50 + Math.sin(i) * 20, 50 - Math.sin(i) * 20, 50 + Math.sin(i) * 20] } : {}}
            transition={{ duration: 5, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </svg>
    );
  }

  if (type === "ripple") {
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={active ? { scale: [1, 2.5], opacity: [0.4, 0] } : { scale: 1, opacity: 0.1 }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 1.2 }}
            className="absolute w-64 h-64 border border-primary/30 rounded-full"
          />
        ))}
      </div>
    );
  }

  if (type === "orbit") {
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-64 h-64 border border-white/5 rounded-full relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full blur-[1px]" />
        </motion.div>
      </div>
    );
  }

  if (type === "constellation") {
    return (
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
            animate={active ? { opacity: [0.2, 0.8, 0.2] } : {}}
            transition={{ duration: 3 + Math.random() * 5, repeat: Infinity }}
            className="absolute w-1 h-1 bg-primary rounded-full"
          />
        ))}
      </div>
    );
  }

  return null;
}