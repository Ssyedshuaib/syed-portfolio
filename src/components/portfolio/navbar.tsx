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
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 50);
      }
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 flex justify-center",
        scrolled ? "py-5" : "py-10"
      )}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex items-center gap-12 px-10 py-4 rounded-full transition-all duration-700 border",
          scrolled 
            ? "bg-[#0F1317]/80 backdrop-blur-[30px] border-[#EAE0C8]/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-95" 
            : "bg-transparent border-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-5 group cursor-pointer">
          <motion.div 
            whileHover={{ scale: 1.2 }}
            className="w-2.5 h-2.5 rounded-full bg-[#EAE0C8] shadow-[0_0_15px_rgba(234,224,200,0.4)]" 
          />
          <span className="text-[#FFFFFF] font-headline font-bold text-[13px] tracking-[0.65em] uppercase group-hover:text-[#EAE0C8] transition-colors">
            SYED
          </span>
        </Link>
        
        <div className="h-5 w-px bg-white/5 hidden lg:block" />

        <div className="hidden lg:flex items-center gap-10 text-[11.5px] font-bold tracking-[0.55em] text-[#EAE0C8]/70 uppercase">
          {NAV_LINKS.map((link) => (
            <motion.div key={link.label} whileHover={{ y: -1 }}>
              <Link 
                href={link.href} 
                className="hover:text-white transition-all relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#536878] transition-all duration-700 group-hover:w-full" />
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
            className="bg-[#EAE0C8] text-[#0F1317] px-8 py-2.5 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-[#FFFFFF] transition-all shadow-[0_10px_30px_rgba(234,224,200,0.15)]"
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </nav>
  );
}
