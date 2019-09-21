# All Layers in Union

## Example

#### Players

<img src="../assets/networks_routers.png">

<br/>
<br/>

* Networks
  1. Network-A (switch-A)
    * address space: 10.1.1.0/24
  2. Network-B (switch-B)
    * address space: 192.168.1.0/24
  3. Network-C (switch-C)
  * address space: 172.16.1.0/24

* Routers
  1. Router-A
    * seat between Network-A and B
    * Interface for network-A
      * IP: 10.1.1.1
    * interface for network-B
      * IP: 192.168.1.254
  2. Router-B
    * seat between Network-B and C
    * Interface for network-B
      * IP: 192.168.1.1
    * interface for network-C
      * IP: 172.16.1.1

* Ends
  * Computer-1
    * Client
    * Connect to Network-A
    * Assigned IP: 10.1.1.100
  * Computer-2
    * has a web server listening on port 80
    * connect to Network-C
    * Assigned IP: 172.16.1.100


#### Goal
* User at Computer-1
  * enter 172.16.1.100 into the address bar of browser

<img src="../assets/open_browser.png">

#### Steps

##### set 1

1. the web browser of Copmuter-1 communicates with the local networking stack
 * the part of the operating system responsible for handling networking functions
 * web browser tell local networking stack to establish TCP connection to 172.16.1.100 through port 80.
2. Network stack examine its own subnet
  * it lives on the network 10.1.1.0/24
    * 172.16.1.100 is on another network
    * computer 1 knows that it'll have to send any data to its gateway (10.1.1.1) for routing to a remote network
3. Computer-1 looks at its ARP table
  * to determine MAC address of 10.1.1.1
    1. it doesn't find any corresponding entry
    2. Computer-1 crafts an ARP request for an IP address of 10.1.1.1
      * it sends to the hardware broadcast address of all Fs.
    3. This ARP discovery request is sent to every node on the local network
      * from Computer-1 to Router-A
4. Router-A receive ARP request
  1. Check and know it's the computer currently assigned the IP address of 10.1.1.1.
  2. responds to computer 1 to let it know about its own MAC address of 00:11:22:33:44:55
  3. Computer 1 receives response and knows the hardware address of its gateway
    * Computer-1 ready to start constructing the outbound packet

<br/>
<br/>

<img style="margin-bottom:7px" src="../assets/arp_01.png">
<img style="margin-bottom:7px" src="../assets/arp_02.png">
<img style="margin-bottom:7px" src="../assets/arp_03.png">
<img style="margin-bottom:7px" src="../assets/arp_04.png">
<img style="margin-bottom:7px" src="../assets/arp_05.png">


<br/>
<br/>

(4:12)

##### set 2


1. Computer-1
  * asked by the web browser to form an outbound TCP connection,
    * it needs an outbound TPC port
  * The operating system identifies the ephemeral port of 50,000 as being available
    * opens a socket connecting the web browser to this port

2. Networking Stack of Computer-1
  1. try to establish TCP connection
  2. build a proper TCP segment (proper header)
    * source port: 50,000
    * destination port: 80
    * sequence number field: A sequence number is chosen
    * control flag: SYN
    * a checksum for the segment is calculated and written to the checksum field

  3. pass newly constructed TCP segment to the IP layer of the networking stack
    * constructing proper IP header
      * source IP:
      * destination IP:
      * TTL: 64
        * 64 is standard value

3. Insert TCP segment into the payload of the IP datagram
  * the checksum is calculated for the whole thing

4. Computer-1 need to send IP datagram to its gateway (00:11:22:33:44:55)
  * construct an Ethernet Frame
    * all fields + source && destination address (gateway mac address)

5. Insert IP datagram into payload of ethernet frame
    * another checksum is calculated



<br/>
<br/>

<img style="margin-bottom:7px" src="../assets/set_2_1.png">
<img style="margin-bottom:7px" src="../assets/set_2_2.png">
<img style="margin-bottom:7px" src="../assets/set_2_3.png">
<img style="margin-bottom:7px" src="../assets/set_2_4.png">
<img style="margin-bottom:7px" src="../assets/set_2_5.png">
<img style="margin-bottom:7px" src="../assets/set_2_6.png">


<br/>
<br/>



##### set 3

1. Send Ethernet Frame(EF) across physical layer
2. Computer-1 send EF to the interface-A of Network-A (witch) through CAT6 cable
  * data is modulations of the voltage of an electrical current
3. Switch-A receive Ethernet Frame
  1. exam destination MAC Address
  2. forward the Ethernet Frame to interface that has matched MAC Address
4. Router-A
  1. receive the packet
  2. knows that this frame is intended for itself (through Destination MAC Address(00:11:22:33:44:55))
  3. calculate checksum and compare it with the one in the Ethernet frame header
    * matched -> correct data
  4. Router-A stripped away the Ethernet layer -> IP datagram
    1. perform checksum of entire IP datagram and compare it with the one in IP header
  5. router-A inspect the destination IP address and look it up in routing table
  6. in order to get data to the 172.16.1.0/24 network, the quickest path is one hop away via Router-B
    * Router-B IP: 192.168.1.1
  7. create new ip datagram header
    * decrements the TTL by 1
    * calculates a new checksum
4. Router-A constructs the new ethernet frame
  1. it needs to get this datagram to router B, which has an IP address of 192.168.1.1
  2. check ARP table and sees that it has an entry for 192.168.1.1
    * has MAC Address for (192.168.1.1)
  3. construct new ethernet frame
    1. MAC address of its interface on network B as the source mac address
    2. MAC address on router B's interface on network B as the destination
5. Put newly constructed IP datagram as payload of newly constructed ethernet frame
6. calculate the checksum and put it into the field
7. sends the frame out to network-B



<br/>
<br/>

<img style="margin-bottom:7px" src="../assets/set_3_1.png">
<img style="margin-bottom:7px" src="../assets/set_3_2.png">
<img style="margin-bottom:7px" src="../assets/set_3_3.png">
<img style="margin-bottom:7px" src="../assets/set_3_4.png">
<img style="margin-bottom:7px" src="../assets/set_3_5.png">
<img style="margin-bottom:7px" src="../assets/set_3_6.png">
<img style="margin-bottom:7px" src="../assets/set_3_7.png">
<img style="margin-bottom:7px" src="../assets/set_3_8.png">
<img style="margin-bottom:7px" src="../assets/set_3_9.png">
<img style="margin-bottom:7px" src="../assets/set_3_10.png">



<br/>
<br/>



(8:44)

#### set4
*
