
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Heart, PlusCircle, Compass } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const ANNOTATIONS = [
  {
    id: "discovery",
    title: "Place Discovery",
    desc: "Explore stories from locations that moved people.",
    icon: Compass,
    top: "15%",
    left: "-25%",
    align: "right"
  },
  {
    id: "mood",
    title: "Emotional Tagging",
    desc: "Contextualize memories with seasonal moods.",
    icon: Heart,
    top: "45%",
    right: "-25%",
    align: "left"
  },
  {
    id: "creation",
    title: "Memory Creation",
    desc: "Capture the soul of a place instantly.",
    icon: PlusCircle,
    bottom: "10%",
    left: "-20%",
    align: "right"
  }
];

export function ReverieShowcase() {
  const reverieImg = PlaceHolderImages.find(img => img.id === "reverie-app-ui");

  return (
    <section className="py-64 px-6 relative overflow-hidden bg-background">
      {/* Cinematic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#536878]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient from-[#EAE0C8]/5 to-transparent pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border-[#EAE0C8]/10 text-[10px] font-bold text-[#536878] uppercase tracking-[0.6em]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Flagship Product
          </motion.div>
          
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-7xl md:text-9xl font-headline font-black tracking-tighter text-white uppercase leading-none"
            >
              REVERIE
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-[#EAE0C8]/70 font-light max-w-3xl mx-auto italic"
            >
              Building the world's emotional atlas.
            </motion.p>
          </div>
        </div>

        <div className="relative flex justify-center items-center py-20">
          {/* Annotation System */}
          {ANNOTATIONS.map((note) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:block absolute z-30 w-72"
              style={{
                top: note.top,
                bottom: note.bottom,
                left: note.left,
                right: note.right,
                textAlign: note.align as any
              }}
            >
              <div className={`space-y-4 group`}>
                <div className={`flex items-center gap-4 ${note.align === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="w-10 h-10 rounded-full glass border-[#EAE0C8]/20 flex items-center justify-center text-[#EAE0C8] group-hover:scale-110 group-hover:border-[#EAE0C8]/40 transition-all">
                    <note.icon className="w-5 h-5" />
                  </div>
                  <div className="h-px w-12 bg-[#EAE0C8]/20 group-hover:w-20 transition-all duration-700" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-headline font-bold text-sm tracking-widest uppercase">{note.title}</h4>
                  <p className="text-[#EAE0C8]/60 text-xs font-light leading-relaxed">{note.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Premium Device Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 group"
          >
            {/* Spotlight behind device */}
            <div className="absolute -inset-20 bg-[#536878]/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative w-[320px] h-[680px] md:w-[380px] md:h-[800px] rounded-[3.5rem] border-[12px] border-[#2A2A2A] bg-[#000000] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8),0_0_0_2px_rgba(255,255,255,0.05)] overflow-hidden">
              {/* Titanium Highlight */}
              <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2.8rem] pointer-events-none z-30" />
              
              <div className="relative h-full w-full">
                <Image 
                  src={reverieImg?.imageUrl || "https://picsum.photos/seed/reverie-ui/600/1200"}
                  alt="Reverie Interface"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint="mobile app ui"
                />
                
                {/* Screen Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-30 mix-blend-overlay" />
              </div>

              {/* Dynamic Island */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-3xl z-40 border border-white/5 shadow-inner" />
            </div>

            {/* Float & Parallax Animation */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-20 bg-black/40 blur-[40px] rounded-full -z-10"
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-48 text-center space-y-10"
        >
          <p className="text-[10px] font-bold tracking-[0.8em] text-[#536878] uppercase">Flagship Narrative</p>
          <blockquote className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter leading-tight italic max-w-4xl mx-auto">
            "We don't just capture photos. We capture the soul of a place, ensuring every memory holds its original weight."
          </blockquote>
          <div className="pt-10 flex justify-center gap-8">
            <div className="text-left">
              <p className="text-[9px] font-bold text-[#536878] uppercase tracking-widest mb-1">Status</p>
              <p className="text-white font-medium text-lg flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Alpha Testing
              </p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-left">
              <p className="text-[9px] font-bold text-[#536878] uppercase tracking-widest mb-1">Architecture</p>
              <p className="text-white font-medium text-lg">Spatial Ledger</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
