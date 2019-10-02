# IANA
* in charge of distributing IP addresses
* responsible with assigning address blocks to the five regional internet registries or RIRs.


## Regional Internet Registries (RIRs)
* Five RIRs
  1. AFRINIC
    * continent of Africa
  2. ARIN
    * United States, Canada and parts of the Caribbean
  3. APNIC
    * most of Asia, Australia and New Zealand and Pacific Island nations
  4. LACNIC
    * Central and South America and any parts of the Caribbean not covered by ARIN
  5. RIPE
    * Europe, Russia and the Middle East and portions of Central Asia

* RIRs have been responsible for assigning IP address blocks to organizations within their geographic areas and most have already run out.




## Problem - IPv4 is running out
* The 4.2 billion possible IPv4 addresses have been predicted to run out for a long time and they almost have.
* The IANA assigned the last unallocated slash eight network blocks to various RIRs on February 3rd, 2011
* allocation progress of each RIRs
  * In April 2011, APNIC ran out of addresses
  * RIPE was next, in September of 2012
  * LACNIC ran out of addresses to assign in June 2014
  * ARIN did the same in September 2015
  * AFNIC has some IPs left, but those are predicted to be depleted by 2018.

## Solution
1. IPv6
  * IPv6 will eventually resolve these problems
    * But implementing IPv6 worldwide is going to take some time.
2. workaround - NAT and non-routable address space
  * All you need is one single IPv4 address and via NAT + non-routable address space, a router with that public IP can represent lots and lots of computers behind it
    * non-routable address space
      * [ref](../../02_netowrk_layer_04_routing_06_non_routable_address_space.md)
      * non-routable address space was defined in RFC1918
    * And unlimited number of networks can use non-routable address space internally because internet routers won't forward traffic to it.
      * internet routers only forward traffic to the gateway router of the internal network
      * This means there's never any global collision of IP addresses when people use those address spaces
    * with NAT
      * you can have hundreds even thousands of machines using non-routable address space
      * plus single public IP
      * result: all those computers can still send traffic to and receive traffic from the internet.
