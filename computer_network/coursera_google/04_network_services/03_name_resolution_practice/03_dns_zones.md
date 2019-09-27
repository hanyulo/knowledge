# DNS Zones


## Authoritative Name Servers
* are responsible for responding to name resolution requests for specific domains
* **responsible for a specific DNS zone**


## DNS Zone
* is a hierarchy concept
  * root name server -> root zone
  * TLD name server -> zone covering its specific TLD
  * authoritative name servers -> finer-grained zones **underneath** zone of TLD
    * underneath not inside
    * **zone dose not overlap with each other**
    * example
      * the administrative authority of the TLD name server for the.com TLD doesn't encompass the google.com domain. Instead, it ends at the authoritative server responsible for google.com.
* The root and TLD name servers are actually just authoritative name servers, too. It's just that the zones that they're authoritative for are special cases
* allow for easier control over multiple levels of a domain

## Why we need DNS Zone
* As the number of resource records in a single domain increases, it becomes more of a headache to manage them all
  * example: 600 A records for single domain
* scenario
  * a large company -> single domain -> largecompany.com
    * has multiple offices in different location
      1. Paris
      2. Los Angles
      3. Taipei
  * each office has 200 people
    * problem: 600 A records to keep track of if it was all configured as a single zone
  * solution:
    * split up each office into their own zone
      1. pa.largecompany.com
      2. la.largecompany.com
      3. tp.largecompany.com
      * as subdomains, each with their own DNS zones
  * now, **4 authoritative name servers** need to be setup
    * one for largecompany.com and one for each of the subdomains

## How/What to configure dns zone
* configure through what are known as zone files
* zone file
  * simple configuration files that declare all resource records for a particular zone
  * files
    1. SOA
      * Start of Authority resource record declaration (SOA)
      * declares the zone and the name of the name server that is authoritative for it
    2. NS records
      * indicate other name servers that may also be responsible for this zone
      * [note 1]
    3. the rests
      * A
      * Quad A
      * CNAME
      * default TTL
        * how long it can cache the DNS file
    4. reverse lookup zone files
      * DNS resolvers asks associated FQDN of an IP
      * contain pointer resource record declarations/Pointer Record (PTR)
        * resolves an IP to a name
* Just like how subdomains can go many, many layers deep, zones can be configured to do this too but, just like with subdomains, it's rare to see zones deeper than just a few levels [???]



## Note
1. For simplicity's sake, we've been referring to server in the singular when discussing what's responsible for its zone, whether at the root, TLD, or domain level, but there are often going to be multiple physical servers with their own FQDNs and IP addresses involved. Having multiple servers in place for something as important as DNS is pretty common. Why? Well, if one server were to have a problem or suffer a hardware failure, you could always rely on one of the other ones to serve DNS traffic.

## What!?
*  Just like how subdomains can go many, many layers deep, zones can be configured to do this too but, just like with subdomains, it's rare to see zones deeper than just a few levels [???]
