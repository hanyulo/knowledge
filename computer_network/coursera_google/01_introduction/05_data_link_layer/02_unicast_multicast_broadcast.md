## Unicast
* A unicast transmission is always meant for just one receiving address
* the least significant (right side) bit in the first octet of a destination address (MAC Address) is set to zero, it means that Ethernet frame is intended for only the destination address.
  * all devices on collision domain receive signal, but only intended destination accept and process signal.

* note
  * one sender one receiver

## Multicast
* the least significant bit in the first octet of a destination address (MAC Address) is set to one
* A multicast frame is similarly set to all devices on the local network signal. What's different is that it will be accepted or discarded by each device depending on criteria aside from their own hardware MAC address.
* the router that support multicast mechanism, will copy the packet and send to intended destinations.


* note
  * one sender + multiple receivers


## Broadcast
* An Ethernet broadcast is sent to every single device on a LAN.
* This is accomplished by using a special destination known as a broadcast address.
* use a technology known as address resolution protocol


## References
[youtube](https://www.youtube.com/watch?v=Z6O__3UEltE)
