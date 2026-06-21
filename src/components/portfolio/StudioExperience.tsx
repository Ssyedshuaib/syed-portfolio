
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StudioExperienceProps {
  onClose: () => void;
}

const INTRO_STEPS = [
  "WELCOME.",
  "YOU DIDN'T COME HERE BY ACCIDENT.",
  "EVERY MEANINGFUL SYSTEM BEGINS WITH A CONVERSATION.",
  "LET'S BUILD SOMETHING THAT MATTERS."
];

export function StudioExperience({ onClose }: StudioExperienceProps) {
  const [step, setStep] = useState(0);
  const [showHub, setShowHub] = useState(false);

  useEffect(() => {
    if (step < INTRO_STEPS.length) {
      const timer = setTimeout(() => {
        setStep(prev => prev + 1);
      }, 2000); // Updated to 2-second timing as requested
      return () => clearTimeout(timer);
    } else {
      setShowHub(true);
    }
  }, [step]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'radial-gradient(circle at center, #081018 0%, #05070a 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      {/* EXIT BUTTON */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '3rem',
          right: '3rem',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.4em',
          color: 'rgba(255, 255, 255, 0.3)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          zIndex: 100
        }}
        className="hover:text-white transition-colors"
      >
        RETURN
      </button>

      <AnimatePresence mode="wait">
        {!showHub ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              textAlign: 'center',
              maxWidth: '800px'
            }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.05em',
              color: 'white',
              lineHeight: 1.1,
              textTransform: 'uppercase',
              fontStyle: 'italic'
            }}>
              {INTRO_STEPS[step]}
            </h2>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4rem',
              width: '100%',
              maxWidth: '1200px'
            }}
          >
            <HubOption label="BUILD SOMETHING" />
            <HubOption label="EXPLORE AXORA" />
            <HubOption label="SCHEDULE DISCUSSION" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function HubOption({ label }: { label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, x: 20 }}
      style={{
        fontSize: 'clamp(4rem, 8vw, 10rem)',
        fontWeight: 900,
        letterSpacing: '-0.07em',
        color: 'rgba(255, 255, 255, 0.1)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'center',
        lineHeight: 0.85,
        textTransform: 'uppercase',
        fontStyle: 'italic',
        transition: 'color 0.5s ease'
      }}
      className="hover:text-primary"
    >
      {label}
    </motion.button>
  );
}
