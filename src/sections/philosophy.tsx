
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const PRINCIPLES = [
  {
    id: "01",
    title: "CLARITY",
    subtitle: "Solve Problems, Not Trends.",
    description: "Technology is only as valuable as the friction it removes from the human experience.",
  },
  {
    id: "02",
    title: "SYSTEMS",
    subtitle: "Systems Create Ecosystems.",
    description: "We don't build isolated features. We build scalable frameworks that compound value through interconnectivity.",
  },
  {
    id: "03",
    title: "VALUE",
    subtitle: "Utility Before Attention.",
    description: "The metric of success is utility. Every pixel must serve a purpose that fundamentally improves the user journey.",
  },
  {
    id: "04",
    title: "LONGEVITY",
    subtitle: "Build For The Next Decade.",
    description: "Architecting digital artifacts designed to remain relevant as technology evolves over years, not months.",
  },
];

const LUXURY_EASING = [0.16, 1, 0.3, 1];

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="philosophy" ref={containerRef} className="relative bg-background overflow-hidden">
      {/* 1. Cinematic Entry */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: LUXURY_EASING }}
          className="space-y-8"
        >
          <p className="text-[10px] font-bold tracking-[1em] text-primary/30 uppercase">Founder's Philosophy</p>
          <motion.h2 
            initial={{ filter: "blur(20px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-7xl lg:text-[clamp(3.5rem,8vw,8rem)] font-headline font-black tracking-tighter text-white uppercase italic"
          >
            Every system begins <br />
            <span className="text-primary not-italic opacity-80">With A Belief.</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* 2. Principles Slides with increased vertical spacing */}
      <div className="space-y-[40vh] pb-[30vh]">
        {PRINCIPLES.map((principle, idx) => (
          <PrincipleSlide key={principle.id} principle={principle} idx={idx} />
        ))}
      </div>

      {/* 3. Founder Quote Section - Independent Line Animations */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-4xl space-y-16">
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: LUXURY_EASING }}
              className="text-3xl md:text-5xl lg:text-6xl font-headline font-light tracking-tight text-white leading-tight italic"
            >
              "The goal is not to build more products.
            </motion.h3>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, delay: 0.3, ease: LUXURY_EASING }}
              className="text-3xl md:text-5xl lg:text-6xl font-headline font-light tracking-tight text-white leading-tight italic"
            >
              The goal is to build products that <span className="text-primary font-medium">deserve to exist.</span>"
            </motion.h3>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
             <div className="h-px w-16 bg-primary/20" />
             <p className="text-sm font-bold tracking-[0.5em] text-primary/40 uppercase">— Syed</p>
          </motion.div>
        </div>
      </div>

      {/* 4. Final Transition */}
      <div className="py-64 px-6 text-center space-y-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="space-y-8"
        >
          {["Philosophy creates products.", "Products create ecosystems.", "Ecosystems create impact."].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.4, duration: 1.5, ease: LUXURY_EASING }}
              className={cn(
                "text-2xl md:text-5xl font-headline font-bold tracking-tight",
                i === 2 ? "text-primary italic" : "text-white/20"
              )}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* 5. Manifesto Rail (Navigator) */}
      <ManifestoRail progress={smoothProgress} />
    </section>
  );
}

function PrincipleSlide({ principle, idx }: { principle: any; idx: number }) {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* 1. Background Numbers: 0 -> current, scale 1.1 -> 1, duration 2s */}
      <motion.span
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 2, ease: LUXURY_EASING }}
        className="absolute text-[35vw] font-black font-headline text-white pointer-events-none select-none will-change-transform"
      >
        {principle.id}
      </motion.span>

      <div className="relative z-10 text-center space-y-12 max-w-4xl">
        {/* 2. Heading: opacity 0 -> 1, translateY 80px -> 0, duration 1.2s */}
        <div className="space-y-8">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[11px] font-bold tracking-[0.8em] text-primary uppercase"
          >
            {principle.title}
          </motion.p>
          <motion.h3 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: LUXURY_EASING }}
            className="text-5xl md:text-8xl lg:text-9xl font-headline font-black text-white tracking-tighter leading-[0.9] uppercase"
          >
            {principle.subtitle}
          </motion.h3>
        </div>

        {/* 3. Paragraphs: opacity 0 -> 1, translateY 20px -> 0, delay after heading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 1.2, delay: 0.4, ease: LUXURY_EASING }}
          className="text-xl md:text-3xl text-white/40 font-light leading-relaxed max-w-2xl mx-auto italic"
        >
          {principle.description}
        </motion.p>
      </div>
    </div>
  );
}

function ManifestoRail({ progress }: { progress: any }) {
  const activeIdx = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    return activeIdx.on("change", (v) => setCurrent(Math.floor(v)));
  }, [activeIdx]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[200] hidden lg:block"
    >
      <div className="glass px-10 py-4 rounded-full border-white/5 flex items-center gap-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
        {PRINCIPLES.map((p, i) => (
          <div key={p.id} className="flex items-center gap-3">
            <span className={cn(
              "text-[9px] font-bold tracking-[0.4em] uppercase transition-all duration-700",
              current === i ? "text-primary" : "text-white/10"
            )}>
              {p.title}
            </span>
            {i < PRINCIPLES.length - 1 && (
              <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
