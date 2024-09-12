

'use client'
import React from "react";
import Head from "next/head"
import { SelectTokenizer } from "@/components/selectTokenizer";
import { CurrentTokenizerOptionsProvider } from "@/components/currentTokenizerOptions";
import { TextToToken } from "@/components/textToToken";
import { CurrentTokensProvider } from "@/components/currentTokens";
import { CurrentWordsProvider } from "@/components/currentWords";
import { Tokens } from "@/components/tokens";


const App = () => {
  
  return (
    <>
      <Head>
        <title>Text Tokenizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CurrentTokenizerOptionsProvider>
        <CurrentTokensProvider>
          <CurrentWordsProvider>
            <main className="grid grid-cols-2 grid-flow-row hover:place-content-center gap-4 m-20">
              <div className="item1">
                <p className="font-bold text-4xl">Text Tokenizer</p>
              </div>
              <div className="item2">
                <label >
                  Choose Tokenizer:
                    <SelectTokenizer/>
                </label>
              </div>
              <div className="c-50">
                  <TextToToken/>
              </div>
              <Tokens/>
            </main>
          </CurrentWordsProvider>
        </CurrentTokensProvider>
        </CurrentTokenizerOptionsProvider>
    </>
  );
};

export default App;