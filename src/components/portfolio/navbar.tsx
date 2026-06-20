"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Journey", href: "#journey" },
  { label: "Axora", href: "#axora" },
  { label: "Products", href: "#ecosystem" },
  { label: "Ideas", href: "#ideas" },
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
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex items-center gap-10 px-8 py-3 rounded-full transition-all duration-700 border",
          scrolled 
            ? "bg-[#0F0F0F]/80 backdrop-blur-[30px] border-[#F6ECE3]/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-95" 
            : "bg-transparent border-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-4 group cursor-pointer">
          <motion.div 
            whileHover={{ scale: 1.2 }}
            className="w-2.5 h-2.5 rounded-full bg-[#F6ECE3] shadow-[0_0_15px_rgba(246,236,227,0.4)]" 
          />
          <span className="text-[#F6ECE3] font-headline font-bold text-[10px] tracking-[0.5em] uppercase group-hover:text-secondary transition-colors">
            SYED
          </span>
        </Link>
        
        <div className="h-4 w-px bg-white/5 hidden lg:block" />

        <div className="hidden lg:flex items-center gap-8 text-[9px] font-bold tracking-[0.4em] text-[#B7A7A9] uppercase">
          {NAV_LINKS.map((link) => (
            <motion.div key={link.label} whileHover={{ y: -2 }}>
              <Link 
                href={link.href} 
                className="hover:text-white transition-all relative group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#91766E] transition-all duration-700 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="#contact"
            className="bg-[#F6ECE3] text-[#000000] px-8 py-2.5 rounded-full text-[9px] font-bold tracking-[0.4em] uppercase hover:bg-[#91766E] hover:text-white transition-all shadow-[0_10px_30px_rgba(145,118,110,0.15)]"
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </nav>
  );
}
