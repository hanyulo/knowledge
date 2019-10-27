# Overview



## Internet Control Message Protocol (ICMP)
* overview
  * When a network error occurs, the device that detects it needs some way to communicate this to the source of the problematic traffic
    * ICMP is used to communicate with issues
* related issues
  * a router doesn't know how to route to a destination or that a certain port isn't reachable
  * the TTL of an IP datagram expired and no further router hops will be attempted
* ICMP is mainly used by router or remote hosts to communicate while transmission has failed back to the origin of the transmission
* The protocol used to communicate network errors



## Internet Control Message Protocol (ICMP) (website resource)
* overview
  * is a network protocol used for diagnostics and network management
* utility
  * `ping`
    * uses an ICMP request and ICMP reply message.
* examples
  * When a certain host of port is unreachable, ICMP might send an error message to the source.
  * an application that uses ICMP is traceroute
* layers
  * ICMP messages are encapsulated in IP packets so most people would say that it’s a layer 4 protocol like UDP or TCP. However, since ICMP is a vital part of the IP protocol it is typically considered a layer 3 protocol.


## [ICMP Message Headers](https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml)
* Type
  * single-byte-long
  * specifies what type of message is being delivered.
  * For example
    * type 8 is -> ICMP request
    * type 0 is -> ICMP reply
    * type 3 -> destination unreachable messages.

* code
  * specifies what kind of ICMP message it is
  * For example
    * type 3 the destination unreachable message has 16 different codes
      * code 0 it means that the destination network was unreachable
      * code 1 means that the destination host was unreachable.

* checksum
  * 16 bit
  * the checksum to see if the ICMP header is corrupt or not
  *

* Rest of header
  * 32 bit
  *  this field is optionally used by some of the specific types and codes to send more data

* data payload for an ICMP packet
  * The payload for an ICMP packet exists entirely so that the recipient of the message knows which of their transmissions caused the error being reported. It contains the entire IP header and the first eight bytes of the data payload section of the offending packet.

* What the remaining part of the header looks like depends on the ICMP message type that we are using.


## How to manifest the ICMP
* ICMP wasn't really developed for humans to interact with
* `ping`
  * is a tool
  * lets you send a special type of ICMP message called an Echo Request
  * An ICMP echo request essentially just ask the destination, "Hey, are you there?" If the destination is up and running and able to communicate on the network, it will send back an ICMP echo reply message type.


## References
[ICMP](https://networklessons.com/cisco/ccie-routing-switching-written/icmp-internet-control-message-protocol)
