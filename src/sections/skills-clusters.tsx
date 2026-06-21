"use client";

import React from "react";
import { motion } from "framer-motion";

const PILLARS = [
  { 
    name: "Product Design", 
    skills: ["Figma", "UX Strategy", "System Design", "Product Thinking"] 
  },
  { 
    name: "Engineering", 
    skills: ["Java", "Spring Boot", "React", "Node.js"] 
  },
  { 
    name: "Infrastructure", 
    skills: ["AWS", "Docker", "PostgreSQL", "Supabase"] 
  },
  { 
    name: "Execution", 
    skills: ["Product Strategy", "Startup Building", "Technical Architecture", "Growth Systems"] 
  },
];

export function SkillsClusters() {
  return (
    <section className="py-48 px-6 bg-[#0F1317] relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto space-y-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-[10px] font-bold tracking-[0.6em] text-[#536878] uppercase">Capabilities</h2>
          <h3 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-white">Systems I Build With</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((pillar, idx) => (
            <motion.div 
              key={pillar.name} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-12 rounded-[3.5rem] border-white/5 space-y-10 flex flex-col items-center text-center group hover:border-white/10 transition-all"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#EAE0C8]">{pillar.name}</p>
              <div className="space-y-4 w-full">
                {pillar.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="py-3 border-b border-white/5 text-lg font-light text-[#EAE0C8]/60 group-hover:text-white transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
