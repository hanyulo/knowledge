# Packet Switching
* Packet: A self-contained unit of data that carries information necessary for it to reach its destination.
* Packet Switching: Independently for each arriving packet, pick its outgoing link. If the link is free, send it. Else hold the packet for later.


## Packet
* Self-contained
* deiscrete
* a chunk of data
* Packet is routed separately and independently.
 * At router B
  * B -> D
  * B -> C
  * The current packet can be sent to D, and send the next packet to C.

* Switch Example

 Source -> A -> B -> C -> Destination


## Packet Switching
* Source Routing
  * The packet contains an explicit route
  * Specify the IDs of each packet switch(router ??), so each switch that receive the packet just exam the route and send the packet to next switch.
  * Security problem: someone may trick switch to send packet to secure computer.

* Optimization: Forwarding Table
  * Each router/switch contain a table of destination addresses and the next hop.
  * When it receive the packet just exam the destination address of the packet. It will choose the matched destination address and send the packet to the indexed hop (next switch).


## Two Features of packet Switching
1. Simple packet forwarding
   * Router/Switch no need to no weather two packets are related to each other

2 Efficient sharing of links
  * Person A: read a page. Person B: download file with full speed of the link
  * Person A: Load a new page  B: download file with lower speed.  (They share the link)
  * B: Finish downloading A: Use the full speed of the Link

### Simple Packet Forwarding
#### Flow
* Flow: is a collection of datagrams belonging to the same end-to-end communication, e.g. a TCP connection.
* Packet switches don't need state for each flow - each packet is self-contained
* No per-flow state to be added/removed.
* No per-flow state to be stored.
* No per-flow state to be changed upon failure.

#### No per-flow state (Independent)
 * Keep the switch/router simple.
 * Lower cost of manufacturing switch, since it dose not need much memory.
 * Good for handling error.
  * Say, if your tablet send a request then shut down because of running out of energy. Those switches that has kept per-flow state need to figure a way to know when to clean it up.


### Efficient Sharing of links
* Statistical Multiplexing
  * Packet switching allows flows to use all available link capacity.
  * Packet switching allows flows to share link capacity

* For example, if your friend is reading, you can use all of the link. If both of you are loading a page, you receive half of the link capacity.

* This idea of taking a single resource and sharing it across multiple users in a probabilistic or statistical way is called statistical multiplexing.

## Conclusion
Tow main features of packet switching
 1. Simple: Only forward packets independently and don't need to know about flows.
 2. Efficient: let user efficiently share the capacity among many flows sharing a link.
