
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Target, 
  Cpu, 
  Boxes, 
  Sparkles, 
  ChevronLeft,
  Calendar,
  MessageSquare,
  Clock,
  MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * THE STRATEGY ROOM: FOUNDER COMMAND CENTER
 * Redesigned for maximum institutional value and luxury editorial depth.
 * Aesthetic: Private Strategy Room, High-End Product Laboratory.
 */

type ViewState = "entrance" | "refinement" | "communication" | "transition";

const PORTALS = [
  {
    id: "01",
    title: "BUILD SYSTEMS",
    icon: Cpu,
    mission: "Architecting scalable digital foundations.",
    desc: "Designing long-term product ecosystems focused on performance and impact.",
    options: [
      { title: "Startup Product", desc: "Launching zero-to-one digital foundations." },
      { title: "SaaS Platform", desc: "Engineering multi-tenant cloud ecosystems." },
      { title: "Student Ecosystem", desc: "Architecting academic management platforms." },
      { title: "Internal Tool", desc: "Custom software for high-efficiency workflows." },
      { title: "Institutional Architecture", desc: "Large-scale enterprise systems design." }
    ]
  },
  {
    id: "02",
    title: "VENTURE IDEAS",
    icon: Boxes,
    mission: "Exploring future market ecosystems.",
    desc: "Validating zero-to-one opportunities and strategic market shifts.",
    options: [
      { title: "Ecosystem Creation", desc: "Designing interconnected market platforms." },
      { title: "Validation Strategy", desc: "Market-testing core product hypotheses." },
      { title: "Funding Readiness", desc: "Preparing technical and business foundations." },
      { title: "Joint Ventures", desc: "Strategic co-building of digital products." },
      { title: "Market Shifts", desc: "Identifying and capitalizing on industry evolution." }
    ]
  },
  {
    id: "03",
    title: "COLLABORATION",
    icon: Target,
    mission: "Strategic product partnerships.",
    desc: "High-intent building and creative research for ambitious goals.",
    options: [
      { title: "Joint Projects", desc: "Shared execution on ambitious build goals." },
      { title: "Strategic Partnership", desc: "Long-term product-led growth alliances." },
      { title: "Creative Research", desc: "Deep-dives into human-centered design." },
      { title: "Product Opportunity", desc: "Identifying high-potential market gaps." },
      { title: "Expert Consulting", desc: "Strategic architecture and systems review." }
    ]
  },
  {
    id: "04",
    title: "OPEN DIALOGUE",
    icon: MessageSquare,
    mission: "Direct channels for meaningful inquiry.",
    desc: "Founder networking, portfolio reviews, and knowledge exchange.",
    options: [
      { title: "General Inquiry", desc: "Direct channel for primary questions." },
      { title: "Portfolio Review", desc: "Deep-dives into existing product work." },
      { title: "Networking", desc: "Connecting within the founder ecosystem." },
      { title: "Knowledge Exchange", desc: "Trading insights on architecture and scale." },
      { title: "Just Say Hello", desc: "Professional greetings and connections." }
    ]
  }
];

const SCHEDULE_URL = "https://calendly.com/your-link";

const ACTIONS = [
  { label: "DIRECT DIALOGUE", href: "mailto:syedshuaib2429@gmail.com", icon: Mail },
  { label: "PROFESSIONAL NETWORK", href: "https://www.linkedin.com/in/syedshuaib485/", icon: Linkedin },
  { label: "BUILD TOGETHER", href: "mailto:syedshuaib2429@gmail.com?subject=Build Together", icon: Sparkles },
  { label: "SCHEDULE DISCUSSION", href: SCHEDULE_URL, icon: Calendar },
];

const LUXURY_EASE = [0.22, 1, 0.36, 1];

