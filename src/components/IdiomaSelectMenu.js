"use client";
import { useLanguage } from "../context/LanguageContext";

const languages = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" }
];

export default function IdiomaSelectMenu() {
  const { language, changeLanguage } = useLanguage();

  return (
    <select 
      value={language} 
      onChange={(e) => changeLanguage(e.target.value)} 
      className="p-2 block border rounded-lg shadow-sm w-35 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300
                 bg-white text-gray-900 border-gray-300
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