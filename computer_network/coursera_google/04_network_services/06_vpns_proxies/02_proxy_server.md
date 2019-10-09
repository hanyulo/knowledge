# Proxy Server

## Overview
* a server that acts on behalf of a client in order to access another service
*  The concept of a proxy is just that, a concept or an abstraction
* benefit
  * anonymity
  * security
  * content filtering
  * increased performance
  * ...
* example
  * gateway routers.

## Examples
* web proxies (reverse proxy)
  * caching data
    * benefit
      * increase performance by caching data
    * client <-> Web proxy server <-> Web content server
    * example
      * Using a web proxy, an organization would direct all web traffic through it, allowing the proxy server itself to actually retrieve the webpage data from the Internet. It would then cache this data. This way, if someone else requested the same webpage, it could just return the cached data instead of having to retrieve the fresh copy every time.
    * note
      * it is only used in old time
        * now a day, internet speed drastically
        * Web has become much more dynamic
          * customized web page for different people
  * security
    * prevent someone from accessing sites
    * example
      * an company use proxy to restrict employees from accessing specific websites during work hours such as facebook, twitter.
    * allow the proxy to inspect what data is being requested, and then allow or deny this request
  * **reverse proxy** (load balancing)
    * is a service that might appear to be a single server to external clients, but actually represents many servers living behind it.
    * Much like the concept of DNS Round Robin, this is a form of load balancing
    * Reverse Proxy Server V.S. Load Balancer
      * Reverse Proxy Server is a more general concept
      * load balancer is a specific concept.
    * deal with decryption
      * More than half of all traffic on the Web is now encrypted, and encrypting and decrypting data is a process that can take a lot of processing power.
      * Reverse proxies are now implemented in order to use hardware built specifically for cryptography, to perform the enryption and decryption work. So that the web servers are free to just serve content.




## Refs
[Reverse Proxy V.S. Load Balancer](https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/)
[Reverse Proxy V.S. Load Balancer](https://serverfault.com/questions/127021/what-is-the-difference-between-load-balancer-and-reverse-proxy)
