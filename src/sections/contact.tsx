
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence, LayoutGroup, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Clock, 
  MapPin, 
  ArrowUpRight,
  X,
  Mail,
  Linkedin,
  MoveLeft,
  Sparkles,
  Zap,
  Target,
  Cpu,
  Layers,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

const TOPICS = [
  { 
    id: "01", 
    label: "Build Products", 
    description: "Design systems, ventures, and scalable experiences.",
    fullDescription: "Deep dives into product design, execution strategies, and building digital artifacts that solve categories of problems.",
    ctaLabel: "Build Together"
  },
  { 
    id: "02", 
    label: "Ventures", 
    description: "Explore startup ideas and ecosystem opportunities.",
    fullDescription: "Discussing scaling, venture building, business model architecture, and long-term value compounding.",
    ctaLabel: "Schedule Discussion"
  },
  { 
    id: "03", 
    label: "Collaboration", 
    description: "Discuss meaningful partnerships.",
    fullDescription: "Open to strategic joint ventures, creative partnerships, and high-impact project collaborations.",
    ctaLabel: "Collaborate"
  },
  { 
    id: "04", 
    label: "Ideas", 
    description: "Exchange thoughts on products and future systems.",
    fullDescription: "A no-agenda dialogue about technology trends, product-led growth, and the future of human-centered systems.",
    ctaLabel: "Say Hello"
  },
];

const PRINCIPLES = [
  "BUILD FOR DECADES",
  "SYSTEMS OVER FEATURES",
  "CLARITY OVER COMPLEXITY",
  "LONG TERM THINKING"
];

const STATUS_ITEMS = [
  "CURRENTLY BUILDING: AXORA",
  "CURRENTLY DESIGNING: REVERIE",
  "CURRENTLY RESEARCHING: DIGITAL ECOSYSTEMS"
];

const TRANSITION_MESSAGES = [
  "PREPARING THE CONVERSATION",
  "OPENING THE STUDIO",
  "CONNECTING IDEAS",
  "INITIALIZING DIALOGUE"
];

