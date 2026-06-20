"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles, Target, Zap, TrendingUp, Cpu, Globe } from "lucide-react";

const STATEMENTS = [
  { text: "Build a startup and become a founder.", icon: Target },
  { text: "Build products that solve meaningful problems.", icon: Sparkles },
  { text: "Create technology people genuinely enjoy using.", icon: Zap },
  { text: "Scale Axora into a multi-product technology company.", icon: Globe },
  { text: "Turn ideas into systems.", icon: Cpu },
  { text: "Turn businesses into impact.", icon: TrendingUp },
];

export function WhatImBuilding() {
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

    const children = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
    children?.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-64 px-6 bg-[#3A506B]/5" ref={sectionRef}>
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="text-center space-y-8 reveal-on-scroll">
          <h2 className="text-[11px] font-bold tracking-[0.8em] text-primary/60 uppercase">The Vision</h2>
          <h3 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter">WHAT I'M BUILDING</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STATEMENTS.map((item, idx) => (
            <div 
              key={idx} 
              className={`glass p-12 rounded-[3rem] group hover:border-primary/30 hover:bg-[#3A506B]/40 transition-all duration-700 reveal-on-scroll stagger-${(idx % 4) + 1}`}
            >
              <div className="space-y-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-8 h-8 text-primary/60 group-hover:text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-light leading-snug group-hover:text-foreground transition-colors">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
