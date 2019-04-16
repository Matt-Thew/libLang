import random
class Agile:
    # pass
    agile = True

    def __init__(self, agile=True, **kwargs):
        self.agile = agile
        for key,val in kwargs.items():
            setattr(self,key,val)