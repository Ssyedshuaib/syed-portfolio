
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { StudioExperience } from "@/components/portfolio/StudioExperience";

interface FooterProps {
  onStudioStateChange?: (isOpen: boolean) => void;
}

export function Footer({ onStudioStateChange }: FooterProps) {
  const [isStudioOpen, setIsStudioOpen] = useState(false);

  const handleOpenStudio = () => {
    setIsStudioOpen(true);
    onStudioStateChange?.(true);
  };

  const handleCloseStudio = () => {
    setIsStudioOpen(false);
    onStudioStateChange?.(false);
  };

  return (
    <footer className="relative bg-background pt-96 pb-24 px-6 overflow-hidden" role="contentinfo">
      {/* GIANT BACKGROUND SYED - RECALIBRATED SIZE & ALIGNMENT */}
      <div 
        className="footer-background-word"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'clamp(250px, 32vw, 600px)',
          fontWeight: 900,
          letterSpacing: '-0.08em',
          color: 'rgba(255, 255, 255, 0.02)',
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        <motion.span
          animate={{ scale: [1, 1.015, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        >
          SYED
        </motion.span>
      </div>

      {/* FOOTER CONTENT WRAPPER */}
      <div className="footer-content relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* THE STUDIO PORTAL */}
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
                <span>Founder • Product Builder • System Architect</span>
              </div>
            </div>
            <div className="h-px w-12 bg-white/5 mx-auto" />
          </motion.div>

          <div className="text-lg md:text-xl font-light tracking-[0.4em] text-[#EAE0C8] uppercase opacity-50">
            AXORA
          </div>

          <div className="text-[11px] font-bold tracking-[0.6em] text-white uppercase opacity-30">
            Bangalore, India
          </div>

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

      {/* ENTER THE STUDIO EXPERIENCE */}
      <AnimatePresence>
        {isStudioOpen && (
          <StudioExperience onClose={handleCloseStudio} />
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.03),transparent_70%)] pointer-events-none" />
    </footer>
  );
}

function EditorialLink({ label, href, isPrimary = false, onClick }: { label: string; href: string; isPrimary?: boolean; onClick?: () => void }) {
  return (
    <a
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
    </a>
  );
}

function OrbitalPortal({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-64 h-64 flex items-center justify-center cursor-pointer"
    >
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border border-white/[0.03] rounded-full"
      />
      <div className="w-40 h-44 rounded-full glass border-white/5 flex items-center justify-center relative overflow-hidden transition-all duration-1000 group-hover:border-primary/20 group-hover:shadow-[0_0_80px_rgba(234,224,200,0.08)]">
        <span className="relative z-10 text-[10px] font-bold tracking-[0.5em] text-white/40 group-hover:text-primary transition-colors text-center px-4 leading-relaxed uppercase">
          ENTER THE <br />STUDIO
        </span>
      </div>
    </button>
  );
}
