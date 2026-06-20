"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="flex items-center gap-4 opacity-50">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
          <Sparkles className="w-5 h-5 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        <div className="space-y-12 text-center">
          <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase">Why I Build</h2>
          
          <div className="space-y-10">
            <p className="text-4xl md:text-6xl font-headline font-bold leading-[1.15] text-gradient">
              Technology becomes meaningful when it solves real problems.
            </p>
            
            <div className="max-w-2xl mx-auto space-y-8 text-xl text-muted-foreground leading-relaxed font-light">
              <p>
                I enjoy transforming ideas into products that help people learn, connect, grow, and achieve more.
              </p>
              <div className="relative py-8">
                 <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none">
                    <span className="text-9xl font-headline font-black uppercase">Problem</span>
                 </div>
                 <p className="relative z-10 text-foreground text-2xl font-medium">
                  Every project I build begins with a simple question: <br />
                  <span className="italic text-primary">"What problem am I solving?"</span>
                </p>
              </div>
              <p>
                This philosophy guides every product, experiment, and platform I create. I don't just build code; I architect solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}