from pathlib import Path

# ------------- DATA -------------

IS_TIKTOKEN = False # TODO: parse as arg

class CUSTOM_CONTROL_TOKENS:
    unknown = '⮜unknown⮞'
    padding = '⮜padding⮞'
    start_of_text = '⮜start-of-text⮞' 
    tab = '⮜tab⮞' 
    new_line = '⮜new-line⮞' 
    human = '⮜human⮞' 
    system = '⮜system⮞' 
    user = '⮜user⮞' 
    assistant = '⮜assistant⮞' 
    end_of_text = '⮜end-of-text⮞'

class TIKTOKEN_CONTROL_TOKENS:
    unknown = '<|unknown|>'
    padding = '<|padding|>'
    start_of_text = '<|startoftext|>'
    tab = '<|tab|>'
    new_line = '<|new_line|>'
    human = '<|human|>'
    system = '<|system|>'
    user = '<|user|>'
    assistant = '<|assistant|>'
    end_of_text = '<|endoftext|>'


CONTROL_TOKENS = TIKTOKEN_CONTROL_TOKENS if not IS_TIKTOKEN else CUSTOM_CONTROL_TOKENS

CONTROL_TOKENS_LIST = list(CONTROL_TOKENS.__dict__.values())[1:-3]
FORCED_TOKENS = ["AI"]

DATA_FOLDER = Path("data")
MIN_DOCUMENT_SIZE = 0
MODEL_FOLDER = Path("")
VOCAB_SIZE = 32_000
VOCAB_FILE = DATA_FOLDER.joinpath("vocab.json")
MAX_TOKEN_LENGTH = 32

# TOKEN_SPLIT_PATTERN = r"""'(?i:[sdmt]|ll|ve|re)|[^\r\n\p{L}\p{N}]?+\p{L}+|\p{N}{1,3}| ?[^\s\p{L}\p{N}]++[\r\n]*|\s*[\r\n]|\s+(?!\S)|\s+""" # GPT 4 SPLIT
TOKEN_SPLIT_PATTERN = r"""'s|'t|'re|'ve|'m|'ll|'d| ?\p{L}+| ?\p{N}+| ?[^\s\p{L}\p{N}]+|\s+(?!\S)|\s+""" # GPT 2 SPLIT
