"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-32 px-6 border-t border-[#EAE0C8]/10 bg-[#0F1317]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-24">
        <div className="md:col-span-5 space-y-10">
          <div className="space-y-4">
            <p className="text-3xl font-headline font-bold tracking-tight text-white">Syed Sharfuddin Shuaib</p>
            <p className="text-[10px] text-[#536878] font-bold tracking-[0.5em] uppercase">
              Product Builder • Systems Architect • Founder
            </p>
          </div>
          <p className="text-[#EAE0C8]/60 text-lg font-light leading-relaxed italic">
            "Building products with curiosity, systems thinking, and long-term vision."
          </p>
        </div>

        <div className="md:col-span-3 space-y-8">
          <p className="text-[10px] font-bold tracking-[0.4em] text-[#536878] uppercase">Current Focus</p>
          <ul className="space-y-4 text-[#EAE0C8]/70 font-light">
            <li><Link href="/projects/reverie" className="hover:text-white transition-colors">Reverie</Link></li>
            <li><Link href="/projects/devnexus" className="hover:text-white transition-colors">DevNexus</Link></li>
            <li><span className="text-white/40">Axora Venture Studio</span></li>
          </ul>
        </div>

        <div className="md:col-span-4 text-left md:text-right space-y-8">
           <div className="space-y-4">
            <p className="text-[#EAE0C8]/50 text-base font-light leading-relaxed">
              Based in Bangalore, India. <br />
              Architecting future digital ecosystems.
            </p>
            <p className="text-[10px] text-[#536878]/30 font-bold uppercase tracking-[0.4em]">
              &copy; 2025 Syed Sharfuddin Shuaib.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
