"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-[#0F1317] pt-64 pb-24 px-6 overflow-hidden border-t border-white/5" role="contentinfo">
      {/* SECTION 5: Massive Signature Watermark */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.03, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[25vw] font-headline font-black text-white tracking-tighter leading-none text-center"
          aria-hidden="true"
        >
          AXORA
        </motion.h2>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-16">
          
          {/* Credits Area */}
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-[9px] font-bold tracking-[0.8em] text-[#536878] uppercase">Signature</p>
              <div className="space-y-2">
                <p className="text-[11px] font-bold tracking-[0.3em] text-primary/60 uppercase">Designed & Built By</p>
                <p className="text-3xl font-headline font-bold text-white tracking-tight">Syed Sharfuddin Shuaib</p>
                <p className="text-lg text-[#EAE0C8]/30 font-light italic">Founder, Axora Venture Studio</p>
              </div>
            </div>

            <div className="h-px w-24 bg-primary/10" />
            
            <p className="text-[10px] text-[#536878] font-bold uppercase tracking-[0.4em]">
              &copy; {new Date().getFullYear()} AXORA. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Institutional Note */}
          <div className="text-right space-y-6 max-w-sm">
            <p className="text-[10px] text-[#EAE0C8]/40 font-light leading-relaxed uppercase tracking-[0.2em]">
              Building digital ecosystems through technology, intentional design, and long-term systems thinking.
            </p>
            <div className="flex justify-end gap-8 text-[9px] font-bold tracking-[0.5em] text-[#536878] uppercase">
              <Link href="/privacy" className="hover:text-white transition-colors cursor-pointer" aria-label="View Privacy Policy">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors cursor-pointer" aria-label="View Terms of Service">Terms</Link>
              <span className="hover:text-white transition-colors cursor-default" aria-label="Legal Information">Legal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Architectural Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-primary/20 to-transparent" aria-hidden="true" />
    </footer>
  );
}