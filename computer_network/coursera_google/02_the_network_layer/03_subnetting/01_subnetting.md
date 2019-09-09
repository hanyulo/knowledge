# Subnetting

## Goal
* why need subnetting
* how subnet masks extend what's possible with just network and host IDs.
* what is CIDR and how it works

## Overview
*  subnetting is the process of taking a large network and splitting it up into many individual smaller subnetworks or subnets.
* an IT person must know how to do subnetting


## Example
* scenario
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
