# Socket

## Overview
* TCP socket
  * is the instantiation of an endpoint in a potential TCP connection
  * require actual programs to instantiate them
  * You can contrast this with a port which is more of a virtual descriptive thing.
* instantiation
  * is the actual implementation of something defined elsewhere


## Port and Socket
* you can send traffic to any port you want, but you're only going to get a response if a program has opened a socket on that port.
  * port
    * city gate/towers of defensive wall
  * socket
    * just like personnel of city gate or tower (generals and soldiers)


## TCP Socket States
* LISTEN
  * means that a TCP socket is ready and listening for incoming connections
  * server side only
* SYN_SENT
  * a synchronization request has been sent, but the connection hasn't been established yet.
  * client side only.
* SYN_RECEIVED
  * This means that a socket previously in a listener state, has received a synchronization request and sent a SYN_ACK back. But it hasn't received the final ACK from the client yet
  * server side only.
* ESTABLISHED
  * This means that the TCP connection is in working order, and both sides are free to send each other data.
  * You'd see this state on both the client and server sides of the connection
* FIN_WAIT
  * This means that a FIN has been sent, but the corresponding ACK from the other end hasn't been received yet
  * both sides
* CLOSE_WAIT
  * This means that the connection has been closed at the TCP layer, but that the application that opened the socket hasn't released its hold on the socket yet.
  * both sides
* CLOSED
  * This means that the connection has been fully terminated, and that no further communication is possible
  * both sides

## Note
* Has other states
* socket states and their names, can vary from operating system to operating system
* TCP is universal same, but sockets state is defined by operating system since operating system is kind of the user of TCP.
