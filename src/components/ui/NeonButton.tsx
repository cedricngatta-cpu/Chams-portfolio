
"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const NeonButton = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  ...props 
}: NeonButtonProps) => {
  const variants = {
    primary: "border-primary text-primary hover:bg-primary/10 shadow-[0_0_15px_rgba(125,249,255,0.2)] hover:shadow-[0_0_25px_rgba(125,249,255,0.4)]",
    secondary: "border-secondary text-secondary hover:bg-secondary/10 shadow-[0_0_15px_rgba(148,0,211,0.2)] hover:shadow-[0_0_25px_rgba(148,0,211,0.4)]",
    accent: "border-accent text-accent hover:bg-accent/10 shadow-[0_0_15px_rgba(50,205,50,0.2)] hover:shadow-[0_0_25px_rgba(50,205,50,0.4)]"
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base"
  };

  return (
    <button
      className={cn(
        "relative rounded-full border transition-all duration-300 font-medium tracking-wide uppercase overflow-hidden group",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </button>
  );
};
