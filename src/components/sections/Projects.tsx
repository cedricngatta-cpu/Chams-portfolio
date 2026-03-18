"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: '1',
    title: 'SOUTRALIPHARMA',
    subtitle: 'Pharmacies de garde & livraison',
    image: '/projects/soutralipharma.png',
    hint: 'pharmacy medical',
    description: 'Application web de visualisation des pharmacies de garde et livraison de médicaments. Consultation, localisation, médicaments disponibles et système de commande.',
    tools: ['React', 'Node.js', 'Supabase'],
    link: 'https://soutralipharma.vercel.app',
  },
  {
    id: '2',
    title: 'KENEYA',
    subtitle: 'Alerte épidémiologique — 1er Prix Hackathon',
    image: '/projects/keneya.png',
    hint: 'health alert',
    description: "Application d'alerte épidémiologique développée lors du Hackathon JETIC 2026 (ESATIC). Signalement de cas suspects, alertes rapides, centralisation des informations sanitaires.",
    tools: ['Next.js', 'Supabase', 'API IA'],
    link: 'https://keneya-lovat.vercel.app',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4 overflow-visible">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-accent uppercase tracking-wider"
        >
          Projets & Réalisations
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-black/5"
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  data-ai-hint={project.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>

              {/* Footer de la carte */}
              <div className="px-6 py-5 flex items-center justify-between bg-black/40 backdrop-blur-md">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">
                    Projet Sélectionné
                  </p>
                  <h3 className="text-base font-bold text-foreground uppercase tracking-wide">
                    {project.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

