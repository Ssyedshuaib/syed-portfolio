"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Journey", href: "/#journey" },
  { label: "Axora", href: "/#axora" },
  { label: "Products", href: "/#ecosystem" },
  { label: "Ideas", href: "/#ideas" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 40);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-600 ease-out flex justify-center px-4",
        scrolled ? "py-4 md:py-6" : "py-8 md:py-10"
      )}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex items-center justify-between lg:justify-start gap-4 md:gap-10 px-6 md:px-8 py-3.5 rounded-full transition-all duration-600 ease-out border w-full max-w-[1250px] lg:w-auto",
          scrolled 
            ? "bg-[#0F1317]/80 backdrop-blur-[40px] border-[#EAE0C8]/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)]" 
            : "bg-transparent border-transparent"
        )}
      >
        <Link 
          href="/" 
          className="flex items-center gap-4 group" 
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className={cn(
            "w-2 h-2 rounded-full transition-colors duration-600 ease-out",
            scrolled ? "bg-primary shadow-[0_0_10px_rgba(234,224,200,0.4)]" : "bg-[#EAE0C8]"
          )} />
          <span className="text-white font-headline font-bold text-[11px] tracking-[0.6em] uppercase group-hover:text-primary transition-colors">
            SYED
          </span>
        </Link>
        
        <div className="h-4 w-px bg-white/5 hidden lg:block" />

        <nav className="hidden lg:flex items-center gap-8 text-[10px] font-bold tracking-[0.5em] text-[#EAE0C8]/60 uppercase">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              className="hover:text-white transition-all relative group py-1"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-primary/40 transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 ml-auto lg:ml-6">
          <Link 
            href="/#contact"
            className={cn(
              "hidden md:block px-6 py-2 rounded-full text-[9px] font-bold tracking-[0.4em] uppercase transition-all duration-600 ease-out",
              scrolled 
                ? "bg-primary text-[#0F1317] hover:bg-white" 
                : "bg-[#EAE0C8] text-[#0F1317] hover:bg-white"
            )}
          >
            Contact
          </Link>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/70"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#050505]/98 backdrop-blur-[40px] lg:hidden flex flex-col items-center justify-center p-8"
          >
            <nav className="space-y-10 text-center">
              {[...NAV_LINKS, { label: "Contact", href: "/#contact" }].map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-headline font-black text-white hover:text-primary transition-colors tracking-tighter italic"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}