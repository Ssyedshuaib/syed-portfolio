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
        scrolled ? "py-4" : "py-10"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-10 px-8 py-3.5 rounded-full transition-all duration-1000 border border-white/5",
          scrolled ? "glass shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-card/90 scale-95" : "bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(125,211,252,0.5)]" />
          <span className="text-foreground font-headline font-bold text-xs tracking-[0.3em] uppercase group-hover:text-primary transition-colors">
            SYED
          </span>
        </Link>
        
        <div className="h-4 w-px bg-white/10 hidden lg:block" />

        <div className="hidden lg:flex items-center gap-10 text-[9px] font-bold tracking-[0.4em] text-muted-foreground uppercase">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="hover:text-foreground transition-all relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <Link 
          href="#contact"
          className="bg-primary text-primary-foreground px-8 py-2.5 rounded-full text-[9px] font-bold tracking-[0.3em] uppercase hover:scale-110 active:scale-95 transition-all shadow-lg shadow-primary/20"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
