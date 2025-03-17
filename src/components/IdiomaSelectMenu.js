"use client";
import { useIdioma } from "@/context/IdiomaContext";

const languages = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" }
];

export default function IdiomaSelectMenu() {
  const { idioma, mudarIdioma } = useIdioma();

  return (
    <select
      value={idioma}
      onChange={(e) => mudarIdioma(e.target.value)}
      className="p-2 block border rounded-lg shadow-sm w-35"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code} className="text-black bg-gray-100">
          {lang.label}
        </option>
      ))}
    </select>
  );
}
