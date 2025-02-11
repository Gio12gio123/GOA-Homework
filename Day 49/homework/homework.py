def filterd_students(scores):
    filter_students = {name: score for name, score in scores.items() if score > 50}
    return filter_students

scores = {
    "Alice": 12,
    "Bob": 23,
    "Charlie": 55,
    "David": 67,
    "Eve": 89
}
scoress = filterd_students(scores)

print(f"students above 50 are : {scoress}")



# პროექტის აღწერა:  რიცხვების შებრუნება
# პრობლემა: დაწერეთ პროგრამა, რომელიც შებრუნებულად გამოიტანს მომხმარებლის მიერ შეყვანილ რიცხვების სიას.
def list_(liste):
    return liste[::-1]

list_input = input("please enter some numbers whit comas:")

slicee = list_input.split(',')


slicee = [int(num.strip()) for num in slicee]

reverse_list = list_(slicee)
print(reverse_list)

# პროექტის აღწერა:  საშუალო მნიშვნელობის პოვნა
# პრობლემა: დაწერეთ პროგრამა, რომელიც გამოთვლის მომხმარებლის მიერ შეყვანილი რიცხვების სიის საშუალო მნიშვნელობას.

def calculate_avg(num):
    if num == 0:
        return 0
    else:
        return sum(num) / len(num)
lists_input = input("please enter some numbers with commas:")

numbers = [float(num.strip()) for num in list_input.split(',')]
avg = calculate_avg(numbers)

print(f"avg is:{avg}")