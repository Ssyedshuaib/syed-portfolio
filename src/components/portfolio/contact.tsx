
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Target, 
  Clock, 
  Linkedin, 
  Calendar,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");

  // Live Bangalore Clock (IST is UTC +5:30)
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

  const CONTACT_LINKS = [
    {
      id: "01",
      label: "Email Me",
      sub: "Direct communication for collaboration.",
      href: "mailto:hello@axora.in",
      icon: Mail
    },
    {
      id: "02",
      label: "LinkedIn",
      sub: "Professional network and insights.",
      href: "#",
      icon: Linkedin
    },
    {
      id: "03",
      label: "Schedule A Call",
      sub: "Discuss product ideas or ventures.",
      href: "#",
      icon: Calendar
    }
  ];

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

      {/* SECTION 4: Primary Magnetic CTA with Luxury Modal */}
      <div className="py-64 flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,224,200,0.03),transparent_70%)] pointer-events-none" />
        
        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x: springX, y: springY }}
              className="relative z-10 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center"
              >
                {/* Glow Aura */}
                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="h-48 w-48 md:h-64 md:w-64 rounded-full glass border-white/10 flex flex-col items-center justify-center gap-4 transition-all duration-700 group-hover:border-primary/40 group-hover:bg-primary/[0.02]">
                  <span className="text-[10px] font-bold tracking-[0.4em] text-primary/60 uppercase">Start A</span>
                  <span className="text-xs font-bold tracking-[0.2em] text-white uppercase flex items-center gap-2">
                    Conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </DialogTrigger>
          
          <DialogContent className="max-w-2xl bg-[#0F1317]/90 backdrop-blur-[40px] border-white/5 rounded-[3rem] p-0 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] animate-in fade-in-0 zoom-in-95 duration-500">
            <div className="p-12 md:p-16 space-y-16">
              <DialogHeader className="space-y-6 text-left">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full glass border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <p className="text-[9px] font-bold tracking-[0.4em] text-primary/60 uppercase">Founder Interaction</p>
                  </div>
                </div>
                
                <DialogTitle className="text-4xl md:text-6xl font-headline font-black text-white tracking-tighter leading-none">
                  Let's Build <br />
                  <span className="text-primary italic font-medium">Something Meaningful.</span>
                </DialogTitle>
                
                <DialogDescription className="text-xl text-[#EAE0C8]/50 font-light leading-relaxed max-w-md">
                  Whether you're building a startup, exploring collaboration, discussing product ideas, or looking for partnerships, I'd love to hear from you.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                {CONTACT_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="group block glass p-8 rounded-[2rem] border-white/5 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-500"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl glass border-white/5 flex items-center justify-center text-[#536878] group-hover:text-primary transition-colors">
                          <link.icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[10px] font-bold tracking-[0.3em] text-primary/30 uppercase group-hover:text-primary/50 transition-colors">{link.id}</p>
                          <p className="text-lg font-bold tracking-tight text-white">{link.label}</p>
                          <p className="text-[11px] font-bold tracking-[0.1em] text-[#536878] uppercase">{link.sub}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#536878] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5">
                <p className="text-[9px] font-bold tracking-[0.4em] text-[#536878] uppercase">Axora Venture Studio © 2026</p>
                <div className="flex items-center gap-6">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                   <p className="text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase">Open for collaborations</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
