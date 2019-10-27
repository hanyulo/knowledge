# Name Resolution


## Overview
* tools
  * `nslookup [hostName]`
    * name server look up

#### nslookup interactive mode
* `nslookup`
  * `hostName`
  * `set type=MX`


## Notes
* `nslookup` > `server`
  * the last server is my first local DNS server which is set in the router
    * it is also my gateway server.
* set default DNS sever
  * `nslookup` > `server 8.8.8.8`
    * set [google DNS server](https://developers.google.com/speed/public-dns/docs/using) as default server
* `non-authorative answer`
  * name server return cached data



## References
* cloudflare
* https://www.youtube.com/watch?v=8WIHluQaEbs
