
# HASH Algorithm

## Overview
* principle
    * take a big file -> turn it into small amount of numbers to verify the data integrity.
* only used for verifying the **integrity/intact** of the data after transmission between two computers.
* only used for checking sender identity
* do not use it for encryption such as password-encryption
* like check-digit of bar code
    * https://www.gs1us.org/tools/check-digit-calculator
* like checksum in Network Connection
* hash
    * summary of the file
    * is a signature


## Hash Algorithm
* three main requirements
    1. speed
        * shouldn't be too quick
            * quick is easy to break
        * shouldn't be too slow
            * no one want to use it
    2. if I change the single bit in the file (message), which should completely change the whole **hash**
    3. avoid hash collision
        * two documents have same hash (no!!!)
            * say, hacker figure out your hash algorithm
                * hacker can make a malicious document which generates the same hash as the authentic document.
        * example:
            * `md5` hash algorithm
                * outdated algorithm which has massive has collision cases
            * `SHA1`
                * outdated

## Example

#### freaking simple hash

```js

(() => {
  let strings = 'Give me 100 dollars!';
  const stringToAsciiCodesSummary = (str) => {
    let res = 0;
    for(let i of str) {
      // asciiCodes = `${asciiCodes}${i.charCodeAt(0)}`;
      res += +i.charCodeAt(0);
    }
    return res;
  }
  const res = stringToAsciiCodesSummary(strings);
  console.log('hash: ', res);
})();


```

## video
1. how that use
2. how not to be used


## How Not to store password

1. Naive
* store plain password
* problem
    * if you have security breach, the hacker can get all password directly

2. Slightly Complicated - simple key encryption
* lock/unlock the password with a key
    * use the secret key to encrypt the password
* problem
    * same password -> same encrypted string
        * hacker hacks to your database, can get those same encrypted strings -> check all those password hints to guess password

3. hash
* problem
    * simple to crack
* rainbow tables
    * have massive hash -> password datas
    * a lot of people spend times on cracking hash (to password) and record it

4. hashing and salting - best solution
* salt
    * random string of characters
    * is different to every single user
    * such as, public key / private key / shared secret key

* steps
    1. get password
    2. mix pw with salt
    3. pass it through the hash function
    4. get the unique hash
* advantage
    * each user has unique hash

* note
    * hash is one-way function
    * the only way to reverse it is brute force
    * the server will not have original password, so if user forget the password he/she can only reset its password
    * [ref](https://security.stackexchange.com/questions/88725/is-it-possible-to-crack-hash-with-known-salt-if-yes-how)


## Refs

* [hash - Tom Scott - computerphile](https://www.youtube.com/watch?v=b4b8ktEV4Bg)
* [how not to store password - Tom Scott](https://www.youtube.com/watch?v=8ZtInClXe1Q)
