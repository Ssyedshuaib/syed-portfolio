"use client";

import React from "react";
import { motion } from "framer-motion";

const TEAM = [
  {
    role: "Founder",
    name: "Syed Sharfuddin Shuaib",
    title: "Founder",
    focus: ["Product Vision", "Systems Design", "Innovation"],
  },
  {
    role: "Co-Founder",
    name: "Syed Maaz Athar",
    title: "Co-Founder",
    focus: ["Growth", "Strategy", "Operations"],
  },
  {
    role: "CEO",
    name: "Syed Umar",
    title: "Chief Executive Officer",
    focus: ["Execution", "Business Development", "Scaling"],
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="py-64 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.01] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">LEADERSHIP</p>
          <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white leading-none">
            The Team <br />
            <span className="text-primary italic font-medium">Behind Axora.</span>
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12 group"
            >
              <div className="space-y-4">
                <p className="text-[9px] font-bold tracking-[0.4em] text-primary/60 uppercase group-hover:text-primary transition-colors">
                  {member.role}
                </p>
                <div className="h-px w-8 bg-primary/10 group-hover:w-16 transition-all duration-700" />
              </div>

              <div className="space-y-6">
                <h3 className="text-4xl font-headline font-bold text-white tracking-tight leading-tight">
                  {member.name}
                </h3>
                <p className="text-lg text-primary/70 font-light italic">
                  {member.title}
                </p>
              </div>

              <div className="pt-10 border-t border-white/5 space-y-4">
                <p className="text-[8px] font-bold tracking-[0.4em] text-primary/30 uppercase">Focus Areas</p>
                <ul className="space-y-3">
                  {member.focus.map((item) => (
                    <li key={item} className="text-base text-primary/50 font-light">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
