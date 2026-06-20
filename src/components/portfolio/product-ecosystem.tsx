"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Layers, MapPin, Zap, GraduationCap, Globe, Layout, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
  {
    title: "Reverie",
    category: "Memory Platform",
    mission: "Building the world's emotional atlas by connecting memories, places, and emotions.",
    status: "In Development",
    icon: MapPin,
    slug: "reverie",
    className: "md:col-span-2 md:row-span-2",
    isFlagship: true,
    visualHint: "constellation"
  },
  {
    title: "DevNexus",
    category: "Student Ecosystem",
    mission: "An integrated platform helping students learn, earn, network, and grow.",
    status: "Production Ready",
    icon: Layout,
    slug: "devnexus",
    className: "md:col-span-1 md:row-span-2",
    visualHint: "graph"
  },
  {
    title: "NovaPU",
    category: "Education Technology",
    mission: "A modern digital experience designed for future-ready education.",
    status: "Live",
    icon: GraduationCap,
    slug: "novapu",
    className: "md:col-span-1 md:row-span-1",
    visualHint: "nodes"
  },
  {
    title: "Campus Connect",
    category: "Networking",
    mission: "Designed to strengthen student communities and campus collaboration.",
    status: "Beta",
    icon: Globe,
    slug: "campus-connect",
    className: "md:col-span-1 md:row-span-1",
    visualHint: "grid"
  },
  {
    title: "Zappy",
    category: "Productivity",
    mission: "Focused on simplifying workflows through modern digital experiences.",
    status: "Production",
    icon: Zap,
    slug: "zappy",
    className: "md:col-span-1 md:row-span-1",
    visualHint: "minimal"
  },
  {
    title: "Global Group of Schools",
    category: "Education Technology",
    mission: "A modern digital experience designed for future-ready education.",
    status: "Completed",
    icon: Layers,
    slug: "global-group-schools",
    className: "md:col-span-2 md:row-span-1",
    visualHint: "structure"
  },
];

const VisualIdentity = ({ type }: { type: string }) => {
  if (type === "constellation") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none">
        <circle cx="20%" cy="30%" r="1" fill="white" />
        <circle cx="80%" cy="20%" r="1" fill="white" />
        <circle cx="40%" cy="70%" r="1" fill="white" />
        <circle cx="60%" cy="40%" r="1" fill="white" />
        <line x1="20%" y1="30%" x2="60%" y2="40%" stroke="white" strokeWidth="0.5" />
        <line x1="60%" y1="40%" x2="80%" y2="20%" stroke="white" strokeWidth="0.5" />
      </svg>
    );
  }
  if (type === "graph") {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none">
        <rect x="10%" y="10%" width="80%" height="80%" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
        <circle cx="50%" cy="50%" r="40%" fill="none" stroke="white" strokeWidth="0.5" />
      </svg>
    );
  }
  return <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />;
};

export function ProductEcosystem() {
  return (
    <section id="ecosystem" className="py-48 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-[10px] font-bold tracking-[0.8em] text-[#536878] uppercase">The Portfolio</h2>
          <div className="space-y-4">
            <h3 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white">Things I've Built</h3>
            <p className="text-xl md:text-2xl text-[#EAE0C8]/70 max-w-2xl font-light leading-relaxed">
              Every product begins with a problem worth solving. I design systems that create clarity, leverage, and lasting impact.
            </p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[450px]">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={cn(product.className)}
            >
              <Link
                href={`/projects/${product.slug}`}
                className={cn(
                  "group relative h-full w-full bg-[#536878]/05 rounded-[4rem] p-12 border border-[#EAE0C8]/05 flex flex-col justify-between overflow-hidden transition-all duration-700 hover:bg-[#536878]/10 hover:border-[#EAE0C8]/30",
                  product.isFlagship && "bg-[#536878]/10 border-[#EAE0C8]/20 shadow-[0_0_50px_rgba(83,104,120,0.1)]"
                )}
              >
                <VisualIdentity type={product.visualHint} />
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#536878]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="flex justify-between items-start relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-[#EAE0C8]/40 group-hover:bg-[#536878]/10 transition-all duration-500"
                  >
                    <product.icon className="w-8 h-8 text-[#EAE0C8]/50 group-hover:text-[#FFFFFF]" />
                  </motion.div>
                  <div className="px-4 py-1.5 rounded-full glass border-white/5 text-[8px] font-bold tracking-[0.3em] uppercase text-[#EAE0C8]/50">
                    {product.status}
                  </div>
                </div>
                
                <div className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <p className="text-[9px] font-bold tracking-[0.5em] text-[#536878] uppercase">{product.category}</p>
                    <p className={cn(
                      "font-headline font-black text-white tracking-tighter leading-none group-hover:text-[#EAE0C8] transition-colors",
                      product.isFlagship ? "text-5xl md:text-7xl" : "text-3xl md:text-5xl"
                    )}>
                      {product.title}
                    </p>
                  </div>
                  
                  <p className="text-[#EAE0C8]/70 text-lg leading-relaxed font-light transition-all duration-700">
                    {product.mission}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#EAE0C8] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    Explore Experience <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
