
"use client";

import React from 'react';
import {
  Zap,
  Database,
  Layers,
  Cpu,
  Workflow,
  BrainCircuit,
  Code2,
  Globe,
  Server,
  GitBranch,
  Palette,
  Users,
  Lightbulb,
  MessageSquare
} from 'lucide-react';

const technicalSkills = [
  { name: 'HTML / CSS / JavaScript', icon: Globe, color: 'text-primary' },
  { name: 'React / Next.js', icon: Code2, color: 'text-secondary' },
  { name: 'PHP / Node.js', icon: Server, color: 'text-accent' },
  { name: 'MySQL / Supabase', icon: Database, color: 'text-primary' },
  { name: 'Intégration d\'API', icon: Zap, color: 'text-secondary' },
  { name: 'Git & GitHub', icon: GitBranch, color: 'text-accent' },
  { name: 'UI / UX Design', icon: Palette, color: 'text-primary' },
  { name: 'Intelligence Artificielle & APIs IA', icon: BrainCircuit, color: 'text-secondary' },
];

const professionalSkills = [
  { name: 'Résolution de problèmes', icon: Lightbulb },
  { name: 'Travail en équipe', icon: Users },
  { name: 'Esprit d\'innovation', icon: Cpu },
  { name: 'Analyse logique', icon: Workflow },
  { name: 'Adaptabilité technologique', icon: Zap },
  { name: 'Communication technique', icon: MessageSquare },
];

const tools = [
  { name: 'React', logo: Code2 },
  { name: 'Next.js', logo: Globe },
  { name: 'Node.js', logo: Server },
  { name: 'Supabase', logo: Database },
  { name: 'Claude AI', logo: BrainCircuit },
  { name: 'Canva', logo: Palette },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-code text-secondary uppercase tracking-[0.3em] mb-4">Compétences</h2>
          <h3 className="text-4xl font-bold text-foreground">Mon Arsenal Technique</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Technical Skills */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              Compétences Techniques
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="glass glass-interactive p-3 rounded-xl flex items-center gap-3 border border-border/50">
                  <skill.icon className={skill.color} size={20} />
                  <span className="font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              Compétences Pro
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {professionalSkills.map((skill) => (
                <div key={skill.name} className="glass glass-interactive p-3 rounded-xl flex items-center gap-3 border-white/5">
                  <skill.icon className="text-accent" size={20} />
                  <span className="font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Workflow className="w-5 h-5 text-secondary" />
              </div>
              Outils & Technologies
            </h4>
            <div className="grid grid-cols-2 gap-6">
              {tools.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center gap-3 group">
                  <div className="w-16 h-16 rounded-2xl glass glass-interactive flex items-center justify-center border border-border/50 group-hover:scale-110 transition-transform">
                    <tool.logo className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
