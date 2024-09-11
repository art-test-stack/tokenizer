import { createContext, useContext, useEffect, useState } from "react";
import { currentTokenizerOptions } from "./currentTokenizerOptions";

export const currentSelectedTokenizer = createContext("")

export const CurrentSelectedTokenizerProvider = ({ children }: { children: any }) => {
//   const [tokenizers, setTokenizers] = useState([]);
    const [tokenizers, setTokenizers] = useContext(currentTokenizerOptions)
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
    setSelectedTokenizer(tokenizers[0]?.options[0])
  console.log("provider result", selectedTokenizer)
  return <currentSelectedTokenizer.Provider value={selectedTokenizer}>{children}</currentSelectedTokenizer.Provider>
}