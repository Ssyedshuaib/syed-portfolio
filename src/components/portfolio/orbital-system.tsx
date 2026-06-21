
"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const ORBITS = [
  { label: "OBSERVE", radius: "160px", duration: "35s", delay: "0s", desc: "Understanding the problem space deeply." },
  { label: "UNDERSTAND", radius: "220px", duration: "40s", delay: "-5s", desc: "Mapping user needs and friction points." },
  { label: "DESIGN", radius: "280px", duration: "45s", delay: "-10s", desc: "Architecting intuitive digital experiences." },
  { label: "BUILD", radius: "340px", duration: "50s", delay: "-15s", desc: "Engineering robust and scalable systems." },
  { label: "LAUNCH", radius: "400px", duration: "55s", delay: "-20s", desc: "Deploying products that create value." },
  { label: "SCALE", radius: "250px", duration: "42s", delay: "-8s", desc: "Iterating for growth and performance." },
];

export function OrbitalSystem() {
  const [hoveredNode, setHoveredNode] = useState<{label: string, desc: string} | null>(null);

  return (
    <div className="relative w-full aspect-square max-w-[760px] flex items-center justify-center perspective-[1200px] opacity-95 transition-opacity duration-1000">
      <style jsx global>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(var(--radius)) rotate(0deg); }
          to { transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg); }
        }
        .orbit-animation {
          animation: orbit var(--duration) linear infinite;
          animation-delay: var(--delay);
          animation-play-state: var(--play-state);
        }
      `}</style>

      {/* Central Node - The Anchor */}
      <motion.div 
        animate={{ 
          scale: [1, 1.02, 1],
          boxShadow: [
            "0 0 50px rgba(234, 224, 200, 0.08)",
            "0 0 80px rgba(234, 224, 200, 0.2)",
            "0 0 50px rgba(234, 224, 200, 0.08)"
          ]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-20 group"
      >
        <div className="w-32 h-32 rounded-full glass flex flex-col items-center justify-center border-white/10 shadow-[0_0_80px_rgba(83,104,120,0.15)] group-hover:shadow-[0_0_100px_rgba(234,224,200,0.25)] transition-all duration-1000">
          <div className="text-center">
            <span className="text-white font-headline font-bold text-xl tracking-[0.5em] uppercase block">SYED</span>
            <motion.div 
              animate={{ width: hoveredNode ? "3rem" : "2rem" }}
              className="h-px bg-primary/50 mx-auto mt-4 rounded-full shadow-[0_0_20px_rgba(234,224,200,0.7)]" 
            />
          </div>
        </div>
        
        {/* Subtle Depth Glow Behind Center */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-primary/40 blur-[70px] rounded-full -z-10" 
        />
      </motion.div>

      {/* Blueprint Orbit Rings */}
      {[160, 220, 250, 280, 340, 400].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-[#EAE0C8]/25 transition-all duration-1000"
          style={{ 
            width: r * 2, 
            height: r * 2,
            borderColor: hoveredNode ? 'rgba(234, 224, 200, 0.4)' : 'rgba(234, 224, 200, 0.25)'
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
            "--delay": orbit.delay,
            "--play-state": hoveredNode ? 'paused' : 'running'
          } as React.CSSProperties}
          onMouseEnter={() => setHoveredNode({label: orbit.label, desc: orbit.desc})}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className={cn(
              "px-6 py-2.5 glass rounded-full text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-700 cursor-default shadow-sm",
              hoveredNode?.label === orbit.label 
                ? "text-white border-primary/60 bg-primary/[0.25] shadow-[0_0_40px_rgba(234,224,200,0.4)]" 
                : "text-[#EAE0C8] hover:text-white"
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
            initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, filter: "blur(20px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[-10%] glass p-8 rounded-[2.5rem] border-[#EAE0C8]/15 w-80 text-center shadow-3xl z-50"
          >
            <p className="text-primary font-bold tracking-[0.5em] uppercase text-[11px] mb-4">{hoveredNode.label}</p>
            <p className="text-[#EAE0C8]/70 text-xs font-light leading-relaxed italic">"{hoveredNode.desc}"</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
