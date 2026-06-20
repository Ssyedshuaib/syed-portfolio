"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { OrbitalSystem } from "./orbital-system";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const WORDS = ["Products", "Experiences", "Systems", "Solutions", "Platforms"];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-12 text-center lg:text-left">
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-[10px] font-bold text-primary tracking-[0.2em] uppercase transition-all duration-1000",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for meaningful collaborations
          </div>
          
          <div className="space-y-6">
            <h1 className={cn(
              "text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9] transition-all duration-1000 delay-100",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              Building <br />
              <div className="h-[1.1em] overflow-hidden relative">
                {WORDS.map((word, idx) => (
                  <span
                    key={word}
                    className={cn(
                      "absolute left-0 top-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] text-gradient",
                      idx === wordIndex 
                        ? "translate-y-0 opacity-100 rotate-0" 
                        : idx < wordIndex 
                          ? "-translate-y-full opacity-0 -rotate-6" 
                          : "translate-y-full opacity-0 rotate-6"
                    )}
                  >
                    {word}
                  </span>
                ))}
              </div>
              <span className="italic text-primary font-medium">That Matter.</span>
            </h1>
            
            <p className={cn(
              "text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light transition-all duration-1000 delay-300",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              I design and build digital products focused on solving meaningful problems through technology, thoughtful design, and user-centered experiences.
            </p>
          </div>
          
          <div className={cn(
            "flex flex-wrap items-center justify-center lg:justify-start gap-8 transition-all duration-1000 delay-500",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <Button asChild size="lg" className="h-16 px-10 rounded-full bg-primary text-primary-foreground hover:scale-105 active:scale-95 transition-all duration-500 font-bold text-lg group shadow-2xl shadow-primary/20">
              <Link href="#ecosystem">
                Explore My Work <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Link href="#journey" className="text-foreground/60 hover:text-primary transition-all duration-500 font-bold text-lg border-b border-transparent hover:border-primary pb-1">
              My Journey
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