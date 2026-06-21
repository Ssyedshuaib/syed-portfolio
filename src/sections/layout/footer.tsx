
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Sparkles, Calendar, Mail, Linkedin, ArrowLeft } from "lucide-react";

/**
 * THE FOUNDER SIGNATURE & STUDIO EXPERIENCE
 * Re-engineered for a cinematic, typography-led dialogue hub.
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
          whileInView={{ opacity: 0.035 }}
          viewport={{ once: true }}
          animate={{ 
            scale: [1, 1.015, 1],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="text-[80vw] font-headline font-black text-white tracking-tighter leading-none text-center whitespace-nowrap"
        >
          SYED
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* THE STUDIO PORTAL (The Artifact) */}
        <div className="mb-48">
          <OrbitalPortal onClick={handleOpenStudio} />
        </div>

        {/* THE SIGNATURE BLOCK */}
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

          {/* EDITORIAL LINKS */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 pt-12">
            <EditorialLink label="Email" href="mailto:syedshuaib2429@gmail.com" />
            <EditorialLink label="LinkedIn" href="https://www.linkedin.com/in/syedshuaib485/" />
            <EditorialLink label="Schedule Discussion" href="#" isPrimary onClick={handleOpenStudio} />
          </div>

          {/* SIGNATURE STATEMENT */}
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
          <StudioExperience 
            onClose={handleCloseStudio} 
            activeView={activeView}
            setActiveHubView={setActiveHubView}
          />
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.03),transparent_70%)] pointer-events-none" />
    </footer>
  );
}

function EditorialLink({ label, href, isPrimary = false, onClick }: { label: string; href: string; isPrimary?: boolean; onClick?: () => void }) {
  return (
    <motion.a
      href={onClick ? "#" : href}
      target={onClick ? undefined : "_blank"}
      rel={onClick ? undefined : "noopener noreferrer"}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "group relative py-2 text-xs font-bold tracking-[0.5em] uppercase transition-colors duration-500 flex items-center gap-3 cursor-pointer",
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
    </motion.button>
  );
}

const STUDIO_INTRO_STEPS = [
  "Welcome.",
  "You didn't come here by accident.",
  "Every meaningful system begins with a conversation.",
  "Let's build something that matters."
];

