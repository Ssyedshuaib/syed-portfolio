"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, MapPin, Zap, GraduationCap, Globe, Layout } from "lucide-react";

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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="ecosystem" className="py-48 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="space-y-6 reveal-on-scroll">
          <h2 className="text-sm font-bold tracking-[0.5em] text-primary uppercase">Product Ecosystem</h2>
          <h3 className="text-5xl md:text-7xl font-headline font-bold">Things I've Built</h3>
          <p className="text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
            Each platform is built with a specific purpose: to solve a problem I've personally felt or observed in the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[320px]">
          {PRODUCTS.map((product, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative glass rounded-[3rem] p-12 border-white/5 flex flex-col justify-between overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:border-primary/30 reveal-on-scroll",
                product.className,
                `stagger-${(idx % 4) + 1}`
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none", product.color)} />
              
              <div className="flex justify-between items-start relative z-10">
                <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <product.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                </div>
                <div className="px-4 py-1.5 rounded-full glass border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-all duration-500">
                  {product.status}
                </div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <p className="text-xs font-bold tracking-[0.3em] text-primary/60 uppercase group-hover:text-primary transition-colors duration-500">{product.tag}</p>
                  <p className="text-4xl font-headline font-bold text-foreground tracking-tight">{product.title}</p>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-6 group-hover:translate-y-0">
                  {product.desc}
                </p>
              </div>

              <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center border-white/20 hover:border-primary/50 group/btn transition-colors">
                  <ExternalLink className="w-6 h-6 text-primary group-hover/btn:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}