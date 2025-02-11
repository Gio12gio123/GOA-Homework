#1) მომხმარებელს შემოატანინეთ 4 სხავდასხვა რიცხვი და ამ ოთხივე რიცხვზე მოახდინეთ არითმეტიკური ოპერაციები. +,-,*,//

num1 = int(input("please enter number"))
num2 = int(input("please enter number"))
num3 = int(input("please enter number"))
num4 = int(input("please enter number"))

number = num1 + num2 + num3 ** num4

print(number)

numberr = num1 / num2 * num3  // num4

print (numberr)

#---------------------------------------------------------------------------------------------------------------------------
#2) დაწერეთ პროგრამა სადაც შემოიტანთ თქვენი ოჯახის წევრების ასაკს და გამოიტანეთ ის თუ რამდენი წლის იქნებიან 20 წლის შემდეგ.
age = int(input("please enter your family member age:"))
future = 20
print(age + future)
 
 #-------------------------------------------------------------------------------------------------------------------------------
#3) შექმენით ცვლადები სადაც შეინახავთ თქვენს თავზე ინფორმაციას (სახელი, გვარი, ასაკი, ქვეყანა, ქალაქი, საყვარელი ფერი,
#  საყვარელი მანქანა, საყვარელი საჭმელი, საყვარელი სპორტი და ა.შ) შემდეგ შემოტანილი მნიშვნელობებით ააწყვეტ ერთი დიდი წინადადება.

name_2 = str(input("please enter your name:"))
last_name = str(input("please enter your last_name"))
age = int(input("please enter your age:"))
country = str(input("please enter your country:"))
hobby = str(input("please enter your hobby:"))

print( " Hello! my name is", name_2 , "my last name is" , last_name , "i am frome", country , "i am " , age ,"years old")

#---------------------------------------------------------------------------------------------------------------------------------
#4)დაწერეთ მარტივი პროგრამა, რომელიც სთხოვს მომხმარებელს 
#შეიყვანოს თავისი სახელი და შემდეგ დაბეჭდოს მისალოცი შეტყობინება მათი სახელის გამოყენებით.


username = str(input("please enter your name:"))
print( " Hello! " +  username  + " happy birthday wish you all the best <3")

#-----------------------------------------------------------------------------------------------
#5) დაწერეთ პითონის პროგრამა, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს ორი რიცხვი და შემდეგ დაბეჭდოს მათი ჯამი

plus = str(input("please enter number:"))
minus = str(input("please enter a number"))

GOA = plus + minus
print(GOA)

#--------------------------------------------------------------------------------------------------------------------
#6)დაწერეთ პითონის პროგრამა, რომელიც ითვლის მართკუთხედის ფართობს.პროგრამამ უნდა სთხოვოს მომხმარებელს მართკუთხედის სიგანე და
#  სიმაღლე.

partobi = int(input("please enter height"))
partobii=  int(input("please enter width"))
 
code = partobi * partobii 

print(code)

#--------------------------------------------------------------------------------------------------------------------------

#7) დაწერეთ პითონის პროგრამა, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს რიცხვი და შემდეგ დაბეჭდოს ამ რიცხვის ორმაგი.
NUMBE = int(input("please enter number"))
k = NUMBE * 2
print(k)

#8)დაწერეთ პითონის პროგრამა, რომელიც ითვლის მართკუთხედის პერიმეტრს.
# პროგრამამ უნდა სთხვოს მომხმარებელს მართკუთხედის სიგანე და სიმაღლე.

perimetri = int(input("please enter a number"))
perimetriii = int(input("please enter a number"))
perimetriiii = perimetri * 2 + perimetriii  * 2
print(perimetriiii)

#---------------------------------------------------------------------------------------------------------------------------
#9) დაწერეთ პითონის პროგრამა, რომელიც მოუწოდებს მომხმარებელს 
#შეიყვანოს რიცხვი და შემდეგ დაბეჭდოს ამ რიცხვის კვადრატი(გამოიყენეთ ** - ოპერატორი)

squear = int(input("please enter a number:"))
squearr = squear ** 2
print(squearr)
