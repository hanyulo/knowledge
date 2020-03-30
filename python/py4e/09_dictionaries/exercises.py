import requests
# Exercise 01
# URL = 'https://www.py4e.com/code3/words.txt'
# r = requests.get(url = URL)
# data = r.text
# myMap = dict.fromkeys(data.split(), True)
# while True:
#     inputString = input('Please enter any value: ')
#     if inputString != 'done':
#         if inputString in myMap:
#             print('True')
#         else:
#             print('False')
#     else:
#         break
# print('project is done')

# Exercise 02
# URL = 'https://www.py4e.com/code3/mbox-short.txt'
# r = requests.get(url = URL)
# data = r.text
# myMap = dict()
# for line in data.split('\n'):
#     lineList = line.split(' ')
#     if line.startswith('From') and len(lineList) >= 3:
#         target = lineList[2]
#         myMap[target] = myMap.get(target, 0) + 1
# print(myMap)

# Exercise 03
# URL = 'https://www.py4e.com/code3/mbox-short.txt'
# r = requests.get(url = URL)
# data = r.text
# myMap = dict()
# for line in data.split('\n'):
#     lineList = line.split(' ')
#     if line.startswith('From:'):
#         target = lineList[1]
#         myMap[target] = myMap.get(target, 0) + 1
# print(myMap)

# Exercise 05
# URL = 'https://www.py4e.com/code3/mbox-short.txt'
# r = requests.get(url = URL)
# data = r.text
# myMap = dict()
# for line in data.split('\n'):
#     lineList = line.split(' ')
#     if line.startswith('From:'):
#         target = lineList[1]
#         domain = target.split('@')[1]
#         myMap[domain] = myMap.get(domain, 0) + 1
# print(myMap)
