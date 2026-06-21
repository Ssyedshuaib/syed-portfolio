"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface LaptopMockupProps {
  imageId: string;
}

export function LaptopMockup({ imageId }: LaptopMockupProps) {
  const image = PlaceHolderImages.find((img) => img.id === imageId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 group w-full max-w-4xl mx-auto"
    >
      {/* Ambient Lighting Behind Device */}
      <div className="absolute -inset-40 bg-primary/5 blur-[150px] rounded-full opacity-40 pointer-events-none group-hover:bg-primary/10 transition-colors duration-1000" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="relative pt-[56.25%] w-full"
      >
        {/* MacBook Pro Structure */}
        <div className="absolute inset-0 flex flex-col items-center">
          {/* Lid/Screen Area */}
          <div className="relative w-full h-[92%] bg-[#1A1A1A] rounded-t-[1.5rem] p-[1.2%] border-[1px] border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black rounded-t-[1.1rem] overflow-hidden border-[6px] border-[#0A0A0A]">
              <div className="relative w-full h-full bg-[#0F1317]">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-[4000ms] group-hover:scale-105"
                    priority
                    data-ai-hint={image.imageHint}
                  />
                )}
                {/* Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-20" />
              </div>
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[18%] h-[3%] bg-[#0A0A0A] rounded-b-lg z-30" />
            </div>
          </div>
          
          {/* Body/Base Area */}
          <div className="relative w-[100.5%] h-[8%] bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] rounded-b-[0.5rem] border-t border-white/5 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[15%] bg-black/40 rounded-b-md" />
          </div>
        </div>
      </motion.div>

      {/* Ground Shadow */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/60 blur-[40px] rounded-full -z-10" />
    </motion.div>
  );
}