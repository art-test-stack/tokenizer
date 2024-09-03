from models import BPETokenizer, HGFBPETokenizer, TikTokenizer

available_tokenizers = {
    # "custom_bpe": BPETokenizer,
    "hgface_bpe": HGFBPETokenizer,
    # "tiktoken": TikTokenizer, # special
}
