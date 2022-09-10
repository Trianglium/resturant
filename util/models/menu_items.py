class MenuItem():
    def __init__(self, id, name, price, category_id, description):
        self.id = id
        self.name = name
        self.price = price
        self.category = category_id
        self.description = description
    
    def __repr__(self) -> str:
        return f'MenuItems({self.id}, {self.name}, {self.price}, {self.category})'

class MenuItems():
    def __init__(self):
