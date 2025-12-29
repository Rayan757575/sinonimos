"use client";

import { useState } from 'react';

export default function BuscaSinonimos() {
  const [palavra, setPalavra] = useState('');
  const [sinonimos, setSinonimos] = useState([]);

  const buscarSinonimos = async () => {
    if (!palavra) return;

    try {
      const response = await fetch(`https://api.datamuse.com/words?rel_syn=${palavra}`);
      const data = await response.json();
      setSinonimos(data);
    } catch (error) {
      console.error("Erro ao buscar:", error);
    }
  };

  return (
    <div className="p-8 space-y-6 transition-colors duration-300">
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
          className="border border-gray-300 p-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 
                     bg-white text-black 
                     dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          placeholder="Type a word"
          value={palavra}
          onChange={(e) => setPalavra(e.target.value)}
        />
        <button
          onClick={buscarSinonimos}
          className="ml-4 bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Search
        </button>
      </div>

      {sinonimos.length > 0 && (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
            Synonyms:
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sinonimos.map((item, index) => (
              <span
                key={index}
                className="text-lg px-3 py-1 rounded-lg shadow-md transition-colors duration-300
                           /* Os chips mantêm cores específicas para contraste com seu próprio fundo */
                           text-black bg-gray-200 hover:bg-gray-300
                           dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
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