
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Heart, PlusCircle, Compass, Target, Layers } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const ANNOTATIONS = [
  {
    id: "discovery",
    title: "Place Discovery",
    desc: "Explore stories from locations that moved people.",
    icon: Compass,
    top: "12%",
    left: "-28%",
    align: "right"
  },
  {
    id: "tagging",
    title: "Emotional Tagging",
    desc: "Contextualize memories with seasonal moods.",
    icon: Heart,
    top: "35%",
    right: "-28%",
    align: "left"
  },
  {
    id: "intelligence",
    title: "Location Intelligence",
    desc: "Spatial awareness that anchors stories to GPS.",
    icon: Target,
    top: "60%",
    left: "-25%",
    align: "right"
  },
  {
    id: "atlas",
    title: "Memory Atlas",
    desc: "Your life visualized through a geographical lens.",
    icon: Layers,
    bottom: "15%",
    right: "-25%",
    align: "left"
  }
];

export function ReverieShowcase() {
  const reverieImg = PlaceHolderImages.find(img => img.id === "reverie-app-ui");

  return (
    <section className="py-64 px-6 relative overflow-hidden bg-background">
      {/* Cinematic Background Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#536878]/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-12 mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border-[#EAE0C8]/10 text-[10px] font-bold text-[#536878] uppercase tracking-[0.6em]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Flagship Product • Spatial Computing
          </motion.div>
          
          <div className="space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold tracking-[0.8em] text-[#EAE0C8]/60 uppercase"
            >
              The Spatial Archive
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-[9rem] font-headline font-black tracking-tighter text-white uppercase leading-[0.85]"
            >
              Build Your <br />
              <span className="italic font-medium text-[#EAE0C8]">Journey.</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-[#EAE0C8]/70 font-light max-w-3xl mx-auto leading-relaxed"
            >
              Create a personal archive of places, emotions, and memories through location-based storytelling.
            </motion.p>
          </div>
        </div>

        <div className="relative flex justify-center items-center py-20 min-h-[900px]">
          {/* Annotation System - Only on Desktop */}
          {ANNOTATIONS.map((note) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, x: note.align === 'right' ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="hidden lg:block absolute z-30 w-72"
              style={{
                top: note.top,
                bottom: note.bottom,
                left: note.left,
                right: note.right,
                textAlign: note.align as any
              }}
            >
              <div className="space-y-4 group">
                <div className={`flex items-center gap-4 ${note.align === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="w-10 h-10 rounded-full glass border-[#EAE0C8]/20 flex items-center justify-center text-[#EAE0C8] group-hover:scale-110 group-hover:border-[#EAE0C8]/40 group-hover:bg-[#536878]/10 transition-all duration-700">
                    <note.icon className="w-4 h-4" />
                  </div>
                  <div className="h-px w-12 bg-[#EAE0C8]/10 group-hover:w-20 group-hover:bg-[#EAE0C8]/30 transition-all duration-1000" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-headline font-bold text-[10px] tracking-[0.3em] uppercase">{note.title}</h4>
                  <p className="text-[#EAE0C8]/50 text-xs font-light leading-relaxed">{note.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Premium Device Mockup (iPhone 16 Pro Titanium) */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20"
          >
            {/* Spotlight Lighting Effect */}
            <div className="absolute -inset-40 bg-[#536878]/5 blur-[120px] rounded-full opacity-60 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient from-white/5 to-transparent opacity-40 pointer-events-none" />
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[320px] h-[680px] md:w-[380px] md:h-[800px] rounded-[3.8rem] border-[14px] border-[#1C1C1C] bg-[#000000] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.9),0_0_0_2px_rgba(255,255,255,0.08)] overflow-hidden group"
            >
              {/* Titanium Frame Highlights */}
              <div className="absolute inset-0 border-[1px] border-white/20 rounded-[3rem] pointer-events-none z-30" />
              <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/10 to-transparent z-30 pointer-events-none" />
              
              <div className="relative h-full w-full">
                <Image 
                  src={reverieImg?.imageUrl || "https://picsum.photos/seed/reverie-ui/600/1200"}
                  alt="Reverie Interface"
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  priority
                  data-ai-hint="mobile app ui"
                />
                
                {/* Screen Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-40 mix-blend-overlay z-20" />
              </div>

              {/* Dynamic Island */}
              <div className="absolute top-7 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-[1.2rem] z-40 border border-white/10 shadow-inner flex items-center justify-end px-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C] border border-white/5" />
              </div>
            </motion.div>

            {/* Ground Shadow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-24 bg-black/60 blur-[50px] rounded-full -z-10" />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center space-y-12"
        >
          <div className="h-px w-24 bg-[#536878]/30 mx-auto" />
          <blockquote className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter leading-tight italic max-w-4xl mx-auto">
            "The goal is not just to archive data, but to preserve the emotional essence of the places that shape us."
          </blockquote>
          
          <div className="flex flex-wrap justify-center gap-12 pt-8">
            <div className="text-left space-y-2">
              <p className="text-[9px] font-bold text-[#536878] uppercase tracking-[0.4em]">Current Status</p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <p className="text-white font-medium text-lg">Alpha Testing</p>
              </div>
            </div>
            <div className="w-px h-16 bg-white/5 hidden md:block" />
            <div className="text-left space-y-2">
              <p className="text-[9px] font-bold text-[#536878] uppercase tracking-[0.4em]">Architecture</p>
              <p className="text-white font-medium text-lg">Distributed Spatial Ledger</p>
            </div>
            <div className="w-px h-16 bg-white/5 hidden md:block" />
            <div className="text-left space-y-2">
              <p className="text-[9px] font-bold text-[#536878] uppercase tracking-[0.4em]">Core Tech</p>
              <p className="text-white font-medium text-lg">Next.js • Firebase • Mapbox</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
