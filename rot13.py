import re


def rot13(str):
    cipher = ""

    for val in str:
        if re.search("[A-M]", val):
            cipher += chr(ord(val) + 13)
        elif re.search("[N-Z]", val):
            cipher += chr(ord(val) - 13)

    return cipher
