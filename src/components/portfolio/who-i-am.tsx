"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export function WhoIAm() {
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

    const children = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
    children?.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="who-i-am" ref={sectionRef} className="py-64 px-6 relative bg-background overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#536878]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 reveal-on-scroll">
            <div className="relative aspect-[4/5] w-full glass rounded-[4rem] border-[#EAE0C8]/10 overflow-hidden shadow-2xl group">
              <Image 
                src="https://picsum.photos/seed/founder-hq/1000/1250" 
                alt="Syed Sharfuddin Shuaib" 
                fill 
                className="object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-1000"
                data-ai-hint="founder professional portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1317] via-transparent to-transparent opacity-60" />
              
              {/* Floating metadata */}
              <div className="absolute bottom-12 left-12 right-12 space-y-4">
                <div className="h-px w-12 bg-[#536878]" />
                <p className="text-[10px] font-bold tracking-[0.5em] text-[#EAE0C8]/50 uppercase">Product Architect</p>
                <p className="text-4xl font-headline font-black text-[#FFFFFF] leading-none">Syed Sharfuddin <br />Shuaib</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-16 reveal-on-scroll stagger-1">
            <div className="space-y-8">
              <h2 className="text-[11px] font-bold tracking-[0.8em] text-[#536878] uppercase">Who I Am</h2>
              <h3 className="text-5xl md:text-7xl font-headline font-black leading-[0.9] tracking-tighter text-white">
                Architecting <br />
                <span className="italic text-[#EAE0C8] font-medium">Digital Impact.</span>
              </h3>
            </div>

            <div className="space-y-10 text-2xl md:text-3xl text-[#EAE0C8]/70 leading-relaxed font-light">
              <p>
                I'm Syed Sharfuddin Shuaib.
              </p>
              <p>
                A builder, founder, and product architect focused on creating technology that <span className="text-[#FFFFFF] font-medium">solves meaningful problems</span>.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed">
                My interests extend beyond software development into product strategy, system design, startups, user experience, and business creation. 
              </p>
              <p className="text-xl md:text-2xl leading-relaxed">
                I believe technology should create real value for real people. 
              </p>
              <p className="text-xl md:text-2xl leading-relaxed">
                Today I'm focused on building products, growing <span className="text-[#FFFFFF] underline decoration-[#536878]/50 underline-offset-8">Axora</span>, mastering product architecture, and creating scalable technology ecosystems.
              </p>
            </div>

            <div className="pt-12 border-t border-[#EAE0C8]/10 flex flex-wrap gap-16">
              <div className="space-y-3">
                <p className="text-sm font-bold tracking-[0.4em] text-[#536878] uppercase">Focus</p>
                <p className="text-[#FFFFFF] text-lg font-light">Venture Studio</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-bold tracking-[0.4em] text-[#536878] uppercase">Location</p>
                <p className="text-[#FFFFFF] text-lg font-light">Bangalore, India</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-bold tracking-[0.4em] text-[#536878] uppercase">Mission</p>
                <p className="text-[#FFFFFF] text-lg font-light">Meaningful Impact</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}