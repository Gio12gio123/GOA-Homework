import random

def is_leap_year(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            else:
                return False
        else:
            return True
    else:
        return False

def fizz_buzz():
    modified_names = []
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            modified_names.append("FizzBuzz")
        elif i % 3 == 0:
            modified_names.append("Fizz")
        elif i % 5 == 0:
            modified_names.append("Buzz")
        else:
            modified_names.append(str(i))
    
    names = ["Mikha", "Giorgi", "Ana", "Sofia", "Luka"]
    random_name = random.choice(names)
    print(f"{random_name} will pay for everyone's meal!")

def generate_random_numbers_and_calculate_mean(N):
    numbers = []
    total = 0
    for _ in range(N):
        random_num = random.randint(1, 100)
        numbers.append(random_num)
        total += random_num
    return total / N

year = 2000
print(is_leap_year(year))

fizz_buzz()

N = 10
print(generate_random_numbers_and_calculate_mean(N))







