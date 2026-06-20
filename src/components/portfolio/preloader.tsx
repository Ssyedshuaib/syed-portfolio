"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const STATEMENTS = [
  "Building Products.",
  "Designing Systems.",
  "Creating Ecosystems."
];

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [scene, setScene] = useState(0); 
  const [mounted, setIsMounted] = useState(false);
  
  const lightIntensity = useMotionValue(0.04);
  const ambientScale = useMotionValue(1);
  const smoothIntensity = useSpring(lightIntensity, { stiffness: 15, damping: 40 });
  const smoothScale = useSpring(ambientScale, { stiffness: 15, damping: 40 });

  useEffect(() => {
    setIsMounted(true);
    /**
     * PRECISION CINEMATIC TIMELINE (11s Complete Sequence)
     * Scene 0: Silence (0.8s)
     * Scene 1-3: Statements (1.5s visible + 0.8s transition each)
     * Scene 4: Name Reveal (2.5s emotional hold)
     * Final Handoff: 11s
     */
    const t0 = setTimeout(() => {
      setScene(1);
      lightIntensity.set(0.07);
      ambientScale.set(1.02);
    }, 800);

    const t1 = setTimeout(() => {
      setScene(2);
      lightIntensity.set(0.08);
    }, 3100);

    const t2 = setTimeout(() => {
      setScene(3);
      lightIntensity.set(0.07);
    }, 5400);

    const t3 = setTimeout(() => {
      setScene(4);
      lightIntensity.set(0.12);
      ambientScale.set(1.06);
    }, 7700);

    const t4 = setTimeout(onComplete, 11000);

    return () => {
      [t0, t1, t2, t3, t4].forEach(clearTimeout);
    };
  }, [onComplete, lightIntensity, ambientScale]);

  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 15, 
      filter: "blur(20px)",
      scale: 1.05
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      scale: 1,
      transition: { 
        duration: 1.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    },
    exit: { 
      opacity: 0, 
      y: -8, 
      filter: "blur(15px)",
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1, 
        filter: "blur(80px)",
        transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      {/* LAYER 1: Deep Atmospheric Depth */}
      <motion.div 
        style={{ 
          opacity: smoothIntensity,
          scale: smoothScale,
        }}
        animate={{ 
          x: [-40, 40, -40],
          y: [-30, 30, -30],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[-30%] bg-[radial-gradient(circle_at_30%_30%,rgba(83,104,120,0.18),transparent_70%)] z-[-1]" 
      />

      <motion.div 
        animate={{ 
          opacity: [0.02, 0.05, 0.02],
          rotate: [0, 8, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[-60%] bg-[conic-gradient(from_0deg,transparent,rgba(234,224,200,0.03),transparent)] blur-[120px] z-[-1]"
      />

      <div className="fixed inset-0 grain-overlay z-[1] opacity-[0.025] pointer-events-none" />

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
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black tracking-tighter text-white/90 uppercase italic leading-none select-none drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                {STATEMENTS[scene - 1]}
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 1, duration: 2.2 }}
                className="h-[1px] bg-primary/20 mt-16"
              />
            </motion.div>
          )}

          {scene === 4 && (
            <motion.div
              key="final-reveal"
              initial={{ opacity: 0, filter: "blur(40px)", scale: 0.97 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="space-y-20">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                >
                  <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-headline font-black tracking-tighter text-white uppercase relative leading-none select-none">
                    SYED SHARFUDDIN SHUAIB
                    <motion.div 
                      initial={{ left: "-100%", opacity: 0 }}
                      animate={{ left: "200%", opacity: [0, 0.08, 0] }}
                      transition={{ duration: 10, ease: "easeInOut", delay: 1.5 }}
                      className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
                    />
                  </h1>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 0.4, y: 0 }}
                  transition={{ delay: 2.5, duration: 3 }}
                  className="flex flex-col items-center gap-10"
                >
                  <div className="h-px w-32 bg-primary/30" />
                  <p className="text-[11px] md:text-[14px] font-bold tracking-[1.4em] text-primary/80 uppercase select-none">
                    Founder • Builder • Systems Thinker
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-20 left-16 right-16 z-20 hidden md:flex justify-between items-end opacity-20 pointer-events-none">
         <div className="space-y-2">
            <p className="text-[9px] font-bold tracking-[0.8em] text-white uppercase">Personal Portfolio</p>
            <p className="text-[9px] font-bold tracking-[0.8em] text-primary/40 uppercase">Studio v3.0 Institutional</p>
         </div>
         <div className="flex items-center gap-16">
            <div className="w-24 h-px bg-white/10" />
            <span className="text-[10px] font-mono tracking-[0.6em] text-white">EST. 2025</span>
         </div>
      </div>
    </motion.div>
  );
}
