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
  /* 
    0: The Void (Anticipation)
    1: Statement 1
    2: Statement 2
    3: Statement 3
    4: Name Reveal
    5: Hand-off Transition
  */
  
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate cinematic dust/particles on mount (client-side only to avoid hydration mismatch)
    const generated = [...Array(30)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 25 + Math.random() * 25,
      delay: Math.random() * 10,
      size: 1 + Math.random() * 1.5
    }));
    setParticles(generated);

    // Orchestrated Cinematic Timeline (Slower, deliberate pacing)
    const t0 = setTimeout(() => setScene(1), 800);  // Scene 1: Statement 1
    const t1 = setTimeout(() => setScene(2), 2500); // Scene 2: Statement 2
    const t2 = setTimeout(() => setScene(3), 4200); // Scene 3: Statement 3
    const t3 = setTimeout(() => setScene(4), 5900); // Scene 4: Name Reveal
    const t4 = setTimeout(() => setScene(5), 8500); // Final Emergence
    const t5 = setTimeout(onComplete, 9500);       // Sequence End

    return () => {
      [t0, t1, t2, t3, t4, t5].forEach(clearTimeout);
    };
  }, [onComplete]);

  const containerVariants = {
    exit: {
      scale: 1.05,
      filter: "blur(60px)",
      opacity: 0,
      transition: { duration: 2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20, filter: "blur(15px)" },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      filter: "blur(10px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial={{ opacity: 1 }}
      exit="exit"
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      {/* ATMOSPHERIC BACKGROUND LAYERS */}
      <div className="fixed inset-0 grain-overlay z-[1] opacity-[0.02]" />
      
      {/* Volumetric Light Drifts */}
      <motion.div 
        animate={{ 
          opacity: [0.03, 0.06, 0.03],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(83,104,120,0.08),transparent_50%)] z-0" 
      />
      <motion.div 
        animate={{ 
          opacity: [0.02, 0.05, 0.02],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(234,224,200,0.04),transparent_60%)] z-0" 
      />

      {/* Persistent Atmospheric Particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.2, 0],
              y: [0, -100],
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              delay: p.delay,
              ease: "linear"
            }}
            className="absolute bg-white/20 rounded-full blur-[0.5px]"
            style={{ 
              left: p.left, 
              top: p.top,
              width: p.size,
              height: p.size
            }}
          />
        ))}
      </div>

      {/* SEQUENTIAL NARRATIVE CONTAINER */}
      <div className="relative z-10 w-full text-center px-6">
        <AnimatePresence mode="wait">
          
          {/* STATEMENTS (SCENE 1, 2, 3) */}
          {(scene >= 1 && scene <= 3) && (
            <motion.div
              key={`statement-${scene}`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center justify-center"
            >
              <h2 className="text-3xl md:text-6xl font-headline font-black tracking-tighter text-white uppercase italic leading-none">
                {STATEMENTS[scene - 1]}
              </h2>
            </motion.div>
          )}

          {/* FINAL REVEAL (SCENE 4 & 5) */}
          {(scene === 4 || scene === 5) && (
            <motion.div
              key="final-reveal"
              initial={{ opacity: 0, filter: "blur(30px)", scale: 0.98 }}
              animate={{ 
                opacity: 1, 
                filter: "blur(0px)", 
                scale: scene === 5 ? 1.05 : 1,
              }}
              transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="space-y-12">
                <motion.div
                  initial={{ letterSpacing: "0.02em" }}
                  animate={{ letterSpacing: scene === 5 ? "0.15em" : "0.05em" }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                >
                  <h1 className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-headline font-black tracking-tighter text-white uppercase relative leading-none">
                    SYED SHARFUDDIN SHUAIB
                    
                    {/* Atmospheric Light Sweep */}
                    <motion.div 
                      initial={{ left: "-100%", opacity: 0 }}
                      animate={{ left: "200%", opacity: [0, 0.1, 0] }}
                      transition={{ duration: 5, ease: "easeInOut", delay: 1 }}
                      className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 pointer-events-none"
                    />
                  </h1>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.35, y: 0 }}
                  transition={{ delay: 1.5, duration: 2 }}
                  className="flex flex-col items-center gap-6"
                >
                  <div className="h-px w-12 md:w-20 bg-primary opacity-30" />
                  <p className="text-[10px] md:text-[12px] font-bold tracking-[0.8em] md:tracking-[1.2em] text-[#EAE0C8] uppercase">
                    Founder • Builder • Systems Thinker
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* INSTITUTIONAL SIGNATURE */}
      <div className="absolute bottom-16 left-12 right-12 z-20 flex justify-between items-end opacity-20 hidden md:flex">
         <div className="space-y-2">
            <p className="text-[8px] font-bold tracking-[0.5em] text-white uppercase">Personal Portfolio</p>
            <p className="text-[8px] font-bold tracking-[0.5em] text-[#536878] uppercase">Est. 2025</p>
         </div>
         <div className="flex items-center gap-6">
            <div className="w-16 h-px bg-white/20" />
            <span className="text-[9px] font-mono tracking-[0.3em] text-white">ARCH.SYS.485</span>
         </div>
      </div>
    </motion.div>
  );
}
