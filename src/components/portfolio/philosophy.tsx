"use client";

import React from "react";
import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-64 px-6 relative bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">WHY I BUILD</p>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-6xl md:text-9xl font-headline font-black tracking-tighter text-white leading-[0.85]">
            Technology Should <br />
            <span className="text-primary italic font-medium">Create Meaning.</span>
          </h2>
        </motion.div>

        {/* Body Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-16 pt-12"
        >
          <div className="space-y-12 text-3xl md:text-5xl lg:text-6xl font-light leading-[1.2] text-primary/70 tracking-tight max-w-5xl">
            <p>
              I believe great technology should <span className="text-white font-medium">simplify life</span> rather than complicate it.
            </p>
            <p>
              Through Axora, I am building products designed around long-term value, meaningful experiences, and human-centered systems.
            </p>
            <p>
              Whether helping students learn, preserving memories tied to places, or creating tools for deeper focus, the goal remains the same:
            </p>
            <p className="text-white font-headline font-bold italic text-4xl md:text-7xl lg:text-8xl tracking-tighter pt-8">
              Build things that matter.
            </p>
          </div>
        </motion.div>

        {/* Minimal architectural divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-24 bg-primary/10 origin-left"
        />
      </div>
    </section>
  );
}
