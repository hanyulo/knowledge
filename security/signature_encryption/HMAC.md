## HMAC (keyed-hash message authentication code)

#### Overview
* MAC is a methodology
    * HMAC is a type of MAC
        * feature: divide the symmetric key to two subkeys
* MAC and HMAC both need to adopt a specific hash function
    * the hash function should be **one way compression**

#### History

1. simple hash (xor) with a psuedo-random-key-stream
    * AB -> 6566(ASCII) -> 0110 0101 0110 0110(ASCII - Binary)
    * psuedo-random-key-stream: 1000 0001 1111 0000
    * 0110 0101 0110 0110 xor 1000 0001 1111 0000 -> hash
    * solved:
        * hacker may not understand the message
    * new problem: man in the middle attack
        * man who can flip any bit in hash to create totally wrong message

2. message **append** with hash
    * it is a naive approach
    * `${message}${h(message)}`
    * solved
        * Data Integrity
            * suppose hacker do not know the hash function, the receiver can know that the message hasn't been tampered with
    * new problem
        * man in the middle attack
        * man intercept the message and change the message then recompute the hash with the hash function

3. Key Hash (MAC) (Shared Secret Key)
    * names: MAC === Hash(hash result) === tag
    * authentic parties in the transmission have shared secret key
    * append the Hash(MAC) to the message(m)
    * `${message.h(k|m)}` solved:
        * User Authentication
            * the hacker intercept the message
            * can't get the shared key to produce the hash so it is better than the #2
    * problem:
        * SHA-1: now, hacker may able to resume the initial state which is shared key (a pseudo-random-key-stream)
        * initial state + SHA-1 -> create totally new hash
        * vulnerable to length extension attack

4. HMAC - SHA256 (KeyHash Message Authentication Code - specific hash function)
    * prevent length extension attack
    * a specific type of MAC
    * SHA256
        * **one way compression**
    * two keys
    * how it works
        1. divide the shared secret key to two sub-keys (k1, k2)
            * k1
                * inner key
                * constant - ipad(internal pad): 0x36
            * k2
                * outer key
                * constant - opad: 0x5c
            * how to derive k1, k2
                * xor the secret and a constant
        2. `const tmpHash = h(message|k1)`;
        3. `h(${tmpHash}${k2})`
    * result: the hacker can't derive the shared key

## Refs
* [HMAC - Michael Pound](https://www.youtube.com/watch?v=wlSG3pEiQdc)
