# Connection Oriented and Connectionless Protocols

## Connection Oriented
* reliability: good !!
* exemplar: TCP

#### Overview
* establish a connection, and use this to ensure that all data has been properly transmitted
* connection in TCP
  * mean that every segment of data sent is acknowledged
  * both ends of the connection always know which bits of data have definitely been delivered to the other side and which haven't.
* TCP connection is used to prevent unexpected error
  * how
    * forming connections through the constant stream of acknowledgements
  * error scenarios
    1. cyclical redundancy check may find out cross talk(physical layer) in Ethernet Frame(data-link layer).
      * whole frame will be dropped
    2. Congestion
      * congestion might cause a router to drop your traffic in favor of forwarding more important traffic
    3. a construction company could cut a fiber cable connecting two YSPs

#### TCP is responsible for Resending
* IP and Ethernet
  * has checksum to ensure data is correct
    * if checksum result is incorrect, two protocols just drop the data.
  * downside
    * has no mechanism to resend data that doesn't pass the check
* TCP
  * each end expect an ACK for every transmission
    * TCP knows when should the end to re-send which data
  * sequence number
    * TCP generally send all segments in sequential order
    * error occurs -> TCP segments are not received in sequential order
      1. TCP find the error (may caused by lower layers)
      2. transmitting end re-send the data
      3. receiving end use sequence numbers to put all data back together in right order.

#### Overheads
* a lot of extra traffic.
  * have to establish connection
  * have to send a stream of constant streams of acknowledgements
  * have to tear the connection down at the end


## Connectionless Protocol
* User Datagram Protocol (UDP)
* application which use such protocol cares more about speed, hardware resource than data integrity

#### Overview
* has no connection
* doesn't support the concept of an acknowledgement

#### How does it work
* set a destination port and send the packet

#### Examples
* streaming video
  * if transmission process lost some frames, which may not influenced the quality of the video.
  * benefit
    * getting rid of all the overhead of TCP
    * able to send higher quality video with UDP
      * saving more of the available bandwidth
        * That's because you'll be saving more of the available bandwidth for actual data transfer instead of the overhead of establishing connections and acknowledging delivered data segments.
