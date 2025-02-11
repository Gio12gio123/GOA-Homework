def printBill(customer_name):
    print("=====")
    print(customer_name)
    print("=====")


printBill(input("Enter customer name: "))



def welcome(greet):
    print('welcome,' + greet)
welcome(input('enter your name'))





def area(lengh,width):

    return (lengh+width)*2

area(int(input('please enter a num:')),int(input('please enter a num:')))


def sum(x):
    res = 0
    for i in range(x):
        res+=1
    return res

print(sum(4))