"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";

const STAGES = [
  { 
    stage: "Curiosity", 
    desc: "Understanding technology and learning how systems work.",
    detail: "Core Logic & System Foundations"
  },
  { 
    stage: "Creation", 
    desc: "Building projects and turning ideas into reality.",
    detail: "Rapid Prototyping & Development"
  },
  { 
    stage: "Systems Thinking", 
    desc: "Understanding products beyond code.",
    detail: "Structural Mapping & Architecture"
  },
  { 
    stage: "Product Architecture", 
    desc: "Designing scalable platforms and experiences.",
    detail: "Ecosystem Design & Strategy"
  },
  { 
    stage: "Founder Mindset", 
    desc: "Moving from software development to business creation.",
    detail: "Business Logic & Founder Vision"
  },
  { 
    stage: "Future Vision", 
    desc: "Building ecosystems capable of serving millions.",
    detail: "Scalability & Long-term Impact"
  },
];

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="journey" className="py-64 px-6 overflow-hidden bg-[#111111]" ref={containerRef}>
      <div className="max-w-6xl mx-auto space-y-48">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-[10px] font-bold tracking-[0.8em] text-[#91766E]/60 uppercase">The Evolution</h2>
          <h3 className="text-6xl md:text-9xl font-headline font-black tracking-tighter uppercase leading-none text-white">The Journey</h3>
        </motion.div>

        <div className="relative">
          <motion.div 
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#91766E] via-[#F6ECE3]/40 to-transparent -translate-x-1/2 origin-top z-0" 
          />

          <div className="space-y-64">
            {STAGES.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center gap-16",
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                <div className="absolute left-6 md:left-1/2 top-0 md:top-auto w-12 h-12 rounded-full glass border-[#91766E]/20 flex items-center justify-center -translate-x-1/2 z-10 bg-black">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2.5 h-2.5 rounded-full bg-[#F6ECE3]" 
                  />
                </div>

                <div className="flex-1 w-full pl-20 md:pl-0 md:px-16">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="glass p-12 rounded-[3.5rem] border-white/5 hover:border-[#91766E]/30 transition-all duration-700 group shadow-2xl"
                  >
                    <p className="text-[9px] font-bold tracking-[0.5em] text-[#91766E] uppercase mb-4">Stage 0{idx + 1}</p>
                    <h4 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-[#F6ECE3]">{item.stage}</h4>
                    <p className="text-[#B7A7A9] text-lg leading-relaxed mb-8 font-light">{item.desc}</p>
                    <div className="pt-8 border-t border-white/5">
                      <p className="text-[8px] uppercase tracking-[0.4em] text-[#B7A7A9]/60 font-bold">{item.detail}</p>
                    </div>
                  </motion.div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
