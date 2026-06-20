"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-2xl font-headline font-bold tracking-tight">Syed Sharfuddin Shuaib</p>
          <p className="text-[9px] text-muted-foreground font-bold tracking-[0.4em] uppercase">
            Product Builder • Software Engineer • Founder
          </p>
        </div>

        <div className="max-w-xs text-center md:text-right space-y-4">
          <p className="text-muted-foreground text-sm font-light leading-relaxed">
            Building products with curiosity and purpose. Based in Bangalore, India.
          </p>
          <p className="text-[10px] text-muted-foreground/20 font-bold uppercase tracking-[0.4em]">
            &copy; 2025 Syed Sharfuddin Shuaib.
          </p>
        </div>
      </div>
    </footer>
  );
}