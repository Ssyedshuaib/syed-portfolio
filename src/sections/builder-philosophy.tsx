"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function BuilderPhilosophy() {
  return (
    <section className="py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-20 rounded-[4rem] border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:opacity-10 transition-opacity">
             <Sparkles className="w-24 h-24 text-white" />
          </div>
          
          <div className="space-y-12 relative z-10 text-center md:text-left">
            <p className="text-[10px] font-bold tracking-[0.6em] text-[#536878] uppercase">Builder Philosophy</p>
            
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-headline font-bold leading-tight text-white tracking-tight">
                "I don't build products to follow trends. <br />
                I build systems that solve meaningful problems, create leverage, and <span className="text-[#EAE0C8] italic">compound value over time.</span>"
              </h3>
              
              <div className="h-px w-24 bg-[#536878]/30 mx-auto md:mx-0" />
              
              <p className="text-2xl md:text-3xl text-[#EAE0C8]/60 font-light italic">
                Every project begins with a simple question: <br />
                <span className="text-white font-medium not-italic">"What should exist that doesn't yet exist?"</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
