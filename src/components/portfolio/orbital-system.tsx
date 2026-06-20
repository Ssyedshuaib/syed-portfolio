"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

const ORBITS = [
  { label: "Observe", radius: "140px", duration: "18s", delay: "0s", desc: "Understanding the problem space deeply." },
  { label: "Understand", radius: "180px", duration: "22s", delay: "-4s", desc: "Mapping user needs and friction points." },
  { label: "Design", radius: "220px", duration: "26s", delay: "-8s", desc: "Architecting intuitive digital experiences." },
  { label: "Build", radius: "260px", duration: "30s", delay: "-12s", desc: "Engineering robust and scalable systems." },
  { label: "Launch", radius: "300px", duration: "34s", delay: "-16s", desc: "Deploying products that create value." },
  { label: "Scale", radius: "200px", duration: "24s", delay: "-6s", desc: "Iterating for growth and performance." },
];

export function OrbitalSystem() {
  const [hoveredNode, setHoveredNode] = useState<{label: string, desc: string} | null>(null);

  return (
    <div className="relative w-full aspect-square max-w-[650px] flex items-center justify-center">
      {/* Central Node */}
      <div className="relative z-20 group">
        <div className="w-32 h-32 rounded-full glass flex items-center justify-center border-white/20 shadow-[0_0_80px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-700">
          <div className="text-center">
            <span className="text-foreground font-headline font-bold text-xl tracking-[0.2em] uppercase block">SYED</span>
            <div className="h-px w-6 bg-white/20 mx-auto mt-2 rounded-full group-hover:w-10 transition-all duration-700" />
          </div>
        </div>
        {/* Glow behind center */}
        <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full -z-10 animate-pulse" />
      </div>

      {/* Orbit Rings */}
      {[140, 180, 200, 220, 260, 300].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-white/[0.03] transition-colors duration-700"
          style={{ 
            width: r * 2, 
            height: r * 2,
            borderColor: hoveredNode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)'
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
          onMouseEnter={() => setHoveredNode({label: orbit.label, desc: orbit.desc})}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <div className={cn(
            "px-5 py-2.5 glass rounded-full text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-500 cursor-default",
            hoveredNode?.label === orbit.label 
              ? "text-foreground border-white/40 scale-125 bg-white/10" 
              : "text-muted-foreground opacity-50 hover:opacity-100"
          )}>
            {orbit.label}
          </div>
        </div>
      ))}

      {/* Tooltip */}
      {hoveredNode && (
        <div className="absolute top-[80%] glass p-6 rounded-2xl border-white/10 w-64 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2">{hoveredNode.label}</p>
          <p className="text-muted-foreground text-sm font-light leading-relaxed">{hoveredNode.desc}</p>
        </div>
      )}
    </div>
  );
}