"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LaptopMockup } from "./laptop-mockup";
import { cn } from "@/lib/utils";

const PRODUCTS = [
  {
    id: "01",
    name: "REVERIE",
    category: "Place-Based Memory Platform",
    mission: "Capturing memories through places.",
    description: "A spatial system designed to preserve memories, emotions, and stories by anchoring them to physical geographic locations.",
    status: "In Development",
    imageId: "reverie-discover",
    metrics: [
      { label: "Memory Anchors", value: "12K+" },
      { label: "Global Nodes", value: "48" }
    ],
    accent: "rgba(83, 104, 120, 0.2)"
  },
  {
    id: "02",
    name: "DEVNEXUS",
    category: "Student Learning Ecosystem",
    mission: "Learn. Earn. Grow.",
    description: "A unified student operating system combining academic resources, AI mentorship, and a marketplace for real-world opportunities.",
    status: "Active Development",
    imageId: "devnexus-overview",
    metrics: [
      { label: "Active Students", value: "50K+" },
      { label: "Partner Hubs", value: "100+" }
    ],
    accent: "rgba(234, 224, 200, 0.15)"
  },
  {
    id: "03",
    name: "GLOBAL SCHOOLS",
    category: "Education Technology Platform",
    mission: "Modernizing the educational narrative.",
    description: "A high-end digital ecosystem optimized for admissions, parent engagement, and institutional branding for modern schools.",
    status: "Completed",
    imageId: "schools-ecosystem",
    metrics: [
      { label: "Institutions", value: "15+" },
      { label: "System Uptime", value: "99.9%" }
    ],
    accent: "rgba(255, 255, 255, 0.05)"
  }
];

export function AxoraProducts() {
  return (
    <section id="ecosystem" className="relative bg-background">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* LEFT SIDE: Sticky Narrative */}
          <div className="lg:w-1/3 pt-32 lg:pb-32">
            <div className="lg:sticky lg:top-48 space-y-10">
              <div className="space-y-6">
                <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">
                  AXORA ECOSYSTEM
                </p>
                <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-white leading-[0.9]">
                  Building <br />
                  Products <br />
                  <span className="text-primary italic font-medium">That Matter.</span>
                </h2>
                <p className="text-lg text-primary/60 font-light leading-relaxed max-w-sm">
                  Axora is a venture studio dedicated to architecting digital ecosystems across education, memory, and future technologies.
                </p>
              </div>
              
              <div className="pt-10 border-t border-white/5 space-y-4">
                <p className="text-[10px] font-bold tracking-[0.4em] text-primary/20 uppercase">Core Philosophy</p>
                <p className="text-sm text-primary/40 leading-relaxed italic">
                  "We build for impact, ensuring every line of code serves a larger human purpose."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Vertical Scrolling Stories */}
          <div className="lg:w-2/3 space-y-32 lg:space-y-64 pt-32 pb-64">
            {PRODUCTS.map((product, idx) => (
              <ProductChapter key={product.id} product={product} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductChapter({ product, idx }: { product: any; idx: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), {
    stiffness: 100,
    damping: 30
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 1 }}
      className="relative group"
    >
      {/* Background Accent Glow */}
      <div 
        className="absolute -inset-40 blur-[150px] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none"
        style={{ background: product.accent }}
      />

      <div className="space-y-20 relative z-10">
        {/* Header Block */}
        <div className={cn(
          "flex flex-col gap-10",
          idx % 2 === 0 ? "items-start" : "items-end text-right"
        )}>
          <div className="space-y-6 max-w-xl">
            <div className="flex items-center gap-6 group-hover:gap-8 transition-all duration-700">
               <span className="text-[14px] font-mono font-bold tracking-[0.4em] text-primary/20">{product.id}</span>
               <div className="h-px w-12 bg-primary/10 group-hover:w-20 transition-all duration-700" />
               <Badge variant="outline" className="text-[8px] font-bold uppercase tracking-[0.3em] border-primary/10 text-primary/40 px-4 py-1.5 rounded-full">
                 {product.status}
               </Badge>
            </div>
            
            <div className="space-y-2">
              <p className="text-[11px] font-bold tracking-[0.6em] text-primary/40 uppercase">{product.category}</p>
              <h3 className="text-7xl md:text-9xl font-headline font-black text-white tracking-tighter leading-none transition-colors group-hover:text-primary">
                {product.name}
              </h3>
              <p className="text-3xl md:text-4xl font-headline font-light text-primary/60 italic tracking-tight">
                {product.mission}
              </p>
            </div>

            <p className="text-xl text-primary/40 font-light leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Metrics Strip */}
          <div className="flex gap-12 pt-8 border-t border-white/5 w-full">
            {product.metrics.map((metric: any) => (
              <div key={metric.label} className="space-y-2">
                <p className="text-3xl font-headline font-black text-white">{metric.value}</p>
                <p className="text-[9px] font-bold tracking-[0.4em] text-primary/20 uppercase">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Mockup Area */}
        <motion.div 
          style={{ y }}
          className="relative px-4 lg:px-0"
        >
          <LaptopMockup imageId={product.imageId} />
        </motion.div>

        {/* Closing Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent pt-32" />
      </div>
    </motion.div>
  );
}
