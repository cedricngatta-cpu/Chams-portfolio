"use client";

import { useRef, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ExperienceWith } from '@/components/sections/ExperienceWith';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { Interests } from '@/components/sections/Interests';
import { SkillsDetails } from '@/components/sections/SkillsDetails';
import { Footer } from '@/components/Footer';
import { BackgroundEffect } from '@/components/BackgroundEffect';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="relative bg-background transition-colors duration-500">
      <BackgroundEffect />
      <Navbar />
      
      <div className="relative pt-20">
        <Hero />
        <ExperienceWith />
        <Projects />
        <Experience />
        <SkillsDetails />
        <Interests />
        <Contact />
      </div>
      
      <div className="relative z-[50] bg-background border-t border-border/50">
        <Footer />
      </div>
    </main>
  );
}
