
## Overview

#### Players
* Alice
  * secret key (red) (a)
* Bob
  * secret key (blue) (b)
* public
  1. generator - a random number (yellow) (g)
  2. big prime number n (no color) (c)
    * analogy will no need this number, but in mathematics you need this to do modulo computation


#### Steps
1. a + g -> ag (at Alice side)
2. b + g -> bg (at Bob side)
  * ag and bg are not reversible for a, b and g
3. Alice and Bob exchange ag and bg
  * public knows: g, n, ag, bg but not a and b
4. Alice: bg + a -> bga - in private mode
5. Bob: ag + b -> agb - in private mode
  * agb === bga (shared secret key)




## References
* [DM Overview - Michael Pound](https://www.youtube.com/watch?v=NmM9HA2MQGI)
* [DM Mathematic - Michale Pound](https://www.youtube.com/watch?v=Yjrfm_oRO0w)
* [Discrete Logarithm Problem](https://www.youtube.com/watch?v=bjWOG50PfdI)
  * one way mathematic
* [Diffie-Hellman Wiki](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)
* [Modular Exponentiation](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/modular-exponentiation)
    * [Modular Exponentiation proof](https://www.neuraldump.net/2016/01/modular-exponentiation-rule-proof/)
        * [Binomial Theorem](https://www.mathsisfun.com/algebra/binomial-theorem.html)
    * [Modular Multiplication](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/modular-multiplication)
        * [quotient remainder theorem](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-quotient-remainder-theorem)


* [problems of exchanging secret key](https://www.youtube.com/watch?v=vsXMMT2CqqE&t=7s)



## Notes
* symmetric encryption is quicker
* asymmetric encryption is slower
* RSA is slower
    * only used for identity authentication
* Diffie Hellman
    * can be used in every message to generate ephemeral key (shared secret key) for each message
