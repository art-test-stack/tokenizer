import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { CurrentTokenizerOptionsContext } from "./currentTokenizerOptions";


export const CurrentSelectedTokenizerContext = createContext({
    selectedTokenizer: "",
    setSelectedTokenizer: (words: string) => {},
});

export const CurrentSelectedTokenizerProvider = ({ children }: { children: ReactNode }) => {
//   const [tokenizers, setTokenizers] = useState([]);
    const tokenizers = useContext(CurrentTokenizerOptionsContext)
    const [selectedTokenizer, setSelectedTokenizer] = useState("");

//   useEffect(() => {
//     const fetchTokenizers = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/tokenizers");
//         if (response) {
//           const data = await response.json();
//         //   console.log("data", data)
//           setTokenizers(data);
//           if (data.length > 0) {
//             // setSelectedTokenizer(data[0].options[0]);
//           }
//         } else {
//           console.error("Failed to fetch tokenizers");
//         }
//       } catch (error) {
//         console.error("Error fetching tokenizers:", error);
//       }
//     };

//     fetchTokenizers();
//   }, []);
console.log("tokenizer list->", tokenizers)
console.log("selected tokenizer->", selectedTokenizer)
    if (selectedTokenizer == ""){
        setSelectedTokenizer(tokenizers[0]?.options[0])
    }
    
  console.log("provider result", selectedTokenizer)
  return <CurrentSelectedTokenizerContext.Provider value={{selectedTokenizer, setSelectedTokenizer}}>{children}</CurrentSelectedTokenizerContext.Provider>
}