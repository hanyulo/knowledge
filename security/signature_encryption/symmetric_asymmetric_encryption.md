## Symmetric Encryption
* two parties have same shared-secret key(SSK) (also called symmetric key)
* plaintext <-> ciphertext
* Steps
    * sender:used the SSK to encrypt the message
        * Encryption(`Hello World!!!` + SSK) -> cipher text
    * Receiver:
        * get the cipher text and decrypt it with SSK
* Problem
    * to transfer the SSK to each other we need to establish a secured connection
        * but to establish a secured connection we need a SSK
            * Woops! in a freaking loop

* Solution:
    * Asymmetric Encryption

* Note
    * there may be some mathematic properties in the algorithm can create a backdoor


## Asymmetric Encryption (Public Key cryptography)

* a person encrypt the data with key One, the encrypted data can only be decrypted by the person who has corresponding key Two.
    * choose one of the keys as public key and the other as private key
* used to enhance Diffie-Hellman
* Example
  * players
      * User A
          * generate following keys
              * Public Key A (`PBKA`)
              * Private Key A (`PIKA`)
      * User B
          * generate following keys
              * Public Key B (`PBKB`)
              * Private Key B (`PIKB`)
  * Scenario One
      * direction: UserB send data to UserA
      * goal: only A can read the data
      * steps:
          * UserB encrypt the data with `PBKA`
          * UserA decrypt the data with `PIKA`
  * Scenario Two
      * direction: UserA send data to UserB
      * goal:
          * B knows the sender is authentic UserA
          * anybody with the public can decode the message (includes hacker)
      * steps:
          * UserA encrypt the data with `PIKA` and send it to UserB
          * UserB decrypt data with `PBKA`
  * Scenario Three
      * direction: UserA send data to UserB
      * goal:
          * B knows the sender is authentic UserA
          * Only B can read the message
          * B knows the message has not been modified
              * any message modification requires keys (**how ????**)
      * steps:
          1. UserA encrypt the data with `PIKA` and get data'
          2. UserA encrypt the data' with `PBKB` and get data''
          3. UserB decrypt the data'' with `PIKB` and get data'
          4. UserB decrypt the data' with `PBKA` and get dat


### Encryption v.s Signature
* encrypt with private key -> signature
* encrypt with public key -> data integration

## Question
* how to encrypt message with key


## References
* [Robert Miles - Computerphile](https://www.youtube.com/watch?v=GSIDS_lvRv4)
* [encryption v.s signature](https://stackoverflow.com/questions/454048/what-is-the-difference-between-encrypting-and-signing-in-asymmetric-encryption)
