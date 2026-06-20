"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATEMENTS = [
  "Building Products.",
  "Designing Systems.",
  "Creating Ecosystems."
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
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate atmospheric particles on mount
    const generated = [...Array(40)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 30 + Math.random() * 30,
      delay: Math.random() * 10,
      size: 1 + Math.random() * 1.2
    }));
    setParticles(generated);

    /**
     * REFINED CINEMATIC TIMELINE (7-9s active narrative)
     * Scene 1: 0.8s - 2.3s (Visible) + 0.8s transition
     * Scene 2: 3.1s - 4.6s (Visible) + 0.8s transition
     * Scene 3: 5.4s - 6.9s (Visible) + 0.8s transition
     * Scene 4: 7.7s - 10.2s (Visible Peak)
     * Emergence: 10.2s (onComplete triggered)
     */
    const t0 = setTimeout(() => setScene(1), 800);   // "Building Products."
    const t1 = setTimeout(() => setScene(2), 3100);  // "Designing Systems."
    const t2 = setTimeout(() => setScene(3), 5400);  // "Creating Ecosystems."
    const t3 = setTimeout(() => setScene(4), 7700);  // Name Reveal (Peak)
    const t4 = setTimeout(onComplete, 10200);        // Seamless Handoff Trigger

    return () => {
      [t0, t1, t2, t3, t4].forEach(clearTimeout);
    };
  }, [onComplete]);

  // Transition variants for heavy, confident typography
  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 15, 
      filter: "blur(15px)",
      scale: 1.02
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] 
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      filter: "blur(10px)",
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05, 
        filter: "blur(40px)",
        transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      {/* ATMOSPHERIC ENVIRONMENT */}
      <div className="fixed inset-0 grain-overlay z-[1] opacity-[0.03]" />
      
      {/* Volumetric Light - Deep Drift */}
      <motion.div 
        animate={{ 
          opacity: [0.03, 0.06, 0.03],
          scale: [1, 1.08, 1],
          x: [-20, 20, -20]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(83,104,120,0.1),transparent_60%)] z-0" 
      />

      {/* Drifting Particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.15, 0],
              y: [0, -150],
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

      {/* SEQUENTIAL NARRATIVE */}
      <div className="relative z-10 w-full text-center px-6">
        <AnimatePresence mode="wait">
          {(scene >= 1 && scene <= 3) && (
            <motion.div
              key={`statement-${scene}`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center justify-center"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black tracking-tighter text-white/90 uppercase italic leading-none select-none">
                {STATEMENTS[scene - 1]}
              </h2>
              {/* Confident Pause Indicator (Subconscious) */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="h-px bg-primary/20 mt-8"
              />
            </motion.div>
          )}

          {scene === 4 && (
            <motion.div
              key="final-reveal"
              initial={{ opacity: 0, filter: "blur(30px)", scale: 0.98 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="space-y-12">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                >
                  <h1 className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-headline font-black tracking-tighter text-white uppercase relative leading-none select-none">
                    SYED SHARFUDDIN SHUAIB
                    {/* Slow Light Sweep */}
                    <motion.div 
                      initial={{ left: "-100%", opacity: 0 }}
                      animate={{ left: "200%", opacity: [0, 0.08, 0] }}
                      transition={{ duration: 6, ease: "easeInOut", delay: 1.5 }}
                      className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 pointer-events-none"
                    />
                  </h1>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.4, y: 0 }}
                  transition={{ delay: 1.8, duration: 2 }}
                  className="flex flex-col items-center gap-6"
                >
                  <div className="h-px w-16 bg-primary/30" />
                  <p className="text-[10px] md:text-[12px] font-bold tracking-[1em] text-[#EAE0C8] uppercase select-none">
                    Founder • Builder • Systems Thinker
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Architectural Signature */}
      <div className="absolute bottom-16 left-12 right-12 z-20 hidden md:flex justify-between items-end opacity-20 pointer-events-none">
         <div className="space-y-1">
            <p className="text-[8px] font-bold tracking-[0.5em] text-white uppercase">Personal Portfolio</p>
            <p className="text-[8px] font-bold tracking-[0.5em] text-[#536878] uppercase">Production v2.0</p>
         </div>
         <div className="flex items-center gap-8">
            <div className="w-12 h-px bg-white/10" />
            <span className="text-[9px] font-mono tracking-[0.4em] text-white">EST. 2025</span>
         </div>
      </div>
    </motion.div>
  );
}
