# SHA (Secured Hash Algorithm)
* what for
    1. message authentication
    2. verify digital signature (verify identity)
* is a type of hash function not an encryption
    * hash can't be reversed
* it's a one-way hash function



## Overview
* SHA1
    * 160-bit long hash
        * 40-character long string
    * similar to md5/md4
* SHA2
    * SHA-256, SHA-512

* SHA3
    * brand new and totally different



## SHA1
* take any strings and turns it into 160-bit value
* 160-bit long hash
    * 40-character long string

### How it works
* choose a pseudo-random-key-stream as initial state
    * need to be 160 bits

* initial state
    * divided the state into 5 groups
    * each initial sate has 32 bits (4 bytes)

*  consume 512-bit block of message at a time

* Compression Function
    * critical step to determine if the hash function can work

* Addition in SHA
    * without overflow
        * max 2^3, 8 === 0
    * the reason that SHA1 hash can't be reverse
        * it will be some data lost in compression function
        * it is okay, because the SHA is not for encryption so there is no need to reverse it

### Padding
* example:
    * message: `1001101`
    * padding: 1000........111
    * 111 is the lenght of `1001101`
    * padded message: `1001101100.....111`
    * 512 bit long

### Steps

* main flow
    1. Took 512 bits of data from (message)
        * if message is not long enough, pad it
    2. Put message block + internal states in Compression Function
    3. generates the hash

* Compress Function
    1. has initial state H0, H1, H2, H3, H4 (pseudo-random-key)
    2. mix initial state with message block (80 rounds)
    3. generate tmp state (A,B,C,D,E)
    4. sum the tmp state and initial state to get the new internal state
        * (A,B,C,D,E) + (H0,H1,H2,H3,H4) -> (H0',H1',H2',H3',H4')
    5. if you have some message left, repeat the main flow
        * the new state (H0',H1',H2',H3',H4') become the initial state
    6. if you have no message left, (H0',H1',H2',H3',H4') is the hash!!




## References
* [SHA - Mike Pound - Computerphile](https://www.youtube.com/watch?v=DMtFhACPnTY)
* [RSA v.s SHA1](https://stackoverflow.com/questions/733692/sha1-vs-rsa-whats-the-difference-between-them)
