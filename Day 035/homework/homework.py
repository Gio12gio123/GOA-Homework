
#1)

queue = ['Jhon','amy','bob']

queue.insert(3,'vigaca')
print(queue)

#=========================================================================================================================

#Classwork 1: Basic List Operations
# Create a list named fruits that contains the following items: "apple", "banana", "cherry", "date", and "elderberry".
# Print the entire list.
# Access and print the first and last items in the list.
# Add a new fruit "fig" to the list.
# Remove "banana" from the list.
# Change the value of the second item to "blueberry".
# Print the length of the list.


fruits=["apple", "banana", "cherry", "date",  "elderberry"]

#1)
print(fruits)

#2)

print(fruits.index("apple"))
print(fruits.index("elderberry"))


#3)

fruits.insert(5,'fig')


#4)

fruits.remove("apple")

#5)

fruits.insert(1,'blueberry')

#6)

print(len(fruits))




#================================================================================================================


# Classwork 2: List Functions and Methods
# Create a list named numbers that contains the following integers: 10, 20, 30, 40, 50, 60, 70, 80, 90.
# Use the append() function to add the number 100 to the end of the list.
# Use the insert() function to add the number 5 at the beginning of the list.
# Use the remove() function to remove the number 30 from the list.
# Use the sort() function to sort the list in ascending order.
# Use the reverse() function to reverse the order of the list.
# Use the index() function to find the index of the number 50.
# Use the count() function to count how many times 20 appears in the list.

number = [ 10, 20, 30, 40, 50, 60, 70, 80, 90]

#1)

number.append(100)

#2)

number.insert(0,5)

#3)

number.remove(30)

#4)

number.reverse()



#5)

print(number.index(50))


#6)

print(number.count(20))

print(number)


#============================================================================================================================

# 4)Classwork 3: Slicing and List Comprehensions
# Create a list named numbers that contains the integers from 1 to 10.
# Use list slicing to create a new list named first_half that contains the first five elements from numbers.
# Use list slicing to create another list named second_half that contains the last five elements from numbers.
# Use a list comprehension to create a new list named squares that contains the squares of each number in the numbers list.
# Print all three lists: first_half, second_half, and squares.

num = [1,2,3,4,5,6,7,8,9,10]

first_half = 'numbers: {0} {1} {2} {3} {4}'. format(num[0],num[1],num[2],num[3],num[4])

second_half = 'numbers: {5} {6} {7} {8} {9}'. format(num[5],num[6],num[7],num[8],num[9])

squear = [1,4,9,16,36,49,64,81,100]

print(first_half)
print(second_half)
print(squear)



#============================================================================================================================

# 5) Classwork 5: List Manipulation and Aggregation
# Create a list named temperatures that contains the following values representing daily temperatures: [72, 68, 75, 70, 78, 74, 71].
# Calculate and print the highest temperature using the max() function.
# Calculate and print the lowest temperature using the min() function.
# Calculate and print the average temperature using the sum() function divided by the length of the list.
# Use a list comprehension to create a new list named above_70 that contains only the temperatures above 70 degrees.
# Print the above_70 list


temperaturs =  [72, 68, 75, 70, 78, 74, 71]

temp = max(temperaturs)

temper = min(temperaturs)

sum = sum(temperaturs)

above_70=[70,71,72,74,75,75]
print(above_70)