with open("a.txt", "rb") as f:
    lines = f.readline().decode("cp1252")

import re

print(lines)

s = re.findall(r"(\d{2})[-\./]{1}(\d{2})[-\./]{1}(\d{2})", lines)

print(s)