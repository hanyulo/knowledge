# Testing Port Connectivity
* transport layer connection test

## Overview
*  Netcat on Linux, Mac OS.
*  Test-NetConnection on Windows.



## Netcat
* This is a way for you to actually send application layered data to the listening service from your own keyboard
* `han$ nc [hostName] [port]`
  * If the connection fails, the command will exit
  * If it succeeds, you'll see a blinking cursor, waiting for more input
* flags
  * you're really only curious about the status of a report, you can issue the command, with a -Z flag, which stands for Zero Input/Output Mode. A -V flag, which stands for Verbose, is also useful in this scenario.
   * -v
      * This makes the commands output useful to human eyes as opposed to non-verbose output, which is best for usage in scripts.


## Test-NetConnection
* Windows, Test-NetConnection is a command with some of the similar functionality. If you run Test-NetConnection with only a host specified, it will default to using an ICMP echo request, much like the program ping.
  * But, it will display way more data, including the data link layer protocol being used. When you issue Test-NetConnection with the -port flag, you can ask it to test connectivity to a specific port.


## References
[netcat](https://en.wikipedia.org/wiki/Netcat)
[Test-NetConnection](https://docs.microsoft.com/en-us/powershell/module/nettcpip/test-netconnection?redirectedfrom=MSDN&view=win10-ps)
