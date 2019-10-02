# Dynamic Host Configuration Protocol (DHCP)
* is an Application Layer Protocol

## Managing Host(your own computer on office network) on Network
1. IP Address
2. the subnet mask for the local network
3. a primary gateway
4. a name server

#### Problem
* configure hundreds of machines -> tedious and annoying
  * usually the following three main configurations are similar
  1. the subnet mask for the local network
  2. a primary gateway
  3. a name server
* IP address, needs to be different on every single node on the network
  * That could require a lot of tricky configuration work

#### Solution
* DHCP
  * an application layer protocol that automates the configuration process of hosts on a network
* how it works
  * a machine(your computer) make query to DHCP server to receive all the network configuration to become a host/node in network
* Benefit
  * reduce administrative overhead
    * network administrator(in office, an IT personnel) doesn't have to do repetitive works for setting same stuff.
  * choose IP for your for the machine (employee's computer)

## Static IP V.S. Dynamic IP
* Every computer or any client devices (printer, mobile phone) on local network requires an IP for communications
  * only needs dynamic IP from DHCP (your local router can work as DHCP server)
* Servers (include  DNS server), network equipment, gateway router on your local network has static IP address
  * gateway router
    * For example, the devices on a network need to know the IP of their gateway at all times. If the local DNS server was malfunctioning, network administrators would still need a way to connect to some of these devices through their IP.
      * DNS server here work as DHCP server which issue dynamic ip addresses. So the router has static IP address which will not be influenced by malfunctioning DNS server.
* if Servers or any network devices has dynamic IP, it would be hard to connect to it to diagnose any problems if it was malfunctioning


## Multiple DHCP Work Standards
* DHCP dynamic allocation
  * A range of IP addresses is set aside for client devices and one of these IPs is issued to these devices when they request one.
  * the IP of a computer could be different on each connection to the network
* Automatic allocation
  * is very similar to dynamic allocation
    * in that a range of IP addresses is set aside for assignment purposes
  * difference
    * DHCP server is asked to keep track of which IPs it's assigned to certain devices in the past. Using this information, the DHCP server will assign the same IP to the same machine each time, if possible
* fixed allocation
  * requires a manually specified list of MAC address and the corresponding IPs
  * When a computer requests an IP, the DHCP server looks for its MAC address in a table, and assigns the IP that corresponds to that MAC address.
    * If the MAC address isn't found, the DHCP server might fall back to automatic or dynamic allocation, or it might refuse to assign an IP altogether.
  * benefit
    * security
      * only devices that have had their MAC address specifically configured at the DHCP server will ever be able to obtain an IP and communicate on the network


## Notes
* **A router or a residential gateway can be enabled to act as a DHCP server.** Most residential network routers receive a globally unique IP address(static IP) within the ISP network. Within a local network, a DHCP server assigns a local IP(private dynamic IP) address to each device connected to the network.

* Along with things like IP address and primary gateway, you can also use DHCP to assign things like NTP servers. NTP stands for Network Time Protocol, and is used to keep all computers on a network synchronized in time. We'll cover it in more detail in later courses. But for now, it's just worth noting that DHCP can be used for more than just IP, subnet mask, gateway, and DNS server.



## References
[DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)
