"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-1000 px-6",
        scrolled ? "py-6" : "py-10",
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      )}
    >
      <div
        className={cn(
          "max-w-5xl mx-auto flex items-center justify-between px-10 py-4 rounded-full transition-all duration-1000 border border-transparent",
          scrolled ? "glass shadow-2xl border-white/5 bg-card/60" : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          <span className="text-foreground font-headline font-bold text-xl tracking-widest uppercase group-hover:text-primary transition-colors duration-500">
            S.S.S
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] font-bold tracking-[0.4em] text-muted-foreground uppercase">
          <Link href="#philosophy" className="hover:text-primary transition-all duration-500 relative group">
            Philosophy
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
          </Link>
          <Link href="#journey" className="hover:text-primary transition-all duration-500 relative group">
            Journey
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
          </Link>
          <Link href="#ecosystem" className="hover:text-primary transition-all duration-500 relative group">
            Products
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
          </Link>
          <Link href="#ideas" className="hover:text-primary transition-all duration-500 relative group">
            Ideas
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
          </Link>
        </div>

        <Link 
          href="#contact"
          className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:scale-105 active:scale-95 transition-all duration-500 shadow-xl shadow-primary/20 hover:shadow-primary/40"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}