## Overview
* cable is only for end-to-end single-link connection.
* here comes to hub and switch to connect multiple devices together.
* hub and switch only used for Local Area Network (LAN)


## hub
* a physical layer device that allows for connections from many computers at once.
* All the devices connected to a hub will end up talking to all other devices at the same time. It's up to each system connected to the hub to determine if the incoming data was meant for them, or to ignore it if it isn't.
* it broadcast data to all connected devices.
* create a problem called collision domain
  * a **network segment** where only one device can communicate at a time.
  * If multiple systems try sending data at the same time, the electrical pulses sent across the cable can interfere with each other.
  * more than one device attempts to send a packet on a network segment at the same time.
* you can only send data from connected device one by one to avoid collision domain
* slow network communication
* is layer one device  (physical layer)

## switch (switching hub)
* is layer two device (data link layer)
* actually inspect the contents of the Ethernet protocol data being sent around the network, determine which system the data is intended for and then only send that data to that one system.
* inspect Ethernet data to determine where to send things,
* benefit
  * reduce the size of the domain collision
  * fewer retransmissions
  * higher overall throughput
