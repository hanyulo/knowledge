# DNS Use UDP

## Why DNS use UDP
* DNS is great exemplar for using UDP rather than TCP
  * Reasons
    1. data size of DNS request is small enough to put into single UDP datagram
      * perfect for connectionless protocol -> UDP
    2. DNS generates a lot of traffic
      * Even though you can cache DNS data in local machine and caching name servers, the first time full resolution still needs a lot of traffic to be done.
* if DNS adopt TCP, it will cause a lot of overhead


## What if DNS use TCP
* this brings us to a grand total of 44 packets at the minimum in order for a fully recursive DNS request to be fulfilled via TCP

#### Host <-> caching/recursive name server (5 packets)
1.  three-way-handshake between host and caching/recursive name server
  * total: three packets
  1. the host that's making the DNS resolution request would send a SYN packet to the local name server on port 53 (DNS listen on the port 53)
  2. name server responds with SYN/ACK packaet
  3. the host responds with ACK
2. original host send real request
  *  request IP address for food accomplice
3. caching/recursive name server resopns with ACK
  * I got your request for food.com


#### caching/recursive name server <-> Root Servers (11 packets)(total: 16)
1. three-way-handshake
2. actual request
3. ACK for request
4. real response from Root Server
5. ACK from caching/recursive name server for the response
6. connection would have to be closed via a four-way-handshake
* get the ip of TLD server


#### caching/recursive name server <-> TLD Server (11 packets)(total: 27)
* repeat that entire process (process with Root Server) to discover the proper authoritative name server
* get the ip of authoritative name server

#### caching/recursive name server <-> authoritative name server (11 packets)(total: 38)
*  repeat the entire process one more time while talking to the authoritative name server
* get the IP of food.com


#### Final Process (6 packets)(total: 44)
* local name server has the IP address of food.com
1. local name sever responds to the initial request form host
2. host send ACK back to confirm that it receive the data
3. close connection with four-way-hand-shake


## DNS with UDP (total: 8)
1. The original computer sends a UDP packet to its local name server on port 53 asking for the IP for food.com, that's one packet
2. The local name server acts as a recursive server and sends up a UDP packet to the root server
3. The root server sends a response containing the proper TLD name server (total: 3)
4. The recursive name server sends a packet to the TLD server and receives back a response containing the correct authoritative server (total: 5)
5. recursive name server sends its final request to the authoritative name server which sends a response containing the IP for food.com. (total: 7)
6. Finally, the local name server responds to the DNS resolver that made the request in the first place with the IP for food.com.  (total: 8 packets)


## Error in UDP process
* UDP has no re-resending mechanism
* The DNS resolver just asks again if it doesn't get a response.
  * Basically, the same functionality that TCP provides at the transport layer is provided by DNS at the application layer in the most simple manner
  * A DNS server never needs to care about doing anything but responding to incoming lookups, and a DNS resolver simply needs to perform lookups and repeat them if they don't succeed.

## Note
* In most cases, DNS adopt UDP
* In some cases, the web is more complex.
  * single UDP datagram is not enough
  * DNS name server would respond with a packet explaining that the response is too large. The DNS client would then establish a TCP connection in order to perform the lookup
