# Secure Shell (SSH)

## History
* before SSH, we use telnet, rlogin, remote shell (RSH)
  * These protocols do not have any encryption so they are not secured. Eventually, they are replaced by SSH
  * packet sniffer can read those transmitting data.
  * at first they should be fine because those are for organization-internal usage originally.

## Vague Overview
* is s cryptographic network protocol
* party
  1. SSH Client
  2. SSH Server
* standard port for SSH: 22
* typical application
  * remote command-line

## overview
* SSH is invoked by client to sever
* create telnet/FTP connection between client and server
*

## Encryption
* Symmetric Encryption
  * overview
    * has only one key
    * same key to encrypt and decrypt the data
  * purpose
    * encrypt the connection
  * secret key
    * created by both client and server
    * created through key exchange algorithm
  * disadvantage
    * all parties involved have to exchange keys before sending and receiving data.
  *
* Asymmetric Encryption
  * purpose:
    * authentication
  * keys
    * two types of key
      * public key
        * encode plain texts
      * private key
        * decode encoded texts
        * the key should be held entirely privately
    * The mathematical relationship between the public key and the private key allows the public key to encrypt messages that can only be decrypted by the private key. This is a one-way ability, meaning that the public key has no ability to decrypt the messages it writes, nor can it decrypt anything the private key may send it.
  *
* Hashes



## RSA
* http://www.ruanyifeng.com/blog/2013/07/rsa_algorithm_part_two.html


## References
[How SSH Works](https://www.youtube.com/watch?v=ORcvSkgdA58)
[Symmetric V.S. Asymmetric](https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences)
[Symmetric, Asymmetric, Hashes](https://www.digitalocean.com/community/tutorials/understanding-the-ssh-encryption-and-connection-process)
