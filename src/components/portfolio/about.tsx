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
    <section id="founder" ref={sectionRef} className="py-64 px-6 relative bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="relative reveal-on-scroll">
          <div className="absolute inset-0 bg-[#91766E]/10 blur-[120px] rounded-full animate-pulse" />
          <div className="relative aspect-[4/5] w-full max-w-xl mx-auto glass rounded-[4rem] border-white/10 overflow-hidden shadow-2xl group">
             <Image 
               src="https://picsum.photos/seed/founder-modern/800/1000" 
               alt="Syed Sharfuddin Shuaib" 
               fill 
               className="object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-1000"
               data-ai-hint="founder professional portrait"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
             <div className="absolute bottom-16 left-16 right-16 space-y-6">
                <Badge variant="outline" className="text-[#F6ECE3] border-[#91766E]/40 py-1.5 px-6 text-[10px] font-bold uppercase tracking-[0.4em]">Founder Portrait</Badge>
                <p className="text-5xl font-headline font-black tracking-tighter text-white">Syed Sharfuddin <br />Shuaib</p>
                <p className="text-[#F6ECE3]/60 font-light text-xl italic tracking-wide">Architecting future digital ecosystems.</p>
             </div>
          </div>

          {/* Floating Trait Cards */}
          <div className="absolute -right-12 top-1/4 glass p-8 rounded-3xl border-[#91766E]/20 animate-float">
             <div className="flex items-center gap-5">
               <Target className="w-6 h-6 text-[#F6ECE3]" />
               <span className="text-xs font-bold tracking-[0.4em] uppercase text-[#B7A7A9]">Founder Mindset</span>
             </div>
          </div>
          <div className="absolute -left-12 bottom-1/4 glass p-8 rounded-3xl border-[#91766E]/20 animate-float [animation-delay:-4s]">
             <div className="flex items-center gap-5">
               <Zap className="w-6 h-6 text-[#B7A7A9]" />
               <span className="text-xs font-bold tracking-[0.4em] uppercase text-[#B7A7A9]">Product Architect</span>
             </div>
          </div>
        </div>

        <div className="space-y-16 reveal-on-scroll delay-300">
          <div className="space-y-8">
            <h2 className="text-[11px] font-bold tracking-[0.8em] text-[#91766E]/60 uppercase">Who I Am</h2>
            <h3 className="text-6xl md:text-8xl font-headline font-black leading-[0.85] tracking-tighter text-white">
              The Builder Behind <br />
              <span className="text-[#F6ECE3]/30 italic">The Systems.</span>
            </h3>
          </div>

          <div className="space-y-10 text-2xl text-[#B7A7A9] leading-relaxed font-light">
            <p>
              I'm Syed Sharfuddin Shuaib — a builder, founder, and product architect focused on creating technology that solves meaningful problems.
            </p>
            <p>
              My journey began with engineering, but evolved into a pursuit of product architecture. Today, I architect ecosystems like <span className="text-[#F6ECE3] font-medium underline decoration-[#91766E]/30 underline-offset-8">DevNexus</span> and <span className="text-[#F6ECE3] font-medium underline decoration-[#B7A7A9]/30 underline-offset-8">Reverie</span>, focusing on the human experience before the code.
            </p>
            <p>
              Every project is driven by a simple belief: <span className="text-[#F6ECE3] font-medium">Technology should create real value for real people.</span>
            </p>
            <p className="text-[#F6ECE3] text-3xl font-headline italic font-light pt-8">
              "Great products are defined by impact, not complexity."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
             <div className="space-y-4">
                <p className="text-5xl font-headline font-black text-[#F6ECE3]">6+</p>
                <p className="text-[11px] font-bold tracking-[0.4em] text-[#B7A7A9] uppercase">Active Ecosystems</p>
             </div>
             <div className="space-y-4">
                <p className="text-5xl font-headline font-black text-[#91766E]">Axora</p>
                <p className="text-[11px] font-bold tracking-[0.4em] text-[#B7A7A9] uppercase">Core Vision</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}