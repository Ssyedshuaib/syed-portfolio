"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Layers, MapPin, Zap, GraduationCap, Globe, Layout } from "lucide-react";
import Link from "next/link";

const PRODUCTS = [
  {
    title: "Reverie",
    category: "Memory Platform",
    type: "Spatial System",
    status: "In Development",
    desc: "A place-based memory platform helping people preserve stories, emotions, and experiences connected to real-world locations.",
    icon: MapPin,
    slug: "reverie",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "DevNexus",
    category: "Student Ecosystem",
    type: "Digital Platform",
    status: "Production Ready",
    desc: "An all-in-one platform designed to help students learn, connect, earn, and grow through a unified digital ecosystem.",
    icon: Layout,
    slug: "devnexus",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "NovaPU",
    category: "Learning Platform",
    type: "Educational Tool",
    status: "Live",
    desc: "A structured preparation tool providing organized resources and notes for academic excellence and exam readiness.",
    icon: GraduationCap,
    slug: "novapu",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Campus Connect",
    category: "Networking",
    type: "Social Infrastructure",
    status: "Beta",
    desc: "A hyper-local networking engine designed to foster collaboration and community within university environments.",
    icon: Globe,
    slug: "campus-connect",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Zappy",
    category: "Productivity",
    type: "Productivity Tool",
    status: "Production",
    desc: "A minimalist productivity experience designed for deep work, focusing on organization and workflow optimization.",
    icon: Zap,
    slug: "zappy",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Global Group of Schools",
    category: "Education Technology",
    type: "Digital Presence",
    status: "Completed",
    desc: "A modern digital platform designed for educational institutions with a focus on admissions, academic information, parent engagement, and school branding.",
    icon: Layers,
    slug: "global-group-schools",
    className: "md:col-span-2 md:row-span-1",
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
    <section id="ecosystem" className="py-48 px-6 bg-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="space-y-6 reveal-on-scroll">
          <h2 className="text-[11px] font-bold tracking-[0.8em] text-[#91766E]/60 uppercase">Product Ecosystem</h2>
          <h3 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white">Things I've Built</h3>
          <p className="text-2xl md:text-3xl text-[#B7A7A9] max-w-2xl font-light leading-relaxed">
            Every product begins with a problem worth solving. I design systems that create clarity, purpose, and lasting impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[400px]">
          {PRODUCTS.map((product, idx) => (
            <Link
              key={idx}
              href={`/projects/${product.slug}`}
              className={cn(
                "group relative bg-[#B7A7A9]/[0.06] rounded-[4rem] p-12 md:p-16 border border-[#F6ECE3]/[0.08] flex flex-col justify-between overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:bg-[#91766E]/[0.08] hover:shadow-[0_40px_100px_rgba(145,118,110,0.15)] reveal-on-scroll",
                product.className,
                `stagger-${(idx % 4) + 1}`
              )}
            >
              {/* Card Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#91766E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="flex justify-between items-start relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:border-[#91766E]/40 group-hover:bg-[#91766E]/10 transition-all duration-700">
                  <product.icon className="w-8 h-8 md:w-10 md:h-10 text-[#B7A7A9] group-hover:text-[#F6ECE3] transition-colors" />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="px-5 py-2 rounded-full glass border-white/5 text-[9px] font-bold tracking-[0.4em] uppercase text-[#B7A7A9] group-hover:text-[#F6ECE3] transition-all">
                    {product.status}
                  </div>
                  <span className="text-[8px] font-bold tracking-[0.3em] text-[#91766E] uppercase">{product.category}</span>
                </div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="space-y-3">
                  <p className="text-[10px] font-bold tracking-[0.6em] text-[#91766E] uppercase">{product.category}</p>
                  <p className="text-4xl md:text-6xl font-headline font-black text-white tracking-tighter leading-none group-hover:text-[#F6ECE3] transition-colors">
                    {product.title}
                  </p>
                </div>
                
                {/* Hover Reveal Content */}
                <div className="overflow-hidden">
                  <p className="text-[#B7A7A9] text-lg md:text-xl leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-8 group-hover:translate-y-0">
                    {product.desc}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-12 right-12 md:bottom-16 md:right-16 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full glass flex items-center justify-center border-white/10 hover:border-[#F6ECE3]/40 group-hover:bg-[#F6ECE3]/10">
                  <ExternalLink className="w-5 h-5 md:w-6 h-6 text-[#F6ECE3]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
