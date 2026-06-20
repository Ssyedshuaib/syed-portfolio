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
        <div className="w-40 h-40 rounded-full glass flex items-center justify-center border-white/5 shadow-[0_0_100px_rgba(83,104,120,0.1)] group-hover:scale-110 transition-transform duration-1000">
          <div className="text-center">
            <span className="text-white font-headline font-bold text-2xl tracking-[0.3em] uppercase block">SYED</span>
            <div className="h-px w-8 bg-[#536878]/40 mx-auto mt-3 rounded-full group-hover:w-14 transition-all duration-1000" />
          </div>
        </div>
        {/* Glow behind center */}
        <div className="absolute inset-0 bg-[#536878]/10 blur-[80px] rounded-full -z-10 animate-pulse" />
      </div>

      {/* Orbit Rings */}
      {[140, 180, 200, 220, 260, 300].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-[#EAE0C8]/05 transition-colors duration-1000"
          style={{ 
            width: r * 2, 
            height: r * 2,
            borderColor: hoveredNode ? 'rgba(234, 224, 200, 0.15)' : 'rgba(234, 224, 200, 0.05)'
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
            "px-6 py-3 glass rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-700 cursor-default",
            hoveredNode?.label === orbit.label 
              ? "text-white border-[#EAE0C8]/40 scale-125 bg-[#536878]/10 shadow-[0_0_30px_rgba(83,104,120,0.3)]" 
              : "text-[#EAE0C8]/50 hover:text-white"
          )}>
            {orbit.label}
          </div>
        </div>
      ))}

      {/* Tooltip */}
      {hoveredNode && (
        <div className="absolute bottom-[0%] glass p-8 rounded-3xl border-[#EAE0C8]/20 w-80 text-center animate-in fade-in zoom-in-95 duration-700 shadow-2xl">
          <p className="text-[#536878] font-bold tracking-[0.4em] uppercase text-[10px] mb-4">{hoveredNode.label}</p>
          <p className="text-[#EAE0C8]/70 text-base font-light leading-relaxed">{hoveredNode.desc}</p>
        </div>
      )}
    </div>
  );
}