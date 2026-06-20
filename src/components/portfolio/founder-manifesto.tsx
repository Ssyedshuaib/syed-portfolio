"use client";

import React from "react";
import { motion } from "framer-motion";

export function FounderManifesto() {
  const words = "Build Things That Matter.".split(" ");

  return (
    <section className="py-64 px-6 relative overflow-hidden bg-background">
      {/* Dynamic Environment Layers */}
      <div className="absolute inset-0 premium-glow pointer-events-none opacity-40" />
      
      <motion.div 
        animate={{ 
          opacity: [0.03, 0.06, 0.03],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.1),transparent_80%)]"
      />

      <div className="max-w-5xl mx-auto text-center space-y-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-[10px] font-bold tracking-[0.8em] text-[#536878] uppercase">Founder Manifesto</h2>
          <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(15px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: i * 0.15 }}
                className="text-6xl md:text-[8rem] font-headline font-black tracking-tighter leading-none text-white italic odd:text-[#EAE0C8]/30 odd:not-italic select-none"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-24 text-xl md:text-3xl font-light leading-relaxed text-[#EAE0C8]/70 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            I believe technology is most valuable when it <span className="text-[#EAE0C8] font-medium">solves real problems</span>. 
            Every product starts with understanding people. Every system starts with purpose.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.2 }}
            className="flex flex-col gap-12 text-[#536878]"
          >
            <div className="h-px w-16 bg-[#536878]/20 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 italic font-light text-lg">
              <p>I am not interested in building software for the sake of building software.</p>
              <p>I want to create products that improve experiences, simplify complexity, and create meaningful impact.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.5 }}
            className="space-y-12"
          >
            <p className="text-lg md:text-2xl font-light leading-relaxed">
              My goal is to build <span className="text-[#EAE0C8] font-medium">businesses, products, and ecosystems</span> that continue creating value long after they are launched.
            </p>
            <div className="space-y-4 pt-10">
              <p className="text-[10px] font-bold tracking-[0.5em] text-[#536878] uppercase">The Principle</p>
              <h4 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter">
                Technology changes. Trends change. <br />
                <span className="text-[#EAE0C8] italic">Meaningful products endure.</span>
              </h4>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
