#1)

hour = 3600
day = 24
Day = (hour * day)
print(Day)

print(60*60*24)

#2)
cost = int(input("please enter price:"))
print(cost + 87)

#second solution

print("price:" +  "87" + '$')

#3)
print("Nickname:Master")
print("score:99")

#4)
print("  *")
print(" ***")
print("*****")
print(" ***")
print("  *")


#module 2
#1)
country = input("please enter a country")
capital = input("please enter your capital")

#2)
win = int(input("please enter your wins:"))
tie = int(input("please enter number of ties"))
print(tie*0.5 + win)

#3)
Balance=int(input("please enter your balance:"))
widthdraw = int(input("please enter how much you withdrawed"))
new_balance= Balance - widthdraw
print("your new balance:", new_balance)
  

#module 3

  #1)
age = int(input("plese enter your age:"))
if age >= 19:
    print("Take your kindel")

#2)
color = input("please enter a color")
if color != "green":
    print("unknown")

#3)

day = int(input("Enter the day of the week (1 for Monday, 2 for Tuesday, etc.): "))
hour = int(input("Enter the hour of the day (24-hour format): "))


openinghour = 14
closinghour = 23

if 1 <= day <= 7 and 0 <= hour <= 23:
    if 1 <= day <= 7 and openinghour <= hour < closinghour:
        print("The store is open.")
    else:
        print("The store is closed.")
else:
    print("Invalid input")

#Module 4

#1)
alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 
            'X', 'Y', 'Z']

print([2]+[0]+[19])

#2)
supported = ['light off' , 'water off',"Door locked"]
whatasked = input("plese enter your solution")
if whatasked == 'light off'  'water off' "Door locked":
    print("Ok")
else:
    print('Unknown')

#3)
total_floors = int(input("Enter the total number of floors: "))

floor = 5

while floor <= total_floors:
    print(floor)
    floor += 5
 
 
#add
#1)
plane_goes = 550
total = 7425

time = 7425 // 550
print(time)

#2)

bill = int(input("please enter your bill:"))

print((bill * 20)// 100)