export function Contact() {
  const [view, setView] = useState<ViewState>("entrance");
  const [selectedPortal, setSelectedPortal] = useState<typeof PORTALS[0] | null>(null);
  const [transitionMsg, setTransitionMsg] = useState("");
  const [currentTime, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  const handleAction = (action: typeof ACTIONS[0]) => {
    setTransitionMsg("Initializing Secure Channel...");
    setView("transition");
    setTimeout(() => {
      window.open(action.href, '_blank');
      setView("entrance");
      setSelectedPortal(null);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-[#030303] overflow-hidden min-h-screen pt-80 pb-64 px-6">
      {/* 00. ATMOSPHERIC ARCHITECTURE */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.03),transparent_75%)] pointer-events-none" />
      <div className="fixed inset-0 grain-overlay opacity-[0.012] pointer-events-none" />
      
      {/* Blueprint Guides */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.04] pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/[0.04] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <LayoutGroup>
          <AnimatePresence mode="wait">
            {view === "entrance" && (
              <motion.div 
                key="entrance"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(40px)" }}
                className="space-y-48 md:space-y-64"
              >
                {/* Header: Editorial Composition */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
                  <div className="lg:col-span-8 space-y-12">
                    <div className="space-y-6">
                      <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 0.3, x: 0 }}
                        className="text-[10px] font-bold tracking-[0.8em] text-white uppercase"
                      >
                        The Strategy Room
                      </motion.p>
                      <h2 className="text-5xl md:text-8xl lg:text-[clamp(4.5rem,10vw,11.5rem)] font-headline font-[900] tracking-[-0.05em] text-white uppercase leading-[0.85]">
                        What Shall <br />
                        <span className="text-[#EAE0C8] italic">We Build?</span>
                      </h2>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-4 pb-4">
                    <div className="flex flex-col gap-10">
                       <div className="h-px w-20 bg-[#EAE0C8]/20" />
                       <p className="text-xl md:text-2xl text-white/30 font-light leading-relaxed max-w-sm">
                         Enter a private environment for strategic product architecture and venture development.
                       </p>
                    </div>
                  </div>
                </div>

                {/* Strategic Pillars: Deep Horizontal Layout */}
                <div className="space-y-0 border-t border-white/[0.06]">
                  {PORTALS.map((portal, i) => (
                    <StrategicPillar 
                      key={portal.id} 
                      portal={portal}
                      index={i}
                      onClick={() => {
                        setSelectedPortal(portal);
                        setView("refinement");
                      }} 
                    />
                  ))}
                </div>

                {/* Institutional Footer Info */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-32 opacity-20">
                   <div className="flex items-center gap-6">
                      <MapPin className="w-3.5 h-3.5 text-[#EAE0C8]" />
                      <span className="text-[10px] font-bold tracking-[0.6em] text-white uppercase">Bangalore, IN</span>
                   </div>
                   <div className="flex items-center gap-6">
                      <Clock className="w-3.5 h-3.5 text-[#EAE0C8]" />
                      <span className="text-[10px] font-bold tracking-[0.6em] text-white uppercase">{currentTime} IST</span>
                   </div>
                   <div className="h-px w-32 bg-white/40 hidden md:block" />
                </div>
              </motion.div>
            )}

            {view === "refinement" && selectedPortal && (
              <motion.div 
                key="refinement"
                initial={{ opacity: 0, x: 100, filter: "blur(60px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-32 md:space-y-48"
              >
                <div className="space-y-12">
                  <button 
                    onClick={() => setView("entrance")}
                    className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.4em] text-[#EAE0C8]/30 uppercase hover:text-white transition-all duration-500"
                  >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
                    Return to Selection
                  </button>
                  <div className="space-y-6">
                    <p className="text-[11px] font-bold tracking-[0.8em] text-white/20 uppercase">Refining Focus</p>
                    <h3 className="text-4xl md:text-8xl font-headline font-[900] text-white uppercase italic tracking-tighter">
                      {selectedPortal.title}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-6xl">
                  {selectedPortal.options.map((opt, i) => (
                    <motion.button
                      key={opt.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setView("communication")}
                      className="group flex flex-col items-start text-left p-12 rounded-[40px] hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-700"
                    >
                      <div className="space-y-6">
                        <span className="text-[10px] font-mono text-[#EAE0C8]/20 tracking-[0.4em]">0{i+1}</span>
                        <h4 className="text-2xl md:text-4xl font-headline font-bold text-white uppercase group-hover:text-[#EAE0C8] transition-colors">
                          {opt.title}
                        </h4>
                        <p className="text-lg text-white/30 font-light max-w-xs">{opt.desc}</p>
                        <div className="pt-8">
                           <ArrowRight className="w-5 h-5 text-white/10 group-hover:text-[#EAE0C8] group-hover:translate-x-2 transition-all" />
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {view === "communication" && (
              <motion.div 
                key="communication"
                initial={{ opacity: 0, scale: 1.1, filter: "blur(80px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                className="min-h-[70vh] flex flex-col items-center justify-center space-y-32"
              >
                <div className="text-center space-y-8">
                  <button 
                    onClick={() => setView("refinement")}
                    className="text-[10px] font-bold tracking-[0.6em] text-[#EAE0C8]/20 uppercase hover:text-white transition-colors"
                  >
                    Adjust Strategic Context
                  </button>
                  <h3 className="text-5xl md:text-9xl font-headline font-[900] text-white uppercase tracking-[-0.06em]">
                    Establish <br />
                    <span className="text-[#EAE0C8] italic">Dialogue.</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                  {ACTIONS.map((action, i) => (
                    <motion.button
                      key={action.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => handleAction(action)}
                      className="group relative h-48 rounded-[32px] overflow-hidden border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] flex flex-col items-center justify-center gap-6 transition-all duration-700"
                    >
                      <action.icon className="w-6 h-6 text-white/20 group-hover:text-[#EAE0C8] group-hover:scale-110 transition-all duration-700" />
                      <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase group-hover:text-white">
                        {action.label}
                      </span>
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#EAE0C8]/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {view === "transition" && (
              <motion.div 
                key="transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-[100px] flex flex-col items-center justify-center p-6"
              >
                <div className="space-y-12 text-center max-w-xl">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-3xl md:text-5xl font-headline font-light text-white tracking-[0.1em] italic uppercase"
                  >
                    {transitionMsg}
                  </motion.div>
                  <div className="flex justify-center gap-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div 
                        key={i}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        className="w-1.5 h-1.5 rounded-full bg-[#EAE0C8]"
                      />
                    ))}
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

function StrategicPillar({ portal, index, onClick }: { portal: any, index: number, onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: index * 0.15, ease: LUXURY_EASE }}
      onClick={onClick}
      className="group relative w-full py-24 md:py-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 border-b border-white/[0.06] hover:bg-white/[0.01] transition-all duration-1000 px-4 md:px-12 overflow-hidden"
    >
      {/* Hover Background Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(234,224,200,0.04),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      
      {/* 01. INDEX - STRICT AXIS */}
      <div className="relative z-10 w-32">
        <span className="text-[12px] font-mono text-[#EAE0C8]/20 tracking-[0.5em] group-hover:text-[#EAE0C8] transition-colors duration-700">
          {portal.id}
        </span>
      </div>

      {/* 02. CORE TYPOGRAPHY - STRICT AXIS & REDUCED SCALE */}
      <div className="relative z-10 basis-[40%] space-y-4 text-left">
        <h4 className="text-3xl md:text-6xl font-headline font-[900] text-white uppercase tracking-[-0.05em] leading-[0.9] group-hover:translate-x-4 transition-transform duration-700 ease-premium">
          {portal.title}
        </h4>
        <p className="text-[11px] font-bold tracking-[0.6em] text-white/20 uppercase">
          Focus Category
        </p>
      </div>

      {/* 03. MISSION STATEMENT - STRICT AXIS & INCREASED GUTTER */}
      <div className="relative z-10 flex-1 md:text-right md:pl-16">
        <p className="text-xl md:text-3xl text-white/40 font-light leading-relaxed italic group-hover:text-white transition-colors duration-1000">
          "{portal.mission}"
        </p>
        <p className="text-[9px] font-bold tracking-[0.4em] text-[#EAE0C8]/20 uppercase mt-5">
          Strategic Intent
        </p>
      </div>

      {/* 04. INTERACTION VECTOR - STRICT AXIS */}
      <div className="relative z-10 w-32 flex justify-end">
        <div className="w-16 h-16 rounded-full border border-white/[0.06] group-hover:border-[#EAE0C8]/40 flex items-center justify-center transition-all duration-700 group-hover:scale-110">
          <ArrowRight className="w-6 h-6 text-white/10 group-hover:text-[#EAE0C8] group-hover:translate-x-1 transition-all duration-700" />
        </div>
      </div>

      {/* Corner blueprint detail */}
      <div className="absolute top-0 right-0 w-12 h-px bg-white/[0.05] group-hover:w-full transition-all duration-1000" />
    </motion.button>
  );
}
