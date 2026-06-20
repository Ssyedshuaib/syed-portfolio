"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

export function Philosophy() {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="philosophy" className="py-64 px-6 relative bg-background" ref={sectionRef}>
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#536878]/10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto space-y-48">
        <div className="space-y-12 text-center reveal-on-scroll">
          <h2 className="text-[11px] font-bold tracking-[0.6em] text-[#536878] uppercase">Why I Build</h2>
          <h3 className="text-6xl md:text-8xl font-headline font-black leading-[0.9] tracking-tighter uppercase text-white">
            Technology becomes <br />
            meaningful when it solves <br />
            <span className="text-[#EAE0C8] italic font-medium">real problems.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 reveal-on-scroll delay-300">
          <div className="glass p-16 rounded-[4rem] border-white/5 space-y-10 flex flex-col justify-center">
             <p className="text-2xl md:text-3xl text-[#EAE0C8]/70 leading-relaxed font-light">
              I enjoy transforming ideas into products that help people learn, connect, remember, and grow. Every project begins with a simple question:
            </p>
          </div>
          
          <div className="glass p-16 rounded-[4rem] border-[#536878]/20 space-y-10 relative overflow-hidden group shadow-[0_40px_100px_rgba(83,104,120,0.1)]">
            <div className="absolute top-0 right-0 p-12">
              <Sparkles className="w-12 h-12 text-[#536878]/20 group-hover:text-[#EAE0C8] transition-colors duration-1000" />
            </div>
            <div className="space-y-8">
              <p className="text-[11px] font-bold tracking-[0.4em] text-[#536878] uppercase">Core Principle</p>
              <h4 className="text-5xl font-headline font-bold leading-none tracking-tighter italic text-[#EAE0C8]">
                "What problem deserves solving?"
              </h4>
              <p className="text-[#EAE0C8]/70 text-xl leading-relaxed font-light">
                This guiding philosophy is the lens through which I evaluate every product, experiment, and platform I architect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}