"use client";

import { useState } from 'react';

export default function BuscaSinonimos() {
  const [palavra, setPalavra] = useState('');
  const [sinonimos, setSinonimos] = useState([]);

  const buscarSinonimos = async () => {
    if (!palavra) return;

    // Opcional: Limpar resultados anteriores para re-animar a nova busca
    setSinonimos([]);

    try {
      const response = await fetch(`https://api.datamuse.com/words?rel_syn=${palavra}`);
      const data = await response.json();
      setSinonimos(data);
    } catch (error) {
      console.error("Erro ao buscar:", error);
    }
  };

  return (
    // MUDANÇA 1: Estrutura de layout para evitar o "pulo"
    // min-h-[60vh] ou min-h-screen: Garante que o container tenha altura suficiente
    // flex-col e pt-10 (ou mais): Define uma distância fixa do topo em vez de centralizar verticalmente
    <div className="flex flex-col items-center pt-16 pb-10 min-h-[60vh] space-y-8 transition-colors duration-300">

      {/* Container fixo da busca */}
      <div className="w-full max-w-xl space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[var(--foreground)]">
            Synonymous finder
          </h1>
          <p className="text-[var(--foreground)] opacity-80">
            Type a word to find synonymous
          </p>
        </div>

        <div className="flex justify-center">
          <input
            type="text"
            className="w-full max-w-xs border border-gray-300 p-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 
                       bg-white text-black 
                       dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            placeholder="Type a word"
            value={palavra}
            onChange={(e) => setPalavra(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && buscarSinonimos()}
          />
          <button
            onClick={buscarSinonimos}
            className="ml-4 bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Search
          </button>
        </div>
      </div>

      {/* Área dos resultados */}
      {sinonimos.length > 0 && (
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
      )}
    </div>
  );
}