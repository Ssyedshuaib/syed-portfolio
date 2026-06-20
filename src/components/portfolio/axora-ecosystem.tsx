
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Layout, Compass, Sparkles, ArrowUpRight, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const ECOSYSTEM_NODES = [
  {
    id: "reverie",
    title: "REVERIE",
    subtitle: "Memory Platform",
    description: "Spatial memory system anchoring digital stories to geography.",
    icon: MapPin,
    slug: "/projects/reverie",
    position: { x: 22, y: 28 },
    delay: 0.1
  },
  {
    id: "devnexus",
    title: "DEVNEXUS",
    subtitle: "Student Ecosystem",
    description: "Integrated operating system for the modern engineering student.",
    icon: Layout,
    slug: "/projects/devnexus",
    position: { x: 78, y: 28 },
    delay: 0.2
  },
  {
    id: "ventures",
    title: "AXORA VENTURES",
    subtitle: "Venture Builder",
    description: "Architecting high-impact digital products and startup systems.",
    icon: Zap,
    slug: "#",
    position: { x: 22, y: 72 },
    delay: 0.3
  },
  {
    id: "future",
    title: "FUTURE LAB",
    subtitle: "Coming Soon",
    description: "Exploring proactive AI agents and emerging technologies.",
    icon: Compass,
    slug: "#",
    position: { x: 78, y: 72 },
    delay: 0.4
  },
];

export function AxoraEcosystem() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="axora" className="py-64 px-6 bg-[#050505] relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Content Block */}
          <div className="lg:col-span-5 space-y-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <p className="text-[10px] font-bold tracking-[0.6em] text-[#536878] uppercase">Studio Ecosystem</p>
              </div>
              <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white leading-none">
                One Vision.<br />
                <span className="text-[#EAE0C8] italic font-medium">Multiple Products.</span>
              </h2>
              <p className="text-xl md:text-2xl text-[#EAE0C8]/50 font-light leading-relaxed max-w-lg">
                Axora is a venture studio focused on building digital ecosystems across education, memory preservation, productivity, and future technologies.
              </p>
              
              <div className="pt-8 flex items-center gap-6 text-[#536878]">
                <div className="h-px w-12 bg-current opacity-20" />
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase">Hover core to expand vision</p>
              </div>
            </motion.div>
          </div>

          {/* Interactive Visualization Area */}
          <div className="lg:col-span-7 relative aspect-square max-w-[700px] mx-auto flex items-center justify-center">
            
            {/* Energy Beams Layer */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                <AnimatePresence>
                  {isHovered && ECOSYSTEM_NODES.map((node) => (
                    <motion.g key={`beam-${node.id}`}>
                      {/* Connection Line with Glow */}
                      <motion.line
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: activeNode === node.id ? 0.8 : 0.2 }}
                        exit={{ pathLength: 0, opacity: 0 }}
                        transition={{ duration: 1, delay: node.delay, ease: "easeInOut" }}
                        x1="50" y1="50"
                        x2={node.position.x}
                        y2={node.position.y}
                        stroke="#EAE0C8"
                        strokeWidth={activeNode === node.id ? "0.3" : "0.1"}
                      />
                      
                      {/* Traveling Energy Pulse */}
                      <motion.circle
                        animate={{ 
                          cx: [50, node.position.x],
                          cy: [50, node.position.y],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity, 
                          delay: node.delay,
                          ease: "linear"
                        }}
                        r="0.5"
                        fill="#EAE0C8"
                        style={{ filter: 'blur(1px)' }}
                      />
                    </motion.g>
                  ))}
                </AnimatePresence>
              </svg>
            </div>

            {/* Central Core: AXORA */}
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative z-50 cursor-pointer"
              animate={{ 
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Breathing Atmospheric Glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.15, 0.3, 0.15]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary blur-[80px] rounded-full"
              />

              <div className={cn(
                "w-48 h-48 rounded-full glass border-white/5 flex flex-col items-center justify-center transition-all duration-1000",
                isHovered ? "border-primary/40 shadow-[0_0_100px_rgba(234,224,200,0.15)] bg-primary/[0.03]" : "hover:border-primary/20"
              )}>
                <motion.div
                  animate={isHovered ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <Sparkles className={cn(
                    "w-8 h-8 mb-4 transition-all duration-700",
                    isHovered ? "text-white" : "text-[#536878]"
                  )} />
                </motion.div>
                <span className="text-white font-headline font-bold text-sm tracking-[0.6em] uppercase">AXORA</span>
                
                <AnimatePresence>
                  {isHovered && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 0.4, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="text-[9px] tracking-[0.4em] uppercase mt-3 font-bold"
                    >
                      Studio Hub
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Product Satellite Nodes */}
            <AnimatePresence>
              {isHovered && ECOSYSTEM_NODES.map((node) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%", left: "50%", top: "50%" }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    left: `${node.position.x}%`,
                    top: `${node.position.y}%`,
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.5, 
                    left: "50%", 
                    top: "50%",
                    transition: { duration: 0.6 }
                  }}
                  transition={{ 
                    duration: 1, 
                    delay: node.delay,
                    type: "spring",
                    stiffness: 80,
                    damping: 20
                  }}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => node.slug !== "#" && router.push(node.slug)}
                  className="absolute z-40 group cursor-pointer"
                  style={{
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Subtle Float Effect */}
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 6 + node.delay * 10, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className={cn(
                      "relative glass p-7 rounded-[2.5rem] border-white/5 w-64 transition-all duration-700",
                      activeNode === node.id 
                        ? "border-primary/40 bg-primary/[0.05] -translate-y-3 shadow-[0_30px_60px_rgba(0,0,0,0.6)]" 
                        : "group-hover:border-white/15"
                    )}>
                      {/* Internal Glow Overlay */}
                      <AnimatePresence>
                        {activeNode === node.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] to-transparent rounded-[2.5rem] -z-10"
                          />
                        )}
                      </AnimatePresence>

                      <div className="flex items-start justify-between mb-5">
                        <div className={cn(
                          "w-12 h-12 rounded-2xl glass border-white/5 flex items-center justify-center transition-all duration-700",
                          activeNode === node.id ? "text-white scale-110" : "text-[#536878]"
                        )}>
                          <node.icon className="w-6 h-6" />
                        </div>
                        {node.slug !== "#" && (
                          <ArrowUpRight className={cn(
                            "w-5 h-5 transition-all duration-500",
                            activeNode === node.id ? "text-primary opacity-100" : "text-[#536878] opacity-30"
                          )} />
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <p className="text-[11px] font-bold tracking-[0.4em] text-white uppercase">{node.title}</p>
                        <p className="text-[9px] font-bold tracking-[0.5em] text-[#536878] uppercase">{node.subtitle}</p>
                      </div>

                      {/* Expandable Detail Description */}
                      <AnimatePresence>
                        {activeNode === node.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-[10px] text-[#EAE0C8]/60 tracking-widest uppercase mt-5 leading-relaxed font-light">
                              {node.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Dynamic Background Ambiance */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

