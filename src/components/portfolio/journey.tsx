"use client";

import React from "react";

const TIMELINE = [
  { year: "2022", title: "Started Computer Science Engineering", desc: "Foundational year focusing on programming logic and data structures." },
  { year: "2023", title: "Built Web Development Projects", desc: "Dived into full-stack ecosystems, building tools for student productivity." },
  { year: "2024", title: "Blood Cancer Detection ML Project", desc: "Explored AI/ML applications in healthcare, achieving high accuracy metrics." },
  { year: "2025", title: "Focused on Product Design & Frontend", desc: "Mastering UI/UX and advanced frontend architectures to build world-class products." },
  { year: "2026", title: "Building DevNexus + Java Full Stack", desc: "Scaling ecosystems and professional grade systems. CSE Graduate." },
];

export function Journey() {
  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-headline font-bold">The Journey</h2>
          <p className="text-muted-foreground">The path from student to builder, one year at a time.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className={cn(
                "relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0",
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}>
                {/* Content */}
                <div className={cn(
                  "flex-1 pl-12 md:pl-0 md:px-12",
                  idx % 2 === 0 ? "md:text-right" : "md:text-left"
                )}>
                  <div className="glass p-6 rounded-2xl border-white/5 hover:border-primary/20 transition-colors">
                    <span className="text-primary font-headline font-bold text-lg mb-1 block">{item.year}</span>
                    <h3 className="font-headline font-bold text-foreground text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-8 md:top-auto w-8 h-8 rounded-full glass border-primary/50 flex items-center justify-center -translate-x-[calc(50%-15px)] md:-translate-x-1/2 z-10 bg-background">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
