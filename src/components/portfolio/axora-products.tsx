"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const PRODUCTS = [
  {
    id: "01",
    name: "REVERIE",
    category: "Place-Based Memory Platform",
    description: "A platform designed to preserve memories, emotions, and experiences through meaningful locations.",
    status: "In Development",
  },
  {
    id: "02",
    name: "DEVNEXUS",
    category: "Student Learning Ecosystem",
    description: "Helping students learn, earn, collaborate, and access resources through a unified platform.",
    status: "Active Development",
  },
  {
    id: "03",
    name: "GLOBAL GROUP OF SCHOOLS",
    category: "Education Technology Platform",
    description: "A modern digital ecosystem designed for admissions, communication, and school management.",
    status: "Completed",
  },
];

export function AxoraProducts() {
  return (
    <section id="axora-products" className="py-64 px-6 bg-background relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-48">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">AXORA ECOSYSTEM</p>
            <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white leading-[0.85]">
              Products Built <br />
              <span className="text-primary italic font-medium">With Purpose.</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-primary/60 font-light leading-relaxed max-w-2xl">
            Axora builds digital ecosystems designed to solve meaningful problems across education, memory preservation, productivity, and future technologies.
          </p>
        </motion.div>

        {/* Product Stack */}
        <div className="space-y-0">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative py-24 border-t border-white/5 first:border-t-0"
            >
              <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24 items-start lg:items-end">
                {/* Product Name & ID */}
                <div className="lg:col-span-8 space-y-12 w-full">
                  <div className="flex items-center gap-8">
                    <span className="text-[14px] font-bold tracking-[0.4em] text-primary/20 font-mono">{product.id}</span>
                    <Badge variant="outline" className="text-primary/30 border-primary/10 px-4 py-1 text-[8px] font-bold uppercase tracking-[0.3em] rounded-full">
                      {product.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold tracking-[0.6em] text-primary/40 uppercase">{product.category}</p>
                    <h3 className="text-6xl md:text-[9rem] font-headline font-black text-white tracking-tighter leading-[0.8] transition-all duration-1000 group-hover:text-primary group-hover:translate-x-4">
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Description & Action */}
                <div className="lg:col-span-4 space-y-12">
                  <p className="text-2xl text-primary/60 font-light leading-relaxed transition-colors duration-700 group-hover:text-primary/90">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-6 group/btn cursor-pointer">
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-black">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-primary/40 group-hover:text-white transition-colors">
                      Venture Details
                    </span>
                  </div>
                </div>
              </div>

              {/* Dynamic hover reveal effect */}
              <div className="absolute inset-x-[-10vw] inset-y-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}