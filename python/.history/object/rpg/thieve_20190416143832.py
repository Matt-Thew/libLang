import random

from character import Character

class Theif(Character):
    def pickpocket(self):
        return self.sneaky and bool(random.randint(0,1))