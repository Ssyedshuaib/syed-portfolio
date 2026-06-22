
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
  const [particles, setParticles] = useState<{ id: number; left: string; delay: number; duration: number }[]>([]);
  
  const lightIntensity = useMotionValue(0.04);
  const ambientScale = useMotionValue(1);
  const smoothIntensity = useSpring(lightIntensity, { stiffness: 15, damping: 40 });
  const smoothScale = useSpring(ambientScale, { stiffness: 15, damping: 40 });

  useEffect(() => {
    setIsMounted(true);
    setParticles([...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    })));

    // Luxurious cinematic sequence (11 seconds total)
    const t0 = setTimeout(() => {
      setScene(1);
      lightIntensity.set(0.06);
    }, 0);

    const t1 = setTimeout(() => {
      setScene(2);
      lightIntensity.set(0.08);
    }, 2500);

    const t2 = setTimeout(() => {
      setScene(3);
      lightIntensity.set(0.09);
    }, 5000);

    const t3 = setTimeout(() => {
      setScene(4);
      lightIntensity.set(0.14);
      ambientScale.set(1.05);
    }, 7500);

    const t4 = setTimeout(onComplete, 11000);

    return () => {
      [t0, t1, t2, t3, t4].forEach(clearTimeout);
    };
  }, [onComplete, lightIntensity, ambientScale]);

  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(20px)",
      scale: 1.05
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      scale: 1,
      transition: { 
        duration: 1.4, 
        ease: [0.16, 1, 0.3, 1] 
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      filter: "blur(15px)",
      transition: { 
        duration: 0.8, 
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
        scale: 1.05, 
        filter: "blur(80px)",
        transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        style={{ 
          opacity: smoothIntensity,
          scale: smoothScale,
        }}
        animate={{ 
          x: [-15, 15, -15],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[-30%] bg-[radial-gradient(circle_at_30%_30%,rgba(83,104,120,0.18),transparent_70%)] z-[-1]" 
      />

      <div className="fixed inset-0 grain-overlay z-[1] opacity-[0.025] pointer-events-none" />

      <div className="absolute inset-0 z-[2] pointer-events-none opacity-10">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
            className="absolute w-0.5 h-0.5 bg-[#EAE0C8] rounded-full"
            style={{ left: p.left }}
          />
        ))}
      </div>

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
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-headline font-black tracking-tighter text-white/90 uppercase italic leading-none select-none">
                {STATEMENTS[scene - 1]}
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="h-[1px] bg-primary/20 mt-12"
              />
            </motion.div>
          )}

          {scene === 4 && (
            <motion.div
              key="final-reveal"
              initial={{ opacity: 0, filter: "blur(40px)", scale: 0.98 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="space-y-12 md:space-y-16">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                >
                  <h1 className="text-4xl md:text-7xl lg:text-[clamp(3.5rem,8vw,9rem)] font-headline font-black tracking-tighter text-white uppercase relative leading-tight select-none px-4">
                    SYED SHARFUDDIN SHUAIB
                  </h1>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.4, y: 0 }}
                  transition={{ delay: 1.5, duration: 2 }}
                  className="flex flex-col items-center gap-8"
                >
                  <div className="h-px w-24 bg-primary/30" />
                  <p className="text-[10px] md:text-xs lg:text-[13px] font-bold tracking-[1em] md:tracking-[1.4em] text-primary/80 uppercase select-none text-center">
                    Founder • Builder • Systems Thinker
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
