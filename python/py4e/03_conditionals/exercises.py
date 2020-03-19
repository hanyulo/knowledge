## Exercise 0-1
# fah = input('please enter the fahrenheit degree: ')
# try:
#   fahr = float(fah)
#   cel = (fahr - 32.0) * 5.0 / 9.0
#   print(cel)
# except:
#   print('your input most be number')


## Exercise 1
# hoursInput, rateInput = input('please enter hours and rate separately').split()
# pay = 0
# hours = float(hoursInput)
# rate = float(rateInput)
# maxHours = 40
# if hours < maxHours:
#     pay = hours * rate
# else:
#     bonusHours = hours - maxHours
#     pay = maxHours * rate + bonusHours * rate * 1.5
# print(pay)


## Exercise 2
# try:
#     hoursInput, rateInput = input('please enter hours and rate separately: ').split()
#     pay = 0
#     hours = float(hoursInput)
#     rate = float(rateInput)
#     maxHours = 40
#     if hours < maxHours:
#         pay = hours * rate
#     else:
#         bonusHours = hours - maxHours
#         pay = maxHours * rate + bonusHours * rate * 1.5
#     print(pay)
# except:
#     print('you have to enter numbers not characters')


## Exercise 3
try:
    scoreInput = input('enter your score from 0.0 to 1.0: ')
    score = float(scoreInput)
    res = 'null'
    if score >= 0.9:
        res = 'A'
    elif score >= 0.8:
        res = 'B'
    elif score >= 0.7:
        res = 'C'
    elif score >= 0.6:
        res = 'D'
    else:
        res = 'F'

    print(res)
except:
    print('you have to enter nubmers')
