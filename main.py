from models import BaseTokenizer
from utils.app_settings import available_tokenizers

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost.tiangolo.com",
        "https://localhost.tiangolo.com",
        "http://localhost",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Text2Encode(BaseModel):
    tokenizer: str | None
    text: str

@app.get("/tokenizers")
async def get_tokenizers():
    tokenizers = list(available_tokenizers.keys())
    return {"tokenizers": tokenizers}

@app.post("/tokenize")
async def tokenize_text(data: Text2Encode):
    print("data:", data)
    tokenizer_name, text = data.tokenizer if data.tokenizer else "bpe", data.text

    tokenizer: BaseTokenizer = available_tokenizers.get(tokenizer_name)() # TODO: handdle parameters here
    if not tokenizer:
        return {"error": "tokenizer not implemented"}
    
    encoded = tokenizer.encode(text)
    return {"tokens": encoded}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
