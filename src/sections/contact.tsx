"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence, LayoutGroup, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Clock, 
  MapPin, 
  Target,
  ArrowUpRight,
  X,
  Mail,
  Linkedin,
  MoveLeft,
  Sparkles,
  Command,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

const TOPICS = [
  { 
    id: "01", 
    label: "Building Products", 
    description: "From concept to market-ready ecosystem.",
    fullDescription: "Let's talk about product design, user experience, execution, systems thinking, and building products that solve real problems.",
    ctaLabel: "Build Together"
  },
  { 
    id: "02", 
    label: "Ventures & Startups", 
    description: "Discussing scaling and venture strategy.",
    fullDescription: "Exploring new ventures, ecosystem creation, business strategy, and long-term value building.",
    ctaLabel: "Schedule Discussion"
  },
  { 
    id: "03", 
    label: "Collaboration", 
    description: "Strategic partnerships and joint ventures.",
    fullDescription: "Open to partnerships, creative collaborations, product opportunities, and ambitious projects.",
    ctaLabel: "Collaborate"
  },
  { 
    id: "04", 
    label: "Ideas & Strategy", 
    description: "Deep dives into product architecture.",
    fullDescription: "Discussing systems, future technologies, digital ecosystems, product thinking, and institutional design.",
    ctaLabel: "Explore Ideas"
  },
  { 
    id: "05", 
    label: "Just Say Hello", 
    description: "General inquiries and professional greetings.",
    fullDescription: "No agenda needed. Sometimes great opportunities begin with a simple conversation.",
    ctaLabel: "Say Hello"
  },
];

