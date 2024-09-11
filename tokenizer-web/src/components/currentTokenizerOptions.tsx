import { createContext, useEffect, useState } from "react";


export interface TokenizerOption {
    label: string,
    options: string[]
  }
  
// export const CurrentTokenizerOptionsContext = createContext({
//     tokenizers: [{label: "", options: [""]}],
//     setTokenizers: (tokenizers: TokenizerOption[]) => {},
// })
  
export const CurrentTokenizerOptionsContext = createContext({
    tokenizers: [{label: "", options: [""]}],
    selectedTokenizer: "",
    setSelectedTokenizer: ( tokenizer: string ) => {}
})

export const CurrentTokenizerOptionsProvider = ({ children }: { children: any }) => {
  const [tokenizers, setTokenizers] = useState([{label: "", options: [""]}]);
    const [selectedTokenizer, setSelectedTokenizer] = useState("");

  useEffect(() => {
    const fetchTokenizers = async () => {
      try {
        const response = await fetch("http://localhost:8000/tokenizers");
        if (response) {
          const data = await response.json();
        //   console.log("data", data)
          setTokenizers(data);
          if (data.length > 0) {
            setSelectedTokenizer(data[0].options[0]);
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
  console.log("tokenizers ->", tokenizers)
  return (
    <CurrentTokenizerOptionsContext.Provider 
        // value={{tokenizers, setTokenizers}}
        value={{tokenizers, selectedTokenizer, setSelectedTokenizer}}
    >
        {children}
    </CurrentTokenizerOptionsContext.Provider>
)}