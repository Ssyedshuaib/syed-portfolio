"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const TIMELINE = [
  { 
    year: "2022", 
    title: "The Foundation", 
    desc: "Started Computer Science Engineering. Focusing on the logic that powers systems.",
    detail: "Immersed in data structures and architectural patterns."
  },
  { 
    year: "2023", 
    title: "Digital Synthesis", 
    desc: "Began exploring the intersection of web development and product design.",
    detail: "Realized that software is only as good as the problem it solves."
  },
  { 
    year: "2024", 
    title: "System Intelligence", 
    desc: "Collaborative development and machine learning exploration.",
    detail: "Built systems that learn and adapt to user needs."
  },
  { 
    year: "2025", 
    title: "Product Architecture", 
    desc: "Focused heavily on building full-scale digital products and premium user experiences.",
    detail: "Transitioning from developer to product architect."
  },
  { 
    year: "2026", 
    title: "Future Scale", 
    desc: "Developing scalable platforms and preparing products for global deployment.",
    detail: "Architecting the next generation of student-focused ecosystems."
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

    const cards = sectionRef.current?.querySelectorAll(".journey-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="py-32 px-6 bg-secondary/20" ref={sectionRef}>
      <div className="max-w-5xl mx-auto space-y-24">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase">Storytelling</h2>
          <h3 className="text-5xl font-headline font-bold">The Journey So Far</h3>
        </div>

        <div className="relative">
          {/* Main Connector */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/5 to-transparent -translate-x-1/2" />

          <div className="space-y-32">
            {TIMELINE.map((item, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center gap-12 journey-card fade-in-section",
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Visual Side */}
                <div className="flex-1 w-full hidden md:block">
                  <div className={cn(
                    "flex flex-col",
                    idx % 2 === 0 ? "items-end text-right" : "items-start text-left"
                  )}>
                    <span className="text-8xl font-headline font-black text-white/[0.03] select-none leading-none">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-[20px] md:left-1/2 top-0 md:top-auto w-10 h-10 rounded-full glass border-primary/50 flex items-center justify-center -translate-x-1/2 z-10 bg-background shadow-[0_0_20px_rgba(215,178,157,0.2)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Content Side */}
                <div className="flex-1 w-full pl-16 md:pl-0 md:px-16">
                  <div className="glass p-10 rounded-[2rem] border-white/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl group">
                    <span className="md:hidden text-primary font-bold tracking-widest mb-2 block">{item.year}</span>
                    <h4 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-light">{item.desc}</p>
                    <div className="pt-6 border-t border-white/5">
                      <p className="text-xs uppercase tracking-widest text-primary/60 font-bold">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}