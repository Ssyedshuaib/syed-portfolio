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

  const menuVariants = {
    closed: { opacity: 0, scale: 0.95, y: -20 },
    open: { opacity: 1, scale: 1, y: 0 },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 10 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 flex justify-center px-4",
          scrolled ? "py-4 md:py-5" : "py-6 md:py-10"
        )}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "flex items-center justify-between lg:justify-start gap-4 md:gap-12 px-6 md:px-10 py-3 md:py-4 rounded-full transition-all duration-700 border w-full max-w-7xl lg:w-auto",
            scrolled 
              ? "bg-[#0F1317]/80 backdrop-blur-[30px] border-[#EAE0C8]/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:scale-95" 
              : "bg-[#0F1317]/20 backdrop-blur-[10px] border-white/5 lg:bg-transparent lg:border-transparent lg:backdrop-blur-none"
          )}
        >
          <Link href="/" className="flex items-center gap-4 md:gap-5 group cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
            <motion.div 
              whileHover={{ scale: 1.2 }}
              className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#EAE0C8] shadow-[0_0_15px_rgba(234,224,200,0.4)]" 
            />
            <span className="text-[#FFFFFF] font-headline font-bold text-[11px] md:text-[13px] tracking-[0.5em] md:tracking-[0.65em] uppercase group-hover:text-[#EAE0C8] transition-colors">
              SYED
            </span>
          </Link>
          
          <div className="h-4 w-px bg-white/5 hidden lg:block" />

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

          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Link 
                href="#contact"
                className="bg-[#EAE0C8] text-[#0F1317] px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase hover:bg-[#FFFFFF] transition-all shadow-[0_10px_30px_rgba(234,224,200,0.15)]"
              >
                Contact
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#050505]/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center p-8"
          >
            <div className="space-y-8 text-center">
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
                    className="text-4xl md:text-5xl font-headline font-black text-white hover:text-primary transition-colors tracking-tighter"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.2, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 text-[10px] font-bold tracking-[0.5em] text-[#EAE0C8] uppercase"
            >
              Axora Venture Studio
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}