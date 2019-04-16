import random
class Theif:
    # pass
    sneaky = True

    def __init__(self, name, **kwargs):
        self.sneaky = sneaky
        self.name = name

    def pickpocket(self):
        return bool(random.randint(0,1))
    
    def hide(self,light):
        if light <= 10:
            return True
