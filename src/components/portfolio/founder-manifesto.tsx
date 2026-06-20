"use client";

import React from "react";

export function FounderManifesto() {
  return (
    <section className="py-64 px-6 relative overflow-hidden">
      <div className="aurora-blur w-[1000px] h-[600px] bg-secondary/5 bottom-[-20%] right-[-10%]" />
      
      <div className="max-w-5xl mx-auto text-center space-y-24 relative z-10">
        <div className="space-y-8">
          <h2 className="text-[11px] font-bold tracking-[0.6em] text-primary uppercase">Founder Manifesto</h2>
          <h3 className="text-7xl md:text-[9rem] font-headline font-bold tracking-tighter leading-[0.8] reveal-on-scroll">
            Building With <br />
            <span className="italic text-white/20 font-medium">Intention.</span>
          </h3>
        </div>

        <div className="space-y-16 text-2xl md:text-5xl font-light leading-tight text-muted-foreground max-w-4xl mx-auto reveal-on-scroll delay-300">
          <p>
            I don't build products to chase trends. I build products to create <span className="text-foreground font-medium">clarity</span>, remove <span className="text-foreground font-medium">friction</span>, and improve the way people learn, connect, and grow.
          </p>
          <div className="h-px w-32 bg-primary/20 mx-auto" />
          <p>
            Every system begins with <span className="italic">understanding</span>. <br />
            Every product begins with <span className="italic">purpose</span>. <br />
            Every idea begins with <span className="italic">curiosity</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
