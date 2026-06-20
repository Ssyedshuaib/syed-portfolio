"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isExitStarted, setIsExitStarted] = useState(false);

  useEffect(() => {
    // Smooth counter logic
    const duration = 2000; // 2 seconds
    const interval = 16; // ~60fps
    const totalSteps = duration / interval;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          // Wait briefly at 100% for impact
          setTimeout(() => {
            setIsExitStarted(true);
            setTimeout(onComplete, 1200); // Duration of the exit animation
          }, 400);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="fixed inset-0 grain-overlay z-[1] opacity-[0.02]" />
      <motion.div 
        animate={{ 
          scale: isExitStarted ? 1.5 : 1,
          opacity: isExitStarted ? 0.4 : 0.15 
        }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.2),transparent_70%)] z-0" 
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: `${Math.random() * 100}vw`, 
              y: `${Math.random() * 100}vh`,
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-10vh"],
              opacity: [0, 0.2, 0] 
            }}
            transition={{ 
              duration: 4 + Math.random() * 4, 
              repeat: Infinity,
              delay: Math.random() * 5 
            }}
            className="absolute w-0.5 h-0.5 bg-primary/30 rounded-full"
          />
        ))}
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            scale: isExitStarted ? 1.05 : 1 
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-8xl font-headline font-black tracking-[0.5em] text-white leading-none">
            AXORA
          </h1>
          <div className="flex flex-col items-center gap-4">
             <div className="h-px w-8 bg-primary/20" />
             <p className="text-[9px] md:text-[11px] font-bold tracking-[0.8em] text-[#536878] uppercase">
               Building Systems. Not Trends.
             </p>
          </div>
        </motion.div>

        {/* Progress Display */}
        <div className="relative h-20 flex items-center justify-center">
          <motion.span 
            className="text-5xl md:text-7xl font-headline font-light text-white/5 tabular-nums select-none"
            animate={{ opacity: isExitStarted ? 0 : 1 }}
          >
            {Math.round(progress)}%
          </motion.span>
          
          {/* Subtle line indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/5 overflow-hidden">
             <motion.div 
               className="h-full bg-primary/40 shadow-[0_0_10px_rgba(234,224,200,0.5)]"
               style={{ width: `${progress}%` }}
             />
          </div>
        </div>
      </div>

      {/* Side Decorative Lines */}
      <motion.div 
        animate={{ opacity: isExitStarted ? 0 : 0.05 }}
        className="absolute bottom-12 left-12 right-12 flex justify-between text-[8px] font-bold tracking-[0.4em] text-[#536878] uppercase"
      >
        <span>Venture Studio</span>
        <span>Est. 2025</span>
      </motion.div>
    </motion.div>
  );
}
