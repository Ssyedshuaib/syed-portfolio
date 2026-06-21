
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
    mouseX.set(x * 0.1);
    mouseY.set(y * 0.1);
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
          scale: isExpanded ? 0.98 : 1,
          filter: isExpanded ? "blur(20px)" : "blur(0px)",
          opacity: isExpanded ? 0.3 : 1
        }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="max-w-[1440px] mx-auto px-6 pt-64 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
            <div className="space-y-16">
              <div className="space-y-8 max-w-lg">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => window.location.href = "mailto:syedshuaib2429@gmail.com"}
              data-cursor="email"
              className="glass p-12 md:p-16 rounded-[3rem] border-white/5 space-y-12 relative overflow-hidden group cursor-pointer"
            >
              <div className="space-y-12 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold tracking-[0.6em] text-primary/30 uppercase">Direct Email</p>
                    <ArrowUpRight className="w-5 h-5 text-primary/20" />
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
        </div>
      </motion.div>

      <div className="py-48 flex flex-col items-center justify-center relative min-h-[600px] px-6">
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
              layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
            className={cn(
              "relative z-[100] glass flex flex-col items-center justify-center cursor-pointer overflow-hidden",
              isExpanded 
                ? "w-full max-w-2xl min-h-[500px] rounded-[3rem] p-12 md:p-16 bg-[#0F1317]/95" 
                : "h-40 w-48 md:h-64 md:w-64 rounded-full"
            )}
          >
            <AnimatePresence mode="wait">
              {!isExpanded ? (
                <motion.div key="cta-initial" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center gap-4 text-center">
                  <span className="text-[9px] font-bold tracking-[0.8em] text-primary/40 uppercase">Start A</span>
                  <span className="text-xs font-bold tracking-[0.4em] text-white uppercase flex items-center gap-2">
                    Conversation <ArrowRight className="w-3 h-3" />
                  </span>
                </motion.div>
              ) : (
                <motion.div key="cta-expanded" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="w-full relative z-20">
                  <button onClick={(e) => { e.stopPropagation(); handleReset(); }} className="absolute -top-6 -right-6 p-3 rounded-full glass border-white/5">
                    <X className="w-5 h-5 text-[#536878]" />
                  </button>

                  <div className="space-y-12">
                    <div className="space-y-6">
                      <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">With Syed</p>
                      <h4 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter italic">
                        {selectedTopic ? "Next Steps" : "Discuss..."}
                      </h4>
                    </div>

                    <div className="space-y-4">
                      <AnimatePresence mode="wait">
                        {!selectedTopic ? (
                          <motion.div key="topics-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-3">
                            {TOPICS.map((topic) => (
                              <button key={topic.id} onClick={(e) => { e.stopPropagation(); setSelectedTopic(topic.label); }} className="group relative flex items-center justify-between p-6 rounded-2xl glass border-white/5 hover:bg-primary/[0.04] transition-all text-left">
                                <div className="flex items-center gap-6">
                                  <span className="text-[11px] font-mono font-bold text-primary/20">{topic.id}</span>
                                  <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">{topic.label}</span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-primary/20 group-hover:text-primary" />
                              </button>
                            ))}
                          </motion.div>
                        ) : (
                          <motion.div key="channels-reveal" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                            <button onClick={(e) => { e.stopPropagation(); setSelectedTopic(null); }} className="text-[10px] font-bold tracking-[0.4em] text-primary/30 uppercase flex items-center gap-2 mb-6">
                              <ArrowRight className="w-3 h-3 rotate-180" /> Back
                            </button>
                            {CHANNELS.map((channel) => (
                              <a 
                                key={channel.label} 
                                href={channel.href} 
                                target={channel.label === "LinkedIn" ? "_blank" : undefined} 
                                rel={channel.label === "LinkedIn" ? "noopener noreferrer" : undefined} 
                                className="group relative flex items-center justify-between p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all"
                              >
                                <div className="flex items-center gap-6">
                                  <channel.icon className="w-6 h-6 text-primary/40 group-hover:text-primary" />
                                  <span className="text-2xl font-headline font-black text-white uppercase italic">{channel.label}</span>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-primary/20 group-hover:text-primary" />
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
