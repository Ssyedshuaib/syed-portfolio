"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";

const CLUSTERS = [
  { 
    name: "Frontend Architecture", 
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Expo"] 
  },
  { 
    name: "Systems & Backend", 
    skills: ["Java", "Spring Boot", "Hibernate", "Node.js", "Express", "JDBC"] 
  },
  { 
    name: "Data & Cloud", 
    skills: ["PostgreSQL", "Supabase", "Firebase", "Docker", "AWS", "Linux"] 
  },
  { 
    name: "Thinking Tools", 
    skills: ["Figma", "Product Strategy", "UI/UX Design", "System Architecture"] 
  },
];

export function SkillsClusters() {
  return (
    <section className="py-32 px-6 bg-secondary/10">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-bold tracking-[0.4em] text-primary uppercase">Expertise</h2>
          <h3 className="text-5xl font-headline font-bold">The Technical Stack</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CLUSTERS.map((cluster) => (
            <div key={cluster.name} className="glass p-10 rounded-[2.5rem] border-white/5 space-y-8 flex flex-col items-center text-center group hover:border-primary/20 transition-all duration-500">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">{cluster.name}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {cluster.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-sm font-medium text-muted-foreground group-hover:text-foreground group-hover:border-white/10 transition-all cursor-default"
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