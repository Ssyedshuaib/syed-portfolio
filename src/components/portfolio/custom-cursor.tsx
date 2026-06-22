
"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<"default" | "visit" | "explore" | "enter" | "email" | "connect" | "hidden">("default");
  const [isMobile, setIsMobile] = useState(false);

  // Position Values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring Physics for weight and lag - optimized luxury configuration
  const springConfig = { stiffness: 450, damping: 40, mass: 0.8 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Optimized event handler to prevent redundant state updates
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorData = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      
      let nextState: any = "default";
      if (cursorData) {
        nextState = cursorData;
      } else if (target.tagName === "A" || target.closest("button") || target.tagName === "BUTTON") {
        nextState = "visit";
      }

      setCursorState(prev => prev !== nextState ? nextState : prev);
    };

    const handleMouseOut = () => {
      setCursorState("default");
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", () => setCursorState("hidden"));
    document.addEventListener("mouseenter", () => setCursorState("default"));

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  const variants = {
    default: { width: 8, height: 8, backgroundColor: "#EAE0C8" },
    hidden: { width: 0, height: 0, opacity: 0 },
    visit: { width: 40, height: 40, backgroundColor: "rgba(234, 224, 200, 0.15)", border: "1px solid rgba(234, 224, 200, 0.3)" },
    explore: { width: 60, height: 60, backgroundColor: "rgba(83, 104, 120, 0.2)", border: "1px solid rgba(234, 224, 200, 0.4)" },
    enter: { width: 55, height: 55, backgroundColor: "rgba(234, 224, 200, 0.1)", border: "1px solid rgba(234, 224, 200, 0.5)", boxShadow: "0 0 20px rgba(234, 224, 200, 0.2)" },
    email: { width: 50, height: 50, backgroundColor: "rgba(83, 104, 120, 0.15)", border: "1px solid rgba(83, 104, 120, 0.3)" },
    connect: { width: 50, height: 50, backgroundColor: "rgba(42, 33, 85, 0.1)", border: "1px solid rgba(234, 224, 200, 0.4)" },
  };

  const labels: Record<string, string> = {
    visit: "Visit",
    explore: "Explore",
    enter: "Enter",
    email: "Email",
    connect: "Connect"
  };

  const currentLabel = labels[cursorState] || "";

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center rounded-full mix-blend-difference backdrop-blur-[2px] will-change-transform"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        transformStyle: "preserve-3d"
      }}
      animate={cursorState}
      variants={variants}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <AnimatePresence mode="wait">
        {currentLabel && (
          <motion.span
            key={cursorState}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="text-[8px] font-bold tracking-[0.2em] uppercase text-white/80"
          >
            {currentLabel}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
