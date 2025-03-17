import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Pegando a API key do .env.local
});

export async function POST(req) {
  try {
    const { palavra, idioma } = await req.json();

    if (!palavra || !idioma) {
      return NextResponse.json({ error: "Palavra ou idioma ausente" }, { status: 400 });
    }

    // Criando o prompt para gerar sinônimos no idioma correto
    const prompt = `Me forneça apenas uma lista de sinônimos separados por vírgula para a palavra "${palavra}" no idioma "${idioma}". Não escreva mais nada além dos sinônimos.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 4000,
    });

    const resultado = response.choices[0]?.message?.content.trim();

    return NextResponse.json({ sinonimos: resultado || "Nenhum sinônimo encontrado" });
  } catch (error) {
    console.error("Erro ao conectar à OpenAI:", error);
    return NextResponse.json({ error: "Erro interno ao buscar sinônimos" }, { status: 500 });
  }
}
