
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
  ChevronRight,
  Sparkles,
  MousePointer2,
  Globe,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  {
    id: "01",
    label: "Building Products",
    description: "Designing scalable digital systems and long-term ecosystems.",
    topics: [
      { title: "Product Architecture", desc: "Developing the structural foundations of digital ecosystems." },
      { title: "MVP Strategy", desc: "Prioritizing core value for rapid market validation." },
      { title: "Ecosystem Design", desc: "Architecting interconnected products that compound value." },
      { title: "System Design", desc: "Building scalable and maintainable infrastructure." }
    ]
  },
  {
    id: "02",
    label: "Ventures & Startups",
    description: "Exploring new ventures and long-term value building.",
    topics: [
      { title: "Startup Ideas", desc: "Exploring zero-to-one opportunities." },
      { title: "Validation", desc: "Pressure testing concepts against market realities." },
      { title: "Funding Readiness", desc: "Preparing ventures for institutional investment." },
      { title: "Venture Strategy", desc: "Designing long-term growth and impact models." }
    ]
  },
  {
    id: "03",
    label: "Collaboration",
    description: "Open to partnerships and ambitious projects.",
    topics: [
      { title: "Partnerships", desc: "Long-term strategic alignments with shared goals." },
      { title: "Joint Ventures", desc: "Building new entities through collaborative effort." },
      { title: "Product Building", desc: "Expert execution for ambitious digital products." },
      { title: "Consulting", desc: "Strategic advice on product and technology direction." }
    ]
  },
  {
    id: "04",
    label: "Ideas & Strategy",
    description: "Systems thinking and future product direction.",
    topics: [
      { title: "Systems Thinking", desc: "Applying holistic logic to complex problems." },
      { title: "Future Tech", desc: "Exploring the impact of emerging technologies." },
      { title: "Institutional Design", desc: "Building products that outlive temporary trends." },
      { title: "Market Trends", desc: "Analyzing shifts in human and digital behavior." }
    ]
  },
  {
    id: "05",
    label: "Just Say Hello",
    description: "No agenda needed. Sometimes great opportunities begin with a conversation.",
    topics: [
      { title: "Networking", desc: "Connecting with like-minded builders and founders." },
      { title: "Casual Chat", desc: "General discussions about technology and design." },
      { title: "Portfolio Review", desc: "Discussing the architecture and craft of projects." },
      { title: "Collaboration", desc: "General interest in working together on future ideas." }
    ]
  }
];

