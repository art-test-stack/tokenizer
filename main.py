from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from models.bpe.tokenizer import Tokenizer as BPETokenizer
from models.hgface.tokenizer import Tokenizer as HGFTokenizer
from models.tiktoken.tokenizer import Tokenizer as TikTokenizer

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost.tiangolo.com",
        "https://localhost.tiangolo.com",
        "http://localhost",
        # "http://localhost:8000",
        "http://localhost:3000",
        # "*"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Text2Encode(BaseModel):
    tokenizer: str | None
    text: str

tokenizers = {
    "bpe": BPETokenizer(),
    "hgface": HGFTokenizer(),
    # "tiktoken": TikTokenizer(),
}

@app.get("/tokenizers")
async def get_tokenizers():
    print('tokenizers list ->', list(tokenizers.keys()))
    return {"tokenizers": list(tokenizers.keys())}

@app.post("/tokenize")
async def tokenize_text(data: Text2Encode):
    tokenizer_name, text = data.tokenizer if data.tokenizer else "bpe", data.text

    tokenizer = tokenizers.get(tokenizer_name)
    if not tokenizer:
        return {"error": "tokenizer not implemented"}
    
    encoded = tokenizer.encode(text)
    print('encoded', encoded)
    return {"tokens": encoded}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
