# Wireless Security


## Overview
* wired network
  * has inherent security since the data only read and sent by two end points through wire
* wireless network problem
  * broadcast data in specific radio frequency range
    * devices in those range can intercept those data
  * solution
   1. WEP
   2. WPA
   3. WPA2
   4. MAC filtering




## Wired Equivalent Privacy (WEP)
* it's an encryption technology that provides a very low level of privacy.
  * low level
    * it should really only be seen as being as safe as sending unencrypted data over a wired connection
* is a really weak encryption algorithm
* number of bits in an encryption key corresponds to how secure it is, the more bits in a key the longer it takes for someone to crack the encryption.
  * WEP has really short encryption key
    * 40 bits
    * modern computer can usually crack the key in just a few minutes.


## WPA or Wi-Fi Protected Access
* WEP was quickly replaced in most places with WPA or Wi-Fi Protected Access
* 128-bit encryption key
* the most commonly used encryption algorithm for wireless networks is WPA2
* WPA2
  * 256-bit key


## MAC filtering
* you configure your access points to only allow for connections from a specific set of MAC addresses belonging to devices you trust
* do noting to help encryption
* provide an additional barrier preventing unauthorized devices from connecting to the wireless network itself
