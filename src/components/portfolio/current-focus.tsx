"use client";

import React from "react";
import { Target } from "lucide-react";

const FOCUS_ITEMS = [
  "Architecting scalable digital products",
  "Mastering Java Full Stack ecosystems",
  "Designing AI-driven user experiences",
  "Building Reverie",
  "Building future student ecosystems",
  "Exploring product-led thinking"
];

export function CurrentFocus() {
  return (
    <section className="py-48 px-6">
      <div className="max-w-4xl mx-auto glass rounded-[3rem] border-white/5 p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12">
           <Target className="w-12 h-12 text-white/5" />
        </div>
        
        <div className="space-y-12 relative z-10">
          <h3 className="text-4xl font-headline font-bold">Currently Building</h3>

          <div className="space-y-6">
            {FOCUS_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="h-px w-8 bg-white/10 group-hover:w-12 transition-all duration-500" />
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