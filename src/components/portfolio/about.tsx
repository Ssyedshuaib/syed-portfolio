"use client";

import React, { useEffect, useRef } from "react";

export function About() {
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

    const children = sectionRef.current?.querySelectorAll(".fade-up");
    children?.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[400px] flex items-center justify-center fade-up">
          <div className="absolute w-64 h-64 bg-primary/10 rounded-3xl rotate-12 blur-2xl animate-pulse" />
          <div className="relative w-full max-w-sm aspect-square glass rounded-3xl border-white/10 p-8 flex flex-col justify-end space-y-4 shadow-2xl">
            <div className="h-2 w-20 bg-primary/40 rounded-full" />
            <div className="h-2 w-32 bg-primary/20 rounded-full" />
            <div className="h-2 w-24 bg-primary/10 rounded-full" />
            <p className="text-primary font-headline font-bold text-3xl">Problem Solver First.</p>
          </div>
        </div>

        <div className="space-y-8 fade-up">
          <h2 className="text-sm font-headline font-bold tracking-[0.2em] text-primary uppercase">Who I Am</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a Computer Science Engineering student and product-focused developer who enjoys building solutions for real-world problems.
            </p>
            <p>
              Over the past year, I have been designing and developing platforms focused on education, productivity, and community.
            </p>
            <p>
              My primary project, <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-4">DevNexus</span>, was created from personal experiences as an engineering student and aims to simplify learning, earning, and growth for students.
            </p>
            <p className="text-foreground">
              I enjoy transforming ideas into products that people genuinely use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
