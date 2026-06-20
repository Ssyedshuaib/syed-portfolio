
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence, LayoutGroup } from "framer-motion";
import { 
  ArrowRight, 
  Clock, 
  MapPin, 
  Target,
  ArrowUpRight,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const TOPICS = [
  { id: "01", label: "Products" },
  { id: "02", label: "Ventures" },
  { id: "03", label: "Collaboration" },
  { id: "04", label: "Ideas" },
  { id: "05", label: "Just Say Hello" },
];

const CHANNELS = [
  { label: "Email", href: "mailto:hello@axora.in" },
  { label: "LinkedIn", href: "#" },
  { label: "Schedule Call", href: "#" },
];

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
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

  // Magnetic Button Logic
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

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
    setSelectedTopic(null);
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

      {/* SECTION 4: Primary Expanding CTA */}
      <div className="py-64 flex flex-col items-center justify-center relative min-h-[800px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.03),transparent_70%)] pointer-events-none" />
        
        <LayoutGroup>
          <motion.div
            layout
            style={{ x: isExpanded ? 0 : springX, y: isExpanded ? 0 : springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => !isExpanded && setIsExpanded(true)}
            transition={{ 
              type: "spring", 
              stiffness: 120, 
              damping: 20,
              layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
            className={cn(
              "relative z-10 glass border-white/10 flex flex-col items-center justify-center cursor-pointer transition-all duration-700",
              isExpanded 
                ? "w-full max-w-2xl rounded-[3rem] p-16 bg-[#0F1317]/95 shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-primary/20" 
                : "h-48 w-48 md:h-64 md:w-64 rounded-full hover:border-primary/40 hover:bg-primary/[0.02] group"
            )}
          >
            {/* Background Glow */}
            <motion.div 
              layout
              className={cn(
                "absolute inset-0 bg-primary/20 blur-[60px] rounded-full transition-opacity duration-700 pointer-events-none",
                isExpanded ? "opacity-30" : "opacity-0 group-hover:opacity-100"
              )}
            />

            <AnimatePresence mode="wait">
              {!isExpanded ? (
                <motion.div
                  key="cta-initial"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center gap-4 text-center"
                >
                  <span className="text-[10px] font-bold tracking-[0.4em] text-primary/60 uppercase">Start A</span>
                  <span className="text-xs font-bold tracking-[0.2em] text-white uppercase flex items-center gap-2">
                    Conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="cta-expanded"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full relative z-20"
                >
                  {/* Close Button */}
                  <button 
                    onClick={handleReset}
                    className="absolute -top-4 -right-4 p-2 rounded-full glass border-white/5 hover:bg-white/5 transition-all group/close"
                  >
                    <X className="w-4 h-4 text-[#536878] group-hover/close:text-white" />
                  </button>

                  <div className="space-y-12">
                    <div className="space-y-4">
                      <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">Connect</p>
                      <h4 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter">
                        {selectedTopic ? "How should we connect?" : "What would you like to discuss?"}
                      </h4>
                    </div>

                    <div className="space-y-4">
                      <AnimatePresence mode="wait">
                        {!selectedTopic ? (
                          <motion.div
                            key="topics-grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col gap-2"
                          >
                            {TOPICS.map((topic, idx) => (
                              <motion.button
                                key={topic.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedTopic(topic.label);
                                }}
                                className="group flex items-center justify-between p-6 rounded-2xl glass border-white/5 hover:border-primary/30 hover:bg-primary/[0.02] transition-all"
                              >
                                <div className="flex items-center gap-6">
                                  <span className="text-[10px] font-mono font-bold text-[#536878]">{topic.id}</span>
                                  <span className="text-xl font-light text-white/70 group-hover:text-white transition-colors">{topic.label}</span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-[#536878] group-hover:text-primary group-hover:translate-x-1 transition-all" />
                              </motion.button>
                            ))}
                          </motion.div>
                        ) : (
                          <motion.div
                            key="channels-reveal"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-4"
                          >
                            <div className="flex items-center gap-3 mb-8">
                               <button 
                                 onClick={() => setSelectedTopic(null)}
                                 className="text-[10px] font-bold tracking-[0.2em] text-primary/40 hover:text-primary uppercase flex items-center gap-2 transition-colors"
                               >
                                 <ArrowRight className="w-3 h-3 rotate-180" /> Back to topics
                               </button>
                            </div>
                            
                            {CHANNELS.map((channel, idx) => (
                              <motion.a
                                key={channel.label}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                href={channel.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-primary/[0.04] transition-all"
                              >
                                <span className="text-2xl font-headline font-bold text-white tracking-tight">{channel.label}</span>
                                <div className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                                  <ArrowUpRight className="w-5 h-5" />
                                </div>
                              </motion.a>
                            ))}

                            <div className="pt-8 text-center">
                               <p className="text-[9px] font-bold tracking-[0.4em] text-[#536878] uppercase">Expected Response Time: 24–48 Hours</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
