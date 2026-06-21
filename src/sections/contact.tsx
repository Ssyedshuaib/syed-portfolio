
"use client";

import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence, LayoutGroup } from "framer-motion";
import { 
  ArrowRight, 
  MapPin, 
  ArrowUpRight,
  X,
  Mail,
  Linkedin,
  Clock,
  Zap,
  Target,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const STUDIO_METADATA = [
  { label: "LOCATION", value: "Bangalore, India", icon: MapPin },
  { label: "RESPONSE TIME", value: "Within 24 Hours", icon: Clock },
  { label: "CURRENT FOCUS", value: "Axora Ecosystem", icon: Target },
];

const CONVERSATION_PATHS = [
  {
    id: "01",
    label: "BUILDING PRODUCTS",
    description: "Designing scalable digital ecosystems.",
    href: "mailto:syedshuaib2429@gmail.com?subject=Building%20Products"
  },
  {
    id: "02",
    label: "VENTURES & STARTUPS",
    description: "Exploring meaningful opportunities.",
    href: "mailto:syedshuaib2429@gmail.com?subject=Ventures%20Discussion"
  },
  {
    id: "03",
    label: "COLLABORATION",
    description: "Building together.",
    href: "mailto:syedshuaib2429@gmail.com?subject=Collaboration%20Proposal"
  },
  {
    id: "04",
    label: "IDEAS & STRATEGY",
    description: "Systems thinking and product direction.",
    href: "mailto:syedshuaib2429@gmail.com?subject=Strategy%20Dialogue"
  },
  {
    id: "05",
    label: "JUST SAY HELLO",
    description: "Start a simple conversation.",
    href: "mailto:syedshuaib2429@gmail.com?subject=Hello"
  }
];

const TRANSITION_MESSAGES = [
  "Preparing The Studio...",
  "Connecting Ideas...",
  "Opening The Dialogue...",
  "Initializing Workspace..."
];

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [activeMessage, setActiveMessage] = useState(TRANSITION_MESSAGES[0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    if (isOpen) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.1;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.1;
    mouseX.set(x);
    mouseY.set(y);
  }

  const handleExternalClick = (href: string) => {
    setActiveMessage(TRANSITION_MESSAGES[Math.floor(Math.random() * TRANSITION_MESSAGES.length)]);
    setIsNavigating(true);
    setTimeout(() => {
      window.open(href, '_blank');
      setIsNavigating(false);
    }, 1100);
  };

  return (
    <section id="contact" className="relative bg-background overflow-hidden py-48 px-6 min-h-[900px] flex flex-col justify-center">
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      
      {/* Global Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-40" />

      {/* Cinematic Transition Overlay */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] bg-[#050505] flex flex-col items-center justify-center"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="space-y-8 text-center"
            >
              <p className="text-2xl md:text-3xl font-headline font-light text-white tracking-[0.2em] italic uppercase">
                {activeMessage}
              </p>
              <div className="h-px w-12 bg-primary/20 mx-auto" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto w-full">
        <LayoutGroup>
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div 
                key="studio-intro"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(20px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
              >
                {/* LEFT SIDE: Narrative */}
                <div className="space-y-16">
                  <div className="space-y-8">
                    <p className="text-[10px] font-bold tracking-[0.6em] text-primary/40 uppercase">PRIVATE STUDIO</p>
                    <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-white leading-tight">
                      Let's Design <br />
                      <span className="text-primary italic font-medium">The Future.</span>
                    </h2>
                    <p className="text-xl text-[#EAE0C8]/40 font-light leading-relaxed max-w-md">
                      Open to discussions about products, ecosystems, ventures, and long-term systems thinking.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {STUDIO_METADATA.map((item, idx) => (
                      <div
                        key={item.label}
                        className="glass p-6 rounded-2xl border-white/5 group cursor-default transition-all duration-700 hover:border-primary/20"
                      >
                        <item.icon className="w-4 h-4 text-primary/20 transition-colors mb-4 group-hover:text-primary" />
                        <p className="text-[8px] font-bold tracking-[0.3em] text-[#536878] uppercase mb-1">{item.label}</p>
                        <p className="text-[11px] text-white font-medium tracking-wider">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT SIDE: The Portal */}
                <div 
                  className="relative flex justify-center lg:justify-end items-center"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
                >
                  <motion.div
                    layoutId="portal-artifact"
                    onClick={() => setIsOpen(true)}
                    style={{ x: springX, y: springY }}
                    className="relative w-64 h-64 md:w-72 md:h-72 cursor-pointer group"
                  >
                    {/* MULTI-LAYER PORTAL CONSTRUCTION */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-15%] border border-dashed border-primary/10 rounded-full" 
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-8%] border border-white/5 rounded-full" 
                    />
                    
                    <div className="absolute inset-0 rounded-full glass border-white/10 shadow-[inset_0_0_40px_rgba(255,255,255,0.02)] flex flex-col items-center justify-center overflow-hidden">
                      <motion.div 
                        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.1),transparent_70%)]"
                      />
                      
                      <div className="relative z-10 text-center space-y-3 px-8">
                        <p className="text-[8px] font-bold tracking-[0.8em] text-primary/40 uppercase">Dialogue</p>
                        <h4 className="text-sm font-headline font-black text-white tracking-[0.4em] uppercase italic leading-tight">
                          START A <br />CONVERSATION
                        </h4>
                        <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-transparent mx-auto mt-2" />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none group-hover:via-white/[0.08] transition-all duration-700" />
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="conversation-workspace"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[900px] mx-auto w-full relative"
              >
                {/* Background Shadow Link to Portal */}
                <motion.div 
                  layoutId="portal-artifact"
                  className="absolute inset-0 -z-10 rounded-[3rem] glass border-white/10 opacity-40"
                />

                <div className="p-8 md:p-20 space-y-16">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-4">
                      <p className="text-[10px] font-bold tracking-[0.6em] text-primary/40 uppercase">CHOOSE A CONVERSATION PATH</p>
                      <h3 className="text-4xl md:text-6xl font-headline font-black text-white tracking-tighter uppercase italic leading-none">
                        What Shall <br />
                        <span className="text-primary/20 not-italic">We Discuss?</span>
                      </h3>
                    </div>
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="p-4 rounded-full glass border-white/5 hover:border-white/20 transition-all hover:rotate-90 group/close"
                    >
                      <X className="w-5 h-5 text-white/40 group-hover/close:text-white" />
                    </button>
                  </div>

                  {/* Options List */}
                  <div className="space-y-4">
                    {CONVERSATION_PATHS.map((path, idx) => (
                      <motion.button
                        key={path.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        onClick={() => handleExternalClick(path.href)}
                        className="w-full group flex items-center justify-between py-8 border-b border-white/5 text-left transition-all hover:border-primary/20"
                      >
                        <div className="flex items-center gap-12">
                          <span className="text-[11px] font-mono font-bold text-primary/20 group-hover:text-primary transition-colors">
                            {path.id}
                          </span>
                          <div className="space-y-1">
                            <p className="text-2xl font-headline font-bold text-white uppercase italic tracking-tight group-hover:text-primary transition-colors">
                              {path.label}
                            </p>
                            <p className="text-[11px] tracking-widest text-[#536878] uppercase font-light">
                              {path.description}
                            </p>
                          </div>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/[0.03] transition-all">
                          <ArrowRight className="w-5 h-5 text-white/10 group-hover:text-primary transition-all group-hover:translate-x-1" />
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Footer Reminder */}
                  <div className="pt-8 opacity-20 text-center">
                    <p className="text-[9px] tracking-[0.4em] text-[#EAE0C8] uppercase font-bold">
                      Meaningful conversations create meaningful outcomes.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>

      {/* Atmospheric Background Blur for Workspace Mode */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[-1] backdrop-blur-[10px] bg-black/40 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </section>
  );
}
