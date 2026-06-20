"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const ORBITS = [
  { label: "Observe", radius: "140px", duration: "18s", delay: "0s", desc: "Understanding the problem space deeply." },
  { label: "Understand", radius: "180px", duration: "22s", delay: "-4s", desc: "Mapping user needs and friction points." },
  { label: "Design", radius: "220px", duration: "26s", delay: "-8s", desc: "Architecting intuitive digital experiences." },
  { label: "Build", radius: "260px", duration: "30s", delay: "-12s", desc: "Engineering robust and scalable systems." },
  { label: "Launch", radius: "300px", duration: "34s", delay: "-16s", desc: "Deploying products that create value." },
  { label: "Scale", radius: "200px", duration: "24s", delay: "-6s", desc: "Iterating for growth and performance." },
];

export function OrbitalSystem() {
  const [hoveredNode, setHoveredNode] = useState<{label: string, desc: string} | null>(null);

  return (
    <div className="relative w-full aspect-square max-w-[650px] flex items-center justify-center perspective-[1000px]">
      {/* Central Node */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="relative z-20 group"
      >
        <div className="w-40 h-40 rounded-full glass flex items-center justify-center border-white/5 shadow-[0_0_100px_rgba(83,104,120,0.1)] group-hover:shadow-[0_0_120px_rgba(234,224,200,0.2)] transition-all duration-1000">
          <div className="text-center">
            <span className="text-white font-headline font-bold text-2xl tracking-[0.3em] uppercase block">SYED</span>
            <motion.div 
              animate={{ width: hoveredNode ? "3.5rem" : "2rem" }}
              className="h-px bg-[#536878]/40 mx-auto mt-3 rounded-full" 
            />
          </div>
        </div>
        {/* Glow behind center */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#536878]/10 blur-[80px] rounded-full -z-10" 
        />
      </motion.div>

      {/* Orbit Rings */}
      {[140, 180, 200, 220, 260, 300].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-[#EAE0C8]/05 transition-colors duration-1000"
          style={{ 
            width: r * 2, 
            height: r * 2,
            borderColor: hoveredNode ? 'rgba(234, 224, 200, 0.12)' : 'rgba(234, 224, 200, 0.05)'
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
            whileHover={{ scale: 1.1, y: -2 }}
            className={cn(
              "px-6 py-3 glass rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-700 cursor-default",
              hoveredNode?.label === orbit.label 
                ? "text-white border-[#EAE0C8]/40 bg-[#536878]/15 shadow-[0_0_30px_rgba(83,104,120,0.3)]" 
                : "text-[#EAE0C8]/50 hover:text-white"
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
            initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[0%] glass p-8 rounded-3xl border-[#EAE0C8]/20 w-80 text-center shadow-2xl z-50"
          >
            <p className="text-[#536878] font-bold tracking-[0.4em] uppercase text-[10px] mb-4">{hoveredNode.label}</p>
            <p className="text-[#EAE0C8]/70 text-base font-light leading-relaxed">{hoveredNode.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
