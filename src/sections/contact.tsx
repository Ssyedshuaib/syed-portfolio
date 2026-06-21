"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence, LayoutGroup } from "framer-motion";
import { 
  ArrowRight, 
  Clock, 
  MapPin, 
  Target,
  ArrowUpRight,
  X,
  Mail,
  Linkedin,
  MoveLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

const TOPICS = [
  { id: "01", label: "Building Products", description: "From concept to market-ready ecosystem." },
  { id: "02", label: "Ventures & Startups", description: "Discussing scaling and venture strategy." },
  { id: "03", label: "Collaboration", description: "Strategic partnerships and joint ventures." },
  { id: "04", label: "Ideas & Strategy", description: "Deep dives into product architecture." },
  { id: "05", label: "Just Say Hello", description: "General inquiries and professional greetings." },
];

const CHANNELS = [
  { 
    label: "Email", 
    description: "Partnerships & product discussions",
    href: "mailto:syedshuaib2429@gmail.com?subject=Inquiry%20from%20Axora%20Website",
    icon: Mail,
  },
  { 
    label: "LinkedIn", 
    description: "Professional networking",
    href: "https://www.linkedin.com/in/syedshuaib485/", 
    icon: Linkedin,
  },
  { 
    label: "Build Together", 
    description: "For founders & builders",
    href: "mailto:syedshuaib2429@gmail.com?subject=Build%20Together%20-%20Axora", 
    icon: Target,
  },
];

export function Contact() {
  const [time, setTime] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Parallax Values for the Trigger Circle
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 30 });

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
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.15;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.15;
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
    setSelectedTopic(null);
  };

  return (
    <section id="contact" className="relative bg-background overflow-hidden py-32 md:py-48">
      {/* Background Dim Layer */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-[40px] pointer-events-auto"
            onClick={() => handleReset()}
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={{ 
          scale: isExpanded ? 0.96 : 1,
          filter: isExpanded ? "blur(40px)" : "blur(0px)",
          opacity: isExpanded ? 0.2 : 1
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1440px] mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
          {/* Narrative Column */}
          <div className="space-y-16">
            <div className="space-y-8 max-w-lg">
              <p className="text-[10px] font-bold tracking-[0.8em] text-primary/30 uppercase">ENAGAGEMENT</p>
              <h3 className="text-4xl md:text-6xl font-headline font-black text-white tracking-tighter leading-[1.05] italic uppercase">
                Let's Build <br />
                <span className="text-primary/20 not-italic">Something Meaningful.</span>
              </h3>
              <p className="text-lg md:text-xl text-[#EAE0C8]/40 font-light leading-relaxed">
                Whether it's a product, venture, ecosystem, or ambitious idea. I'm always interested in meaningful problems.
              </p>
            </div>

            <div className="flex items-center gap-8 glass w-fit px-8 py-4 rounded-2xl border-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="space-y-1">
                <p className="text-[9px] font-bold tracking-[0.4em] text-primary/30 uppercase">Bangalore, IN</p>
                <p className="text-xl font-mono font-medium text-white tracking-widest">{time}</p>
              </div>
              <Clock className="w-4 h-4 text-primary/20 ml-4" />
            </div>
          </div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => window.location.href = "mailto:syedshuaib2429@gmail.com"}
            className="glass p-12 md:p-16 rounded-[3.5rem] border-white/5 space-y-12 relative overflow-hidden group cursor-pointer"
          >
            <div className="space-y-12 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold tracking-[0.6em] text-primary/30 uppercase">Direct Email</p>
                  <ArrowUpRight className="w-5 h-5 text-primary/20 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xl md:text-3xl font-headline font-black text-white italic truncate">
                  syedshuaib2429@gmail.com
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold tracking-[0.6em] text-primary/30 uppercase">Location</p>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <p className="text-lg md:text-xl text-[#EAE0C8]/70 font-light">Bangalore, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive Conversation Hub */}
      <div className="py-48 flex flex-col items-center justify-center relative min-h-[600px] px-6">
        <LayoutGroup>
          <motion.div
            layout
            style={{ 
              x: isExpanded ? 0 : springX, 
              y: isExpanded ? 0 : springY,
              zIndex: isExpanded ? 100 : 10
            }}
            onMouseMove={handleTriggerMouseMove}
            onMouseLeave={handleTriggerMouseLeave}
            onClick={() => !isExpanded && setIsExpanded(true)}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 30,
              layout: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
            }}
            className={cn(
              "relative glass flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all duration-500",
              isExpanded 
                ? "w-full max-w-xl min-h-[500px] rounded-[3.5rem] p-12 md:p-16 bg-[#0F1317]/98 border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]" 
                : "h-44 w-52 md:h-64 md:w-64 rounded-full hover:border-primary/20 hover:bg-primary/[0.02] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] group"
            )}
          >
            <AnimatePresence mode="wait">
              {!isExpanded ? (
                <motion.div 
                  key="trigger-initial"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0, scale: 0.9 }} 
                  className="flex flex-col items-center justify-center gap-4 text-center"
                >
                  <span className="text-[9px] font-bold tracking-[0.8em] text-primary/40 uppercase transition-colors group-hover:text-primary/60">Start A</span>
                  <span className="text-sm font-bold tracking-[0.4em] text-white uppercase flex items-center gap-2 group-hover:scale-105 transition-transform">
                    Conversation <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </motion.div>
              ) : (
                <motion.div 
                  key="room-content"
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="w-full relative"
                >
                  {/* Luxury Close Control */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleReset(); }} 
                    className="absolute -top-4 -right-4 p-3 rounded-full glass border-white/5 hover:border-white/20 transition-all group/close"
                  >
                    <X className="w-5 h-5 text-[#536878] group-hover/close:rotate-90 group-hover/close:text-white transition-all duration-500" />
                  </button>

                  <div className="space-y-12">
                    <div className="space-y-6">
                      <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">WITH SYED</p>
                      <h4 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter italic">
                        {selectedTopic ? "Next Steps" : "Discuss..."}
                      </h4>
                    </div>

                    <div className="relative min-h-[300px]">
                      <AnimatePresence mode="wait" initial={false}>
                        {!selectedTopic ? (
                          <motion.div 
                            key="topics-view" 
                            initial={{ opacity: 0, x: 20 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            exit={{ opacity: 0, x: -20 }} 
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col gap-3"
                          >
                            {TOPICS.map((topic) => (
                              <button 
                                key={topic.id} 
                                onClick={(e) => { e.stopPropagation(); setSelectedTopic(topic.label); }} 
                                className="group relative flex items-center justify-between p-6 rounded-2xl glass border-white/5 hover:bg-white/[0.02] hover:border-primary/20 transition-all text-left"
                              >
                                <div className="flex items-center gap-6">
                                  <span className="text-[11px] font-mono font-bold text-primary/20 group-hover:text-primary/40 transition-colors">{topic.id}</span>
                                  <span className="text-lg font-bold text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all">{topic.label}</span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-primary/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                              </button>
                            ))}
                          </motion.div>
                        ) : (
                          <motion.div 
                            key="channels-view" 
                            initial={{ opacity: 0, x: 20 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-4"
                          >
                            <button 
                              onClick={(e) => { e.stopPropagation(); setSelectedTopic(null); }} 
                              className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.5em] text-primary/30 hover:text-primary uppercase mb-8 transition-colors"
                            >
                              <MoveLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back
                            </button>
                            
                            <div className="grid grid-cols-1 gap-4">
                              {CHANNELS.map((channel) => (
                                <a 
                                  key={channel.label} 
                                  href={channel.href} 
                                  target={channel.label === "LinkedIn" ? "_blank" : undefined} 
                                  rel={channel.label === "LinkedIn" ? "noopener noreferrer" : undefined} 
                                  className="group relative flex flex-col p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all"
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-4">
                                      <channel.icon className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                                      <span className="text-xl font-headline font-black text-white italic uppercase">{channel.label}</span>
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-primary/20 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                  </div>
                                  <p className="text-xs text-white/40 font-light ml-9">{channel.description}</p>
                                </a>
                              ))}
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
