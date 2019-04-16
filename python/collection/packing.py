def packer(**kwargs):
    print(kwargs)

def unPacker(firstName = None , lastName = None):
    print("{} {}".format(firstName,lastName))

packer(name="Matt",lastName="Thew",age=20)
unPacker(**{"firstName":"Matt","lastName":"Thew"})
