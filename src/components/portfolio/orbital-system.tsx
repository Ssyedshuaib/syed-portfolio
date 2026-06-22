
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const ORBITS = [
  { label: "OBSERVE", radius: 100, duration: 35, delay: 0, desc: "Deeply understanding the human problem space." },
  { label: "UNDERSTAND", radius: 140, duration: 40, delay: -5, desc: "Mapping friction points and hidden user needs." },
  { label: "DESIGN", radius: 180, duration: 45, delay: -10, desc: "Architecting high-intent digital ecosystems." },
  { label: "BUILD", radius: 220, duration: 50, delay: -15, desc: "Engineering for performance and scalability." },
  { label: "LAUNCH", radius: 250, duration: 55, delay: -20, desc: "Deploying systems that generate real value." },
  { label: "SCALE", radius: 280, duration: 42, delay: -8, desc: "Iterating for global growth and system depth." },
];

export function OrbitalSystem() {
  const [hoveredNode, setHoveredNode] = useState<{label: string, desc: string} | null>(null);
  const [mounted, setMounted] = useState(false);

  // Parallax Values - Consistently called at top level
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 40, damping: 30 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D rotations based on mouse
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);

  // Glow and depth shifts
  const glowX = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);
  const glowY = useTransform(smoothMouseY, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window === 'undefined') return;
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Memoize static background elements
  const particles = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5
    }));
  }, []);

  if (!mounted) {
    return <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center opacity-0" />;
  }

  return (
    <div 
      className="relative w-full aspect-square max-w-[600px] flex items-center justify-center gpu-accelerated"
      style={{ perspective: 1200 }}
    >
      {/* Cinematic Ambient Glow */}
      <motion.div 
        style={{ x: glowX, y: glowY }}
        animate={{ 
          opacity: [0.03, 0.05, 0.03],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[110%] h-[110%] bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.1),transparent_70%)] blur-3xl pointer-events-none will-change-transform"
      />

      {/* Atmospheric Cinematic Dust / Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ 
              x: p.x, 
              y: p.y, 
              opacity: 0 
            }}
            animate={{ 
              y: ["0%", "10%"],
              opacity: [0, 0.6, 0],
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              delay: p.delay 
            }}
            className="absolute w-0.5 h-0.5 bg-primary/40 rounded-full blur-[1px] will-change-transform"
          />
        ))}
      </div>

      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full flex items-center justify-center will-change-transform"
      >
        {/* Central Identity Module */}
        <motion.div 
          style={{ translateZ: 80 }}
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-50 group will-change-transform"
        >
          <div className="w-44 h-44 rounded-full glass border-white/[0.08] shadow-[0_0_80px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-1000 group-hover:border-primary/30 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.08] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.08),transparent_65%)] pointer-events-none" />
            
            <div className="text-center relative z-10">
              <span className="text-white font-headline font-bold text-2xl tracking-[0.5em] uppercase block select-none">SYED</span>
              <motion.div 
                animate={{ width: hoveredNode ? "5rem" : "2.5rem" }}
                className="h-[1px] bg-primary/40 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(234,224,200,0.8)]" 
              />
            </div>
            
            <motion.div 
              animate={{ opacity: [0.03, 0.1, 0.03] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 bg-primary/10 blur-2xl"
            />
          </div>
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[-40%] bg-primary/15 blur-[120px] rounded-full -z-10" 
          />
        </motion.div>

        {/* Concept Labels as Pure Floating Typography */}
        {ORBITS.map((orbit, idx) => {
          const depth = idx * 30;
          const blurAmount = Math.max(0, (idx - 2) * 1.5);
          const opacityVal = 1 - (idx * 0.12);
          const scaleVal = 1 - (idx * 0.05);

          return (
            <motion.div
              key={idx}
              className="absolute z-10 will-change-transform"
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
                  translateZ: depth, 
                  transformStyle: "preserve-3d"
                }}
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
                  whileHover={{ scale: 1.1, opacity: 1, filter: "blur(0px)", translateZ: 100 }}
                  style={{ 
                    opacity: opacityVal, 
                    scale: scaleVal,
                    filter: `blur(${blurAmount}px)`
                  }}
                  className={cn(
                    "text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-700 cursor-default select-none",
                    hoveredNode?.label === orbit.label 
                      ? "text-primary text-shadow-glow" 
                      : "text-[#EAE0C8]/70"
                  )}
                >
                  {orbit.label}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Floating System Narrative Module */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(20px)", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, y: 20, filter: "blur(15px)", scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[-15%] glass p-10 rounded-[3rem] border-white/10 w-80 text-center shadow-[0_50px_100px_rgba(0,0,0,0.8)] z-[100] bg-[#0F1317]/95 backdrop-blur-[60px]"
          >
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-3">
                <p className="text-primary font-bold tracking-[0.8em] uppercase text-[11px]">{hoveredNode.label}</p>
                <div className="h-[1px] w-12 bg-primary/30" />
              </div>
              <p className="text-[#EAE0C8]/70 text-xs font-light leading-relaxed italic px-4">"{hoveredNode.desc}"</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
