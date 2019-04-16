import random

from attribute import Agile,Sneaky
from character import Character

class Thief(Character,Agile,Sneaky):
    def pickpocket(self):
        return self.sneaky and bool(random.randint(0,1))
