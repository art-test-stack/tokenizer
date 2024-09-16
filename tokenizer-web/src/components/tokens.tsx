import { useContext } from "react"
import { CurrentTokensContext } from "./currentTokens"
import { CurrentWordsContext } from "./currentWords"



export const Tokens = () => {
    const { tokens, setTokens } = useContext(CurrentTokensContext)
    const { words, setWords } = useContext(CurrentWordsContext)
    return (
        <div>
            <textarea
                id="token-count"
                value={`Token count \n${tokens.length}`}
                disabled={true}
                className="block p-2.5 h-1/6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // cols={50}
            />
            <textarea
                id="words"
                value={words.map((word) => word)}
                disabled={true}
                className="block p-2.5 w-full rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // rows={4}
                // cols={50}
            />
            Tokens
            <textarea
                id="tokens"
                value={tokens.map((token) => token)}
                disabled={true}
                className="block p-2.5 w-full rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    )
}