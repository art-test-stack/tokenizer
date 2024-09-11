import { createContext, useContext } from "react";


export const currentWords = createContext([""])

export const currentWordsProvider = ({ children }: { children: any }) => {
    const [words, setWords] = useContext(currentWords)

    return <currentWords.Provider value={words}>{children}</currentWords.Provider>
}