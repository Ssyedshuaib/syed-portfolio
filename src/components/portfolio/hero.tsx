"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { OrbitalSystem } from "./orbital-system";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">
        <div className="space-y-12 text-center lg:text-left">
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/5 text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase transition-all duration-1000",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Product Architect
          </div>
          
          <div className="space-y-8">
            <h1 className={cn(
              "text-7xl md:text-9xl font-headline font-bold tracking-tighter leading-[0.85] transition-all duration-1000 delay-100",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              I Build Systems <br />
              <span className="text-muted-foreground/40">That People </span> <br />
              <span className="italic font-medium">Remember.</span>
            </h1>
            
            <p className={cn(
              "text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light transition-all duration-1000 delay-300",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              I design and build digital products, platforms, and experiences that solve meaningful problems through thoughtful technology and product thinking.
            </p>
          </div>
          
          <div className={cn(
            "flex flex-wrap items-center justify-center lg:justify-start gap-8 transition-all duration-1000 delay-500",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <Button asChild size="lg" className="h-16 px-10 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-all font-bold text-lg group shadow-2xl shadow-white/5">
              <Link href="#ecosystem">
                Explore My Work <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Link href="#journey" className="text-muted-foreground hover:text-foreground transition-all font-bold text-lg border-b border-white/10 hover:border-white pb-1">
              View Journey
            </Link>
          </div>
        </div>

        <div className={cn(
          "hidden lg:block relative transition-all duration-1500 delay-700",
          isMounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <OrbitalSystem />
        </div>
      </div>
      
      <div className={cn(
        "absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-1000 delay-1000",
        isMounted ? "opacity-40" : "opacity-0"
      )}>
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  );
}