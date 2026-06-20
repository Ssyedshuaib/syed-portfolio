"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MapPin, Sparkles, Zap, Command } from "lucide-react";

const FOCUS_CHIPS = ["Reverie", "DevNexus", "Axora Studio"];

export function FounderProfile() {
  const portrait = PlaceHolderImages.find((img) => img.id === "founder-portrait");

  return (
    <section id="founder" className="py-64 px-6 relative bg-background overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Identity */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-12"
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">
                The Architect
              </div>
              <div className="space-y-6">
                <h3 className="text-5xl font-headline font-black text-white tracking-tighter uppercase leading-[0.85]">
                  Syed <br />Sharfuddin <br />Shuaib
                </h3>
                <div className="space-y-3 pt-4">
                  <p className="text-[11px] font-bold tracking-[0.4em] text-primary uppercase flex items-center gap-3">
                    <Sparkles className="w-3 h-3" /> Founder • Product Builder
                  </p>
                  <p className="text-[11px] font-bold tracking-[0.4em] text-primary/40 uppercase flex items-center gap-3">
                    <Command className="w-3 h-3" /> Systems Thinker
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5">
              <p className="text-[10px] font-bold tracking-[0.4em] text-primary/20 uppercase mb-4">Location</p>
              <div className="flex items-center gap-3 text-[#EAE0C8]/60 font-light">
                <MapPin className="w-4 h-4 text-primary/40" />
                <span className="text-lg">Bangalore, India</span>
              </div>
            </div>
          </motion.div>

          {/* CENTER COLUMN: Founder Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="relative aspect-[3/4] w-full glass rounded-[4rem] border-white/10 overflow-hidden shadow-2xl group">
              {portrait && (
                <Image 
                  src={portrait.imageUrl} 
                  alt={portrait.description} 
                  fill 
                  className="object-cover opacity-90 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                  data-ai-hint={portrait.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-12 left-12 right-12 space-y-6">
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-white border-white/20 px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest bg-white/5 backdrop-blur-md">Axora</Badge>
                  <Badge variant="outline" className="text-primary border-primary/20 px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest bg-primary/5 backdrop-blur-md">Founder</Badge>
                </div>
                <div className="h-px w-12 bg-primary/30" />
                <p className="text-[10px] font-bold tracking-[0.5em] text-white/50 uppercase">Product Architect</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Manifesto */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-16"
          >
            <div className="glass p-12 lg:p-16 rounded-[4rem] border-white/5 space-y-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <Zap className="w-24 h-24 text-white" />
              </div>

              <div className="space-y-10 relative z-10">
                <h4 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tighter leading-tight italic">
                  "Building systems <br />that outlive trends."
                </h4>
                
                <p className="text-xl md:text-2xl text-[#EAE0C8]/70 font-light leading-relaxed">
                  I build digital ecosystems that help people learn better, remember deeper, and work smarter. My focus is on the human experience before the code.
                </p>

                <div className="pt-8 space-y-8">
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold tracking-[0.5em] text-primary/40 uppercase">Current Focus</p>
                    <div className="flex flex-wrap gap-4">
                      {FOCUS_CHIPS.map((focus) => (
                        <div 
                          key={focus}
                          className="px-6 py-3 rounded-2xl glass border-white/5 hover:border-primary/20 hover:bg-primary/[0.02] transition-all text-sm font-medium text-white/80 cursor-default"
                        >
                          {focus}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 space-y-4">
              <p className="text-[10px] font-bold tracking-[0.5em] text-primary/30 uppercase">The Mission</p>
              <p className="text-[#EAE0C8]/40 text-lg font-light leading-relaxed italic">
                Architecting digital futures through design-first engineering and long-term systems thinking.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
