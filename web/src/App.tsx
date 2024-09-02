import React, { useState } from "react";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [tokens, setTokens] = useState<string[]>([]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/tokenize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const data = await response.json();
        setTokens(data.tokens);
      } else {
        console.error("Failed to tokenize text");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Text Tokenizer</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text to tokenize"
        rows={4}
        cols={50}
        style={{ marginBottom: "20px" }}
      />
      <br />
      <button onClick={handleSubmit}>Tokenize</button>
      <div>
        <h2>Tokens:</h2>
        <ul>
          {tokens.map((token, index) => (
            <li key={index}>{token}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
