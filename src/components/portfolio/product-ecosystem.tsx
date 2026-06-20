"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { MapPin, Zap, GraduationCap, Globe, Layout, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    title: "REVERIE",
    category: "MEMORY PLATFORM",
    mission: "A place-based memory platform that transforms experiences, emotions, and locations into a living emotional atlas.",
    status: "In Development",
    icon: MapPin,
    slug: "reverie",
    className: "md:col-span-2 md:row-span-2",
    isFlagship: true,
    visualHint: "constellation"
  },
  {
    title: "DEVNEXUS",
    category: "STUDENT ECOSYSTEM",
    mission: "A platform helping students learn, earn, connect, and grow through a unified digital experience.",
    status: "Production Ready",
    icon: Layout,
    slug: "devnexus",
    className: "md:col-span-1 md:row-span-2",
    visualHint: "graph"
  },
  {
    title: "GLOBAL SCHOOLS",
    category: "EDUCATION TECHNOLOGY",
    mission: "A modern educational website focused on admissions, communication, and digital-first learning experiences.",
    status: "Completed",
    icon: Layers,
    slug: "global-group-schools",
    className: "md:col-span-2 md:row-span-1",
    visualHint: "structure"
  },
  {
    title: "NOVAPU",
    category: "LEARNING PLATFORM",
    mission: "Helping students access structured educational experiences and resources.",
    status: "In Development",
    icon: GraduationCap,
    slug: "novapu",
    className: "md:col-span-1 md:row-span-1",
    visualHint: "nodes"
  },
  {
    title: "CAMPUS CONNECT",
    category: "COMMUNITY PLATFORM",
    mission: "Building stronger student communities through digital interaction and collaboration.",
    status: "Beta",
    icon: Globe,
    slug: "campus-connect",
    className: "md:col-span-1 md:row-span-1",
    visualHint: "grid"
  },
  {
    title: "ZAPPY",
    category: "PRODUCTIVITY PLATFORM",
    mission: "A modern productivity experience designed around simplicity and organization.",
    status: "Prototype",
    icon: Zap,
    slug: "zappy",
    className: "md:col-span-1 md:row-span-1",
    visualHint: "minimal"
  },
];

const VisualIdentity = ({ type }: { type: string }) => {
  const commonClasses = "absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none transition-opacity group-hover:opacity-[0.12] duration-1000";
  
  if (type === "constellation") {
    return (
      <svg className={commonClasses} viewBox="0 0 100 100">
        <circle cx="20" cy="30" r="0.5" fill="white" />
        <circle cx="80" cy="20" r="0.5" fill="white" />
        <circle cx="40" cy="70" r="0.5" fill="white" />
        <circle cx="60" cy="40" r="0.5" fill="white" />
        <line x1="20" y1="30" x2="60" y2="40" stroke="white" strokeWidth="0.2" />
        <line x1="60" y1="40" x2="80" y2="20" stroke="white" strokeWidth="0.2" />
        <line x1="40" y1="70" x2="60" y2="40" stroke="white" strokeWidth="0.2" />
      </svg>
    );
  }
  if (type === "graph") {
    return (
      <svg className={commonClasses} viewBox="0 0 100 100">
        <path d="M10,90 Q50,10 90,90" fill="none" stroke="white" strokeWidth="0.2" strokeDasharray="2,2" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.1" />
      </svg>
    );
  }
  if (type === "structure") {
    return (
      <svg className={commonClasses} viewBox="0 0 100 100">
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="white" strokeWidth="0.1" />
        <line x1="20" y1="50" x2="80" y2="50" stroke="white" strokeWidth="0.1" />
        <line x1="50" y1="20" x2="50" y2="80" stroke="white" strokeWidth="0.1" />
      </svg>
    );
  }
  return <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />;
};

export function ProductEcosystem() {
  return (
    <section id="ecosystem" className="py-48 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-[10px] font-bold tracking-[0.8em] text-[#536878] uppercase">Things I've Built</h2>
          <div className="space-y-4">
            <h3 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-white">The Product Portfolio</h3>
            <p className="text-lg md:text-xl text-[#EAE0C8]/70 max-w-2xl font-light leading-relaxed">
              A growing ecosystem of products designed to solve meaningful problems through technology, design, and systems thinking.
            </p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={cn(product.className)}
            >
              <Link
                href={`/projects/${product.slug}`}
                data-cursor="explore"
                className={cn(
                  "group relative h-full w-full bg-[#536878]/05 rounded-[3rem] p-10 border border-[#EAE0C8]/05 flex flex-col justify-between overflow-hidden transition-all duration-700 ease-premium hover:bg-[#536878]/10 hover:border-[#EAE0C8]/25 hover:-translate-y-2",
                  product.isFlagship && "bg-[#536878]/08 border-[#EAE0C8]/15 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
                )}
              >
                <VisualIdentity type={product.visualHint} />
                
                {/* Spotlight effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                <div className="flex justify-between items-start relative z-10 mb-8">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold tracking-[0.4em] text-[#536878] uppercase">{product.category}</p>
                    <h4 className={cn(
                      "font-headline font-black text-white tracking-tight leading-none group-hover:text-[#EAE0C8] transition-colors duration-500",
                      product.isFlagship ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"
                    )}>
                      {product.title}
                    </h4>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-full glass border-white/5 text-[7px] font-bold tracking-[0.2em] uppercase text-[#EAE0C8]/60"
                    >
                      {product.status}
                    </motion.div>
                  </div>
                </div>
                
                <div className="space-y-8 relative z-10">
                  <p className={cn(
                    "text-[#EAE0C8]/70 leading-relaxed font-light transition-all duration-700 group-hover:text-white/90",
                    product.isFlagship ? "text-xl max-w-lg" : "text-base"
                  )}>
                    {product.mission}
                  </p>

                  <div className="flex items-center gap-3 text-[9px] font-bold tracking-[0.3em] text-[#EAE0C8] uppercase group-hover:text-white transition-all duration-500">
                    <span className="relative">
                      Explore Experience
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-current group-hover:w-full transition-all duration-500" />
                    </span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-500" />
                  </div>
                </div>

                {/* Flagship Indicator Glow */}
                {product.isFlagship && (
                  <motion.div 
                    animate={{ opacity: [0.02, 0.05, 0.02] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-0 right-0 w-48 h-48 bg-[#EAE0C8]/10 blur-3xl pointer-events-none" 
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
