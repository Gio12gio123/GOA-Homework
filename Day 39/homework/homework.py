#1)შემქნით ფუნცქცია რომელიც არგუმენტად მიიღებს ინტეჯერს, ამ ფუნქციის დავალებაა რომ აიღოს ეს ინტეჯერი და დაგვიბრუნოს 
# გაორმაგებული

def double(int):
    print(int * 2)
double(4)

#2)დაწერე ფუნქცია greet(name), რომელიც იღებს ადამიანის სახელს და აბრუნებს მისალმების ტექსტს

def greet(name):
    print('hello','Mr',name)

greet('gio')


#3)შექმენით ფუნქცია is_even(num), რომელიც ამოწმებს, არის თუ არა რიცხვი ლუწი, თუ ლუწია, აბრუნებს True, სხვა შემთხვევაში False.

def is_even(num):
    if num % 2 == 0:
        print('true')
    else:
        print('false')
    
is_even(10)

#4)შექმენით მარტივი ფუნქცია თქვენი სურვილით რომელსაც მისცემთ default valueს

def gio(name1):
    print(name1)
gio('gio')

#5)შექმენით ფუნქცია nickname(name), რომელიც არგუმენტად იღებს სახელს და აბრუნებს პირველი სამი ასო(გამოიყენეთ slicingი)

def nickname(nickname1):
    print("nic")
nickname()