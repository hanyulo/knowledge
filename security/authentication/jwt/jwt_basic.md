
# JSON Web Token (JWT)
* an open standard
* define a **compact && self-contained** way for securely transmitting information between parties as a JSON object
* the info is signed so it can be verified and trusted
* encode methods (signed by) **(not encrypted)**
    1. secret (HMAC algorithm)
    2. Public/Private keys pair using RSA (or ECDSA)
* Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties.


## What is JWT for
1. Authorization
    * login system
2. Information Exchange
    * signed the data by public/private key pairs
    * make sure the sender's identity
        * github: private key at local / public key at github server to do ssh
        * When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.
    * header + payload -> black box (sign algorithm) -> signature
    * signature: verify that the content hasn't been tampered with


## JWT Structure
* base64Url String
* `Header.Payload.Signature`
    * `xxxx.yyyy.zzzz`

#### Header

* typically contain two parts
    1. type of token
    2. signing algorithm

* possible signing algorithms
    * RSA
    * HMAC---SHA-256

* header data is Base64Url encoded as first part of the JWT string
    * object -> string

```js

{
  alg: "HS256",
  type: "JWT"
}

```

#### Payload
* contains claims
    * claims
        * statements about entities
            * entities
                1. user-related data
                2. additional data

* three types of claims
    1. [registered](https://tools.ietf.org/html/rfc7519#section-4.1)
        * predefined claims
        * optional && recommended
        * three characters key is meant to be compact
        * examples
            1. `iss`: issuer
            2. `exp`: expiration time
            3. `sub`: subject
            4. `aud`: audience
    2. public
        * everyone who use the token can define it
        * name rules: [IANA JSON Web Token Registry](https://www.iana.org/assignments/jwt/jwt.xhtml)
            * can only use the name inside the table
    3. private
        * These are the custom claims created to share information between parties that agree on using them and are neither registered or public claims.

* example
  ```js

    {
    "sub": "1234567890",
    "name": "John Doe",
    "admin": true
    }
  ```

* the payload is Base64Url encoded to form second part of the JWT


#### Signature
*

## To Read/Do
* [get the handbook](https://auth0.com/resources/ebooks/jwt-handbook)


## References
* [JSON Web Token Introduction](https://jwt.io/introduction/)
