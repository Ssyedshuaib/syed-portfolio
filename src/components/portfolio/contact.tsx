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
  Linkedin
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
    description: "Best for partnerships and product discussions",
    href: "mailto:syedshuaib2429@gmail.com?subject=Inquiry%20from%20Axora%20Website",
    icon: Mail,
    cursor: "email"
  },
  { 
    label: "LinkedIn", 
    description: "Professional conversations and networking",
    href: "https://www.linkedin.com/in/syedshuaib485/", 
    icon: Linkedin,
    cursor: "connect"
  },
  { 
    label: "Build Together", 
    description: "For founders, builders, and meaningful collaborations.",
    href: "mailto:syedshuaib2429@gmail.com?subject=Build%20Together%20-%20Axora", 
    icon: Target,
    cursor: "email"
  },
];

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 25 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isExpanded || typeof window === 'undefined' || window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x * 0.15);
    mouseY.set(y * 0.15);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const handleReset = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsExpanded(false);
    setSelectedTopic(null);
  };

  return (
    <section id="contact" ref={containerRef} className="relative bg-background overflow-hidden">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-[50px] pointer-events-auto"
            onClick={() => handleReset()}
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={{ 
          scale: isExpanded ? 0.96 : 1,
          filter: isExpanded ? "blur(30px)" : "blur(0px)",
          opacity: isExpanded ? 0.2 : 1
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <p className="text-[11px] font-bold tracking-[1.2em] text-primary/30 uppercase">THE MISSION</p>
            <h2 className="text-6xl md:text-[10rem] font-headline font-black tracking-tighter text-white leading-[0.8] uppercase italic">
              Building Systems <br />
              <span className="text-primary not-italic opacity-80">That Outlive Trends.</span>
            </h2>
            <div className="max-w-2xl mx-auto pt-12">
               <p className="text-2xl md:text-4xl text-primary/50 font-light leading-relaxed">
                 Technology changes. Principles remain. Products evolve. The mission stays the same.
               </p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-20"
            >
              <div className="space-y-10">
                <h3 className="text-5xl md:text-8xl font-headline font-black text-white tracking-tighter leading-none italic uppercase">
                  Let's Build <br />
                  <span className="text-primary/20 not-italic">Something Meaningful.</span>
                </h3>
                <p className="text-xl md:text-3xl text-[#EAE0C8]/40 font-light leading-relaxed max-w-lg">
                  Whether it's a product, venture, ecosystem, or ambitious idea. I'm always interested in meaningful problems.
                </p>
              </div>

              <div className="flex items-center gap-8 glass w-fit px-10 py-5 rounded-[2rem] border-white/5 group hover:border-primary/20 transition-all duration-1000">
                <motion.div 
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-primary" 
                />
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-[0.5em] text-primary/30 uppercase">Bangalore, IN</p>
                  <p className="text-xl md:text-2xl font-mono font-medium text-white tracking-widest">{time}</p>
                </div>
                <Clock className="w-5 h-5 text-primary/20 ml-6 group-hover:text-primary transition-colors duration-1000" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => window.location.href = "mailto:syedshuaib2429@gmail.com"}
              data-cursor="email"
              className="glass p-16 md:p-24 rounded-[4rem] border-white/5 space-y-20 relative overflow-hidden group cursor-pointer hover:border-primary/20 transition-all duration-1000"
            >
              <motion.div 
                animate={{ x: [-30, 30, -30], y: [-30, 30, -30] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.04),transparent_70%)] pointer-events-none" 
              />
              
              <div className="space-y-16 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold tracking-[0.8em] text-primary/30 uppercase">Direct Email</p>
                    <ArrowUpRight className="w-6 h-6 text-primary/20 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-1000" />
                  </div>
                  <p className="text-2xl md:text-5xl font-headline font-black text-white group-hover:text-primary transition-colors duration-1000 truncate italic">
                    syedshuaib2429@gmail.com
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-[11px] font-bold tracking-[0.8em] text-primary/30 uppercase">Location</p>
                  <div className="flex items-center gap-5">
                    <MapPin className="w-6 h-6 text-primary" />
                    <p className="text-xl md:text-3xl text-[#EAE0C8]/70 font-light">Bangalore, India</p>
                  </div>
                </div>

                <div className="space-y-6 pt-12 border-t border-white/5">
                  <p className="text-[11px] font-bold tracking-[0.8em] text-primary/30 uppercase">Current Focus</p>
                  <div className="flex flex-wrap gap-4">
                    {["Axora Studio", "DevNexus", "Reverie"].map(focus => (
                      <span 
                        key={focus} 
                        className="px-6 py-2.5 rounded-full glass border-white/5 text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase hover:text-white hover:border-primary/20 transition-all duration-700"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="py-64 flex flex-col items-center justify-center relative min-h-[800px] px-6">
        <LayoutGroup>
          <motion.div
            layout
            data-cursor="enter"
            style={{ x: isExpanded ? 0 : springX, y: isExpanded ? 0 : springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => !isExpanded && setIsExpanded(true)}
            transition={{ 
              type: "spring", 
              stiffness: 80, 
              damping: 25,
              layout: { duration: 1, ease: [0.16, 1, 0.3, 1] }
            }}
            className={cn(
              "relative z-[100] glass flex flex-col items-center justify-center cursor-pointer overflow-hidden",
              isExpanded 
                ? "w-full max-w-3xl min-h-[600px] rounded-[4rem] p-16 md:p-24 bg-[#0F1317]/95 shadow-[0_50px_120px_rgba(0,0,0,0.8)] border-primary/20" 
                : "h-48 w-48 md:h-80 md:w-80 rounded-full hover:border-primary/30 hover:scale-[1.02] group transition-all duration-1000"
            )}
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(234,224,200,0.03),transparent)] pointer-events-none"
            />

            <AnimatePresence mode="wait">
              {!isExpanded ? (
                <motion.div key="cta-initial" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center gap-5 text-center">
                  <span className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">Start A</span>
                  <span className="text-xs font-bold tracking-[0.4em] text-white uppercase flex items-center gap-3">
                    Conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-700" />
                  </span>
                </motion.div>
              ) : (
                <motion.div key="cta-expanded" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="w-full relative z-20">
                  <button onClick={(e) => { e.stopPropagation(); handleReset(); }} className="absolute -top-10 -right-10 p-4 rounded-full glass border-white/5 hover:bg-white/10 transition-all duration-700 group">
                    <X className="w-6 h-6 text-[#536878] group-hover:rotate-90 transition-transform duration-700" />
                  </button>

                  <div className="space-y-16">
                    <div className="space-y-8">
                      <div className="space-y-2">
                        <p className="text-[11px] font-bold tracking-[0.8em] text-primary/40 uppercase">With Syed Sharfuddin Shuaib</p>
                        <p className="text-[9px] font-bold tracking-[0.6em] text-white/20 uppercase italic">Founder, Axora Studio</p>
                      </div>
                      <h4 className="text-5xl md:text-7xl font-headline font-black text-white tracking-tighter italic">
                        {selectedTopic ? "How should we connect?" : "What would you like to discuss?"}
                      </h4>
                    </div>

                    <div className="space-y-6">
                      <AnimatePresence mode="wait">
                        {!selectedTopic ? (
                          <motion.div key="topics-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -30 }} className="flex flex-col gap-4">
                            {TOPICS.map((topic) => (
                              <button key={topic.id} onClick={(e) => { e.stopPropagation(); setSelectedTopic(topic.label); }} className="group relative flex items-center justify-between p-8 rounded-[2rem] glass border-white/5 hover:border-primary/30 hover:bg-primary/[0.04] transition-all duration-1000 overflow-hidden text-left">
                                <div className="flex items-center gap-8">
                                  <span className="text-[12px] font-mono font-bold text-primary/20 group-hover:text-primary transition-colors duration-1000">{topic.id}</span>
                                  <div className="space-y-1">
                                    <span className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-1000">{topic.label}</span>
                                    <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.4em]">{topic.description}</p>
                                  </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-primary/20 group-hover:text-primary group-hover:-rotate-45 transition-all duration-1000" />
                              </button>
                            ))}
                          </motion.div>
                        ) : (
                          <motion.div key="channels-reveal" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                            <button onClick={(e) => { e.stopPropagation(); setSelectedTopic(null); }} className="text-[11px] font-bold tracking-[0.5em] text-primary/30 hover:text-primary uppercase flex items-center gap-3 mb-10 transition-colors duration-700">
                              <ArrowRight className="w-4 h-4 rotate-180" /> Back to topics
                            </button>
                            {CHANNELS.map((channel) => (
                              <a 
                                key={channel.label} 
                                href={channel.href} 
                                target={channel.label === "LinkedIn" ? "_blank" : undefined} 
                                rel={channel.label === "LinkedIn" ? "noopener noreferrer" : undefined} 
                                data-cursor={channel.cursor}
                                className="group relative flex items-center justify-between p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-primary/40 transition-all duration-1000"
                              >
                                <div className="flex items-center gap-8">
                                  <div className="w-16 h-16 rounded-[1.5rem] glass border-white/5 flex items-center justify-center text-primary/20 group-hover:text-primary group-hover:scale-110 transition-all duration-1000">
                                    <channel.icon className="w-7 h-7" />
                                  </div>
                                  <div className="space-y-1">
                                    <span className="text-3xl font-headline font-black text-white tracking-tight uppercase italic">{channel.label}</span>
                                    <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.4em]">{channel.description}</p>
                                  </div>
                                </div>
                                <div className="w-14 h-14 rounded-full glass border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-[#0F1317] transition-all duration-1000">
                                  <ArrowUpRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </div>
                              </a>
                            ))}
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
