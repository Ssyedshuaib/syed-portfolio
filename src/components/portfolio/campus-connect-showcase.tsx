"use client";

import React from "react";
import { LaptopMockup } from "./laptop-mockup";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    number: "01",
    label: "COMMUNITY PLATFORM",
    title: "Connecting Students Beyond Classrooms.",
    description: "A hyper-local networking engine designed to foster collaboration, community, and meaningful digital connections on campus.",
    imageId: "campus-landing"
  },
  {
    number: "02",
    label: "INTERACTION",
    title: "Real-time Community Feed",
    description: "Stay updated with campus-wide discussions, announcements, and peer contributions through a high-speed local event bus.",
    imageId: "campus-feed"
  },
  {
    number: "03",
    label: "NETWORKING",
    title: "Intelligent Peer Discovery",
    description: "Find peer collaborators based on shared interests, skills, and academic goals using our localized networking engine.",
    imageId: "campus-networking"
  },
  {
    number: "04",
    label: "EVENTS",
    title: "Hyper-Local Event Mapping",
    description: "Discover and participate in workshops, hackathons, and social events happening within your immediate campus environment.",
    imageId: "campus-events"
  },
  {
    number: "05",
    label: "GROUPS",
    title: "Purpose-Driven Student Hubs",
    description: "Create and join high-intent professional and academic groups focused on deep collaboration and long-term project growth.",
    imageId: "campus-groups"
  },
  {
    number: "06",
    label: "COLLABORATION",
    title: "Seamless Project Partnerships",
    description: "Tools designed specifically for campus-based project management and cross-departmental collaboration.",
    imageId: "campus-collaboration"
  },
  {
    number: "07",
    label: "VISION",
    title: "The Digital Heartbeat of Campus.",
    description: "Transforming the offline campus experience into a dynamic, connected, and highly engaged digital ecosystem.",
    imageId: "campus-overview"
  }
];

export function CampusConnectShowcase() {
  return (
    <section id="campus-experience" className="bg-[#050505] relative overflow-hidden py-32">
      <div className="absolute inset-0 blueprint-grid opacity-[0.01] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 space-y-[25vh]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-12 mb-[15vh]"
        >
          <div className="inline-flex items-center gap-3 text-[10px] font-bold text-primary uppercase tracking-[0.6em] border border-white/5 px-6 py-2 rounded-full glass">
            Hyper-Local Network
          </div>
          <h2 className="text-7xl md:text-9xl font-headline font-black tracking-tighter text-white leading-none">
            Campus <br />
            <span className="text-primary italic font-medium">Connect.</span>
          </h2>
        </motion.div>

        {FEATURES.map((feature, idx) => (
          <div 
            key={idx}
            className={cn(
              "min-h-[85vh] flex flex-col items-center justify-between gap-24 lg:gap-48",
              idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            )}
          >
            <div className="flex-1 w-full">
              <LaptopMockup imageId={feature.imageId} />
            </div>

            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 space-y-12 text-center lg:text-left w-full"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-center lg:justify-start gap-4 text-primary">
                  <span className="text-xs font-bold tracking-[0.4em]">{feature.number}</span>
                  <div className="h-px w-12 bg-current opacity-20" />
                  <span className="text-[11px] font-bold tracking-[0.5em] uppercase">
                    {feature.label}
                  </span>
                </div>
                <h3 className="text-5xl md:text-7xl font-headline font-black text-white tracking-tighter leading-[0.9]">
                  {feature.title}
                </h3>
                <p className="text-xl md:text-2xl text-[#EAE0C8]/60 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {feature.description}
                </p>
              </div>
              
              <button className="group flex items-center gap-4 text-[11px] font-bold tracking-[0.4em] uppercase text-white hover:text-primary transition-colors">
                Explore Network
                <div className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
