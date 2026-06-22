
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Clock, 
  Target, 
  Cpu, 
  Boxes, 
  Sparkles, 
  ChevronLeft,
  Calendar,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * THE STRATEGY ROOM
 * A cinematic, high-fidelity interaction experience.
 * Replaces the traditional contact form with a private studio dialogue.
 */

type ViewState = "entrance" | "refinement" | "communication" | "transition";

const PORTALS = [
  {
    id: "systems",
    title: "BUILD SYSTEMS",
    icon: Cpu,
    desc: "Designing scalable digital ecosystems and long-term product foundations.",
    options: [
      { title: "Startup Product", desc: "Launching zero-to-one digital foundations." },
      { title: "SaaS Platform", desc: "Engineering multi-tenant cloud ecosystems." },
      { title: "Student Ecosystem", desc: "Architecting academic management platforms." },
      { title: "Internal Tool", desc: "Custom software for high-efficiency workflows." },
      { title: "Institutional Architecture", desc: "Large-scale enterprise systems design." }
    ]
  },
  {
    id: "ventures",
    title: "VENTURE IDEAS",
    icon: Boxes,
    desc: "Exploring zero-to-one opportunities and future market ecosystems.",
    options: [
      { title: "Ecosystem Creation", desc: "Designing interconnected market platforms." },
      { title: "Validation Strategy", desc: "Market-testing core product hypotheses." },
      { title: "Funding Readiness", desc: "Preparing technical and business foundations." },
      { title: "Joint Ventures", desc: "Strategic co-building of digital products." },
      { title: "Market Shifts", desc: "Identifying and capitalizing on industry evolution." }
    ]
  },
  {
    id: "collab",
    title: "COLLABORATION",
    icon: Target,
    desc: "Strategic partnerships focused on high-intent product building.",
    options: [
      { title: "Joint Projects", desc: "Shared execution on ambitious build goals." },
      { title: "Strategic Partnership", desc: "Long-term product-led growth alliances." },
      { title: "Creative Research", desc: "Deep-dives into human-centered design." },
      { title: "Product Opportunity", desc: "Identifying high-potential market gaps." },
      { title: "Expert Consulting", desc: "Strategic architecture and systems review." }
    ]
  },
  {
    id: "dialogue",
    title: "OPEN DIALOGUE",
    icon: MessageSquare,
    desc: "A direct channel for meaningful inquiries and networking.",
    options: [
      { title: "General Inquiry", desc: "Direct channel for primary questions." },
      { title: "Portfolio Review", desc: "Deep-dives into existing product work." },
      { title: "Networking", desc: "Connecting within the founder ecosystem." },
      { title: "Knowledge Exchange", desc: "Trading insights on architecture and scale." },
      { title: "Just Say Hello", desc: "Professional greetings and connections." }
    ]
  }
];

// Configuration for scheduling destination
const SCHEDULE_URL = "https://calendly.com/your-link";

const ACTIONS = [
  { label: "DIRECT DIALOGUE", sub: "Direct communication for focused discussions.", href: "mailto:syedshuaib2429@gmail.com", icon: Mail },
  { label: "PROFESSIONAL NETWORK", sub: "Connect through my institutional network.", href: "https://www.linkedin.com/in/syedshuaib485/", icon: Linkedin },
  { label: "BUILD TOGETHER", sub: "For founders, builders, and meaningful collaborations.", href: "mailto:syedshuaib2429@gmail.com?subject=Build Together", icon: Sparkles },
  { 
    label: "SCHEDULE DISCUSSION", 
    sub: "Book a dedicated time for a focused conversation about products, ventures, ecosystems, collaboration, or strategic opportunities.", 
    href: SCHEDULE_URL, 
    icon: Calendar 
  },
];