export function Contact() {
  const [time, setTime] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);

  // Time & Status Logic
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
    const tInterval = setInterval(updateTime, 1000);
    const sInterval = setInterval(() => setStatusIndex(prev => (prev + 1) % STATUS_ITEMS.length), 4000);
    return () => { clearInterval(tInterval); clearInterval(sInterval); };
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  function handleTriggerMouseMove(e: React.MouseEvent) {
    if (isExpanded) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.15;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.15;
    mouseX.set(x);
    mouseY.set(y);
  }

  const handleExternalNav = (href: string) => {
    setIsExiting(true);
    setTimeout(() => {
      window.open(href, '_blank');
      setIsExiting(false);
    }, 1200);
  };

  const selectedTopic = useMemo(() => TOPICS.find(t => t.id === selectedTopicId), [selectedTopicId]);

  return (
    <section id="contact" className="relative bg-background overflow-hidden py-64">
      {/* 1. INSTITUTIONAL BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      
      {/* Floating Principles (Filling Dead Space) */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {PRINCIPLES.map((p, i) => (
          <motion.p
            key={p}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.03 }}
            className="absolute text-[10vw] font-headline font-black tracking-tighter text-white uppercase whitespace-nowrap"
            style={{ 
              top: `${15 + (i * 20)}%`, 
              left: i % 2 === 0 ? '-5%' : 'auto',
              right: i % 2 !== 0 ? '-5%' : 'auto'
            }}
          >
            {p}
          </motion.p>
        ))}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-[25px] flex items-center justify-center p-6"
            onClick={() => { setIsExpanded(false); setSelectedTopicId(null); }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.1),transparent_80%)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExiting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-[#050505] flex flex-col items-center justify-center"
          >
            <div className="space-y-8 text-center relative z-10">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                <Sparkles className="w-8 h-8 text-primary/40 mx-auto" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-headline font-light text-white tracking-[0.3em] uppercase italic">
                {TRANSITION_MESSAGES[Math.floor(Math.random() * TRANSITION_MESSAGES.length)]}
              </h2>
              <div className="h-px w-12 bg-primary/20 mx-auto" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10 flex flex-col items-center gap-32">
        {/* TOP METADATA ROW */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/5 pb-12 opacity-40">
           <div className="flex items-center gap-8">
             <div className="space-y-1">
               <p className="text-[8px] font-bold tracking-[0.5em] text-primary uppercase">Studio Hub</p>
               <p className="text-[10px] text-white font-medium">BANGALORE, IN • {time}</p>
             </div>
             <div className="w-px h-6 bg-white/10" />
             <div className="space-y-1">
               <p className="text-[8px] font-bold tracking-[0.5em] text-primary uppercase">Response Time</p>
               <p className="text-[10px] text-white font-medium">USUALLY WITHIN 24H</p>
             </div>
           </div>

           <AnimatePresence mode="wait">
             <motion.p
               key={statusIndex}
               initial={{ opacity: 0, y: 5 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -5 }}
               className="text-[9px] font-bold tracking-[0.4em] text-primary uppercase italic"
             >
               {STATUS_ITEMS[statusIndex]}
             </motion.p>
           </AnimatePresence>
        </div>

        {/* INTERACTION CORE: THE ORB */}
        <LayoutGroup>
          <motion.div
            layout
            layoutId="studio-portal"
            onMouseMove={handleTriggerMouseMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
            onClick={() => !isExpanded && setIsExpanded(true)}
            transition={{ 
              type: "spring", 
              stiffness: 60, 
              damping: 20,
              layout: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
            }}
            className={cn(
              "relative cursor-pointer group flex items-center justify-center overflow-hidden",
              isExpanded 
                ? "fixed inset-0 m-auto z-[200] w-full max-w-[900px] h-[90vh] md:h-[800px] rounded-[4rem] bg-[#0A0A0A] border border-white/10 shadow-[0_100px_200px_-50px_rgba(0,0,0,1)]" 
                : "w-80 h-80 rounded-full glass border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]"
            )}
          >
            {/* THE LIVING ORB COMPONENTS (Visible only in closed state) */}
            <AnimatePresence>
              {!isExpanded && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0, scale: 2, filter: "blur(40px)" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Outer Rotating Ring */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[110%] h-[110%] border border-dashed border-primary/10 rounded-full"
                  />
                  
                  {/* Glass Shell */}
                  <div className="absolute inset-4 rounded-full border border-white/5 glass shadow-[inset_0_0_40px_rgba(255,255,255,0.02)]" />

                  {/* Energy Core */}
                  <motion.div 
                    style={{ x: springX, y: springY }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-48 h-48 bg-primary/40 blur-[80px] rounded-full"
                  />

                  {/* Core Content */}
                  <div className="relative z-10 text-center space-y-4">
                     <span className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">Open Portal</span>
                     <h4 className="text-2xl font-headline font-black text-white tracking-[0.2em] uppercase italic leading-tight">
                       ENTER THE <br /> STUDIO
                     </h4>
                     <div className="w-px h-10 bg-gradient-to-b from-primary/30 to-transparent mx-auto group-hover:h-14 transition-all duration-700" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* THE STUDIO WORKSPACE (Revealed upon expansion) */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full p-12 md:p-24 relative overflow-hidden flex flex-col justify-between"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Glass Close Control */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsExpanded(false); setSelectedTopicId(null); }}
                    className="absolute top-10 right-10 z-50 p-5 rounded-full glass border-white/5 hover:border-white/20 transition-all duration-700 hover:rotate-90 group/close"
                  >
                    <X className="w-6 h-6 text-white/40 group-hover/close:text-white" />
                  </button>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      {!selectedTopicId ? (
                        <motion.div 
                          key="topic-selection"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -50, filter: "blur(20px)" }}
                          className="space-y-16"
                        >
                          <div className="space-y-6">
                            <div className="flex items-center gap-4 text-primary/40">
                              <span className="text-[10px] font-bold tracking-[0.6em] uppercase">01</span>
                              <div className="h-px w-8 bg-current opacity-20" />
                              <span className="text-[10px] font-bold tracking-[0.6em] uppercase">STUDIO WORKSPACE</span>
                            </div>
                            <h3 className="text-5xl md:text-7xl font-headline font-black text-white tracking-tighter uppercase italic leading-none">
                              Select a category <br />
                              <span className="text-primary/20 not-italic">for discussion.</span>
                            </h3>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {TOPICS.map((topic, i) => (
                              <motion.button
                                key={topic.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setSelectedTopicId(topic.id)}
                                className="group relative flex flex-col justify-between p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-primary/30 hover:bg-white/[0.03] transition-all duration-500 text-left min-h-[180px]"
                              >
                                <div className="flex justify-between items-start">
                                  <span className="text-[11px] font-mono font-bold text-primary/20 group-hover:text-primary transition-colors">{topic.id}</span>
                                  <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <div className="space-y-2">
                                  <p className="text-2xl font-headline font-black text-white uppercase italic">{topic.label}</p>
                                  <p className="text-[10px] tracking-widest text-[#536878] uppercase">{topic.description}</p>
                                </div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="topic-briefing"
                          initial={{ opacity: 0, x: 50, filter: "blur(20px)" }}
                          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="space-y-16"
                        >
                          <div className="space-y-10">
                            <button 
                              onClick={() => setSelectedTopicId(null)}
                              className="group flex items-center gap-4 text-[10px] font-bold tracking-[0.5em] text-primary/40 hover:text-primary uppercase transition-all"
                            >
                              <MoveLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> 
                              Back to categories
                            </button>

                            <div className="space-y-6">
                              <div className="flex items-center gap-4 text-primary/40">
                                <span className="text-[10px] font-bold tracking-[0.6em] uppercase">DISCUSSION BRIEFING</span>
                              </div>
                              <h3 className="text-5xl md:text-7xl font-headline font-black text-white tracking-tighter uppercase italic leading-[0.9]">
                                {selectedTopic?.label}
                              </h3>
                              <p className="text-xl md:text-2xl text-[#EAE0C8]/50 font-light leading-relaxed max-w-2xl">
                                {selectedTopic?.fullDescription}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-3 max-w-2xl">
                             {[
                               { label: "Direct Email", icon: Mail, sub: "Direct communication for partnerships.", href: `mailto:syedshuaib2429@gmail.com?subject=${selectedTopic?.label}` },
                               { label: "LinkedIn", icon: Linkedin, sub: "Professional dialogue.", href: "https://www.linkedin.com/in/syedshuaib485/" },
                               { label: selectedTopic?.ctaLabel, icon: Activity, sub: "Institutional action required.", href: "mailto:syedshuaib2429@gmail.com" }
                             ].map((action, i) => (
                               <motion.button
                                 key={action.label}
                                 initial={{ opacity: 0, y: 15 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ delay: 0.3 + (i * 0.1) }}
                                 onClick={() => handleExternalNav(action.href)}
                                 className="group flex items-center justify-between p-7 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-500 w-full text-left"
                               >
                                 <div className="flex items-center gap-8">
                                   <div className="w-12 h-12 rounded-2xl glass border-white/5 flex items-center justify-center text-primary/30 group-hover:text-primary transition-all">
                                      <action.icon className="w-5 h-5" />
                                   </div>
                                   <div className="space-y-1">
                                      <p className="text-xl font-headline font-bold text-white uppercase italic">{action.label}</p>
                                      <p className="text-[9px] tracking-widest text-[#536878] uppercase">{action.sub}</p>
                                   </div>
                                 </div>
                                 <ArrowRight className="w-5 h-5 text-white/10 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                               </motion.button>
                             ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="pt-12 border-t border-white/5 flex justify-between items-center opacity-30">
                       <p className="text-[9px] tracking-[0.3em] text-[#EAE0C8] uppercase font-bold">
                         Meaningful conversations create meaningful outcomes.
                       </p>
                       <div className="flex items-center gap-4 text-[9px] font-bold tracking-[0.5em] text-primary uppercase">
                         <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                         Studio Live
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* BOTTOM PHILOSOPHY ROW */}
        <div className="w-full text-center space-y-8 opacity-20">
           <div className="h-px w-24 bg-primary/20 mx-auto" />
           <p className="text-xl md:text-3xl font-headline font-light text-white tracking-tight italic">
             "I build products designed for long-term impact."
           </p>
           <p className="text-[10px] font-bold tracking-[1em] text-white uppercase">Final Chapter</p>
        </div>
      </div>
    </section>
  );
}
