"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Journey", href: "#journey" },
  { label: "Axora", href: "#axora" },
  { label: "Products", href: "#ecosystem" },
  { label: "Ideas", href: "#ideas" },
  { label: "Stack", href: "#stack" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 flex justify-center",
        scrolled ? "py-6" : "py-10"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-12 px-10 py-4 rounded-full transition-all duration-1000 border",
          scrolled 
            ? "bg-[#0F0F0F]/75 backdrop-blur-[30px] border-[#F6ECE3]/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-95" 
            : "bg-transparent border-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F6ECE3] shadow-[0_0_15px_rgba(246,236,227,0.4)]" />
          <span className="text-[#F6ECE3] font-headline font-bold text-xs tracking-[0.5em] uppercase group-hover:text-secondary transition-colors">
            SYED
          </span>
        </Link>
        
        <div className="h-5 w-px bg-white/5 hidden lg:block" />

        <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold tracking-[0.4em] text-[#B7A7A9] uppercase">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="hover:text-white transition-all relative group"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#91766E] transition-all duration-700 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <Link 
          href="#contact"
          className="bg-[#F6ECE3] text-[#000000] px-10 py-3 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-[#91766E] hover:text-white hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(145,118,110,0.2)]"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}