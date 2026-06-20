"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Layers, MapPin, Zap, GraduationCap, Globe, Layout, Sparkles } from "lucide-react";

const AXORA_PRODUCTS = [
  { name: "Reverie", icon: MapPin, x: 20, y: 30, desc: "Spatial Memory Platform" },
  { name: "DevNexus", icon: Layout, x: 70, y: 20, desc: "Student OS" },
  { name: "NovaPU", icon: GraduationCap, x: 80, y: 60, desc: "Learning Hub" },
  { name: "Campus Connect", icon: Globe, x: 15, y: 70, desc: "Student Community" },
  { name: "Zappy", icon: Zap, x: 45, y: 85, desc: "Productivity Engine" },
  { name: "School Web", icon: Layers, x: 50, y: 40, desc: "Digital Experience" },
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
    <section id="axora" className="py-64 px-6 relative overflow-hidden" ref={containerRef}>
      <div className="aurora-blur w-[800px] h-[800px] bg-primary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="text-center space-y-10 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">Company Vision</div>
          <h2 className="text-7xl md:text-9xl font-headline font-bold tracking-tighter uppercase">AXORA</h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            A venture studio and ecosystem for products that simplify, connect, and empower. Axora is the vessel for my long-term vision of human-centered technology.
          </p>
        </div>

        <div className="relative h-[600px] md:h-[800px] glass rounded-[4rem] border-white/5 overflow-hidden group">
          {/* Constellation Canvas */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
             <svg className="w-full h-full">
               {AXORA_PRODUCTS.map((p, i) => (
                 <line 
                   key={i}
                   x1="50%" y1="50%"
                   x2={`${p.x}%`} y2={`${p.y}%`}
                   stroke="rgba(125,211,252,0.3)"
                   strokeWidth="1"
                   className="animate-pulse"
                 />
               ))}
             </svg>
          </div>

          {/* Central Axora Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <div className="w-24 h-24 rounded-full glass border-primary/40 flex items-center justify-center shadow-[0_0_50px_rgba(125,211,252,0.2)]">
                <Sparkles className="w-10 h-10 text-primary animate-pulse" />
             </div>
          </div>

          {/* Product Nodes */}
          {AXORA_PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="absolute transition-all duration-700 hover:z-30"
              style={{ left: `${product.x}%`, top: `${product.y}%` }}
              onMouseEnter={() => setActiveProduct(product.name)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <div className={cn(
                "relative group cursor-pointer -translate-x-1/2 -translate-y-1/2",
                activeProduct === product.name ? "scale-125" : "scale-100"
              )}>
                <div className="w-16 h-16 rounded-2xl glass border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(125,211,252,0.2)]">
                  <product.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                {/* Product Info Card */}
                <div className={cn(
                  "absolute top-full mt-6 left-1/2 -translate-x-1/2 w-48 glass p-6 rounded-2xl border-primary/20 text-center transition-all duration-500 pointer-events-none",
                  activeProduct === product.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                  <p className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2">{product.name}</p>
                  <p className="text-muted-foreground text-[11px] font-light leading-tight">{product.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
