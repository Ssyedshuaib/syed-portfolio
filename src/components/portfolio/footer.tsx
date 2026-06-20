"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-48 px-6 border-t border-[#EAE0C8]/10 bg-[#0F1317]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-24">
        {/* Left Column */}
        <div className="md:col-span-5 space-y-10">
          <div className="space-y-4">
            <p className="text-3xl font-headline font-bold tracking-tight text-white">Syed Sharfuddin Shuaib</p>
            <p className="text-[10px] text-[#536878] font-bold tracking-[0.5em] uppercase">
              Founder, Axora
            </p>
          </div>
          <p className="text-[#EAE0C8]/60 text-lg font-light leading-relaxed italic max-w-sm">
            "Building digital ecosystems through technology, design, and systems thinking."
          </p>
        </div>

        {/* Middle Column */}
        <div className="md:col-span-3 space-y-10">
          <p className="text-[10px] font-bold tracking-[0.4em] text-[#536878] uppercase">Current Ventures</p>
          <ul className="space-y-6 text-[#EAE0C8]/70 font-light text-lg">
            <li>
              <Link href="/projects/reverie" className="hover:text-white transition-colors">
                Reverie
              </Link>
            </li>
            <li>
              <Link href="/projects/devnexus" className="hover:text-white transition-colors">
                DevNexus
              </Link>
            </li>
            <li>
              <span className="text-white/40">Axora Venture Studio</span>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="md:col-span-4 space-y-10">
          <p className="text-[10px] font-bold tracking-[0.4em] text-[#536878] uppercase">Leadership</p>
          <div className="grid grid-cols-1 gap-8">
            <div className="space-y-2">
               <p className="text-[8px] font-bold tracking-[0.4em] text-[#536878]/50 uppercase">Founder</p>
               <p className="text-[#EAE0C8] font-light">Syed Sharfuddin Shuaib</p>
            </div>
            <div className="space-y-2">
               <p className="text-[8px] font-bold tracking-[0.4em] text-[#536878]/50 uppercase">Co-Founder</p>
               <p className="text-[#EAE0C8] font-light">Syed Maaz Athar</p>
            </div>
            <div className="space-y-2">
               <p className="text-[8px] font-bold tracking-[0.4em] text-[#536878]/50 uppercase">CEO</p>
               <p className="text-[#EAE0C8] font-light">Syed Umar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="max-w-7xl mx-auto pt-24 mt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] text-[#536878] font-bold uppercase tracking-[0.4em]">
          &copy; 2026 AXORA.
        </p>
        <p className="text-[10px] text-[#EAE0C8]/30 font-bold uppercase tracking-[0.4em]">
          Building products with long-term vision.
        </p>
      </div>
    </footer>
  );
}
