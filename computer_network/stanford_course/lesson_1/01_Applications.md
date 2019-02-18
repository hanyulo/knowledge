
## Overview

* Application Communication
 1. Bidirectional
 2. Reliable Byte Stream

* Application level controls communication pattern and payloads
 * World Wide Web (HTTP)
 * Skype
 * BitTorrent



## Notes

* www: abstract concept about all connections between browser and server ?
* Http (Hyper Text Transfer Protocol) is an Protocol
* Client open connection to Server

## BitTorrent
* Client send request to Tracker Server to get client list in same swarm
* The client open connection to those client and get piece of data from them
* new client may open connection to the client to get some piece of data.

## Skype

* Network Address Translator (NAT)
 * Open Connection out toe the internet
 * Other nodes on the internet can'y easily open connections yo you.
 * Good Security
 * Seldom used by public server.



* Reverse Connection (Skype)
1. Client A calls Client B
 * B is behind the NAT
 * But B opened connection with Rendezvous Server ( third server that controlled by the Skype, and the skype app on your laptop connect to it automatically )

2. Since client B behind NAT, client A can not open connection to B directly. Instead, Client A open connect with Rendezvous server, ask it to send call request to Client B.
3. Client B accept the call (request)
4. Client B open up connection to Client A.


* Relay Server
1. Client A and Client B are both behind NAT
2. Both of them opened connection to Relay Server before they communicate each other.
3. Client A send data to Relay Server, relay server pass data to Client B.
