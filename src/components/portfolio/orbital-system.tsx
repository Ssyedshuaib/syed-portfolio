"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const ORBITS = [
  { label: "OBSERVE", radius: 120, duration: 35, delay: 0, desc: "Deeply understanding the human problem space." },
  { label: "UNDERSTAND", radius: 160, duration: 40, delay: -5, desc: "Mapping friction points and hidden user needs." },
  { label: "DESIGN", radius: 170, duration: 45, delay: -10, desc: "Architecting high-intent digital ecosystems." },
  { label: "BUILD", radius: 200, duration: 50, delay: -15, desc: "Engineering for performance and scalability." },
  { label: "LAUNCH", radius: 240, duration: 55, delay: -20, desc: "Deploying systems that generate real value." },
  { label: "SCALE", radius: 280, duration: 42, delay: -8, desc: "Iterating for global growth and system depth." },
];

export function OrbitalSystem() {
  const [hoveredNode, setHoveredNode] = useState<{label: string, desc: string} | null>(null);
  const [mounted, setMounted] = useState(false);

  // Parallax Values - Declared at top level for Hook stability
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 40, damping: 30 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D rotations based on mouse - Restricted to premium 8px-style movement
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-6, 6]);

  // Glow Parallax
  const glowX = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const glowY = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window === 'undefined') return;
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Prevent Hydration Mismatch
  if (!mounted) {
    return <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center opacity-0" />;
  }

  return (
    <div 
      className="relative w-full aspect-square max-w-[600px] flex items-center justify-center"
      style={{ perspective: 1200 }}
    >
      {/* Cinematic Ambient Glow (Inner illumination) */}
      <motion.div 
        style={{ x: glowX, y: glowY }}
        animate={{ 
          opacity: [0.03, 0.06, 0.03],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[110%] h-[110%] bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.12),transparent_70%)] blur-3xl pointer-events-none"
      />

      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Dimensional Blueprint Orbit Rings */}
        {[120, 160, 170, 200, 240, 280].map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 2 }}
            className="absolute rounded-full border border-[#EAE0C8]/10 transition-all duration-1000"
            style={{ 
              width: r * 2, 
              height: r * 2,
              translateZ: i * -15, // Creates Z-depth layering
              filter: `blur(${i * 0.4}px)`,
              boxShadow: hoveredNode ? 'inset 0 0 20px rgba(234, 224, 200, 0.02)' : 'none'
            }}
          />
        ))}

        {/* Central Premium Glass Sphere Identity Node */}
        <motion.div 
          style={{ translateZ: 60 }} // Lifted towards viewer
          animate={{ 
            scale: [1, 1.02, 1],
            boxShadow: [
              "0 0 40px rgba(0,0,0,0.4), 0 0 20px rgba(234,224,200,0.05)",
              "0 0 60px rgba(0,0,0,0.5), 0 0 40px rgba(234,224,200,0.1)",
              "0 0 40px rgba(0,0,0,0.4), 0 0 20px rgba(234,224,200,0.05)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 group"
        >
          <div className="w-40 h-40 rounded-full glass border-white/[0.05] shadow-2xl relative overflow-hidden transition-all duration-1000 group-hover:border-primary/30 flex items-center justify-center">
            {/* Glass Interior Reflections */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />
            
            <div className="text-center relative z-10">
              <span className="text-white font-headline font-bold text-2xl tracking-[0.5em] uppercase block select-none">SYED</span>
              <motion.div 
                animate={{ width: hoveredNode ? "4rem" : "2.5rem" }}
                className="h-[1px] bg-primary/40 mx-auto mt-5 rounded-full shadow-[0_0_15px_rgba(234,224,200,0.8)]" 
              />
            </div>
            
            {/* Obsidian Core Pulse */}
            <motion.div 
              animate={{ opacity: [0.02, 0.08, 0.02] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 bg-primary/[0.02] blur-2xl"
            />
          </div>
          
          {/* External Volumetric Glow */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10" 
          />
        </motion.div>

        {/* 3D Floating Interface Nodes */}
        {ORBITS.map((orbit, idx) => (
          <motion.div
            key={idx}
            className="absolute z-10"
            initial={{ rotate: orbit.delay * 10 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: orbit.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: orbit.radius * 2, height: orbit.radius * 2, transformStyle: "preserve-3d" }}
          >
            <motion.div 
              style={{ 
                x: orbit.radius * 2, 
                y: orbit.radius, 
                translateZ: idx * 20, // Different depth for each label
                transformStyle: "preserve-3d"
              }}
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: -360 }} // Counter-rotate to keep text upright
              transition={{
                duration: orbit.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                onMouseEnter={() => setHoveredNode({label: orbit.label, desc: orbit.desc})}
                onMouseLeave={() => setHoveredNode(null)}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(234, 224, 200, 0.2)",
                  translateZ: 100, // Pop towards camera on hover
                  transition: { duration: 0.4 }
                }}
                className={cn(
                  "px-7 py-3 glass rounded-full text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-700 cursor-default shadow-xl border-white/[0.04]",
                  hoveredNode?.label === orbit.label 
                    ? "text-white border-primary/50 bg-primary/[0.15] shadow-[0_0_30px_rgba(234,224,200,0.2)]" 
                    : "text-[#EAE0C8]/50"
                )}
              >
                {orbit.label}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Dimensional Narrative Module */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div 
            initial={{ opacity: 0, y: 20, filter: "blur(20px)", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, y: 15, filter: "blur(15px)", scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[-10%] glass p-8 rounded-[2.5rem] border-white/10 w-80 text-center shadow-[0_40px_100px_rgba(0,0,0,0.7)] z-[100] bg-[#0F1317]/90 backdrop-blur-[50px]"
          >
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-2">
                <p className="text-primary font-bold tracking-[0.6em] uppercase text-[11px]">{hoveredNode.label}</p>
                <div className="h-[1px] w-12 bg-primary/20" />
              </div>
              <p className="text-[#EAE0C8]/70 text-xs font-light leading-relaxed italic px-2">"{hoveredNode.desc}"</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}