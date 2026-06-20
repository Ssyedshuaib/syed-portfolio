"use client";

import React from "react";

const METRICS = [
  { label: "Products Built", value: "5+" },
  { label: "Industries", value: "Multiple" },
  { label: "Engineering", value: "Full Stack" },
  { label: "Philosophy", value: "Founder Mindset" },
];

export function ProductMetrics() {
  return (
    <section className="py-24 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {METRICS.map((stat, idx) => (
          <div key={idx} className="group text-center space-y-4 p-8 rounded-3xl transition-all hover:bg-white/[0.01]">
            <div className="text-4xl md:text-5xl font-headline font-bold text-foreground tracking-tighter">
              {stat.value}
            </div>
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.4em]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}