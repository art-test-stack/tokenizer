import { useContext } from "react"
import { CurrentTokensContext } from "./currentTokens"
import { CurrentWordsContext } from "./currentWords"



export const Tokens = () => {
    const { tokens, setTokens } = useContext(CurrentTokensContext)
    const { words, setWords } = useContext(CurrentWordsContext)
    return (
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
            />
        </div>
    )
}