function StudioExperience({ 
  onClose, 
  activeView, 
  setActiveHubView 
}: { 
  onClose: () => void;
  activeView: "intro" | "hub" | "build" | "explore" | "scheduling";
  setActiveHubView: (view: "intro" | "hub" | "build" | "explore" | "scheduling") => void;
}) {
  const [introIndex, setIntroIndex] = useState(0);

  useEffect(() => {
    if (activeView === "intro") {
      const sequence = async () => {
        for (let i = 0; i < STUDIO_INTRO_STEPS.length; i++) {
          setIntroIndex(i);
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
        setActiveHubView("hub");
      };
      sequence();
    }
  }, [activeView, setActiveHubView]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-[#050505] overflow-hidden flex flex-col items-center justify-center p-6 md:p-12"
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.01]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.06),transparent_75%)]" />

      {/* Subtle Return Path */}
      <button 
        onClick={onClose} 
        className="absolute top-12 left-12 z-[1001] text-[9px] font-bold tracking-[0.5em] text-white/20 hover:text-white uppercase transition-colors flex items-center gap-4 group"
      >
        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> 
        Return To Website
      </button>

      <AnimatePresence mode="wait">
        {activeView === "intro" && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(40px)" }}
            className="text-center max-w-2xl px-6"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={introIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(15px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl md:text-5xl font-headline font-light text-white tracking-tight italic"
              >
                {STUDIO_INTRO_STEPS[introIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        )}

        {activeView === "hub" && (
          <motion.div 
            key="hub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center gap-16 md:gap-32 w-full"
          >
            <div className="flex flex-col items-center gap-12 md:gap-20">
              <HubAction label="BUILD SOMETHING" onClick={() => setActiveHubView("build")} />
              <HubAction label="EXPLORE AXORA" onClick={() => setActiveHubView("explore")} />
              <HubAction label="SCHEDULE DISCUSSION" onClick={() => setActiveHubView("scheduling")} highlight />
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ delay: 1 }}
              className="text-[9px] font-bold tracking-[1em] text-white uppercase mt-12"
            >
              The Studio is Open
            </motion.div>
          </motion.div>
        )}

        {activeView === "build" && (
          <motion.div 
            key="build"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center gap-16 w-full max-w-5xl"
          >
            <button onClick={() => setActiveHubView("hub")} className="text-[9px] font-bold tracking-[0.6em] text-white/30 hover:text-white uppercase">← Back to Hub</button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 text-left w-full px-12">
              {[
                { title: "Product Strategy", desc: "Long-term architecture and market alignment." },
                { title: "MVP Design", desc: "Rapid prototyping and core feature validation." },
                { title: "Startup Systems", desc: "Building foundations for scale and operations." },
                { title: "Digital Ecosystems", desc: "Interconnected product layers and networks." },
                { title: "Technical Architecture", desc: "High-performance systems and full-stack execution." }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveHubView("scheduling")}
                  className="group cursor-pointer space-y-4"
                >
                  <h4 className="text-3xl md:text-5xl font-headline font-black text-white italic group-hover:text-primary transition-colors tracking-tighter uppercase">{item.title}</h4>
                  <p className="text-[#EAE0C8]/40 font-light text-lg italic tracking-wide group-hover:text-white/60 transition-colors">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeView === "explore" && (
          <motion.div 
            key="explore"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-16 w-full max-w-4xl text-center px-12"
          >
            <button onClick={() => setActiveHubView("hub")} className="text-[9px] font-bold tracking-[0.6em] text-white/30 hover:text-white uppercase">← Back to Hub</button>
            <div className="space-y-16 w-full">
              <h3 className="text-4xl md:text-7xl font-headline font-black text-white italic uppercase tracking-tighter">The Journal</h3>
              <div className="flex flex-col gap-12 w-full">
                {[
                  "Why Axora Exists",
                  "Founder Philosophy",
                  "Systems Thinking",
                  "Building For Longevity",
                  "Future Vision"
                ].map((topic, i) => (
                  <motion.div 
                    key={topic}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="group cursor-pointer py-6 border-b border-white/5 hover:border-primary/20 transition-all text-center"
                  >
                    <span className="text-2xl md:text-4xl font-headline font-light text-white/40 group-hover:text-white italic transition-all">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeView === "scheduling" && (
          <motion.div 
            key="scheduling"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center w-full h-full max-w-6xl py-20"
          >
            <button onClick={() => setActiveHubView("hub")} className="text-[9px] font-bold tracking-[0.6em] text-white/30 hover:text-white uppercase mb-16">← Back to Hub</button>
            <div className="text-center space-y-6 mb-20">
              <h3 className="text-4xl md:text-8xl font-headline font-black text-white italic uppercase tracking-tighter">Schedule Session</h3>
              <p className="text-white/40 text-xl font-light italic">Opening institutional booking sequence...</p>
            </div>
            
            <div className="flex-1 w-full bg-white/[0.02] border border-white/5 rounded-[4rem] flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
               <div className="space-y-8 relative z-10">
                  <div className="w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center mx-auto mb-12">
                    <Calendar className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                  <p className="text-white font-headline font-bold text-3xl uppercase tracking-tighter">Booking Interface Ready</p>
                  <p className="text-white/30 max-w-md mx-auto italic">This area is architected to embed your native scheduling environment. Choose a path below to begin.</p>
                  <div className="flex flex-wrap justify-center gap-4 pt-8">
                     {["Discovery Call", "Product Deep-Dive", "Strategic Partnership"].map((t) => (
                       <button key={t} className="px-8 py-3 rounded-full border border-white/10 hover:border-primary/40 hover:text-primary transition-all text-[10px] font-bold tracking-widest uppercase">
                         {t}
                       </button>
                     ))}
                  </div>
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
      whileHover={{ scale: 1.05, x: 15 }}
      onClick={onClick}
      className={cn(
        "group relative py-2 text-4xl md:text-8xl font-headline font-black tracking-tighter uppercase italic transition-all duration-700",
        highlight ? "text-primary" : "text-white/20 hover:text-white"
      )}
    >
      {label}
      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-current transition-all duration-700 group-hover:w-full opacity-30" />
    </motion.button>
  );
}

