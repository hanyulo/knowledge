## first example
# import socket
#
# mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# mysock.connect(('data.pr4e.org', 80))
# cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
# mysock.send(cmd)
#
# while True:
#     data = mysock.recv(512)
#     if len(data) < 1:
#         break
#     print(data.decode())
#
# mysock.close()

# Code: http://www.py4e.com/code3/socket1.py


## urllib read text example
# import urllib
# fhand = urllib.urlopen('http://data.pr4e.org/romeo.txt')
# for line in fhand:
#     print(line.decode().strip())


## urllib read text with count
# import urllib
# counts = dict()
# fhand = urllib.urlopen('http://data.pr4e.org/romeo.txt')
# for line in fhand:
#     words = line.decode().strip()
#     for word in words:
#         print(word)
#         counts[word] = counts.get(word, 0) + 1
# for key in counts:
#     print(key, counts[key])


## python request image
import requests
from PIL import Image
from io import BytesIO
response = requests.get('http://data.pr4e.org/cover3.jpg')
i = Image.open(BytesIO(response.content))
i.save('test.jpg')
