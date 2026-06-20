"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 flex justify-center",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-700 border border-white/5",
          scrolled ? "glass shadow-2xl bg-card/80 scale-95" : "bg-white/[0.02]"
        )}
      >
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-foreground font-headline font-bold text-sm tracking-widest uppercase group-hover:text-primary transition-colors">
            SYED
          </span>
        </Link>
        
        <div className="h-4 w-px bg-white/10 hidden md:block" />

        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">
          <Link href="#philosophy" className="hover:text-foreground transition-all">Philosophy</Link>
          <Link href="#journey" className="hover:text-foreground transition-all">Journey</Link>
          <Link href="#ecosystem" className="hover:text-foreground transition-all">Products</Link>
          <Link href="#ideas" className="hover:text-foreground transition-all">Ideas</Link>
        </div>

        <Link 
          href="#contact"
          className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:scale-105 active:scale-95 transition-all"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}