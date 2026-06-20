"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Layers, MapPin, Zap, GraduationCap, Globe, Layout } from "lucide-react";
import Link from "next/link";

const PRODUCTS = [
  {
    title: "Reverie",
    tag: "Memory Platform",
    status: "In Development",
    desc: "A place-based memory platform designed around emotions, stories, and experiences.",
    icon: MapPin,
    slug: "reverie",
    className: "md:col-span-2 md:row-span-2",
    color: "from-white/5",
  },
  {
    title: "DevNexus",
    tag: "Student Ecosystem",
    status: "Production Ready",
    desc: "Learning, earning, and growth brought together into one unified platform for students.",
    icon: Layout,
    slug: "devnexus",
    className: "md:col-span-1 md:row-span-2",
    color: "from-white/5",
  },
  {
    title: "NovaPU",
    tag: "Learning Platform",
    status: "Live",
    desc: "Structured educational experiences designed for higher academic performance.",
    icon: GraduationCap,
    slug: "novapu",
    className: "md:col-span-1 md:row-span-1",
    color: "from-white/5",
  },
  {
    title: "Campus Connect",
    tag: "Networking",
    status: "Beta",
    desc: "Building stronger digital connections between students in local campus ecosystems.",
    icon: Globe,
    slug: "campus-connect",
    className: "md:col-span-1 md:row-span-1",
    color: "from-white/5",
  },
  {
    title: "Zappy",
    tag: "Productivity",
    status: "Production",
    desc: "Helping people simplify and organize everyday workflows with minimalist design.",
    icon: Zap,
    slug: "zappy",
    className: "md:col-span-1 md:row-span-1",
    color: "from-white/5",
  },
  {
    title: "Global Group Schools",
    tag: "Digital Experience",
    status: "Live",
    desc: "Modern digital presence for an educational institution focused on engagement.",
    icon: Layers,
    slug: "global-group-schools",
    className: "md:col-span-2 md:row-span-1",
    color: "from-white/5",
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
          <h2 className="text-[10px] font-bold tracking-[0.5em] text-muted-foreground uppercase">Ecosystem</h2>
          <h3 className="text-5xl md:text-7xl font-headline font-bold">Things I've Built</h3>
          <p className="text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
            Every product begins with a problem worth solving. I design systems that create clarity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
          {PRODUCTS.map((product, idx) => (
            <Link
              key={idx}
              href={`/projects/${product.slug}`}
              className={cn(
                "group relative glass rounded-[2.5rem] p-12 border-white/5 flex flex-col justify-between overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:border-white/20 reveal-on-scroll",
                product.className,
                `stagger-${(idx % 4) + 1}`
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-1000", product.color)} />
              
              <div className="flex justify-between items-start relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-700">
                  <product.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="px-4 py-1.5 rounded-full glass border-white/5 text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-all">
                  {product.status}
                </div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">{product.tag}</p>
                  <p className="text-4xl font-headline font-bold text-foreground tracking-tight">{product.title}</p>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-6 group-hover:translate-y-0">
                  {product.desc}
                </p>
              </div>

              <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-white/10">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}