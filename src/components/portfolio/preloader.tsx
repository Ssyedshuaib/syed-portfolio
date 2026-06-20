"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TITLES = ["FOUNDER", "BUILDER", "SYSTEMS THINKER"];
const STATEMENTS = ["Building products.", "Designing systems.", "Creating ecosystems."];

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Titles sequence (0 - 900ms)
    const titleTimer = setInterval(() => {
      setStage((prev) => {
        if (prev < TITLES.length - 1) return prev + 1;
        clearInterval(titleTimer);
        return prev;
      });
    }, 300);

    // Stage 1: Name reveal (900ms - 1700ms)
    const nameTimer = setTimeout(() => {
      setStage(3); // Syed Sharfuddin Shuaib
    }, 1000);

    // Stage 2: Statements (1700ms - 2400ms)
    const statementsTimer = setTimeout(() => {
      setStage(4); // Statements
    }, 1800);

    // Final Stage: Completion (2500ms)
    const completionTimer = setTimeout(() => {
      onComplete();
    }, 2600);

    return () => {
      clearInterval(titleTimer);
      clearTimeout(nameTimer);
      clearTimeout(statementsTimer);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="fixed inset-0 grain-overlay z-[1] opacity-[0.02]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.1),transparent_70%)] z-0" />

      <div className="relative z-10 text-center">
        <AnimatePresence mode="wait">
          {stage < 3 && (
            <motion.p
              key={TITLES[stage]}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-[10px] font-bold tracking-[0.8em] text-[#536878] uppercase"
            >
              {TITLES[stage]}
            </motion.p>
          )}

          {stage === 3 && (
            <motion.div
              key="name-reveal"
              initial={{ opacity: 0, filter: "blur(20px)", scale: 0.98 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-white uppercase">
                Syed Sharfuddin Shuaib
              </h1>
              <div className="h-px w-12 bg-primary/20 mx-auto" />
            </motion.div>
          )}

          {stage === 4 && (
            <motion.div
              key="statements"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              {STATEMENTS.map((text, i) => (
                <motion.p
                  key={text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="text-lg md:text-xl font-light italic text-white"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 overflow-hidden w-24 h-px bg-white/5">
        <motion.div
          className="h-full bg-primary/40"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2.5, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
