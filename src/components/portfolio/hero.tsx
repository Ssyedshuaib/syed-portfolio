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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-black">
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
            "inline-flex items-center gap-4 px-8 py-2.5 rounded-full glass border-[#F6ECE3]/5 text-[11px] font-bold text-[#F6ECE3] tracking-[0.6em] uppercase transition-all duration-1000",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Sparkles className="w-4 h-4 text-[#91766E] animate-pulse" />
            Founder • Product Builder • Entrepreneur
          </div>
          
          <div className="space-y-12">
            <h1 className={cn(
              "text-6xl md:text-[8rem] font-headline font-black tracking-tighter leading-[0.9] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] text-white",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
              <span className="block overflow-hidden">
                <span className={cn("block transition-transform duration-1000 delay-100", isMounted ? "translate-y-0" : "translate-y-full")}>Building Products.</span>
              </span>
              <span className="block overflow-hidden">
                <span className={cn("block text-[#91766E]/40 transition-transform duration-1000 delay-300", isMounted ? "translate-y-0" : "translate-y-full")}>Building Systems.</span>
              </span>
              <span className="block overflow-hidden">
                <span className={cn("block italic font-medium text-[#F6ECE3] transition-transform duration-1000 delay-500", isMounted ? "translate-y-0" : "translate-y-full")}>Building The Future.</span>
              </span>
            </h1>
            
            <p className={cn(
              "text-xl md:text-2xl text-[#B7A7A9] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light transition-all duration-[1500ms] delay-700",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              I create technology products, digital ecosystems, and scalable experiences designed to solve meaningful problems and create lasting impact.
            </p>
          </div>
          
          <div className={cn(
            "flex flex-wrap items-center justify-center lg:justify-start gap-12 transition-all duration-[1500ms] delay-1000",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <Button asChild size="lg" className="h-20 px-16 rounded-full bg-[#F6ECE3] text-[#000000] hover:bg-[#91766E] hover:text-white hover:scale-105 transition-all font-bold text-xl group shadow-[0_20px_60px_rgba(145,118,110,0.15)]">
              <Link href="#ecosystem">
                Explore My Work <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </Link>
            </Button>
            <Link href="#philosophy" className="text-[#B7A7A9] hover:text-white transition-all font-bold text-xl relative group">
              The Vision
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#F6ECE3]/40 transition-all duration-700 group-hover:w-full" />
            </Link>
          </div>
        </div>

        <div className={cn(
          "hidden lg:block relative transition-all duration-2000 delay-500",
          isMounted ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 rotate-2"
        )}>
          <OrbitalSystem />
        </div>
      </div>
      
      {/* Premium Scroll Indicator */}
      <div className={cn(
        "absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 transition-all duration-[2000ms] delay-1500",
        isMounted ? "opacity-40" : "opacity-0"
      )}>
        <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-[#B7A7A9]">Scroll to explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-[#F6ECE3]/40 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
