"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Sparkles, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const LEADERS = [
  {
    role: "Founder",
    name: "Syed Sharfuddin Shuaib",
    focus: ["Product Vision", "Systems Design", "Innovation"],
    quote: "Building systems that outlive trends.",
    icon: Sparkles,
  },
  {
    role: "Co-Founder",
    name: "Syed Maaz Athar",
    focus: ["Growth", "Strategy", "Operations"],
    quote: "Turning ideas into scalable opportunities.",
    icon: Target,
  },
  {
    role: "Chief Executive Officer",
    name: "Syed Umar",
    focus: ["Execution", "Business Development", "Scaling"],
    quote: "Transforming vision into execution.",
    icon: Zap,
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="py-64 px-6 bg-[#050505] relative overflow-hidden">
      {/* Architectural Background */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Header Section */}
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">Leadership</p>
            <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white leading-none">
              The Minds <br />
              <span className="text-primary italic font-medium">Behind Axora.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-[#EAE0C8]/60 font-light leading-relaxed">
              Three complementary perspectives. One long-term vision.
            </p>
            <p className="text-lg text-[#536878] font-bold tracking-[0.2em] uppercase">
              Together building products, platforms and digital ecosystems.
            </p>
          </motion.div>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERS.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass p-12 rounded-[3.5rem] border-white/5 h-full flex flex-col justify-between transition-all duration-700 hover:border-primary/20 hover:bg-primary/[0.02] relative overflow-hidden">
                {/* Internal Card Spotlight */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,224,200,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="space-y-12 relative z-10">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase group-hover:text-primary transition-colors">
                        {leader.role}
                      </p>
                      <leader.icon className="w-4 h-4 text-primary/20 group-hover:text-primary group-hover:rotate-12 transition-all duration-700" />
                    </div>
                    <h3 className="text-3xl font-headline font-bold text-white tracking-tight leading-tight">
                      {leader.name}
                    </h3>
                  </div>

                  {/* Focus Areas */}
                  <div className="space-y-4">
                    <p className="text-[9px] font-bold tracking-[0.4em] text-[#536878] uppercase">Core Focus</p>
                    <ul className="space-y-3">
                      {leader.focus.map((item) => (
                        <li key={item} className="flex items-center gap-4 text-lg text-[#EAE0C8]/50 font-light group-hover:text-[#EAE0C8]/80 transition-colors">
                          <div className="h-px w-4 bg-primary/20 group-hover:w-6 group-hover:bg-primary/40 transition-all duration-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Quote */}
                <div className="pt-12 mt-12 border-t border-white/5 relative z-10">
                  <div className="flex gap-4">
                    <Quote className="w-4 h-4 text-primary/30 flex-shrink-0" />
                    <p className="text-lg text-[#EAE0C8]/60 italic font-light leading-relaxed">
                      "{leader.quote}"
                    </p>
                  </div>
                </div>
              </div>

              {/* External Card Glow */}
              <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Closing Vision */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-24 flex flex-col items-center gap-8 text-center"
        >
          <div className="h-px w-24 bg-primary/10" />
          <p className="text-[10px] font-bold tracking-[0.6em] text-[#536878] uppercase">
            Architecting The Future Together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
