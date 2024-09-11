import { createContext, useContext } from "react";


export const currentTokens = createContext([""])

export const currentTokensProvider = ({ children }: { children: any }) => {
    const [tokens, setTokens] = useContext(currentTokens)

    return <currentTokens.Provider value={tokens}>{children}</currentTokens.Provider>
}