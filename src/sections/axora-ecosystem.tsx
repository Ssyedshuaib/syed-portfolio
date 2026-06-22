"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MapPin, Layout, Compass, Sparkles, ArrowUpRight, GraduationCap, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const ECOSYSTEM_NODES = [
  {
    id: "reverie",
    title: "REVERIE",
    subtitle: "Memory Platform",
    description: "Capturing memories through places.",
    status: "LIVE",
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
    status: "PRODUCTION",
    icon: Layout,
    slug: "/projects/devnexus",
    position: { x: 78, y: 28 },
    delay: 0.25
  },
  {
    id: "schools",
    title: "GLOBAL SCHOOLS",
    subtitle: "Education Tech",
    description: "Digital admissions platform.",
    status: "COMPLETED",
    icon: GraduationCap,
    slug: "/projects/global-group-schools",
    position: { x: 88, y: 50 },
    delay: 0.4
  },
  {
    id: "future",
    title: "FUTURE VENTURES",
    subtitle: "Innovation Lab",
    description: "Experimental AI products.",
    status: "COMING SOON",
    icon: Compass,
    slug: "#",
    position: { x: 78, y: 72 },
    delay: 0.55
  },
  {
    id: "studio",
    title: "AXORA STUDIO",
    subtitle: "Venture Builder",
    description: "Building digital ecosystems.",
    status: "ACTIVE",
    icon: Sparkles,
    slug: "#",
    position: { x: 22, y: 72 },
    delay: 0.7
  },
];

