"use client";

import { useState } from 'react';

export default function BuscaSinonimos() {
  const [palavra, setPalavra] = useState('');
  const [sinonimos, setSinonimos] = useState([]);

  const buscarSinonimos = async () => {
    if (!palavra) return;

    const response = await fetch(`https://api.datamuse.com/words?rel_syn=${palavra}`);
    const data = await response.json();

    setSinonimos(data);
  };

  return (
    <div className="p-8 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Synonymous finder</h1>
        <p className="text-gray-600">Type a word to find synonymous</p>
      </div>

      <div className="flex justify-center">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-lg shadow-md"
          placeholder="Type a word"
          value={palavra}
          onChange={(e) => setPalavra(e.target.value)}
        />
        <button
          onClick={buscarSinonimos}
          className="ml-4 bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {sinonimos.length > 0 && (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Sinônimos:</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sinonimos.map((item, index) => (
              <span
                key={index}
                className="text-lg text-black bg-gray-200 hover:bg-gray-100 shadow-md px-3 py-1 rounded-lg "
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
