import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50 text-center">
      <p className="text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} BlackTech — Dev AI
      </p>
    </footer>
  );
};
