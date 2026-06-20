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

    const cards = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="py-48 px-6 bg-secondary/20 overflow-hidden" ref={sectionRef}>
      <div className="max-w-5xl mx-auto space-y-32">
        <div className="text-center space-y-6 reveal-on-scroll">
          <h2 className="text-sm font-bold tracking-[0.5em] text-primary uppercase">Storytelling</h2>
          <h3 className="text-5xl md:text-6xl font-headline font-bold">The Journey So Far</h3>
        </div>

        <div className="relative">
          {/* Main Connector */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/60 via-primary/5 to-transparent -translate-x-1/2" />

          <div className="space-y-48">
            {TIMELINE.map((item, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center gap-12 reveal-on-scroll",
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Visual Side */}
                <div className="flex-1 w-full hidden md:block">
                  <div className={cn(
                    "flex flex-col",
                    idx % 2 === 0 ? "items-end text-right" : "items-start text-left"
                  )}>
                    <span className="text-[12rem] font-headline font-black text-white/[0.02] select-none leading-none transition-transform duration-1000 hover:scale-105 block">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-[20px] md:left-1/2 top-0 md:top-auto w-12 h-12 rounded-full glass border-primary/40 flex items-center justify-center -translate-x-1/2 z-10 bg-background shadow-[0_0_30px_rgba(215,178,157,0.15)] transition-all duration-700">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Content Side */}
                <div className="flex-1 w-full pl-16 md:pl-0 md:px-16">
                  <div className="glass p-12 rounded-[3rem] border-white/5 hover:border-primary/30 transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] group group-hover:translate-y-[-8px]">
                    <span className="md:hidden text-primary font-bold tracking-widest mb-4 block text-lg">{item.year}</span>
                    <h4 className="text-3xl font-headline font-bold mb-6 group-hover:text-primary transition-colors duration-500">{item.title}</h4>
                    <p className="text-muted-foreground text-xl leading-relaxed mb-8 font-light">{item.desc}</p>
                    <div className="pt-8 border-t border-white/5">
                      <p className="text-xs uppercase tracking-[0.3em] text-primary/70 font-bold">{item.detail}</p>
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