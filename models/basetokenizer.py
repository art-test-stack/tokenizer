from utils.settings import * 

from typing import List, Dict

class BaseTokenizer:
    def __init__(
            self, 
            split_pattern: str = TOKEN_SPLIT_PATTERN, 
            directory: Path = DATA_FOLDER,
            vocab_dir: Path = VOCAB_FILE,
            special_tokens: List[str] | str = CONTROL_TOKENS_LIST
        ) -> None:

        self.to_index: Dict[str, int] = {}
        self.to_token: Dict[int, str] = {}
        self.special_tokens: List[str] = special_tokens
        
        self.control_tokens: Dict[int, str] = {}

        self.directory: Path = directory
        if vocab_dir.exists():
            self.load_vocab()
        self._add_special_tokens_to_vocab(special_tokens=special_tokens if type(special_tokens)==list else [special_tokens])
        
        self.split_pattern = split_pattern

    def train(self):
        self.create()
    
    def load_vocab(self):
        NotImplementedError()

    def create(self):
        NotImplementedError()

    def encode(self):
        NotImplementedError()

    def decode(self):
        NotImplementedError()

    def _add_special_tokens_to_vocab(self):
        NotImplementedError()