"use client";

import React from "react";
import { motion } from "framer-motion";

const EXECUTIVES = [
  {
    name: "Syed Maaz Athar",
    role: "Co-Founder",
    focus: ["Growth", "Strategy", "Operations"],
  },
  {
    name: "Syed Umar",
    role: "Chief Executive Officer",
    focus: ["Execution", "Business Development", "Scaling"],
  },
];

const FOUNDER_FOCUS = ["Product Vision", "Systems Design", "Innovation"];

export function Leadership() {
  return (
    <section id="leadership" className="py-64 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.01] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-48">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">LEADERSHIP</p>
          <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white leading-none">
            The Vision <br />
            <span className="text-primary italic font-medium">Architects.</span>
          </h2>
        </motion.div>

        {/* Featured Founder Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <p className="text-[11px] font-bold tracking-[0.5em] text-primary/60 uppercase">Founder</p>
                <h3 className="text-7xl md:text-9xl font-headline font-black text-white tracking-tighter leading-[0.85]">
                  Syed Sharfuddin <br /> Shuaib
                </h3>
              </div>
              
              <div className="max-w-2xl">
                <blockquote className="text-2xl md:text-4xl text-primary/70 font-light leading-relaxed italic border-l-2 border-primary/10 pl-10">
                  "Building systems that outlive trends through technology, design, and long-term systems thinking."
                </blockquote>
              </div>
            </div>
            
            <div className="lg:col-span-4 space-y-8 pb-4">
              <p className="text-[9px] font-bold tracking-[0.4em] text-primary/30 uppercase">Strategic Focus</p>
              <ul className="space-y-4">
                {FOUNDER_FOCUS.map((item) => (
                  <li key={item} className="text-xl text-primary/50 font-light flex items-center gap-4">
                    <div className="h-px w-6 bg-primary/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Executive Divider */}
        <div className="h-px w-full bg-primary/5" />

        {/* Executive Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          {EXECUTIVES.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              className="space-y-12 group"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase group-hover:text-primary transition-colors">
                    {member.role}
                  </p>
                  <h4 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tight">
                    {member.name}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-x-10 gap-y-4">
                  {member.focus.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-primary/20" />
                      <span className="text-sm font-light text-primary/60 tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
