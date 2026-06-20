
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Layout, Compass, Sparkles, BrainCircuit, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const ECOSYSTEM_NODES = [
  {
    id: "reverie",
    title: "REVERIE",
    description: "Place-based memory platform.",
    icon: MapPin,
    slug: "/projects/reverie",
    position: { x: 25, y: 25 },
    delay: 0.2
  },
  {
    id: "devnexus",
    title: "DEVNEXUS",
    description: "Student growth ecosystem.",
    icon: Layout,
    slug: "/projects/devnexus",
    position: { x: 75, y: 25 },
    delay: 0.4
  },
  {
    id: "ventures",
    title: "FUTURE VENTURES",
    description: "Emerging digital products.",
    icon: Compass,
    slug: "#",
    position: { x: 25, y: 75 },
    delay: 0.6
  },
  {
    id: "lab",
    title: "INNOVATION LAB",
    description: "R&D for next-gen tech.",
    icon: BrainCircuit,
    slug: "#",
    position: { x: 75, y: 75 },
    delay: 0.8
  },
];

export function AxoraEcosystem() {
  const router = useRouter();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isCoreHovered, setIsCoreHovered] = useState(false);

  return (
    <section id="axora" className="py-64 px-6 bg-[#050505] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.01] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Text Content - Exactly as before */}
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

          {/* Visualization Area */}
          <div className="lg:col-span-7 relative aspect-square max-w-[700px] mx-auto flex items-center justify-center">
            
            {/* Connection Lines Layer */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {ECOSYSTEM_NODES.map((node) => (
                  <g key={`connection-${node.id}`}>
                    <motion.line 
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.2 }}
                      viewport={{ once: true }}
                      animate={{ 
                        opacity: isCoreHovered || hoveredNode === node.id ? 0.6 : 0.2,
                        strokeWidth: isCoreHovered || hoveredNode === node.id ? 0.3 : 0.15
                      }}
                      transition={{ duration: 1.5, delay: node.delay }}
                      x1="50" y1="50" 
                      x2={node.position.x} 
                      y2={node.position.y} 
                      stroke="rgba(234, 224, 200, 1)" 
                    />
                    {/* Pulsing indicator on lines */}
                    <motion.circle
                      animate={{ 
                        cx: [50, node.position.x],
                        cy: [50, node.position.y],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: node.delay,
                        ease: "linear"
                      }}
                      r="0.5"
                      fill="#EAE0C8"
                    />
                  </g>
                ))}
              </svg>
            </div>

            {/* Center Core: AXORA */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setIsCoreHovered(true)}
              onMouseLeave={() => setIsCoreHovered(false)}
              className="relative z-20 cursor-pointer"
            >
              <div className={cn(
                "w-44 h-44 rounded-full glass border-[#EAE0C8]/10 flex flex-col items-center justify-center transition-all duration-700",
                isCoreHovered ? "scale-110 border-[#EAE0C8]/30 shadow-[0_0_100px_rgba(234,224,200,0.1)]" : "shadow-[0_0_80px_rgba(234,224,200,0.05)]"
              )}>
                <Sparkles className={cn(
                  "w-6 h-6 mb-3 transition-colors duration-700",
                  isCoreHovered ? "text-white" : "text-[#536878]"
                )} />
                <span className="text-white font-headline font-bold text-xs tracking-[0.5em] uppercase">AXORA</span>
                <p className={cn(
                  "text-[8px] tracking-[0.3em] uppercase mt-2 transition-opacity duration-700",
                  isCoreHovered ? "opacity-60" : "opacity-0"
                )}>Venture Studio</p>
              </div>
              {/* Subtle ambient glow */}
              <div className="absolute inset-0 bg-[#EAE0C8]/5 blur-[60px] rounded-full -z-10" />
            </motion.div>

            {/* Satellite Nodes */}
            {ECOSYSTEM_NODES.map((node) => (
              <div 
                key={node.id}
                className="absolute transition-transform duration-700"
                style={{ 
                  left: `${node.position.x}%`, 
                  top: `${node.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: node.delay + 0.5 }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => node.slug !== "#" && router.push(node.slug)}
                  className="relative group cursor-pointer"
                >
                  {/* Floating Animation */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: node.delay }}
                    className="flex flex-col items-center"
                  >
                    <div className={cn(
                      "w-16 h-16 rounded-2xl glass border-[#EAE0C8]/05 flex items-center justify-center transition-all duration-700",
                      hoveredNode === node.id || isCoreHovered ? "border-[#EAE0C8]/30 bg-[#536878]/10 scale-110" : "group-hover:border-[#EAE0C8]/20"
                    )}>
                      <node.icon className={cn(
                        "w-6 h-6 transition-colors duration-700",
                        hoveredNode === node.id || isCoreHovered ? "text-white" : "text-[#EAE0C8]/40"
                      )} />
                    </div>

                    {/* Node Metadata Tooltip */}
                    <div className={cn(
                      "absolute top-full mt-6 text-center space-y-2 transition-all duration-700 w-48 pointer-events-none",
                      hoveredNode === node.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    )}>
                      <div className="px-4 py-3 glass rounded-2xl border-[#EAE0C8]/10">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <p className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">{node.title}</p>
                          {node.slug !== "#" && <ArrowUpRight className="w-3 h-3 text-[#EAE0C8]/40" />}
                        </div>
                        <p className="text-[9px] text-[#536878] tracking-widest uppercase leading-tight">{node.description}</p>
                      </div>
                    </div>

                    {/* Minimal persistent label when not hovered but ecosystem highlighted */}
                    <AnimatePresence>
                      {isCoreHovered && hoveredNode !== node.id && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.6 }}
                          exit={{ opacity: 0 }}
                          className="absolute -bottom-8 text-[8px] font-bold tracking-[0.4em] text-[#EAE0C8] uppercase"
                        >
                          {node.title}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </div>
            ))}

            {/* Ambient Background Glows */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#536878]/5 blur-[80px] rounded-full" />
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#EAE0C8]/5 blur-[80px] rounded-full" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
