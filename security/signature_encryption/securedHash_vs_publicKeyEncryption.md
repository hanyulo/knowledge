## PublicKeyEncryption V.S HMAC/MAC (Hash)

### Comparison

* Public Key Cryptography
    * Asymmetric Encryption
        * public key: encryption -> only the person who possesses private key can decrypt the data
        * private key: encryption -> the person who has public key can know the sender is what he/she expects.
    * signature
        * signature is generated using the private key of a key pair **how??**
            * only person who has private key can generate the signature with message
        * prerequisite
            * recipient must be sure the public key belongs sender who has private key
    * purpose
        * Integrity
            * data
        * authentication
            * sender
        * non-repudiation
            * receiver can't not impersonate sender and send the data (send by sender) to third-party. The third-party will know data is from original sender (because of private key)
    * speed
        * slow
            * used for shared secret key exchange or non-repudiation
    * examples
        1. RSA
            * digital signatures
            * asymmetric encryption
        2. Diffie-Hellman
            * used for exchange shared secret key
* MAC (Message Authentication Code)
    * Hash Methodology with Symmetric Key
    * Message Authentication Code
        * no non-repudiation
            * any user who can verify a MAC is also capable of generating MACs for other messages (person who has shared-secret-key)
        * MAC values are both generated and verified using the same secret key + hash function(SHA256)
            * sender and receiver must agree on the shared-secret-key before initiating communications
        * prerequisite
            * recipient must be confident that the shared symmetric key has only been shared with the sender
    * purpose
        * Integrity
            * data
        * authentication
            * sender
    * speed
        * quick
    * example
        * MAC
        * HMAC + SHA256

### Hash v.s MAC v.s Digital Signature

|     |  Hash (append)  |  MAC  |  Digital Signature  |
| --- | :---: | :---: | :---: |
| Integrity  |  V  |  V  |  V  |
| Authentication  |  X  |  V  |  V  |
| non-repudiation  |  X  |  X  |  V  |
| Key  |  X  |  Symmetric Key  |  Asymmetric Key |


## RSA



## RSA SHA256 - HMAC SHA256

* why RSA + SHA 256
    * RSA encryption is slow (a lot of mathematics)
    * use RSA to exchange shared secret key
    * encrypt the message with shared secret key
        * quicker

* Saleforces RSA SHA256 over HMAC SHA256
    * non-repudiation
        * so employees can't obtain client's key


* refs
    * [RSA SHA256 v.s HMAC SHA256](https://crypto.stackexchange.com/questions/11293/hmac-sha256-vs-rsa-sha256-which-one-to-use)
    * [RSA + SHA256](https://security.stackexchange.com/questions/9260/sha-rsa-and-the-relation-between-them)

## Note
* authentication
    * check data is authentic
* authorization
    * grant access to user


## Question
* how RSA generate signature

## References
* [RSA v.s SHA1](https://stackoverflow.com/questions/733692/sha1-vs-rsa-whats-the-difference-between-them)
* [Message Authentication Code](https://en.wikipedia.org/wiki/Message_authentication_code)
* [Difference between digital signature, MAC, hash](https://crypto.stackexchange.com/questions/5646/what-are-the-differences-between-a-digital-signature-a-mac-and-a-hash)
* [HMAC](https://en.wikipedia.org/wiki/HMAC)
