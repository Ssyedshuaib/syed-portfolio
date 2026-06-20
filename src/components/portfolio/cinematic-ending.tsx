
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CinematicEnding() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(20px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section 
      id="cinematic-ending" 
      className="relative min-h-screen flex flex-col justify-center bg-[#0F1317] px-6 py-32 overflow-hidden"
    >
      {/* Giant Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[35vw] font-headline font-black text-white tracking-tighter leading-none text-center"
        >
          AXORA
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-end"
        >
          {/* Main Typography */}
          <div className="lg:col-span-8 space-y-16">
            <motion.div variants={itemVariants} className="space-y-4">
               <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">Final Chapter</p>
               <h2 className="text-7xl md:text-[12rem] font-headline font-black tracking-tighter text-white leading-[0.85]">
                Let's Build <br />
                <span className="text-primary italic font-medium">The Future.</span>
               </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-xl space-y-12">
               <p className="text-2xl md:text-3xl text-[#EAE0C8]/60 font-light leading-relaxed">
                 I build products, systems, and ecosystems designed for long-term impact.
               </p>
               
               <div className="space-y-2">
                 <p className="text-xl font-headline font-bold text-white tracking-tight">Syed Sharfuddin Shuaib</p>
                 <p className="text-[10px] font-bold tracking-[0.4em] text-[#536878] uppercase">Founder • Product Architect • Axora</p>
               </div>
            </motion.div>
          </div>

          {/* Contact Actions */}
          <div className="lg:col-span-4 space-y-16">
            <motion.div variants={itemVariants} className="space-y-12">
              <div className="space-y-8">
                <p className="text-[9px] font-bold tracking-[0.6em] text-primary/40 uppercase">Connect</p>
                <div className="flex flex-col gap-6">
                  {[
                    { label: "Email", href: "mailto:hello@axora.in" },
                    { label: "LinkedIn", href: "#" },
                    { label: "Instagram", href: "#" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group flex items-center justify-between py-4 border-b border-white/5 transition-all"
                    >
                      <span className="text-2xl font-light text-white/60 group-hover:text-primary group-hover:translate-x-2 transition-all duration-500">
                        {link.label}
                      </span>
                      <ArrowUpRight className="w-6 h-6 text-[#536878] group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-8 space-y-2">
                 <p className="text-[9px] font-bold tracking-[0.4em] text-[#536878] uppercase">Response Time</p>
                 <p className="text-xl text-white/40 font-light italic">24–48 Hours</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Signature Footer Area */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12"
      >
        <p className="text-[9px] font-bold tracking-[0.4em] text-[#536878] uppercase">
          &copy; 2026 AXORA. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-12 text-[9px] font-bold tracking-[0.5em] text-[#536878] uppercase">
          <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
          <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
          <span className="hover:text-white transition-colors cursor-pointer">Legal</span>
        </div>
      </motion.div>

      {/* Decorative Architectural Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-primary/20 to-transparent" />
    </section>
  );
}
