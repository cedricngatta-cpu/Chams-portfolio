import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Magnetic from '@/components/ui/Magnetic';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-3xl mx-auto text-center z-10">
        {/* Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-36 h-36 md:w-44 md:h-44 mb-8 group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent via-orange-500 to-accent rounded-full blur-sm opacity-60" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border/50">
            <Image
              src="/avatar.png"
              alt="N'GATTA Cédric"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
        >
          <span className="text-foreground">Je code et je crée</span>
          <br />
          <span className="text-foreground">du contenu </span>
          <span className="text-accent italic">à ce sujet !</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Dev AI passionné par les technologies numériques et l&apos;intelligence
          artificielle, titulaire d&apos;un BTS en IDA (Informatique Développeur d&apos;Application). 
          Motivé par la conception de solutions numériques innovantes à fort impact social.
          Lauréat du premier prix au Hackathon JETIC 2026.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
               className="px-8 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:bg-foreground/10 transition-all duration-300 block"
            >
              Me Contacter
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="/cv.pdf"
              target="_blank"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300 block"
            >
              Télécharger CV
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};

