"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TITLES = ["FOUNDER", "BUILDER", "SYSTEMS THINKER"];

interface Particle {
  id: number;
  left: string;
  duration: number;
  delay: number;
}

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [scene, setScene] = useState(0); // 0: Void, 1: Titles, 2: Name Materialization, 3: Dissolve
  const [titleIndex, setTitleIndex] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Client-side particle generation for hydration safety
    const generatedParticles = [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 15,
      delay: Math.random() * 5,
    }));
    setParticles(generatedParticles);

    // Cinematic Sequence Timing
    // Scene 1: Silence & Space (1s)
    const stage1Timer = setTimeout(() => setScene(1), 1000);

    // Scene 2: Sequential Titles (Each word 0.6s + pause)
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => {
        if (prev === TITLES.length - 1) {
          clearInterval(titleInterval);
          setTimeout(() => setScene(2), 600); // Transition to Name
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    // Scene 3: Name Materialization (starts at ~3s)
    // Scene 4 & 5: Ambient Light & Hero Clear (triggered by scene 3)
    const stage3Timer = setTimeout(() => {
      setScene(3);
      // Final hand-off after materialization is felt
      setTimeout(onComplete, 1800);
    }, 3800);

    return () => {
      clearTimeout(stage1Timer);
      clearInterval(titleInterval);
      clearTimeout(stage3Timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(60px)" }}
      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Layer 1: Deep Luxury Grain & Tone */}
      <div className="fixed inset-0 grain-overlay z-[1] opacity-[0.02]" />
      
      {/* Layer 2: Subtle Ambient Energy */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.08),transparent_70%)] z-0" 
      />

      {/* Layer 3: Atmospheric Drift */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 0.5, 0] }}
            transition={{ 
              duration: particle.duration, 
              repeat: Infinity, 
              delay: particle.delay,
              ease: "linear"
            }}
            className="absolute w-px h-px bg-[#EAE0C8] rounded-full shadow-[0_0_10px_white]"
            style={{ left: particle.left }}
          />
        ))}
      </div>

      {/* Scene Content Container */}
      <div className="relative z-10 text-center">
        <AnimatePresence mode="wait">
          {scene === 1 && (
            <motion.div
              key="stage-titles"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <motion.p
                key={TITLES[titleIndex]}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 0.3, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.8 }}
                className="text-[10px] font-bold tracking-[1em] text-white uppercase"
              >
                {TITLES[titleIndex]}
              </motion.p>
            </motion.div>
          )}

          {(scene === 2 || scene === 3) && (
            <motion.div
              key="stage-name"
              initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
              animate={{ 
                opacity: 1, 
                filter: "blur(0px)", 
                y: 0,
              }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Materializing Typography */}
              <motion.h1 
                animate={{ 
                  y: [0, -4, 0],
                  scale: [1, 1.005, 1]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl md:text-7xl font-headline font-black tracking-tighter text-white uppercase relative"
              >
                Syed Sharfuddin Shuaib
                
                {/* Environmental Light Sweep (Scene 5) */}
                <motion.div 
                  initial={{ left: "-150%" }}
                  animate={{ left: "250%" }}
                  transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
                  className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12 pointer-events-none"
                />
              </motion.h1>
              
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "4rem", opacity: 0.2 }}
                transition={{ delay: 1.5, duration: 2 }}
                className="h-px bg-primary mx-auto mt-12" 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Signature Aesthetic Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: scene >= 2 ? 0.2 : 0 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-[7px] font-bold tracking-[0.8em] text-[#536878] uppercase"
      >
        Architecting Digital Impact
      </motion.div>
    </motion.div>
  );
}
