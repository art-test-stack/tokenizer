import { createContext, useState, ReactNode } from "react";

export const CurrentTokensContext = createContext({
  tokens: [""],
  setTokens: (tokens: string[]) => {},
});

export const CurrentTokensProvider = ({ children }: { children: ReactNode }) => {
  const [tokens, setTokens] = useState<string[]>([""]);

  return (
    <CurrentTokensContext.Provider value={{ tokens, setTokens }}>
      {children}
    </CurrentTokensContext.Provider>
  );
};