"use client";
import { useState } from "react";
import { useIdioma } from "@/context/IdiomaContext";

export default function BuscaSinonimos() {
  const [palavra, setPalavra] = useState("");
  const [sinonimos, setSinonimos] = useState([]);
  const { idioma } = useIdioma(); // Obtém o idioma selecionado

  const buscarSinonimos = async () => {
    if (!palavra) return;

    try {
      const response = await fetch("/api/testOpenAI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ palavra, idioma }),
      });

      const data = await response.json();

      if (response.ok) {
        setSinonimos(data.sinonimos.split(", ")); // Transforma a string em array
      } else {
        console.error("Erro ao buscar sinônimos:", data.error);
      }
    } catch (error) {
      console.error("Erro na conexão:", error);
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Synonymous finder</h1>
        <p className="text-gray-400">Type a word to find synonymous</p>
      </div>

      <div className="flex justify-center">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-lg shadow-md placeholder-gray-500"
          placeholder="Type a word"
          value={palavra}
          onChange={(e) => setPalavra(e.target.value)}
        />
        <button
          onClick={buscarSinonimos}
          className="ml-4 bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition-color duration-300"
        >
          Search
        </button>
      </div>

      {sinonimos.length > 0 && (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Synonyms:</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sinonimos.map((item, index) => (
              <span
                key={index}
                className="text-lg text-black bg-gray-200 hover:bg-gray-100 transition-color duration-500 shadow-md px-3 py-1 rounded-lg"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
