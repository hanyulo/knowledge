# Virtual Private Network

## How to Secure your Network
* business practice to protect proprietary information
  * NAT
  * non-routable address space
  * Firewall
  * ...
  * VPN

* One of the easiest ways to keep networks secure is to use various securing technologies,  so only devices physically connected to their local area network, can access these resources

## VPN
* Virtual Private Networks or VPNs, are a technology that allows for the extension of a private or local network, to a host that might not work on that same local network
* **a tunneling protocol**
  * the protocol provision access to something not locally available
  * establishing a VPN connection === a VPN tunnel has been established.



#### How Does it Works

* client -> server
  * Scenario: employee who needs to access company resources while not in the office
  1. VPN client request establish a VPN tunnel to the company network.
  2. This would provision their computer with what's known as a virtual interface, with an IP that matches the address space of the network that established a VPN connection to
  3. By sending data out of this virtual interface, the computer could access internal resources just like if it was physically connected to the private network

  * Most VPNs work by using the payload section of the transport layer to carry an encrypted payload that actually contains an entire second set of packets. The network, the transport, and the application layers of a packet intended to traverse the remote network. Basically, this payload is carried to the VPNs endpoint, where all the other layers are stripped away and discarded. Then, the payload is unencrypted, leaving the VPN server with the top three layers of a new packet. This gets encapsulated with the proper data link layer information, and sent out across the network.

* server -> client
  * This process is completed in the inverse, in the opposite direction. VPNs, usually requires strict authentication procedures in order to ensure that they can only be connected to by computers and users authorized to do so.
  *  two-factor authentication
    * VPNs -> two-factor authentication
    * is a technique where more than just a username and password are required to authenticate
  *


* ???? lack a lot of notes
* the instructor just brush over the topic...
