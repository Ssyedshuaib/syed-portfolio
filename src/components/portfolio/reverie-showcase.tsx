
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const PRODUCT_FEATURES = [
  {
    id: "discover",
    number: "01",
    label: "DISCOVER",
    title: "Stories from places that moved people.",
    description: "Explore emotional stories, places, and moments that inspire you.",
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
    description: "Visualize your life's journey through a geographical lens. See your growth and experiences mapped across the world in an elegant spatial interface.",
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

const IPhoneMockup = ({ imageId }: { imageId: string }) => {
  const image = PlaceHolderImages.find(img => img.id === imageId);
  
  return (
    <div className="relative z-20 group">
      {/* Cinematic Lighting Behind Device */}
      <div className="absolute -inset-20 bg-[#536878]/5 blur-[100px] rounded-full opacity-60 pointer-events-none group-hover:bg-[#EAE0C8]/5 transition-colors duration-1000" />
      
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[280px] h-[600px] md:w-[340px] md:h-[720px] rounded-[3.5rem] border-[12px] border-[#1C1C1C] bg-[#000000] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8),0_0_0:2px_rgba(255,255,255,0.05)] overflow-hidden"
      >
        {/* Titanium Frame Highlights */}
        <div className="absolute inset-0 border-[1px] border-white/15 rounded-[2.8rem] pointer-events-none z-30" />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/10 to-transparent z-30 pointer-events-none" />
        
        <div className="relative h-full w-full">
          {image && (
            <Image 
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              priority
              data-ai-hint={image.imageHint}
            />
          )}
          
          {/* Screen Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-30 mix-blend-overlay z-20" />
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-[1rem] z-40 border border-white/10 shadow-inner flex items-center justify-end px-3">
          <div className="w-1 h-1 rounded-full bg-[#1C1C1C] border border-white/5" />
        </div>
      </motion.div>

      {/* Ground Shadow */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-56 h-20 bg-black/60 blur-[40px] rounded-full -z-10" />
    </div>
  );
};

export function ReverieShowcase() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section id="product-experience" className="py-64 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EAE0C8]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-64 space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-[10px] font-bold text-[#536878] uppercase tracking-[0.5em]"
          >
            Product Experience
          </motion.div>
          
          <div className="space-y-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-7xl md:text-[9rem] font-headline font-black tracking-tighter text-white leading-[0.85]"
            >
              Reverie in <br />
              <span className="text-[#EAE0C8] italic font-serif font-light">every moment.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl text-[#EAE0C8]/60 font-light max-w-2xl leading-relaxed"
            >
              A seamless flow to capture, explore, and relive memories that matter — tied to places, emotions, and the stories that shape you.
            </motion.p>
          </div>
        </div>

        {/* Feature Sections */}
        <div className="space-y-64 md:space-y-[40rem]">
          {PRODUCT_FEATURES.map((feature, idx) => (
            <div 
              key={feature.id}
              className={cn(
                "flex flex-col md:flex-row items-center justify-between gap-24 lg:gap-48",
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 space-y-12 text-center md:text-left"
              >
                <div className="space-y-8">
                  <div className="flex items-center justify-center md:justify-start gap-4 text-[#536878]">
                    <span className="text-xs font-bold tracking-[0.4em]">{feature.number}</span>
                    <div className="h-px w-8 bg-current opacity-30" />
                    <span className="text-[11px] font-bold tracking-[0.5em] uppercase">
                      {feature.label}
                    </span>
                  </div>
                  <h3 className="text-5xl md:text-7xl lg:text-[5.5rem] font-headline font-black text-white tracking-tighter leading-[0.9]">
                    {feature.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-[#EAE0C8]/60 font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                    {feature.description}
                  </p>
                </div>
                
                {feature.id === 'discover' && (
                   <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="pt-8 flex justify-center md:justify-start"
                   >
                     <button className="w-14 h-14 rounded-full glass border-[#EAE0C8]/10 flex items-center justify-center text-[#EAE0C8] hover:bg-[#EAE0C8] hover:text-[#0F1317] transition-all duration-500 group">
                       <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </button>
                   </motion.div>
                )}
              </motion.div>

              {/* Visual Showcase */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex justify-center items-center"
              >
                <IPhoneMockup imageId={feature.imageId} />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-64 text-center space-y-12"
        >
          <div className="h-px w-24 bg-[#536878]/30 mx-auto" />
          <blockquote className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter leading-tight italic max-w-4xl mx-auto">
            "The goal is not just to archive data, but to preserve the emotional essence of the places that shape us."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
