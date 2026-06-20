"use client";

import React from "react";
import { ArrowRight, Target } from "lucide-react";

const FOCUS_ITEMS = [
  "Architecting high-scale student products",
  "Mastering Java Full Stack ecosystems",
  "Designing AI-driven user experiences",
  "Building the future of DevNexus",
  "Exploring minimalist product philosophy"
];

export function CurrentFocus() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto glass rounded-[3rem] border-primary/10 p-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
        
        <div className="space-y-12 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-4xl font-headline font-bold">Currently Building</h3>
          </div>

          <div className="space-y-6">
            {FOCUS_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="h-px w-8 bg-primary/30 group-hover:w-12 transition-all duration-500" />
                <p className="text-2xl text-muted-foreground group-hover:text-foreground transition-colors font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}