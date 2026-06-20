"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Target, Zap, Users } from "lucide-react";

export function About() {
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
    <section id="founder" ref={sectionRef} className="py-48 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative reveal-on-scroll">
          <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
          <div className="relative aspect-[4/5] w-full max-w-lg mx-auto glass rounded-[3rem] border-white/10 overflow-hidden shadow-2xl group">
             <Image 
               src="https://picsum.photos/seed/founder/800/1000" 
               alt="Syed Sharfuddin Shuaib" 
               fill 
               className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
               data-ai-hint="founder portrait"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
             <div className="absolute bottom-12 left-12 right-12 space-y-4">
                <Badge variant="outline" className="text-primary border-primary/40 py-1 px-4 text-[10px] font-bold uppercase tracking-widest">Founder Portrait</Badge>
                <p className="text-4xl font-headline font-bold">Syed Sharfuddin Shuaib</p>
                <p className="text-muted-foreground font-light text-lg">Architecting the future of student ecosystems.</p>
             </div>
          </div>

          {/* Floating Trait Cards */}
          <div className="absolute -right-8 top-1/4 glass p-6 rounded-2xl border-primary/20 animate-float">
             <div className="flex items-center gap-4">
               <Target className="w-5 h-5 text-primary" />
               <span className="text-xs font-bold tracking-widest uppercase">Systems Thinker</span>
             </div>
          </div>
          <div className="absolute -left-8 bottom-1/4 glass p-6 rounded-2xl border-secondary/20 animate-float [animation-delay:-4s]">
             <div className="flex items-center gap-4">
               <Zap className="w-5 h-5 text-secondary" />
               <span className="text-xs font-bold tracking-widest uppercase">Product Architect</span>
             </div>
          </div>
        </div>

        <div className="space-y-12 reveal-on-scroll delay-300">
          <div className="space-y-6">
            <h2 className="text-[11px] font-bold tracking-[0.5em] text-primary uppercase">Beyond The Products</h2>
            <h3 className="text-5xl md:text-7xl font-headline font-bold leading-[0.9] tracking-tighter">
              The Builder Behind <br />
              <span className="text-white/30 italic">The Systems.</span>
            </h3>
          </div>

          <div className="space-y-8 text-xl text-muted-foreground leading-relaxed font-light">
            <p>
              I focus on creating technology that solves meaningful real-world problems at scale. My journey began with engineering, but evolved into a pursuit of product philosophy.
            </p>
            <p>
              Today, I architect ecosystems like <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-8">DevNexus</span> and <span className="text-foreground font-medium underline decoration-secondary/30 underline-offset-8">Reverie</span>, focusing on the human experience before the code.
            </p>
            <p className="text-foreground text-2xl font-headline italic">
              "Great products are defined by impact, not complexity."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8">
             <div className="space-y-2">
                <p className="text-4xl font-headline font-bold text-primary">5+</p>
                <p className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">Active Builds</p>
             </div>
             <div className="space-y-2">
                <p className="text-4xl font-headline font-bold text-secondary">2026</p>
                <p className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">Vision Horizon</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