const ACTIONS = [
  { 
    label: "Direct Dialogue", 
    sub: "Direct communication for focused discussions.", 
    href: "mailto:syedshuaib2429@gmail.com", 
    icon: Mail 
  },
  { 
    label: "Professional Network", 
    sub: "Connect through my professional network on LinkedIn.", 
    href: "https://www.linkedin.com/in/syedshuaib485/", 
    icon: Linkedin 
  },
  { 
    label: "Build Together", 
    sub: "For founders, ventures, and long-term collaborations.", 
    href: "mailto:syedshuaib2429@gmail.com?subject=Build Together", 
    icon: Target 
  },
  { 
    label: "Schedule Session", 
    sub: "Book a private session for dedicated consultation.", 
    href: "mailto:syedshuaib2429@gmail.com?subject=Schedule Session", 
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
      
      {/* Cinematic Transition Overlay */}
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
                className="text-2xl font-headline font-light text-white tracking-[0.2em] italic uppercase"
              >
                {transitionState === "phase1" ? "Preparing Conversation..." : "Opening Communication Channel..."}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        {!isOpen ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-16"
          >
            <div className="space-y-8">
              <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">Private Studio</p>
              <h2 className="text-5xl md:text-8xl font-headline font-black tracking-tighter text-white uppercase italic">
                What Shall <br />We Discuss?
              </h2>
              <p className="text-xl md:text-2xl text-[#EAE0C8]/40 font-light max-w-2xl mx-auto leading-relaxed">
                Every meaningful ecosystem begins with a meaningful conversation. <br />
                Choose the nature of the discussion.
              </p>
            </div>

            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-12 py-6 rounded-full glass border-white/10 overflow-hidden"
            >
              <span className="relative z-10 text-[11px] font-bold tracking-[0.4em] text-white uppercase flex items-center gap-4">
                Enter The Studio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        ) : (
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Institutional Sidebar */}
            <div className="lg:col-span-3 space-y-12 hidden lg:block border-r border-white/5 pr-12">
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-[9px] font-bold tracking-[0.3em] text-primary/30 uppercase">Selection</p>
                  <p className="text-sm text-white font-medium italic">{selectedCategory?.label || "Institutional Dialogue"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold tracking-[0.3em] text-primary/30 uppercase">Response Time</p>
                  <p className="text-sm text-white/60">Within 24 Hours</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold tracking-[0.3em] text-primary/30 uppercase">Availability</p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-sm text-white/60">Open to Dialogue</p>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-white/5">
                <button 
                  onClick={resetState}
                  className="text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase hover:text-white transition-colors flex items-center gap-2"
                >
                  ← Exit Studio
                </button>
              </div>
            </div>

            {/* Main Workspace Area */}
            <div className="lg:col-span-9">
              <div className="mb-12 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className={cn("w-2 h-2 rounded-full transition-colors", step >= 1 ? "bg-primary" : "bg-white/10")} />
                  <div className={cn("w-12 h-px", step >= 2 ? "bg-primary/40" : "bg-white/10")} />
                  <div className={cn("w-2 h-2 rounded-full transition-colors", step >= 2 ? "bg-primary" : "bg-white/10")} />
                  <div className={cn("w-12 h-px", step >= 3 ? "bg-primary/40" : "bg-white/10")} />
                  <div className={cn("w-2 h-2 rounded-full transition-colors", step >= 3 ? "bg-primary" : "bg-white/10")} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase">Step 0{step} of 03</span>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <h3 className="text-4xl font-headline font-black text-white tracking-tight uppercase italic">Conversation Path</h3>
                    <div className="grid grid-cols-1 gap-4 max-w-[800px]">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat);
                            setStep(2);
                          }}
                          className="group w-full flex items-center justify-between p-10 rounded-[2.5rem] glass border-white/5 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-500"
                        >
                          <div className="text-left space-y-2">
                            <p className="text-2xl font-headline font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors">{cat.label}</p>
                            <p className="text-sm text-[#EAE0C8]/30 font-light">{cat.description}</p>
                          </div>
                          <ChevronRight className="w-6 h-6 text-white/10 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <button onClick={() => setStep(1)} className="text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase hover:text-white transition-colors flex items-center gap-2">
                        ← Back to paths
                      </button>
                      <h3 className="text-4xl font-headline font-black text-white tracking-tight uppercase italic">{selectedCategory?.label}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedCategory?.topics.map((topic) => (
                        <button
                          key={topic.title}
                          onClick={() => setStep(3)}
                          className="group p-12 min-h-[220px] rounded-[2rem] glass border-white/5 text-left transition-all duration-700 hover:border-primary/30 hover:bg-primary/[0.03] hover:-translate-y-2 flex flex-col justify-between"
                        >
                          <div className="space-y-4">
                            <p className="text-2xl font-headline font-bold text-white/90 group-hover:text-white transition-colors uppercase tracking-tight">{topic.title}</p>
                            <p className="text-sm text-[#EAE0C8]/40 leading-relaxed font-light">{topic.desc}</p>
                          </div>
                          <div className="flex justify-end">
                            <ArrowUpRight className="w-5 h-5 text-white/0 group-hover:text-primary transition-all" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                  >
                    <div className="space-y-4">
                      <button onClick={() => setStep(2)} className="text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase hover:text-white transition-colors flex items-center gap-2">
                        ← Change topic
                      </button>
                      <h3 className="text-4xl font-headline font-black text-white tracking-tight uppercase italic">Dialogue Channels</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {ACTIONS.map((action) => (
                        <button
                          key={action.label}
                          onClick={() => handleExternalClick(action.href)}
                          className="group p-12 min-h-[240px] w-full max-w-[420px] rounded-[2.5rem] glass border-white/10 transition-all duration-1000 hover:border-primary/40 hover:bg-primary/[0.04] text-left flex flex-col justify-between relative overflow-hidden"
                        >
                          <div className="flex items-start justify-between relative z-10">
                            <div className="w-16 h-16 rounded-2xl glass border-white/10 flex items-center justify-center text-primary/40 group-hover:text-primary transition-all duration-700">
                              <action.icon className="w-8 h-8" />
                            </div>
                            <ArrowUpRight className="w-6 h-6 text-white/10 group-hover:text-primary transition-all" />
                          </div>

                          <div className="space-y-3 relative z-10">
                            <p className="text-2xl font-headline font-black text-white italic uppercase tracking-tight">{action.label}</p>
                            <p className="text-xs text-[#EAE0C8]/40 uppercase font-bold tracking-widest leading-relaxed">{action.sub}</p>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="pt-12 text-center border-t border-white/5 max-w-[860px]">
                      <p className="text-[10px] font-bold tracking-[0.6em] text-primary/20 uppercase">
                        Meaningful partnerships begin with meaningful conversations.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

