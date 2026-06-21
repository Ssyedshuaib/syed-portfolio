
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

/**
 * THE FINAL SIGNATURE
 * A calm, intentional, and premium conclusion to the digital ecosystem.
 * Focuses on institutional restraint and professional authority.
 */

export function Footer() {
  return (
    <footer className="relative bg-background pt-64 pb-20 px-6 overflow-hidden" role="contentinfo">
      {/* 00. GIANT BACKGROUND SIGNATURE - LUXURY BRANDING TEXTURE */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-12%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none',
          fontSize: 'min(42vw, 700px)',
          fontWeight: 900,
          letterSpacing: '-0.08em',
          color: 'rgba(255, 255, 255, 0.012)',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{ 
            scale: [1, 1.015, 1],
          }}
          transition={{ 
            opacity: { duration: 2 },
            scale: { duration: 30, repeat: Infinity, ease: "easeInOut" }
          }}
          className="block"
        >
          SYED
        </motion.span>
      </div>

      {/* FOOTER CONTENT - PRECISION CENTERED COMPOSITION */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* 01. THE FOUNDER SIGNATURE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-32"
        >
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-headline font-bold text-white tracking-tight">SYED SHUAIB</h3>
              <div className="flex flex-col gap-3 text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">
                <span>Founder</span>
                <span>Product Builder</span>
                <span>System Architect</span>
              </div>
            </div>
            <div className="h-px w-10 bg-white/10 mx-auto" />
          </div>
        </motion.div>

        {/* 02. IDENTITY & PHILOSOPHY */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="text-center space-y-4 mb-20"
        >
          <div className="text-xl font-light tracking-[0.5em] text-[#EAE0C8] uppercase">
            AXORA
          </div>
          <p className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase italic">
            "Building systems that outlast trends."
          </p>
        </motion.div>

        {/* 03. QUIET INFO */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="text-[10px] font-bold tracking-[0.6em] text-white/30 uppercase mb-24"
        >
          Bangalore, India
        </motion.div>

        {/* 04. EDITORIAL LINKS - REFINED DIALOGUE PATHS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-48">
          <EditorialLink label="Email" href="mailto:syedshuaib2429@gmail.com" />
          <EditorialLink label="LinkedIn" href="https://www.linkedin.com/in/syedshuaib485/" />
          <EditorialLink label="Schedule Discussion" href="https://calendly.com/your-link" isPrimary />
        </div>

        {/* 05. FINAL SEAL */}
        <div className="pt-20 border-t border-white/5 w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-8 opacity-20">
          <p className="text-[9px] font-bold tracking-[0.4em] text-white uppercase">
            &copy; {new Date().getFullYear()} AXORA
          </p>
          <div className="flex items-center gap-4">
            <div className="w-1 h-1 rounded-full bg-primary/40" />
            <p className="text-[9px] font-bold tracking-[0.5em] text-white uppercase italic">
              Designed With Intention.
            </p>
          </div>
        </div>
      </div>

      {/* Atmospheric Horizon Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.02),transparent_70%)] pointer-events-none" />
    </footer>
  );
}

function EditorialLink({ label, href, isPrimary = false }: { label: string; href: string; isPrimary?: boolean }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative py-2 text-[10px] font-bold tracking-[0.5em] uppercase transition-all duration-500 flex items-center gap-4 cursor-pointer",
        isPrimary ? "text-primary drop-shadow-[0_0_12px_rgba(234,224,200,0.2)]" : "text-white/40 hover:text-white"
      )}
    >
      <span className="relative">
        {label}
        <span className={cn(
          "absolute -bottom-1 left-0 h-[1px] bg-current transition-all duration-700",
          isPrimary ? "w-6 group-hover:w-full opacity-40 group-hover:opacity-100" : "w-0 group-hover:w-full"
        )} />
      </span>
      <ArrowUpRight className={cn(
        "w-3 h-3 transition-all duration-500",
        isPrimary ? "opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" : "opacity-0 -translate-x-2 group-hover:opacity-40 group-hover:translate-x-0"
      )} />
    </motion.a>
  );
}
