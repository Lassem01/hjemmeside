"use client";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else if (saved === "light") {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      } else {
        // Default til dark mode hvis ikke valgt før
        document.documentElement.classList.add("dark");
        setIsDark(true);
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        setIsDark(false);
        localStorage.setItem("theme", "light");
      } else {
        html.classList.add("dark");
        setIsDark(true);
        localStorage.setItem("theme", "dark");
      }
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 bg-primary text-primary-foreground border-2 border-primary shadow-xl rounded-full p-3 md:p-4 text-2xl md:text-3xl transition-all duration-200 hover:scale-110 hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-4 focus:ring-primary/40"
      aria-label="Bytt mellom lys og mørk modus"
    >
      {isDark ? (
        <span role="img" aria-label="Lys modus">☀️</span>
      ) : (
        <span role="img" aria-label="Mørk modus">🌙</span>
      )}
    </button>
  );
}
