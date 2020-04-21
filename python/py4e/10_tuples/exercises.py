import requests
# Exercise 00
# txt = 'but soft what light in yonder window breaks'
# words = txt.split()
# t = list()
# for word in words:
#     t.append((len(word), word))
#
# t.sort(reverse=True)
#
# res = list()
# for lenth, word in t:
#     res.append(word)
# print(res)

# Exercise 01
# URL = 'https://www.py4e.com/code3/mbox-short.txt'
# r = requests.get(url = URL)
# data = r.text
# myMap = dict()
# for line in data.split('\n'):
#     lineList = line.split(' ')
#     if line.startswith('From:') and len(lineList) >= 2:
#         target = lineList[1]
#         myMap[target] = myMap.get(target, 0) + 1
# t = list()
# for address, count in myMap.items():
#     t.append((count, address))
# t.sort(reverse=True)
# print(t[0][1], t[0][0])

# Exercise 02
# URL = 'https://www.py4e.com/code3/mbox-short.txt'
# r = requests.get(url = URL)
# data = r.text
# myMap = dict()
# for line in data.split('\n'):
#     lineList = line.split(' ')
#     if line.startswith('From') and len(lineList) >= 3:
#         target = lineList[6]
#         hour = target.split(':')[0]
#         myMap[hour] = myMap.get(hour, 0) + 1
# t = list()
# for hour, count in myMap.items():
#     t.append((hour, count))
# t.sort()
# for entity in t:
#     print(entity[0], entity[1])

# Exercise 03
# import re
# URL = 'https://www.py4e.com/code3/mbox-short.txt'
# r = requests.get(url = URL)
# data = r.text
# myMap = dict()
# pattern = re.compile('[a-z]')
# for char in data:
#     res = pattern.match(char)
#     if res != None:
#         myMap[char] = myMap.get(char, 0) + 1
# t = list()
# for char, count in myMap.items():
#     t.append((char, count))
# t.sort()
# total = sum(char[1] for char in t)
# # print(t)
# for entity in t:
#     percentage = entity[1] / total * 100
#     print(entity[0], percentage)
