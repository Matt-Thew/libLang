def outer():
    number = 5
    print(number)
    def inner():
        print(number)
    inner()


outer()