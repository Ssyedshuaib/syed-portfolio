"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

const ORBITS = [
  { label: "Build", radius: "130px", duration: "18s", delay: "0s" },
  { label: "Learn", radius: "170px", duration: "22s", delay: "-4s" },
  { label: "Create", radius: "210px", duration: "26s", delay: "-8s" },
  { label: "Launch", radius: "250px", duration: "30s", delay: "-12s" },
  { label: "Scale", radius: "190px", duration: "24s", delay: "-16s" },
  { label: "Design", radius: "230px", duration: "28s", delay: "-2s" },
  { label: "Think", radius: "150px", duration: "20s", delay: "-6s" },
  { label: "Connect", radius: "270px", duration: "32s", delay: "-10s" },
];

export function OrbitalSystem() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center">
      {/* Central Node */}
      <div className="relative z-20 group cursor-none">
        <div className="w-36 h-36 rounded-full glass flex items-center justify-center border-primary/30 shadow-[0_0_80px_rgba(215,178,157,0.2)] group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="text-center">
            <span className="text-primary font-headline font-bold text-2xl tracking-widest uppercase block">Syed</span>
            <div className="h-0.5 w-8 bg-primary/40 mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-700" />
          </div>
        </div>
        {/* Glow behind center */}
        <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-full -z-10 animate-pulse group-hover:bg-primary/25 transition-all duration-700" />
      </div>

      {/* Orbit Rings */}
      {[130, 150, 170, 190, 210, 230, 250, 270].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-white/[0.04] transition-colors duration-500"
          style={{ 
            width: r * 2, 
            height: r * 2,
            borderColor: hoveredNode ? 'rgba(215, 178, 157, 0.08)' : 'rgba(255, 255, 255, 0.03)'
          }}
        />
      ))}

      {/* Nodes */}
      {ORBITS.map((orbit, idx) => (
        <div
          key={idx}
          className="absolute orbit-animation"
          style={{
            "--radius": orbit.radius,
            "--duration": orbit.duration,
            animationDelay: orbit.delay,
            "--play-state": hoveredNode ? 'paused' : 'running'
          } as React.CSSProperties}
          onMouseEnter={() => setHoveredNode(orbit.label)}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <div className={cn(
            "px-6 py-3 glass rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 cursor-pointer pointer-events-auto",
            hoveredNode === orbit.label 
              ? "text-primary border-primary/60 scale-125 shadow-[0_0_30px_rgba(215,178,157,0.3)] bg-primary/10" 
              : "text-muted-foreground opacity-60 hover:opacity-100"
          )}>
            {orbit.label}
          </div>
        </div>
      ))}
    </div>
  );
}