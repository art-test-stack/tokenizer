from models import BaseTokenizer
from utils.app_settings import available_tokenizers
from utils.settings import *

from datasets import load_dataset

from pathlib import Path
import argparse


def main():
    parser = argparse.ArgumentParser(
        prog='Tokenizer Trainer',
        description='A tokenizer trainer which train different models from different implementations',
        epilog=''
    )
    parser.add_argument('-n', '--tokenizer_name', default="custom_bpe", choices=available_tokenizers.keys())
    parser.add_argument('-d', '--directory', default=DATA_FOLDER)
    parser.add_argument('-f', '--vocab_file', default=VOCAB_FILE)
    parser.add_argument('-m', '--model_file', required=False)
    parser.add_argument('-s', '--vocab_size', default=VOCAB_SIZE)

    args = parser.parse_args()
    assert args.tokenizer_name in available_tokenizers.keys(), f"{args.tokenizer_name} is not a tokenizer implemented which can be trained"

    tokenizer_name = args.tokenizer_name
    dir_name = Path(args.directory)
    vocab_file = Path(args.vocab_file)
    vocab_size = int(args.vocab_size)
    model_file = Path(args.model_file) if args.model_file else None

    print(f"{args.tokenizer_name} training starts...")
    print(f"Directory:", args.directory)

    print("Dataset:", "wikipedia --20220301.en")
    wikipedia_dataset = load_dataset("wikipedia", "20220301.en")

    wiki_set = wikipedia_dataset['train']
    data_size = 1000 if tokenizer_name=="bpe_custom" else -1
    set_for_train = [ text for text in wiki_set[:data_size]["text"]]

    tk: BaseTokenizer = available_tokenizers.get(tokenizer_name)(
        directory=dir_name.joinpath(tokenizer_name),
        vocab_dir=vocab_file,
        vocab_size=vocab_size
    )
    tk_params = {
        "directory": dir_name.joinpath(tokenizer_name),
        "vocab_dir": vocab_file,
        "vocab_size": vocab_size
    }
    tk.train(set_for_train, vocab_size=VOCAB_SIZE, verbose=False)
    # tk.register_special_tokens(CONTROL_TOKENS_LIST)
    # tk.save()


if __name__ == "__main__":
    main()