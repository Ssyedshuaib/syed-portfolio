
"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const ORBITS = [
  { label: "OBSERVE", radius: 180, duration: 35, delay: 0, desc: "Understanding the problem space deeply." },
  { label: "UNDERSTAND", radius: 240, duration: 40, delay: -5, desc: "Mapping user needs and friction points." },
  { label: "DESIGN", radius: 300, duration: 45, delay: -10, desc: "Architecting intuitive digital experiences." },
  { label: "BUILD", radius: 360, duration: 50, delay: -15, desc: "Engineering robust and scalable systems." },
  { label: "LAUNCH", radius: 420, duration: 55, delay: -20, desc: "Deploying products that create value." },
  { label: "SCALE", radius: 260, duration: 42, delay: -8, desc: "Iterating for growth and performance." },
];

export function OrbitalSystem() {
  const [hoveredNode, setHoveredNode] = useState<{label: string, desc: string} | null>(null);

  return (
    <div className="relative w-full aspect-square max-w-[800px] flex items-center justify-center perspective-[1200px] opacity-95 transition-opacity duration-1000">
      {/* Central Node - The Anchor */}
      <motion.div 
        animate={{ 
          scale: [1, 1.02, 1],
          boxShadow: [
            "0 0 50px rgba(234, 224, 200, 0.1)",
            "0 0 80px rgba(234, 224, 200, 0.25)",
            "0 0 50px rgba(234, 224, 200, 0.1)"
          ]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-20 group"
      >
        <div className="w-36 h-32 rounded-full glass flex flex-col items-center justify-center border-white/10 shadow-[0_0_80px_rgba(83,104,120,0.2)] group-hover:shadow-[0_0_100px_rgba(234,224,200,0.35)] transition-all duration-1000">
          <div className="text-center">
            <span className="text-white font-headline font-bold text-xl tracking-[0.5em] uppercase block">SYED</span>
            <motion.div 
              animate={{ width: hoveredNode ? "3.5rem" : "2.5rem" }}
              className="h-px bg-primary/60 mx-auto mt-4 rounded-full shadow-[0_0_20px_rgba(234,224,200,0.7)]" 
            />
          </div>
        </div>
        
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-primary/40 blur-[70px] rounded-full -z-10" 
        />
      </motion.div>

      {/* Blueprint Orbit Rings */}
      {[180, 240, 260, 300, 360, 420].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-[#EAE0C8]/30 transition-all duration-1000"
          style={{ 
            width: r * 2, 
            height: r * 2,
            borderColor: hoveredNode ? 'rgba(234, 224, 200, 0.45)' : 'rgba(234, 224, 200, 0.3)'
          }}
        />
      ))}

      {/* Surrounding OS Nodes */}
      {ORBITS.map((orbit, idx) => (
        <motion.div
          key={idx}
          className="absolute z-10"
          initial={{ rotate: orbit.delay * 10 }}
          animate={{ 
            rotate: 360,
          }}
          transition={{
            duration: orbit.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
        >
          <motion.div 
            style={{ x: orbit.radius * 2, y: orbit.radius }}
            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: -360 }}
            transition={{
              duration: orbit.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              onMouseEnter={() => setHoveredNode({label: orbit.label, desc: orbit.desc})}
              onMouseLeave={() => setHoveredNode(null)}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(234, 224, 200, 0.35)" }}
              className={cn(
                "px-6 py-2.5 glass rounded-full text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-700 cursor-default shadow-lg",
                hoveredNode?.label === orbit.label 
                  ? "text-white border-primary/80 bg-primary/[0.3] shadow-[0_0_40px_rgba(234,224,200,0.5)]" 
                  : "text-[#EAE0C8] border-white/5"
              )}
            >
              {orbit.label}
            </motion.div>
          </motion.div>
        </motion.div>
      ))}

      {/* Narrative Tooltip */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div 
            initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, filter: "blur(20px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[-5%] glass p-8 rounded-[2.5rem] border-[#EAE0C8]/25 w-80 text-center shadow-3xl z-50 bg-[#0F1317]/95"
          >
            <p className="text-primary font-bold tracking-[0.5em] uppercase text-[11px] mb-4">{hoveredNode.label}</p>
            <p className="text-[#EAE0C8]/70 text-xs font-light leading-relaxed italic">"{hoveredNode.desc}"</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
