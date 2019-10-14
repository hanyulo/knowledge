# Anatomy of a Domain Name

## Overview
* each **domain name** has three primary parts
  * each part serves specific purpose
  1. Top Level Domain  
  2. Domain
  3. sub-domain
* example: www.google.com
  1. com
  2. google
  3. www


## Top Level Domain
* There are only a certain restricted number of defined TLDs available
  * number has been growing a lot in recent years
* Internet Corporation for Assigned Names and Numbers (ICANN) administer and define TLDs
  * is a sister organization to the IANA, and together they help define and control both the global IP spaces, along with the global DNS system
* www.google.com
  * TLD === com
* common TLDs
  1. .com
  2. .net
  3. .edu
  4. ...
* country specific TLDs
  1. .de (Germany)
  2. .cn (China)
  3. .tw (Taiwan)
  4. ...
* Due to the growth of the Internet, many of the TLDs originally defined have become very crowded. So today
* vanity domain
  1. .museum
  2. .pizza



## Domain
* is the name commonly used to refer to the second part of a domain name
* www.google.com
  * google === domain
* are used to demarcate where control moves from a TLD name server, to an authoritative name server
* domain is typically under the control of an independent organization, or someone outside of ICANN
* Domains can be registered and chosen by any individual or company, but they must all end in one of the predefined TLEs
* it costs money to officially register a domain with a registrar,


## sub-Domain
* www.google.com
  * www === sub-domain
* sometimes referred to as a host name if it's been assigned to only one host.
* subdomains can be freely chosen and assigned by anyone who controls such a registered domain




## Note
* Technically you can have lots of subdomain names, for example host.sub.sub.subdomain.domain.com can be completely valid. Although you rarely see fully qualified domain names with that many levels.
* DNS can technically support up to 127 levels of domain in total for a single fully qualified domain name

## Restriction
* Each individual section can only be 63 characters long and a complete FQDN is limited to a total of 255 characters

## Terms
* registrar
  * A registrar is just a company that has an agreement with ICANN to sell unregistered domain names.
* FQDN
  * fully qualified domain name
  * When you combine all parts
    1. TLD
    2. Domain
    3. sub-domain
* vanity domain
  * ????
* tle ??


## References
* [host_name vs. sub-domain name](https://superuser.com/questions/887173/what-is-a-hostname-versus-a-computer-name-versus-a-subdomain-versus-www)
* [hostname](https://en.wikipedia.org/wiki/Hostname)
* [sub-domain and domain name has same IP address/same host name](https://www.quora.com/Can-a-subdomain-point-to-the-same-IP-as-the-domain)
  * twreporter.org has same ip address as accounts.twreporter.org
  * `nslookup twreporter.org`
    * name server look up
