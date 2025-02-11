

# Python-ის კოლექციები: List, Tuple, Set

# 1. List (ლისტი)
# ლისტი არის რამე, სადაც შეიძლება ბევრი ნივთი (ციფრი, სიტყვა და სხვა) შევინახოთ.
# ლისტი შეიძლება შევცვალოთ, მაგ. თუ რამე დამატება ან ამოღება გვინდა.
# ლისტში შეიძლება ერთი და იგივე ნივთი იყოს.

my_list = [1, 2, 3, "apple", 3.14]
my_list[0] = 10  
my_list.append("banana") 
my_list.remove(3) 

print("List:", my_list)

# 2. Tuple (ტუპლი)
# ტუპლი კი ძალიან ჰგავს ლისტს, მაგრამ ის არ შეიძლება შევცვალოთ.
# თუ გავაკეთეთ ტუპლი, მისი ნივთები აღარ შეიცვლება.

my_tuple = (1, 2, 3, "apple", 3.14)
second_item = my_tuple[1]  
print("Tuple:", my_tuple)
print("Second item:", second_item)

# 3. Set (სეტი)

my_set = {1, 2, 3, "apple", 3.14}
my_set.add("banana") 
my_set.remove(2)  



# 1. List (ლისტი)

list1 = [1, 2, 3, "apple", 3.14]


list1.append("banana")  
list1.remove(3)  
list1[0] = 10  
list1.sort()  

print("Updated list1:", list1)

# 2. Tuple (ტუპლი)
tuple1 = (1, 2, 3, "apple", 3.14)

second_item = tuple1[1]  


print("Second item of tuple1:", second_item)

# 3. Set (სეტი)

set1 = {1, 2, 3, "apple", 3.14}

set1.add("banana")  
set1.remove(2) 


print("Updated set1:", set1)