export function AxoraEcosystem() {
  const router = useRouter();
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 15);
    mouseY.set(y * 15);
  };

  return (
    <section 
      id="axora" 
      className="py-24 md:py-64 px-6 bg-[#0B1116] relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 space-y-12 md:space-y-16 relative z-50">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10 md:space-y-12"
            >
              <div className="space-y-6">
                <p className="text-[9px] md:text-[10px] font-bold tracking-[0.6em] md:tracking-[0.8em] text-[#EAE0C8]/30 uppercase">THE MISSION</p>
                <div className="max-w-md">
                  <h2 className="text-3xl md:text-6xl font-headline font-black tracking-tighter text-[#EAE0C8] leading-[1] md:leading-[0.95] uppercase">
                    Building Systems <br />
                    <span className="opacity-40 italic font-medium">That Outlive Trends.</span>
                  </h2>
                </div>
              </div>
              
              <div className="space-y-8 md:space-y-10 pt-4">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-base md:text-xl text-[#EAE0C8]/60 font-light italic">Technology changes.</p>
                    <p className="text-base md:text-xl text-[#EAE0C8]/60 font-light italic">Principles remain.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-base md:text-xl text-[#EAE0C8]/60 font-light italic">Products evolve.</p>
                    <p className="text-base md:text-xl text-[#EAE0C8]/60 font-light italic">The mission stays the same.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 flex items-center gap-6 text-[#536878]">
                <div className="h-px w-8 md:w-12 bg-current opacity-20" />
                <p className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">Hover core to power ecosystem</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            style={{ x: springX, y: springY }}
            className="lg:col-span-7 relative aspect-square max-w-[700px] w-full mx-auto flex items-center justify-center overflow-hidden lg:overflow-visible"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.1),transparent_70%)] opacity-40" 
              />
              
              {[300, 450, 600].map((size, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isEcosystemOpen ? 0.04 : 0.015, 
                    scale: 1,
                  }}
                  className="absolute border border-[#EAE0C8]/20 rounded-full"
                  style={{ width: size, height: size }}
                />
              ))}
            </div>

            <div className="absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                <AnimatePresence>
                  {isEcosystemOpen && ECOSYSTEM_NODES.map((node) => (
                    <motion.g key={`beam-${node.id}`}>
                      <motion.line
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: activeNode === node.id ? 0.5 : 0.15 }}
                        exit={{ pathLength: 0, opacity: 0 }}
                        transition={{ duration: 0.8, delay: node.delay, ease: [0.16, 1, 0.3, 1] }}
                        x1="50" y1="50"
                        x2={node.position.x}
                        y2={node.position.y}
                        stroke="#EAE0C8"
                        strokeWidth="0.1"
                      />
                      
                      <motion.circle
                        animate={{ 
                          cx: [50, node.position.x],
                          cy: [50, node.position.y],
                          opacity: [0, 0.6, 0]
                        }}
                        transition={{ 
                          duration: 5 + node.delay * 3, 
                          repeat: Infinity, 
                          delay: node.delay * 8,
                          ease: "linear"
                        }}
                        r="0.3"
                        fill="#EAE0C8"
                        style={{ filter: 'blur(0.5px)' }}
                      />
                    </motion.g>
                  ))}
                </AnimatePresence>
              </svg>
            </div>

            <motion.div
              onMouseEnter={() => setIsEcosystemOpen(true)}
              onMouseLeave={() => {
                if (!activeNode) setIsEcosystemOpen(false);
              }}
              onClick={() => setIsEcosystemOpen(!isEcosystemOpen)}
              className="relative z-50 cursor-pointer"
              animate={{ 
                scale: isEcosystemOpen ? 1.05 : 1,
              }}
              whileHover={{ y: -2 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#EAE0C8] blur-[40px] md:blur-[60px] rounded-full"
              />

              <div className={cn(
                "w-32 h-32 md:w-44 md:h-44 rounded-full glass border-[#EAE0C8]/10 flex flex-col items-center justify-center transition-all duration-1000 relative z-10",
                isEcosystemOpen ? "border-[#EAE0C8]/30 shadow-[0_0_80px_rgba(234,224,200,0.1)] bg-[#EAE0C8]/[0.02]" : "hover:border-[#EAE0C8]/20"
              )}>
                <motion.div
                  animate={{ 
                    rotate: isEcosystemOpen ? 360 : 0,
                  }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className={cn(
                    "w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4 transition-all duration-700",
                    isEcosystemOpen ? "text-[#EAE0C8]" : "text-[#536878]"
                  )} />
                </motion.div>
                <span className="text-[#EAE0C8] font-headline font-bold text-[10px] md:text-xs tracking-[0.5em] md:tracking-[0.6em] uppercase">AXORA</span>
                
                <AnimatePresence>
                  {isEcosystemOpen && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 0.3, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="text-[7px] md:text-[8px] tracking-[0.3em] md:tracking-[0.4em] uppercase mt-2 md:mt-3 font-bold"
                    >
                      Core Vision
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

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
                    transition: { duration: 0.4 }
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: node.delay,
                    type: "spring",
                    stiffness: 70,
                    damping: 18
                  }}
                  onMouseEnter={() => {
                    setActiveNode(node.id);
                  }}
                  onMouseLeave={() => {
                    setActiveNode(null);
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (node.slug !== "#") router.push(node.slug);
                  }}
                  className="absolute z-40 group cursor-pointer"
                  style={{ transform: 'translate(-50%, -50%)' }}
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 8 + node.delay * 10, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className={cn(
                      "relative glass p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border-[#EAE0C8]/5 w-48 md:w-64 transition-all duration-700 ease-premium",
                      activeNode === node.id 
                        ? "border-[#EAE0C8]/20 bg-[#EAE0C8]/[0.03] -translate-y-1 md:-translate-y-2 shadow-[0_30px_60px_rgba(0,0,0,0.5)]" 
                        : "group-hover:border-[#EAE0C8]/10"
                    )}>
                      <div className="flex items-start justify-between mb-3 md:mb-5">
                        <div className={cn(
                          "w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl glass border-[#EAE0C8]/10 flex items-center justify-center transition-all duration-700",
                          activeNode === node.id ? "text-[#EAE0C8] scale-110 shadow-[0_0_20px_rgba(234,224,200,0.2)]" : "text-[#536878]"
                        )}>
                          <node.icon className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <div className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-full glass border-[#EAE0C8]/10 text-[6px] md:text-[7px] font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase text-[#EAE0C8]/40">
                          {node.status}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-[#EAE0C8] uppercase">{node.title}</p>
                        <p className="text-[7px] md:text-[8px] font-bold tracking-[0.4em] md:tracking-[0.5em] text-[#536878] uppercase">{node.subtitle}</p>
                        
                        <p className="hidden md:block text-[9px] text-[#EAE0C8]/40 tracking-widest uppercase mt-4 leading-relaxed font-light line-clamp-2">
                          {node.description}
                        </p>
                      </div>

                      <div className={cn(
                        "mt-3 md:mt-6 pt-2 md:pt-4 border-t border-[#EAE0C8]/5 flex items-center justify-between transition-all duration-500",
                        activeNode === node.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      )}>
                        <span className="text-[7px] md:text-[8px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-[#EAE0C8]/60 uppercase">Explore</span>
                        <ArrowUpRight className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#EAE0C8]/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
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