## System
* computerA (client) <-> routerA <-> computerB (server)
* computerA
  * IP address: 192.168.1.110.
* computerB
  * IP address: 171.67.215.200
* RouterX
  * InterfaceA
    * connect to computerA
    * IP address: 192.168.1.1
    * network space: 192.168.1.0/24
  * InterfaceB
    * connect to computerB
    * IP address: 171.67.215.1
    * network space: 171.67.100.1/16


## Goal

computerA request web page from computerB

## Steps

#### Request and get Mac Address

1. User opens browser on computerA and types 171.67.215.1 in address bar
2. computer A exams it's own netmask and figures that computerB is in another independent network
3. computerA tries to form a TCP connection
4. computerA needs to send data to its network gateway (IP: 192.168.1.1) but has no MAC Address of gateway in its ARP table
  1. computerA broadcasts an ARP request in its network space to get MAC Address of (IP: 192.168.1.1)
  2. RouterX receives the ARP request and figures that it is the one who has matched IP
  3. RouterX responses with matched MAC Address (00:11:22:33:44:55)
  4. computerA receives the MAC Address of gateway
5. computerA ready to sends outbound packet


#### Form a TCP connection (Transport Layer)
1. Browser requests computerA to form a TCP connection
2. Build a proper TCP segment (include header)
  1. work of operating system
    1. operating system assigns ephemeral port 60,000 as outbound port (source port of TCP connection)
    2. operating system opens a socket on the port
  2. build TCP header
    * source port: 60,000
    * destination port: 80
    * assign sequence number
    * control flag: SYN
    * put the rest of data in TCP segment
    * finally, calculate the checksum and put it into the field
  3. obtain the proper TCP segment


#### Encapsulation (Network Layer + Data Link Layer)
  1. put the newly created TCP segment into payload of IP datagram.
  2. create proper IP header
    * source IP: 192.168.1.110
    * destination IP: 171.67.215.200
    * TLL: 64 (standard value)
    * rest of the field
    * finally, calculate the checksum and put it into the field
  3. get the proper IP datagram and put it into payload of ethernet frame
  4. create proper Ethernet Frame
    * source MAC Address: xx:xx:xx:xx:xx:xx
    * destinaiton MAC Address: 00:11:22:33:44:55 (gateway)
    * calculate the checksum for Ethernet Frame


#### Physical Layer
* computerA send data to routerX through cable cat6


#### RouterX Processing

###### de-encapsulation

1. receive Ethernet Frame and know the data is intended fo itself through the destination Mac Address of the Ethernet Fame Header.
2. calculate the checksum of the Ethernet Frame datagram and check if it match with the checksum in Ethernet Frame Header
  * matched -> intact data
3. Strip off the dat link layer and get IP datagram
4. calculate the checksum again and see if it match with the checksum field in IP header
5. inspect the IP destination address and look it up in routing table
  * find the matched network space/interface the interfaceB (171.67.215.1)

###### encapsulation

6. create new IP datagram
  * put original TCP segment into payload
  * put original destination IP address back to the field
  * decrement the TTL by 1
  * calculate a new checksum

7. create new Ethernet Frame
  1. check its ARP table and find the matched mac address of IP destination(171.67.215.200)
  2. MAC address of interfaceB as the source mac address
  3. MAC address of IP destination(171.67.215.200) as the destination mac address
  4. put newly constructed IP datagram in to payload
  5. calculate a new checksum

8. send the ethernet frame to computerB through cat6


#### ComputerB receive data
1. receive ethernet frame and check its destination Mac Address which is matched with its own Mac Address
2. calculate the checksum and match it with the checksum field.
3. strip off the ethernet frame and get IP datagram
4. check the destination IP address which is same as its
5. calculate the checksum and match it with the checksum field
6. strip off the IP layer and get TCP segment
7. check the control flag which is SYN
8. response the tcp connection request with SYN/AKG

DONE!!!
