# ICMP Service Model
* Internet Control Message Protocol
* a method for error reporting for Network layer. But it is a transport layer mechanism


## Ping
* use ICMP to check the connection between target and host
`ping www.stanford.edu`
* steps
  * send ICMP datagram type 8, code 0 (echo request) from host (A)
  * encapsulate ICMP datagram into IP datagram
  * target(B) receive IP datagram
  * B creates another ICMP datagram and encapsulate it in IP datagram then send it back to A
    * ICMP: type: 0, code: 0 (Echo Reply)

## Traceroute
* an application
* tells us the path that packets take through the network and the routers that it visits along the way.
* `traceroute www.stanford.edu`
* it uses ICMP
* goal: find routers on the path from A to B


* UDP choose weird port number so B can not recognize. Then B send ICMP (type3, code 3, port unreachable) back to A. Now A knows that the message has reached to B successfully.
