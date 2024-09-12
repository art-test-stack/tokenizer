import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { CurrentTokenizerOptionsContext } from "./currentTokenizerOptions";


export const CurrentSelectedTokenizerContext = createContext({
    selectedTokenizer: "",
    setSelectedTokenizer: (words: string) => {},
});

export const CurrentSelectedTokenizerProvider = ({ children }: { children: ReactNode }) => {
    const tokenizers = useContext(CurrentTokenizerOptionsContext)
    const [selectedTokenizer, setSelectedTokenizer] = useState("");


    if (selectedTokenizer == ""){
        setSelectedTokenizer(tokenizers[0]?.options[0])
    }
    
  return (
    <CurrentSelectedTokenizerContext.Provider 
        value={{selectedTokenizer, setSelectedTokenizer}}
    >   
        {children}
    </CurrentSelectedTokenizerContext.Provider>
)}