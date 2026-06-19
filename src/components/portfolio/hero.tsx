"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { OrbitalSystem } from "./orbital-system";
import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 premium-gradient opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Full Stack Developer • Founder
          </div>
          
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-foreground leading-[1.1]">
            Building Products That <span className="text-primary italic">Solve Real Problems.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Product Builder and Founder focused on creating technology that helps people learn, grow, and connect. Currently building <span className="text-foreground font-medium">DevNexus</span> — a comprehensive student ecosystem.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:scale-105 transition-all">
              <Link href="#devnexus">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-white/10 hover:bg-white/5 hover:scale-105 transition-all">
              <Download className="mr-2 w-4 h-4" /> Resume
            </Button>
            <Button variant="ghost" size="lg" className="rounded-full hover:bg-white/5 text-muted-foreground hover:text-foreground">
              <Mail className="mr-2 w-4 h-4" /> Let's Connect
            </Button>
          </div>
        </div>

        <div className="hidden lg:block relative scale-110 xl:scale-125">
          <OrbitalSystem />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
