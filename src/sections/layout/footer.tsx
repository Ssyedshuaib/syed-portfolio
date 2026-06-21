"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Mail, Linkedin, Calendar } from "lucide-react";

/**
 * THE FINAL CHAPTER
 * A premium centered closing statement with editorial typography and glassmorphic actions.
 * Focuses on institutional weight and cinematic completion.
 */

const PROJECTS = ["Axora", "Reverie", "DevNexus"];

export function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-64 pb-20 px-6 overflow-hidden" role="contentinfo">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.04),transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Editorial Closing Statement */}
        <div className="space-y-10 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h2 className="text-5xl md:text-8xl lg:text-[clamp(3.5rem,8vw,9.5rem)] font-headline font-black tracking-tighter leading-[0.85] uppercase italic text-white">
              Building Products.
            </h2>
            <h2 className="text-5xl md:text-8xl lg:text-[clamp(3.5rem,8vw,9.5rem)] font-headline font-black tracking-tighter leading-[0.85] uppercase text-primary/20">
              Designing Systems.
            </h2>
            <h2 className="text-5xl md:text-8xl lg:text-[clamp(3.5rem,8vw,9.5rem)] font-headline font-black tracking-tighter leading-[0.85] uppercase italic text-white">
              Creating Ecosystems.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="text-lg md:text-xl text-[#EAE0C8] font-light italic max-w-2xl mx-auto"
          >
            "A philosophy focused on long-term value, clarity, and meaningful digital experiences."
          </motion.p>
        </div>

        {/* Identity & Divider */}
        <div className="w-full max-w-4xl space-y-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="text-2xl font-headline font-bold text-white tracking-tight">SYED SHUAIB</p>
            <p className="text-[10px] font-bold tracking-[0.5em] text-primary/40 uppercase">
              Founder • Product Builder • System Thinker
            </p>
          </motion.div>

          <div className="relative h-px w-full bg-white/5 overflow-hidden">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            />
          </div>
        </div>

        {/* Premium Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-48">
          <FooterAction 
            label="EMAIL" 
            href="mailto:syedshuaib2429@gmail.com" 
            icon={<Mail className="w-4 h-4" />}
          />
          <FooterAction 
            label="LINKEDIN" 
            href="https://www.linkedin.com/in/syedshuaib485/" 
            icon={<Linkedin className="w-4 h-4" />}
          />
          <FooterAction 
            label="SCHEDULE" 
            href="#" 
            primary
            icon={<Calendar className="w-4 h-4" />}
          />
        </div>

        {/* Institutional Information Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 w-full border-t border-white/5 pt-16 pb-20">
          <div className="space-y-4">
            <p className="text-[9px] font-bold tracking-[0.5em] text-white/20 uppercase">Projects</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {PROJECTS.map((project) => (
                <span key={project} className="text-sm text-primary/60 font-light tracking-widest uppercase hover:text-white transition-colors cursor-default">
                  {project}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[9px] font-bold tracking-[0.5em] text-white/20 uppercase">Location</p>
            <p className="text-sm text-primary/60 font-light tracking-widest uppercase">
              Bangalore, India
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[9px] font-bold tracking-[0.5em] text-white/20 uppercase">Current Focus</p>
            <p className="text-sm text-primary/60 font-light tracking-widest uppercase">
              Building Digital Ecosystems
            </p>
          </div>
        </div>

        {/* Final Line */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full border-t border-white/5 pt-12">
          <p className="text-[10px] font-bold tracking-[0.4em] text-white/10 uppercase">
            &copy; {new Date().getFullYear()} SYED SHUAIB
          </p>
          <div className="flex items-center gap-4">
            <div className="w-1 h-1 rounded-full bg-primary/20" />
            <p className="text-[10px] font-bold tracking-[0.5em] text-white/10 uppercase italic">
              Designed With Intention.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterAction({ label, href, icon, primary = false }: { label: string; href: string; icon: React.ReactNode; primary?: boolean }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      className={cn(
        "group flex items-center justify-center gap-4 py-4 px-8 rounded-2xl border transition-all duration-500",
        primary 
          ? "bg-primary/[0.08] border-primary/20 hover:bg-primary/[0.12] hover:border-primary/40 shadow-[0_10px_40px_-10px_rgba(234,224,200,0.1)]" 
          : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
      )}
    >
      <span className={cn(
        "text-primary/40 transition-colors duration-500",
        primary ? "text-primary/60 group-hover:text-primary" : "group-hover:text-primary/80"
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
    </motion.a>
  );
}
