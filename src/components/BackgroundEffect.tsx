"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffect = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background transition-colors duration-500">
      {/* Grid Pattern with Fade */}
      <div className="absolute inset-0 grid-bg opacity-[0.15]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Ambient Glows */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px]" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-orange-500/5 blur-[120px]" 
      />
      
      {/* Dynamic particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: Math.random() * 0.5,
              scale: Math.random() * 0.5 + 0.5,
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%'
            }}
            animate={{ 
              y: ['-10%', '110%'],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-[1px] h-[1px] bg-white rounded-full shadow-[0_0_10px_1px_rgba(255,255,255,0.3)]"
          />
        ))}
      </div>
    </div>
  );
};
