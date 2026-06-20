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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6",
        scrolled ? "py-6" : "py-10"
      )}
    >
      <div
        className={cn(
          "max-w-5xl mx-auto flex items-center justify-between px-8 py-3 rounded-full transition-all duration-700 border border-transparent",
          scrolled ? "glass shadow-2xl border-white/5" : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-foreground font-headline font-bold text-lg tracking-widest uppercase">
            S.S.S
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase">
          <Link href="#philosophy" className="hover:text-primary transition-colors">Philosophy</Link>
          <Link href="#journey" className="hover:text-primary transition-colors">Journey</Link>
          <Link href="#ecosystem" className="hover:text-primary transition-colors">Products</Link>
          <Link href="#ideas" className="hover:text-primary transition-colors">Ideas</Link>
        </div>

        <Link 
          href="#contact"
          className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/10"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}