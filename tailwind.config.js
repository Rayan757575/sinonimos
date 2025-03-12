/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector", // Habilita o modo escuro baseado em classes
  content: [
    "./app/**/*.{js,jsx}", 
    "./components/**/*.{js,jsx}", 
    "./pages/**/*.{js,jsx}"
  ], // Ajuste os caminhos conforme sua estrutura de pastas
  theme: {
    extend: {},
  },
  plugins: [],
};
