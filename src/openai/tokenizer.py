from pathlib import Path
from typing import List
from src.basetokenizer import BaseTokenizer
from utils.settings import CONTROL_TOKENS_LIST, DATA_FOLDER, TOKEN_SPLIT_PATTERN, VOCAB_FILE

tiktoken_models = [
    "gpt-o",
    "cl100k_base",
    "o200k_base"
]

class TikToken(BaseTokenizer):
    def __init__(
            self,
            split_pattern: str = TOKEN_SPLIT_PATTERN,
            directory: Path = DATA_FOLDER.joinpath("tiktoken"),
            vocab_file: Path = VOCAB_FILE,
            special_tokens: List[str] | str = CONTROL_TOKENS_LIST,
            model_name: str = "gpt-o"
        ) -> None:
        super().__init__(split_pattern, directory, vocab_file, special_tokens)

        assert model_name in tiktoken_models, f"'{model_name}' is not a provided model"

