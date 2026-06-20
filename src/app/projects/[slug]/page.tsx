
"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  ChevronRight, 
  Globe, 
  Github, 
  Layout, 
  MapPin, 
  GraduationCap, 
  Zap, 
  Layers, 
  Cpu, 
  Code2, 
  Milestone 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PROJECT_DATA: Record<string, any> = {
  reverie: {
    title: "REVERIE",
    tag: "Memory Platform",
    type: "Spatial System",
    status: "In Development",
    icon: MapPin,
    vision: "To become the global layer for human experience, where every place on Earth holds a story.",
    problem: "Memories are often detached from the context of where they happened, leading to a loss of emotional nuance over time.",
    solution: "A spatial memory platform that anchors digital stories to specific geographic locations, creating an emotional atlas of a user's life.",
    features: ["Location Tagging", "Emotional Mapping", "Time-Travel Narratives", "Community Storytelling"],
    architecture: "Distributed spatial database with real-time location triggers and edge-based story rendering.",
    tech: ["Next.js", "Firebase", "Mapbox", "Tailwind"],
    roadmap: "Alpha testing in Bangalore followed by a global spatial layer rollout for high-intent storytellers.",
    founderNotes: "This project is deeply personal. It's about moving beyond photo galleries to preserve the 'soul' of our experiences."
  },
  devnexus: {
    title: "DEVNEXUS",
    tag: "Student Ecosystem",
    type: "Digital Platform",
    status: "Production Ready",
    icon: Layout,
    vision: "To simplify and empower the academic journey for every engineering student globally.",
    problem: "Students struggle with fragmented resources, lack of collaboration, and missing real-world opportunities.",
    solution: "An integrated student operating system that combines learning, earning, networking, and AI mentorship into a unified platform.",
    features: ["Learning Academy", "AI Mentor", "Resource Hub", "Student Marketplace"],
    architecture: "Modular micro-services architecture with centralized student identity and verifiable contribution ledger.",
    tech: ["React", "TypeScript", "Firebase", "Node.js"],
    roadmap: "Expansion to 50+ universities and integration of a direct-to-student internship and earning portal.",
    founderNotes: "DevNexus was built from my own frustration. I didn't want students to face the same resource fragmentation I did."
  },
  novapu: {
    title: "NOVAPU",
    tag: "Learning Platform",
    type: "Educational Tool",
    status: "Live",
    icon: GraduationCap,
    vision: "Democratizing academic excellence through structured digital learning.",
    problem: "Accessing quality educational content for university exams is often disorganized, overwhelming, and inefficient.",
    solution: "A focused preparation tool providing structured resources, notes, and previous year questions in a minimalist, high-speed interface.",
    features: ["Resource Library", "Progress Tracking", "Exam Preparation Tools"],
    architecture: "High-performance CDN-backed resource delivery system optimized for low-latency academic access.",
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    roadmap: "Integration of AI-generated practice tests and a peer-to-peer academic support network.",
    founderNotes: "Efficiency is a feature. NovaPU is designed for students who value their time during intense preparation cycles."
  },
  "campus-connect": {
    title: "CAMPUS CONNECT",
    tag: "Networking",
    type: "Social Infrastructure",
    status: "Beta",
    icon: Globe,
    vision: "Connecting every student in every campus through a single digital heartbeat.",
    problem: "Traditional campus networks are offline and lack the ability to foster meaningful digital connections between students.",
    solution: "A hyper-local networking engine designed specifically for university environments to foster collaboration and community.",
    features: ["Student Directory", "Community Boards", "Local Event Mapping"],
    architecture: "Real-time event bus for localized notifications and localized community governance modules.",
    tech: ["React Native", "Firebase", "Expo"],
    roadmap: "Cross-campus collaboration tools and a campus-wide talent search engine for student founders.",
    founderNotes: "Community is built on shared experiences. Campus Connect makes those experiences discoverable."
  },
  zappy: {
    title: "ZAPPY",
    tag: "Productivity",
    type: "Productivity Tool",
    status: "Production",
    icon: Zap,
    vision: "The simplest way to organize a modern life.",
    problem: "Existing productivity tools are often cluttered, complex, and overwhelm users with unnecessary feature bloat.",
    solution: "A minimalist productivity experience designed for deep work, focusing on organization, clarity, and workflow optimization.",
    features: ["Workflow Optimization", "Minimalist Interface", "Deep Work Mode"],
    architecture: "Local-first data architecture for zero-latency task management and state synchronization.",
    tech: ["React", "TypeScript", "Tailwind"],
    roadmap: "Integrated focus analytics and a minimalist browser extension for unified workflow management.",
    founderNotes: "Productivity is about subtraction, not addition. Zappy is my pursuit of the 'perfect' minimal workflow."
  },
  "global-group-schools": {
    title: "GLOBAL SCHOOLS",
    tag: "Education Technology",
    type: "Digital Presence",
    status: "Completed",
    icon: Layers,
    vision: "Modernizing the educational narrative through design-first digital experiences.",
    problem: "Educational institutions often have outdated digital presences that fail to engage parents and students effectively.",
    solution: "A modern digital platform focused on admissions, academic information, parent engagement, and school branding.",
    features: ["Information Hub", "Admissions Portal", "Modern UI Architecture", "Parent Engagement System"],
    architecture: "Component-driven UI system designed for multi-site deployment and high-intent enrollment funneling.",
    tech: ["React", "Tailwind", "Vercel"],
    roadmap: "AI-powered admission assistant and an interactive 3D virtual school tour module.",
    founderNotes: "Design is a signal of quality. Schools deserve high-end digital homes that reflect their values."
  }
};

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = PROJECT_DATA[slug];
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Project Not Found</h1>
          <Button onClick={() => router.push("/")} className="bg-primary text-black font-bold">Return to HQ</Button>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <main className="min-h-screen relative bg-black selection:bg-primary/30">
      <div className="fixed inset-0 grain-overlay z-[100] pointer-events-none" />
      <Navbar />
      
      <AnimatePresence>
        {isMounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Hero Section */}
            <section className="pt-48 pb-32 px-6">
              <div className="max-w-7xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-20"
                >
                  <Button 
                    variant="ghost" 
                    onClick={() => router.push("/#ecosystem")}
                    className="group text-[#B7A7A9] hover:text-white mb-12 h-12 px-6 rounded-full border border-white/5"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Ecosystem
                  </Button>

                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl glass border-white/5 flex items-center justify-center text-primary">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                          <span className="px-4 py-1.5 rounded-full glass border-white/5 text-[9px] font-bold tracking-[0.2em] uppercase text-primary">
                            {project.tag}
                          </span>
                        </div>
                      </div>
                      <h1 className="text-7xl md:text-[10rem] font-headline font-black tracking-tighter leading-[0.85] text-white">
                        {project.title}
                      </h1>
                    </div>
                    
                    <div className="space-y-4 text-right">
                       <p className="text-[10px] font-bold tracking-[0.4em] text-[#B7A7A9] uppercase">Project Vision</p>
                       <p className="text-xl text-white font-light max-w-sm ml-auto">
                         {project.vision}
                       </p>
                    </div>
                  </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                  {/* Left Column: Narrative */}
                  <div className="lg:col-span-8 space-y-32">
                    
                    {/* Problem & Solution */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-16"
                    >
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 text-[#91766E]">
                          <div className="h-px w-8 bg-current" />
                          <span className="text-[10px] font-bold tracking-[0.5em] uppercase">The Problem</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-light leading-relaxed text-[#B7A7A9]">
                          {project.problem}
                        </p>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 text-[#F6ECE3]">
                          <div className="h-px w-8 bg-current" />
                          <span className="text-[10px] font-bold tracking-[0.5em] uppercase">The Solution</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-light leading-relaxed text-white">
                          {project.solution}
                        </p>
                      </div>
                    </motion.div>

                    {/* Features & Architecture */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-16"
                    >
                      <div className="glass p-12 rounded-[3rem] border-white/5 space-y-10">
                         <div className="flex items-center gap-4">
                           <Layout className="w-5 h-5 text-primary" />
                           <h3 className="text-[10px] font-bold tracking-[0.5em] text-[#B7A7A9] uppercase">Key Features</h3>
                         </div>
                         <ul className="space-y-6">
                           {project.features.map((f: string, i: number) => (
                             <li key={i} className="flex items-start gap-4 group">
                               <span className="text-[10px] font-bold text-primary/40 group-hover:text-primary transition-colors mt-1.5">0{i+1}</span>
                               <span className="text-lg text-white font-light">{f}</span>
                             </li>
                           ))}
                         </ul>
                      </div>

                      <div className="glass p-12 rounded-[3rem] border-white/5 space-y-10">
                         <div className="flex items-center gap-4">
                           <Cpu className="w-5 h-5 text-primary" />
                           <h3 className="text-[10px] font-bold tracking-[0.5em] text-[#B7A7A9] uppercase">Architecture</h3>
                         </div>
                         <div className="space-y-8">
                            <p className="text-lg text-[#B7A7A9] font-light leading-relaxed">
                              {project.architecture}
                            </p>
                            <div className="pt-8 border-t border-white/5">
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((t: string) => (
                                  <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-[#B7A7A9]">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                         </div>
                      </div>
                    </motion.div>

                    {/* Roadmap */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="space-y-8"
                    >
                      <div className="flex items-center gap-3 text-[#91766E]">
                        <Milestone className="w-5 h-5" />
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase">Future Roadmap</span>
                      </div>
                      <div className="glass p-12 rounded-[3rem] border-white/5">
                        <p className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter leading-tight italic">
                          "{project.roadmap}"
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column: Metadata & Actions */}
                  <div className="lg:col-span-4 space-y-12">
                     <motion.div 
                       initial={{ opacity: 0, scale: 0.95 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       className="glass p-12 rounded-[3.5rem] border-white/10 space-y-10 sticky top-32"
                     >
                       <div className="space-y-2">
                         <p className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">Status</p>
                         <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                            <p className="text-xl text-white font-medium">{project.status}</p>
                         </div>
                       </div>

                       <div className="space-y-6">
                         <p className="text-[10px] font-bold tracking-[0.5em] text-[#B7A7A9] uppercase">Founder Notes</p>
                         <p className="text-[#B7A7A9] leading-relaxed font-light italic text-lg">
                           {project.founderNotes}
                         </p>
                       </div>

                       <div className="space-y-4 pt-10 border-t border-white/5">
                         <Button className="w-full h-16 rounded-full bg-primary text-black font-bold tracking-[0.2em] uppercase text-xs hover:scale-[1.02] transition-all">
                           <Globe className="mr-3 w-4 h-4" /> Live Platform
                         </Button>
                         <Button variant="outline" className="w-full h-16 rounded-full border-white/10 text-white font-bold tracking-[0.2em] uppercase text-xs hover:bg-white/5 transition-all">
                           <Github className="mr-3 w-4 h-4" /> View Architecture
                         </Button>
                       </div>
                     </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

