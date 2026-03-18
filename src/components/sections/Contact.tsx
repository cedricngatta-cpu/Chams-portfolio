"use client";

import React from 'react';
import { Mail, Linkedin, ExternalLink, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

import Magnetic from '@/components/ui/Magnetic';

const socialLinks = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+225 05 56 46 81 26',
    href: 'tel:+2250556468126',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'anohngatta25@gmail.com',
    href: 'mailto:anohngatta25@gmail.com',
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-4 overflow-visible">
      <div className="max-w-4xl mx-auto text-center w-full">
        <Magnetic>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="mb-4 flex items-center justify-center gap-2 text-muted-foreground cursor-default"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest">Bonoua, Côte d&apos;Ivoire</span>
          </motion.div>
        </Magnetic>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-8 text-foreground uppercase tracking-tight"
        >
          Travaillons <span className="text-accent italic">Ensemble</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-20 leading-relaxed"
        >
          Je suis toujours ouvert aux nouvelles opportunités et collaborations passionnantes. 
          N&apos;hésitez pas à me contacter directement.
        </motion.p>

        <div className="flex flex-col items-center gap-12">
           {socialLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-2">
                {link.label}
              </span>
              <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground block">
                {link.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

