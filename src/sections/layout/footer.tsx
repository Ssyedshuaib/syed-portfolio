"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-background pt-48 md:pt-80 pb-20 px-6 overflow-hidden" role="contentinfo">
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none',
          fontSize: 'min(42vw, 700px)',
          fontWeight: 900,
          letterSpacing: '-0.08em',
          color: 'rgba(234, 224, 200, 0.012)',
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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-4xl font-headline font-bold text-[#EAE0C8] tracking-tight">SYED SHUAIB</h3>
              <div className="flex flex-col gap-2 md:gap-3 text-[9px] md:text-[10px] font-bold tracking-[0.6em] md:tracking-[0.8em] text-[#EAE0C8]/30 uppercase">
                <span>Founder</span>
                <span>Product Builder</span>
                <span>System Architect</span>
              </div>
            </div>
            <div className="h-px w-8 md:w-10 bg-[#EAE0C8]/10 mx-auto" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="text-center space-y-4 md:space-y-5 mb-12 md:mb-16"
        >
          <div className="text-lg md:text-xl font-light tracking-[0.4em] md:tracking-[0.5em] text-[#EAE0C8] uppercase">
            AXORA
          </div>
          <p className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-[#EAE0C8]/20 uppercase italic px-4">
            "BUILDING SYSTEMS THAT OUTLAST TRENDS."
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="text-[9px] md:text-[10px] font-bold tracking-[0.5em] md:tracking-[0.6em] text-[#EAE0C8]/30 uppercase mb-16 md:mb-20"
        >
          Bangalore, India
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 mb-32 md:mb-48">
          <EditorialLink label="Email" href="mailto:syedshuaib2429@gmail.com" />
          <EditorialLink label="LinkedIn" href="https://www.linkedin.com/in/syedshuaib485/" />
          <EditorialLink label="Schedule Discussion" href="#" isPrimary />
        </div>

        <div className="pt-16 border-t border-[#EAE0C8]/5 w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 opacity-20">
          <p className="text-[8px] md:text-[9px] font-bold tracking-[0.4em] text-[#EAE0C8] uppercase">
            &copy; {new Date().getFullYear()} AXORA
          </p>
          <div className="flex items-center gap-4">
            <div className="w-1 h-1 rounded-full bg-[#EAE0C8]/40" />
            <p className="text-[8px] md:text-[9px] font-bold tracking-[0.4em] text-[#EAE0C8] uppercase italic">
              Designed With Intention.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.02),transparent_70%)] pointer-events-none" />
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
        "group relative py-2 text-[9px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase transition-all duration-500 flex items-center gap-4 cursor-pointer",
        isPrimary ? "text-[#EAE0C8] drop-shadow-[0_0_12px_rgba(234,224,200,0.15)]" : "text-[#EAE0C8]/40 hover:text-[#EAE0C8]"
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