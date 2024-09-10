from utils.settings import * 

import json
from typing import List, Dict

class BaseTokenizer:
    """A Base class module for tokenizers which generates the common attributes

    Attributes:
        split_pattern (str): A string which give the splitting pattern for pretokenization
        directory (Path): A Path object for the tokenizer directory file
        vocab_dir (Path): A Path object for the tokenizer vocabulary file (must be *.json)
        special_tokens (List[str] | str): A string or list of string for the control tokens of the tokenizer
    """
    def __init__(
            self, 
            split_pattern: str = TOKEN_SPLIT_PATTERN, 
            directory: Path = DATA_FOLDER,
            vocab_file: Path = VOCAB_FILE,
            special_tokens: List[str] | str = CONTROL_TOKENS_LIST
        ) -> None:

        self.to_index: Dict[str, int] = {}
        self.to_token: Dict[int, str] = {}
        self.control_tokens: List[str] = special_tokens
        self.vocab_file = vocab_file
        self.special_tokens: Dict[int, str] = {}

        self.directory: Path = directory
        if directory.joinpath(vocab_file).exists():
            self.load_vocab()
        # self._add_special_tokens_to_vocab(special_tokens=special_tokens if type(special_tokens)==list else [special_tokens])
        
        self.split_pattern = split_pattern

    def train(self):
        self.create()
    
    def load_vocab(self):
        with open(self.directory.joinpath(self.vocab_file), 'rb') as vf:
            self.to_token = json.load(vf)
            self.to_index = {v: k for k, v in self.to_token.items()}

    def create(self):
        NotImplementedError()

    def encode(self):
        NotImplementedError()

    def decode(self):
        NotImplementedError()

    # def _add_special_tokens_to_vocab(self):
    #     NotImplementedError()