"use client";

import React from "react";
import { motion } from "framer-motion";

export function FounderManifesto() {
  const words = "Build Things That Matter.".split(" ");

  return (
    <section className="py-64 px-6 relative overflow-hidden bg-black">
      <div className="absolute inset-0 premium-glow pointer-events-none opacity-40" />
      
      <div className="max-w-5xl mx-auto text-center space-y-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-[10px] font-bold tracking-[0.8em] text-[#91766E]/60 uppercase">Founder Manifesto</h2>
          <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="text-6xl md:text-[8rem] font-headline font-black tracking-tighter leading-none text-white italic odd:text-[#F6ECE3]/30 odd:not-italic"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-24 text-xl md:text-3xl font-light leading-relaxed text-[#B7A7A9] max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I believe technology is most valuable when it <span className="text-[#F6ECE3] font-medium">solves real problems</span>. 
            Every product starts with understanding people. Every system starts with purpose.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col gap-12 text-[#91766E]/80"
          >
            <div className="h-px w-16 bg-[#91766E]/20 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 italic font-light text-lg">
              <p>I am not interested in building software for the sake of building software.</p>
              <p>I want to create products that improve experiences, simplify complexity, and create meaningful impact.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="space-y-12"
          >
            <p className="text-lg md:text-2xl font-light leading-relaxed">
              My goal is to build <span className="text-[#F6ECE3] font-medium">businesses, products, and ecosystems</span> that continue creating value long after they are launched.
            </p>
            <div className="space-y-4 pt-10">
              <p className="text-[10px] font-bold tracking-[0.5em] text-[#91766E] uppercase">The Principle</p>
              <h4 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter">
                Technology changes. Trends change. <br />
                <span className="text-[#F6ECE3] italic">Meaningful products endure.</span>
              </h4>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
