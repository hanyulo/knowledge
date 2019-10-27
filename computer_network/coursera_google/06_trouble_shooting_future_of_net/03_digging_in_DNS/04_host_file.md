# host files

## OVERVIEW
* host file
  * exist before DNS system
  * kind of replaced by DNS
  * content
    ```
     127.0.0.1 localhost
     172.217.24.14 google.com
    ```
  * exist in operating system for loopback address
* loopback address
  * configured on every modern operating system through an entry in a hosts file
  * is a way of sending network traffic to yourself
    * Sending traffic to a loopback address bypasses all network infrastructure itself, and traffic like that never leaves the node
  * local host
  * The loopback IP for IPV4 is 127.0.0.1
  * The loopback IP for IPV6 is ::1
  * Almost every hosts file in existence will in the very least contain a line that reads "127.0.0.1 localhost," most likely followed by "::1 localhost, " where "::1" is the loopback address for IPV6.
  * hosts files are a popular way for computer viruses to disrupt and redirect user's traffic.
