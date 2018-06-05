#Socket & Port

## Server Computer Overview
Port -> Socket -> OS -> Server Process


## Socket
* To receive packet and send packet.
* Bind to specific address of server, e.g., 0.0.0.0:80
  * So each port should have one unique socket?
* Notify OS to data from specific address should be send to specific Server process.

## Port
Server use different ports to provide different services, e.g. Email, http... Therefore, we can have HTTP server, SMTP server(email) and SSH server on a same computer and all using same protocol - namely TCP.

## Max Socket
In common scenario, server will close finished connection. However, to reach high efficiency, server would like to keep connection alive for later use. So node server create agent to maintain big amount of tcp connection.

Agent need to limit numbers of socket of specific address because each socket is a file on server. You cant have infinite number of files on server.

## To Read
* 3-way hand shake
* Need to check socket and maxsocket definition exactly

## References
* [port](https://stackoverflow.com/questions/35358596/what-exactly-is-a-port-and-how-is-it-related-to-the-internet)

* [socket](https://softwareengineering.stackexchange.com/questions/171734/difference-between-a-socket-and-a-port)

*[Max Socket Node.js](http://wyicwx.github.io/2014/03/12/%E8%B0%88%E8%B0%88nodejs%E4%B8%ADhttpagent/)
