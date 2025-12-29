# Synonymous Finder - Aplicação Web de Sinônimos

## 📌 Sobre o Projeto

Esta é uma aplicação web moderna que permite aos usuários buscar sinônimos de palavras em **Inglês, Português, Espanhol e Francês**.

O projeto foi refatorado para utilizar uma **arquitetura de "Estratégia Híbrida" (Bridge Pattern)**: dependendo do idioma selecionado, o sistema decide inteligentemente se consulta uma API nativa ou se utiliza uma estratégia de tradução e busca cruzada (para garantir resultados ricos mesmo em idiomas com menos suporte de APIs públicas).

A interface foi desenvolvida com **Next.js**, estilizada com **Tailwind CSS** e conta com persistência de preferências de usuário (tema e idioma).

## 🚀 Tecnologias e Conceitos

* **Next.js 13+** (App Router & React Hooks)
* **JavaScript** (ES6+)
* **Tailwind CSS** (Estilização e Dark Mode nativo via classe)
* **Context API** (Gerenciamento de estado global para Idioma e Tema)
* **Heroicons** (Ícones da interface)
* **Strategy Pattern** (Lógica de seleção de APIs de sinônimos)

## 🎯 Funcionalidades

* 🔎 **Busca Multi-idioma:** Suporte para Inglês, Português, Espanhol e Francês.
* 🧠 **Smart Fallback (Ponte):** Se a API nativa falhar ou não existir, o sistema traduz a palavra para inglês, busca na base robusta do Datamuse e traduz os resultados de volta.
* 🌙 **Dark Mode Real:** Persistência de tema (localStorage) e detecção de preferência do sistema.
* ⚡ **UX Refinada:**
    * **Page Loader** para evitar "pulos" visuais na tradução.
    * **Animações** de "Fade In" e cascata nos resultados.
    * **Título dinâmico** na aba do navegador.
* 🌎 **Interface Traduzida:** Integração via cookie com Google Translate para traduzir textos fixos.
* 📱 **Responsividade:** Layout adaptável para mobile e desktop.
## 🛠 Como Rodar o Projeto

### 1️⃣ Clonar o Repositório

`git clone https://github.com/Rayan757575/sinonimos`

### 2️⃣ Instalar Dependências

`cd sinonimos`

`npm install`

### 3️⃣ Rodar o Servidor de Desenvolvimento

`npm run dev`

O projeto estará disponível em http://localhost:3000.

## 🔗 API Utilizada

O sistema utiliza um mix de serviços para garantir a melhor resposta:

[Datamuse API](https://www.datamuse.com/api): Principal fonte para inglês e base da estratégia "Ponte".

Dicio API (Unofficial): Fonte nativa para Português.

Google Translate (GTX): Utilizado internamente para traduções de interface e suporte à estratégia de busca cruzada.

## 🏗 Contribuição

Contribuições são bem-vindas! Para contribuir:

Fork o repositório 🍴

Crie uma branch (git checkout -b minha-feature)

Faça commit das mudanças (git commit -m 'Adiciona nova funcionalidade')

Envie um push para a branch (git push origin minha-feature)

Abra um Pull Request 🚀

## 📄 Licença

Desenvolvido por Rayan Cata Preta 🚀

