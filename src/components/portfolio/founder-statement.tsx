"use client";

import React from "react";
import { motion } from "framer-motion";

export function FounderStatement() {
  return (
    <section id="founder-statement" className="py-64 px-6 relative bg-background overflow-hidden">
      {/* Subtle architectural lines */}
      <div className="absolute top-0 left-1/2 w-px h-32 bg-primary/5 -translate-x-1/2" />
      
      <div className="max-w-5xl mx-auto">
        <div className="space-y-32">
          {/* Label and Hero Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">FOUNDER</p>
            <h2 className="text-6xl md:text-9xl font-headline font-black tracking-tighter text-white leading-[0.85]">
              Building Systems <br />
              <span className="text-primary italic font-medium">That Outlive Trends.</span>
            </h2>
          </motion.div>

          {/* Manifesto Body */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-10 text-2xl md:text-4xl text-primary/70 font-light leading-relaxed">
                <div className="space-y-4">
                  <p>
                    I am <span className="text-white font-medium">Syed Sharfuddin Shuaib</span>, <br />
                    Founder of Axora.
                  </p>
                  <p className="text-lg md:text-xl text-primary/40 italic font-light">
                    Building digital ecosystems focused on education, memory preservation, and productivity.
                  </p>
                </div>
                <p>
                  My work focuses on designing digital ecosystems that solve meaningful problems through technology, systems thinking, and intentional design.
                </p>
                <p>
                  Rather than building isolated products, I focus on creating interconnected experiences that help people learn better, remember deeper, and work smarter.
                </p>
              </div>
              
              {/* Elegant divider */}
              <div className="pt-24">
                <div className="h-px w-24 bg-primary/10" />
              </div>
            </div>
            
            {/* Optional right-side accent spacing to maintain asymmetrical luxury layout */}
            <div className="hidden lg:block lg:col-span-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
