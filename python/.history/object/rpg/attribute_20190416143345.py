import random
class Agile:
    # pass
    agile = True

    def __init__(self, agile=True,*args, **kwargs):
        self.agile = agile
        super().__init__(*args, **kwargs)
        self.agile = agile

    def evade(self):
        return self.agile and random.randint(0,1)