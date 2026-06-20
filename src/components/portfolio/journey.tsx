"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const STAGES = [
  { 
    stage: "Curiosity", 
    desc: "Learning how technology works and understanding systems at their most fundamental level.",
    detail: "Core Logic & System Foundations"
  },
  { 
    stage: "Creation", 
    desc: "Building projects, experimenting, and turning abstract ideas into digital reality.",
    detail: "Rapid Prototyping & Development"
  },
  { 
    stage: "Systems Thinking", 
    desc: "Looking beyond code to understand complete product ecosystems and human friction points.",
    detail: "Structural Mapping & Architecture"
  },
  { 
    stage: "Product Architecture", 
    desc: "Designing scalable products, high-impact experiences, and digital platforms with intention.",
    detail: "Ecosystem Design & Strategy"
  },
  { 
    stage: "Founder Mindset", 
    desc: "Moving from building software to building companies that solve meaningful problems.",
    detail: "Business Logic & Founder Vision"
  },
  { 
    stage: "Future Vision", 
    desc: "Creating technology ecosystems capable of impacting and serving millions of people.",
    detail: "Scalability & Long-term Impact"
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
    <section id="journey" className="py-64 px-6 overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto space-y-48">
        <div className="text-center space-y-8 reveal-on-scroll">
          <h2 className="text-[11px] font-bold tracking-[0.8em] text-primary/60 uppercase">The Evolution</h2>
          <h3 className="text-6xl md:text-[8rem] font-headline font-black tracking-tighter uppercase leading-none">The Journey</h3>
        </div>

        <div className="relative">
          {/* Main Connector */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-white/5 to-transparent -translate-x-1/2" />

          <div className="space-y-64">
            {STAGES.map((item, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center gap-16 reveal-on-scroll",
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 top-0 md:top-auto w-16 h-16 rounded-full glass border-white/20 flex items-center justify-center -translate-x-1/2 z-10 bg-background shadow-[0_0_40px_rgba(200,217,230,0.1)]">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Content Side */}
                <div className="flex-1 w-full pl-20 md:pl-0 md:px-24">
                  <div className="glass p-16 rounded-[4rem] border-white/5 hover:border-primary/20 transition-all duration-1000 hover:shadow-[0_40px_100px_rgba(0,0,0,0.5)] group">
                    <p className="text-[10px] font-bold tracking-[0.6em] text-primary uppercase mb-6">Stage 0{idx + 1}</p>
                    <h4 className="text-4xl md:text-5xl font-headline font-bold mb-8 group-hover:text-primary transition-colors">{item.stage}</h4>
                    <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed mb-10 font-light">{item.desc}</p>
                    <div className="pt-10 border-t border-white/5">
                      <p className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground font-bold">{item.detail}</p>
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
