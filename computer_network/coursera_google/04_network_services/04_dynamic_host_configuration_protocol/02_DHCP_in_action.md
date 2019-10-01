# DHCP in Action


## Preview
* DHCP is an application layer protocol
  * relies on
    * transport
    * network
    * data link
    * physical layers
* but DHCP is to help configure network layer

## Goal
* understand how DHCP works and how it accomplishes communications without a network layer configuration in place


## DHCP Discover
* The process by which a client configured to use DHCP attempts to get network configuration information
* four steps
  1. server discovery step (**DHCP-DISCOVER**)
    * DHCP clients send DHCP discover message out onto the network
      * &#8757;
        * clients/machines don't have an IP
        * clients/machines don't know the IP of the DHCP server
      * &#8756;
        * specially crafted broadcast message is formed and send out
          * DHCP server listens on **UDP port 67**
          * DHCP discovery messages are always sent from **UDP port 68**
            * encapsulated inside of an IP datagram
              * destination IP: 255.255.255.255
              * source IP: 0.0.0.0
          * steps
            1. This broadcast **DHCPDISCOVER message** would get delivered to every node on the local area network
            2. if a DHCP server is present, it would receive this message
            3. DHCP server would examine its own configuration and would make a decision on what, if any, IP address to offer to the client
              * depend on if DHCP server configured to run with dynamic, automatic or fixed address allocation
            4. DHCP send **DHCPOFFER message** as response
              * destination port: 68
              * source port: 67
              * destination broadcast IP of 255.255.255.255
              * source IP: server's IP

  2. DHCP send **DHCPOFFER message** as response  (**DHCP-OFFER**)
    * DHCPOFFER message is boradcast
      * send to all machines on the network
      * The original client would recognize that this message was intended for itself
        * DHCPOFFER has the field that specifies the MAC address of the client that sent the DHCPDISCOVER message
    * UDP datagram
      * destination port: 68
      * source port: 67
      * destination broadcast IP of 255.255.255.255
      * source IP: server's IP
    * client machine receives **DHCPOFFER message**
      * get offered IP
      * rare case
        * a DHCP client could reject the IP offer
          * It's possible for multiple DHCP servers to be running on the same network
          * DHCP client to be configured to only respond to an offer of an IP within a certain range
  3. **DHCP-REQUEST**
    * DHCP client responds to the DHCPOFFER message with a DHCPREQUEST message
    * what is the message for
       * confirm with server that client-end accepts the offered IP
        * At this time, client-end hasn't assigned any IP address
    * IP header
      * source IP: 0.0.0.0
      * destination IP: broadcast IP -> 255.255.255.255
        * multiple DHCP server
        * The servers receive the DHCPREQUEST broadcast from the client. Those servers not selected by the DHCPREQUEST message use the message as notification that the client has declined that server's offer
  4. **DHC-PACK || DHCP acknowledgement message**
    * sent to a broadcast IP of 255.255.255.255
    * with a source IP corresponding to the actual IP of the DHCP server
    * the DHCP client would recognize that this message was intended for itself by inclusion of its MAC address in one of the message fields
    * The networking stack on the client computer can now use the configuration information presented to it by the DHCP server to set up its own network layer configuration

## After DHCP
* client should have all the information it needs to operate in a full fledged manner on the network it's connected to
  * the status or the info is called **DHCP Lease**
* DHCP lease might last for days or only for a short amount of time
* if lease is expired
  * the DHCP client do DHCP discovery process to get new DHCP Lease
* A client can also release its lease to the DHCP server, which it would do when it disconnects from the network. This would allow the DHCP server to return the IP address that was assigned to its pool of available IPs.


## References
[Why DHCP-REQUEST send by broadcast channel](https://networkengineering.stackexchange.com/questions/48874/why-is-broadcast-used-at-the-dhcprequest-step)
