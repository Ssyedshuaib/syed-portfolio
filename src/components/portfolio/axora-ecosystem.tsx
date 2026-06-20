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
  
  // Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 15); // Subtle parallax
    mouseY.set(y * 15);
  };

  return (
    <section 
      id="axora" 
      className="py-64 px-6 bg-[#050505] relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.015] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-5 space-y-12 relative z-50">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-white/5">
                <motion.div 
                  animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-primary" 
                />
                <p className="text-[10px] font-bold tracking-[0.6em] text-[#536878] uppercase">Axora Ecosystem</p>
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
            className="lg:col-span-7 relative aspect-square max-w-[700px] w-full mx-auto flex items-center justify-center"
          >
            {/* Background Energy Field */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(83,104,120,0.08),transparent_70%)] opacity-40" 
              />
              
              {/* Concentric Circles */}
              {[450, 550, 650].map((size, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isEcosystemOpen ? 0.04 : 0.015, 
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
                      {/* Connection Line */}
                      <motion.line
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: activeNode === node.id ? 0.6 : 0.2 }}
                        exit={{ pathLength: 0, opacity: 0 }}
                        transition={{ duration: 0.8, delay: node.delay, ease: [0.16, 1, 0.3, 1] }}
                        x1="50" y1="50"
                        x2={node.position.x}
                        y2={node.position.y}
                        stroke="#EAE0C8"
                        strokeWidth="0.1"
                      />
                      
                      {/* Traveling Ambient Particles */}
                      <motion.circle
                        animate={{ 
                          cx: [50, node.position.x],
                          cy: [50, node.position.y],
                          opacity: [0, 0.8, 0]
                        }}
                        transition={{ 
                          duration: 5 + node.delay * 3, // Slower ambient travel
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

            {/* Central AXORA Core */}
            <motion.div
              onMouseEnter={() => setIsEcosystemOpen(true)}
              onMouseLeave={() => {
                if (!activeNode) setIsEcosystemOpen(false);
              }}
              className="relative z-50 cursor-pointer"
              animate={{ 
                scale: isEcosystemOpen ? 1.05 : 1,
              }}
              whileHover={{ y: -2 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.1, 0.25, 0.1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary blur-[60px] rounded-full"
              />

              <div className={cn(
                "w-44 h-44 rounded-full glass border-white/5 flex flex-col items-center justify-center transition-all duration-1000 relative z-10",
                isEcosystemOpen ? "border-primary/40 shadow-[0_0_80px_rgba(234,224,200,0.15)] bg-primary/[0.04]" : "hover:border-primary/20"
              )}>
                <motion.div
                  animate={{ 
                    rotate: isEcosystemOpen ? 360 : 0,
                  }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className={cn(
                    "w-8 h-8 mb-4 transition-all duration-700",
                    isEcosystemOpen ? "text-white" : "text-[#536878]"
                  )} />
                </motion.div>
                <span className="text-white font-headline font-bold text-xs tracking-[0.6em] uppercase">AXORA</span>
                
                <AnimatePresence>
                  {isEcosystemOpen && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 0.4, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="text-[8px] tracking-[0.4em] uppercase mt-3 font-bold"
                    >
                      Core Vision
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Product Nodes */}
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
                  onClick={() => node.slug !== "#" && router.push(node.slug)}
                  className="absolute z-40 group cursor-pointer"
                  style={{ transform: 'translate(-50%, -50%)' }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 8 + node.delay * 10, repeat: Infinity, ease: "easeInOut" }} // Slower breathing
                  >
                    <div className={cn(
                      "relative glass p-6 rounded-[2rem] border-white/5 w-64 transition-all duration-700 ease-premium",
                      activeNode === node.id 
                        ? "border-primary/40 bg-primary/[0.06] -translate-y-2 shadow-[0_30px_60px_rgba(0,0,0,0.6)]" 
                        : "group-hover:border-white/15"
                    )}>
                      <div className="flex items-start justify-between mb-5">
                        <div className={cn(
                          "w-10 h-10 rounded-xl glass border-white/5 flex items-center justify-center transition-all duration-700",
                          activeNode === node.id ? "text-white scale-110 shadow-[0_0_20px_rgba(234,224,200,0.3)]" : "text-[#536878]"
                        )}>
                          <node.icon className="w-5 h-5" />
                        </div>
                        <div className="px-2.5 py-1 rounded-full glass border-white/5 text-[7px] font-bold tracking-[0.2em] uppercase text-primary/60">
                          {node.status}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <p className="text-[10px] font-bold tracking-[0.4em] text-white uppercase">{node.title}</p>
                        <p className="text-[8px] font-bold tracking-[0.5em] text-[#536878] uppercase">{node.subtitle}</p>
                        
                        <p className="text-[9px] text-[#EAE0C8]/50 tracking-widest uppercase mt-4 leading-relaxed font-light line-clamp-2">
                          {node.description}
                        </p>
                      </div>

                      <div className={cn(
                        "mt-6 pt-4 border-t border-white/5 flex items-center justify-between transition-all duration-500",
                        activeNode === node.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      )}>
                        <span className="text-[8px] font-bold tracking-[0.3em] text-primary uppercase">Explore Ecosystem</span>
                        <ArrowUpRight className="w-3 h-3 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
