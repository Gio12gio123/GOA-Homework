# სიტყვის რიცხვი ტექსტში
# შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და გამოითვლის, რამდენი სიტყვაა ამ ტექსტში.

def counter_words(text):
 
    words = text.split()
  
    return len(words)


text = "this is a tex."
word_count = counter_words(text)
print(f"amount of text is: {word_count}")






# პირობითი ოპერაცია რიცხვის დადებითობის შემოწმებისთვის
# შექმენი პროგრამა, რომელიც იფუნქციონირებს შემდეგნაირად: მომხმარებლის შეყვანილი რიცხვი იქნება დადებითი, უარყოფითი,
#  ან ნულოვანი, და შესაბამისი შეტყობინება უნდა გამოიტანოს.


def check_number(num):
    if num > 0:
        return "შეყვანილი რიცხვი არის დადებითი."
    elif num < 0:
        return "შეყვანილი რიცხვი არის უარყოფითი."
    else:
        return "შეყვანილი რიცხვი არის ნულოვანი."

try:
    user_input = float(input("enter a num: "))
    result = check_number(user_input)
    print(result)
except ValueError:
    print("please enter valid number.")


# მომხმარებლის ასაკის კატეგორიზაცია
#  შექმენი პროგრამა, რომელიც მიიღებს მომხმარებლის ასაკს და დააბრუნებს შეტყობინებას იმის მიხედვით, 
# თუ რომელ ასაკობრივ კატეგორიაშია მომხმარებელი.


def categorize_age(age):
    if age < 0:
        return "wrong age ."
    elif age < 13:
        return "you are a child."
    elif age < 20:
        return "you are a teen."
    elif age < 65:
        return "you are an adult."
    else:
        return "you are aged."

age1 = int(input('please enter your age'))
result = categorize_age(age1)
print(result)


#ლუწი და კენტ რიცხვთა სიის პოვნა
# შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების სიას და დააბრუნებს ორ ცალკე სიას – 
# ერთში იქნებიან ლუწი რიცხვები, ხოლო მეორეში კენტი რიცხვები.

def separate_even_odd(numbers):
    even_numbers = []
    odd_numbers = []
    
    for number in numbers:
        if number % 2 == 0:
            even_numbers.append(number)
        else:
            odd_numbers.append(number)
    
    return even_numbers, odd_numbers

numbers_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even, odd = separate_even_odd(numbers_list)

print("ლუწი რიცხვები:", even)
print("კენტი რიცხვები:", odd)



# საშუალო რიცხვის პოვნა ფუნქციით
# შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების სიას და დააბრუნებს სიის საშუალო რიცხვს.

def calculate_average(numbers):
    if not numbers:
        return 0  

    total = sum(numbers)  
    count = len(numbers)
    average = total / count  
    return average


numbers_list = [10, 20, 30, 40, 50]
average_value = calculate_average(numbers_list)
separate_even_odd


