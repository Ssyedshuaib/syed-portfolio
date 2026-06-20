"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MapPin, Sparkles, Command, Target, Zap, Cpu } from "lucide-react";

const METRICS = [
  { label: "Products Built", value: "3+" },
  { label: "Venture Studio", value: "1" },
  { label: "Axora Founded", value: "2025" },
];

const ECOSYSTEM = [
  {
    id: "01",
    title: "Reverie",
    desc: "Place-based memory platform",
    icon: MapPin,
  },
  {
    id: "02",
    title: "DevNexus",
    desc: "Student learning ecosystem",
    icon: Target,
  },
  {
    id: "03",
    title: "Axora",
    desc: "Venture studio building future products",
    icon: Zap,
  },
];

const CAPABILITIES = [
  "PRODUCT ARCHITECTURE",
  "VENTURE BUILDING",
  "SYSTEMS DESIGN",
  "LONG-TERM THINKING",
];

export function FounderProfile() {
  const portrait = PlaceHolderImages.find((img) => img.id === "founder-portrait");

  return (
    <section id="founder" className="py-80 px-6 relative bg-background overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/5 blur-[180px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">
          
          {/* LEFT COLUMN: Identity & Metadata */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-16"
          >
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">
                  The Architect
                </p>
                <h3 className="text-6xl md:text-7xl font-headline font-black text-white tracking-tighter uppercase leading-[0.85]">
                  Syed <br />Sharfuddin <br />Shuaib
                </h3>
              </div>
              
              <div className="space-y-4 pt-4">
                <p className="text-[11px] font-bold tracking-[0.4em] text-primary uppercase flex items-center gap-3">
                  <Sparkles className="w-3.5 h-3.5" /> Founder • Product Builder
                </p>
                <p className="text-[11px] font-bold tracking-[0.4em] text-primary/40 uppercase flex items-center gap-3">
                  <Command className="w-3.5 h-3.5" /> Systems Thinker
                </p>
              </div>

              <div className="flex items-center gap-3 text-[#EAE0C8]/40 font-light">
                <MapPin className="w-4 h-4" />
                <span className="text-lg">Bangalore, India</span>
              </div>
            </div>

            <div className="pt-16 border-t border-white/5 space-y-8">
              {CAPABILITIES.map((capability) => (
                <div key={capability} className="group">
                  <p className="text-[9px] font-bold tracking-[0.5em] text-primary/20 group-hover:text-primary/60 transition-colors uppercase">
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CENTER COLUMN: Hero Card & Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-12"
          >
            <div className="relative aspect-[4/5] w-full glass rounded-[4.5rem] border-white/10 overflow-hidden shadow-2xl group cursor-default">
              {portrait && (
                <Image 
                  src={portrait.imageUrl} 
                  alt={portrait.description} 
                  fill 
                  className="object-cover opacity-90 grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[2500ms]"
                  data-ai-hint={portrait.imageHint}
                />
              )}
              
              {/* Luxury Label Overlay */}
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

              {/* Subtle Axora Emblem */}
              <div className="absolute top-10 right-10 opacity-20 group-hover:opacity-60 transition-opacity">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Metric Strip */}
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
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-16"
          >
            {/* Philosophy Card */}
            <div className="glass p-12 lg:p-16 rounded-[4rem] border-white/5 space-y-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <Cpu className="w-24 h-24 text-white" />
              </div>

              <div className="space-y-12 relative z-10">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold tracking-[0.8em] text-primary/30 uppercase">Philosophy</p>
                  <h4 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tighter leading-tight italic">
                    Building systems <br />that outlive trends.
                  </h4>
                </div>
                
                <div className="space-y-8 text-xl md:text-2xl text-[#EAE0C8]/70 font-light leading-relaxed">
                  <p>
                    Technology should create meaningful value, 
                    <span className="text-white font-medium"> not temporary attention.</span>
                  </p>
                  <p>
                    Every product should solve a real problem and contribute to a larger ecosystem.
                  </p>
                </div>
              </div>
            </div>

            {/* Current Ecosystem Mini Cards */}
            <div className="space-y-10">
              <p className="text-[10px] font-bold tracking-[0.6em] text-primary/30 uppercase px-4">Current Ecosystem</p>
              <div className="grid grid-cols-1 gap-6">
                {ECOSYSTEM.map((item) => (
                  <div 
                    key={item.title}
                    className="flex items-center gap-8 glass p-8 rounded-[2.5rem] border-white/5 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-700 group cursor-default"
                  >
                    <div className="w-14 h-14 rounded-2xl glass border-white/5 flex items-center justify-center text-primary/40 group-hover:text-primary transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold tracking-[0.3em] text-white uppercase flex items-center gap-3">
                        <span className="text-primary/30 text-[9px]">{item.id}</span> {item.title}
                      </p>
                      <p className="text-[#EAE0C8]/40 text-sm font-light uppercase tracking-widest">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
