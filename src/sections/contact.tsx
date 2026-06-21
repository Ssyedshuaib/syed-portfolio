
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight,
  Mail,
  Linkedin,
  Clock,
  Target,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  MousePointer2
} from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  {
    id: "01",
    label: "Building Products",
    description: "Designing scalable digital systems and long-term ecosystems.",
    topics: ["Product Architecture", "MVP Strategy", "Ecosystem Design", "System Design", "Platform Growth"]
  },
  {
    id: "02",
    label: "Ventures & Startups",
    description: "Exploring new ventures and long-term value building.",
    topics: ["Startup Ideas", "Validation", "Funding Readiness", "Venture Strategy", "Strategic Planning"]
  },
  {
    id: "03",
    label: "Collaboration",
    description: "Open to partnerships and ambitious projects.",
    topics: ["Partnerships", "Joint Ventures", "Product Building", "Consulting", "Design Systems"]
  },
  {
    id: "04",
    label: "Ideas & Strategy",
    description: "Systems thinking and future product direction.",
    topics: ["Systems Thinking", "Future Tech", "Institutional Design", "Digital Artifacts", "Market Trends"]
  },
  {
    id: "05",
    label: "Just Say Hello",
    description: "No agenda needed. Sometimes great opportunities begin with a simple conversation.",
    topics: ["Networking", "Casual Chat", "Portfolio Review", "General Inquiry", "Collaboration"]
  }
];

