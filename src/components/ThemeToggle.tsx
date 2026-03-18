"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun className={`absolute inset-0 transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0`} />
        <Moon className={`absolute inset-0 transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100`} />
      </div>
    </motion.button>
  );
}
