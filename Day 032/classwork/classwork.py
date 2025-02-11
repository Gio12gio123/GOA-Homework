#შექმენით ფუნქცია, რომელიც გამოიტანს x და y ჯამს, მოახდინეთ ოპერაცია შემდეგ ოპერატორებზე: +, -. *. //

def sum(x,y):
    print(x+y)
    print(x*y)
    print(x-y)
    print(x//y)
sum(12,4)

#შექმენით ფუნქცია, რომელიც მიესალმება მომხმარებელს. 
# ტექსტი: 'გამარჯობა {სახელი}, კეთილი იყოს შენი მობრძანება,  გისურვებ წარმატებას და წინ სვლას"

def hello(სახელი):
    print("გამარჯობა",სახელი,"კეთილი იყოს შენი მობრძანება")
hello("გიო")

#შექმენით ფუნქცია, რომელიც სიყვარულის წერილს მიუძღვნის მომხმარებელს:
def love(name,gio):
    print("My dear",name
          ,"i love and miss you every day",
          "from",gio)
love("someone","gio")


def calculate_area(length,width):
    print(length*width)
calculate_area(int(input("please enter length")),int(input("please enter width")))

#მაქსიმალური რიცხვის პოვნა:
#განსაზღვრეთ ფუნქცია სახელით find_max.

#ფუნქციამ უნდა მიიღოს ორი პარამეტრი: num1 და num2 (ორივე მთელი ან წილადი რიცხვი).

#ფუნქციამ უნდა შეადაროს ორი რიცხვი და დააბრუნოს მათი მაქსიმალური მნიშვნელობა.


def num(num1,num2):
    if num1 > num2:
        print("num 1", "=" ,"max")
    else:
        print("num2","=","max")


#შექმენით ფუქნცია და შეამოწმეთ რიცხვი ლუწია თუ კენტი.
def smt(num):
     return "Even" if num  % 2 == 0 else "Odd"
smt(int(input("please enter a number")))



def sentence(name, surname, age, country, city, hobby):
    print("My name is", name, surname, "I am", age, "years old, I am from", country, city, "I like", hobby)


sentence("gio", "izoria", 12, "Georgia", "tbilisi", "Coding anf bascketball")