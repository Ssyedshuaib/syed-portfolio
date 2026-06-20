"use client";

import React from "react";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const SOCIALS = [
  { label: "GitHub", icon: Github, href: "https://github.com/Errorr-bot" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/syedshuaib485/" },
  { label: "Email", icon: Mail, href: "mailto:hello@example.com" },
  { label: "Resume", icon: FileText, href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="py-48 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        <div className="space-y-8">
          <h2 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-tight">
            Let's Build Something <br />
            <span className="italic text-primary">Meaningful.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            I'm always open to discussing new products, architectural challenges, and meaningful collaborations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {SOCIALS.map((social) => (
            <Link 
              key={social.label} 
              href={social.href}
              className="group flex items-center gap-3 px-10 py-5 glass rounded-full border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-500 hover:scale-105"
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-bold tracking-widest uppercase text-sm">{social.label}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}