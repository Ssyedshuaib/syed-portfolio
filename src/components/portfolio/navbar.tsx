"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-center",
        scrolled ? "mt-4" : "mt-0"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full transition-all duration-500",
          scrolled ? "glass shadow-2xl" : "bg-transparent"
        )}
      >
        <div className="text-primary font-headline font-bold text-xl tracking-tight">
          S.S.S
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="#devnexus" className="hover:text-foreground transition-colors">DevNexus</Link>
          <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="#philosophy" className="hover:text-foreground transition-colors">Philosophy</Link>
        </div>
        <Link 
          href="#contact"
          className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95"
        >
          Let's Connect
        </Link>
      </div>
    </nav>
  );
}
