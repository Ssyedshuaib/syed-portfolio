"use client";

import React from "react";
import { Cpu, Users, Wind, Boxes } from "lucide-react";

const IDEAS = [
  { 
    title: "Future AI Systems", 
    desc: "Exploring AI systems that evolve beyond simple chat interfaces into proactive agents.",
    icon: Cpu 
  },
  { 
    title: "Digital Communities", 
    desc: "Reimagining meaningful online interactions for high-intent professional networks.",
    icon: Users 
  },
  { 
    title: "Spatial Memories", 
    desc: "Connecting stories and emotions to physical places using location intelligence.",
    icon: Wind 
  },
  { 
    title: "Learning Economies", 
    desc: "Designing systems where knowledge acquisition and contribution create verifiable value.",
    icon: Boxes 
  },
];

export function IdeasLab() {
  return (
    <section id="ideas" className="py-48 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-6">
          <h2 className="text-[10px] font-bold tracking-[0.5em] text-muted-foreground uppercase">Ideas Lab</h2>
          <h3 className="text-5xl md:text-6xl font-headline font-bold">Concepts & Experiments</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            The goal isn't just to show what I've built, but to show how I think about the future of technology and human interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {IDEAS.map((idea, idx) => (
            <div key={idx} className="glass p-12 rounded-[3rem] border-white/5 hover:border-white/10 transition-all duration-700 group">
              <div className="flex items-start gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center group-hover:bg-white/10 transition-all">
                  <idea.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 space-y-4">
                  <h4 className="text-2xl font-headline font-bold group-hover:text-foreground transition-colors">{idea.title}</h4>
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
