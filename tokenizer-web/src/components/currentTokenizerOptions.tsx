import { createContext, useEffect, useState } from "react";


export interface TokenizerOption {
    label: string,
    options: string[]
  }
  
export const currentTokenizerOptions = createContext([])

export const CurrentTokenizerOptionsProvider = ({ children }: { children: any }) => {
  const [tokenizers, setTokenizers] = useState([]);
//   const [selectedTokenizer, setSelectedTokenizer] = useState("");

  useEffect(() => {
    const fetchTokenizers = async () => {
      try {
        const response = await fetch("http://localhost:8000/tokenizers");
        if (response) {
          const data = await response.json();
        //   console.log("data", data)
          setTokenizers(data);
          if (data.length > 0) {
            // setSelectedTokenizer(data[0].options[0]);
          }
        } else {
          console.error("Failed to fetch tokenizers");
        }
      } catch (error) {
        console.error("Error fetching tokenizers:", error);
      }
    };

    fetchTokenizers();
  }, []);
  console.log("provider result", tokenizers)
  return <currentTokenizerOptions.Provider value={tokenizers}>{children}</currentTokenizerOptions.Provider>
}