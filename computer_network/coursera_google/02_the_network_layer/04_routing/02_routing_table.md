# Routing Table

## Review (Router)
* just a hardware
* regular computers can be it
* has two network interfaces
* has one routing table
* hook up with two or more different network space

## Overview
  * each next hop and each destination network, the router will have to keep track of how far away that destination currently is.
  * when it receives updated information from neighboring routers, it will know if it currently knows about the best path or if a new better path is available.

## Routing Table
* four columns
  1. Destination Network
    *  this column would contain a row for each network that the router knows about.
      1. network ID
      2. net mask
    * When the router receives an incoming packet, it examines the destination IP address and determines which network it belongs to.
      * A routing table will generally have a catchall entry, that matches any IP address that it doesn't have an explicit network listing for.
  2. Next Hop
    * two possible scenarios
      1. the IP address of the next router that should receive data intended for the destination network
      2. the network is directly connected and that there aren't any additional hops needed.
  3. Total Hops
    * keep track of how far away that destination currently is
    * there will be lots of different paths to get from point A to point B
    * It can be dynamically changed
      * Routers try to pick the shortest possible path at all times to ensure timely delivery of data but the shortest possible path to a destination network is something that could change over time, sometimes rapidly, intermediary routers could go down, links could become disconnected, new routers could be introduced, traffic congestion could cause certain routes to become too slow to use.
  4. Interface
    *  the router also has to know which of its interfaces it should for traffic matching the destination network out of.
    * different ports of the router


## Routing Table
* Destination: The IP address of the packet's final destination
* Next hop: The IP address to which the packet is forwarded
* Interface/gateway: The outgoing network interface the device should use when forwarding the packet to the next hop or final destination
* Metric: Assigns a cost to each available route so that the most cost-effective path can be chosen
* Routes: Includes directly-attached subnets, indirect subnets that are not attached to the device but can be accessed through one or more hops, and default routes to use for certain types of traffic or when information is lacking.

## Goal
* to know how routers know the shortest path.


## References
[TechTarget Routing Table](https://searchnetworking.techtarget.com/definition/routing-table)
[Great!!! Routing Table Introduction](https://www.youtube.com/watch?v=pbqc6IlFuVc)
