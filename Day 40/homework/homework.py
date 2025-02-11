def bumps(road):
    bumps = road.count('n')
    if bumps <= 15:
        return "Woohoo!"
    else:
        return "Car Dead"
    

def greet(name): 
    return f"{name.capitalized()}!"


def add(num1, num2):
    return num1 + num2