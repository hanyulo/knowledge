# Traceroute


## TTL
* TTL field is decremented by one, by every router that forwards the packet

## `ping`
* `nslooku [domainName]`
  * to get ip address of the domainName
* With ping, you now have a way to determine if you can reach a certain computer from another one.
* You can also understand the **general quality of the connection**


## `Traceroute`
  * is an awesome utility that lets you discover the **paths** (intermediary nodes) between two nodes, and gives you information about each hop along the way
  * The way traceroute works, is through a clever manipulation technique of the TTL field at the IP level.
  * When the TTL field reaches zero, the packet is discarded and an ICMP Time Exceeded message is sent back to the originating host
    * Traceroute uses the TTL field by first setting it to one for the first packet, then two for the second, three for the third and so on
    * By doing this clever little action, traceroute makes sure that the very first packet sent will be discarded by the first router hop. This results in an ICMP Time Exceeded message, the second packet will make it to the second router, the third will make it to the third, and so on...till destination.
  * For each hop, traceroute will send three identical packets
  * response
    * IP of the device at each hop
    * a host name if traceroute can resolve one


  * different OS
    * On Linux and MacOS, traceroute sends UDP packets to very high port numbers
    * On Windows, the command has a shortened name tracert, and defaults to using ICMP echo request. On all platforms, traceroute has more options than can be specified using command line flags.

  * similar tools
    * mtr on Linux and MacOS
    * pathping on Windows
    * These two tools act as long running traceroutes. So you can better see how things change over a period of time. Mtr works in real time and will continually update its output with all the current aggregate data about the traceroute. You can compare this with pathping, which runs for 50 seconds and then displays the final aggregate data all at once.
