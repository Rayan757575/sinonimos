"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("appLanguage");
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  const changeLanguage = (lang) => {

    setIsChangingLanguage(true);

    setLanguage(lang);
    localStorage.setItem("appLanguage", lang);

    // Configura o cookie do Google Translate
    if (lang === 'en') {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${document.domain}; path=/;`;
    } else {
      document.cookie = `googtrans=/en/${lang}; path=/`;
    }

    // 2. Pequeno timeout para garantir que a animação de loading apareça antes do reload
    setTimeout(() => {
      window.location.reload();
    }, 100); 
  };

  return (
    // Exportamos o isChangingLanguage para ser usado pelo Loader
    <LanguageContext.Provider value={{ language, changeLanguage, isChangingLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}