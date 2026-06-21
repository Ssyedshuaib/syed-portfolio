
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
  Target,
  MessageSquare,
  Sparkles,
  Zap,
  Layers,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const STUDIO_METADATA = [
  { label: "LOCATION", value: "Bangalore, India", icon: MapPin },
  { label: "RESPONSE TIME", value: "Within 24 Hours", icon: Clock },
  { label: "CURRENT FOCUS", value: "Axora Ecosystem", icon: Target },
];

const CATEGORIES = [
  {
    id: "01",
    label: "BUILDING PRODUCTS",
    description: "Designing scalable digital ecosystems.",
    topics: ["Product Architecture", "MVP Strategy", "Ecosystem Design", "System Design", "Platform Growth"]
  },
  {
    id: "02",
    label: "VENTURES & STARTUPS",
    description: "Exploring meaningful opportunities.",
    topics: ["Startup Ideas", "Validation", "Funding Readiness", "Venture Strategy", "Strategic Planning"]
  },
  {
    id: "03",
    label: "COLLABORATION",
    description: "Building together.",
    topics: ["Partnerships", "Joint Projects", "Consulting", "Product Building", "Design Systems"]
  },
  {
    id: "04",
    label: "IDEAS & STRATEGY",
    description: "Systems thinking and product direction.",
    topics: ["Systems Thinking", "Future Tech", "Digital Artifacts", "Institutional Design", "Market Trends"]
  },
  {
    id: "05",
    label: "JUST SAY HELLO",
    description: "Start a simple conversation.",
    topics: ["Networking", "Casual Chat", "Feedback", "Portfolio Review", "General Inquiry"]
  }
];

const ACTIONS = [
  { label: "EMAIL", sub: "Direct communication for dialogue.", href: "mailto:syedshuaib2429@gmail.com", icon: Mail },
  { label: "LINKEDIN", sub: "Professional network connection.", href: "https://www.linkedin.com/in/syedshuaib485/", icon: Linkedin },
  { label: "BUILD TOGETHER", sub: "For ambitious partnerships.", href: "mailto:syedshuaib2429@gmail.com?subject=Build Together", icon: Sparkles },
  { label: "SCHEDULE", sub: "Arrange a dedicated time.", href: "mailto:syedshuaib2429@gmail.com?subject=Schedule Discussion", icon: Clock },
];

