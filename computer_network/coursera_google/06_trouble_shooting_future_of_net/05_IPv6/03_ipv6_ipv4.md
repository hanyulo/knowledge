## Overview
* hard to transit from IPv4 to IPv6
  * many devices still has no implementation for IPv6

* solution
  * IPv4 mapped address space


## IPv4 Mapped Address Space (IPv4 traffic on IPv6 Network)
* This gives us a way for IPv4 traffic to travel over an IPv6 network.
* The IPv6 specifications have set aside a number of addresses that can be directly correlated to an IPv4 address
  * Any IPv6 address that begins with 80 zeros, and is then followed by 16 ones is understood to be part of the IPv4 mapped address space
  * The remaining 32 bits of the IPv6 address is just the same 32 bits of the IPv4 address it's meant to represent



## IPv6 tunnels (IPv6 traffic on IPv4 Network)
*  It's easier for an individual organization to make the move to IPv6 than it is for the networks at the core of the Internet to
* They consist of IPv6 tunnels servers on either end of a connection. These IPv6 tunnel servers take incoming IPv6 traffic and encapsulate it within traditional IPv4 datagrams. This is then delivered across the IPv4 Internet space where it's received by another IPv6 tunnel server. That server performs the de-encapsulation and passes the IPv6 traffic further along in the network. Along with IPv6 tunnel technologies, the concept of an IPv6 tunnel broker has also emerged.

#### IPv6 tunnel broker
* These are companies that provide IPv6 tunneling endpoints for you, so you don't have to introduce additional equipment to your network
* in the end, we should not need tunnels at all.



#### Protocols for IPv6 Tunnels
* [6in4](https://en.wikipedia.org/wiki/6in4)
* [Tunnel Setup Protocol](https://en.wikipedia.org/wiki/Tunnel_Setup_Protocol)
* [AYIYA](https://en.wikipedia.org/wiki/Anything_In_Anything)
