

'use client'
import React, { createContext, useContext, useEffect, useState } from "react";
import Head from "next/head"
import { SelectTokenizer, TokenizerOption } from "@/components/selectTokenizer";
import { CurrentTokenizerOptionsContext, CurrentTokenizerOptionsProvider } from "@/components/currentTokenizerOptions";
import { TextToToken } from "@/components/textToToken";
import { CurrentSelectedTokenizerProvider } from "@/components/selectedTokenizer";
import { CurrentTokensProvider } from "@/components/currentTokens";
import { CurrentWordsProvider } from "@/components/currentWords";
import { Tokens } from "@/components/tokens";
// import './globals.css';
// import { Main } from "next/document";


const App = () => {
  
  return (
    <>
      <Head>
        <title>Text Tokenizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CurrentSelectedTokenizerProvider>
        <CurrentTokensProvider>
          <CurrentWordsProvider>
            <main className="grid grid-cols-2 grid-flow-row hover:place-content-center gap-4 m-20">
              <div className="item1">
                <p className="font-bold text-4xl">Text Tokenizer</p>
              </div>
              <div className="item2">
                <label >
                  Choose Tokenizer:
                  <CurrentTokenizerOptionsProvider>
                    <SelectTokenizer/>
                  </CurrentTokenizerOptionsProvider>
                </label>
              </div>
              <div className="c-50">
                  <TextToToken/>
              </div>
              <Tokens/>
            </main>
          </CurrentWordsProvider>
        </CurrentTokensProvider>
      </CurrentSelectedTokenizerProvider>
    </>
  );
};

export default App;