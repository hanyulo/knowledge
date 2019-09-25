## DNS
* domain name system

## Why we need it
* good for human to memorize
* Mac Address
  * 48-bit binary numbers that are normally written out in 6 groupings of 2 hexadecimal digits each
  * IP Address
    * 32-bit binary number -> 4 octets
    * but still not easy to memorize
* human are good at remembering words
 * here is the time DNS comes to play

## Benefit
 * easier for human to remember and recognize
 * lets administrative changes happen behind the scenes without an end user having to change their behavior
 * help to build distributed system
   * single Domain name resolve to different IPs (closest one to user)

## DNS Overview
* Domain Name System
* global and highly distributed network service that resolves strings of letters into IP address for you
* The IP address for a domain name can also change all the time for a lot of different reasons
* Domain Name
  * domain name: www.weather.com
    * IP it resolves to could change, depending on a variety of factors
      * example
        * weather.com was moving their web server to a new data center
        * signed a new contract, or the old data center was shutting down
* DNS mitigate the annoyance that caused by IP change of same domain name


## Distributed System
* short routing -> faster transmission -> good UX
* distribute data of web server across data centers across the globe
  * DNS will resolve same domain name to different IPs which are closest to user.


## Terms
* Domain Name
  * just the term we use for something that can be resolved by DNS


## Conclusion
* why we need DNS
  * distributed system -> single domain name is resolved to different IP addresses (closest location)
  * human nature -> easy to read
