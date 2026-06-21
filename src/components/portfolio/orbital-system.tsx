"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const ORBITS = [
  { label: "OBSERVE", radius: 155, duration: 35, delay: 0, desc: "Deeply understanding the human problem space." },
  { label: "UNDERSTAND", radius: 205, duration: 40, delay: -5, desc: "Mapping friction points and hidden user needs." },
  { label: "DESIGN", radius: 255, duration: 45, delay: -10, desc: "Architecting high-intent digital ecosystems." },
  { label: "BUILD", radius: 310, duration: 50, delay: -15, desc: "Engineering for performance and scalability." },
  { label: "LAUNCH", radius: 360, duration: 55, delay: -20, desc: "Deploying systems that generate real value." },
  { label: "SCALE", radius: 220, duration: 42, delay: -8, desc: "Iterating for global growth and system depth." },
];

export function OrbitalSystem() {
  const [hoveredNode, setHoveredNode] = useState<{label: string, desc: string} | null>(null);
  const [mounted, setMounted] = useState(false);

  // Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 25 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D rotations based on mouse
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="relative w-full aspect-square max-w-[700px] flex items-center justify-center perspective-[1200px]">
      
      {/* Cinematic Ambient Glow (Internal Illumination) */}
      <motion.div 
        style={{ 
          x: useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30]),
          y: useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30])
        }}
        animate={{ 
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.15),transparent_70%)] blur-3xl pointer-events-none"
      />

      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        
        {/* Blueprint Orbit Rings - Proportional Radii with Depth */}
        {[155, 205, 220, 255, 310, 360].map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 2 }}
            className="absolute rounded-full border border-[#EAE0C8]/10 transition-all duration-1000"
            style={{ 
              width: r * 2, 
              height: r * 2,
              translateZ: i * -20,
              filter: `blur(${i * 0.5}px)`,
              borderColor: hoveredNode ? 'rgba(234, 224, 200, 0.2)' : 'rgba(234, 224, 200, 0.1)'
            }}
          />
        ))}

        {/* Central Identity Node - Layered System Core */}
        <motion.div 
          style={{ translateZ: 50 }}
          animate={{ 
            scale: [1, 1.02, 1],
            boxShadow: [
              "0 0 50px rgba(234, 224, 200, 0.05)",
              "0 0 80px rgba(234, 224, 200, 0.2)",
              "0 0 50px rgba(234, 224, 200, 0.05)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 group"
        >
          {/* Layered Glass Core */}
          <div className="w-36 h-32 rounded-full glass flex flex-col items-center justify-center border-white/[0.08] shadow-2xl relative overflow-hidden transition-all duration-1000 group-hover:border-primary/40">
            {/* Inner Refraction Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05]" />
            
            <div className="text-center relative z-10">
              <span className="text-white font-headline font-bold text-xl tracking-[0.5em] uppercase block">SYED</span>
              <motion.div 
                animate={{ width: hoveredNode ? "3.5rem" : "2.5rem" }}
                className="h-[1px] bg-primary/40 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(234,224,200,0.8)]" 
              />
            </div>
            
            {/* Core Glow Pulse */}
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-primary/[0.03] blur-xl"
            />
          </div>
          
          {/* Outer Atmospheric Aura */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-primary/30 blur-[80px] rounded-full -z-10" 
          />
        </motion.div>

        {/* Floating Interface Nodes */}
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
              style={{ x: orbit.radius * 2, y: orbit.radius, translateZ: idx * 15 }}
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
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(234, 224, 200, 0.25)",
                  translateZ: 80 
                }}
                className={cn(
                  "px-6 py-2.5 glass rounded-full text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-700 cursor-default shadow-xl border-white/[0.05]",
                  hoveredNode?.label === orbit.label 
                    ? "text-white border-primary/60 bg-primary/[0.2] shadow-[0_0_40px_rgba(234,224,200,0.3)]" 
                    : "text-[#EAE0C8]/60"
                )}
              >
                {orbit.label}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Dimensional Narrative Tooltip */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(20px)", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, y: 20, filter: "blur(20px)", scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[-15%] glass p-8 rounded-[2.5rem] border-white/10 w-80 text-center shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-[100] bg-[#0F1317]/95"
          >
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-2">
                <p className="text-primary font-bold tracking-[0.6em] uppercase text-[11px]">{hoveredNode.label}</p>
                <div className="h-px w-10 bg-primary/20" />
              </div>
              <p className="text-[#EAE0C8]/70 text-xs font-light leading-relaxed italic px-2">"{hoveredNode.desc}"</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
