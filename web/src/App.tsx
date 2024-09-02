import React, { useEffect, useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [tokens, setTokens] = useState([""]);
  const [selectedTokenizer, setSelectedTokenizer] = useState("");
  const [tokenizers, setTokenizers] = useState([]);

  useEffect(() => {
    const fetchTokenizers = async () => {
      try {
        const response = await fetch("http://localhost:8000/tokenizers");
        console.log(response)
        if (response) {
          const data = await response.json();
          setTokenizers(data.tokenizers);
          console.log("tokenizers:", data)
          if (data.tokenizers.length > 0) {
            setSelectedTokenizer(data.tokenizers[0]);
          }
        } else {
          console.error("Failed to fetch tokenizers");
        }
      } catch (error) {
        console.error("Error fetching tokenizers:", error);
      }
    };

    fetchTokenizers();
  }, []);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleTokenizerChange = (e) => {
    setSelectedTokenizer(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/tokenize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, tokenizer: selectedTokenizer }),
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
      <label>
        Choose Tokenizer: 
        <select value={selectedTokenizer} onChange={handleTokenizerChange} style={{ marginLeft: "10px" }}>
          {tokenizers.map((tokenizer, index) => (
            <option key={index} value={tokenizer}>
              {tokenizer}
            </option>
          ))}
        </select>
      </label>
      <br/>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text to tokenize"
        rows={4}
        cols={50}
        style={{ marginBottom: "20px" }}
      />
      <br/><br/>
      <button onClick={handleSubmit}>Tokenize</button>
      <div>
        <h2>Tokens:</h2>
        <textarea
          value={tokens.map((token) => token)}
          disabled={true}
          rows={4}
          cols={50}
          style={{ marginBottom: "20px" }}
        />
      </div>
    </div>
  );
};

export default App;
