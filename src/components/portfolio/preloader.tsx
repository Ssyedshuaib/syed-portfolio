"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";

const STATEMENTS = ["Building Products.", "Designing Systems.", "Creating Ecosystems."];

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [statementIndex, setStatementIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % STATEMENTS.length);
    }, 800);

    const completionTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 1200); // Wait for exit animation
    }, 2400);

    return () => {
      clearInterval(timer);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(40px)" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Atmosphere Layers */}
      <div className="fixed inset-0 grain-overlay z-[1] opacity-[0.03]" />
      
      {/* Layered Ambient Light */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [-20, 20, -20],
          y: [-20, 20, -20]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.12),transparent_70%)] z-0" 
      />

      {/* Floating Particle Field */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 0] }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute w-0.5 h-0.5 bg-[#EAE0C8] rounded-full"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-12">
        {/* Materializing Typography */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
          animate={{ 
            opacity: 1, 
            filter: "blur(0px)", 
            y: 0,
          }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <motion.h1 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl md:text-7xl font-headline font-black tracking-tighter text-white uppercase relative overflow-hidden"
          >
            Syed Sharfuddin Shuaib
            
            {/* Subtle Light Sweep */}
            <motion.div 
              animate={{ left: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
            />
          </motion.h1>
          
          <div className="mt-6 flex flex-col items-center gap-6">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-px bg-primary/20" 
            />

            <AnimatePresence mode="wait">
              <motion.p
                key={STATEMENTS[statementIndex]}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 0.4, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-lg md:text-xl font-light italic text-white"
              >
                {STATEMENTS[statementIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Hero Preview System indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[8px] font-bold tracking-[0.8em] text-[#536878] uppercase"
      >
        Architecting Digital Impact
      </motion.div>
    </motion.div>
  );
}
