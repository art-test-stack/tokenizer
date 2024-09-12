import { createContext, useState, ReactNode } from "react";

export const CurrentWordsContext = createContext({
  words: [""],
  setWords: (words: string[]) => {},
});

export const CurrentWordsProvider = ({ children }: { children: ReactNode }) => {
  const [words, setWords] = useState<string[]>([""]);

  return (
    <CurrentWordsContext.Provider value={{ words, setWords }}>
      {children}
    </CurrentWordsContext.Provider>
  );
};