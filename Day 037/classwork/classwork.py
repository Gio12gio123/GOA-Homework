#2)
msg = input("Input a message: ")

result = msg.replace("#", " ")

print(result)


#1)
name = input('please enter your name:')
age = input('Enter your age:')

santence = 'Hello, {name}! You are {age} years old.'.format(name=name, age=age)

print(santence)


#2)
words = ["Python", "is", "fun"]

sentence = " ".join(words)

print(sentence)


#3)

sentence = input("Input a sentence: ")

result_1 = sentence.split(" ")

print(result_1)



#4)
sentence = input("Input a sentence: ")

result = sentence.split(" ")

print(result)


#5)
mixed_case = "HeLlo WoRLd"

result = mixed_case.lower()

print(result)


#6)
convert = input("Text to convert into uppercase: ")

result = convert.upper()

print(result)
