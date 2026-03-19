import React from 'react';
import Image from 'next/image';
import { User, Cpu, Rocket, Award, GraduationCap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden glass border border-border/50 flex items-center justify-center bg-muted/20">
              <Image 
                src="/photo.png" 
                alt="N'GATTA Cédric"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition duration-500"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl border border-border/50 z-10">
                <p className="text-xs font-code text-primary mb-1 tracking-widest uppercase">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <p className="text-sm font-medium">Ouvert aux opportunités</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h2 className="text-sm font-code text-primary uppercase tracking-[0.3em] mb-4">À propos</h2>
              <h3 className="text-4xl font-bold mb-6 text-foreground">N'GATTA Anoh Marc-Antoine Cédric</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dev AI passionné par les technologies numériques et l'intelligence artificielle,
                titulaire d'un BTS en IDA (Informatique Développeur d'Application). 
                Mon parcours inclut des projets académiques innovants,
                un stage en administration publique et une participation à des projets entrepreneuriaux.
                Lauréat du premier prix au Hackathon JETIC 2026 (ESATIC) pour le développement de KENEYA,
                une application d'alerte épidémiologique.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 glass rounded-2xl border border-border/50 space-y-3">
                <GraduationCap className="w-8 h-8 text-secondary" />
                <h4 className="font-bold text-lg">Formation</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  BTS en IDA (Informatique Développeur d'Application).
                </p>
              </div>
              <div className="p-6 glass rounded-2xl border border-border/50 space-y-3">
                <Award className="w-8 h-8 text-accent" />
                <h4 className="font-bold text-lg">Distinction</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Premier Prix au Hackathon JETIC 2026 organisé par ESATIC pour le développement d'une application de santé publique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