const ACTIONS = [
  { 
    label: "DIRECT DIALOGUE", 
    sub: "Direct communication for focused discussions.", 
    href: "mailto:syedshuaib2429@gmail.com", 
    icon: Mail 
  },
  { 
    label: "PROFESSIONAL NETWORK", 
    sub: "Connect through my professional network.", 
    href: "https://www.linkedin.com/in/syedshuaib485/", 
    icon: Linkedin 
  },
  { 
    label: "STRATEGIC PARTNERSHIP", 
    sub: "For founders, ventures, and long-term collaborations.", 
    href: "mailto:syedshuaib2429@gmail.com?subject=Strategic Partnership", 
    icon: Target 
  },
  { 
    label: "PRIVATE SESSION", 
    sub: "Schedule a dedicated conversation.", 
    href: "mailto:syedshuaib2429@gmail.com?subject=Schedule Private Session", 
    icon: Clock 
  },
];

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[0] | null>(null);
  const [transitionState, setTransitionState] = useState<"idle" | "phase1" | "phase2">("idle");

  const resetState = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(1);
      setSelectedCategory(null);
    }, 500);
  };

  const handleExternalClick = (href: string) => {
    setTransitionState("phase1");
    setTimeout(() => {
      setTransitionState("phase2");
      setTimeout(() => {
        window.open(href, '_blank');
        setTransitionState("idle");
      }, 500);
    }, 800);
  };

  return (
    <section id="contact" className="relative bg-[#050505] overflow-hidden py-48 px-6 min-h-screen flex flex-col justify-center">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.01] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Cinematic Departure Overlay */}
      <AnimatePresence>
        {transitionState !== "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-[40px] flex flex-col items-center justify-center"
          >
            <div className="space-y-6 text-center">
              <motion.p 
                key={transitionState}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-2xl md:text-3xl font-headline font-light text-white tracking-[0.2em] italic uppercase"
              >
                {transitionState === "phase1" ? "Preparing Conversation..." : "Opening Communication Channel..."}
              </motion.p>
              <div className="flex justify-center gap-2">
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-primary" 
                />
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-primary" 
                />
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  className="w-1.5 h-1.5 rounded-full bg-primary" 
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <LayoutGroup>
          {!isOpen ? (
            <motion.div 
              layoutId="studio-surface"
              className="flex flex-col items-center text-center space-y-16"
            >
              <div className="space-y-8">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.4, y: 0 }}
                  className="text-[10px] font-bold tracking-[0.8em] text-primary uppercase"
                >
                  PRIVATE STUDIO
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-8xl font-headline font-black tracking-tighter text-white uppercase italic"
                >
                  What Shall <br />We Discuss?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-[#EAE0C8]/40 font-light leading-relaxed max-w-2xl mx-auto"
                >
                  Every meaningful ecosystem begins with a meaningful conversation. <br />
                  Choose the nature of the discussion.
                </motion.p>
              </div>

              <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-6 rounded-full glass border-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 text-[11px] font-bold tracking-[0.4em] text-white uppercase flex items-center gap-4">
                  ENTER THE STUDIO <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div 
              layoutId="studio-surface"
              className="max-w-[1200px] mx-auto glass border-white/10 rounded-[4rem] p-12 md:p-20 relative overflow-hidden"
            >
              {/* Internal Studio Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* Left Sidebar: Metadata */}
                <div className="lg:col-span-3 space-y-16 border-r border-white/5 pr-12 hidden lg:block">
                  <div className="space-y-8">
                    <div className="space-y-1">
                      <p className="text-[9px] font-bold tracking-[0.3em] text-primary/30 uppercase">SELECTED CATEGORY</p>
                      <p className="text-sm text-white font-medium italic">
                        {selectedCategory ? selectedCategory.label : "None Selected"}
                      </p>
                    </div>
                    {selectedCategory && (
                      <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="text-xs text-[#EAE0C8]/40 leading-relaxed font-light"
                      >
                        {selectedCategory.description}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-8 pt-8 border-t border-white/5">
                    <div className="space-y-1">
                      <p className="text-[9px] font-bold tracking-[0.3em] text-primary/30 uppercase">RESPONSE TIME</p>
                      <p className="text-sm text-white/60">Usually within 24 hours</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] font-bold tracking-[0.3em] text-primary/30 uppercase">AVAILABILITY</p>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <p className="text-sm text-white/60">Open to Dialogue</p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={resetState}
                    className="text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase hover:text-white transition-colors flex items-center gap-2 pt-12"
                  >
                    ← Exit Studio
                  </button>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-9 space-y-12">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <div className={cn("w-2 h-2 rounded-full transition-colors duration-500", step >= 1 ? "bg-primary" : "bg-white/10")} />
                        <div className={cn("w-12 h-px transition-colors duration-500", step >= 2 ? "bg-primary/40" : "bg-white/10")} />
                        <div className={cn("w-2 h-2 rounded-full transition-colors duration-500", step >= 2 ? "bg-primary" : "bg-white/10")} />
                        <div className={cn("w-12 h-px transition-colors duration-500", step >= 3 ? "bg-primary/40" : "bg-white/10")} />
                        <div className={cn("w-2 h-2 rounded-full transition-colors duration-500", step >= 3 ? "bg-primary" : "bg-white/10")} />
                      </div>
                      <span className="text-[9px] font-bold tracking-[0.5em] text-primary/40 uppercase">STEP 0{step} OF 03</span>
                    </div>
                    <button onClick={resetState} className="lg:hidden text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase">Exit</button>
                  </div>

                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div 
                        key="step1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3 className="text-3xl font-headline font-bold text-white tracking-tight uppercase italic">Conversation Path</h3>
                        <div className="grid grid-cols-1 gap-3">
                          {CATEGORIES.map((cat, idx) => (
                            <button
                              key={cat.id}
                              onClick={() => {
                                setSelectedCategory(cat);
                                setStep(2);
                              }}
                              className="group w-full flex items-center justify-between p-8 rounded-3xl glass border-white/5 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-500 hover:-translate-y-1"
                            >
                              <div className="flex items-center gap-8">
                                <span className="text-[11px] font-mono font-bold text-primary/20 group-hover:text-primary transition-colors">{cat.id}</span>
                                <div className="text-left">
                                  <p className="text-xl font-headline font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors">{cat.label}</p>
                                  <p className="text-xs text-[#EAE0C8]/30 font-light mt-1">{cat.description}</p>
                                </div>
                              </div>
                              <ChevronRight className="w-5 h-5 text-white/5 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div 
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div className="space-y-4">
                          <button onClick={() => setStep(1)} className="text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase hover:text-white transition-colors flex items-center gap-2">
                             ← Back to categories
                          </button>
                          <h3 className="text-3xl font-headline font-bold text-white tracking-tight uppercase italic">{selectedCategory?.label}</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedCategory?.topics.map((topic, idx) => (
                            <button
                              key={topic}
                              onClick={() => setStep(3)}
                              className="group p-10 rounded-[2.5rem] glass border-white/5 text-left transition-all duration-700 hover:border-primary/30 hover:bg-primary/[0.03] flex items-center justify-between"
                            >
                              <div className="space-y-2">
                                <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{topic}</span>
                                <div className="h-px w-0 bg-primary/20 group-hover:w-full transition-all duration-700" />
                              </div>
                              <ArrowUpRight className="w-4 h-4 text-white/0 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div 
                        key="step3"
                        initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                      >
                        <div className="space-y-4">
                          <button onClick={() => setStep(2)} className="text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase hover:text-white transition-colors flex items-center gap-2">
                             ← Change topic
                          </button>
                          <h3 className="text-3xl font-headline font-bold text-white tracking-tight uppercase italic">Institutional Dialogue</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {ACTIONS.map((action) => (
                            <button
                              key={action.label}
                              onClick={() => handleExternalClick(action.href)}
                              className="group p-10 rounded-[3rem] glass border-white/10 transition-all duration-1000 hover:border-primary/40 hover:bg-primary/[0.04] text-left relative overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                              
                              <div className="flex items-start justify-between mb-8 relative z-10">
                                <div className="w-12 h-12 rounded-2xl glass border-white/10 flex items-center justify-center text-primary/40 group-hover:text-primary group-hover:rotate-3 transition-all duration-700">
                                  <action.icon className="w-6 h-6" />
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                              </div>

                              <div className="space-y-2 relative z-10">
                                <p className="text-xl font-headline font-black text-white italic uppercase tracking-tight">{action.label}</p>
                                <p className="text-[11px] text-[#536878] uppercase font-bold tracking-widest">{action.sub}</p>
                              </div>
                            </button>
                          ))}
                        </div>

                        <div className="pt-12 text-center">
                          <p className="text-[9px] font-bold tracking-[0.5em] text-primary/30 uppercase">
                            Meaningful partnerships begin with meaningful conversations.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </LayoutGroup>
      </div>

      {/* Decorative Atmosphere */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />
    </section>
  );
}
