"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Layers, MapPin, Zap, GraduationCap, Globe, Layout, Sparkles } from "lucide-react";

const AXORA_PRODUCTS = [
  { 
    name: "Reverie", 
    icon: MapPin, 
    x: 20, 
    y: 30, 
    category: "Memory Platform", 
    status: "In Development",
    desc: "Memory platform that captures experiences, emotions, stories, and places." 
  },
  { 
    name: "DevNexus", 
    icon: Layout, 
    x: 70, 
    y: 20, 
    category: "Student Ecosystem",
    status: "Production Ready",
    desc: "Student ecosystem combining learning, resources, opportunities, and community." 
  },
  { 
    name: "NovaPU", 
    icon: GraduationCap, 
    x: 80, 
    y: 60, 
    category: "Learning Platform",
    status: "Live",
    desc: "Modern learning platform focused on education and productivity." 
  },
  { 
    name: "Campus Connect", 
    icon: Globe, 
    x: 15, 
    y: 70, 
    category: "Networking",
    status: "Beta",
    desc: "Student networking and community platform." 
  },
  { 
    name: "Zappy", 
    icon: Zap, 
    x: 45, 
    y: 85, 
    category: "Productivity",
    status: "Production",
    desc: "Productivity and workflow simplification platform." 
  },
  { 
    name: "Global Group of Schools", 
    icon: Layers, 
    x: 50, 
    y: 40, 
    category: "Education Technology", 
    status: "Completed",
    desc: "A modern digital platform designed for educational institutions with a focus on admissions, academic information, parent engagement, and school branding." 
  },
];

export function AxoraEcosystem() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
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
             <svg className="w-full h-full" preserveAspectRatio="none">
               <defs>
                 <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="rgba(145,118,110,0.1)" />
                   <stop offset="50%" stopColor="rgba(145,118,110,0.3)" />
                   <stop offset="100%" stopColor="rgba(145,118,110,0.1)" />
                 </linearGradient>
               </defs>
               {isMounted && AXORA_PRODUCTS.map((p, i) => (
                 <React.Fragment key={i}>
                   {/* Connection Line */}
                   <line 
                     x1="50%" y1="50%"
                     x2={`${p.x}%`} y2={`${p.y}%`}
                     stroke="url(#lineGrad)"
                     strokeWidth="1"
                     className="opacity-40"
                   />
                   {/* Traveling Particle */}
                   <circle r="1.5" fill="#F6ECE3" className="opacity-80">
                     <animateMotion 
                       dur={`${3 + Math.random() * 4}s`} 
                       repeatCount="indefinite" 
                       path={`M ${window.innerWidth * 0.5} ${window.innerHeight * 0.45} L ${p.x * 10} ${p.y * 10}`}
                     />
                   </circle>
                 </React.Fragment>
               ))}
             </svg>
             
             {/* CSS-based Particles for better responsiveness */}
             {isMounted && AXORA_PRODUCTS.map((p, i) => (
               <div 
                 key={`particle-${i}`}
                 className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-[#F6ECE3]/40 blur-[1px] pointer-events-none"
                 style={{
                   animation: `travel-${i} ${4 + Math.random() * 3}s linear infinite`,
                   '--target-x': `${p.x - 50}%`,
                   '--target-y': `${p.y - 50}%`,
                 } as any}
               />
             ))}
          </div>

          <style jsx>{`
            ${AXORA_PRODUCTS.map((_, i) => `
              @keyframes travel-${i} {
                0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                10% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                90% { transform: translate(calc(-50% + var(--target-x)), calc(-50% + var(--target-y))) scale(1); opacity: 1; }
                100% { transform: translate(calc(-50% + var(--target-x)), calc(-50% + var(--target-y))) scale(0); opacity: 0; }
              }
            `).join('\n')}
          `}</style>

          {/* Central Axora Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <div className="w-40 h-40 rounded-full glass border-[#91766E]/40 flex flex-col items-center justify-center shadow-[0_0_100px_rgba(145,118,110,0.2)] group-hover:scale-105 transition-transform duration-1000">
                <Sparkles className="w-10 h-10 text-[#F6ECE3] mb-3 animate-pulse" />
                <span className="text-[#F6ECE3] font-headline font-bold text-xs tracking-[0.5em] uppercase">AXORA</span>
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
                activeProduct === product.name ? "scale-110" : "scale-100"
              )}>
                <div className="w-20 h-20 rounded-3xl glass border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-[#91766E]/40 group-hover:shadow-[0_0_50px_rgba(145,118,110,0.2)]">
                  <product.icon className="w-8 h-8 text-[#B7A7A9] group-hover:text-[#F6ECE3] transition-colors" />
                </div>
                
                {/* Product Info Card (Tooltip) */}
                <div className={cn(
                  "absolute top-full mt-8 left-1/2 -translate-x-1/2 w-72 glass p-8 rounded-3xl border-[#91766E]/20 text-center transition-all duration-700 pointer-events-none z-50 shadow-2xl",
                  activeProduct === product.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-[#91766E] font-bold tracking-[0.6em] text-[8px] uppercase">{product.category}</p>
                      <p className="text-[#F6ECE3] font-bold tracking-[0.3em] uppercase text-xs">{product.name}</p>
                    </div>
                    
                    <p className="text-[#B7A7A9] text-xs font-light leading-relaxed">
                      {product.desc}
                    </p>

                    <div className="pt-4 border-t border-white/5">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold tracking-[0.2em] text-[#F6ECE3] uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#91766E] animate-pulse" />
                        {product.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
