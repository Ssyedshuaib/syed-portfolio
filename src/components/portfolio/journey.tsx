"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const STAGES = [
  { 
    stage: "The Foundation", 
    desc: "Computer Science fundamentals. Understanding systems, architecture, and logic.",
    detail: "Data Structures, Algorithms, and System Architecture patterns."
  },
  { 
    stage: "Digital Exploration", 
    desc: "Discovered product design, frontend development, and user experiences.",
    detail: "Mastering React, Next.js, and the art of intuitive interfaces."
  },
  { 
    stage: "Systems Thinking", 
    desc: "Began connecting technology with real-world problems.",
    detail: "Identifying friction points in education and productivity."
  },
  { 
    stage: "Product Architecture", 
    desc: "Shifted from building applications to designing complete ecosystems.",
    detail: "Designing DevNexus and complex student ecosystems."
  },
  { 
    stage: "Future Scale", 
    desc: "Building scalable platforms and preparing products for larger audiences.",
    detail: "Architecting high-performance global systems."
  },
];

export function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="py-48 px-6 overflow-hidden" ref={sectionRef}>
      <div className="max-w-5xl mx-auto space-y-32">
        <div className="text-center space-y-6 reveal-on-scroll">
          <h2 className="text-[10px] font-bold tracking-[0.5em] text-muted-foreground uppercase">Stages</h2>
          <h3 className="text-5xl md:text-6xl font-headline font-bold">The Journey</h3>
        </div>

        <div className="relative">
          {/* Main Connector */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent -translate-x-1/2" />

          <div className="space-y-48">
            {STAGES.map((item, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center gap-12 reveal-on-scroll",
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 top-0 md:top-auto w-12 h-12 rounded-full glass border-white/20 flex items-center justify-center -translate-x-1/2 z-10 bg-background">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Content Side */}
                <div className="flex-1 w-full pl-16 md:pl-0 md:px-16">
                  <div className="glass p-12 rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all duration-700 hover:shadow-2xl group">
                    <p className="text-[10px] font-bold tracking-[0.3em] text-primary/60 uppercase mb-4">Stage {idx + 1}</p>
                    <h4 className="text-3xl font-headline font-bold mb-6 group-hover:text-primary transition-colors">{item.stage}</h4>
                    <p className="text-muted-foreground text-xl leading-relaxed mb-8 font-light">{item.desc}</p>
                    <div className="pt-8 border-t border-white/5">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">{item.detail}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}