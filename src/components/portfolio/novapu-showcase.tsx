
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BrainCircuit, GraduationCap, Target, LineChart } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const NOVAPU_FEATURES = [
  {
    id: "onboarding",
    number: "01",
    label: "INTELLIGENT PERSONALIZATION",
    title: "Learning Built Around You",
    description: "Every student's journey is unique. NovaPU analyzes your current standing to create a learning path that maximizes your potential from day one.",
    imageId: "novapu-onboarding",
  },
  {
    id: "pathway",
    number: "02",
    label: "ACADEMIC PATHWAY",
    title: "Personalized Academic Foundation",
    description: "Select your stream and goals. Whether it's CET, JEE, or NEET, we align the entire platform to your specific competitive exam targets.",
    imageId: "novapu-onboarding",
  },
  {
    id: "dashboard",
    number: "03",
    label: "COMMAND CENTER",
    title: "Your Academic Control Room",
    description: "A unified dashboard that tracks your progress, highlights pending goals, and provides a bird's-eye view of your entire educational ecosystem.",
    imageId: "novapu-dashboard",
  },
  {
    id: "ai-mentor",
    number: "04",
    label: "ARTIFICIAL INTELLIGENCE",
    title: "A Mentor Available 24/7",
    description: "Get instant answers to complex problems. Our AI mentor doesn't just give answers; it explains concepts and helps you build fundamental understanding.",
    imageId: "novapu-ai-mentor",
  },
  {
    id: "assessment",
    number: "05",
    label: "ASSESSMENT ENGINE",
    title: "Practice That Builds Confidence",
    description: "Realistic mock tests and timed quizzes designed to simulate actual exam conditions, helping you master time management and accuracy.",
    imageId: "novapu-test-centre",
  },
  {
    id: "analytics",
    number: "06",
    label: "PROGRESS ANALYTICS",
    title: "Measure Every Achievement",
    description: "Detailed performance reports that identify your strengths and reveal hidden weaknesses, turning data into actionable study plans.",
    imageId: "novapu-test-centre",
  },
  {
    id: "planning",
    number: "07",
    label: "AI PLANNING",
    title: "A Roadmap To Success",
    description: "Dynamic study schedules that adapt to your pace, ensuring you cover every topic before the big day without burnout.",
    imageId: "novapu-dashboard",
  }
];

const IPhoneMockup = ({ imageId, index }: { imageId: string, index: number }) => {
  const image = PlaceHolderImages.find(img => img.id === imageId);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 group"
    >
      {/* Emerald/Cyan Ambience behind Device */}
      <div className="absolute -inset-20 bg-[#10b981]/5 blur-[120px] rounded-full opacity-60 pointer-events-none group-hover:bg-[#06b6d4]/5 transition-colors duration-1000" />
      
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[280px] h-[600px] md:w-[360px] md:h-[760px] rounded-[3.5rem] border-[14px] border-[#1A1A1A] bg-black shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8),0_0_0_2px_rgba(255,255,255,0.05)] overflow-hidden"
      >
        <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2.8rem] pointer-events-none z-30" />
        
        <div className="relative h-full w-full bg-[#0F1317]">
          {image && (
            <Image 
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
              priority
              data-ai-hint={image.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none z-20" />
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-[1.2rem] z-40 border border-white/5" />
      </motion.div>

      {/* Ground Shadow */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-24 bg-emerald-900/20 blur-[60px] rounded-full -z-10" />
    </motion.div>
  );
};

export function NovaPUShowcase() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section id="novapu-experience" className="bg-[#050505] relative overflow-hidden py-32">
      {/* Background Grid & Ambience */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.01] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
      
      <div className="absolute top-1/4 -left-1/4 w-full h-full bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-full h-full bg-cyan-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-[25vh]">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-12 mb-[15vh]"
        >
          <div className="inline-flex items-center gap-3 text-[10px] font-bold text-emerald-500 uppercase tracking-[0.6em] border border-emerald-500/10 px-6 py-2 rounded-full glass">
            Product Experience
          </div>
          <h2 className="text-7xl md:text-9xl font-headline font-black tracking-tighter text-white leading-none">
            Learning Reimagined. <br />
            <span className="text-emerald-400 italic font-medium">NovaPU.</span>
          </h2>
        </motion.div>

        {/* Feature Blocks */}
        {NOVAPU_FEATURES.map((feature, idx) => (
          <div 
            key={feature.id}
            className={cn(
              "min-h-[85vh] flex flex-col items-center justify-between gap-24 lg:gap-48",
              idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            )}
          >
            {/* Visual Column */}
            <div className="flex-1 flex justify-center items-center w-full">
              <IPhoneMockup imageId={feature.imageId} index={idx} />
            </div>

            {/* Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 space-y-12 text-center lg:text-left w-full"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-center lg:justify-start gap-4 text-emerald-500/60">
                  <span className="text-xs font-bold tracking-[0.4em]">{feature.number}</span>
                  <div className="h-px w-12 bg-current opacity-20" />
                  <span className="text-[11px] font-bold tracking-[0.5em] uppercase">
                    {feature.label}
                  </span>
                </div>
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-headline font-black text-white tracking-tighter leading-[0.9]">
                  {feature.title}
                </h3>
                <p className="text-xl md:text-2xl text-emerald-100/60 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {feature.description}
                </p>
              </div>
              
              <div className="pt-8 flex justify-center lg:justify-start">
                <button className="group flex items-center gap-4 text-[11px] font-bold tracking-[0.4em] uppercase text-white hover:text-emerald-400 transition-colors">
                  Explore Feature 
                  <div className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        ))}

        {/* Closing Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="pt-64 pb-32 text-center space-y-12"
        >
          <div className="h-px w-32 bg-emerald-500/20 mx-auto" />
          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-white tracking-tighter leading-tight italic max-w-5xl mx-auto">
            "We are not just building a learning tool; we are architecting a future where every student has access to an elite, personalized education."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
