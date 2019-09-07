## LAN Communication
* Overview
  * All devices connect to single switch (in LAN)
  * switch will forward data to specific devices by MAC Address

* Downsides
  * MAC Address based communication do not scale well
    * the scale means communicating across different independent network collection (Network Layer)
    * because of MAC Address do not have any location meaning or follow any specific order.

* Scale Solution (Network Layer)
  * **Address Resolution Protocol (ARP)**
    * the way that nodes learn about each other's physical addressing (MAC Address ??)
    * downside
      * isn't translatable to anything besides a single network signet anyway (LAN??)
    * Solution
      * network layer
        * internet protocol or IP
        * IP addresses

* goal for this week
  * identify IP addresses
  * how IP datagrams are encapsulated inside the payload of an ethernet frame
  * correctly identify and describe the many fields of an IP datagram header
