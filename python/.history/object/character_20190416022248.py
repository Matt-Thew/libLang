import random
class Theif:
    # pass
    sneaky = True

    def pickpocket(self):
        return bool(random.randint(0,1))
    
    def hide(self,light):
        if light <= 10:
