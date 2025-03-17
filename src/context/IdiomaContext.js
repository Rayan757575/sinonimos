"use client";
import { createContext, useContext, useState, useEffect } from "react";

const IdiomaContext = createContext();

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState("en"); // Idioma padrão: inglês

  useEffect(() => {
    const idiomaSalvo = localStorage.getItem("idioma");
    if (idiomaSalvo) setIdioma(idiomaSalvo);
  }, []);

  const mudarIdioma = (novoIdioma) => {
    setIdioma(novoIdioma);
    localStorage.setItem("idioma", novoIdioma);

    // Aciona a tradução automática do Google Translate
    const googleTranslate = document.querySelector(".goog-te-combo");
    if (googleTranslate) {
      googleTranslate.value = novoIdioma;
      googleTranslate.dispatchEvent(new Event("change"));
    }
  };

  return (
    <IdiomaContext.Provider value={{ idioma, mudarIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
}

export function useIdioma() {
  return useContext(IdiomaContext);
}
