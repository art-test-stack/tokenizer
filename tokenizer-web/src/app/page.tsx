

'use client'
import React, { createContext, useContext, useEffect, useState } from "react";
import Head from "next/head"
import { SelectTokenizer, TokenizerOption } from "@/components/selectTokenizer";
import { currentTokenizerOptions, CurrentTokenizerOptionsProvider } from "@/components/currentTokenizerOptions";
// import './globals.css';
// import { Main } from "next/document";


const App = () => {
  const [text, setText] = useState("");
  const [tokens, setTokens] = useState([""]);
  const [words, setWords] = useState([""]);
  const [selectedTokenizer, setSelectedTokenizer] = useState("");
  // const [tokenizers, setTokenizers] = useState([]);

  const [tokenizers, setTokenizers] = useContext(currentTokenizerOptions);
  // useEffect(() => {
  //   const fetchTokenizers = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8000/tokenizers");
  //       if (response) {
  //         const data = await response.json();
  //         console.log("data", data)
  //         setTokenizers(data);
  //         if (data.length > 0) {
  //           console.log(data[0].options[0])

  //           setSelectedTokenizer(data[0].options[0]);
  //         }
  //       } else {
  //         console.error("Failed to fetch tokenizers");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching tokenizers:", error);
  //     }
  //   };

  //   fetchTokenizers();
  // }, []);

  // const handleTokenization = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/tokenize", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ text, tokenizer: selectedTokenizer }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setTokens(data.tokens ?? [""]);
  //       setWords(data.words)
  //     } else {
  //       console.error("Failed to tokenize text");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // useEffect(() => {
  //   handleTokenization()
  // }, [selectedTokenizer, text])

  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

  // const handleTokenizerChange = (e: any) => {
  //   setSelectedTokenizer(e.target.value);
  // };
  console.log("main provider result", tokenizers)
  // console.log("tokenizers", tokenizers)
  return (
    <>
      <Head>
        <title>Text Tokenizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-2 grid-flow-row hover:place-content-center gap-4 m-20">
        <div className="item1">
          <p className="font-bold text-4xl">Text Tokenizer</p>
        </div>
        <div className="item2">
          <label >
            Choose Tokenizer: 
            {/* <select value={selectedTokenizer} onChange={handleTokenizerChange} className="appearance-auto right"> 
              {tokenizers.map((tokenizer, index) => (
                <option key={index} value={tokenizer}>
                  {tokenizer}
                </option>
              ))}
            </select> */}
            <CurrentTokenizerOptionsProvider>
              <SelectTokenizer/>
              {/* <SelectTokenizer tokenizers={tokenizers}/> */}
            </CurrentTokenizerOptionsProvider>
          </label>
        </div>
        <div className="c-50">
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text to tokenize"
            // rows={4}
            // cols={50}
          />
        </div>
        <div className="place-content-stretch">
          <textarea
            value={`Token count \n${tokens.length}`}
            disabled={true}
            // cols={50}
          />
          <textarea
            value={words.map((word) => word)}
            disabled={true}
            // rows={4}
            // cols={50}
          />
          Tokens
          <textarea
            value={tokens.map((token) => token)}
            disabled={true}
            // rows={4}
            // cols={50}
          />
        </div>
      </main>
    </>
  );
};

export default App;