# [HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616.txt)
* python has built-in socket
* application layer


## Socket
* single socket has two ends
    * one to server web application
    * one to client browser
* two-way connection between two programs
* read + write
* write to client socket
    * browser send data to socket (application server)
        * server socket send data to server process
* read from socket ( server has sent data )
    * browser was given data from web application.
* read form socket ( server has not sent any data )
    * browser sit and wait

#### Caveat
* If the programs on both ends of the socket simply wait for some data without sending anything, they will wait for a very long time, so an important part of programs that communicate over the Internet is to have some sort of protocol.
* A protocol is a set of precise rules that determine who is to go first, what they are to do, and then what the responses are to that message, and who sends next, and so on. In a sense the two applications at either end of the socket are doing a dance and making sure not to step on each other's toes.
* There are many documents that describe these network protocols. The Hypertext Transfer Protocol is described in the following document:

## Example (HTTP Server)

* Since our program is playing the role of the "web browser", the HTTP protocol says we must send the GET command followed by a blank line. \r\n signifies an EOL (end of line), so \r\n\r\n signifies nothing between two EOL sequences. That is the equivalent of a blank line.

* In the preceding example, the encode() and decode() methods convert strings into bytes objects and back again.
    * The next example uses b'' notation to specify that a variable should be stored as a bytes object. encode() and b'' are equivalent.

```python

>>> b'Hello world'
b'Hello world'
>>> 'Hello world'.encode()
b'Hello world'

```

```python

import socket
# AF_INET === IP_ADDRESS_4
# SOCK_STREAM === TCP
mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('data.pr4e.org', 443))
# \r return cursor to head of line
# \n next line
cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
mysock.send(cmd)

while True:
    # buffer siae === 512 characters
    data = mysock.recv(512)
    if len(data) < 1:
        break
    print(data.decode(),end='')

mysock.close()

# Code: http://www.py4e.com/code3/socket1.py

```

## Retrieve an Image over HTTP

```python

import socket
import time

HOST = 'data.pr4e.org'
PORT = 80
mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect((HOST, PORT))
mysock.sendall(b'GET http://data.pr4e.org/cover3.jpg HTTP/1.0\r\n\r\n')
count = 0
picture = b""

while True:
    data = mysock.recv(5120)
    if len(data) < 1: break
    #time.sleep(0.25)
    count = count + len(data)
    print(len(data), count)
    picture = picture + data

mysock.close()

# Look for the end of the header (2 CRLF)
pos = picture.find(b"\r\n\r\n")
print('Header length', pos)
print(picture[:pos].decode())

# Skip past the header and save the picture data
picture = picture[pos+4:]
fhand = open("stuff.jpg", "wb")
fhand.write(picture)
fhand.close()

```

## Retrieving web pages with urllib


## Need Phantom
* https://pypi.org/project/phantomjs/
