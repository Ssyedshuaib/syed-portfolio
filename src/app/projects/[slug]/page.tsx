"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, Globe, Github } from "lucide-react";
import Link from "next/link";

const PROJECT_DATA: Record<string, any> = {
  reverie: {
    title: "Reverie",
    tag: "Memory Platform",
    status: "In Development",
    problem: "Memories are often detached from the context of where they happened, leading to a loss of emotional nuance over time.",
    solution: "A spatial memory platform that anchors digital stories to specific geographic locations, creating an emotional atlas of a user's life.",
    features: ["Location Tagging", "Emotional Mapping", "Time-Travel Narratives", "Community Storytelling"],
    tech: ["Next.js", "Supabase", "Mapbox", "Tailwind"],
    vision: "To become the global layer for human experience, where every place on Earth holds a story."
  },
  devnexus: {
    title: "DevNexus",
    tag: "Student Ecosystem",
    status: "Production Ready",
    problem: "Students struggle with fragmented resources, lack of collaboration, and missing real-world opportunities.",
    solution: "An integrated student operating system that combines learning, earning, networking, and AI mentorship into a unified platform.",
    features: ["Learning Academy", "AI Mentor", "Resource Hub", "Student Marketplace"],
    tech: ["React", "TypeScript", "Firebase", "Node.js"],
    vision: "To simplify and empower the academic journey for every engineering student globally."
  },
  novapu: {
    title: "NovaPU",
    tag: "Learning Platform",
    status: "Live",
    problem: "Accessing quality educational content for university exams is often disorganized and inefficient.",
    solution: "A focused preparation tool providing structured resources, notes, and previous year questions in a minimalist interface.",
    features: ["Resource Library", "Progress Tracking", "Exam Preparation Tools"],
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    vision: "Democratizing academic excellence through structured digital learning."
  },
  "campus-connect": {
    title: "Campus Connect",
    tag: "Networking",
    status: "Beta",
    problem: "Traditional campus networks are offline and lack the ability to foster meaningful digital connections between students.",
    solution: "A hyper-local networking engine designed specifically for university environments to foster collaboration and community.",
    features: ["Student Directory", "Community Boards", "Local Event Mapping"],
    tech: ["React Native", "Firebase", "Expo"],
    vision: "Connecting every student in every campus through a single digital heartbeat."
  },
  zappy: {
    title: "Zappy",
    tag: "Productivity",
    status: "Production",
    problem: "Existing productivity tools are often cluttered and overwhelm users with unnecessary complexity.",
    solution: "A minimalist productivity experience designed for deep work, focusing on organization and clarity over feature bloat.",
    features: ["Workflow Optimization", "Minimalist Interface", "Deep Work Mode"],
    tech: ["React", "TypeScript", "Tailwind"],
    vision: "The simplest way to organize a modern life."
  },
  "global-group-schools": {
    title: "Global Group Schools",
    tag: "Digital Experience",
    status: "Live",
    problem: "Educational institutions often have outdated digital presences that fail to engage parents and students effectively.",
    solution: "A modern, high-performance web experience focused on school branding, admissions, and information architecture.",
    features: ["Information Hub", "Admissions Portal", "Modern UI Architecture"],
    tech: ["React", "Tailwind", "Vercel"],
    vision: "Modernizing the educational narrative through design-first digital experiences."
  }
};

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = PROJECT_DATA[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <Button onClick={() => router.push("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-5xl mx-auto space-y-24">
          <Button 
            variant="ghost" 
            onClick={() => router.push("/")}
            className="group text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Ecosystem
          </Button>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
               <span className="px-4 py-1.5 rounded-full glass border-white/5 text-[9px] font-bold tracking-[0.2em] uppercase text-primary">
                 {project.tag}
               </span>
               <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                 Status: {project.status}
               </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-headline font-bold tracking-tighter leading-none">
              {project.title.toUpperCase()}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-16">
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold tracking-[0.5em] text-muted-foreground uppercase">Problem</h3>
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-bold tracking-[0.5em] text-muted-foreground uppercase">Solution</h3>
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground">
                  {project.solution}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                <div className="space-y-6">
                   <h3 className="text-[10px] font-bold tracking-[0.5em] text-muted-foreground uppercase">Key Features</h3>
                   <ul className="space-y-4">
                     {project.features.map((f: string) => (
                       <li key={f} className="flex items-center gap-3 text-muted-foreground">
                         <ChevronRight className="w-4 h-4 text-primary" />
                         {f}
                       </li>
                     ))}
                   </ul>
                </div>
                <div className="space-y-6">
                   <h3 className="text-[10px] font-bold tracking-[0.5em] text-muted-foreground uppercase">Architecture</h3>
                   <div className="flex flex-wrap gap-2">
                     {project.tech.map((t: string) => (
                       <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs">
                         {t}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
               <div className="glass p-10 rounded-[2.5rem] border-white/10 space-y-8">
                 <h4 className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">Future Vision</h4>
                 <p className="text-muted-foreground leading-relaxed font-light">
                   {project.vision}
                 </p>
               </div>

               <div className="flex flex-col gap-4">
                 <Button className="w-full h-14 rounded-full bg-primary text-primary-foreground font-bold tracking-widest uppercase text-xs">
                   <Globe className="mr-2 w-4 h-4" /> Live Demo
                 </Button>
                 <Button variant="outline" className="w-full h-14 rounded-full border-white/10 font-bold tracking-widest uppercase text-xs">
                   <Github className="mr-2 w-4 h-4" /> Repository
                 </Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}