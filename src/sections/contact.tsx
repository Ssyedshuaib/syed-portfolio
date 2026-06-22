
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
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * THE STRATEGY ROOM
 * Rebuilt with premium centered portal cards.
 * Focus: High-fidelity interior alignment and luxury editorial depth.
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

const SCHEDULE_URL = "https://calendly.com/your-link";

const ACTIONS = [
  { label: "DIRECT DIALOGUE", href: "mailto:syedshuaib2429@gmail.com", icon: Mail },
  { label: "PROFESSIONAL NETWORK", href: "https://www.linkedin.com/in/syedshuaib485/", icon: Linkedin },
  { label: "BUILD TOGETHER", href: "mailto:syedshuaib2429@gmail.com?subject=Build Together", icon: Sparkles },
  { label: "SCHEDULE DISCUSSION", href: SCHEDULE_URL, icon: Calendar },
];

export function Contact() {
  const [view, setView] = useState<ViewState>("entrance");
  const [selectedPortal, setSelectedPortal] = useState<typeof PORTALS[0] | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [transitionMsg, setTransitionMsg] = useState("");

  const msgs = ["Preparing Communication...", "Analyzing Context...", "Opening Dialogue...", "Initializing Secure Channel..."];

  const handleAction = (action: typeof ACTIONS[0]) => {
    setTransitionMsg(msgs[Math.floor(Math.random() * msgs.length)]);
    setView("transition");
    setTimeout(() => {
      window.open(action.href, '_blank');
      setView("entrance");
      setSelectedPortal(null);
      setSelectedOption(null);
    }, 1200);
  };

  return (
    <section id="contact" className="relative bg-[#050505] overflow-hidden min-h-screen py-24 md:py-32 px-6 flex flex-col justify-center">
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,30,50,0.12),transparent_70%)] pointer-events-none" />

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
                  <div className="space-y-4">
                    <p className="text-[9px] md:text-[10px] font-bold tracking-[0.8em] text-primary/30 uppercase">The Strategy Room</p>
                    <h2 className="text-4xl md:text-7xl font-headline font-black tracking-tighter text-white uppercase italic leading-none">
                      What Shall <br />We Build?
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {PORTALS.map((portal) => (
                    <OptionCard 
                      key={portal.id} 
                      title={portal.title}
                      icon={portal.icon}
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
                className="space-y-16 md:space-y-24"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-8 md:pb-12 gap-8">
                  <div className="space-y-4">
                    <button 
                      onClick={() => setView("entrance")}
                      className="group flex items-center gap-2 text-[9px] md:text-[10px] font-bold tracking-[0.4em] text-primary/30 uppercase hover:text-white transition-colors"
                    >
                      <ChevronLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> 
                      Return to Portals
                    </button>
                    <h3 className="text-3xl md:text-6xl font-headline font-black text-white italic uppercase tracking-tight">
                      {selectedPortal.title}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {selectedPortal.options.map((opt) => (
                    <OptionCard
                      key={opt.title}
                      title={opt.title}
                      icon={selectedPortal.icon}
                      onClick={() => {
                        setSelectedOption(opt.title);
                        setView("communication");
                      }}
                    />
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
                className="space-y-16 md:space-y-24"
              >
                <div className="text-center space-y-6 max-w-2xl mx-auto">
                  <button 
                    onClick={() => setView("refinement")}
                    className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] text-primary/30 uppercase hover:text-white transition-colors"
                  >
                    ← Adjust Context
                  </button>
                  <h3 className="text-3xl md:text-6xl font-headline font-black text-white italic uppercase tracking-tight">
                    Select Channel
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {ACTIONS.map((action) => (
                    <OptionCard
                      key={action.label}
                      title={action.label}
                      icon={action.icon}
                      onClick={() => handleAction(action)}
                    />
                  ))}
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
                    className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"
                  />
                  <p className="relative text-2xl md:text-5xl font-headline font-light text-white tracking-[0.1em] italic uppercase">
                    {transitionMsg}
                  </p>
                  <div className="flex items-center justify-center gap-4 relative">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
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

function OptionCard({ title, icon: Icon, onClick }: { title: string, icon?: any, onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.015, 
        y: -6,
        boxShadow: "0 0 40px rgba(50,90,180,0.08)"
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group relative w-full h-[255px] rounded-[32px] overflow-hidden flex flex-col items-center justify-center border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
      style={{
        background: 'linear-gradient(180deg, rgba(12,18,28,0.95) 0%, rgba(8,12,18,0.98) 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 20px 60px rgba(0,0,0,0.35)'
      }}
    >
      {/* 00. DECORATIVE CORNER ACCENTS */}
      <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20 opacity-[0.08]" />
      <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20 opacity-[0.08]" />
      
      {/* 01. LUXURY GLASS ICON CONTAINER */}
      <div className="relative z-10 mb-auto pt-10">
        <div className="w-16 h-16 rounded-[20px] backdrop-blur-[20px] border border-white/10 flex items-center justify-center text-primary/30 group-hover:text-primary group-hover:scale-110 transition-all duration-700 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 8px 30px rgba(0,0,0,0.25)'
          }}
        >
          {Icon ? <Icon className="w-7 h-7" /> : <Sparkles className="w-7 h-7" />}
        </div>
      </div>

      {/* 02. REFINED INSTITUTIONAL TITLE */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-10 text-center">
        <h4 className="text-3xl md:text-4xl font-headline font-[800] text-white uppercase tracking-[-0.04em] leading-[0.9] transition-all duration-700">
          {title}
        </h4>
      </div>

      {/* 03. PREMIUM MOMENTUM ARROW */}
      <div className="relative z-10 mt-auto pb-8">
        <div className="flex flex-col items-center">
          <ArrowRight className="w-5 h-5 text-primary opacity-[0.55] group-hover:opacity-100 group-hover:translate-x-[6px] transition-all duration-500 ease-out" />
        </div>
      </div>

      {/* Internal Atmospheric Glow - Sub-perceptual */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
    </motion.button>
  );
}
