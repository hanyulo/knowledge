# Ports

## Transportation Layer Protocols
* use a concept of ports and multiplexing/demultiplexing to deliver data to individual services listening on network nodes
  * ports
    * 16-bit number
      * 0-65535


## Ports Overview

#### Port 0
* isn’t in use for network traffic
* used in communications taking place between different programs on the same computer


#### Ports 1-1023 (System Ports)
* also called well-known ports
* official ports for most well-known network services
* examples
  * HTTP: 80
  * FTP: 21
* Operating System
  * administrator-level access is needed to start a program that listens on a system port


#### Ports 1024-49151 (Registered Ports)
* used for lots of other network services that might not be quite as common as the ones that are on system ports
* Registered ports are sometimes officially registered and acknowledged by the IANA, but not always
* example
  * database: 3306
* Operating System
  * any user of any access level can start a program listening on a registered port.


#### Ports 49152-65535 (Private or Ephemeral Ports)
* can’t be registered with the IANA
* generally used for establishing outbound connections (as a client)
  * source port as TCP connection
* When a client wants to communicate with a server, the client will be assigned an ephemeral port to be used for just that one connection, while the server listens on a static system or registered port.


## Notes
* Not all operating systems follow the ephemeral port recommendations of the IANA.
  * Sometimes portions of the registered ports range are used, but no modern operating system will ever use a system port for outbound communication.
