"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Briefcase, MousePointer2 } from 'lucide-react';

const professionalSkills = [
  "Résolution de problèmes",
  "Travail en équipe",
  "Esprit d'innovation",
  "Analyse logique",
  "Adaptabilité technologique",
  "Communication technique"
];

const digitalTools = [ "Microsoft Word", "PowerPoint", "Canva" ];

const languages = [
  { name: "Français", level: "Lu et parlé correctement" },
  { name: "Anglais", level: "Lu et parlé moyennement" }
];

export const SkillsDetails = () => {
  return (
    <section id="skills-details" className="relative py-24 px-4 overflow-visible">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Compétences Professionnelles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-card border border-border/50 shadow-xl shadow-black/5"
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-accent w-6 h-6" />
              <h2 className="text-2xl font-bold text-foreground uppercase tracking-tight">Compétences Professionnelles</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {professionalSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-12">
            {/* Langues */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05]"
            >
              <div className="flex items-center gap-3 mb-8">
                <Languages className="text-accent w-6 h-6" />
                <h2 className="text-2xl font-bold text-foreground uppercase tracking-tight">Langues</h2>
              </div>
              <div className="space-y-6">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-foreground">{lang.name}</span>
                      <span className="text-xs text-muted-foreground/60 italic">{lang.level}</span>
                    </div>
                    <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: lang.name === 'Français' ? '90%' : '50%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Outils Numériques */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05]"
            >
              <div className="flex items-center gap-3 mb-8">
                <MousePointer2 className="text-accent w-6 h-6" />
                <h2 className="text-2xl font-bold text-foreground uppercase tracking-tight">Outils Numériques</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {digitalTools.map((tool) => (
                  <span key={tool} className="px-4 py-2 rounded-xl bg-muted border border-border text-sm text-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all cursor-default shadow-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
