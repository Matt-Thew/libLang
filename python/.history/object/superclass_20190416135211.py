import random

class Inheritance:
    def __init__(self, name, sneaky=True, **kwargs):
        self.sneaky = sneaky
        self.name = name
        for key,val in kwargs.items():
            setattr(self,key,val)

class Theif(Inheritance):
    # pass
    sneaky = True
    def __init__(self, name,sneaky=True, **kwargs):
        super().__init__(name,**kwargs)
        self.sneaky = sneaky
        



    def pickpocket(self):
        return bool(random.randint(0,1))
    
    def hide(self,light):
        if light <= 10:
            return True
        return False

# assasin = Theif("Rogue",Weapon = "Kafra")