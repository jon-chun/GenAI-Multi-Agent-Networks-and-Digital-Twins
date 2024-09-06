from typing import Any
def hello(message: str) -> None:
    if not isinstance(message, str):
        raise ValueError("Input message must be a string")
    print(f"Hello: {message}")

def get_length(message: str) -> int:
    len_int = len(message)
    return len_int

if __name__ == '__main__':
    name_str="Bob"
    hello(name_str)
    print(get_length(name_str))