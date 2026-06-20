"use client";

import React from "react";
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
  return (
    <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center">
      {/* Central Node */}
      <div className="relative z-20 group">
        <div className="w-32 h-32 rounded-full glass flex items-center justify-center border-primary/30 shadow-[0_0_50px_rgba(215,178,157,0.15)] group-hover:scale-110 transition-transform duration-500">
          <div className="text-center">
            <span className="text-primary font-headline font-bold text-2xl tracking-widest uppercase">Syed</span>
            <div className="h-0.5 w-8 bg-primary/40 mx-auto mt-1 rounded-full" />
          </div>
        </div>
        {/* Glow behind center */}
        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full -z-10 animate-pulse" />
      </div>

      {/* Orbit Rings */}
      {[130, 170, 210, 250].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border border-white/[0.03]"
          style={{ width: r * 2, height: r * 2 }}
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
          } as React.CSSProperties}
        >
          <div className="px-5 py-2.5 glass rounded-full text-[11px] font-bold tracking-[0.15em] uppercase text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all cursor-default pointer-events-auto shadow-xl">
            {orbit.label}
          </div>
        </div>
      ))}
    </div>
  );
}