const TRANSITION_MESSAGES = [
  "Preparing The Studio...",
  "Connecting Ideas...",
  "Opening The Dialogue...",
  "Initializing Workspace...",
  "Finalizing Context..."
];

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Category, 2: Topics, 3: Actions
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[0] | null>(null);
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

  const resetState = () => {
    setIsOpen(false);
    setStep(1);
    setSelectedCategory(null);
  };

  const handleExternalClick = (href: string) => {
    setActiveMessage(TRANSITION_MESSAGES[Math.floor(Math.random() * TRANSITION_MESSAGES.length)]);
    setIsNavigating(true);
    setTimeout(() => {
      window.open(href, '_blank');
      setIsNavigating(false);
    }, 1100);
  };

  const handleCategorySelect = (category: typeof CATEGORIES[0]) => {
    setSelectedCategory(category);
    setStep(2);
  };

  return (
    <section id="contact" className="relative bg-background overflow-hidden py-48 px-6 min-h-[900px] flex flex-col justify-center">
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      
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
                <div className="space-y-16">
                  <div className="space-y-8">
                    <p className="text-[10px] font-bold tracking-[0.6em] text-primary/40 uppercase">THE STUDIO</p>
                    <h2 className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-white leading-tight uppercase">
                      Let's Design <br />
                      <span className="text-primary italic font-medium">The Future.</span>
                    </h2>
                    <p className="text-xl text-[#EAE0C8]/40 font-light leading-relaxed max-w-md">
                      Open to discussions about products, ecosystems, ventures, and long-term systems thinking.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {STUDIO_METADATA.map((item) => (
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

                <div 
                  className="relative flex justify-center lg:justify-end items-center"
                  onMouseMove={handleMouseMove}
                >
                  <motion.div
                    layoutId="portal-artifact"
                    onClick={() => setIsOpen(true)}
                    style={{ x: springX, y: springY }}
                    className="relative w-64 h-64 md:w-72 md:h-72 cursor-pointer group"
                  >
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-15%] border border-dashed border-primary/10 rounded-full" 
                    />
                    
                    <div className="absolute inset-0 rounded-full glass border-white/10 shadow-[inset_0_0_40px_rgba(255,255,255,0.02)] flex flex-col items-center justify-center overflow-hidden">
                      <motion.div 
                        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.1),transparent_70%)]"
                      />
                      
                      <div className="relative z-10 text-center space-y-3 px-8">
                        <p className="text-[8px] font-bold tracking-[0.8em] text-primary/40 uppercase">Dialogue</p>
                        <h4 className="text-xs font-headline font-black text-white tracking-[0.4em] uppercase italic leading-tight">
                          START A <br />CONVERSATION
                        </h4>
                        <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-transparent mx-auto mt-2" />
                      </div>
                    </div>
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
                <motion.div 
                  layoutId="portal-artifact"
                  className="absolute inset-0 -z-10 rounded-[3rem] glass border-white/10 opacity-40 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
                />

                <div className="p-8 md:p-16 space-y-16">
                  {/* Workspace Header */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-px w-6 bg-primary/20" />
                        <p className="text-[10px] font-bold tracking-[0.6em] text-primary/40 uppercase">STEP 0{step} OF 03</p>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter uppercase italic leading-none">
                        {step === 1 && "What shall we discuss?"}
                        {step === 2 && selectedCategory?.label}
                        {step === 3 && "Start Dialogue"}
                      </h3>
                      {step === 2 && (
                        <p className="text-sm text-[#EAE0C8]/40 font-light italic">Refine the focus of our conversation.</p>
                      )}
                    </div>
                    <button 
                      onClick={resetState}
                      className="p-4 rounded-full glass border-white/5 hover:border-white/20 transition-all hover:rotate-90"
                    >
                      <X className="w-5 h-5 text-white/40" />
                    </button>
                  </div>

                  <div className="relative overflow-hidden min-h-[400px]">
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div 
                          key="step-1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5 }}
                          className="space-y-3"
                        >
                          {CATEGORIES.map((cat, idx) => (
                            <button
                              key={cat.id}
                              onClick={() => handleCategorySelect(cat)}
                              className="w-full group flex items-center justify-between p-6 rounded-2xl glass border-white/5 transition-all hover:border-primary/20 hover:bg-primary/[0.02]"
                            >
                              <div className="flex items-center gap-8">
                                <span className="text-[10px] font-mono font-bold text-primary/20 group-hover:text-primary transition-colors">{cat.id}</span>
                                <div className="space-y-0.5">
                                  <p className="text-lg font-headline font-bold text-white uppercase italic tracking-tight group-hover:text-primary transition-colors">{cat.label}</p>
                                  <p className="text-[10px] tracking-widest text-[#536878] uppercase font-light">{cat.description}</p>
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </button>
                          ))}
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div 
                          key="step-2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5 }}
                          className="space-y-4"
                        >
                          <button 
                            onClick={() => setStep(1)}
                            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase hover:text-primary transition-colors mb-8"
                          >
                            <ArrowRight className="w-3 h-3 rotate-180" /> Back to Categories
                          </button>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {selectedCategory?.topics.map((topic, idx) => (
                              <button
                                key={topic}
                                onClick={() => setStep(3)}
                                className="group p-6 rounded-2xl glass border-white/5 text-left transition-all hover:border-primary/20 hover:bg-primary/[0.02] flex items-center justify-between"
                              >
                                <span className="text-sm font-medium text-[#EAE0C8]/60 group-hover:text-white transition-colors">{topic}</span>
                                <ArrowRight className="w-3 h-3 text-white/0 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div 
                          key="step-3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5 }}
                          className="space-y-8"
                        >
                          <button 
                            onClick={() => setStep(2)}
                            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase hover:text-primary transition-colors"
                          >
                            <ArrowRight className="w-3 h-3 rotate-180" /> Change Topic
                          </button>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {ACTIONS.map((action) => (
                              <button
                                key={action.label}
                                onClick={() => handleExternalClick(action.href)}
                                className="group p-8 rounded-3xl glass border-white/5 transition-all hover:border-primary/30 hover:bg-primary/[0.03] text-left"
                              >
                                <div className="flex items-start justify-between mb-6">
                                  <div className="w-10 h-10 rounded-xl glass border-white/5 flex items-center justify-center text-primary/40 group-hover:text-primary transition-all">
                                    <action.icon className="w-5 h-5" />
                                  </div>
                                  <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-primary group-hover:scale-110 transition-all" />
                                </div>
                                <div className="space-y-1">
                                  <p className="text-xl font-headline font-black text-white italic uppercase">{action.label}</p>
                                  <p className="text-[10px] text-[#536878] uppercase font-bold tracking-widest">{action.sub}</p>
                                </div>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="pt-8 border-t border-white/5 opacity-20 text-center">
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
      
      {/* Background Blur Effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[-1] backdrop-blur-[15px] bg-black/40 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </section>
  );
}
