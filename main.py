from fastapi import FastAPI, Request
from pydantic import BaseModel
from typing import List
from models.bpe.tokenizer import Tokenizer as BPETokenizer
from models.hgface.tokenizer import Tokenizer as HGFTokenizer
from models.tiktoken.tokenizer import Tokenizer as TikTokenizer

app = FastAPI()

# Define a model for the incoming request
class TextData(BaseModel):
    text: str

@app.post("/tokenize")
async def tokenize_text(data: TextData):
    text = data.text
    # Example tokenizer logic, replace this with your own
    encoded = HGFTokenizer.encode(text)
    return {"tokens": encoded}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
