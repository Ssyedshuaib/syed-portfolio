
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Layout, Compass, Sparkles, BrainCircuit, ArrowUpRight, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const ECOSYSTEM_NODES = [
  {
    id: "reverie",
    title: "REVERIE",
    subtitle: "Memory Platform",
    description: "Place-based memory ecosystem.",
    icon: MapPin,
    slug: "/projects/reverie",
    position: { x: 20, y: 25 },
    delay: 0.1
  },
  {
    id: "devnexus",
    title: "DEVNEXUS",
    subtitle: "Student Ecosystem",
    description: "Integrated student operating system.",
    icon: Layout,
    slug: "/projects/devnexus",
    position: { x: 80, y: 25 },
    delay: 0.2
  },
  {
    id: "ventures",
    title: "AXORA VENTURES",
    subtitle: "Venture Builder",
    description: "Architecting high-impact digital products.",
    icon: Zap,
    slug: "#",
    position: { x: 20, y: 75 },
    delay: 0.3
  },
  {
    id: "future",
    title: "FUTURE VENTURES",
    subtitle: "Coming Soon",
    description: "Emerging ecosystems and AI products.",
    icon: Compass,
    slug: "#",
    position: { x: 80, y: 75 },
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
      <div className="absolute inset-0 blueprint-grid opacity-[0.01] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Content Block */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-[10px] font-bold tracking-[0.8em] text-[#536878] uppercase">AXORA ECOSYSTEM</p>
              <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white leading-none">
                One Vision.<br />
                <span className="text-[#EAE0C8] italic font-medium">Multiple Products.</span>
              </h2>
              <p className="text-xl md:text-2xl text-[#EAE0C8]/60 font-light leading-relaxed max-w-lg">
                Axora is a venture studio focused on building digital ecosystems across education, memory preservation, productivity, and future technologies.
              </p>
            </motion.div>
          </div>

          {/* Interactive Visualization Area */}
          <div className="lg:col-span-7 relative aspect-square max-w-[700px] mx-auto flex items-center justify-center">
            
            {/* Energy Beams and Particle Layer */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                <AnimatePresence mode="wait">
                  {isHovered && ECOSYSTEM_NODES.map((node) => (
                    <motion.g key={`beam-${node.id}`}>
                      {/* Base Connection Beam */}
                      <motion.line
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: activeNode === node.id ? 0.8 : 0.2 }}
                        exit={{ pathLength: 0, opacity: 0 }}
                        transition={{ duration: 0.8, delay: node.delay }}
                        x1="50" y1="50"
                        x2={node.position.x}
                        y2={node.position.y}
                        stroke="#EAE0C8"
                        strokeWidth={activeNode === node.id ? "0.4" : "0.15"}
                      />
                      
                      {/* Moving Energy Pulse */}
                      <motion.circle
                        animate={{ 
                          cx: [50, node.position.x],
                          cy: [50, node.position.y],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: node.delay,
                          ease: "linear"
                        }}
                        r="0.4"
                        fill="#EAE0C8"
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
              className="relative z-20 cursor-pointer"
              animate={{ 
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Breathing Glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#EAE0C8] blur-[60px] rounded-full"
              />

              <div className={cn(
                "w-44 h-44 rounded-full glass border-[#EAE0C8]/10 flex flex-col items-center justify-center transition-all duration-700",
                isHovered ? "border-[#EAE0C8]/30 shadow-[0_0_80px_rgba(234,224,200,0.1)]" : ""
              )}>
                <Sparkles className={cn(
                  "w-6 h-6 mb-3 transition-all duration-700",
                  isHovered ? "text-white scale-110" : "text-[#536878]"
                )} />
                <span className="text-white font-headline font-bold text-xs tracking-[0.5em] uppercase">AXORA</span>
                
                <AnimatePresence>
                  {isHovered && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 0.5, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="text-[8px] tracking-[0.3em] uppercase mt-2"
                    >
                      Studio Core
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Product Satellite Nodes */}
            <AnimatePresence mode="wait">
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
                    transition: { duration: 0.5 }
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: node.delay,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => node.slug !== "#" && router.push(node.slug)}
                  className="absolute z-30 group cursor-pointer"
                  style={{
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Floating Animation */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: node.delay }}
                  >
                    <div className={cn(
                      "relative glass p-6 rounded-[2rem] border-[#EAE0C8]/10 w-56 transition-all duration-700",
                      activeNode === node.id ? "border-[#EAE0C8]/40 bg-[#536878]/10 -translate-y-2 shadow-[0_20px_40px_rgba(0,0,0,0.4)]" : "group-hover:border-[#EAE0C8]/20"
                    )}>
                      {/* Highlight Glow */}
                      <AnimatePresence>
                        {activeNode === node.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gradient-to-br from-[#EAE0C8]/5 to-transparent rounded-[2rem] -z-10"
                          />
                        )}
                      </AnimatePresence>

                      <div className="flex items-start justify-between mb-4">
                        <div className={cn(
                          "w-10 h-10 rounded-xl glass border-white/5 flex items-center justify-center transition-colors duration-700",
                          activeNode === node.id ? "text-white" : "text-[#536878]"
                        )}>
                          <node.icon className="w-5 h-5" />
                        </div>
                        {node.slug !== "#" && <ArrowUpRight className="w-4 h-4 text-[#EAE0C8]/40" />}
                      </div>

                      <div className="space-y-1">
                        <p className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">{node.title}</p>
                        <p className="text-[8px] font-bold tracking-[0.4em] text-[#536878] uppercase">{node.subtitle}</p>
                      </div>

                      {/* Expandable Description */}
                      <AnimatePresence>
                        {activeNode === node.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-[9px] text-[#EAE0C8]/60 tracking-widest uppercase mt-4 leading-relaxed">
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

            {/* Ambient Background Atmosphere */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#536878]/5 blur-[100px] rounded-full" />
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#EAE0C8]/5 blur-[100px] rounded-full" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
