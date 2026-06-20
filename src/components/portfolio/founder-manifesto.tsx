"use client";

import React from "react";

export function FounderManifesto() {
  return (
    <section className="py-48 px-6 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto text-center space-y-20">
        <div className="space-y-8">
          <h2 className="text-[10px] font-bold tracking-[0.5em] text-muted-foreground uppercase">Manifesto</h2>
          <h3 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter">Building with intention.</h3>
        </div>

        <div className="space-y-12 text-2xl md:text-4xl font-light leading-tight text-muted-foreground max-w-3xl mx-auto">
          <p>
            I don't build products to chase trends. I build products to create <span className="text-foreground">clarity</span>, remove <span className="text-foreground">friction</span>, and improve the way people learn, connect, and grow.
          </p>
          <div className="h-px w-24 bg-white/10 mx-auto" />
          <p>
            Every system begins with understanding. <br />
            Every product begins with purpose.
          </p>
        </div>
      </div>
    </section>
  );
}