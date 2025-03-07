export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const palavra = searchParams.get("palavra");
  
    if (!palavra) {
      return new Response(JSON.stringify({ error: "Palavra não fornecida" }), { status: 400 });
    }
  
    try {
      const response = await fetch(`https://api.datamuse.com/words?rel_syn=${palavra}`);
      const data = await response.json();
  
      if (data.length === 0) {
        return new Response(JSON.stringify({ error: "Nenhum sinônimo encontrado" }), { status: 404 });
      }
  
      // Extrair sinônimos do resultado
      const sinonimos = data.map(item => item.word);
  
      return new Response(JSON.stringify(sinonimos), { status: 200 });
    } catch (error) {
      console.error("❌ Erro ao buscar sinônimos:", error);
      return new Response(JSON.stringify({ error: "Erro no servidor" }), { status: 500 });
    }
  }
  