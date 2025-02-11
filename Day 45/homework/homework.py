# ფუნქცია: რაოდენობის დათვლა
# შექმენი ფუნქცია count_items(item_list, item), რომელიც მიიღებს ორ პარამეტრს:
# item_list - ელემენტების სია.
# item - ელემენტი, რომლის დათვლაც გსურს სიაში.
#  ფუნქციამ უნდა დააბრუნოს, რამდენჯერ გვხვდება ეს ელემენტი სიაში.
    
def count_items(item_list, item):
    return item_list.count(item)

items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
result = count_items(items, 'apple')
print(f"'apple' appears {result} times in the list.")


#================================================================================================================================
# ფუნქცია: ჯამის გამოთვლა
# შექმენი ფუნქცია sum_of_list(num_list), რომელიც მიიღებს რიცხვების სიას და დააბრუნებს სიაში არსებული ყველა რიცხვის ჯამს.
# ფუნქცია უნდა გამოიყენოს for ციკლ


def sum_of_list(num_list):
    total = 0
    for num in num_list:
        total += num
    return total


numbers = [1, 2, 3, 4, 5]
result = sum_of_list(numbers)
print(f"The sum of the list is: {result}")




#============================================================================================================================


# ფუნქცია: საშუალო მნიშვნელობის გამოთვლა
# შექმენი ფუნქცია average_of_list(num_list), რომელიც იღებს რიცხვების სიას და აბრუნებს ამ რიცხვების საშუალო მნიშვნელობას.
# გამოიყენე სიის ჯამის გამოთვლა და ელემენტების რაოდენობის გაყოფ

def average_of_list(num_list):
    if len(num_list) == 0:  
        return 0
    total = sum_of_list(num_list)
    average = total / len(num_list)
    return average

numbers = [1, 2, 3, 4, 5]
result = average_of_list(numbers)
print(f"The average of the list is: {result}")



#==========================================================================================================================


# ფუნქცია: სიის გადაბრუნება
# შექმენი ფუნქცია reverse_list(items), რომელიც დააბრუნებს გადაბრუნებულ სიას (სიის ბოლო ელემენტი პირველზე იქნება, პირველი კი ბოლო).

def reverse_list(items):
    reversed_list = []
    for item in items:
        reversed_list.insert(0, item)  
    return reversed_list


original_list = [1, 2, 3, 4, 5]
result = reverse_list(original_list)
print(f"The reversed list is: {result}")