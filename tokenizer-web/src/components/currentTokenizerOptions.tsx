import { createContext, useEffect, useState } from "react";

export interface TokenizerValue {
    value: string
}

export interface TokenizerOption {
    label: string,
    options: TokenizerValue[]
}

  
export const CurrentTokenizerOptionsContext = createContext({
    tokenizers: [{label: "", options: [{value: ""},]},],
    selectedTokenizer: "",
    setSelectedTokenizer: ( tokenizer: string ) => {}
})

export const CurrentTokenizerOptionsProvider = ({ children }: { children: any }) => {
  const [tokenizers, setTokenizers] = useState([{label: "", options: [{value: ""},]},]);
    const [selectedTokenizer, setSelectedTokenizer] = useState("");

  useEffect(() => {
    const fetchTokenizers = async () => {
      try {
        const response = await fetch("http://localhost:8000/tokenizers");
        if (response) {
          const data = await response.json();
          setTokenizers(data);
          if (data.length > 0) {
            setSelectedTokenizer(data[0].options[0].value);
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
  return (
    <CurrentTokenizerOptionsContext.Provider 
        value={{tokenizers, selectedTokenizer, setSelectedTokenizer}}
    >
        {children}
    </CurrentTokenizerOptionsContext.Provider>
)}