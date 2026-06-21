
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Mail, Linkedin, Calendar, Sparkles } from "lucide-react";

/**
 * THE FINAL CHAPTER
 * A luxury footer experience designed as a private studio entrance.
 * Features: Magnetic CTAs, Institutional Transitions, and Editorial Hierarchy.
 */

export function Footer() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAction = (href: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      window.open(href, "_blank");
      setIsTransitioning(false);
    }, 1200);
  };

  if (!mounted) return null;

  return (
    <footer className="relative bg-[#050505] pt-64 pb-20 px-6 overflow-hidden border-t border-white/5" role="contentinfo">
      {/* Cinematic Ambient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.06),transparent_75%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.03),transparent_70%)]" />
        <div className="absolute inset-0 blueprint-grid opacity-[0.015]" />
        <div className="absolute inset-0 grain-overlay opacity-[0.02] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Section 1: The Studio Declaration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10 mb-32"
        >
          <div className="space-y-6">
            <h2 className="text-6xl md:text-8xl lg:text-[clamp(4rem,10vw,11rem)] font-headline font-black tracking-tighter leading-[0.85] uppercase italic text-white select-none">
              The Studio <br />
              <span className="not-italic opacity-80">Is Open.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#EAE0C8]/40">
              {["For builders.", "Founders.", "Dreamers.", "System thinkers."].map((text, i) => (
                <motion.span 
                  key={text}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  className="text-sm md:text-lg font-light tracking-widest uppercase italic"
                >
                  {text}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section 2: Founder Signature Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="space-y-4 mb-24"
        >
          <div className="h-px w-12 bg-primary/20 mx-auto mb-8" />
          <h3 className="text-3xl md:text-4xl font-headline font-bold text-white tracking-tight">SYED SHUAIB</h3>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[10px] font-bold tracking-[0.6em] text-primary/40 uppercase">Founder</p>
            <p className="text-[10px] font-bold tracking-[0.6em] text-primary/40 uppercase">Product Builder</p>
            <p className="text-[10px] font-bold tracking-[0.6em] text-primary/40 uppercase">System Architect</p>
          </div>
        </motion.div>

        {/* Section 3: Primary Luxury CTA */}
        <div className="mb-48">
          <MagneticButton onClick={() => handleAction("mailto:syedshuaib2429@gmail.com")}>
            START A CONVERSATION
          </MagneticButton>
        </div>

        {/* Section 4: Luxury Shimmer Divider */}
        <div className="w-full max-w-4xl relative h-px mb-24 overflow-hidden">
          <div className="absolute inset-0 bg-white/5" />
          <motion.div 
            animate={{ 
              x: ["-100%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          />
        </div>

        {/* Section 5: Action Pills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-48">
          <ActionPill 
            label="EMAIL" 
            onClick={() => handleAction("mailto:syedshuaib2429@gmail.com")} 
            icon={<Mail className="w-4 h-4" />}
          />
          <ActionPill 
            label="LINKEDIN" 
            onClick={() => handleAction("https://www.linkedin.com/in/syedshuaib485/")} 
            icon={<Linkedin className="w-4 h-4" />}
          />
          <ActionPill 
            label="SCHEDULE DISCUSSION" 
            primary
            onClick={() => handleAction("#")} 
            icon={<Calendar className="w-4 h-4" />}
          />
        </div>

        {/* Section 6: Minimal Information Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 w-full border-t border-white/5 pt-16 pb-24">
          <div className="space-y-4">
            <p className="text-[9px] font-bold tracking-[0.6em] text-white/20 uppercase">Projects</p>
            <div className="flex flex-col gap-1">
              {["Axora", "Reverie", "DevNexus"].map((p) => (
                <span key={p} className="text-sm text-primary/60 font-light tracking-widest uppercase">{p}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[9px] font-bold tracking-[0.6em] text-white/20 uppercase">Location</p>
            <p className="text-sm text-primary/60 font-light tracking-widest uppercase">Bangalore, India</p>
          </div>

          <div className="space-y-4">
            <p className="text-[9px] font-bold tracking-[0.6em] text-white/20 uppercase">Current Focus</p>
            <p className="text-sm text-primary/60 font-light tracking-widest uppercase">Building Digital Ecosystems</p>
          </div>
        </div>

        {/* Section 7: Final Signature */}
        <div className="flex flex-col items-center gap-8 w-full border-t border-white/5 pt-12">
          <p className="text-[10px] font-bold tracking-[0.4em] text-white/10 uppercase">
            &copy; {new Date().getFullYear()} SYED SHUAIB
          </p>
          <p className="text-[10px] font-bold tracking-[0.5em] text-white/10 uppercase italic">
            Designed With Intention.
          </p>
        </div>

      </div>

      {/* Institutional Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#050505]/95 backdrop-blur-3xl flex items-center justify-center"
          >
            <div className="space-y-8 text-center">
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 rounded-full border border-primary/20 mx-auto flex items-center justify-center"
              >
                <Sparkles className="w-8 h-8 text-primary/40" />
              </motion.div>
              <p className="text-2xl font-headline font-light text-white tracking-widest uppercase italic">
                Preparing The Conversation...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

function MagneticButton({ children, onClick }: { children: string; onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) * 0.35);
    y.set((event.clientY - centerY) * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="group relative px-16 py-8 rounded-full glass border-white/10 overflow-hidden transition-all duration-700"
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <span className="relative z-10 text-xs font-bold tracking-[0.8em] text-white group-hover:text-primary transition-colors duration-700">
        {children}
      </span>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary/40 transition-all duration-700 group-hover:w-1/2" />
    </motion.button>
  );
}

function ActionPill({ label, onClick, icon, primary = false }: { label: string; onClick: () => void; icon: React.ReactNode; primary?: boolean }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -4 }}
      className={cn(
        "group flex items-center justify-center gap-4 py-4 px-8 rounded-2xl border transition-all duration-500",
        primary 
          ? "bg-primary/[0.08] border-primary/20 hover:bg-primary/[0.12] hover:border-primary/40 shadow-[0_10px_40px_-10px_rgba(234,224,200,0.1)]" 
          : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
      )}
    >
      <span className={cn(
        "transition-colors duration-500",
        primary ? "text-primary/60 group-hover:text-primary" : "text-primary/40 group-hover:text-primary/80"
      )}>
        {icon}
      </span>
      <span className={cn(
        "text-[10px] font-bold tracking-[0.4em] transition-all duration-500",
        primary ? "text-white" : "text-white/40 group-hover:text-white"
      )}>
        {label}
      </span>
      <ArrowUpRight className={cn(
        "w-3 h-3 transition-all duration-500",
        primary ? "text-primary/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" : "text-white/10 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      )} />
    </motion.button>
  );
}
