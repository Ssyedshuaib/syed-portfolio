"use client";

import React from "react";
import { cn } from "@/lib/utils";

const ORBITS = [
  { label: "Learn", delay: "0s", radius: "140px", duration: "18s" },
  { label: "Launch", delay: "-4s", radius: "180px", duration: "22s" },
  { label: "Scale", delay: "-8s", radius: "220px", duration: "26s" },
  { label: "Create", delay: "-12s", radius: "260px", duration: "30s" },
  { label: "Innovate", delay: "-16s", radius: "200px", duration: "24s" },
  { label: "Connect", delay: "-20s", radius: "160px", duration: "20s" },
];

export function OrbitalSystem() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center pointer-events-none">
      {/* Central Node */}
      <div className="relative z-10 w-24 h-24 rounded-full glass flex items-center justify-center border-primary/20 shadow-[0_0_30px_rgba(215,178,157,0.2)]">
        <span className="text-primary font-headline font-bold text-lg">Build</span>
      </div>

      {/* Orbit Rings (Decorative) */}
      <div className="absolute w-[280px] h-[280px] rounded-full border border-white/5" />
      <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5" />
      <div className="absolute w-[520px] h-[520px] rounded-full border border-white/5" />

      {/* Nodes */}
      {ORBITS.map((orbit, idx) => (
        <div
          key={idx}
          className="absolute orbit-animation"
          style={{
            "--radius": orbit.radius,
            "--duration": orbit.duration,
            animationDelay: orbit.delay,
          } as React.CSSProperties}
        >
          <div className="px-4 py-2 glass rounded-full text-xs font-medium text-muted-foreground border-white/10 hover:border-primary/50 hover:text-primary transition-all pointer-events-auto cursor-default">
            {orbit.label}
          </div>
        </div>
      ))}

      {/* Glowing background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
    </div>
  );
}
