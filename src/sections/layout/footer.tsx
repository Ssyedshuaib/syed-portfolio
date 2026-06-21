
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Mail, Linkedin, Calendar, Sparkles, X } from "lucide-react";

/**
 * THE FOUNDER SIGNATURE
 * A minimalist, editorial finale designed as a personal signature.
 * Features: Giant background watermark, Orbital Studio Portal, and Luxury Text Links.
 */

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="relative bg-background pt-96 pb-24 px-6 overflow-hidden" role="contentinfo">
      {/* SECTION 1: THE GIANT WATERMARK (Artwork Layer) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.02, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[35vw] font-headline font-black text-white tracking-tighter leading-none text-center"
        >
          SYED
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* SECTION 2: THE ORBITAL PORTAL (Special Interaction) */}
        <div className="mb-48">
          <OrbitalPortal onClick={() => setIsModalOpen(true)} />
        </div>

        {/* SECTION 3: THE SIGNATURE STACK */}
        <div className="space-y-32 w-full">
          {/* Professional Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="space-y-4"
          >
            <p className="text-[10px] font-bold tracking-[1em] text-primary/40 uppercase">Founder.</p>
            <p className="text-[10px] font-bold tracking-[1em] text-primary/40 uppercase">Product Builder.</p>
            <p className="text-[10px] font-bold tracking-[1em] text-primary/40 uppercase">System Thinker.</p>
          </motion.div>

          {/* Project Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-lg md:text-xl font-light tracking-[0.4em] text-[#EAE0C8] uppercase italic"
          >
            Axora • Reverie • DevNexus
          </motion.div>

          {/* Location & Status */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.8 }}
            className="text-[11px] font-bold tracking-[0.6em] text-white uppercase"
          >
            Bangalore, India
          </motion.div>

          {/* SECTION 4: THE LUXURY TEXT LINKS */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-12">
            <SignatureLink label="Email" href="mailto:syedshuaib2429@gmail.com" />
            <SignatureLink label="LinkedIn" href="https://www.linkedin.com/in/syedshuaib485/" />
            <SignatureLink label="Schedule Discussion" href="#" isPrimary />
          </div>

          {/* SECTION 5: THE FINAL SEAL */}
          <div className="pt-32 space-y-8 border-t border-white/5 w-full max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 opacity-20">
              <p className="text-[9px] font-bold tracking-[0.4em] text-white uppercase">
                &copy; {new Date().getFullYear()} SYED SHUAIB
              </p>
              <p className="text-[9px] font-bold tracking-[0.5em] text-white uppercase italic">
                Designed With Intention.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LUXURY MODAL EXPERIENCE */}
      <AnimatePresence>
        {isModalOpen && (
          <StudioModal onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>

      {/* Final Grounding Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.03),transparent_70%)] pointer-events-none" />
    </footer>
  );
}

function SignatureLink({ label, href, isPrimary = false }: { label: string; href: string; isPrimary?: boolean }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative py-2 text-sm font-bold tracking-[0.4em] uppercase transition-colors duration-500",
        isPrimary ? "text-primary" : "text-white/40 hover:text-white"
      )}
    >
      {label}
      <span className="absolute bottom-0 left-1/2 w-0 h-px bg-primary/40 -translate-x-1/2 transition-all duration-700 group-hover:w-full" />
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
    x.set((event.clientX - centerX) * 0.25);
    y.set((event.clientY - centerY) * 0.25);
  }

  return (
    <motion.button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: springX, y: springY }}
      className="group relative w-56 h-56 flex items-center justify-center cursor-pointer"
    >
      {/* Outer Rotating Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border border-white/5 rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 border border-primary/10 rounded-full border-dashed"
      />
      
      {/* The Core */}
      <div className="w-32 h-32 rounded-full glass border-white/10 flex items-center justify-center relative overflow-hidden transition-all duration-700 group-hover:border-primary/30 group-hover:shadow-[0_0_50px_rgba(234,224,200,0.1)]">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="relative z-10 text-[9px] font-bold tracking-[0.4em] text-white group-hover:text-primary transition-colors text-center px-4 leading-relaxed">
          ENTER THE <br />STUDIO
        </span>
        
        {/* Soft Breathing Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-primary/5 blur-xl rounded-full"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -10, 0],
            x: [0, i % 2 === 0 ? 5 : -5, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{ 
            top: `${20 + i * 20}%`, 
            left: `${15 + i * 25}%` 
          }}
        />
      ))}
    </motion.button>
  );
}

function StudioModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-3xl flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="w-full max-w-xl glass p-16 rounded-[4rem] border-white/10 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-10 right-10 p-4 text-white/40 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-16">
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">Private Dialogue</p>
            <h3 className="text-4xl font-headline font-black text-white italic uppercase tracking-tight">Initiate Connection</h3>
          </div>

          <div className="flex flex-col gap-6">
            <ModalAction 
              label="Schedule Discussion" 
              desc="Book a dedicated session for focused strategy."
              icon={<Calendar className="w-5 h-5" />}
              isPrimary
              href="#"
            />
            <ModalAction 
              label="Direct Email" 
              desc="For inquiries regarding products and ventures."
              icon={<Mail className="w-5 h-5" />}
              href="mailto:syedshuaib2429@gmail.com"
            />
            <ModalAction 
              label="LinkedIn" 
              desc="Professional network and industry connection."
              icon={<Linkedin className="w-5 h-5" />}
              href="https://www.linkedin.com/in/syedshuaib485/"
            />
          </div>
        </div>

        {/* Modal Environment */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
      </motion.div>
    </motion.div>
  );
}

function ModalAction({ label, desc, icon, isPrimary = false, href }: { label: string; desc: string; icon: React.ReactNode; isPrimary?: boolean; href: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center gap-8 p-8 rounded-3xl border transition-all duration-500",
        isPrimary 
          ? "bg-primary/[0.08] border-primary/20 hover:bg-primary/[0.12] hover:border-primary/40" 
          : "bg-white/[0.02] border-white/5 hover:border-white/10"
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-2xl flex items-center justify-center transition-all",
        isPrimary ? "bg-primary text-black" : "glass text-white/40 group-hover:text-primary"
      )}>
        {icon}
      </div>
      <div className="flex-1 text-left space-y-1">
        <p className={cn(
          "font-headline font-bold text-xl tracking-tight uppercase",
          isPrimary ? "text-white" : "text-white/60 group-hover:text-white"
        )}>{label}</p>
        <p className="text-xs text-white/20 group-hover:text-white/40 transition-colors">{desc}</p>
      </div>
      <ArrowUpRight className={cn(
        "w-5 h-5 transition-all",
        isPrimary ? "text-primary group-hover:translate-x-1 group-hover:-translate-y-1" : "text-white/10 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1"
      )} />
    </a>
  );
}
