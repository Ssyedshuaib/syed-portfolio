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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Background Aurora */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center z-10">
        <div className="space-y-16 text-center lg:text-left">
          <div className={cn(
            "inline-flex items-center gap-4 px-8 py-2.5 rounded-full glass border-white/10 text-[11px] font-bold text-primary tracking-[0.6em] uppercase transition-all duration-1500",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <Sparkles className="w-4 h-4 animate-pulse" />
            Product Builder & Founder
          </div>
          
          <div className="space-y-12">
            <h1 className={cn(
              "text-7xl md:text-[10rem] font-headline font-black tracking-tighter leading-[0.8] transition-all duration-1500 delay-200 text-foreground",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
            )}>
              I Build Systems <br />
              <span className="text-primary/20">That People </span> <br />
              <span className="italic font-medium text-foreground">Remember.</span>
            </h1>
            
            <p className={cn(
              "text-2xl md:text-3xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light transition-all duration-1500 delay-500",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
            )}>
              Architecting digital products, platforms, and ecosystems focused on solving meaningful problems through design and systems thinking.
            </p>
          </div>
          
          <div className={cn(
            "flex flex-wrap items-center justify-center lg:justify-start gap-12 transition-all duration-1500 delay-700",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
          )}>
            <Button asChild size="lg" className="h-20 px-16 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-all font-bold text-xl group shadow-[0_20px_60px_rgba(200,217,230,0.2)]">
              <Link href="#ecosystem">
                Explore My Work <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </Link>
            </Button>
            <Link href="#journey" className="text-muted-foreground hover:text-foreground transition-all font-bold text-xl relative group">
              View Journey
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary/40 transition-all duration-700 group-hover:w-full" />
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
        isMounted ? "opacity-20" : "opacity-0"
      )}>
        <ChevronDown className="w-12 h-12 text-muted-foreground" />
      </div>
    </section>
  );
}
