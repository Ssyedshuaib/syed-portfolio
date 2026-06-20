"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const STATEMENTS = [
  "Building Products.",
  "Designing Systems.",
  "Creating Ecosystems."
];

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [scene, setScene] = useState(0); 
  
  // Motion values for environmental reactions
  const lightIntensity = useMotionValue(0.03);
  const ambientScale = useMotionValue(1);
  const smoothIntensity = useSpring(lightIntensity, { stiffness: 20, damping: 30 });
  const smoothScale = useSpring(ambientScale, { stiffness: 20, damping: 30 });

  useEffect(() => {
    /**
     * PRECISION CINEMATIC TIMELINE (7-9s active narrative + emergence)
     * Scene 0: 0s - 0.8s (Silence/Anticipation)
     * Scene 1: 0.8s - 3.1s (Building Products. - 1.5s visible + 0.8s transition)
     * Scene 2: 3.1s - 5.4s (Designing Systems. - 1.5s visible + 0.8s transition)
     * Scene 3: 5.4s - 7.7s (Creating Ecosystems. - 1.5s visible + 0.8s transition)
     * Scene 4: 7.7s - 10.2s (Name Reveal - 2.5s emotional peak)
     * Final: 11s (Seamless Handoff)
     */
    const t0 = setTimeout(() => {
      setScene(1);
      lightIntensity.set(0.06);
      ambientScale.set(1.02);
    }, 800);

    const t1 = setTimeout(() => {
      setScene(2);
      lightIntensity.set(0.07);
    }, 3100);

    const t2 = setTimeout(() => {
      setScene(3);
      lightIntensity.set(0.06);
    }, 5400);

    const t3 = setTimeout(() => {
      setScene(4);
      lightIntensity.set(0.1);
      ambientScale.set(1.05);
    }, 7700);

    const t4 = setTimeout(onComplete, 11000);

    return () => {
      [t0, t1, t2, t3, t4].forEach(clearTimeout);
    };
  }, [onComplete, lightIntensity, ambientScale]);

  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 10, 
      filter: "blur(20px)",
      scale: 1.02
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      scale: 1,
      transition: { 
        duration: 1.6, 
        ease: [0.16, 1, 0.3, 1] 
      }
    },
    exit: { 
      opacity: 0, 
      y: -5, 
      filter: "blur(15px)",
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
        scale: 1.08, 
        filter: "blur(60px)",
        transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-transparent flex items-center justify-center overflow-hidden"
    >
      {/* LAYER 1: Deep Luxury Gradient */}
      <div className="absolute inset-0 bg-[#050505] z-[-2]" />
      
      {/* LAYER 2: Volumetric Light - Deep Drift */}
      <motion.div 
        style={{ 
          opacity: smoothIntensity,
          scale: smoothScale,
        }}
        animate={{ 
          x: [-30, 30, -30],
          y: [-20, 20, -20],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[-20%] bg-[radial-gradient(circle_at_30%_30%,rgba(83,104,120,0.15),transparent_60%)] z-[-1]" 
      />

      {/* LAYER 3: Atmospheric Fog / Soft Volumetric Shifts */}
      <motion.div 
        animate={{ 
          opacity: [0.02, 0.04, 0.02],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent,rgba(234,224,200,0.02),transparent)] blur-[100px] z-[-1]"
      />

      {/* LAYER 4: Grain Overlay */}
      <div className="fixed inset-0 grain-overlay z-[1] opacity-[0.03] pointer-events-none" />

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
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black tracking-tighter text-white/90 uppercase italic leading-none select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                {STATEMENTS[scene - 1]}
              </h2>
              {/* Confident Pause Indicator */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ delay: 0.8, duration: 2 }}
                className="h-px bg-primary/10 mt-12"
              />
            </motion.div>
          )}

          {scene === 4 && (
            <motion.div
              key="final-reveal"
              initial={{ opacity: 0, filter: "blur(30px)", scale: 0.98 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="space-y-16">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                >
                  <h1 className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-headline font-black tracking-tighter text-white uppercase relative leading-none select-none">
                    SYED SHARFUDDIN SHUAIB
                    {/* Atmospheric Light Sweep */}
                    <motion.div 
                      initial={{ left: "-100%", opacity: 0 }}
                      animate={{ left: "200%", opacity: [0, 0.05, 0] }}
                      transition={{ duration: 8, ease: "easeInOut", delay: 1 }}
                      className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 pointer-events-none"
                    />
                  </h1>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.3, y: 0 }}
                  transition={{ delay: 2, duration: 2.5 }}
                  className="flex flex-col items-center gap-8"
                >
                  <div className="h-px w-24 bg-primary/20" />
                  <p className="text-[10px] md:text-[12px] font-bold tracking-[1.2em] text-[#EAE0C8] uppercase select-none">
                    Founder • Builder • Systems Thinker
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ARCHITECTURAL SIGNATURE */}
      <div className="absolute bottom-16 left-12 right-12 z-20 hidden md:flex justify-between items-end opacity-10 pointer-events-none">
         <div className="space-y-1">
            <p className="text-[8px] font-bold tracking-[0.6em] text-white uppercase">Personal Portfolio</p>
            <p className="text-[8px] font-bold tracking-[0.6em] text-[#536878] uppercase">Studio v2.5</p>
         </div>
         <div className="flex items-center gap-12">
            <div className="w-16 h-px bg-white/10" />
            <span className="text-[9px] font-mono tracking-[0.5em] text-white">EST. 2025</span>
         </div>
      </div>
    </motion.div>
  );
}
