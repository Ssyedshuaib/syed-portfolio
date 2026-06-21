"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * THE FINAL CHAPTER (SHARED COMPONENT)
 * A premium closing statement that moves away from traditional footer patterns.
 * Synchronized with the main site's institutional footer design.
 */

const PROJECTS = ["Axora", "Reverie", "DevNexus"];

export function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-64 pb-16 px-6 overflow-hidden" role="contentinfo">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-48">
          
          {/* Main Chapter Statement */}
          <div className="space-y-4">
            {["Building products.", "Designing systems.", "Creating ecosystems."].map((text, i) => (
              <motion.h2
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.5, 
                  delay: i * 0.2, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={cn(
                  "text-5xl md:text-8xl lg:text-[clamp(3.5rem,8vw,9.5rem)] font-headline font-black tracking-tighter leading-[0.85] uppercase italic",
                  i === 1 ? "text-primary/20 not-italic" : "text-white"
                )}
              >
                {text}
              </motion.h2>
            ))}
          </div>

          {/* Institutional Signature & Metadata */}
          <div className="space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
              
              {/* Identity Column */}
              <div className="md:col-span-4 space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <p className="text-2xl font-headline font-bold text-white tracking-tight">Syed Shuaib</p>
                  <p className="text-[10px] font-bold tracking-[0.4em] text-primary/40 uppercase">
                    Founder • Product Builder • System Thinker
                  </p>
                </motion.div>
              </div>

              {/* Information Grid */}
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
                
                {/* Projects */}
                <div className="space-y-6">
                  <p className="text-[9px] font-bold tracking-[0.5em] text-white/20 uppercase">Projects</p>
                  <ul className="space-y-3">
                    {PROJECTS.map((project) => (
                      <li key={project} className="text-sm text-primary/60 font-light tracking-widest uppercase hover:text-white transition-colors cursor-default">
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Location */}
                <div className="space-y-6">
                  <p className="text-[9px] font-bold tracking-[0.5em] text-white/20 uppercase">Location</p>
                  <p className="text-sm text-primary/60 font-light tracking-widest uppercase">
                    Bangalore, India
                  </p>
                </div>

                {/* Focus */}
                <div className="space-y-6">
                  <p className="text-[9px] font-bold tracking-[0.5em] text-white/20 uppercase">Current Focus</p>
                  <p className="text-sm text-primary/60 font-light tracking-widest uppercase leading-relaxed">
                    Building digital <br /> ecosystems.
                  </p>
                </div>

              </div>
            </div>

            {/* Divider Line */}
            <div className="relative h-px w-full bg-white/5 overflow-hidden">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent origin-left"
              />
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8">
              <p className="text-[10px] font-bold tracking-[0.4em] text-white/10 uppercase">
                &copy; {new Date().getFullYear()} SYED SHUAIB
              </p>
              <div className="flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-primary/20" />
                <p className="text-[10px] font-bold tracking-[0.5em] text-white/10 uppercase italic">
                  Designed with intention.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
