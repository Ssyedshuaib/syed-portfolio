"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

export function Philosophy() {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="philosophy" className="py-48 px-6" ref={sectionRef}>
      <div className="max-w-4xl mx-auto space-y-24">
        <div className="flex items-center gap-6 opacity-40 reveal-on-scroll">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
          <Sparkles className="w-6 h-6 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
        </div>

        <div className="space-y-16 text-center">
          <h2 className="text-sm font-bold tracking-[0.5em] text-primary uppercase reveal-on-scroll stagger-1">Why I Build</h2>
          
          <div className="space-y-12">
            <p className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] text-gradient reveal-on-scroll stagger-2">
              Technology becomes meaningful when it solves real problems.
            </p>
            
            <div className="max-w-2xl mx-auto space-y-10 text-xl md:text-2xl text-muted-foreground leading-relaxed font-light reveal-on-scroll stagger-3">
              <p>
                I enjoy transforming ideas into products that help people learn, connect, grow, and achieve more.
              </p>
              
              <div className="relative py-16 group">
                 <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none transition-transform duration-1000 group-hover:scale-110">
                    <span className="text-[12rem] font-headline font-black uppercase tracking-tighter">Problem</span>
                 </div>
                 <div className="relative z-10 glass p-10 rounded-[3rem] border-white/5 group-hover:border-primary/20 transition-all duration-700">
                   <p className="text-foreground text-2xl md:text-3xl font-medium leading-tight">
                    Every project begins with a simple question: <br />
                    <span className="italic text-primary block mt-4 text-4xl font-headline">"What problem am I solving?"</span>
                  </p>
                 </div>
              </div>

              <p className="reveal-on-scroll stagger-4">
                This philosophy guides every product, experiment, and platform I create. I don't just build code; I architect solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}