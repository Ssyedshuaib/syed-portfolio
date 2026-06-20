"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Journey", href: "#journey" },
  { label: "Axora", href: "#axora" },
  { label: "Products", href: "#ecosystem" },
  { label: "Ideas", href: "#ideas" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 50);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const itemVariants = {
    closed: { opacity: 0, y: 10 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.1 + i * 0.05, 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      },
    }),
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 flex justify-center px-4",
          scrolled ? "py-6" : "py-10"
        )}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "flex items-center justify-between lg:justify-start gap-4 md:gap-12 px-8 py-4 rounded-full transition-all duration-1000 border w-full max-w-7xl lg:w-auto",
            scrolled 
              ? "bg-[#0F1317]/70 backdrop-blur-[40px] border-[#EAE0C8]/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] lg:scale-95" 
              : "bg-transparent border-transparent"
          )}
        >
          <Link 
            href="/" 
            className="flex items-center gap-5 group" 
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              whileHover={{ scale: 1.2, boxShadow: "0 0 30px rgba(234,224,200,0.6)" }}
              className="w-2.5 h-2.5 rounded-full bg-[#EAE0C8]" 
            />
            <span className="text-white font-headline font-bold text-[12px] tracking-[0.6em] uppercase group-hover:text-primary transition-colors duration-700">
              SYED
            </span>
          </Link>
          
          <div className="h-4 w-px bg-white/5 hidden lg:block" />

          <nav className="hidden lg:flex items-center gap-10 text-[11px] font-bold tracking-[0.5em] text-[#EAE0C8]/60 uppercase">
            {NAV_LINKS.map((link) => (
              <motion.div key={link.label} whileHover={{ y: -1 }}>
                <Link 
                  href={link.href} 
                  className="hover:text-white transition-all relative group py-2"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary/40 transition-all duration-700 ease-premium group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-4 ml-auto lg:ml-8">
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:block"
            >
              <Link 
                href="#contact"
                className="bg-[#EAE0C8] text-[#0F1317] px-8 py-2.5 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-white transition-all shadow-[0_10px_30px_rgba(234,224,200,0.1)]"
              >
                Contact
              </Link>
            </motion.div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#050505]/95 backdrop-blur-[50px] lg:hidden flex flex-col items-center justify-center p-8"
          >
            <nav className="space-y-10 text-center">
              {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map((link, i) => (
                <motion.div
                  key={link.label}
                  custom={i}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-5xl font-headline font-black text-white hover:text-primary transition-colors tracking-tighter italic"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="absolute bottom-16 text-[9px] font-bold tracking-[0.8em] text-white/20 uppercase">
              Axora Venture Studio
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
