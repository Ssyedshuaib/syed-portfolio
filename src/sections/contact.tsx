"use client";

import React, { useState, useEffect, useMemo } from "react";
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

const LIVING_PHRASES = [
  "LET'S BUILD SOMETHING MEANINGFUL",
  "DISCUSS AN IDEA",
  "START SOMETHING NEW",
  "BUILD THE FUTURE",
  "SHARE A VISION",
  "CREATE AN ECOSYSTEM"
];

export function Contact() {
  const [time, setTime] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [currentPhrase, setCurrentPhrase] = useState(LIVING_PHRASES[0]);

  const selectedTopic = useMemo(() => 
    TOPICS.find(t => t.id === selectedTopicId), 
    [selectedTopicId]
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 25 });

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

  function handleTriggerMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isExpanded) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.12;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.12;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleTriggerMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  function handleMouseEnter() {
    if (isExpanded) return;
    const randomPhrase = LIVING_PHRASES[Math.floor(Math.random() * LIVING_PHRASES.length)];
    setCurrentPhrase(randomPhrase);
  }

  const handleReset = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsExpanded(false);
    setSelectedTopicId(null);
  };

  const particles = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      x: (i * 30) - 90,
      y: (i * 20) - 60,
      delay: i * 0.5,
      duration: 10 + i * 2
    }));
  }, []);

  const containerVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { opacity: 0, x: -20 }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="contact" className="relative bg-background overflow-hidden py-32 md:py-48">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-[50px] pointer-events-auto"
            onClick={() => handleReset()}
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={{ 
          scale: isExpanded ? 0.94 : 1,
          filter: isExpanded ? "blur(30px)" : "blur(0px)",
          opacity: isExpanded ? 0.1 : 1
        }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1440px] mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
          <div className="space-y-16">
            <div className="space-y-8 max-w-lg">
              <p className="text-[10px] font-bold tracking-[0.8em] text-primary/30 uppercase">ENGAGEMENT</p>
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

      <div className="py-48 flex flex-col items-center justify-center relative min-h-[700px] px-6">
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
            onMouseEnter={handleMouseEnter}
            onClick={() => !isExpanded && setIsExpanded(true)}
            transition={{ 
              type: "spring", 
              stiffness: 120, 
              damping: 30,
              layout: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
            }}
            className={cn(
              "relative glass flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all duration-500",
              isExpanded 
                ? "w-full max-w-[640px] min-h-[600px] rounded-[3.5rem] p-12 md:p-16 bg-[#0A0A0A] border-white/10 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.9)]" 
                : "h-48 w-56 md:h-72 md:w-72 rounded-full hover:border-primary/20 hover:bg-primary/[0.01] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] group"
            )}
          >
            {!isExpanded && (
              <motion.div 
                animate={{ scale: [1, 1.015, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-primary/[0.02] -z-10"
              />
            )}

            {!isExpanded && particles.map((p) => (
              <motion.div
                key={p.id}
                animate={{ 
                  x: [p.x, p.x + 10, p.x],
                  y: [p.y, p.y - 15, p.y],
                  opacity: [0, 0.2, 0]
                }}
                transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
                className="absolute w-1 h-1 bg-primary rounded-full blur-[1px] pointer-events-none"
              />
            ))}

            <AnimatePresence mode="wait">
              {!isExpanded ? (
                <motion.div 
                  key="trigger-initial"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0, scale: 0.9 }} 
                  className="flex flex-col items-center justify-center text-center w-full px-12"
                >
                  <motion.div className="flex flex-col items-center gap-4" whileHover={{ scale: 1.03 }}>
                    <span className="text-[9px] font-bold tracking-[1em] text-primary/30 uppercase">ENTER</span>
                    <div className="relative h-12 overflow-hidden flex items-center justify-center w-64">
                       <AnimatePresence mode="wait">
                         <motion.div
                           key={currentPhrase}
                           initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
                           animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                           exit={{ y: -30, opacity: 0, filter: "blur(10px)" }}
                           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                           className="text-[11px] md:text-xs font-bold tracking-[0.5em] text-white uppercase flex flex-col items-center gap-3"
                         >
                           <span className="text-center leading-relaxed max-w-[200px]">{currentPhrase}</span>
                           <ArrowRight className="w-3.5 h-3.5 text-primary/40 group-hover:translate-x-1.5 transition-transform" />
                         </motion.div>
                       </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div 
                  key="room-content"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  className="w-full relative"
                >
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleReset(); }} 
                    className="absolute -top-4 -right-4 p-3 rounded-full glass border-white/5 hover:border-white/20 transition-all group/close z-30"
                  >
                    <X className="w-5 h-5 text-[#536878] group-hover/close:rotate-90 group-hover/close:text-white transition-all duration-500" />
                  </button>

                  <div className="relative min-h-[480px]">
                    <AnimatePresence mode="wait" initial={false}>
                      {!selectedTopicId ? (
                        <motion.div 
                          key="topics-view" 
                          variants={containerVariants}
                          initial="initial" 
                          animate="animate" 
                          exit="exit" 
                          className="space-y-12"
                        >
                          <div className="space-y-6">
                            <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">WITH SYED</p>
                            <h4 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter italic">
                              Discuss...
                            </h4>
                          </div>

                          <div className="flex flex-col gap-3">
                            {TOPICS.map((topic) => (
                              <motion.button 
                                key={topic.id} 
                                variants={itemVariants}
                                onClick={(e) => { e.stopPropagation(); setSelectedTopicId(topic.id); }} 
                                className="group relative flex items-center justify-between p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-primary/20 hover:bg-white/[0.03] transition-all text-left"
                              >
                                <div className="flex items-center gap-6">
                                  <span className="text-[11px] font-mono font-bold text-primary/20 group-hover:text-primary/40 transition-colors">{topic.id}</span>
                                  <span className="text-lg font-bold text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all">{topic.label}</span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-primary/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="context-view" 
                          variants={containerVariants}
                          initial="initial" 
                          animate="animate" 
                          exit="exit" 
                          className="space-y-10"
                        >
                          <div className="space-y-8">
                            <button 
                              onClick={(e) => { e.stopPropagation(); setSelectedTopicId(null); }} 
                              className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.5em] text-primary/30 hover:text-primary uppercase transition-colors"
                            >
                              <MoveLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back
                            </button>
                            
                            <div className="space-y-4">
                              <p className="text-[9px] font-bold tracking-[0.6em] text-primary/20 uppercase">DISCUSSION TOPIC</p>
                              <h4 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter italic leading-none">
                                {selectedTopic?.label}
                              </h4>
                              <p className="text-base md:text-lg text-[#EAE0C8]/60 font-light leading-relaxed max-w-md">
                                {selectedTopic?.fullDescription}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-3">
                            {[
                              { label: "Email", icon: Mail, href: "mailto:syedshuaib2429@gmail.com" },
                              { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/syedshuaib485/" },
                              { label: selectedTopic?.ctaLabel || "Connect", icon: Target, href: "mailto:syedshuaib2429@gmail.com" }
                            ].map((action, i) => (
                              <motion.a 
                                key={action.label}
                                variants={itemVariants}
                                href={action.href}
                                target={action.label === "LinkedIn" ? "_blank" : undefined}
                                className="group relative flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all"
                              >
                                <div className="flex items-center gap-5">
                                  <action.icon className="w-4.5 h-4.5 text-primary/40 group-hover:text-primary transition-colors" />
                                  <span className="text-xl font-headline font-bold text-white italic uppercase">{action.label}</span>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-primary/20 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                              </motion.a>
                            ))}
                          </div>

                          <div className="pt-8 border-t border-white/5 flex justify-center">
                            <p className="text-[10px] text-[#EAE0C8]/20 font-light italic tracking-[0.1em]">
                              Meaningful conversations create meaningful outcomes.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
