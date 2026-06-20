
"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Layout, Compass, Sparkles } from "lucide-react";

const ECOSYSTEM_NODES = [
  {
    title: "REVERIE",
    description: "Place-based memory platform.",
    icon: MapPin,
    position: "top-left",
  },
  {
    title: "DEVNEXUS",
    description: "Student growth ecosystem.",
    icon: Layout,
    position: "top-right",
  },
  {
    title: "FUTURE VENTURES",
    description: "Emerging digital products.",
    icon: Compass,
    position: "bottom-center",
  },
];

export function AxoraEcosystem() {
  return (
    <section id="axora" className="py-64 px-6 bg-[#050505] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.01] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-[10px] font-bold tracking-[0.8em] text-[#536878] uppercase">AXORA ECOSYSTEM</p>
              <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white leading-none">
                One Vision.<br />
                <span className="text-[#EAE0C8] italic font-medium">Multiple Products.</span>
              </h2>
              <p className="text-xl md:text-2xl text-[#EAE0C8]/60 font-light leading-relaxed max-w-lg">
                Axora is a venture studio focused on building digital ecosystems across education, memory preservation, productivity, and future technologies.
              </p>
            </motion.div>
          </div>

          {/* Visualization Area */}
          <div className="lg:col-span-7 relative aspect-square max-w-[600px] mx-auto flex items-center justify-center">
            
            {/* Center Node: AXORA */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-20"
            >
              <div className="w-40 h-40 rounded-full glass border-[#EAE0C8]/10 flex flex-col items-center justify-center shadow-[0_0_80px_rgba(234,224,200,0.05)]">
                <Sparkles className="w-6 h-6 text-[#536878] mb-3" />
                <span className="text-white font-headline font-bold text-xs tracking-[0.5em] uppercase">AXORA</span>
              </div>
              {/* Subtle ambient glow */}
              <div className="absolute inset-0 bg-[#EAE0C8]/5 blur-[60px] rounded-full -z-10" />
            </motion.div>

            {/* Satellite Nodes */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Connection Lines */}
                <motion.line 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  x1="50" y1="50" x2="25" y2="30" 
                  stroke="rgba(83,104,120,0.2)" strokeWidth="0.2" 
                />
                <motion.line 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  x1="50" y1="50" x2="75" y2="30" 
                  stroke="rgba(83,104,120,0.2)" strokeWidth="0.2" 
                />
                <motion.line 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.9 }}
                  x1="50" y1="50" x2="50" y2="75" 
                  stroke="rgba(83,104,120,0.2)" strokeWidth="0.2" 
                />
              </svg>
            </div>

            {/* Reverie Node */}
            <div className="absolute top-[30%] left-[25%] -translate-x-1/2 -translate-y-1/2 group pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="w-14 h-14 rounded-2xl glass border-[#EAE0C8]/05 flex items-center justify-center group-hover:border-[#EAE0C8]/20 transition-all duration-700">
                  <MapPin className="w-5 h-5 text-[#EAE0C8]/60 group-hover:text-white transition-colors" />
                </div>
                <div className="text-center space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-2 group-hover:translate-y-0">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">REVERIE</p>
                  <p className="text-[9px] text-[#536878] tracking-widest uppercase">Memory Platform</p>
                </div>
              </motion.div>
            </div>

            {/* DevNexus Node */}
            <div className="absolute top-[30%] right-[25%] translate-x-1/2 -translate-y-1/2 group pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="w-14 h-14 rounded-2xl glass border-[#EAE0C8]/05 flex items-center justify-center group-hover:border-[#EAE0C8]/20 transition-all duration-700">
                  <Layout className="w-5 h-5 text-[#EAE0C8]/60 group-hover:text-white transition-colors" />
                </div>
                <div className="text-center space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-2 group-hover:translate-y-0">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">DEVNEXUS</p>
                  <p className="text-[9px] text-[#536878] tracking-widest uppercase">Student Growth</p>
                </div>
              </motion.div>
            </div>

            {/* Future Ventures Node */}
            <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 translate-y-1/2 group pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="w-14 h-14 rounded-2xl glass border-[#EAE0C8]/05 flex items-center justify-center group-hover:border-[#EAE0C8]/20 transition-all duration-700">
                  <Compass className="w-5 h-5 text-[#EAE0C8]/60 group-hover:text-white transition-colors" />
                </div>
                <div className="text-center space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-2 group-hover:translate-y-0">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">FUTURE VENTURES</p>
                  <p className="text-[9px] text-[#536878] tracking-widest uppercase">Emerging Products</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
