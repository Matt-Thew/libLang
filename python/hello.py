

name = int(input("enter your name"));


if name <=1:
    raise ValueError("check number again")

try:
    print("hello {}!!!!!!!!!".format(name));
except ValueError:
    print("error happening")