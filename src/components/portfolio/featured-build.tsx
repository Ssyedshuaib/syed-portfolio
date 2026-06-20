"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const FEATURES = [
  "Integrated Learning Academy", 
  "AI-Powered Student Mentor", 
  "Centralized Resource Hub", 
  "Student Networking Engine"
];

export function FeaturedBuild() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto glass rounded-[3rem] border-white/10 p-12 lg:p-24 relative">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-[0.3em]">Featured Build</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-headline font-bold tracking-tighter">DEVNEXUS</h2>
              <p className="text-2xl text-muted-foreground font-light leading-relaxed">
                A student-focused ecosystem combining learning, opportunities, resources, AI assistance, and community into a unified platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-muted-foreground group">
                  <div className="w-6 h-6 rounded-full glass border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <button className="group flex items-center gap-4 text-lg font-bold text-foreground hover:text-primary transition-all">
                The Product Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative group">
            <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/devnexus-featured/1200/900" 
                alt="DevNexus Showcase" 
                fill 
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                data-ai-hint="dashboard tech"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-white font-headline font-bold text-2xl">Production Ready</p>
                  <p className="text-white/50 text-xs tracking-widest uppercase">System Status: Active</p>
                </div>
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center border-white/20 animate-float">
                   <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(215,178,157,0.8)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}