export function Contact() {
  const [view, setView] = useState<ViewState>("entrance");
  const [selectedPortal, setSelectedPortal] = useState<typeof PORTALS[0] | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [transitionMsg, setTransitionMsg] = useState("");

  const msgs = ["Preparing Communication...", "Analyzing Context...", "Opening Dialogue...", "Initializing Secure Channel..."];

  const handleAction = (action: typeof ACTIONS[0]) => {
    if (action.label === "SCHEDULE DISCUSSION") {
      setTransitionMsg("Preparing Discussion...");
      setView("transition");
      
      // Choreographed sequence for scheduling
      setTimeout(() => setTransitionMsg("Reviewing Availability..."), 400);
      setTimeout(() => setTransitionMsg("Opening Calendar..."), 800);
      
      setTimeout(() => {
        window.open(action.href, '_blank');
        setView("entrance");
        setSelectedPortal(null);
        setSelectedOption(null);
      }, 1200);
    } else {
      setTransitionMsg(msgs[Math.floor(Math.random() * msgs.length)]);
      setView("transition");
      setTimeout(() => {
        window.open(action.href, '_blank');
        setView("entrance");
        setSelectedPortal(null);
        setSelectedOption(null);
      }, 1200);
    }
  };

  return (
    <section id="contact" className="relative bg-[#050505] overflow-hidden min-h-screen py-24 md:py-32 px-6 flex flex-col justify-center">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <LayoutGroup>
          <AnimatePresence mode="wait">
            {view === "entrance" && (
              <motion.div 
                key="entrance"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                className="space-y-16 md:space-y-24"
              >
                <div className="text-center space-y-6 md:space-y-8 max-w-3xl mx-auto">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="space-y-4"
                  >
                    <p className="text-[9px] md:text-[10px] font-bold tracking-[0.6em] md:tracking-[0.8em] text-primary/30 uppercase">The Strategy Room</p>
                    <h2 className="text-4xl md:text-7xl font-headline font-black tracking-tighter text-white uppercase italic">
                      What Shall <br />We Build?
                    </h2>
                    <p className="text-lg md:text-xl text-[#EAE0C8]/40 font-light leading-relaxed">
                      Enter a private dialogue space designed for systems thinking, <br className="hidden md:block" />
                      product architecture, and long-term ventures.
                    </p>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {PORTALS.map((portal) => (
                    <PortalCard 
                      key={portal.id} 
                      portal={portal} 
                      onClick={() => {
                        setSelectedPortal(portal);
                        setView("refinement");
                      }} 
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {view === "refinement" && selectedPortal && (
              <motion.div 
                key="refinement"
                initial={{ opacity: 0, scale: 1.05, filter: "blur(30px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-12 md:space-y-24"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-8 md:pb-12 gap-8">
                  <div className="space-y-4">
                    <button 
                      onClick={() => setView("entrance")}
                      className="group flex items-center gap-2 text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-primary/30 uppercase hover:text-white transition-colors"
                    >
                      <ChevronLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> 
                      Return to Portals
                    </button>
                    <h3 className="text-3xl md:text-6xl font-headline font-black text-white italic uppercase tracking-tight">
                      {selectedPortal.title}
                    </h3>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-primary/30 uppercase mb-1">Context</p>
                    <p className="text-sm text-white/40 italic max-w-xs">{selectedPortal.desc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
                  {selectedPortal.options.map((opt, i) => (
                    <motion.button
                      key={opt.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8,
                        delay: i * 0.08,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      onClick={() => {
                        setSelectedOption(opt.title);
                        setView("communication");
                      }}
                      className="group relative aspect-[1.2/1] md:aspect-square rounded-[2.5rem] md:rounded-[3.5rem] glass border-white/5 text-left p-10 md:p-16 flex flex-col justify-between overflow-hidden transition-all duration-700 ease-premium hover:border-primary/30 hover:bg-primary/[0.03] hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)]"
                    >
                      {/* Background Soft Glow */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                      
                      {/* TOP LEFT: INDEX */}
                      <div className="relative z-10">
                        <span className="text-[10px] md:text-[12px] font-mono font-bold tracking-[0.4em] text-primary/20">
                          0{i+1}
                        </span>
                      </div>

                      {/* CENTER: CONTENT */}
                      <div className="relative z-10 space-y-4 md:space-y-6">
                        <h4 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black text-white italic uppercase tracking-tighter leading-none group-hover:text-primary transition-all duration-700 group-hover:-translate-y-2">
                          {opt.title}
                        </h4>
                        <p className="text-xs md:text-sm text-[#EAE0C8]/30 font-light leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                          {opt.desc}
                        </p>
                      </div>

                      {/* BOTTOM RIGHT: ARROW */}
                      <div className="relative z-10 flex justify-end">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass border-white/5 flex items-center justify-center text-primary/40 group-hover:text-primary group-hover:bg-primary/[0.05] group-hover:border-primary/20 transition-all duration-700 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1">
                          <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                      </div>

                      {/* Interior Decorative Accent */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {view === "communication" && (
              <motion.div 
                key="communication"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, filter: "blur(40px)" }}
                className="space-y-12 md:space-y-16"
              >
                <div className="text-center space-y-4 md:space-y-6 max-w-2xl mx-auto">
                  <button 
                    onClick={() => setView("refinement")}
                    className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-primary/30 uppercase hover:text-white transition-colors"
                  >
                    ← Adjust Context
                  </button>
                  <h3 className="text-3xl md:text-6xl font-headline font-black text-white italic uppercase tracking-tight">
                    Select Channel
                  </h3>
                  <p className="text-base md:text-lg text-[#EAE0C8]/40 font-light italic px-4">
                    Initiating dialogue for <span className="text-primary font-medium">{selectedOption}</span>.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[1150px] mx-auto">
                  {ACTIONS.map((action, i) => (
                    <motion.button
                      key={action.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => handleAction(action)}
                      className="group relative p-6 md:p-9 rounded-[1.5rem] md:rounded-[2.5rem] glass border-white/5 text-left overflow-hidden flex flex-col gap-5 md:gap-7 hover:border-primary/25 hover:bg-primary/[0.02] hover:shadow-[0_0_40px_-10px_rgba(234,224,200,0.08)] transition-all duration-700"
                    >
                      <div className="flex justify-between items-start">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl glass border-white/10 flex items-center justify-center text-primary/40 group-hover:text-primary group-hover:scale-105 transition-all duration-500">
                          <action.icon className="w-5 h-5 md:w-7 md:h-7" />
                        </div>
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary/0 group-hover:text-primary group-hover:animate-pulse transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xl md:text-2xl font-headline font-black text-white italic uppercase tracking-tight">{action.label}</p>
                        <p className="text-xs md:text-sm text-[#EAE0C8]/30 font-light leading-snug">{action.sub}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="pt-12 text-center opacity-20">
                  <p className="text-[9px] font-bold tracking-[0.8em] md:tracking-[1em] text-white uppercase">Meaningful Partnerships Begin Here</p>
                </div>
              </motion.div>
            )}

            {view === "transition" && (
              <motion.div 
                key="transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-[60px] flex flex-col items-center justify-center p-6"
              >
                <div className="space-y-8 text-center relative w-full">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-primary/20 blur-[80px] md:blur-[100px] rounded-full"
                  />
                  <p className="relative text-2xl md:text-5xl font-headline font-light text-white tracking-[0.1em] italic uppercase">
                    {transitionMsg}
                  </p>
                  <div className="flex items-center justify-center gap-4 relative">
                    <div className="h-px w-8 md:w-12 bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="h-px w-8 md:w-12 bg-white/20" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
}

function PortalCard({ portal, onClick }: { portal: typeof PORTALS[0], onClick: () => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 20);
    mouseY.set(y * 20);
  };

  return (
    <motion.button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="group relative aspect-square md:aspect-[3/4] rounded-[2rem] md:rounded-[3.5rem] glass border-white/5 overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 text-center hover:border-primary/40 transition-all duration-1000"
    >
      {/* Background Refractive Layers */}
      <motion.div 
        style={{ x: dx, y: dy }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" 
      />
      
      <motion.div 
        style={{ x: dx, y: dy, rotate: dx }}
        className="relative z-10 space-y-4 md:space-y-8 flex flex-col items-center"
      >
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl glass border-white/10 flex items-center justify-center text-primary/40 group-hover:text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000">
          <portal.icon className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        
        <div className="space-y-2 md:space-y-4">
          <h4 className="text-xl md:text-3xl font-headline font-black text-white tracking-tighter uppercase italic leading-none group-hover:text-primary transition-colors">
            {portal.title}
          </h4>
          <p className="hidden md:block text-xs text-[#EAE0C8]/30 font-light leading-relaxed px-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
            {portal.desc}
          </p>
        </div>

        <div className="pt-2 md:pt-4 opacity-20 group-hover:opacity-100 transition-all duration-700">
          <div className="w-8 md:w-10 h-px bg-primary/40" />
        </div>
      </motion.div>

      {/* Decorative Corner Details */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 w-2 h-2 border-t border-l border-white/10 group-hover:border-primary/40 transition-colors" />
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-2 h-2 border-b border-r border-white/10 group-hover:border-primary/40 transition-colors" />
    </motion.button>
  );
}
