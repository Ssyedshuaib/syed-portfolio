
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight, X, Sparkles, Calendar, Mail, Linkedin, ChevronRight } from "lucide-react";

/**
 * THE FOUNDER SIGNATURE & STUDIO EXPERIENCE
 * A world-class cinematic finale and private dialogue hub.
 */

interface FooterProps {
  onStudioStateChange?: (isOpen: boolean) => void;
}

export function Footer({ onStudioStateChange }: FooterProps) {
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [activeView, setActiveHubView] = useState<"intro" | "hub" | "build" | "explore" | "scheduling">("intro");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpenStudio = () => {
    setIsStudioOpen(true);
    setActiveHubView("intro");
    onStudioStateChange?.(true);
  };

  const handleCloseStudio = () => {
    setIsStudioOpen(false);
    onStudioStateChange?.(false);
  };

  if (!isMounted) return null;

  return (
    <footer className="relative bg-background pt-96 pb-24 px-6 overflow-hidden" role="contentinfo">
      
      {/* GIANT BACKGROUND TYPOGRAPHY (The Signature Watermark) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          className="text-[35vw] font-headline font-black text-white tracking-tighter leading-none text-center animate-breathing"
        >
          SYED
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* THE STUDIO PORTAL (Interactive Artifact) */}
        <div className="mb-48">
          <OrbitalPortal onClick={handleOpenStudio} />
        </div>

        {/* THE SIGNATURE BLOCK (Founder Identity) */}
        <div className="space-y-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-headline font-bold text-white tracking-tight">SYED SHUAIB</h3>
              <div className="flex flex-col gap-1 text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">
                <span>Founder</span>
                <span>Product Builder</span>
                <span>System Architect</span>
              </div>
            </div>
            <div className="h-px w-12 bg-white/5 mx-auto" />
          </motion.div>

          {/* Institutional Detail */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-lg md:text-xl font-light tracking-[0.4em] text-[#EAE0C8] uppercase"
          >
            AXORA
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.8 }}
            className="text-[11px] font-bold tracking-[0.6em] text-white uppercase"
          >
            Bangalore, India
          </motion.div>

          {/* PREMIUM EDITORIAL LINKS */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 pt-12">
            <EditorialLink label="Email" href="mailto:syedshuaib2429@gmail.com" />
            <EditorialLink label="LinkedIn" href="https://www.linkedin.com/in/syedshuaib485/" />
            <EditorialLink label="Schedule Discussion" href="#" isPrimary />
          </div>

          {/* SIGNATURE STATEMENT & COPYRIGHT */}
          <div className="pt-32 space-y-12 border-t border-white/5 w-full max-w-4xl mx-auto">
            <p className="text-[11px] font-bold tracking-[0.8em] text-white/20 uppercase italic">
              "Building systems that outlast trends."
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 opacity-20">
              <p className="text-[9px] font-bold tracking-[0.4em] text-white uppercase">
                &copy; {new Date().getFullYear()} AXORA
              </p>
              <p className="text-[9px] font-bold tracking-[0.5em] text-white uppercase italic">
                Designed With Intention.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CINEMATIC STUDIO MODE OVERLAY */}
      <AnimatePresence>
        {isStudioOpen && (
          <StudioExperience onClose={handleCloseStudio} initialView={activeView} />
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.03),transparent_70%)] pointer-events-none" />
    </footer>
  );
}

function EditorialLink({ label, href, isPrimary = false }: { label: string; href: string; isPrimary?: boolean }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative py-2 text-xs font-bold tracking-[0.5em] uppercase transition-colors duration-500 flex items-center gap-3",
        isPrimary ? "text-primary" : "text-white/30 hover:text-white"
      )}
    >
      <span className="relative">
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-700 group-hover:w-full" />
      </span>
      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-40 group-hover:translate-x-0 transition-all duration-500" />
    </motion.a>
  );
}

function OrbitalPortal({ onClick }: { onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 25 });
  const springY = useSpring(y, { stiffness: 100, damping: 25 });

  function handleMouseMove(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) * 0.2);
    y.set((event.clientY - centerY) * 0.2);
  }

  return (
    <motion.button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: springX, y: springY }}
      className="group relative w-64 h-64 flex items-center justify-center cursor-pointer"
    >
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border border-white/[0.03] rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 border border-primary/5 rounded-full border-dashed"
      />
      
      <div className="w-40 h-44 rounded-full glass border-white/5 flex items-center justify-center relative overflow-hidden transition-all duration-1000 group-hover:border-primary/20 group-hover:shadow-[0_0_80px_rgba(234,224,200,0.08)]">
        <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="relative z-10 text-[10px] font-bold tracking-[0.5em] text-white/40 group-hover:text-primary transition-colors text-center px-4 leading-relaxed uppercase">
          ENTER THE <br />STUDIO
        </span>
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-primary/5 blur-2xl rounded-full"
        />
      </div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
          className="absolute w-0.5 h-0.5 bg-primary/40 rounded-full blur-[1px]"
          style={{ 
            top: `${15 + Math.random() * 70}%`, 
            left: `${15 + Math.random() * 70}%` 
          }}
        />
      ))}
    </motion.button>
  );
}

const STUDIO_INTRO_STEPS = [
  "Welcome.",
  "You didn't come here by accident.",
  "Every meaningful system begins with a conversation.",
  "Let's build something that matters."
];

