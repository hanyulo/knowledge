# Subnetting

## Goal
* why need subnetting
* how subnet masks extend what's possible with just network and host IDs.
* what is CIDR and how it works

## Overview
*  subnetting is the process of taking a large network and splitting it up into many individual smaller subnetworks or subnets.
* an IT person must know how to do subnetting


## Example
### scenario one
  * you want to communicate with the IP address 9.100.100.100

* steps
  1. core routers on the internet
    1. know that this IP (9.100.100.100) belongs to the 9.0.0.0 class A network.
    2. route the message to the gateway router
  2. gateway router receive network datagram
    * the gateway router for the 9.0.0.0 class A network
    * get that data to the proper system by looking at the host ID.
    * class A network contains 16,777,216 individual IPs
      * cause problems
* Problem
  * class A network contains 16,777,216 individual IPs
    * you need subnetting to split big class A network to multiple smaller subnetworks.
      * These individual subnets will all have their own gateway routers serving as the ingress and egress point for each subnet.

### scenario two
* the HansLab company apply an class B ip address
  * HansLab's network can connet at most 65,535 devices
    * downside
      * HansLab's no need that much host Id which will create tremendous redundent host ip address
      * decrease network efficiency
  * **class B networkId that issude from supreme organization can not be modified**
* solution
  * subnetting
    * use subnet mask to borrow bits from host id to create subentId
* example
  * Issued Class B IP address to HansLab
    * 1011 1111, 1111 1001, 0000 0000, 0000 0000(191.249.0.0)
  * class B original subnet mask
    * 11111111 11111111 00000000 00000000(255.255.0.0)
    * networkId = (191.249.0.0)
  * customized subnet mask
    * 11111111 11111111 11100000 00000000(255.255.224.0)
     * create **8** subneted networkId
      * each subnet has 8192 hostIds
      * subnetIds === new networkIds
        1. (191.249.0.0)
        2. (191.249.1.0)
        3. (191.249.2.0)
        4. (191.249.3.0)
        5. (191.249.4.0)
        6. (191.249.5.0)
        7. (191.249.6.0)
        8. (191.249.7.0)
* Cautious
  * once you implement subnet, the router can not use original class system. The router only use subnet mask system to find the subnetIds which are networkIds now.


## Terms

* core router
  * intermediate routers ??
  * core Internet routers, which might only speak to other core routers.
* gateway router
  * responsible for the network by looking at the network ID
  * serves as the entry and exit path to a certain network
  * gate keeper of a network segment

* example
  * your home computer wants to send message to a remote server
    * macBookPro -> gateway router -> core router -> core routers... -> gateway router -> remote server




## Q&A
* What is the difference betwen networkID and subnetid


## References
[subnetting + mask](https://mrtonychen.wordpress.com/network-subnet-mask%E5%88%B0%E5%BA%95%E6%98%AF%E6%80%8E%E9%BA%BC%E4%B8%80%E5%9B%9E%E4%BA%8B%EF%BC%9F/)
