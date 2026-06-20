"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Layers, MapPin, Zap, GraduationCap, Globe, Layout, Sparkles, Target, Compass, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AXORA_PRODUCTS = [
  { 
    name: "Reverie", 
    icon: MapPin, 
    x: 20, 
    y: 30, 
    category: "Memory Platform", 
    status: "In Development",
    desc: "A place-based memory platform helping people preserve stories, emotions, and experiences connected to real-world locations." 
  },
  { 
    name: "DevNexus", 
    icon: Layout, 
    x: 70, 
    y: 20, 
    category: "Student Ecosystem",
    status: "Production Ready",
    desc: "An all-in-one platform designed to help students learn, connect, earn, and grow through a unified digital ecosystem." 
  },
  { 
    name: "NovaPU", 
    icon: GraduationCap, 
    x: 80, 
    y: 60, 
    category: "Education Technology",
    status: "Live",
    desc: "A modern digital platform designed for structured academic prep and effective learning experiences." 
  },
  { 
    name: "Campus Connect", 
    icon: Globe, 
    x: 15, 
    y: 70, 
    category: "Community Platform",
    status: "Beta",
    desc: "A hyper-local networking engine designed specifically for university environments to foster collaboration." 
  },
  { 
    name: "Zappy", 
    icon: Zap, 
    x: 45, 
    y: 85, 
    category: "Productivity",
    status: "Production",
    desc: "A minimalist productivity experience designed for deep work, focusing on organization and clarity." 
  },
  { 
    name: "Global Group of Schools", 
    icon: Layers, 
    x: 50, 
    y: 40, 
    category: "Education Technology", 
    status: "Completed",
    desc: "A modern digital platform for educational institutions focused on admissions and parent engagement." 
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

    const children = containerRef.current?.querySelectorAll(".reveal-on-scroll");
    children?.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="axora" className="py-64 px-6 relative overflow-hidden bg-black" ref={containerRef}>
      <div className="absolute inset-0 premium-glow opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-48">
        {/* Intro Section */}
        <div className="text-center space-y-12 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-[#91766E]/20 text-[10px] font-bold text-[#F6ECE3] uppercase tracking-[0.6em]">
            VENTURE STUDIO • ECOSYSTEM • FUTURE
          </div>
          
          <div className="space-y-8">
            <h2 className="text-8xl md:text-[12rem] font-headline font-black tracking-tighter uppercase leading-none text-[#F6ECE3] drop-shadow-[0_0_30px_rgba(246,236,227,0.1)]">
              AXORA
            </h2>
            <p className="text-2xl md:text-4xl text-[#B7A7A9] font-light leading-tight max-w-4xl mx-auto">
              Building products, systems, and digital ecosystems that solve meaningful problems and create lasting impact.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-12 text-left md:text-center">
            <div className="space-y-8 text-xl md:text-2xl text-[#B7A7A9] font-light leading-relaxed italic">
              <p className="reveal-on-scroll stagger-1">
                "Axora began with a simple belief: Every meaningful product starts with a problem worth solving."
              </p>
              <p className="reveal-on-scroll stagger-2 not-italic">
                What started as individual projects has evolved into a larger vision — a venture studio dedicated to building technology that simplifies complexity, creates opportunity, and improves everyday experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Constellation Visualization */}
        <div className="relative h-[600px] md:h-[900px] glass rounded-[5rem] border-white/5 overflow-hidden group reveal-on-scroll">
          {/* Constellation Canvas */}
          <div className="absolute inset-0 pointer-events-none">
             <svg className="w-full h-full" preserveAspectRatio="none">
               <defs>
                 <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="rgba(145,118,110,0.05)" />
                   <stop offset="50%" stopColor="rgba(145,118,110,0.2)" />
                   <stop offset="100%" stopColor="rgba(145,118,110,0.05)" />
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
                 </React.Fragment>
               ))}
             </svg>
             
             {/* Traveling Particles */}
             {isMounted && AXORA_PRODUCTS.map((p, i) => (
               <div 
                 key={`particle-${i}`}
                 className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-[#F6ECE3]/40 blur-[1px] pointer-events-none z-10"
                 style={{
                   animation: `travel-${i} ${5 + Math.random() * 5}s linear infinite`,
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
                5% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                95% { transform: translate(calc(-50% + var(--target-x) * 10), calc(-50% + var(--target-y) * 10)) scale(1); opacity: 1; }
                100% { transform: translate(calc(-50% + var(--target-x) * 10), calc(-50% + var(--target-y) * 10)) scale(0); opacity: 0; }
              }
            `).join('\n')}
          `}</style>

          {/* Central Axora Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <div className="w-48 h-48 rounded-full glass border-[#91766E]/40 flex flex-col items-center justify-center shadow-[0_0_100px_rgba(145,118,110,0.2)] group-hover:scale-105 transition-transform duration-1000 relative">
                <div className="absolute inset-0 rounded-full animate-pulse bg-[#91766E]/10 blur-2xl" />
                <Sparkles className="w-12 h-12 text-[#F6ECE3] mb-4 animate-pulse relative z-10" />
                <span className="text-[#F6ECE3] font-headline font-bold text-sm tracking-[0.6em] uppercase relative z-10">AXORA</span>
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
                
                {/* Product Info Card */}
                <div className={cn(
                  "absolute top-full mt-8 left-1/2 -translate-x-1/2 w-80 glass p-8 rounded-[2.5rem] border-[#91766E]/20 text-center transition-all duration-700 pointer-events-none z-50 shadow-2xl backdrop-blur-3xl",
                  activeProduct === product.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <p className="text-[#91766E] font-bold tracking-[0.6em] text-[9px] uppercase">{product.category}</p>
                      <p className="text-[#F6ECE3] font-bold tracking-[0.3em] uppercase text-sm">{product.name}</p>
                    </div>
                    
                    <p className="text-[#B7A7A9] text-xs font-light leading-relaxed">
                      {product.desc}
                    </p>

                    <div className="pt-5 border-t border-white/5">
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold tracking-[0.2em] text-[#F6ECE3] uppercase">
                        <span className="w-2 h-2 rounded-full bg-[#91766E] animate-pulse" />
                        {product.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Philosophy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div className="space-y-24 reveal-on-scroll">
            <div className="space-y-10">
              <div className="flex items-center gap-4 text-[#91766E]">
                <Target className="w-6 h-6" />
                <h4 className="text-[10px] font-bold tracking-[0.6em] uppercase">Mission Statement</h4>
              </div>
              <p className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tighter leading-none italic">
                "Turning Problems Into Powerful Solutions."
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-center gap-4 text-[#91766E]">
                <Compass className="w-6 h-6" />
                <h4 className="text-[10px] font-bold tracking-[0.6em] uppercase">Vision Statement</h4>
              </div>
              <p className="text-xl md:text-2xl text-[#B7A7A9] font-light leading-relaxed">
                To build a portfolio of impactful technology products that empower individuals, communities, and businesses through thoughtful innovation and human-centered design.
              </p>
            </div>
          </div>

          <div className="space-y-24 reveal-on-scroll delay-300">
            <div className="space-y-10">
              <div className="flex items-center gap-4 text-[#91766E]">
                <Rocket className="w-6 h-6" />
                <h4 className="text-[10px] font-bold tracking-[0.6em] uppercase">Future Statement</h4>
              </div>
              <p className="text-xl md:text-2xl text-[#B7A7A9] font-light leading-relaxed">
                The goal is not simply to launch applications. The goal is to build systems, platforms, and businesses that continue creating value for years to come. Axora represents that journey.
              </p>
            </div>

            <div className="glass p-12 rounded-[3.5rem] border-[#91766E]/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10">
                <Sparkles className="w-10 h-10 text-[#91766E]/20 group-hover:text-[#F6ECE3] transition-colors duration-1000" />
              </div>
              <div className="space-y-8 relative z-10">
                <p className="text-[10px] font-bold tracking-[0.6em] text-[#91766E] uppercase">Founder Note</p>
                <div className="space-y-6">
                  <p className="text-3xl font-headline font-bold text-white italic tracking-tight">
                    "Every project begins with one question: 'What problem am I solving?'"
                  </p>
                  <p className="text-[#B7A7A9] text-lg font-light leading-relaxed">
                    That question continues to guide every product, decision, and vision behind Axora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}