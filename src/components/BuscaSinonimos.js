"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { fetchNativeSynonyms } from '../services/synonymService';

export default function BuscaSinonimos() {
  const { language } = useLanguage();
  const [palavra, setPalavra] = useState('');
  const [sinonimos, setSinonimos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Controla se a busca já foi realizada
  const [hasSearched, setHasSearched] = useState(false);

  const buscarSinonimos = async () => {
    if (!palavra) return;

    setLoading(true);
    setHasSearched(false);
    setSinonimos([]);

    const resultados = await fetchNativeSynonyms(palavra, language);

    setSinonimos(resultados);
    setLoading(false);
    setHasSearched(true);
  };

  // Função para lidar com a digitação
  const handleInputChange = (e) => {
    setPalavra(e.target.value);
    setHasSearched(false);
  };

  // Toda vez que os sinônimos mudarem, atualiza o título da aba
  useEffect(() => {
    if (palavra && sinonimos.length > 0) {
      document.title = `${palavra} - Synonyms`;
    } else {
      document.title = "Synonyms Finder"; // Título padrão
    }
  }, [sinonimos, palavra]);

  return (
    <div className="flex flex-col items-center pt-16 pb-10 min-h-[60vh] space-y-8 transition-colors duration-300">
      <div className="w-full max-w-xl space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[var(--foreground)]">
            Synonymous finder
          </h1>
          <p className="text-[var(--foreground)] opacity-80">
            Type a word to find synonymous ({language.toUpperCase()})
          </p>
        </div>

        <div className="flex justify-center">
          <input
            type="text"
            className="w-full max-w-xs border border-gray-300 p-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 
                       bg-white text-black 
                       dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            placeholder={language === 'pt' ? "Digite uma palavra" : "Type a word"}
            value={palavra}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === 'Enter' && buscarSinonimos()}
          />
          <button
            onClick={buscarSinonimos}
            disabled={loading}
            className="ml-4 bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? "..." : "Search"}
          </button>
        </div>
      </div>

      {sinonimos.length > 0 ? (
        <div className="text-center w-full max-w-4xl px-4">
          <h2 className="text-xl font-semibold mb-4 text-[var(--foreground)] animate-fade-in-up">
            Synonyms:
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sinonimos.map((item, index) => (
              <span
                key={index}
                className="animate-fade-in-up text-lg px-3 py-1 rounded-lg shadow-md transition-colors duration-300
                           text-black bg-gray-200 hover:bg-gray-300
                           dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0
                }}
              >
                {item.word}
              </span>
            ))}
          </div>
        </div>
      ) : (
        !loading && hasSearched && (
          <p className="text-gray-500 mt-4">
            No synonyms found for "{palavra}" in {language}.
          </p>
        )
      )}
    </div>
  );
}