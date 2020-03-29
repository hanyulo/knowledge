# Exercise01

# def chop(targetList):
#     try:
#         del targetList[0]
#         del targetList[len(targetList) - 1]
#     except:
#         print('You have to pass a list ot chop function')
#
# def middle(targetList):
#     try:
#         return targetList[1:len(targetList) - 1]
#     except:
#         print('You have to pass a list ot chop function')
#
#
# testList = ['a', 'b', 'c', 'd', 'e', 'f']
# middleList = middle(testList);
# chop(testList)
# print('middle: ', middleList)
# print('chop: ', testList)

# Exercise 04
# import requests
# URL = 'https://www.py4e.com/code3/romeo.txt'
# r = requests.get(url = URL)
# data = r.text
# myList = data.split()
# resList = list()
# for element in myList:
#     if element not in resList:
#         resList.append(element)
# resList.sort()
# print(resList)

# Exercise 05
# import requests
# URL = 'https://www.py4e.com/code3/romeo.txt'
# URL = 'https://www.py4e.com/code3/mbox.txt'
# r = requests.get(url = URL)
# data = r.text
# line = ''
# arrayLine = list()
# res = list()
# for char in data:
#     if char != '\n':
#         line = line + char
#     if char == '\n':
#         arrayLine = line.split()
#         if len(arrayLine) >= 1 and arrayLine[0] == 'From':
#             res.append(arrayLine[1])
#         arrayLine = list()
#         line = ''
# print(res)


# Exercise 06
# inputs = list()
# def acceptInput():
#     while True:
#         try:
#             userInput = input('Please enter number: ')
#             if userInput == 'done':
#                 break
#             else:
#                 ele = float(userInput)
#                 inputs.append(ele)
#         except:
#             print('Please, you have to enter a number: ')
#     print('Max: ', max(inputs))
#     print('Min: ', min(inputs))
#
# acceptInput()
