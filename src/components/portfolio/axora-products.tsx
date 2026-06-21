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
  const containerRef = useRef(null);

  return (
    <section id="ecosystem" ref={containerRef} className="relative bg-background overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-20">
          
          {/* LEFT SIDE: Sticky Narrative (30% Balance) */}
          <div className="lg:w-[30%] pt-24 lg:pt-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 space-y-8"
            >
              <div className="space-y-6">
                <p className="text-[10px] font-bold tracking-[0.8em] text-primary/40 uppercase">
                  AXORA ECOSYSTEM
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-[clamp(2.25rem,4.5vw,3rem)] font-headline font-black tracking-tighter text-white leading-[0.95]">
                  Building <br />
                  Products <br />
                  <span className="text-primary italic font-medium">That Matter.</span>
                </h2>
                <p className="text-sm lg:text-base text-primary/60 font-light leading-relaxed max-w-sm">
                  Axora is a venture studio dedicated to architecting digital ecosystems across education, memory, and future technologies.
                </p>
              </div>
              
              <div className="pt-10 border-t border-white/5 space-y-4">
                <p className="text-[10px] font-bold tracking-[0.4em] text-primary/20 uppercase">Core Philosophy</p>
                <p className="text-xs text-primary/40 leading-relaxed italic">
                  "We build for impact, ensuring every line of code serves a larger human purpose."
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Vertical Scrolling Stories (62% Balance - Pulled Inward) */}
          <div className="lg:w-[62%] space-y-32 lg:space-y-48 pt-24 lg:pt-32 pb-48">
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

  const springY = useSpring(useTransform(scrollYProgress, [0, 1], [40, -40]), {
    stiffness: 80,
    damping: 30
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      <div className="space-y-12 relative z-10">
        <div className={cn(
          "flex flex-col gap-6",
          idx % 2 === 0 ? "items-start" : "items-end text-right"
        )}>
          <div className="space-y-5 max-w-xl">
            <div className={cn(
              "flex items-center gap-6",
              idx % 2 !== 0 && "flex-row-reverse"
            )}>
               <span className="text-[12px] font-mono font-bold tracking-[0.4em] text-primary/20">{product.id}</span>
               <div className="h-px w-8 bg-primary/10" />
               <Badge variant="outline" className="text-[7px] font-bold uppercase tracking-[0.3em] border-primary/10 text-primary/40 px-3 py-0.5 rounded-full">
                 {product.status}
               </Badge>
            </div>
            
            <div className="space-y-1.5">
              <p className="text-[9px] font-bold tracking-[0.6em] text-primary/40 uppercase">{product.category}</p>
              <h3 className="text-4xl md:text-6xl lg:text-[clamp(2.75rem,6.5vw,5.1rem)] font-headline font-black text-white tracking-tighter leading-none transition-colors group-hover:text-primary">
                {product.name}
              </h3>
              <p className="text-lg md:text-xl font-headline font-light text-primary/60 italic tracking-tight">
                {product.mission}
              </p>
            </div>

            <p className="text-base lg:text-lg text-primary/40 font-light leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className={cn(
            "flex gap-8 pt-6 border-t border-white/5 w-full",
            idx % 2 !== 0 && "justify-end"
          )}>
            {product.metrics.map((metric: any) => (
              <div key={metric.label} className="space-y-0.5">
                <p className="text-xl md:text-2xl font-headline font-black text-white">{metric.value}</p>
                <p className="text-[7px] font-bold tracking-[0.4em] text-primary/20 uppercase">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          style={{ y: springY }}
          className="relative px-4 lg:px-0"
        >
          <LaptopMockup imageId={product.imageId} />
        </motion.div>
      </div>
    </motion.div>
  );
}