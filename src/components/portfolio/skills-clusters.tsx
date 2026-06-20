"use client";

import React from "react";

const CLUSTERS = [
  { 
    name: "Frontend Systems", 
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Expo"] 
  },
  { 
    name: "Backend Systems", 
    skills: ["Java", "Spring Boot", "Hibernate", "Node.js", "JDBC"] 
  },
  { 
    name: "Data & Cloud", 
    skills: ["PostgreSQL", "Supabase", "Firebase", "Docker", "AWS", "Linux"] 
  },
  { 
    name: "Product Thinking", 
    skills: ["Figma", "UI/UX Design", "System Design", "Product Strategy"] 
  },
];

export function SkillsClusters() {
  return (
    <section className="py-48 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-4">
          <h2 className="text-[10px] font-bold tracking-[0.5em] text-muted-foreground uppercase">Expertise</h2>
          <h3 className="text-5xl font-headline font-bold">The Technical Stack</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CLUSTERS.map((cluster) => (
            <div key={cluster.name} className="glass p-10 rounded-[3rem] border-white/5 space-y-8 flex flex-col items-center text-center group hover:border-white/10 transition-all">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">{cluster.name}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {cluster.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}