# Exterior Protocols

## Overview
* EP shares data between two independent Autonomous System (independent organization)
* The Internet is an enormous mesh of autonomous systems.
* example
  * border gateway protocol

### Side Note
* Autonomous System is just like a kingdom lead by a noble
  * Winterfell
    * the castle of Stark's family
* Interior gateway protocol
  * how steel smelter, stable and barracks inside the kingdom communicate to each other.
* Exterior Protocols
  * how different kingdoms communicate to each other



## How Data Flow
core router -> edge router of autonomous system -> node of collection of networks in autonomous system

## Internet Assigned Number Authority (IANA)
* is a non-profit organization that helps manage things like IP address allocation.
* responsible for Autonomous System Number(ASN) allocation.

#### ASN
* 32-bit number
* referred to as just a single decimal number
  * reasons
    1. First, compare to IP addresses, IP addresses need to be able to represent a network ID portion and a host ID portion for each number
    2. ASN, never needs to change in order for it to represent more networks or hosts
    3. just the core Internet routing tables that need to be updated to know what the ASN represents
    4. Just need to know the ASN number belongs to which organization, e.g., IBM is good enough.
* the number is used for Border Gateway Protocol
