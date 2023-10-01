#!/usr/bin/python3

def magic_string(counter=[0]):
    counter[0] += 1
    return ", ".join(["BestSchool"] * counter[0])

for i in range(10):
    print(magic_string())
