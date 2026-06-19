"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = [
  { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Expo"] },
  { name: "Backend", skills: ["Node.js", "Express", "Supabase", "REST APIs"] },
  { name: "Database", skills: ["PostgreSQL", "Firebase Firestore"] },
  { name: "Tools", skills: ["GitHub", "Figma", "VS Code", "Postman", "Vercel"] },
];

export function Skills() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-headline font-bold tracking-[0.2em] text-primary uppercase">Expertise</h2>
          <h3 className="text-4xl font-headline font-bold">Tools & Technologies</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((category) => (
            <div key={category.name} className="glass p-8 rounded-3xl border-white/5 space-y-6">
              <p className="text-sm font-bold uppercase tracking-widest text-primary/60">{category.name}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-white/5 hover:bg-primary/20 hover:text-primary transition-all cursor-default px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
