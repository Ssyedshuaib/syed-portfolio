
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { MapPin, Layout, Compass, Sparkles, ArrowUpRight, GraduationCap, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const ECOSYSTEM_NODES = [
  {
    id: "reverie",
    title: "REVERIE",
    subtitle: "Memory Preservation Platform",
    description: "Capturing memories, emotions, and places.",
    icon: MapPin,
    slug: "/projects/reverie",
    position: { x: 22, y: 28 },
    delay: 0.1
  },
  {
    id: "devnexus",
    title: "DEVNEXUS",
    subtitle: "Student Ecosystem",
    description: "Learn. Earn. Grow.",
    icon: Layout,
    slug: "/projects/devnexus",
    position: { x: 78, y: 28 },
    delay: 0.2
  },
  {
    id: "schools",
    title: "GLOBAL SCHOOLS",
    subtitle: "Digital Admissions",
    description: "Institutional management platform.",
    icon: GraduationCap,
    slug: "/projects/global-group-schools",
    position: { x: 88, y: 50 },
    delay: 0.3
  },
  {
    id: "future",
    title: "FUTURE VENTURES",
    subtitle: "Experimental Products",
    description: "Exploring proactive AI and emerging ideas.",
    icon: Compass,
    slug: "#",
    position: { x: 78, y: 72 },
    delay: 0.4
  },
  {
    id: "studio",
    title: "AXORA VENTURE STUDIO",
    subtitle: "Venture Builder",
    description: "Building scalable digital ecosystems.",
    icon: Sparkles,
    slug: "#",
    position: { x: 22, y: 72 },
    delay: 0.5
  },
];

export function AxoraEcosystem() {
  const router = useRouter();
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  // Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 20); // Subtle 20px max movement
    mouseY.set(y * 20);
  };

  return (
    <section 
      id="axora" 
      className="py-64 px-6 bg-[#050505] relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-5 space-y-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <p className="text-[10px] font-bold tracking-[0.6em] text-[#536878] uppercase">Studio Ecosystem</p>
              </div>
              <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white leading-none">
                One Vision.<br />
                <span className="text-[#EAE0C8] italic font-medium">Multiple Products.</span>
              </h2>
              <p className="text-xl md:text-2xl text-[#EAE0C8]/50 font-light leading-relaxed max-w-lg">
                Axora is a venture studio focused on building digital ecosystems across education, memory preservation, productivity, and future technologies.
              </p>
              
              <div className="pt-8 flex items-center gap-6 text-[#536878]">
                <div className="h-px w-12 bg-current opacity-20" />
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase">Hover core to power ecosystem</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visualization Column */}
          <motion.div 
            style={{ x: springX, y: springY }}
            className="lg:col-span-7 relative aspect-square max-w-[650px] mx-auto flex items-center justify-center"
          >
            {/* Background Energy Field */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.08),transparent_70%)] opacity-40" />
              
              {/* Concentric Circles */}
              {[400, 500, 600].map((size, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isEcosystemOpen ? 0.05 : 0.02, 
                    scale: 1,
                  }}
                  className="absolute border border-white rounded-full"
                  style={{ width: size, height: size }}
                />
              ))}
            </div>

            {/* Connection Beams Layer */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                <AnimatePresence>
                  {isEcosystemOpen && ECOSYSTEM_NODES.map((node) => (
                    <motion.g key={`beam-${node.id}`}>
                      {/* Base Connection Line */}
                      <motion.line
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: activeNode === node.id ? 0.6 : 0.15 }}
                        exit={{ pathLength: 0, opacity: 0 }}
                        transition={{ duration: 1, delay: node.delay, ease: [0.16, 1, 0.3, 1] }}
                        x1="50" y1="50"
                        x2={node.position.x}
                        y2={node.position.y}
                        stroke="#EAE0C8"
                        strokeWidth="0.1"
                      />
                      
                      {/* Traveling Energy Pulse */}
                      <motion.circle
                        animate={{ 
                          cx: [50, node.position.x],
                          cy: [50, node.position.y],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity, 
                          delay: node.delay,
                          ease: "linear"
                        }}
                        r="0.4"
                        fill="#EAE0C8"
                        style={{ filter: 'blur(1px)' }}
                      />
                    </motion.g>
                  ))}
                </AnimatePresence>
              </svg>
            </div>

            {/* Central AXORA Core Orb */}
            <motion.div
              onMouseEnter={() => setIsEcosystemOpen(true)}
              onMouseLeave={() => {
                if (!activeNode) setIsEcosystemOpen(false);
              }}
              className="relative z-50 cursor-pointer"
              animate={{ 
                scale: isEcosystemOpen ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Atmospheric Glow */}
              <motion.div
                animate={{ 
                  scale: isEcosystemOpen ? [1.1, 1.4, 1.1] : [1, 1.2, 1],
                  opacity: isEcosystemOpen ? [0.2, 0.4, 0.2] : [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary blur-[80px] rounded-full"
              />

              <div className={cn(
                "w-48 h-48 rounded-full glass border-white/5 flex flex-col items-center justify-center transition-all duration-1000",
                isEcosystemOpen ? "border-primary/40 shadow-[0_0_100px_rgba(234,224,200,0.15)] bg-primary/[0.03]" : "hover:border-primary/20"
              )}>
                <motion.div
                  animate={{ 
                    rotate: isEcosystemOpen ? 360 : 0,
                    scale: isEcosystemOpen ? 1.2 : 1 
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className={cn(
                    "w-8 h-8 mb-4 transition-all duration-700",
                    isEcosystemOpen ? "text-white" : "text-[#536878]"
                  )} />
                </motion.div>
                <span className="text-white font-headline font-bold text-sm tracking-[0.6em] uppercase">AXORA</span>
                
                <AnimatePresence>
                  {isEcosystemOpen && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 0.4, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="text-[9px] tracking-[0.4em] uppercase mt-3 font-bold"
                    >
                      Ecosystem Core
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Product Satellite Nodes */}
            <AnimatePresence>
              {isEcosystemOpen && ECOSYSTEM_NODES.map((node) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%", left: "50%", top: "50%" }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    left: `${node.position.x}%`,
                    top: `${node.position.y}%`,
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.8, 
                    left: "50%", 
                    top: "50%",
                    transition: { duration: 0.6 }
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: node.delay,
                    type: "spring",
                    stiffness: 80,
                    damping: 20
                  }}
                  onMouseEnter={() => {
                    setActiveNode(node.id);
                    setIsEcosystemOpen(true);
                  }}
                  onMouseLeave={() => {
                    setActiveNode(null);
                  }}
                  onClick={() => node.slug !== "#" && router.push(node.slug)}
                  className="absolute z-40 group cursor-pointer"
                  style={{ transform: 'translate(-50%, -50%)' }}
                >
                  {/* Subtle Float Effect */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6 + node.delay * 10, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className={cn(
                      "relative glass p-6 rounded-[2rem] border-white/5 w-60 transition-all duration-700",
                      activeNode === node.id 
                        ? "border-primary/40 bg-primary/[0.05] -translate-y-3 shadow-[0_20px_40px_rgba(0,0,0,0.6)] scale-[1.03]" 
                        : "group-hover:border-white/15"
                    )}>
                      {/* Spotlight Glow */}
                      <AnimatePresence>
                        {activeNode === node.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent rounded-[2rem] -z-10"
                          />
                        )}
                      </AnimatePresence>

                      <div className="flex items-start justify-between mb-4">
                        <div className={cn(
                          "w-10 h-10 rounded-xl glass border-white/5 flex items-center justify-center transition-all duration-700",
                          activeNode === node.id ? "text-white scale-110" : "text-[#536878]"
                        )}>
                          <node.icon className="w-5 h-5" />
                        </div>
                        {node.slug !== "#" && (
                          <ArrowUpRight className={cn(
                            "w-4 h-4 transition-all duration-500",
                            activeNode === node.id ? "text-primary opacity-100" : "text-[#536878] opacity-30"
                          )} />
                        )}
                      </div>

                      <div className="space-y-1">
                        <p className="text-[10px] font-bold tracking-[0.4em] text-white uppercase">{node.title}</p>
                        <p className="text-[8px] font-bold tracking-[0.5em] text-[#536878] uppercase">{node.subtitle}</p>
                      </div>

                      {/* Detail Reveal */}
                      <AnimatePresence>
                        {activeNode === node.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-[9px] text-[#EAE0C8]/60 tracking-widest uppercase mt-4 leading-relaxed font-light">
                              {node.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
