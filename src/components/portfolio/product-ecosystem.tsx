"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Layers, MapPin, Zap, GraduationCap, Globe, Layout } from "lucide-react";

const PRODUCTS = [
  {
    title: "DevNexus",
    tag: "Student Ecosystem",
    status: "Active / Scaling",
    desc: "Learning, earning, networking, and growth brought together into one unified student operating system.",
    icon: Layout,
    className: "md:col-span-2 md:row-span-2",
    color: "from-primary/20",
  },
  {
    title: "Reverie",
    tag: "Memory Platform",
    status: "Concept",
    desc: "A place-based memory platform designed around emotions, stories, and human experiences.",
    icon: MapPin,
    className: "md:col-span-1 md:row-span-2",
    color: "from-blue-500/10",
  },
  {
    title: "NovaPU",
    tag: "Learning",
    status: "Live",
    desc: "Structured educational experiences designed for higher academic performance.",
    icon: GraduationCap,
    className: "md:col-span-1 md:row-span-1",
    color: "from-purple-500/10",
  },
  {
    title: "Zappy",
    tag: "Productivity",
    status: "Production",
    desc: "Helping people simplify and organize everyday workflows with minimalist design.",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1",
    color: "from-orange-500/10",
  },
  {
    title: "Campus Connect",
    tag: "Networking",
    status: "Beta",
    desc: "Building stronger digital connections between students in local campus ecosystems.",
    icon: Globe,
    className: "md:col-span-2 md:row-span-1",
    color: "from-green-500/10",
  },
];

export function ProductEcosystem() {
  return (
    <section id="ecosystem" className="py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="space-y-6">
          <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase">Product Ecosystem</h2>
          <h3 className="text-5xl font-headline font-bold">Things I've Built</h3>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            Each platform is built with a specific purpose: to solve a problem I've personally felt or observed in the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[280px]">
          {PRODUCTS.map((product, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative glass rounded-[2.5rem] p-10 border-white/5 flex flex-col justify-between overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:border-primary/20",
                product.className
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none", product.color)} />
              
              <div className="flex justify-between items-start relative z-10">
                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500">
                  <product.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="px-3 py-1 rounded-full glass border-white/10 text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                  {product.status}
                </div>
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className="space-y-1">
                  <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">{product.tag}</p>
                  <p className="text-3xl font-headline font-bold text-foreground">{product.title}</p>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  {product.desc}
                </p>
              </div>

              <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center border-white/20">
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}