function StudioExperience({ onClose, initialView }: { onClose: () => void, initialView: any }) {
  const [view, setView] = useState(initialView);
  const [introIndex, setIntroIndex] = useState(0);

  useEffect(() => {
    if (view === "intro") {
      const timer = setInterval(() => {
        setIntroIndex((prev) => {
          if (prev < STUDIO_INTRO_STEPS.length - 1) return prev + 1;
          clearInterval(timer);
          setTimeout(() => setView("hub"), 1200);
          return prev;
        });
      }, 2200);
      return () => clearInterval(timer);
    }
  }, [view]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-[#050505] overflow-hidden flex flex-col items-center justify-center p-6 md:p-12"
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.01]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.06),transparent_75%)]" />

      <button 
        onClick={onClose} 
        className="absolute top-10 right-10 z-[1001] text-[9px] font-bold tracking-[0.5em] text-white/20 hover:text-white uppercase transition-colors flex items-center gap-3"
      >
        <X className="w-4 h-4" /> Exit Studio
      </button>

      <AnimatePresence mode="wait">
        {view === "intro" && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            className="text-center max-w-2xl px-6"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={introIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(15px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl md:text-4xl font-headline font-light text-white tracking-tight italic"
              >
                {STUDIO_INTRO_STEPS[introIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        )}

        {view === "hub" && (
          <motion.div 
            key="hub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center gap-16 md:gap-24 w-full"
          >
            <div className="space-y-8 text-center">
               <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">Studio Hub</p>
            </div>
            <div className="flex flex-col items-center gap-12 md:gap-16">
              <HubAction label="BUILD SOMETHING" onClick={() => setView("build")} />
              <HubAction label="EXPLORE AXORA" onClick={() => setView("explore")} />
              <HubAction label="SCHEDULE DISCUSSION" onClick={() => setView("scheduling")} highlight />
            </div>
          </motion.div>
        )}

        {view === "build" && (
          <motion.div 
            key="build"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center gap-16 w-full max-w-4xl"
          >
            <button onClick={() => setView("hub")} className="text-[9px] font-bold tracking-[0.5em] text-white/30 hover:text-white uppercase mb-4">← Back to Hub</button>
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-4xl md:text-7xl font-headline font-black text-white italic uppercase tracking-tighter">Build Systems.</h3>
              <p className="text-white/40 text-lg font-light">Select an institutional context for the dialogue.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {["Product Strategy", "MVP Design", "Digital Ecosystems", "Startup Systems", "Technical Architecture"].map((opt) => (
                <SubOption key={opt} label={opt} onClick={() => setView("scheduling")} />
              ))}
            </div>
          </motion.div>
        )}

        {view === "explore" && (
          <motion.div 
            key="explore"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-16 w-full max-w-2xl text-center"
          >
            <button onClick={() => setView("hub")} className="text-[9px] font-bold tracking-[0.5em] text-white/30 hover:text-white uppercase">← Back to Hub</button>
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">Philosophy</p>
                <h3 className="text-5xl font-headline font-black text-white italic uppercase tracking-tight">The Journal</h3>
              </div>
              <div className="space-y-8 text-xl md:text-2xl text-white/60 font-light leading-relaxed">
                <p>Axora was founded on the belief that technology should outlive the hype cycles of its own creation.</p>
                <p>We build systems focused on <span className="text-white">long-term value</span>, architecting experiences that simplify complexity.</p>
              </div>
              <div className="pt-8 grid grid-cols-1 gap-4">
                {["Why Axora exists", "Building products", "Systems thinking", "Long-term value", "Future vision"].map((topic) => (
                   <span key={topic} className="text-sm font-bold tracking-[0.4em] text-primary/40 uppercase">{topic}</span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {view === "scheduling" && (
          <motion.div 
            key="scheduling"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-12 w-full h-full max-w-5xl"
          >
            <button onClick={() => setView("hub")} className="text-[9px] font-bold tracking-[0.5em] text-white/30 hover:text-white uppercase mt-12">← Back to Hub</button>
            <div className="text-center space-y-4">
              <h3 className="text-4xl md:text-6xl font-headline font-black text-white italic uppercase tracking-tight">Schedule Discussion</h3>
              <p className="text-white/40 font-light">Confirming institutional availability.</p>
            </div>
            <div className="flex-1 w-full glass rounded-[3rem] border-white/5 flex items-center justify-center relative overflow-hidden">
               <div className="text-center space-y-6">
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center mx-auto border-primary/20">
                    <Calendar className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                  <p className="text-[10px] font-bold tracking-[0.6em] text-white/20 uppercase">Preparing Booking Interface</p>
                  <p className="text-sm text-white/40 italic">Integration sequence initialized.</p>
               </div>
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.02),transparent_70%)]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function HubAction({ label, onClick, highlight = false }: { label: string, onClick: () => void, highlight?: boolean }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, x: 10 }}
      onClick={onClick}
      className={cn(
        "group relative py-4 text-4xl md:text-7xl font-headline font-black tracking-tighter uppercase italic transition-all duration-700",
        highlight ? "text-primary" : "text-white/20 hover:text-white"
      )}
    >
      {label}
      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-current transition-all duration-700 group-hover:w-full opacity-30" />
    </motion.button>
  );
}

function SubOption({ label, onClick }: { label: string, onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, x: 5 }}
      onClick={onClick}
      className="group flex items-center justify-between p-10 rounded-[2.5rem] glass border-white/5 text-left hover:border-primary/20 hover:bg-white/[0.02] transition-all duration-700"
    >
      <span className="text-xl md:text-2xl font-headline font-bold text-white/80 group-hover:text-white transition-colors">{label}</span>
      <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-primary transition-all duration-500" />
    </motion.button>
  );
}
