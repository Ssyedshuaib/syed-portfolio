"use client";

import React from "react";
import { LaptopMockup } from "./laptop-mockup";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    number: "01",
    label: "PRODUCTIVITY PLATFORM",
    title: "Work Faster. Think Clearer.",
    description: "A minimalist productivity experience designed for deep work, focusing on organization, clarity, and zero-latency workflow optimization.",
    imageId: "zappy-landing"
  },
  {
    number: "02",
    label: "WORKFLOW",
    title: "High-Speed Task Management",
    description: "Zero-bloat task organization that keeps you in the flow. Built on local-first architecture for instant state synchronization.",
    imageId: "zappy-tasks"
  },
  {
    number: "03",
    label: "INTERFACE",
    title: "Minimalist High-Density Design",
    description: "An interface that removes the noise. Every pixel is optimized for focus, ensuring the tool never gets in the way of the work.",
    imageId: "zappy-dashboard"
  },
  {
    number: "04",
    label: "DEEP WORK",
    title: "Built-in Focus Analytics",
    description: "Track your deep work cycles and workflow optimization metrics through intuitive and beautiful visual analytics.",
    imageId: "zappy-analytics"
  },
  {
    number: "05",
    label: "TOOLS",
    title: "Integrated Workflow Systems",
    description: "Unified tools for notes, tasks, and scheduling, all connected through a single minimalist command center.",
    imageId: "zappy-tools"
  },
  {
    number: "06",
    label: "ARCHITECTURE",
    title: "Local-First Data Reliability",
    description: "Your data stays with you. Experience zero-latency performance even with complex workflows and large data sets.",
    imageId: "zappy-workflow"
  },
  {
    number: "07",
    label: "SYSTEM",
    title: "The Ultimate Personal OS.",
    description: "More than a tool—a system that helps you organize your modern digital life with unprecedented clarity and speed.",
    imageId: "zappy-overview"
  }
];

export function ZappyShowcase() {
  return (
    <section id="zappy-experience" className="bg-[#050505] relative overflow-hidden py-32">
      <div className="absolute inset-0 blueprint-grid opacity-[0.01] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 space-y-[25vh]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-12 mb-[15vh]"
        >
          <div className="inline-flex items-center gap-3 text-[10px] font-bold text-primary uppercase tracking-[0.6em] border border-white/5 px-6 py-2 rounded-full glass">
            Productivity Engine
          </div>
          <h2 className="text-7xl md:text-9xl font-headline font-black tracking-tighter text-white leading-none">
            Minimal <br />
            <span className="text-primary italic font-medium">Zappy.</span>
          </h2>
        </motion.div>

        {FEATURES.map((feature, idx) => (
          <div 
            key={idx}
            className={cn(
              "min-h-[85vh] flex flex-col items-center justify-between gap-24 lg:gap-48",
              idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            )}
          >
            <div className="flex-1 w-full">
              <LaptopMockup imageId={feature.imageId} />
            </div>

            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 space-y-12 text-center lg:text-left w-full"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-center lg:justify-start gap-4 text-primary">
                  <span className="text-xs font-bold tracking-[0.4em]">{feature.number}</span>
                  <div className="h-px w-12 bg-current opacity-20" />
                  <span className="text-[11px] font-bold tracking-[0.5em] uppercase">
                    {feature.label}
                  </span>
                </div>
                <h3 className="text-5xl md:text-7xl font-headline font-black text-white tracking-tighter leading-[0.9]">
                  {feature.title}
                </h3>
                <p className="text-xl md:text-2xl text-[#EAE0C8]/60 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {feature.description}
                </p>
              </div>
              
              <button className="group flex items-center gap-4 text-[11px] font-bold tracking-[0.4em] uppercase text-white hover:text-primary transition-colors">
                View Workflow
                <div className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
