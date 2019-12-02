## End To End Encryption

* example: whatsApp, facebook messenger
* symmetric encryption (symmetric key)

## how to establish a secured way to communication
* to prevent anyone on the intermediate routers from reading the data

* players
    * Alice
    * Bob
    * Server

* solution one (not end to end encryption) (shared-secret-key/symmetric key)
    * steps
        1. Alice and Server negotiate a shared-secret-key: `KAS`
        2. Bob and Server agree on a shared-secret-key: `KBS`
        3. Alice sends data (encrypted by `KAS`) to server and ask server to forward it to Bob
        4. Server decrypts the data with `KAS` and Encrypts it with `KBS`
        5. Server send the data (encrypted by `KBS`) to Bob
        6. Bob receives the data and decrypt it by `KBS`
    * benefits
        * company who host the server can perform some rudimentary checks to filter out some malicious messages such as terrorist attack, financial frauds, etc. Then the company can notify government to act.
    * downsides
        * if the server is hacked, there will be a serious data leak problem


* solution two (end to end encryption)
    * steps
        1. Alice and Bob communicate through server and use Diffie-Hellman (public/private key) to establish a secured connection
        2. Alice and Bob negotiate and exchange a shared-secret-key
            * server do not know what shared-secret-key is
            * server only relay the encrypted-message
            * shared-secret-key is ephemeral (different on each message or few messages)
        3. Now they can send and receive the data from each other without any decryption in the server



## Diffie-Hellman key exchange
* first public-key protocol
* exchange public variables and combine them with some private variables, so both parties can both create same secret key (shared secret key)
* asymmetric encryption
* used as a way to establish secured connection to exchange shared-secret-key

## Overview

## References
* [end to end encryption - Michael Pound](https://www.youtube.com/watch?v=jkV1KEJGKRA&t=29s)
