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
    <section id="founder" ref={sectionRef} className="py-64 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="relative reveal-on-scroll">
          <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full animate-pulse" />
          <div className="relative aspect-[4/5] w-full max-w-xl mx-auto glass rounded-[4rem] border-white/10 overflow-hidden shadow-2xl group">
             <Image 
               src="https://picsum.photos/seed/founder-modern/800/1000" 
               alt="Syed Sharfuddin Shuaib" 
               fill 
               className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
               data-ai-hint="founder professional portrait"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
             <div className="absolute bottom-16 left-16 right-16 space-y-6">
                <Badge variant="outline" className="text-primary border-primary/40 py-1.5 px-6 text-[10px] font-bold uppercase tracking-[0.4em]">Founder Portrait</Badge>
                <p className="text-5xl font-headline font-black tracking-tighter">Syed Sharfuddin <br />Shuaib</p>
                <p className="text-primary/60 font-light text-xl italic tracking-wide">Architecting future digital ecosystems.</p>
             </div>
          </div>

          {/* Floating Trait Cards */}
          <div className="absolute -right-12 top-1/4 glass p-8 rounded-3xl border-primary/20 animate-float">
             <div className="flex items-center gap-5">
               <Target className="w-6 h-6 text-primary" />
               <span className="text-xs font-bold tracking-[0.4em] uppercase">Founder Mindset</span>
             </div>
          </div>
          <div className="absolute -left-12 bottom-1/4 glass p-8 rounded-3xl border-secondary/20 animate-float [animation-delay:-4s]">
             <div className="flex items-center gap-5">
               <Zap className="w-6 h-6 text-secondary" />
               <span className="text-xs font-bold tracking-[0.4em] uppercase">Product Architect</span>
             </div>
          </div>
        </div>

        <div className="space-y-16 reveal-on-scroll delay-300">
          <div className="space-y-8">
            <h2 className="text-[11px] font-bold tracking-[0.8em] text-primary/60 uppercase">Who I Am</h2>
            <h3 className="text-6xl md:text-8xl font-headline font-black leading-[0.85] tracking-tighter">
              The Builder Behind <br />
              <span className="text-primary/30 italic">The Systems.</span>
            </h3>
          </div>

          <div className="space-y-10 text-2xl text-muted-foreground leading-relaxed font-light">
            <p>
              I'm Syed Sharfuddin Shuaib — a builder, founder, and product architect focused on creating technology that solves meaningful problems.
            </p>
            <p>
              My journey began with engineering, but evolved into a pursuit of product architecture. Today, I architect ecosystems like <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-8">DevNexus</span> and <span className="text-foreground font-medium underline decoration-secondary/30 underline-offset-8">Reverie</span>, focusing on the human experience before the code.
            </p>
            <p>
              Every project is driven by a simple belief: <span className="text-foreground font-medium">Technology should create real value for real people.</span>
            </p>
            <p className="text-foreground text-3xl font-headline italic font-light pt-8">
              "Great products are defined by impact, not complexity."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
             <div className="space-y-4">
                <p className="text-5xl font-headline font-black text-primary">6+</p>
                <p className="text-[11px] font-bold tracking-[0.4em] text-muted-foreground uppercase">Active Ecosystems</p>
             </div>
             <div className="space-y-4">
                <p className="text-5xl font-headline font-black text-secondary">Axora</p>
                <p className="text-[11px] font-bold tracking-[0.4em] text-muted-foreground uppercase">Core Vision</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
