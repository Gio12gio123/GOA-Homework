#2) შექმენით სია დაშეიტანეთ 10 სხვადასხვა მონაცემთა ტიპის მნიშვნელობა, შემდეგ 5 მონაცემს  შეუცვალეთ   მნიშვნელობა და შემდეგ 
# დაპრინტეთ მთლიანი სია

List =["cucumber","tomato","chilly","peper","salt","ginger","choclate","potato","water","banana"]

List[0]="carrot"
List[9]="Orange juice"
List[2]='not chilly peper'
List[4]='peper'
List[6]='apple'

print(List)

#===========================================================================================================================


#3) სიაში ელემენტების ჯამი
#შექმენი სია, რომელიც შეიცავს რიცხვებს. დაწერე კოდი, რომელიც გამოითვლის ამ სიის ელემენტების ჯამს და დაბეჭდავს შედეგს.


num=[1,2,3,4,5,6,7,8,9,10,12]
print(num[0]+num[1]+num[2]+num[3]+num[4]+num[5]+num[6]+num[7]+num[8]+num[9]+num[10])

#================================================================================================================================

#4) სიის ყველა ელემენტის გაორმაგება
#შექმენი სია რიცხვებით. დაწერე კოდი, რომელიც თითოეული ელემენტის გაორმაგებულ მნიშვნელობას შეიცავს ახალ სიაში და დაბეჭდავს მას. 

data=[1,2,3,4,4]
print(data[0]*2,data[1]*2,data[2]*2,data[3]*2,data[4]*2)

#===============================================================================================================================

#5) სიის ელემენტების გამრავლება
#შექმენი სია რიცხვებით და დაწერე კოდი, რომელიც გამოითვლის სიის ყველა ელემენტის ნამრავლს და დაბეჭდავს შედეგს.

numm =[1,2,3,4,5,6,7,8,9,10]
print(numm[0]*numm[1]*numm[2]*numm[3]*numm[4]*numm[5]*numm[6]*numm[7]*numm[8]*numm[9])