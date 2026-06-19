"use client";

import React from "react";

const STATS = [
  { label: "Building DevNexus", value: "10+", suffix: "Months" },
  { label: "Products Designed", value: "5+", suffix: "" },
  { label: "CSE Graduate", value: "2026", suffix: "" },
  { label: "Self Driven", value: "100%", suffix: "" },
];

export function Impact() {
  return (
    <section className="py-24 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, idx) => (
          <div key={idx} className="group text-center space-y-2 p-8 rounded-3xl transition-all hover:bg-white/[0.02]">
            <div className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">
              {stat.value}
              <span className="text-xl md:text-2xl text-muted-foreground ml-1 font-medium">{stat.suffix}</span>
            </div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
