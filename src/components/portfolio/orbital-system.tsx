
"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const ORBITS = [
  { label: "OBSERVE", radius: "120px", duration: "35s", delay: "0s", desc: "Understanding the problem space deeply." },
  { label: "UNDERSTAND", radius: "165px", duration: "40s", delay: "-5s", desc: "Mapping user needs and friction points." },
  { label: "DESIGN", radius: "210px", duration: "45s", delay: "-10s", desc: "Architecting intuitive digital experiences." },
  { label: "BUILD", radius: "260px", duration: "50s", delay: "-15s", desc: "Engineering robust and scalable systems." },
  { label: "LAUNCH", radius: "310px", duration: "55s", delay: "-20s", desc: "Deploying products that create value." },
  { label: "SCALE", radius: "190px", duration: "42s", delay: "-8s", desc: "Iterating for growth and performance." },
];

export function OrbitalSystem() {
  const [hoveredNode, setHoveredNode] = useState<{label: string, desc: string} | null>(null);

  return (
    <div className="relative w-full aspect-square max-w-[580px] flex items-center justify-center perspective-[1200px] opacity-95 transition-opacity duration-1000">
      {/* Central Node - The Anchor */}
      <motion.div 
        animate={{ 
          scale: [1, 1.02, 1],
          boxShadow: [
            "0 0 40px rgba(234, 224, 200, 0.05)",
            "0 0 60px rgba(234, 224, 200, 0.15)",
            "0 0 40px rgba(234, 224, 200, 0.05)"
          ]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-20 group"
      >
        <div className="w-28 h-28 rounded-full glass flex flex-col items-center justify-center border-white/10 shadow-[0_0_60px_rgba(83,104,120,0.1)] group-hover:shadow-[0_0_80px_rgba(234,224,200,0.2)] transition-all duration-1000">
          <div className="text-center">
            <span className="text-white font-headline font-bold text-lg tracking-[0.5em] uppercase block">SYED</span>
            <motion.div 
              animate={{ width: hoveredNode ? "2.5rem" : "1.5rem" }}
              className="h-px bg-primary/40 mx-auto mt-3 rounded-full shadow-[0_0_15px_rgba(234,224,200,0.6)]" 
            />
          </div>
        </div>
        
        {/* Subtle Depth Glow Behind Center */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full -z-10" 
        />
      </motion.div>

      {/* Blueprint Orbit Rings */}
      {[120, 165, 190, 210, 260, 310].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-[#EAE0C8]/20 transition-all duration-1000"
          style={{ 
            width: r * 2, 
            height: r * 2,
            borderColor: hoveredNode ? 'rgba(234, 224, 200, 0.25)' : 'rgba(234, 224, 200, 0.15)'
          }}
        />
      ))}

      {/* Surrounding OS Nodes */}
      {ORBITS.map((orbit, idx) => (
        <div
          key={idx}
          className="absolute orbit-animation"
          style={{
            "--radius": orbit.radius,
            "--duration": orbit.duration,
            animationDelay: orbit.delay,
            "--play-state": hoveredNode ? 'paused' : 'running'
          } as React.CSSProperties}
          onMouseEnter={() => setHoveredNode({label: orbit.label, desc: orbit.desc})}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={cn(
              "px-5 py-2 glass rounded-full text-[9px] font-bold tracking-[0.4em] uppercase transition-all duration-700 cursor-default",
              hoveredNode?.label === orbit.label 
                ? "text-white border-primary/50 bg-primary/[0.2] shadow-[0_0_30px_rgba(234,224,200,0.3)]" 
                : "text-[#EAE0C8]/75 hover:text-white"
            )}
          >
            {orbit.label}
          </motion.div>
        </div>
      ))}

      {/* Narrative Tooltip */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div 
            initial={{ opacity: 0, y: 15, filter: "blur(15px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 15, filter: "blur(15px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[-15%] glass p-8 rounded-[2.5rem] border-[#EAE0C8]/10 w-72 text-center shadow-3xl z-50"
          >
            <p className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4">{hoveredNode.label}</p>
            <p className="text-[#EAE0C8]/60 text-xs font-light leading-relaxed italic">"{hoveredNode.desc}"</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
