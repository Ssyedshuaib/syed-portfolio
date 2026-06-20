
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft,
  ArrowUpRight,
  Mail, 
  MapPin, 
  Target, 
  Clock, 
  Linkedin, 
  Calendar,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const CONVERSATION_OPTIONS = [
  { id: "01", label: "Products", sub: "Discuss existing or future product builds." },
  { id: "02", label: "Ventures", sub: "Exploring startup equity or investment." },
  { id: "03", label: "Collaboration", sub: "Joint efforts on systems and platforms." },
  { id: "04", label: "Ideas", sub: "Brainstorming and architectural feedback." },
  { id: "05", label: "Just Say Hello", sub: "General networking and connection." }
];

const CONTACT_CHANNELS = [
  { id: "c1", label: "Email Me", sub: "Direct communication.", href: "mailto:hello@axora.in", icon: Mail },
  { id: "c2", label: "LinkedIn", sub: "Professional network.", href: "#", icon: Linkedin },
  { id: "c3", label: "Schedule Call", sub: "15 min discovery.", href: "#", icon: Calendar }
];

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [step, setStep] = useState<'options' | 'channels'>('options');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Live Bangalore Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Magnetic Button Logic (Only active when not expanded)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isExpanded) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x * 0.3);
    mouseY.set(y * 0.3);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const resetConversation = () => {
    setIsExpanded(false);
    setTimeout(() => {
      setStep('options');
      setSelectedTopic(null);
    }, 500);
  };

  return (
    <section id="contact" ref={containerRef} className="relative bg-background overflow-hidden">
      {/* SECTION 1: Editorial Closing Statement */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <p className="text-[10px] font-bold tracking-[1em] text-primary/40 uppercase">THE MISSION</p>
          <h2 className="text-6xl md:text-9xl font-headline font-black tracking-tighter text-white leading-[0.85]">
            Building Systems <br />
            <span className="text-primary italic font-medium">That Outlive Trends.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 text-[11px] font-bold tracking-[0.4em] text-primary/30 uppercase"
        >
          <div className="space-y-2">
            <p className="text-white/60">Technology</p>
            <p>Changes.</p>
          </div>
          <div className="space-y-2">
            <p className="text-white/60">Principles</p>
            <p>Remain.</p>
          </div>
          <div className="space-y-2">
            <p className="text-white/60">Products</p>
            <p>Evolve.</p>
          </div>
          <div className="space-y-2">
            <p className="text-white/60">Mission</p>
            <p>Endures.</p>
          </div>
        </motion.div>
      </div>

      {/* SECTION 2 & 3: Invitation & Contact Card */}
      <div className="max-w-7xl mx-auto px-6 py-64">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-end">
          
          {/* Left: Invitation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-16"
          >
            <div className="space-y-8">
              <h3 className="text-5xl md:text-7xl font-headline font-black text-white tracking-tighter leading-none">
                Let's Build <br />
                <span className="text-primary/40 italic font-medium">Something Meaningful.</span>
              </h3>
              <p className="text-xl md:text-2xl text-[#EAE0C8]/60 font-light leading-relaxed max-w-md">
                Whether it's a product, venture, ecosystem, or ambitious idea. I'm always interested in meaningful problems.
              </p>
            </div>

            {/* Bangalore Clock */}
            <div className="flex items-center gap-6 glass w-fit px-8 py-4 rounded-2xl border-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <div className="space-y-0.5">
                <p className="text-[9px] font-bold tracking-[0.3em] text-primary/40 uppercase">Bangalore, IN</p>
                <p className="text-lg font-mono font-medium text-white tracking-widest">{time}</p>
              </div>
              <Clock className="w-4 h-4 text-primary/20 ml-4" />
            </div>
          </motion.div>

          {/* Right: Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass p-12 md:p-16 rounded-[4rem] border-white/10 space-y-16 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target className="w-24 h-24 text-white" />
            </div>

            <div className="space-y-12 relative z-10">
              <div className="space-y-4">
                <p className="text-[10px] font-bold tracking-[0.5em] text-primary/40 uppercase">Direct Email</p>
                <p className="text-2xl md:text-3xl font-headline font-bold text-white transition-colors group-hover:text-primary">
                  hello@axora.in
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold tracking-[0.5em] text-primary/40 uppercase">Location</p>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <p className="text-xl text-[#EAE0C8]/80 font-light">Bangalore, India</p>
                </div>
              </div>

              <div className="space-y-6 pt-10 border-t border-white/5">
                <p className="text-[10px] font-bold tracking-[0.5em] text-primary/40 uppercase">Current Focus</p>
                <div className="flex flex-wrap gap-3">
                  {["Axora Studio", "DevNexus", "Reverie"].map(focus => (
                    <span key={focus} className="px-5 py-2 rounded-full glass border-white/5 text-[9px] font-bold tracking-[0.2em] uppercase text-white/60">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SECTION 4: Primary Magnetic CTA - Now Expanding Panel */}
      <div className="py-64 flex flex-col items-center justify-center relative min-h-[600px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.03),transparent_70%)] pointer-events-none" />
        
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={!isExpanded ? { x: springX, y: springY } : {}}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={!isExpanded ? () => setIsExpanded(true) : undefined}
          className={cn(
            "relative z-10 glass border-white/10 overflow-hidden transition-all duration-700",
            isExpanded 
              ? "w-full max-w-2xl rounded-[3rem] p-12 md:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.8)] bg-[#0F1317]/90 backdrop-blur-[40px]" 
              : "h-48 w-48 md:h-64 md:w-64 rounded-full flex items-center justify-center cursor-pointer hover:border-primary/40 hover:bg-primary/[0.02] group"
          )}
        >
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.div
                key="trigger"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center gap-4 text-center"
              >
                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="text-[10px] font-bold tracking-[0.4em] text-primary/60 uppercase">Start A</span>
                <span className="text-xs font-bold tracking-[0.2em] text-white uppercase flex items-center gap-2">
                  Conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="conversation-architect"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-12"
              >
                {/* Panel Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {step === 'channels' && (
                      <motion.button 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setStep('options')}
                        className="p-2.5 rounded-full glass border-white/5 hover:border-primary/20 transition-all group"
                      >
                        <ArrowLeft className="w-4 h-4 text-white/60 group-hover:text-primary transition-colors" />
                      </motion.button>
                    )}
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <p className="text-[9px] font-bold tracking-[0.4em] text-primary/60 uppercase">
                        {step === 'options' ? "Founder Interaction" : `Topic: ${selectedTopic}`}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={resetConversation}
                    className="p-2.5 rounded-full glass border-white/5 hover:bg-white/5 transition-all group"
                  >
                    <X className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-all" />
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {step === 'options' ? (
                    <motion.div
                      key="options-view"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-4">
                        <h4 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter leading-none">
                          What would you <br />
                          <span className="text-primary italic font-medium">like to discuss?</span>
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {CONVERSATION_OPTIONS.map((opt, idx) => (
                          <motion.button
                            key={opt.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={() => {
                              setSelectedTopic(opt.label);
                              setStep('channels');
                            }}
                            className="group flex items-center justify-between glass p-6 rounded-[2rem] border-white/5 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-500 text-left"
                          >
                            <div className="flex items-center gap-6">
                              <span className="text-[10px] font-mono font-bold text-primary/30 group-hover:text-primary transition-colors">{opt.id}</span>
                              <div className="space-y-0.5">
                                <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">{opt.label}</p>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest">{opt.sub}</p>
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="channels-view"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-10"
                    >
                      <div className="space-y-4">
                        <h4 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter leading-none">
                          Select your <br />
                          <span className="text-primary italic font-medium">preferred channel.</span>
                        </h4>
                        <p className="text-lg text-white/40 font-light max-w-sm">
                          Direct access to Syed for {selectedTopic?.toLowerCase()} discussions.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        {CONTACT_CHANNELS.map((link, idx) => (
                          <motion.a
                            key={link.label}
                            href={link.href}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group block glass p-8 rounded-[2rem] border-white/5 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-500"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-2xl glass border-white/5 flex items-center justify-center text-[#536878] group-hover:text-primary transition-colors">
                                  <link.icon className="w-5 h-5" />
                                </div>
                                <div className="space-y-0.5">
                                  <p className="text-lg font-bold tracking-tight text-white">{link.label}</p>
                                  <p className="text-[10px] font-bold tracking-[0.1em] text-[#536878] uppercase">{link.sub}</p>
                                </div>
                              </div>
                              <ArrowUpRight className="w-5 h-5 text-primary opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" />
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Panel Footer */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-[9px] font-bold tracking-[0.4em] text-[#536878] uppercase">Axora Intelligence Layer © 2026</p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <p className="text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase">Founder Online</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
