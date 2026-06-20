"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MapPin, Sparkles, Command, Target, Zap, Cpu } from "lucide-react";

const METRICS = [
  { label: "Products Built", value: "5+" },
  { label: "Venture Studio", value: "1" },
  { label: "Axora Founded", value: "2025" },
];

const ECOSYSTEM = [
  {
    id: "01",
    title: "Reverie",
    category: "Place-Based Memory Platform",
    desc: "Capturing memories, emotions, and stories through places.",
    icon: MapPin,
  },
  {
    id: "02",
    title: "DevNexus",
    category: "Student Learning Ecosystem",
    desc: "Helping students learn, earn, and grow.",
    icon: Target,
  },
  {
    id: "03",
    title: "Axora",
    category: "Venture Studio",
    desc: "Building meaningful digital ecosystems and future products.",
    icon: Zap,
  },
];

export function FounderProfile() {
  const portrait = PlaceHolderImages.find((img) => img.id === "founder-portrait");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="founder" className="py-80 px-6 relative bg-background overflow-hidden">
      {/* Background Ambience */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/5 blur-[180px] rounded-full pointer-events-none" 
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Identity & Specialization */}
          <motion.div variants={revealVariants} className="lg:col-span-4 space-y-16">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">
                  The Architect
                </p>
                <h3 className="text-6xl md:text-7xl font-headline font-black text-white tracking-tighter uppercase leading-[0.85]">
                  Syed <br />Sharfuddin <br />Shuaib
                </h3>
                <div className="space-y-4">
                  <p className="text-[11px] font-bold tracking-[0.4em] text-primary uppercase flex items-center gap-3">
                    Founder • Product Builder
                  </p>
                  <p className="text-[9px] font-bold tracking-[0.3em] text-primary/40 uppercase max-w-[280px] leading-relaxed">
                    Founder of Axora, a venture studio focused on education, memory preservation, productivity, and future technologies.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <p className="text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase flex items-center gap-3">
                  <MapPin className="w-3.5 h-3.5" /> Bangalore, India
                </p>
              </div>
            </div>

            <div className="pt-16 border-t border-white/5 space-y-12">
              <div className="space-y-6">
                <p className="text-[10px] font-bold tracking-[0.5em] text-primary/20 uppercase">
                  Specialization
                </p>
                <div className="space-y-4">
                  {["Product Architecture", "Systems Design", "Venture Building", "Digital Ecosystems"].map((item) => (
                    <div key={item} className="flex items-center gap-3 group">
                      <div className="w-1 h-1 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                      <p className="text-[11px] font-bold tracking-[0.2em] text-[#EAE0C8]/60 uppercase group-hover:text-white transition-all">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-bold tracking-[0.5em] text-primary/20 uppercase">Building Since</p>
                <p className="text-2xl font-headline font-black text-white">2025</p>
                <p className="text-[9px] font-bold tracking-[0.3em] text-primary/40 uppercase">Founder, Axora</p>
              </div>
            </div>
          </motion.div>

          {/* CENTER COLUMN: Hero Card & Metrics */}
          <motion.div variants={revealVariants} className="lg:col-span-4 space-y-12">
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/5.2] w-full glass rounded-[4.5rem] border-white/10 overflow-hidden shadow-2xl group cursor-default"
            >
              {portrait && (
                <motion.div
                  initial={{ scale: 1.05, filter: "blur(12px)" }}
                  whileInView={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={portrait.imageUrl} 
                    alt={portrait.description} 
                    fill 
                    className="object-cover opacity-90 grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[2500ms]"
                    data-ai-hint={portrait.imageHint}
                  />
                </motion.div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-12 left-10 right-10">
                <div className="glass p-8 rounded-[2.5rem] border-white/10 backdrop-blur-xl space-y-4 transform transition-transform group-hover:translate-y-[-10px] duration-700">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-headline font-bold text-xs tracking-[0.6em] uppercase">AXORA</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  </div>
                  <div className="h-px w-8 bg-primary/20" />
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold tracking-[0.4em] text-white uppercase">Founder</p>
                    <p className="text-[9px] font-bold tracking-[0.3em] text-primary/60 uppercase">Building Digital Ecosystems</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-10 right-10 opacity-20 group-hover:opacity-60 transition-opacity">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
            </motion.div>

            <div className="flex justify-between items-center px-4 py-8 glass rounded-[2.5rem] border-white/5">
              {METRICS.map((metric) => (
                <div key={metric.label} className="text-center px-4 first:pl-2 last:pr-2">
                  <p className="text-2xl font-headline font-black text-white leading-none mb-2">{metric.value}</p>
                  <p className="text-[8px] font-bold tracking-[0.4em] text-primary/30 uppercase">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Philosophy & Ecosystem */}
          <motion.div variants={revealVariants} className="lg:col-span-4 space-y-16">
            <div className="glass p-12 rounded-[4rem] border-white/5 space-y-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <Cpu className="w-20 h-20 text-white" />
              </div>

              <div className="space-y-8 relative z-10">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold tracking-[0.8em] text-primary/30 uppercase">Philosophy</p>
                  <h4 className="text-3xl md:text-4xl font-headline font-bold text-white tracking-tighter leading-tight italic">
                    Building systems <br />that outlive trends.
                  </h4>
                </div>
                
                <div className="space-y-6 text-lg text-[#EAE0C8]/70 font-light leading-relaxed">
                  <p>
                    Technology should create meaningful value, 
                    <span className="text-white font-medium"> not temporary attention.</span>
                  </p>
                  <p className="text-base">
                    Every product should solve a real problem and contribute to a larger ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-[10px] font-bold tracking-[0.6em] text-primary/30 uppercase px-4">Current Ecosystem</p>
              <div className="grid grid-cols-1 gap-6">
                {ECOSYSTEM.map((item, idx) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + (idx * 0.1), ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4 glass p-8 rounded-[2.5rem] border-white/5 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-700 group cursor-default"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl glass border-white/5 flex items-center justify-center text-primary/40 group-hover:text-primary transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[9px] font-bold tracking-[0.3em] text-primary/30 uppercase">{item.id}</p>
                        <p className="text-sm font-bold tracking-[0.3em] text-white uppercase">{item.title}</p>
                        <p className="text-[9px] font-bold tracking-[0.3em] text-primary/60 uppercase">{item.category}</p>
                      </div>
                    </div>
                    <p className="text-[#EAE0C8]/40 text-xs font-light leading-relaxed px-1">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
