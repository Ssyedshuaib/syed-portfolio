"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Layers, MapPin, Zap, GraduationCap, Globe, Layout } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    title: "Reverie",
    category: "Memory Platform",
    type: "Spatial System",
    status: "In Development",
    desc: "A place-based memory platform helping people preserve stories, emotions, and experiences connected to real-world locations.",
    icon: MapPin,
    slug: "reverie",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "DevNexus",
    category: "Student Ecosystem",
    type: "Digital Platform",
    status: "Production Ready",
    desc: "An all-in-one platform designed to help students learn, connect, earn, and grow through a unified digital ecosystem.",
    icon: Layout,
    slug: "devnexus",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "NovaPU",
    category: "Learning Platform",
    type: "Educational Tool",
    status: "Live",
    desc: "A structured preparation tool providing organized resources and notes for academic excellence and exam readiness.",
    icon: GraduationCap,
    slug: "novapu",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Campus Connect",
    category: "Networking",
    type: "Social Infrastructure",
    status: "Beta",
    desc: "A hyper-local networking engine designed to foster collaboration and community within university environments.",
    icon: Globe,
    slug: "campus-connect",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Zappy",
    category: "Productivity",
    type: "Productivity Tool",
    status: "Production",
    desc: "A minimalist productivity experience designed for deep work, focusing on organization and workflow optimization.",
    icon: Zap,
    slug: "zappy",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Global Group of Schools",
    category: "Education Technology",
    type: "Digital Presence",
    status: "Completed",
    desc: "A modern digital platform designed for educational institutions with a focus on admissions, parent engagement, and branding.",
    icon: Layers,
    slug: "global-group-schools",
    className: "md:col-span-2 md:row-span-1",
  },
];

export function ProductEcosystem() {
  return (
    <section id="ecosystem" className="py-48 px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-[10px] font-bold tracking-[0.8em] text-[#536878] uppercase">Product Ecosystem</h2>
          <h3 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white">Things I've Built</h3>
          <p className="text-xl md:text-2xl text-[#EAE0C8]/70 max-w-2xl font-light leading-relaxed">
            Every product begins with a problem worth solving. I design systems that create clarity, purpose, and lasting impact.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[400px]">
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
                  "group relative h-full w-full bg-[#536878]/10 rounded-[3.5rem] p-12 border border-[#EAE0C8]/05 flex flex-col justify-between overflow-hidden transition-all duration-700 hover:bg-[#536878]/20 hover:border-[#EAE0C8]/30"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#536878]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="flex justify-between items-start relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-[#EAE0C8]/40 group-hover:bg-[#536878]/10 transition-all duration-500"
                  >
                    <product.icon className="w-8 h-8 text-[#EAE0C8]/50 group-hover:text-[#FFFFFF]" />
                  </motion.div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="px-4 py-1.5 rounded-full glass border-white/5 text-[8px] font-bold tracking-[0.3em] uppercase text-[#EAE0C8]/50">
                      {product.status}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 relative z-10">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold tracking-[0.5em] text-[#536878] uppercase">{product.category}</p>
                    <p className="text-3xl md:text-5xl font-headline font-black text-white tracking-tighter leading-none group-hover:text-[#EAE0C8] transition-colors">
                      {product.title}
                    </p>
                  </div>
                  
                  <p className="text-[#EAE0C8]/70 text-base leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    {product.desc}
                  </p>
                </div>

                <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-white/10 group-hover:bg-[#EAE0C8]/10">
                    <ExternalLink className="w-5 h-5 text-[#EAE0C8]" />
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