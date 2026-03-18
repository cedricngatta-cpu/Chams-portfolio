"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'Projets', href: '#projects' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

import Magnetic from '@/components/ui/Magnetic';
import { ThemeToggle } from '@/components/ThemeToggle';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div 
        className={`flex items-center justify-between w-full max-w-5xl pointer-events-auto transition-all duration-700 px-6 py-3 rounded-full border ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-2xl border-border shadow-2xl' 
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Logo */}
        <Magnetic>
          <a 
            href="#home" 
            onClick={(e) => handleClick(e, '#home')}
            className="font-signature text-2xl text-foreground hover:text-accent transition-colors block px-2"
          >
            BlackTech
          </a>
        </Magnetic>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Magnetic key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-foreground/5"
              >
                {link.label}
              </a>
            </Magnetic>
          ))}
          <ThemeToggle />
          <Magnetic>
            <a
              href="mailto:ngattaanohcedric@gmail.com"
              className="ml-4 px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-bold bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all duration-300 block"
            >
              Parlons-en
            </a>
          </Magnetic>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 md:hidden bg-background/95 backdrop-blur-2xl rounded-3xl border border-border p-8 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-2xl font-bold text-foreground/70 hover:text-accent transition-colors text-center"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-border my-2" />
              <a
                href="mailto:anohngatta25@gmail.com"
                className="w-full py-4 text-center rounded-2xl bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm"
              >
                Parlons-en
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

