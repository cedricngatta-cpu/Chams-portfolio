"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from '@/components/ui/Magnetic';

const technologies = [
  { name: 'HTML', icon: '/projects/html.png' },
  { name: 'CSS', icon: '/projects/CSS.png' },
  { name: 'PHP', icon: '/projects/php.png' },
  { name: 'Node.js', icon: '/projects/node js.png' },
  { name: 'Python', icon: '/projects/Python.png' },
  { name: 'Supabase', icon: '/projects/Supabase.png' },
];

export const ExperienceWith = () => {
  return (
    <section className="relative py-24 flex flex-col items-center justify-center px-4 overflow-visible">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground mb-16"
        >
          Expérience Avec
        </motion.h2>
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {technologies.map((tech, index) => (
            <Magnetic key={tech.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center gap-4 cursor-pointer"
                title={tech.name}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-muted border border-border flex items-center justify-center transition-all duration-500 group-hover:bg-muted/50 group-hover:border-border p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 dark:invert-0 light:invert"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-xs font-bold text-white/50">${tech.name.substring(0, 2).toUpperCase()}</span>`;
                      }
                    }}
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground/40 group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
};
