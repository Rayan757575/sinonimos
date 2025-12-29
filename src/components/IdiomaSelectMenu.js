"use client";
import { useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" }
];

export default function IdiomaSelectMenu() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setSelectedLanguage(newLang);

    const googleTranslate = document.querySelector(".goog-te-combo");
    if (googleTranslate) {
      googleTranslate.value = newLang;
      googleTranslate.dispatchEvent(new Event("change"));
    }
  };

  return (
    <select 
      value={selectedLanguage} 
      onChange={handleLanguageChange} 
      className="p-2 block border rounded-lg shadow-sm w-35 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300
                 /* Modo Claro: Fundo branco, Texto escuro, Borda cinza */
                 bg-white text-gray-900 border-gray-300
                 /* Modo Escuro: Fundo cinza escuro, Texto branco, Borda cinza escuro */
                 dark:bg-gray-800 dark:text-white dark:border-gray-600"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code} className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
          {lang.label}
        </option>
      ))}
    </select>
  );
}