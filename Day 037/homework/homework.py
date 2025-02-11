# Task 1: String Formatting
# Create a string named template with the following content: "Hello, {name}. Welcome to {place}."
# Use the format() function to replace {name} with "Alice" and {place} with "Wonderland". Store the result in a variable named 
# formatted_string and print it.

name = input('please enter your name:')
place = input('please enter a place:')


temple = "hello  {name}. welcome to {place}.".format(name = name,place = place)

print(temple)


#=============================================================================================================================

# Task 2: Joining Strings
# Create a list named words that contains the following strings: "apple", "banana", "cherry".
# Use the join() function to combine these words into a single string, separated by a comma and a space ", ". 
# Store the result in a variable named fruit_string and print it.

shop = ['apple','bannana','cherry']

fruit_string = "," " ". join(shop)

print(fruit_string)



# Task 3: Splitting a String
# Create a string named sentence with the following content: "The quick brown fox jumps over the lazy dog."
# Use the split() function to split the sentence into a list of words. Store the result in a variable named words_list and print it.

sentance = "The quick brown fox jumps over the lazy dog."

words_list = sentance.split(" ")

print(words_list)


#Task 4: Replacing Substrings
# Create a string named quote with the following content: "To be or not to be, that is the question."
# Use the replace() function to replace the word "be" with "code". Store the result in a variable named modified_quote and print it

quout = "To be or not to be, that is the question."

modified_code = quout.replace("be","code")

print(modified_code)


# Task 5: Converting to Lowercase
# Create a string named mixed_case with the following content: "PyThOn Is AwEsOmE!"
# Use the lower() function to convert the entire string to lowercase. Store the result in a variable named lowercase_string and 
# print it.

mixed_case = "PyThOn Is AwEsOmE!"

lowercase_str = mixed_case.lower()

print(lowercase_str)


# Task 6: Converting to Uppercase
# Create a string named greeting with the following content: "good morning"
# Use the upper() function to convert the entire string to uppercase. Store the result in 
# a variable named uppercase_greeting and print it

gretting = "good morning"

upercase_gretting = gretting.upper()

print(upercase_gretting)