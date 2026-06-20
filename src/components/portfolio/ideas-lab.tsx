"use client";

import React from "react";
import { Lightbulb, Fingerprint, Cpu, Users, Wind, Boxes } from "lucide-react";

const IDEAS = [
  { 
    title: "Future AI Systems", 
    desc: "Exploring how LLMs can move from chat interfaces to proactive operating systems.",
    icon: Cpu 
  },
  { 
    title: "Learning Economies", 
    desc: "Architecting systems where learning outcomes are tokenized and verifiable.",
    icon: Boxes 
  },
  { 
    title: "Digital Community", 
    desc: "Rethinking social structures for high-intent professional networks.",
    icon: Users 
  },
  { 
    title: "Spatial Memories", 
    desc: "Location-based experiences that anchor digital stories to physical geography.",
    icon: Fingerprint 
  },
];

export function IdeasLab() {
  return (
    <section id="ideas" className="py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-xs font-bold text-primary tracking-widest uppercase">
            <Lightbulb className="w-3 h-3" />
            Ideas Lab
          </div>
          <h3 className="text-5xl md:text-6xl font-headline font-bold">Concepts & Experiments</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            The goal isn't just to show what I've built, but to show how I think about the future of technology and human interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {IDEAS.map((idea, idx) => (
            <div key={idx} className="glass p-12 rounded-[3rem] border-white/5 hover:border-primary/20 transition-all duration-500 group">
              <div className="flex items-start gap-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <idea.icon className="w-8 h-8 text-primary/60" />
                </div>
                <div className="flex-1 space-y-4">
                  <h4 className="text-2xl font-headline font-bold group-hover:text-primary transition-colors">{idea.title}</h4>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">{idea.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}