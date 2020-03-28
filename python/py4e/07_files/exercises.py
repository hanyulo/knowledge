## Exercise: 1
# dataHandler = open('./test02.txt')
# row = ''
# for line in dataHandler:
#     print('line: ', line.rstrip().upper())


## Exercise 2
# fileName = input('Please enter file name: ')
# def process(dataHandler):
#     totalNumber = 0
#     count = 0
#     for line in dataHandler:
#         if line.startswith('X-DSPAM-Confidence:'):
#             targetFloatNumber = float(line.split(':')[1])
#             totalNumber = totalNumber + targetFloatNumber
#             count += 1
#     print(totalNumber/count)
#
#
# try:
#     filePath = './' + fileName
#     dataHandler = open(filePath)
#     process(dataHandler)
# except:
#     print('The file do not exist or something went wrong')

## Exercise 3
