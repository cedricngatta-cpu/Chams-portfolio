"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="relative">
        {/* Glow effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"
        />
        
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-24 h-24 md:w-32 md:h-32"
        >
          <Image
            src="/logo-code.png"
            alt="Loading..."
            fill
            className="object-contain"
          />
        </motion.div>
        
        {/* Progress line */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/10 overflow-hidden">
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-accent"
          />
        </div>
      </div>
    </div>
  );
}
