"use client";

import React from 'react';
import { Award, Briefcase, GraduationCap, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    icon: Award,
    title: 'Lauréat Hackathon JETIC 2026',
    company: 'ESATIC',
    period: 'Jan 2026',
    description:
      "Premier Prix (Niveau 1 Développement) au Hackathon JETIC 2026 organisé par l'ESATIC pour le développement de KENEYA, une application d'alerte épidémiologique. Solution visant à améliorer la surveillance sanitaire et la prévention des épidémies.",
  },
  {
    icon: GraduationCap,
    title: 'BTS en IDA (Informatique Développeur d\'Application)',
    company: 'Diplôme d\'État',
    period: '2023',
    description:
      "Brevet de Technicien Supérieur en Informatique, spécialisation Informatique Développeur d'Application (IDA). Formation complète en développement front-end, back-end, bases de données et gestion de projets informatiques.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-4 overflow-visible">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-20 text-accent uppercase tracking-wider"
        >
          Expérience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Ligne de connexion */}
              {index < experiences.length - 1 && (
                <div className="absolute left-5 top-14 w-px h-[calc(100%+1rem)] bg-border" />
              )}
              
              <div className="flex gap-8">
                {/* Icône */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center z-10 group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-lg shadow-accent/10">
                  <exp.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground transition-colors duration-300" />
                </div>

                {/* Contenu */}
                <div className="flex-1 pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground tracking-wide uppercase">{exp.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground font-bold bg-muted px-3 py-1 rounded-full border border-border whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

