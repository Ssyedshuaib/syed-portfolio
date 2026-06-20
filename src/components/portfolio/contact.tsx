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
    icon: Mail 
  },
  { 
    label: "LinkedIn", 
    description: "Professional conversations and networking",
    href: "https://www.linkedin.com/in/syedshuaib485/", 
    icon: Linkedin 
  },
  { 
    label: "Build Together", 
    description: "For founders, builders, and meaningful collaborations.",
    href: "mailto:syedshuaib2429@gmail.com?subject=Build%20Together%20-%20Axora", 
    icon: Target 
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
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isExpanded || window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x * 0.2);
    mouseY.set(y * 0.2);
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

  const emailAction = () => {
    window.location.href = "mailto:syedshuaib2429@gmail.com?subject=Inquiry%20from%20Axora%20Website";
  };

  return (
    <section id="contact" ref={containerRef} className="relative bg-background overflow-hidden">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-xl pointer-events-auto"
            onClick={() => handleReset()}
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={{ 
          scale: isExpanded ? 0.98 : 1,
          filter: isExpanded ? "blur(15px)" : "blur(0px)",
          opacity: isExpanded ? 0.3 : 1
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center space-y-16 md:space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 md:space-y-12"
          >
            <p className="text-[8px] md:text-[10px] font-bold tracking-[0.8em] md:tracking-[1em] text-primary/40 uppercase">THE MISSION</p>
            <h2 className="text-5xl md:text-9xl font-headline font-black tracking-tighter text-white leading-[0.9] md:leading-[0.85]">
              Building Systems <br />
              <span className="text-primary italic font-medium">That Outlive Trends.</span>
            </h2>
            <div className="max-w-xl mx-auto pt-8 md:pt-12 px-4">
               <p className="text-xl md:text-3xl text-primary/60 font-light leading-relaxed">
                 Technology changes. Principles remain. Products evolve. The mission stays the same.
               </p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12 md:space-y-16"
            >
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-4xl md:text-7xl font-headline font-black text-white tracking-tighter leading-none">
                  Let's Build <br />
                  <span className="text-primary/40 italic font-medium">Something Meaningful.</span>
                </h3>
                <div className="space-y-4 md:space-y-6 text-lg md:text-2xl text-[#EAE0C8]/60 font-light leading-relaxed max-w-md">
                  <p>Whether it's a product, venture, ecosystem, or ambitious idea. I'm always interested in meaningful problems.</p>
                </div>
              </div>

              <div className="flex items-center gap-5 md:gap-6 glass w-fit px-6 md:px-8 py-3 md:py-4 rounded-2xl border-white/5 group hover:border-primary/20 transition-colors">
                <motion.div 
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-primary" 
                />
                <div className="space-y-0.5">
                  <p className="text-[8px] md:text-[9px] font-bold tracking-[0.3em] text-primary/40 uppercase">Bangalore, IN</p>
                  <p className="text-base md:text-lg font-mono font-medium text-white tracking-widest">{time}</p>
                </div>
                <Clock className="w-3.5 md:w-4 h-3.5 md:h-4 text-primary/20 ml-2 md:ml-4 group-hover:text-primary transition-colors" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={emailAction}
              className="glass p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] border-white/10 space-y-12 md:space-y-16 relative overflow-hidden group cursor-pointer hover:border-primary/20 transition-all duration-700 hover:bg-primary/[0.02]"
            >
              {/* Internal Spotlight */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,224,200,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="space-y-10 md:space-y-12 relative z-10">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[8px] md:text-[10px] font-bold tracking-[0.5em] text-primary/40 uppercase">Direct Email</p>
                    <ArrowUpRight className="w-4 h-4 text-primary/20 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                  </div>
                  <p className="text-xl md:text-3xl font-headline font-bold text-white group-hover:text-primary transition-colors truncate">
                    syedshuaib2429@gmail.com
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <p className="text-[8px] md:text-[10px] font-bold tracking-[0.5em] text-primary/40 uppercase">Location</p>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-3.5 md:w-4 h-3.5 md:h-4 text-primary" />
                    <p className="text-lg md:text-xl text-[#EAE0C8]/80 font-light">Bangalore, India</p>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6 pt-8 md:pt-10 border-t border-white/5">
                  <p className="text-[8px] md:text-[10px] font-bold tracking-[0.5em] text-primary/40 uppercase">Current Focus</p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {["Axora Studio", "DevNexus", "Reverie"].map(focus => (
                      <motion.span 
                        key={focus} 
                        whileHover={{ y: -2, borderColor: "rgba(234,224,200,0.3)" }}
                        className="px-4 md:px-5 py-1.5 md:py-2 rounded-full glass border-white/5 text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase text-white/60 transition-all"
                      >
                        {focus}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="py-32 md:py-64 flex flex-col items-center justify-center relative min-h-[600px] md:min-h-[800px] px-4">
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
            whileHover={!isExpanded ? { scale: 1.05 } : {}}
            className={cn(
              "relative z-[100] glass border-white/10 flex flex-col items-center justify-center cursor-pointer overflow-hidden",
              isExpanded 
                ? "w-full max-w-2xl min-h-[500px] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 bg-[#0F1317]/95 shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-primary/20" 
                : "h-40 w-40 md:h-64 md:w-64 rounded-full hover:border-primary/40 hover:bg-primary/[0.02] group transition-all duration-700"
            )}
          >
            <AnimatePresence mode="wait">
              {!isExpanded ? (
                <motion.div key="cta-initial" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center gap-3 md:gap-4 text-center">
                  <span className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] text-primary/60 uppercase">Start A</span>
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase flex items-center gap-2">
                    Conversation <ArrowRight className="w-3.5 md:w-4 h-3.5 md:h-4 group-hover:translate-x-1.5 transition-transform duration-500" />
                  </span>
                </motion.div>
              ) : (
                <motion.div key="cta-expanded" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="w-full relative z-20">
                  <button onClick={(e) => { e.stopPropagation(); handleReset(); }} className="absolute -top-4 -right-4 p-2 rounded-full glass border-white/5 hover:bg-white/5 transition-all group">
                    <X className="w-4 h-4 text-[#536878] group-hover:rotate-90 transition-transform duration-500" />
                  </button>

                  <div className="space-y-10 md:space-y-12">
                    <div className="space-y-4 md:space-y-6">
                      <div className="space-y-1">
                        <p className="text-[8px] md:text-[9px] font-bold tracking-[0.4em] md:tracking-[0.5em] text-primary/40 uppercase">With Syed Sharfuddin Shuaib</p>
                        <p className="text-[7px] md:text-[8px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-[#536878] uppercase">Founder, Axora</p>
                      </div>
                      <h4 className="text-3xl md:text-5xl font-headline font-black text-white tracking-tighter">
                        {selectedTopic ? "How should we connect?" : "What would you like to discuss?"}
                      </h4>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                      <AnimatePresence mode="wait">
                        {!selectedTopic ? (
                          <motion.div key="topics-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-3">
                            {TOPICS.map((topic, idx) => (
                              <button key={topic.id} onClick={(e) => { e.stopPropagation(); setSelectedTopic(topic.label); }} className="group relative flex items-center justify-between p-5 md:p-6 rounded-2xl glass border-white/5 hover:border-primary/40 hover:bg-primary/[0.04] transition-all duration-500 overflow-hidden text-left">
                                <div className="flex items-center gap-4 md:gap-6">
                                  <span className="text-[9px] md:text-[10px] font-mono font-bold text-[#536878] group-hover:text-primary transition-colors">{topic.id}</span>
                                  <div className="space-y-0.5 group-hover:translate-x-1 transition-transform duration-500">
                                    <span className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">{topic.label}</span>
                                    <p className="text-[8px] md:text-[10px] text-[#536878] font-light uppercase tracking-widest">{topic.description}</p>
                                  </div>
                                </div>
                                <ArrowRight className="w-3.5 md:w-4 h-3.5 md:h-4 text-[#536878] group-hover:text-primary group-hover:rotate-[-45deg] transition-all duration-500" />
                              </button>
                            ))}
                          </motion.div>
                        ) : (
                          <motion.div key="channels-reveal" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-3 md:space-y-4">
                            <button onClick={(e) => { e.stopPropagation(); setSelectedTopic(null); }} className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-primary/40 hover:text-primary uppercase flex items-center gap-2 mb-6 group">
                              <ArrowRight className="w-3 h-3 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to topics
                            </button>
                            {CHANNELS.map((channel, idx) => (
                              <a key={channel.label} href={channel.href} target={channel.label === "LinkedIn" ? "_blank" : undefined} rel={channel.label === "LinkedIn" ? "noopener noreferrer" : undefined} className="group relative flex items-center justify-between p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-primary/[0.04] transition-all duration-700 overflow-hidden">
                                <div className="flex items-center gap-4 md:gap-6">
                                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl glass border-white/5 flex items-center justify-center text-[#536878] group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                                    <channel.icon className="w-4 md:w-5 h-4 md:h-5" />
                                  </div>
                                  <div className="space-y-0.5 group-hover:translate-x-1 transition-transform duration-500">
                                    <span className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight">{channel.label}</span>
                                    <p className="text-[8px] md:text-[10px] text-[#536878] font-light uppercase tracking-widest">{channel.description}</p>
                                  </div>
                                </div>
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full glass border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500">
                                  <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5 group-hover:scale-110 transition-transform" />
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
