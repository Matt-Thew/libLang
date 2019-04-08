import os

def show():
    clear_screen()
    print('hello function')

def clear_screen():
    os.system("cls" if os.name== "in" else "clear")

show()