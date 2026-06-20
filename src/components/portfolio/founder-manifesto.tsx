"use client";

import React, { useEffect, useRef } from "react";

export function FounderManifesto() {
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
    <section className="py-64 px-6 relative overflow-hidden bg-black" ref={sectionRef}>
      <div className="absolute inset-0 premium-glow pointer-events-none opacity-40" />
      
      <div className="max-w-5xl mx-auto text-center space-y-32 relative z-10">
        <div className="space-y-8 reveal-on-scroll">
          <h2 className="text-[11px] font-bold tracking-[0.8em] text-[#91766E]/60 uppercase">Founder Manifesto</h2>
          <h3 className="text-6xl md:text-[8rem] font-headline font-black tracking-tighter leading-[0.85] text-white">
            Build Things <br />
            <span className="italic text-[#F6ECE3]/30 font-medium">That Matter.</span>
          </h3>
        </div>

        <div className="space-y-20 text-2xl md:text-5xl font-light leading-tight text-[#B7A7A9] max-w-4xl mx-auto">
          <p className="reveal-on-scroll stagger-1">
            I don't build products to chase trends. I build products because technology should make life <span className="text-[#F6ECE3] font-medium">simpler</span>, more <span className="text-[#F6ECE3] font-medium">meaningful</span>, and more <span className="text-[#F6ECE3] font-medium">human</span>.
          </p>
          
          <div className="flex flex-col gap-12 text-lg md:text-2xl text-[#91766E]/80 reveal-on-scroll stagger-2">
            <div className="h-px w-24 bg-[#91766E]/20 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 italic font-light">
              <p>Every idea begins with a problem.</p>
              <p>Every product begins with understanding people.</p>
              <p>Every system begins with purpose.</p>
            </div>
          </div>

          <p className="reveal-on-scroll stagger-3 text-xl md:text-3xl font-light leading-relaxed">
            My goal isn't simply to launch applications. My goal is to create products that continue creating value long after they are released. 
            <br /><br />
            <span className="text-[#F6ECE3] font-medium">Technology evolves. Trends disappear. Meaningful products endure.</span>
            <br />
            That principle guides everything I build.
          </p>
        </div>
      </div>
    </section>
  );
}