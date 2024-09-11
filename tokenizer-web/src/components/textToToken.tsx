import { useContext, useEffect, useState } from "react";
import { currentTokens } from "./currentTokens";
import { currentWords } from "./currentWords";
import { currentSelectedTokenizer } from "./selectedTokenizer";


export const TextToToken = () => {
    const [text, setText] = useState("");

    const [selectedTokenizer, setSelectedTokenizer] = useContext(currentSelectedTokenizer)
    const [tokens, setTokens] = useContext(currentTokens);
    const [words, setWords] = useContext(currentWords);

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
        <div className="c-50">
        <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text to tokenize"
            // rows={4}
            // cols={50}
        />
        </div>
    )
}