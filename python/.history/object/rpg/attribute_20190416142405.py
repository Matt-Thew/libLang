import random
class Sneaky:
    # pass
    sneaky = True

    def __init__(self, agile=True, **kwargs):
        self.sneaky = sneaky
        self.name = name
        for key,val in kwargs.items():
            setattr(self,key,val)

    def pickpocket(self):
        return bool(random.randint(0,1))
    
    def hide(self,light):
        if light <= 10:
            return True
        return False