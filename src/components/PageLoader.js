"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function PageLoader() {
  const { isChangingLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Verifica se existe cookie de tradução ativo
    const hasTranslationCookie = document.cookie.includes("googtrans=/en/");

    // Se NÃO tem tradução (está em inglês) e NÃO está mudando de idioma,
    // remove o loader rápido.
    if (!hasTranslationCookie && !isChangingLanguage) {
      setIsVisible(false);
      return;
    }

    // Se TEM tradução, seguramos o loader um pouco para esconder o "pulo" do inglês pro PT.
    // 800ms geralmente é suficiente para o script do Google rodar.
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800); 

    return () => clearTimeout(timer);
  }, [isChangingLanguage]);

  if (!isVisible && !isChangingLanguage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)] transition-opacity duration-500">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[var(--foreground)] animate-pulse font-medium">
          {isChangingLanguage ? "Changing language..." : "Loading..."}
        </p>
      </div>
    </div>
  );
}