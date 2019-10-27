## Note
* Internet must have DNS server
* DNS Scenario
  1. at home
    * An ISP almost always gives you access to a recursive name server as part of the service it provides.
  2. internal usage (business)
    * set up a local DNS server
      * mainPrinter === printer address at your office
  3. DNS as service provider



## public DNS servers
* public DNS servers are name servers specifically set up so that anyone can use them for free
* is a handy technique for troubleshooting any kind of name resolution problems you might be experiencing
* example
  * cloudFlare


* In ancient sysadmin law, it said that for many years the most commonly used public DNS servers were those run by Level 3 communications. One of the largest ISPs in the world. Level 3 is, in fact, so large. They mostly do business by selling connectivity to their network, to other ISPs that actually deal with consumers instead of dealing with end-users themselves.


*  Most public DNS servers are available globally through anycast.

* The IP addresses for Level 3s public DNS servers are 4.2.2.1 through 4.2.2.6.


* Google's public DNS. Google operates public name servers on the IPs 8.8.8.8 and 8.8.4.4. Unlike the Level 3 IPs, these are officially acknowledged and documented by Google to be used for free by anyone.


* Most public DNS servers also respond to ICMP echo requests, so they're a great choice for testing general internet connectivity using ping
