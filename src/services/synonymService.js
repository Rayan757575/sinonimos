// Função auxiliar para traduzir usando a API "free" do Google (endpoint gtx)
const translateText = async (text, sourceLang, targetLang) => {
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        const res = await fetch(url);
        const data = await res.json();
        return data[0][0][0];
    } catch (error) {
        return text; 
    }
};

// Remove duplicatas 
const removeDuplicates = (list) => {
    const seen = new Set();
    return list.filter(item => {
        if (!item?.word) return false;
        const lower = item.word.toLowerCase();
        if (seen.has(lower)) return false;
        seen.add(lower);
        return true;
    });
};

export const fetchNativeSynonyms = async (word, lang) => {
    // ESTRATÉGIA PONTE
    const fetchViaBridge = async () => {
        try {
            // 1. Traduzir a palavra original para Inglês
            const wordInEn = await translateText(word, lang, "en");

            // 2. Busca sinônimos robustos em Inglês
            const res = await fetch(`https://api.datamuse.com/words?rel_syn=${wordInEn}`);
            const data = await res.json();

            // 3. Pega os top 15
            const topResults = data.slice(0, 15);

            // 4. Traduz de volta para o idioma do usuário
            const translatedResults = await Promise.all(
                topResults.map(async (item) => {
                    const translatedWord = await translateText(item.word, "en", lang);
                    return { word: translatedWord };
                })
            );

            return removeDuplicates(translatedResults);
        } catch (error) {
            console.error("Erro na estratégia Ponte:", error);
            return [];
        }
    };

    switch (lang) {
        case "en":
            try {
                const res = await fetch(`https://api.datamuse.com/words?rel_syn=${word}`);
                const data = await res.json();
                return removeDuplicates(data);
            } catch (e) { return []; }

        case "pt":
            try {
                const res = await fetch(`https://dicio-api-ten.vercel.app/v2/sinonimos/${word}`);
                if (!res.ok) throw new Error("API PT falhou");
                
                const data = await res.json();
                let formatted = [];
                
                if (Array.isArray(data)) {
                    formatted = data.map(item => ({ 
                        word: typeof item === 'string' ? item : item.word 
                    }));
                } else if (data.sinonimos) {
                    formatted = data.sinonimos.map(s => ({ word: s }));
                }
                
                if (formatted.length === 0) throw new Error("Vazio");
                return removeDuplicates(formatted);

            } catch (error) {
                // Silenciosamente cai para o fallback
                return fetchViaBridge();
            }

        case "fr":
        case "es":
        default:
            return fetchViaBridge();
    }
};