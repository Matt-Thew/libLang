import random
class Agile:
    # pass
    agile = True

    def __init__(self, agile=True, **kwargs):
        self.agile = agile
        for key,val in kwargs.items():
            setattr(self,key,val)

    def pickpocket(self):
        return bool(random.randint(0,1))
    
    def hide(self,light):
        if light <= 10:
            return True
        return False