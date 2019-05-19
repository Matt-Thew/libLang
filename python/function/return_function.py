def outer():
    number = 5
    print(number)
    def inner():
        print(number)
    inner()


def apply(func,x,y):
    return func(x,y)

def add(x,y):
    return x+y

result = apply(add,5,20)
print(result)