
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const PRODUCT_FEATURES = [
  {
    id: "discover",
    number: "01",
    label: "DISCOVER",
    title: "Stories from places that moved people.",
    description: "Explore emotional stories, places, and moments that inspire you. Every location has a narrative waiting to be uncovered.",
    imageId: "reverie-discover",
  },
  {
    id: "capture",
    number: "02",
    label: "CAPTURE",
    title: "Preserve Meaningful Moments",
    description: "Move beyond the photo gallery. Capture the context, mood, and spirit of your experiences exactly where they happen.",
    imageId: "reverie-capture",
  },
  {
    id: "atlas",
    number: "03",
    label: "MEMORY ATLAS",
    title: "A Living Emotional Map",
    description: "Visualize your life's journey through a geographical lens. See your growth and experiences mapped across the world.",
    imageId: "reverie-atlas",
  },
  {
    id: "keepsakes",
    number: "04",
    label: "KEEPSAKES",
    title: "Collect What Matters Most",
    description: "Organize your most precious memories into curated collections. A digital home for the stories that define who you are.",
    imageId: "reverie-keepsakes",
  }
];

const IPhoneMockup = ({ imageId, index }: { imageId: string, index: number }) => {
  const image = PlaceHolderImages.find(img => img.id === imageId);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 group"
    >
      {/* Cinematic Lighting Behind Device */}
      <div className="absolute -inset-20 bg-[#536878]/5 blur-[120px] rounded-full opacity-60 pointer-events-none group-hover:bg-[#EAE0C8]/5 transition-colors duration-1000" />
      
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[280px] h-[600px] md:w-[360px] md:h-[760px] rounded-[3.5rem] border-[14px] border-[#1C1C1C] bg-black shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8),0_0_0_2px_rgba(255,255,255,0.05)] overflow-hidden"
      >
        {/* Titanium Frame Highlights */}
        <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2.8rem] pointer-events-none z-30" />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/5 to-transparent z-30 pointer-events-none" />
        
        {/* The Screen */}
        <div className="relative h-full w-full bg-[#0F1317]">
          {image && (
            <Image 
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
              priority
              data-ai-hint={image.imageHint}
            />
          )}
          
          {/* Screen Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none opacity-40 mix-blend-overlay z-20" />
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-[1.2rem] z-40 border border-white/5 shadow-inner flex items-center justify-end px-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C] border border-white/5" />
        </div>
      </motion.div>

      {/* Ground Shadow */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-24 bg-black/80 blur-[60px] rounded-full -z-10" />
    </motion.div>
  );
};

export function ReverieShowcase() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section id="product-experience" className="bg-[#050505] relative overflow-hidden py-32">
      {/* Background Ambience */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.01] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#536878]/20 to-transparent" />
      
      {/* Soft Navy Glows */}
      <div className="absolute top-1/4 -left-1/4 w-full h-full bg-[#536878]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-full h-full bg-[#536878]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-[25vh]">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-12 mb-[15vh]"
        >
          <div className="inline-flex items-center gap-3 text-[10px] font-bold text-[#536878] uppercase tracking-[0.6em] border border-white/5 px-6 py-2 rounded-full glass">
            Product Experience
          </div>
          <h2 className="text-7xl md:text-9xl font-headline font-black tracking-tighter text-white leading-none">
            Relive Every <br />
            <span className="text-[#EAE0C8] italic font-medium">Moment.</span>
          </h2>
        </motion.div>

        {/* Feature Blocks - Alternating Layout */}
        {PRODUCT_FEATURES.map((feature, idx) => (
          <div 
            key={feature.id}
            className={cn(
              "min-h-[85vh] flex flex-col items-center justify-between gap-24 lg:gap-48",
              idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            )}
          >
            {/* Visual Column */}
            <div className="flex-1 flex justify-center items-center w-full">
              <IPhoneMockup imageId={feature.imageId} index={idx} />
            </div>

            {/* Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 space-y-12 text-center lg:text-left w-full"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-center lg:justify-start gap-4 text-[#536878]">
                  <span className="text-xs font-bold tracking-[0.4em]">{feature.number}</span>
                  <div className="h-px w-12 bg-current opacity-20" />
                  <span className="text-[11px] font-bold tracking-[0.5em] uppercase">
                    {feature.label}
                  </span>
                </div>
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-headline font-black text-white tracking-tighter leading-[0.9]">
                  {feature.title}
                </h3>
                <p className="text-xl md:text-2xl text-[#EAE0C8]/60 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {feature.description}
                </p>
              </div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="pt-8 flex justify-center lg:justify-start"
              >
                <button className="group flex items-center gap-4 text-[11px] font-bold tracking-[0.4em] uppercase text-white hover:text-[#EAE0C8] transition-colors">
                  Explore Experience 
                  <div className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </motion.div>
            </motion.div>
          </div>
        ))}

        {/* Closing Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="pt-64 pb-32 text-center space-y-12"
        >
          <div className="h-px w-32 bg-[#536878]/20 mx-auto" />
          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-white tracking-tighter leading-tight italic max-w-5xl mx-auto">
            "The goal is not just to archive data, but to preserve the emotional essence of the places that shape our identity."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
