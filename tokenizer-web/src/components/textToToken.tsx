import { useContext, useEffect, useState } from "react";
import { CurrentTokensContext } from "./currentTokens";
import { CurrentWordsContext } from "./currentWords";
import { CurrentTokenizerOptionsContext } from "./currentTokenizerOptions";


export const TextToToken = () => {
    const [text, setText] = useState("");

    const { selectedTokenizer } = useContext(
        CurrentTokenizerOptionsContext
    );
    const { tokens, setTokens } = useContext(CurrentTokensContext);
    const { words, setWords } = useContext(CurrentWordsContext);

    const handleTokenization = async () => {
        try {
          const response = await fetch("http://localhost:8000/tokenize", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ text, tokenizer: selectedTokenizer }),
          });
    
          if (response.ok) {
            const data = await response.json();
            setTokens(data.tokens ?? [""]);
            setWords(data.words)
          } else {
            console.error("Failed to tokenize text");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

    const handleTextChange = (e: any) => {
        setText(e.target.value);
    };

    useEffect(() => {
        handleTokenization()
    }, [selectedTokenizer, text])

    return (
        <div>
            <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Enter text to tokenize"
                className="block p-2.5 w-full h-full rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    )
}