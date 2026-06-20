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
    y: 12, 
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
  }, []);

  if (!isMounted) {
    return <section id="axora" className="py-64 bg-background" />;
  }

  return (
    <section id="axora" className="py-64 px-6 relative overflow-hidden bg-background" ref={containerRef}>
      <div className="absolute inset-0 premium-glow opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-48">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center space-y-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-[#EAE0C8]/20 text-[10px] font-bold text-[#EAE0C8] uppercase tracking-[0.6em]">
            VENTURE STUDIO • ECOSYSTEM • FUTURE
          </div>
          
          <div className="space-y-8">
            <h2 className="text-8xl md:text-[12rem] font-headline font-black tracking-tighter uppercase leading-none text-white drop-shadow-[0_0_30px_rgba(83,104,120,0.1)]">
              AXORA
            </h2>
            <p className="text-2xl md:text-3xl text-[#EAE0C8]/70 font-light leading-tight max-w-4xl mx-auto">
              Building products, systems, and digital ecosystems that solve meaningful problems and create lasting impact.
            </p>
          </div>
        </motion.div>

        <div className="relative h-[600px] md:h-[900px] glass rounded-[5rem] border-white/5 overflow-hidden group">
          <div className="absolute inset-0 pointer-events-none">
             <svg className="w-full h-full">
               {AXORA_PRODUCTS.map((p, i) => (
                 <motion.line 
                   key={i}
                   x1="50%" y1="50%"
                   x2={`${p.x}%`} y2={`${p.y}%`}
                   stroke="rgba(234,224,200,0.15)"
                   strokeWidth="1"
                   initial={{ pathLength: 0, opacity: 0 }}
                   whileInView={{ pathLength: 1, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.5, delay: i * 0.1 }}
                 />
               ))}
               {AXORA_PRODUCTS.map((p, i) => (
                 <motion.circle
                   key={`p-${i}`}
                   r="2"
                   fill="#EAE0C8"
                   initial={{ opacity: 0 }}
                   animate={{ 
                     cx: ["50%", `${p.x}%`],
                     cy: ["50%", `${p.y}%`],
                     opacity: [0, 1, 0]
                   }}
                   transition={{ 
                     duration: 3, 
                     repeat: Infinity, 
                     delay: i * 0.5,
                     ease: "linear"
                   }}
                 />
               ))}
             </svg>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <motion.div 
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="w-48 h-48 rounded-full glass border-[#EAE0C8]/40 flex flex-col items-center justify-center shadow-[0_0_100px_rgba(83,104,120,0.2)]"
             >
                <div className="absolute inset-0 rounded-full bg-[#536878]/5 blur-2xl animate-pulse" />
                <Sparkles className="w-10 h-10 text-[#EAE0C8] mb-4 relative z-10" />
                <span className="text-[#EAE0C8] font-headline font-bold text-xs tracking-[0.6em] uppercase relative z-10">AXORA</span>
             </motion.div>
          </div>

          {AXORA_PRODUCTS.map((product) => (
            <motion.div
              key={product.name}
              className="absolute transition-all duration-1000"
              style={{ left: `${product.x}%`, top: `${product.y}%` }}
              onMouseEnter={() => setActiveProduct(product.name)}
              onMouseLeave={() => setActiveProduct(null)}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative group cursor-pointer -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                  whileHover={{ 
                    scale: 1.2, 
                    borderColor: "rgba(234,224,200,0.5)",
                    boxShadow: "0 0 25px rgba(83,104,120,0.4)" 
                  }}
                  className="w-16 h-16 rounded-2xl glass border-white/10 flex items-center justify-center transition-all shadow-xl"
                  style={{
                    boxShadow: activeProduct === product.name ? '0 0 30px rgba(83,104,120,0.3)' : 'none'
                  }}
                >
                  <product.icon className="w-6 h-6 text-[#EAE0C8] brightness-125 group-hover:text-[#FFFFFF] transition-colors" />
                </motion.div>
                
                <AnimatePresence>
                  {activeProduct === product.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: product.y > 70 ? -20 : 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: product.y > 70 ? -20 : 20, scale: 0.95 }}
                      className={cn(
                        "absolute left-1/2 -translate-x-1/2 w-72 bg-[#161C21]/80 backdrop-blur-3xl p-6 rounded-3xl border-[#EAE0C8]/30 text-center z-50 shadow-2xl",
                        product.y > 70 ? "bottom-full mb-8" : "top-full mt-8"
                      )}
                    >
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <p className="text-[#536878] font-bold tracking-[0.5em] text-[8px] uppercase">{product.category}</p>
                          <p className="text-white font-black tracking-[0.2em] uppercase text-sm">{product.name}</p>
                        </div>
                        <p className="text-[#EAE0C8]/80 text-[10px] font-light leading-relaxed">{product.desc}</p>
                        <div className="pt-4 border-t border-white/10">
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-[8px] font-bold text-[#EAE0C8] uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#536878] animate-pulse" />
                            {product.status}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-24"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-[#536878]">
                <Target className="w-5 h-5" />
                <h4 className="text-[9px] font-bold tracking-[0.5em] uppercase">Mission Statement</h4>
              </div>
              <p className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter italic">
                "Turning Problems Into Powerful Solutions."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-24"
          >
            <div className="glass p-12 rounded-[3.5rem] border-[#EAE0C8]/20">
              <div className="space-y-8">
                <p className="text-[9px] font-bold tracking-[0.5em] text-[#536878] uppercase">Founder Note</p>
                <div className="space-y-4">
                  <p className="text-2xl font-headline font-bold text-white italic">
                    "Every project begins with one question: 'What problem am I solving?'"
                  </p>
                  <p className="text-[#EAE0C8]/70 text-base font-light leading-relaxed">
                    That question continues to guide every product and vision behind Axora.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
