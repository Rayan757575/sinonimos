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
    <select value={selectedLanguage} onChange={handleLanguageChange} className="p-2 border rounded">
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code} className="text-black bg-gray-200">
          {lang.label}
        </option>
      ))}
    </select>
  );
}
