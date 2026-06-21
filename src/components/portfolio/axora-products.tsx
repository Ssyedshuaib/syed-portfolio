
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
    <section id="ecosystem" className="relative bg-background overflow-hidden py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-32 text-center max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">
              AXORA ECOSYSTEM
            </p>
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-white uppercase italic">
              Building Products <br />
              <span className="text-primary not-italic opacity-80">That Matter.</span>
            </h2>
            <p className="text-base text-primary/40 font-light leading-relaxed max-w-xl mx-auto">
              A venture studio dedicated to architecting digital ecosystems across education, memory, and future technologies.
            </p>
          </div>
        </div>

        {/* Product Split-Layout Rows */}
        <div className="space-y-24 lg:space-y-32">
          {PRODUCTS.map((product, idx) => (
            <ProductChapter key={product.id} product={product} idx={idx} />
          ))}
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

  const springY = useSpring(useTransform(scrollYProgress, [0, 1], [30, -30]), {
    stiffness: 80,
    damping: 30
  });

  const isEven = idx % 2 === 0;

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 min-h-[60vh]">
        
        {/* NARRATIVE COLUMN: 45% Width */}
        <div className={cn(
          "w-full lg:w-[45%] space-y-12 order-2",
          isEven ? "lg:order-1" : "lg:order-2"
        )}>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
               <span className="text-[12px] font-mono font-bold tracking-[0.4em] text-primary/20">{product.id}</span>
               <div className="h-px w-8 bg-primary/10" />
               <Badge variant="outline" className="text-[7px] font-bold uppercase tracking-[0.3em] border-primary/10 text-primary/40 px-3 py-0.5 rounded-full">
                 {product.status}
               </Badge>
            </div>
            
            <div className="space-y-3">
              <p className="text-[9px] font-bold tracking-[0.6em] text-primary/40 uppercase">{product.category}</p>
              <h3 className="text-4xl md:text-6xl font-headline font-black text-white tracking-tighter leading-none transition-colors group-hover:text-primary">
                {product.name}
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-headline font-light text-primary/60 italic tracking-tight">
                {product.mission}
              </p>
              <p className="text-base lg:text-lg text-primary/30 font-light leading-relaxed max-w-xl">
                {product.description}
              </p>
            </div>
          </div>

          <div className="flex gap-12 pt-10 border-t border-white/5 w-full">
            {product.metrics.map((metric: any) => (
              <div key={metric.label} className="space-y-1">
                <p className="text-2xl md:text-3xl font-headline font-black text-white">{metric.value}</p>
                <p className="text-[8px] font-bold tracking-[0.4em] text-primary/20 uppercase">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MOCKUP COLUMN: 55% Width */}
        <motion.div 
          style={{ y: springY }}
          className={cn(
            "w-full lg:w-[55%] flex order-1",
            isEven ? "lg:order-2 lg:justify-end" : "lg:order-1 lg:justify-start"
          )}
        >
          <div className="w-full max-w-[760px]">
            <LaptopMockup imageId={product.imageId} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
