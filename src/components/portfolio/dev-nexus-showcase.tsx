"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";

const FEATURES = [
  "Learning Academy", "AI Mentor", "Resource Hub", "PYQs & Notes", 
  "Marketplace", "Podcasts", "Student Networking", "Progress Tracking"
];

const STACK = ["React", "React Native", "TypeScript", "Supabase", "Tailwind", "Expo"];

export function DevNexusShowcase() {
  return (
    <section id="devnexus" className="py-32 px-6 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 py-1 px-4 text-xs font-bold uppercase tracking-widest">Flagship Product</Badge>
              <h2 className="text-5xl md:text-7xl font-headline font-bold">DEVNEXUS</h2>
              <p className="text-2xl text-primary/80 font-headline">The Student Operating System</p>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              DevNexus is a production-ready ecosystem designed to help students learn, earn, collaborate, and grow through one integrated platform. 
              Built after identifying real challenges faced by engineering students.
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {STACK.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-white/5 text-muted-foreground hover:bg-white/10 px-4 py-1">{tech}</Badge>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button className="group flex items-center gap-3 text-lg font-headline font-bold text-foreground hover:text-primary transition-colors">
                Explore The Ecosystem <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative aspect-[4/3] w-full glass rounded-3xl border-white/10 overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rotate-12 transition-transform duration-700 group-hover:scale-110">
                <Image 
                  src="https://picsum.photos/seed/devnexus/1200/800" 
                  alt="DevNexus Preview" 
                  fill 
                  className="object-cover opacity-60"
                  data-ai-hint="dashboard mobile"
                />
              </div>
              <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-white font-headline font-bold text-2xl tracking-tight">Production Ready</p>
                  <p className="text-white/60 text-sm">Status: Live Platform</p>
                </div>
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-white/20">
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
              </div>
            </div>
            
            {/* Floating Detail Card */}
            <div className="absolute -top-6 -right-6 hidden xl:flex flex-col gap-4 p-6 glass rounded-2xl border-white/20 shadow-2xl animate-float">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">45</span>
                 </div>
                 <div className="text-xs">
                    <p className="font-bold">Daily Streaks</p>
                    <p className="text-muted-foreground">Consistency Matters</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
