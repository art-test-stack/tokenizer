from src.basetokenizer import BaseTokenizer
from utils.settings import CONTROL_TOKENS_LIST, DATA_FOLDER, TOKEN_SPLIT_PATTERN, VOCAB_FILE

from pathlib import Path
from typing import List

import tiktoken
from tiktoken import _tiktoken

tiktoken_models = list(tiktoken.model.MODEL_TO_ENCODING.keys())

class TikTokenizer:
    def __init__(
            self,
            # split_pattern: str = TOKEN_SPLIT_PATTERN,
            # directory: Path = DATA_FOLDER.joinpath("tiktoken"),
            # vocab_file: Path = VOCAB_FILE,
            model_name: str = "gpt-4o",
            special_tokens: List[str] | str = CONTROL_TOKENS_LIST,
        ) -> None:
        # super().__init__(split_pattern, directory, vocab_file, special_tokens)

        assert model_name in tiktoken_models, f"'{model_name}' is not a provided model"
        self.model = tiktoken.encoding_for_model(model_name)

        self.pat_str = self.model._pat_str
        self.mergeable_ranks = self.model._mergeable_ranks

        token_ids = range(self.model.n_vocab, self.model.n_vocab + len(special_tokens))

        special_tokens = special_tokens if type(special_tokens) == list else list(special_tokens)
        self.model._special_tokens = {
            token: id
            for token, id in zip(special_tokens, token_ids)
        }
        self.model._core_bpe = _tiktoken.CoreBPE(self.mergeable_ranks, self.model._special_tokens, self.pat_str)
        self.special_tokens = self.model._special_tokens

    def encode(
            self, 
            text: str,
            retrieve_splitted_text: bool = True, 
            verbose: bool = False
        ):
        print("text ->", type(text))
        return self.model.encode(text, allowed_special="all")
    

    def decode(self, token_ids: List[int]):
        return self.model.decode(token_ids) 
