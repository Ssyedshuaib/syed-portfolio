"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { OrbitalSystem } from "./orbital-system";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden bg-black">
      {/* Cinematic Depth Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(145,118,110,0.12),transparent_60%)]" />
      </div>

      {/* Floating Dust Particles */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="dust-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                "--duration": `${15 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 10}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center z-10">
        <div className="space-y-16 text-center lg:text-left">
          <div className={cn(
            "inline-flex items-center gap-4 px-8 py-2.5 rounded-full glass border-[#F6ECE3]/5 text-[11px] font-bold text-[#F6ECE3] tracking-[0.6em] uppercase transition-all duration-1500",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <Sparkles className="w-4 h-4 text-[#91766E] animate-pulse" />
            Product Builder & Founder
          </div>
          
          <div className="space-y-12">
            <h1 className={cn(
              "text-7xl md:text-[10rem] font-headline font-black tracking-tighter leading-[0.8] transition-all duration-1500 delay-200 text-white",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
            )}>
              I Build Systems <br />
              <span className="text-[#91766E]/40">That People </span> <br />
              <span className="italic font-medium text-[#F6ECE3]">Remember.</span>
            </h1>
            
            <p className={cn(
              "text-2xl md:text-3xl text-[#B7A7A9] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light transition-all duration-1500 delay-500",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
            )}>
              Architecting digital products, platforms, and ecosystems focused on solving meaningful problems through design and systems thinking.
            </p>
          </div>
          
          <div className={cn(
            "flex flex-wrap items-center justify-center lg:justify-start gap-12 transition-all duration-1500 delay-700",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
          )}>
            <Button asChild size="lg" className="h-20 px-16 rounded-full bg-[#F6ECE3] text-[#000000] hover:bg-[#91766E] hover:text-white hover:scale-105 transition-all font-bold text-xl group shadow-[0_20px_60px_rgba(145,118,110,0.15)]">
              <Link href="#ecosystem">
                Explore My Work <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </Link>
            </Button>
            <Link href="#journey" className="text-[#B7A7A9] hover:text-white transition-all font-bold text-xl relative group">
              View Journey
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#F6ECE3]/40 transition-all duration-700 group-hover:w-full" />
            </Link>
          </div>
        </div>

        <div className={cn(
          "hidden lg:block relative transition-all duration-2000 delay-1000",
          isMounted ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 rotate-6"
        )}>
          <OrbitalSystem />
        </div>
      </div>
      
      <div className={cn(
        "absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-1500 delay-2000",
        isMounted ? "opacity-30" : "opacity-0"
      )}>
        <ChevronDown className="w-12 h-12 text-[#91766E]" />
      </div>
    </section>
  );
}