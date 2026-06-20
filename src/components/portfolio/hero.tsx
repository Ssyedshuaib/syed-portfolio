"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { OrbitalSystem } from "./orbital-system";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const WORDS = ["Products", "Experiences", "Systems", "Solutions", "Platforms"];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-[10px] font-bold text-primary tracking-[0.2em] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for meaningful collaborations
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9]">
              Building <br />
              <span className="text-gradient">
                {WORDS[wordIndex]}
              </span> <br />
              <span className="italic text-primary font-medium">That Matter.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              I design and build digital products focused on solving meaningful problems through technology, thoughtful design, and user-centered experiences.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
            <Button asChild size="lg" className="h-14 px-8 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-all font-bold text-lg">
              <Link href="#ecosystem">
                Explore My Work <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Link href="#journey" className="text-foreground/60 hover:text-primary transition-colors font-bold text-lg border-b border-transparent hover:border-primary pb-1">
              My Journey
            </Link>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <OrbitalSystem />
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}