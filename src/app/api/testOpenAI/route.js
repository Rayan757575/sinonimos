import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { word } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Você é um assistente que retorna sinônimos da palavra fornecida.",
        },
        { role: "user", content: `Me dê sinônimos para: ${word}` },
      ],
    });

    const sinonimos = response.choices[0].message.content;

    return NextResponse.json({ sinonimos });
  } catch (error) {
    console.error("Erro na API OpenAI:", error);
    return NextResponse.json(
      { error: "Erro ao conectar com a OpenAI" },
      { status: 500 }
    );
  }
}
