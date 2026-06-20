"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Layers, MapPin, Zap, GraduationCap, Globe, Layout, Sparkles } from "lucide-react";

const AXORA_PRODUCTS = [
  { name: "Reverie", icon: MapPin, x: 20, y: 30, desc: "Memory platform that captures experiences, emotions, stories, and places." },
  { name: "DevNexus", icon: Layout, x: 70, y: 20, desc: "Student ecosystem combining learning, resources, opportunities, and community." },
  { name: "NovaPU", icon: GraduationCap, x: 80, y: 60, desc: "Modern learning platform focused on education and productivity." },
  { name: "Campus Connect", icon: Globe, x: 15, y: 70, desc: "Student networking and community platform." },
  { name: "Zappy", icon: Zap, x: 45, y: 85, desc: "Productivity and workflow simplification platform." },
  { name: "School Web", icon: Layers, x: 50, y: 40, desc: "Premium school website architecture and Parent engagement." },
];

export function AxoraEcosystem() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

    const el = containerRef.current?.querySelector(".reveal-on-scroll");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="axora" className="py-64 px-6 relative overflow-hidden bg-black" ref={containerRef}>
      <div className="absolute inset-0 premium-glow opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="text-center space-y-10 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-[#91766E]/20 text-[11px] font-bold text-[#F6ECE3] uppercase tracking-[0.6em]">Venture Studio</div>
          <h2 className="text-8xl md:text-[10rem] font-headline font-black tracking-tighter uppercase leading-none text-[#F6ECE3]">AXORA</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-2xl md:text-3xl text-[#B7A7A9] font-light leading-relaxed">
              A venture studio for products designed to simplify, connect, empower, and inspire. Axora is the long-term vision dedicated to building meaningful technology across multiple industries.
            </p>
            <div className="h-px w-24 bg-[#91766E]/20 mx-auto" />
            <p className="text-xl text-[#91766E] font-light italic">
              "Build products that create lasting impact."
            </p>
          </div>
        </div>

        <div className="relative h-[600px] md:h-[900px] glass rounded-[5rem] border-white/5 overflow-hidden group">
          {/* Constellation Canvas */}
          <div className="absolute inset-0 pointer-events-none">
             <svg className="w-full h-full">
               <defs>
                 <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="rgba(145,118,110,0.1)" />
                   <stop offset="50%" stopColor="rgba(145,118,110,0.3)" />
                   <stop offset="100%" stopColor="rgba(145,118,110,0.1)" />
                 </linearGradient>
               </defs>
               {AXORA_PRODUCTS.map((p, i) => (
                 <line 
                   key={i}
                   x1="50%" y1="50%"
                   x2={`${p.x}%`} y2={`${p.y}%`}
                   stroke="url(#lineGrad)"
                   strokeWidth="1.5"
                   className="animate-pulse"
                 />
               ))}
             </svg>
          </div>

          {/* Central Axora Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <div className="w-32 h-32 rounded-full glass border-[#91766E]/40 flex items-center justify-center shadow-[0_0_80px_rgba(145,118,110,0.15)] group-hover:scale-110 transition-transform duration-1000">
                <Sparkles className="w-12 h-12 text-[#F6ECE3] animate-pulse" />
             </div>
          </div>

          {/* Product Nodes */}
          {AXORA_PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="absolute transition-all duration-1000 hover:z-30"
              style={{ left: `${product.x}%`, top: `${product.y}%` }}
              onMouseEnter={() => setActiveProduct(product.name)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <div className={cn(
                "relative group cursor-pointer -translate-x-1/2 -translate-y-1/2 transition-all duration-700",
                activeProduct === product.name ? "scale-125" : "scale-100"
              )}>
                <div className="w-20 h-20 rounded-3xl glass border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-[#91766E]/40 group-hover:shadow-[0_0_50px_rgba(145,118,110,0.2)]">
                  <product.icon className="w-8 h-8 text-[#B7A7A9] group-hover:text-[#F6ECE3] transition-colors" />
                </div>
                
                {/* Product Info Card */}
                <div className={cn(
                  "absolute top-full mt-8 left-1/2 -translate-x-1/2 w-64 glass p-8 rounded-3xl border-[#91766E]/20 text-center transition-all duration-700 pointer-events-none",
                  activeProduct === product.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                  <p className="text-[#F6ECE3] font-bold tracking-[0.4em] uppercase text-[10px] mb-3">{product.name}</p>
                  <p className="text-[#B7A7A9] text-sm font-light leading-relaxed">{product.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}