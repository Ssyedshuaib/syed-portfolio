"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const ORBITS = [
  { label: "Observe", radius: "100px", duration: "25s", delay: "0s", desc: "Understanding the problem space deeply." },
  { label: "Understand", radius: "130px", duration: "30s", delay: "-4s", desc: "Mapping user needs and friction points." },
  { label: "Design", radius: "160px", duration: "35s", delay: "-8s", desc: "Architecting intuitive digital experiences." },
  { label: "Build", radius: "190px", duration: "40s", delay: "-12s", desc: "Engineering robust and scalable systems." },
  { label: "Launch", radius: "220px", duration: "45s", delay: "-16s", desc: "Deploying products that create value." },
  { label: "Scale", radius: "145px", duration: "32s", delay: "-6s", desc: "Iterating for growth and performance." },
];

export function OrbitalSystem() {
  const [hoveredNode, setHoveredNode] = useState<{label: string, desc: string} | null>(null);

  return (
    <div className="relative w-full aspect-square max-w-[480px] flex items-center justify-center perspective-[1000px] opacity-40 hover:opacity-100 transition-opacity duration-1000">
      {/* Central Node */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative z-20 group"
      >
        <div className="w-28 h-28 rounded-full glass flex items-center justify-center border-white/5 shadow-[0_0_60px_rgba(83,104,120,0.05)] group-hover:shadow-[0_0_80px_rgba(234,224,200,0.1)] transition-all duration-1000">
          <div className="text-center">
            <span className="text-white/80 font-headline font-bold text-lg tracking-[0.3em] uppercase block">SYED</span>
            <motion.div 
              animate={{ width: hoveredNode ? "2.5rem" : "1.5rem" }}
              className="h-px bg-[#536878]/30 mx-auto mt-2 rounded-full" 
            />
          </div>
        </div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#536878]/10 blur-[60px] rounded-full -z-10" 
        />
      </motion.div>

      {/* Orbit Rings - Blueprint Style */}
      {[100, 130, 145, 160, 190, 220].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-[#EAE0C8]/05 transition-colors duration-1000"
          style={{ 
            width: r * 2, 
            height: r * 2,
            borderColor: hoveredNode ? 'rgba(234, 224, 200, 0.08)' : 'rgba(234, 224, 200, 0.02)'
          }}
        />
      ))}

      {/* Nodes - Reduced Complexity */}
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
            whileHover={{ scale: 1.05, y: -1 }}
            className={cn(
              "px-4 py-2 glass rounded-full text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-700 cursor-default",
              hoveredNode?.label === orbit.label 
                ? "text-white border-[#EAE0C8]/30 bg-[#536878]/10 shadow-[0_0_20px_rgba(83,104,120,0.2)]" 
                : "text-[#EAE0C8]/25 hover:text-white"
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
            initial={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[5%] glass p-6 rounded-[2rem] border-[#EAE0C8]/10 w-64 text-center shadow-2xl z-50"
          >
            <p className="text-[#536878] font-bold tracking-[0.4em] uppercase text-[9px] mb-3">{hoveredNode.label}</p>
            <p className="text-[#EAE0C8]/60 text-sm font-light leading-relaxed">{hoveredNode.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