export function Contact() {
  const [time, setTime] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  const selectedTopic = useMemo(() => 
    TOPICS.find(t => t.id === selectedTopicId), 
    [selectedTopicId]
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleTriggerMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isExpanded) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.08;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.08;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleTriggerMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const handleReset = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsExpanded(false);
    setSelectedTopicId(null);
  };

  return (
    <section id="contact" className="relative bg-background overflow-hidden py-48">
      {/* Background Ambience Integration */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-[#050505]/95 backdrop-blur-[12px] pointer-events-auto"
            onClick={() => handleReset()}
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.1),transparent_80%)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <motion.div
          animate={{ 
            opacity: isExpanded ? 0.05 : 1,
            scale: isExpanded ? 0.98 : 1,
            filter: isExpanded ? "blur(20px)" : "blur(0px)"
          }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"
        >
          {/* Narrative Branding */}
          <div className="space-y-16">
            <div className="space-y-8 max-w-lg">
              <p className="text-[10px] font-bold tracking-[0.8em] text-primary/30 uppercase">Institutional Contact</p>
              <h3 className="text-4xl md:text-6xl font-headline font-black text-white tracking-tighter leading-[1.05] italic uppercase">
                Let's Build <br />
                <span className="text-primary/20 not-italic">The Future.</span>
              </h3>
              <p className="text-lg md:text-xl text-[#EAE0C8]/40 font-light leading-relaxed">
                Open to discussions about products, ecosystems, ventures, and long-term systems architecture.
              </p>
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-6 glass px-8 py-5 rounded-2xl border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <div className="space-y-1">
                  <p className="text-[9px] font-bold tracking-[0.4em] text-primary/30 uppercase">Studio Location</p>
                  <p className="text-lg font-headline font-medium text-white tracking-widest uppercase">Bangalore, IN</p>
                </div>
              </div>
              <div className="flex items-center gap-6 glass px-8 py-5 rounded-2xl border-white/5">
                <Clock className="w-4 h-4 text-primary/20" />
                <div className="space-y-1">
                  <p className="text-[9px] font-bold tracking-[0.4em] text-primary/30 uppercase">Local Time</p>
                  <p className="text-lg font-mono font-medium text-white tracking-widest">{time}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Engagement Portal Trigger Area */}
          <div className="flex justify-center lg:justify-end">
            <LayoutGroup>
              <motion.div
                layout
                layoutId="portal-object"
                onMouseMove={handleTriggerMouseMove}
                onMouseLeave={handleTriggerMouseLeave}
                onClick={() => !isExpanded && setIsExpanded(true)}
                transition={{ 
                  type: "spring", 
                  stiffness: 70, 
                  damping: 20,
                  layout: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
                }}
                className={cn(
                  "relative cursor-pointer group flex items-center justify-center overflow-hidden",
                  isExpanded 
                    ? "fixed inset-0 m-auto z-[100] w-full max-w-[850px] h-[90vh] md:h-[750px] rounded-[3.5rem] bg-[#0A0A0A] border border-white/10 shadow-[0_100px_200px_-50px_rgba(0,0,0,1)]" 
                    : "w-72 h-72 md:w-80 md:h-80 rounded-full glass border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]"
                )}
              >
                {/* Internal Refractive Artifact Rendering */}
                {!isExpanded && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div 
                      style={{ x: springX, y: springY }}
                      animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.15, 0.1] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.4),transparent_60%)] blur-[60px]"
                    />
                    <motion.div 
                      style={{ x: springX, y: springY }}
                      className="w-48 h-48 rounded-full border border-primary/20 flex items-center justify-center relative overflow-hidden"
                    >
                       <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent" />
                       <Sparkles className="w-10 h-10 text-primary/40 group-hover:scale-110 group-hover:text-primary transition-all duration-700" />
                    </motion.div>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {!isExpanded ? (
                    <motion.div 
                      key="portal-label"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                      className="relative z-10 text-center space-y-4 px-10"
                    >
                      <span className="text-[10px] font-bold tracking-[1em] text-primary/40 uppercase">Dialogue</span>
                      <h4 className="text-xl md:text-2xl font-headline font-black text-white tracking-[0.3em] uppercase leading-tight italic">
                        Enter The <br /> Studio
                      </h4>
                      <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent mx-auto mt-4 group-hover:h-12 transition-all duration-700" />
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="studio-workspace"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full flex flex-col p-12 md:p-20 relative overflow-hidden"
                    >
                      {/* Close Control */}
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleReset(); }} 
                        className="absolute top-8 right-8 z-50 p-4 rounded-full glass border-white/5 hover:border-white/20 hover:rotate-90 hover:bg-white/5 transition-all duration-700 group/close"
                      >
                        <X className="w-6 h-6 text-[#536878] group-hover/close:text-white" />
                      </button>

                      {/* Content Stagger Logic */}
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <AnimatePresence mode="wait">
                          {!selectedTopicId ? (
                            <motion.div 
                              key="menu-view"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                              className="space-y-16"
                            >
                              <div className="space-y-6">
                                <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">Founder Dialogue</p>
                                <h4 className="text-4xl md:text-6xl font-headline font-black text-white tracking-tighter italic">
                                  Select a category <br />
                                  <span className="text-[#536878] not-italic opacity-40">for discussion.</span>
                                </h4>
                              </div>

                              <div className="grid grid-cols-1 gap-3">
                                {TOPICS.map((topic, i) => (
                                  <motion.button
                                    key={topic.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    onClick={(e) => { e.stopPropagation(); setSelectedTopicId(topic.id); }}
                                    className="group relative flex items-center justify-between p-7 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-primary/20 hover:bg-white/[0.03] transition-all duration-500 text-left"
                                  >
                                    <div className="flex items-center gap-8">
                                      <span className="text-[11px] font-mono font-bold text-primary/20 group-hover:text-primary transition-colors">{topic.id}</span>
                                      <div className="space-y-1">
                                        <p className="text-xl font-bold text-white/80 group-hover:text-white transition-all">{topic.label}</p>
                                        <p className="text-[10px] tracking-widest text-[#536878] uppercase">{topic.description}</p>
                                      </div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full glass border-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500">
                                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                                    </div>
                                  </motion.button>
                                ))}
                              </div>
                            </motion.div>
                          ) : (
                            <motion.div 
                              key="context-view"
                              initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              className="space-y-12"
                            >
                              <div className="space-y-8">
                                <button 
                                  onClick={(e) => { e.stopPropagation(); setSelectedTopicId(null); }}
                                  className="group flex items-center gap-4 text-[11px] font-bold tracking-[0.5em] text-primary/40 hover:text-primary uppercase transition-all"
                                >
                                  <MoveLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> 
                                  Back to Studio
                                </button>

                                <div className="space-y-4">
                                  <p className="text-[9px] font-bold tracking-[0.8em] text-primary/30 uppercase">Discussion Workspace</p>
                                  <h4 className="text-4xl md:text-6xl font-headline font-black text-white tracking-tighter italic uppercase leading-none">
                                    {selectedTopic?.label}
                                  </h4>
                                  <p className="text-lg md:text-xl text-[#EAE0C8]/50 font-light leading-relaxed max-w-xl">
                                    {selectedTopic?.fullDescription}
                                  </p>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                  { label: "Email", icon: Mail, sub: "Direct partnership inquiry.", href: `mailto:syedshuaib2429@gmail.com?subject=${selectedTopic?.label}` },
                                  { label: "LinkedIn", icon: Linkedin, sub: "Professional networking.", href: "https://www.linkedin.com/in/syedshuaib485/" },
                                  { label: selectedTopic?.ctaLabel, icon: Activity, sub: "System action required.", href: "mailto:syedshuaib2429@gmail.com" },
                                  { label: "Studio Hub", icon: Command, sub: "Institutional resources.", href: "https://axora.in" }
                                ].map((action, i) => (
                                  <motion.a
                                    key={action.label}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.08) }}
                                    href={action.href}
                                    target={action.label !== "Email" ? "_blank" : undefined}
                                    className="group flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-500"
                                  >
                                    <div className="flex items-center gap-6">
                                      <div className="w-12 h-12 rounded-2xl glass border-white/5 flex items-center justify-center text-primary/30 group-hover:text-primary transition-all duration-500">
                                        <action.icon className="w-5 h-5" />
                                      </div>
                                      <div className="space-y-0.5">
                                        <p className="text-lg font-headline font-bold text-white uppercase italic">{action.label}</p>
                                        <p className="text-[9px] tracking-widest text-[#536878] uppercase">{action.sub}</p>
                                      </div>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-primary/20 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                                  </motion.a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Studio Interaction Footer */}
                        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
                           <div className="flex items-center gap-8">
                              <div className="space-y-1">
                                <p className="text-[8px] font-bold tracking-[0.4em] text-primary uppercase">Status</p>
                                <p className="text-[10px] text-white font-medium">AVAILABLE FOR DISCUSSION</p>
                              </div>
                              <div className="w-px h-6 bg-white/10 hidden md:block" />
                              <div className="space-y-1">
                                <p className="text-[8px] font-bold tracking-[0.4em] text-primary uppercase">Response</p>
                                <p className="text-[10px] text-white font-medium">USUALLY WITHIN 24H</p>
                              </div>
                           </div>
                           <p className="text-[9px] tracking-[0.2em] text-[#EAE0C8] uppercase font-light text-center md:text-right">
                             Meaningful conversations create meaningful outcomes.
                           </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </LayoutGroup>
          </div>
        </motion.div>
      </div>

      {/* Decorative Structural Baseline */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-primary/10 to-transparent" />
    </section>
  );
}
