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
  },
  {
    title: "DevNexus",
    tag: "Student Ecosystem",
    status: "Production Ready",
    desc: "Learning, earning, and growth brought together into one unified platform for students.",
    icon: Layout,
    slug: "devnexus",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "NovaPU",
    tag: "Learning Platform",
    status: "Live",
    desc: "Structured educational experiences designed for higher academic performance.",
    icon: GraduationCap,
    slug: "novapu",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Campus Connect",
    tag: "Networking",
    status: "Beta",
    desc: "Building stronger digital connections between students in local campus ecosystems.",
    icon: Globe,
    slug: "campus-connect",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Zappy",
    tag: "Productivity",
    status: "Production",
    desc: "Helping people simplify and organize everyday workflows with minimalist design.",
    icon: Zap,
    slug: "zappy",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Global Group Schools",
    tag: "Digital Branding",
    status: "Completed",
    desc: "Premium school website redesign project focused on modern education experiences and parent engagement.",
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
          <h2 className="text-[11px] font-bold tracking-[0.8em] text-[#91766E]/60 uppercase">Ecosystem</h2>
          <h3 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white">Things I've Built</h3>
          <p className="text-2xl md:text-3xl text-[#B7A7A9] max-w-2xl font-light leading-relaxed">
            Every product begins with a problem worth solving. I design systems that create clarity and impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
          {PRODUCTS.map((product, idx) => (
            <Link
              key={idx}
              href={`/projects/${product.slug}`}
              className={cn(
                "group relative bg-[#B7A7A9]/[0.06] rounded-[4rem] p-16 border border-[#F6ECE3]/[0.08] flex flex-col justify-between overflow-hidden transition-all duration-[400ms] hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#91766E]/[0.08] hover:shadow-[0_20px_60px_rgba(145,118,110,0.18)] reveal-on-scroll",
                product.className,
                `stagger-${(idx % 4) + 1}`
              )}
            >
              <div className="flex justify-between items-start relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-700">
                  <product.icon className="w-10 h-10 text-[#B7A7A9] group-hover:text-[#F6ECE3] transition-colors" />
                </div>
                <div className="px-5 py-2 rounded-full glass border-white/5 text-[10px] font-bold tracking-[0.4em] uppercase text-[#B7A7A9] group-hover:text-[#F6ECE3] transition-all">
                  {product.status}
                </div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="space-y-3">
                  <p className="text-[10px] font-bold tracking-[0.6em] text-[#91766E] uppercase">{product.tag}</p>
                  <p className="text-4xl md:text-5xl font-headline font-black text-white tracking-tighter">{product.title}</p>
                </div>
                <p className="text-[#B7A7A9] text-xl leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-6 group-hover:translate-y-0">
                  {product.desc}
                </p>
              </div>

              <div className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center border-white/10">
                  <ExternalLink className="w-6 h-6 text-[#F6ECE3]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}