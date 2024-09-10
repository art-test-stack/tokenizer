from src import BaseTokenizer
# from utils.app_settings import available_tokenizers
from src import BPETokenizer, HGFBPETokenizer, TikTokenizer

from utils.settings import *

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List


app = FastAPI()

tokenizers = {
    "custom_bpe": BPETokenizer(
        split_pattern=TOKEN_SPLIT_PATTERN, 
        directory=DATA_FOLDER.joinpath("custom_bpe"),
        vocab_file=Path("vocab.json"),
        special_tokens=CONTROL_TOKENS_LIST
    ),
    "hgface_bpe": HGFBPETokenizer(
        split_pattern=TOKEN_SPLIT_PATTERN, 
        directory=DATA_FOLDER.joinpath("hgface_bpe"),
        vocab_file=Path("vocab.json"),
        model_file=Path("trainer.pkl"),
        special_tokens=CONTROL_TOKENS_LIST
    ),
    # "tiktoken": TikTokenizer, # special
}

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
    tknzrs = list(tokenizers.keys())
    return {"tokenizers": tknzrs}

@app.post("/tokenize")
async def tokenize_text(data: Text2Encode):
    tokenizer_name, text = data.tokenizer if data.tokenizer else "hgface_bpe", data.text
    if len(text) == 0:
        return {"tokens": [], "words": [""]}  
    tokenizer: BaseTokenizer = tokenizers.get(tokenizer_name) # TODO: handdle parameters automatically here
    if not tokenizer:
        return {"error": "tokenizer not implemented"}
    
    encoded = tokenizer.encode(text, retrieve_splitted_text=True, verbose=False)
    if type(encoded[0]) == int:
        words = [""]
    else:
        words, encoded = zip(*encoded)
    return {"tokens": encoded, "words": words}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
