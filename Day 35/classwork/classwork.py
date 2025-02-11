
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

#fruits.index("apple","elderberry")


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

number.index(50)


#6)

number.count(20)

print(number)
