"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATEMENTS = [
  "BUILDING PRODUCTS.",
  "DESIGNING SYSTEMS.",
  "CREATING ECOSYSTEMS."
];

interface Particle {
  id: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  size: number;
}

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [scene, setScene] = useState(0); 
  /* 
    0: The Void (Anticipation)
    1: Identity Construction
    2: Title Cards (Statements)
    3: Final Founder Reveal
    4: Camera Move / Emergence
  */
  
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate cinematic dust/particles on mount
    const generated = [...Array(25)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 20 + Math.random() * 20,
      delay: Math.random() * 5,
      size: 1 + Math.random() * 2
    }));
    setParticles(generated);

    // Orchestrated Cinematic Timeline
    const t1 = setTimeout(() => setScene(1), 1000); // Start construction
    const t2 = setTimeout(() => setScene(2), 2500); // Start title cards
    const t3 = setTimeout(() => setScene(3), 4500); // Final Name Reveal
    const t4 = setTimeout(() => setScene(4), 5800); // Trigger Emergence
    const t5 = setTimeout(onComplete, 7500);       // Sequence End

    return () => {
      [t1, t2, t3, t4, t5].forEach(clearTimeout);
    };
  }, [onComplete]);

  const containerVariants = {
    exit: {
      scale: 1.1,
      filter: "blur(40px)",
      opacity: 0,
      transition: { duration: 2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial={{ opacity: 1 }}
      exit="exit"
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      {/* LAYER 1: CINEMATIC ATMOSPHERE */}
      <div className="fixed inset-0 grain-overlay z-[1] opacity-[0.03]" />
      
      {/* Volumetric Light Beams (Layered Parallax) */}
      <motion.div 
        animate={{ 
          rotate: [0, 5, 0],
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(83,104,120,0.1),transparent_50%)] z-0" 
      />
      <motion.div 
        animate={{ 
          rotate: [0, -5, 0],
          opacity: [0.03, 0.08, 0.03],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(234,224,200,0.05),transparent_60%)] z-0" 
      />

      {/* Atmospheric Drift (Particles) */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              delay: p.delay,
              ease: "linear"
            }}
            className="absolute bg-white/20 rounded-full blur-[1px]"
            style={{ 
              left: p.left, 
              top: p.top,
              width: p.size,
              height: p.size
            }}
          />
        ))}
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 w-full text-center">
        <AnimatePresence mode="wait">
          
          {/* SCENE 1: IDENTITY CONSTRUCTION */}
          {scene === 1 && (
            <motion.div
              key="construction"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="flex justify-center items-center gap-1">
                {"SYED".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                    animate={{ opacity: 0.15, x: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1.2 }}
                    className="text-xs font-bold tracking-[1em] text-white"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* SCENE 2: CINEMATIC TITLE CARDS */}
          {scene === 2 && (
            <motion.div
              key="statements"
              className="flex flex-col items-center justify-center gap-6"
            >
              {STATEMENTS.map((text, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                    animate={{ opacity: 0.4, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -40, filter: "blur(15px)" }}
                    transition={{ 
                      delay: i * 0.4, 
                      duration: 1.4, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="text-2xl md:text-5xl font-headline font-black tracking-tighter text-white uppercase italic"
                  >
                    {text}
                  </motion.h2>
                </div>
              ))}
            </motion.div>
          )}

          {/* SCENE 3 & 4: FINAL FOUNDER REVEAL */}
          {(scene === 3 || scene === 4) && (
            <motion.div
              key="final-reveal"
              initial={{ opacity: 0, filter: "blur(30px)", scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                filter: "blur(0px)", 
                scale: scene === 4 ? 1.05 : 1,
              }}
              transition={{ 
                duration: 2.5, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="relative"
            >
              <motion.h1 
                animate={{ 
                  letterSpacing: scene === 4 ? "0.2em" : "0.05em",
                }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="text-5xl md:text-[8rem] font-headline font-black tracking-tighter text-white uppercase relative leading-none"
              >
                SYED SHARFUDDIN SHUAIB
                
                {/* Volumetric Light Sweep */}
                <motion.div 
                  initial={{ left: "-150%" }}
                  animate={{ left: "250%" }}
                  transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent skew-x-12 pointer-events-none"
                />
              </motion.h1>
              
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "8rem", opacity: 0.15 }}
                transition={{ delay: 1, duration: 2 }}
                className="h-px bg-primary mx-auto mt-16" 
              />
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.25, y: 0 }}
                transition={{ delay: 1.5, duration: 1.5 }}
                className="text-[10px] font-bold tracking-[1em] text-[#536878] uppercase mt-12"
              >
                Architecting Digital Impact
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* PROGRESS INDICATOR (INSTITUTIONAL STYLE) */}
      <div className="absolute bottom-16 left-12 right-12 z-20 flex justify-between items-end opacity-20">
         <div className="space-y-2">
            <p className="text-[7px] font-bold tracking-[0.5em] text-white uppercase">Personal Portfolio</p>
            <p className="text-[7px] font-bold tracking-[0.5em] text-[#536878] uppercase">Est. 2025</p>
         </div>
         <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-[8px] font-mono tracking-widest text-white">485.45.0</span>
         </div>
      </div>
    </motion.div>
  );
}
