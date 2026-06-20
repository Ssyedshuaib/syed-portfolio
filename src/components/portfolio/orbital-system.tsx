
"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const ORBITS = [
  { label: "OBSERVE", radius: "100px", duration: "35s", delay: "0s", desc: "Understanding the problem space deeply." },
  { label: "UNDERSTAND", radius: "135px", duration: "40s", delay: "-5s", desc: "Mapping user needs and friction points." },
  { label: "DESIGN", radius: "170px", duration: "45s", delay: "-10s", desc: "Architecting intuitive digital experiences." },
  { label: "BUILD", radius: "210px", duration: "50s", delay: "-15s", desc: "Engineering robust and scalable systems." },
  { label: "LAUNCH", radius: "250px", duration: "55s", delay: "-20s", desc: "Deploying products that create value." },
  { label: "SCALE", radius: "155px", duration: "42s", delay: "-8s", desc: "Iterating for growth and performance." },
];

export function OrbitalSystem() {
  const [hoveredNode, setHoveredNode] = useState<{label: string, desc: string} | null>(null);

  return (
    <div className="relative w-full aspect-square max-w-[420px] flex items-center justify-center perspective-[1000px] opacity-60 hover:opacity-100 transition-opacity duration-1000">
      {/* Central Node */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative z-20 group"
      >
        <div className="w-24 h-24 rounded-full glass flex items-center justify-center border-white/5 shadow-[0_0_60px_rgba(83,104,120,0.05)] group-hover:shadow-[0_0_80px_rgba(234,224,200,0.1)] transition-all duration-1000">
          <div className="text-center">
            <span className="text-white font-headline font-bold text-base tracking-[0.4em] uppercase block">SYED</span>
            <motion.div 
              animate={{ width: hoveredNode ? "2rem" : "1.2rem" }}
              className="h-px bg-primary/30 mx-auto mt-2 rounded-full" 
            />
          </div>
        </div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-primary/10 blur-[50px] rounded-full -z-10" 
        />
      </motion.div>

      {/* Orbit Rings - Blueprint Style */}
      {[100, 135, 155, 170, 210, 250].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-[#EAE0C8]/05 transition-colors duration-1000"
          style={{ 
            width: r * 2, 
            height: r * 2,
            borderColor: hoveredNode ? 'rgba(234, 224, 200, 0.08)' : 'rgba(234, 224, 200, 0.03)'
          }}
        />
      ))}

      {/* Nodes */}
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
              "px-4 py-1.5 glass rounded-full text-[8px] font-bold tracking-[0.3em] uppercase transition-all duration-700 cursor-default",
              hoveredNode?.label === orbit.label 
                ? "text-white border-primary/30 bg-primary/[0.08] shadow-[0_0_20px_rgba(234,224,200,0.15)]" 
                : "text-[#EAE0C8]/30 hover:text-white"
            )}
          >
            {orbit.label}
          </motion.div>
        </div>
      ))}

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div 
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[-10%] glass p-6 rounded-[2rem] border-[#EAE0C8]/10 w-64 text-center shadow-2xl z-50"
          >
            <p className="text-primary font-bold tracking-[0.4em] uppercase text-[9px] mb-3">{hoveredNode.label}</p>
            <p className="text-[#EAE0C8]/60 text-xs font-light leading-relaxed">{hoveredNode.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
