
"use client";

import React, { useState, useEffect, useMemo } from "react";
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
  Sparkles,
  MoveLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

const STUDIO_TOPICS = [
  { 
    id: "01", 
    label: "PRODUCTS", 
    description: "Designing software, ecosystems and digital experiences.",
    icon: Cpu,
    href: "mailto:syedshuaib2429@gmail.com?subject=Product%20Inquiry"
  },
  { 
    id: "02", 
    label: "VENTURES", 
    description: "Startups, ideas and future opportunities.",
    icon: Target,
    href: "mailto:syedshuaib2429@gmail.com?subject=Venture%20Discussion"
  },
  { 
    id: "03", 
    label: "COLLABORATION", 
    description: "Partnerships and meaningful projects.",
    icon: Layers,
    href: "mailto:syedshuaib2429@gmail.com?subject=Collaboration%20Proposal"
  },
  { 
    id: "04", 
    label: "STRATEGY", 
    description: "Systems thinking and product direction.",
    icon: Zap,
    href: "mailto:syedshuaib2429@gmail.com?subject=Strategy%20Dialogue"
  },
  { 
    id: "05", 
    label: "GENERAL", 
    description: "Say hello.",
    icon: Sparkles,
    href: "mailto:syedshuaib2429@gmail.com?subject=Hello"
  },
];

const STUDIO_METADATA = [
  { label: "LOCATION", value: "Bangalore, India", icon: MapPin },
  { label: "RESPONSE TIME", value: "Within 24 Hours", icon: Clock },
  { label: "CURRENT FOCUS", value: "Axora Ecosystem", icon: Target },
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
    <section id="contact" className="relative bg-background overflow-hidden py-48 px-6">
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      
      {/* Cinematic Transition Layer */}
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

      <div className="max-w-7xl mx-auto">
        <LayoutGroup>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            {/* LEFT SIDE: Narrative & Meta */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-16 relative z-10"
            >
              <div className="space-y-8">
                <p className="text-[10px] font-bold tracking-[0.6em] text-primary/40 uppercase">PRIVATE STUDIO</p>
                <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-white leading-tight">
                  Let's Design <br />
                  <span className="text-primary italic font-medium">The Future.</span>
                </h2>
                <div className="max-w-md space-y-6">
                  <p className="text-xl text-[#EAE0C8]/40 font-light leading-relaxed">
                    Open to meaningful discussions about products, ecosystems, ventures, and long-term systems thinking.
                  </p>
                </div>
              </div>

              {/* Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {STUDIO_METADATA.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-2xl border-white/5 hover:border-primary/20 transition-all duration-700 group cursor-default"
                  >
                    <item.icon className="w-4 h-4 text-primary/20 group-hover:text-primary transition-colors mb-4" />
                    <p className="text-[8px] font-bold tracking-[0.3em] text-[#536878] uppercase mb-1">{item.label}</p>
                    <p className="text-[11px] text-white font-medium tracking-wider">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE: The Portal */}
            <div 
              className="relative flex justify-center lg:justify-end items-center min-h-[400px]"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
            >
              <motion.div
                layout
                onClick={() => !isOpen && setIsOpen(true)}
                className={cn(
                  "relative cursor-pointer transition-all duration-700",
                  isOpen 
                    ? "fixed inset-0 m-auto z-[200] w-full max-w-[800px] h-[90vh] md:h-[750px] rounded-[4rem] glass border-white/10 shadow-[0_100px_200px_rgba(0,0,0,0.8)] overflow-hidden" 
                    : "w-64 h-64 md:w-72 md:h-72 rounded-full"
                )}
              >
                <AnimatePresence mode="wait">
                  {!isOpen ? (
                    <motion.div
                      key="portal-artifact"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.5, filter: "blur(30px)" }}
                      style={{ x: springX, y: springY }}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      {/* MULTI-LAYER PORTAL CONSTRUCTION */}
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-10%] border border-dashed border-primary/10 rounded-full" 
                      />
                      <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-5%] border border-white/5 rounded-full" 
                      />
                      
                      {/* Glass Core */}
                      <div className="absolute inset-2 rounded-full glass border-white/10 shadow-[inset_0_0_40px_rgba(255,255,255,0.02)] flex flex-col items-center justify-center overflow-hidden">
                        <motion.div 
                          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
                          transition={{ duration: 6, repeat: Infinity }}
                          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.1),transparent_70%)]"
                        />
                        
                        <div className="relative z-10 text-center space-y-3">
                          <p className="text-[9px] font-bold tracking-[0.8em] text-primary/40 uppercase">Studio</p>
                          <h4 className="text-xl font-headline font-black text-white tracking-[0.4em] uppercase italic leading-none">
                            ACCESS
                          </h4>
                          <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-transparent mx-auto mt-2" />
                        </div>
                      </div>

                      {/* Hover Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none group-hover:via-white/[0.08] transition-all duration-700" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="workspace-revealed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="w-full h-full p-8 md:p-16 flex flex-col relative"
                    >
                      {/* Close Control */}
                      <button 
                        onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                        className="absolute top-8 right-8 p-4 rounded-full glass border-white/5 hover:border-white/20 transition-all hover:rotate-90 group/close"
                      >
                        <X className="w-5 h-5 text-white/40 group-hover/close:text-white" />
                      </button>

                      <div className="flex-1 flex flex-col">
                        <div className="space-y-6 mb-16">
                           <div className="flex items-center gap-4 text-primary/40">
                             <span className="text-[10px] font-bold tracking-[0.6em] uppercase">STUDIO ACCESS</span>
                           </div>
                           <h3 className="text-4xl md:text-6xl font-headline font-black text-white tracking-tighter uppercase italic leading-none">
                             What Shall <br />
                             <span className="text-primary/20 not-italic">We Build?</span>
                           </h3>
                           <p className="text-sm text-[#EAE0C8]/40 font-light tracking-wide">
                             Choose the conversation that best matches your goal.
                           </p>
                        </div>

                        {/* Interaction Tiles */}
                        <div className="space-y-3">
                          {STUDIO_TOPICS.map((topic, idx) => (
                            <motion.button
                              key={topic.label}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * idx }}
                              onClick={() => handleExternalClick(topic.href)}
                              className="w-full group relative flex items-center justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-500 text-left"
                            >
                              <div className="flex items-center gap-8">
                                <div className="w-12 h-12 rounded-2xl glass border-white/5 flex items-center justify-center text-primary/20 group-hover:text-primary transition-all duration-500">
                                  <topic.icon className="w-5 h-5" />
                                </div>
                                <div className="space-y-0.5">
                                  <p className="text-xl font-headline font-bold text-white uppercase italic">{topic.label}</p>
                                  <p className="text-[10px] tracking-widest text-[#536878] uppercase">{topic.description}</p>
                                </div>
                              </div>
                              <ArrowUpRight className="w-5 h-5 text-white/5 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <div className="mt-12 pt-8 border-t border-white/5 opacity-30">
                        <p className="text-[9px] tracking-[0.4em] text-[#EAE0C8] uppercase font-bold text-center">
                          Meaningful conversations create meaningful outcomes.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </LayoutGroup>
      </div>

      {/* Global Background Blur when Open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/80 backdrop-blur-[15px] pointer-events-none"
          />
        )}
      </AnimatePresence>
    </section>
  );
}
