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
      <div className="max-w-5xl mx-auto space-y-32">
        <div className="space-y-12 text-center reveal-on-scroll">
          <h2 className="text-[10px] font-bold tracking-[0.5em] text-muted-foreground uppercase">Philosophy</h2>
          <h3 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
            Technology becomes meaningful when it solves <span className="text-primary/60 italic">real problems.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal-on-scroll delay-200">
          <div className="glass p-12 rounded-[2.5rem] border-white/5 space-y-8 flex flex-col justify-center">
             <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              I believe great products are not built by adding features. They're built by removing friction, understanding people, and solving problems that genuinely matter.
            </p>
          </div>
          
          <div className="glass p-12 rounded-[2.5rem] border-white/10 space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
              <Sparkles className="w-8 h-8 text-white/10 group-hover:text-primary/40 transition-colors" />
            </div>
            <div className="space-y-6">
              <p className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">Core Principle</p>
              <h4 className="text-3xl font-headline font-bold">"What problem deserves solving?"</h4>
              <p className="text-muted-foreground leading-relaxed">
                This question guides every product, experiment, and platform I create. I don't just build code; I architect solutions that scale human capability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}