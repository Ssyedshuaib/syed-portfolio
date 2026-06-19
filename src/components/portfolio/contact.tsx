"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SOCIALS = [
  { label: "GitHub", icon: Github, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Email", icon: Mail, href: "mailto:hello@example.com" },
  { label: "Resume", icon: FileText, href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tight">
            Let's Build Something <span className="text-primary italic">Meaningful</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open for collaborations, interesting products, and startup conversations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {SOCIALS.map((social) => (
            <Link 
              key={social.label} 
              href={social.href}
              className="group flex items-center gap-3 px-8 py-4 glass rounded-full border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-bold">{social.label}</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          ))}
        </div>

        <div className="pt-24 flex flex-col items-center gap-6 text-muted-foreground/40">
           <div className="w-px h-24 bg-gradient-to-b from-white/10 to-transparent" />
           <p className="text-xs uppercase tracking-[0.4em] font-bold">Syed Sharfuddin Shuaib &copy; 2025</p>
        </div>
      </div>
    </section>
  );
}
