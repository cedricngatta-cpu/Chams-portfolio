"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Lightbulb, Rocket, Music, Trophy } from 'lucide-react';

const interests = [
  {
    icon: BrainCircuit,
    title: "Intelligence Artificielle",
    description: "Passionné par l'IA générative et l'automatisation intelligente.",
    color: "from-blue-500/20 to-accent/20"
  },
  {
    icon: Lightbulb,
    title: "Innovation Tech",
    description: "Veille constante sur les nouvelles technologies et frameworks.",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: Rocket,
    title: "Entrepreneuriat",
    description: "Esprit d'innovation et création de solutions à fort impact.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Trophy,
    title: "Football",
    description: "Esprit d'équipe et compétitivité, sur le terrain comme au code.",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Music,
    title: "Musique",
    description: "Source d'inspiration et de concentration pendant mes sessions.",
    color: "from-blue-500/20 to-indigo-500/20"
  }
];

export const Interests = () => {
  return (
    <section id="interests" className="relative py-24 px-4 overflow-visible">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground uppercase tracking-wider"
        >
          Centres d&apos;<span className="text-accent italic">Intérêt</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-accent/40 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 blur-xl`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
