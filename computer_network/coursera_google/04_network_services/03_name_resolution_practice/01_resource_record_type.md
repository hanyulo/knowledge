# Resource Record Type

## Overview
* DNS in practice operates with a set of defined resource record types
  * These allow for different kinds of DNS resolutions to take place
* different resource record types has different specific purposes
* record types
  1. the most common resource record type
    * **A record**
      * used to point a certain domain name at a certain IPv4 IP address
    * host ask DNS resolver for the A record for a domain name
      * single domain
        1. has single A record
        2. has multiple A records
  2. Another popular resource record type
    * **Quad A record** (AAAA - Quad A)
      * just like A record but returns in IPv6 address
  3. A [CNAME record](https://en.wikipedia.org/wiki/CNAME_record)
    * CNAME is shorthand for canonical name
    * is used to redirect traffic from one domain to another.
    * example
      * Microsoft runs their web servers at www.microsoft.com
      * redirect microsoft.com to www.microsoft.com
        * By configuring a CNAME record for microsoft.com that resolves to www.microsoft.com, the resolving client (name server) would then know to perform another resolution attempt, this time for www.microsoft.com, and then use the IP returned by that second attempt
    * benefit
      * only have to change the canonical IP address of a server in one place
      * example
        * miscrosoft.com and www.microsoft.com should both be resolved to same IP address
          1. first solution
            * two A Records
              1. miscrosoft.com -> the IP
              2. www.miscrosoft.com -> the IP
            * if you want to move data to different server (different ips), you have to change two a records
          2. second scenario
            * set up CNAME -> you just have to change a record
  4. MX record
    * MX === Mail Exchange
    * is used in order to deliver e-mail to the correct server
    * Many companies run their web and mail servers on different machines with different IPs, so the MX record makes it easy to ensure that email gets delivered to a company's mail server, while other traffic like web traffic would get delivered to their web server.
  5. SRV record
    * A record type very similar to the MX record
    * SRV === Service Record
    * it's used to define the location of various specific services
    * SRV record can be defined to return the specifics of many different service types.
      * example: CalDAV
  6. TXT record
    * text
    * TXT stands for text and was originally intended to be used only for associating some descriptive text with a domain name for human consumption. The idea was that, you could leave notes or messages that humans could discover and read to learn more about arbitrary specifics of your network. But over the years as the Internet and services that run on it have become more and more complex, the text record has been increasingly used to convey additional data intended for other computers to process. Since the text record has a field that's entirely free form, clever engineers have figured out ways to use it to communicate data not originally intended to be communicated by a system like DNS. It's pretty clever, right? This text record is often used to communicate configuration preferences about network services that you've entrusted other organizations to handle for your domain. For example, it's common for the text record to be used to convey additional info to an email as a service provider, which is a company that handles your email delivery for you. There are lots of other DNS resource record types in common use like the NS or SOA records which are used to define authority information about DNS zones. We'll cover DNS zones in more detail in a future video. So, stay tuned.
  7. the rest
    * NS or SOA records
      * are used to define authority information about DNS zones.



## DNS Round Robin (A record)
  * single domain has multiple A records
  * a technique that implement multiple A records to balance traffic across multiple IPs.
  * a concept that involves iterating over a list of items one by one in **an orderly fashion**. The hope is that this **ensures a fairly equal balance of each entry** on the list that's selected.
  * V.S. [google cloud load balancer](https://cloud.google.com/load-balancing/)


#### Example
* domain name www.microsoft.com
  * a lot of traffic
* To help balance this traffic across multiple servers, we configure four A records for www.microsoft.com at the authoritative name server for the microsoft.com domain
  * four IPs
    1. 10.1.1.1
    2. 10.1.1.2
    3. 10.1.1.3
    4. 10.1.1.4
* steps
  1. the DNS Resolver performs a look-up of www.microsoft.com, all four IPs would be returned in the order
    1. 10.1.1.1
    2. 10.1.1.2
    3. 10.1.1.3
    4. 10.1.1.4
  2. The DNS resolving computer would know that it should try to use the first entry, 10.1.1.1, but it knows about all four just in case a connection to 10.1.1.1 fails.
  3. The next computer to perform a look up for www.microsoft.com would also receive all four IPs in the response, but the ordering will have changed.
    1. 10.1.1.2
    2. 10.1.1.3
    3. 10.1.1.4
    4. 10.1.1.1
  4. This pattern will continue for every DNS resolution attempt, cycling through all of the A records configured and balancing the traffic across these IPs. That's the basics of how DNS round robin logic works.

## Terms
* DNS zones
  * cover it later
