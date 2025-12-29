"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");

    // Se tiver salvo, usa. Se não, verifica preferência do sistema, ou usa light
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }

  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Adiciona ou remove a classe 'dark' do elemento <html>
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Evita renderizar o ícone errado antes do JS carregar
  if (!mounted) {
    return <div className="w-10 h-10" />; 
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 
                 bg-gray-200 text-gray-800 hover:bg-gray-300
                 dark:bg-gray-700 dark:text-yellow-400 dark:hover:bg-gray-600"
      aria-label="Alternar tema"
    >
      {theme === "dark" ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  );
}