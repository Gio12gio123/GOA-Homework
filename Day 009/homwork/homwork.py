#დავალება: მომხმარებელს შემოატანინეთ 2 რიცხვი და გაკეტეთ მათემატიკური ოპერაციები

num1 = int(input("pleas enter a number:"))
num2 = int(input ("please enter a number:"))
result = num1 * num2
result2 = num1 / num2
result3 = num1 + num2 
result4 = num1 - num2
print(result)
print(result2)
print(result3)
print(result4)

#=================================================================================================================================

#დავალება1: ეცადეთ input-ბით, და მათემატიკური ოპერაციებით შექმნათ კალკულატორი'


num_1 = int(input("please enter a number :"))
num_2 = int(input("please enter enothr number"))
print(num_1 + num_2)
print(num_1 - num_2)
print(num_1 * num_2)
print(num_1 // num_2)

#=======================================================================================================================

#დავალება2: შემოიტანეთ მომხმარებელს ასაკი და დაპრინტეთ რამდენი წლის იქნება 10 წლის შემდეგ

ageafter10 = int(input("please enter your age:"))
print(ageafter10 + 10)


#=================================================================================================================

#დავალება3: ჩამოწერეთ ცვლადები, რომლებსაც ექნებათ სხვადასხვა მონაცემთა რიპი, შემდეგ კი დაპრინტეთ რა მონაცემთა ტიპებისა ცვლადები

string1 = "27"
integer1 = 23
float1 = 3.4

print(type(string1))
print(type(integer1))
print(type(float1))