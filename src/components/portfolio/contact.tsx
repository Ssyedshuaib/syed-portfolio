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
    <section id="contact" className="py-64 px-6 bg-black">
      <div className="max-w-5xl mx-auto text-center space-y-24">
        <div className="space-y-12">
          <h2 className="text-6xl md:text-9xl font-headline font-bold tracking-tighter leading-[0.85] text-white">
            Let's Build Something <br />
            <span className="italic text-[#B7A7A9]/40 font-medium">Meaningful.</span>
          </h2>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-[#B7A7A9] max-w-2xl mx-auto font-light leading-relaxed">
              I'm always open to discussing ambitious products, startup ideas, technology, and meaningful collaborations.
            </p>
            <p className="text-[10px] font-bold tracking-[0.4em] text-[#91766E] uppercase">Typical response time: Within 24 hours</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {SOCIALS.map((social) => (
            <Link 
              key={social.label} 
              href={social.href}
              className="group flex items-center gap-4 px-10 py-5 bg-[#B7A7A9]/[0.08] rounded-full border border-[#F6ECE3]/[0.08] hover:border-[#91766E] hover:bg-[#91766E]/10 transition-all duration-500"
            >
              <social.icon className="w-5 h-5 text-[#B7A7A9] group-hover:text-white transition-colors" />
              <span className="font-bold tracking-[0.2em] uppercase text-[10px] text-[#B7A7A9] group-hover:text-white">{social.label}</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}