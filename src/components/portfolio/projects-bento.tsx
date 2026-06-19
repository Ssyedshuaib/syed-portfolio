"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Layers, MapPin, Zap, GraduationCap, Globe } from "lucide-react";

const PROJECTS = [
  {
    title: "Reverie",
    tagline: "Memories Attached To Places",
    description: "A spatial memory platform for capturing moments exactly where they happen.",
    icon: MapPin,
    className: "lg:col-span-2 lg:row-span-2",
    color: "from-blue-500/10",
  },
  {
    title: "NovaPU",
    tagline: "Smarter Student Preparation",
    description: "Advanced preparation tool for university exams.",
    icon: GraduationCap,
    className: "lg:col-span-1 lg:row-span-1",
    color: "from-purple-500/10",
  },
  {
    title: "Campus Connect",
    tagline: "Connecting Students Beyond Classrooms",
    description: "Hyper-local networking for university campuses.",
    icon: Globe,
    className: "lg:col-span-1 lg:row-span-1",
    color: "from-green-500/10",
  },
  {
    title: "Zappy",
    tagline: "Productivity Simplified",
    description: "Minimalist task management for deep work.",
    icon: Zap,
    className: "lg:col-span-1 lg:row-span-2",
    color: "from-orange-500/10",
  },
  {
    title: "School Website",
    tagline: "Modern Educational Experience",
    description: "Digital transformation for traditional institutions.",
    icon: Layers,
    className: "lg:col-span-2 lg:row-span-1",
    color: "from-red-500/10",
  },
];

export function ProjectsBento() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Side Projects</h2>
          <p className="text-muted-foreground max-w-2xl">A collection of tools and platforms built to explore specific niches and solve micro-problems.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative glass rounded-3xl p-8 border-white/5 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-primary/20",
                project.className
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none", project.color)} />
              
              <div className="flex justify-between items-start relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all">
                  <project.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
              </div>
              
              <div className="space-y-2 relative z-10">
                <p className="text-primary font-headline font-bold text-xl">{project.title}</p>
                <p className="text-foreground font-medium text-sm">{project.tagline}</p>
                <p className="text-muted-foreground text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
